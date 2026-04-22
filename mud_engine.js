// ============================================================
// MUDD-LITE STATION — Game Engine
// ============================================================
const MUD = {

  // --- Game State ---
  state: {
    currentRoom: null,
    flags: {},          // persistent flags like "med_droid_intro"
    inventory: [],      // { id, name, description }
    credits: 0,
    character: null,
    history: [],        // command history for up/down arrow
    historyIdx: -1,
    started: false,
    ticks: 0,           // total room moves — drives respawn timers
    defeatedNpcs: {},   // { "roomId:npcId": tickWhenDefeated }
    lootedNpcs: {},     // { "roomId:npcId": tickWhenLooted } — resets on respawn
    killCounts: {},     // { "roomId:npcId": totalKills } — for CP diminishing returns
    mineVeins: {},      // { veinId: { mined: #, lastMinedTick: #, depletedTick: # } }
    spiderRoom: 'deep_vein_1', // current cave spider location
    blockedRooms: {}    // { roomId: tickWhenBlocked } — collapsed rooms, clear after 25 ticks
  },

  SAVE_KEY: 'muddLiteStation_save',

  // --- Formatting helpers ---
  // Convert {tag}text{/tag} markup to styled spans
  formatText(text) {
    return text
      .replace(/\{gold\}([\s\S]*?)\{\/gold\}/g, '<span style="color:var(--gold)">$1</span>')
      .replace(/\{dim\}([\s\S]*?)\{\/dim\}/g, '<span style="color:#556">$1</span>')
      .replace(/\{npc\}([\s\S]*?)\{\/npc\}/g, '<span style="color:#5bf">$1</span>')
      .replace(/\{red\}([\s\S]*?)\{\/red\}/g, '<span style="color:#f66">$1</span>')
      .replace(/\{green\}([\s\S]*?)\{\/green\}/g, '<span style="color:#6f6">$1</span>')
      .replace(/\{item\}([\s\S]*?)\{\/item\}/g, '<span style="color:#fc6">$1</span>')
      .replace(/\n/g, '<br>');
  },

  // --- Output ---
  print(text, style) {
    const el = document.getElementById('mud-output');
    if (!el) return;
    const div = document.createElement('div');
    div.style.marginBottom = '4px';
    if (style === 'command') {
      div.style.color = '#8a8';
      div.innerHTML = '<span style="color:#686">&gt; </span>' + this.escapeHtml(text);
    } else if (style === 'error') {
      div.style.color = '#f66';
      div.innerHTML = this.formatText(text);
    } else if (style === 'system') {
      div.style.color = '#888';
      div.style.fontStyle = 'italic';
      div.innerHTML = this.formatText(text);
    } else {
      div.innerHTML = this.formatText(text);
    }
    el.appendChild(div);
    el.scrollTop = el.scrollHeight;
  },

  printBlank() {
    this.print('', 'normal');
  },

  escapeHtml(str) {
    const d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
  },

  clearScreen() {
    const el = document.getElementById('mud-output');
    if (el) el.innerHTML = '';
  },

  // --- Room Display ---
  displayRoom(roomId) {
    const room = ROOMS_DATA[roomId];
    if (!room) { this.print('ERROR: Room not found: ' + roomId, 'error'); return; }

    this.printBlank();
    this.print('{gold}[ ' + room.name + ' ]{/gold}');

    // Hard mode strips interactive keyword hints
    let desc = room.description;
    if (this.state.character && this.state.character.hardMode) {
      desc = desc.replace(/\{item\}([\s\S]*?)\{\/item\}/g, '$1');
      desc = desc.replace(/\{npc\}([\s\S]*?)\{\/npc\}/g, '$1');
    }
    this.print(desc);

    // Show exits
    const exits = Object.keys(room.exits || {});
    if (exits.length) {
      this.print('{dim}Exits: ' + exits.join(', ') + '{/dim}');
    }

    // Show NPCs present — active and defeated
    const npcKeys = Object.keys(room.npcs || {});
    const active = npcKeys.filter(k => !this.isNpcDefeated(roomId, k));
    const down = npcKeys.filter(k => this.isNpcDefeated(roomId, k));
    if (active.length) {
      const names = active.map(k => room.npcs[k].name);
      this.print('{dim}You see: ' + names.join(', ') + '{/dim}');
    }
    if (down.length) {
      const names = down.map(k => room.npcs[k].name);
      this.print('{red}Unconscious: ' + names.join(', ') + '{/red}');
    }
  },

  // --- Movement ---
  moveTo(roomId) {
    if (!ROOMS_DATA[roomId]) {
      this.print("You can't go that way.", 'error');
      return false;
    }
    // Combat check — can't just walk away from a fight (unless fleeing)
    if (MUD_COMBAT.active) {
      this.print("You're in combat! Type {green}flee{/green} to disengage.", 'error');
      return false;
    }
    // Blocked room check (cave-in)
    const blockedTick = this.state.blockedRooms[roomId];
    if (blockedTick != null && (this.state.ticks - blockedTick) < 25) {
      this.print('{red}The passage is blocked by rubble from a cave-in. It will take time to clear.{/red}');
      return false;
    } else if (blockedTick != null) {
      delete this.state.blockedRooms[roomId]; // cleared
    }
    this.state.ticks++;
    this.state.currentRoom = roomId;
    MUD_MINE.moveSpider(); // spider patrols on every tick
    MUD_MINE.checkSpiderEncounter(roomId); // check if player walked into spider
    this.displayRoom(roomId);
    this.autoSave();
    return true;
  },

  // Check if an NPC is currently defeated (not yet respawned)
  isNpcDefeated(roomId, npcId) {
    const key = roomId + ':' + npcId;
    const defeatTick = this.state.defeatedNpcs[key];
    if (defeatTick == null) return false;
    return (this.state.ticks - defeatTick) < 25; // respawn after 25 ticks
  },

  // --- Direction aliases ---
  DIR_MAP: {
    'n': 'north', 'north': 'north',
    's': 'south', 'south': 'south',
    'e': 'east',  'east': 'east',
    'w': 'west',  'west': 'west',
    'ne': 'northeast', 'northeast': 'northeast',
    'nw': 'northwest', 'northwest': 'northwest',
    'se': 'southeast', 'southeast': 'southeast',
    'sw': 'southwest', 'southwest': 'southwest',
    'u': 'up',   'up': 'up',
    'd': 'down', 'down': 'down'
  },

  // --- NPC lookup ---
  findNpc(keyword) {
    const room = ROOMS_DATA[this.state.currentRoom];
    if (!room || !room.npcs) return null;
    const kw = keyword.toLowerCase();
    for (const [id, npc] of Object.entries(room.npcs)) {
      if (id.toLowerCase() === kw) return npc;
      if (npc.name.toLowerCase().includes(kw)) return npc;
      if (npc.keywords && npc.keywords.some(k => k === kw)) return npc;
    }
    return null;
  },

  // --- Object lookup ---
  findObject(keyword) {
    const room = ROOMS_DATA[this.state.currentRoom];
    if (!room || !room.objects) return null;
    const kw = keyword.toLowerCase();
    for (const [id, desc] of Object.entries(room.objects)) {
      if (id.toLowerCase() === kw) return { id, desc };
      if (id.toLowerCase().includes(kw)) return { id, desc };
    }
    return null;
  },

  // --- Command Parser ---
  processCommand(input) {
    // Route to character creator if active
    if (MUD_CHARGEN.phase) {
      MUD_CHARGEN.handleInput(input);
      return;
    }

    // Route to combat if active
    if (MUD_COMBAT.active) {
      MUD_COMBAT.handleInput(input);
      return;
    }

    // Route to pending sale confirmation
    if (this.pendingSale) {
      this.print(input.trim(), 'command');
      this.state.history.push(input.trim());
      if (this.state.history.length > 50) this.state.history.shift();
      this.state.historyIdx = -1;
      this.handlePendingSale(input);
      return;
    }

    const raw = input.trim();
    if (!raw) return;

    // Show the command in output
    this.print(raw, 'command');

    // Add to history
    this.state.history.push(raw);
    if (this.state.history.length > 50) this.state.history.shift();
    this.state.historyIdx = -1;

    const parts = raw.toLowerCase().split(/\s+/);
    const cmd = parts[0];
    const arg = parts.slice(1).join(' ');

    // Direction shortcut — if the command itself is a direction
    if (this.DIR_MAP[cmd] && !arg) {
      return this.doGo(this.DIR_MAP[cmd]);
    }

    switch (cmd) {
      case 'go':
      case 'move':
      case 'walk':
        return this.doGo(arg);

      case 'look':
      case 'l':
        if (arg) return this.doExamine(arg);
        return this.doLook();

      case 'examine':
      case 'x':
      case 'inspect':
        return this.doExamine(arg);

      case 'talk':
      case 'speak':
        // Handle "talk to <npc>" and "talk <npc>"
        const talkTarget = arg.replace(/^to\s+/, '');
        return this.doTalk(talkTarget);

      case 'take':
      case 'get':
      case 'grab':
      case 'pickup':
        return this.doTake(arg);

      case 'loot':
      case 'search':
        return this.doLoot(arg);

      case 'drop':
        return this.doDrop(arg);

      case 'inventory':
      case 'inv':
      case 'i':
        return this.doInventory();

      case 'help':
      case '?':
      case 'commands':
        return this.doHelp();

      // Combat initiation
      case 'blast':
      case 'shoot':
      case 'knife':
      case 'melee':
      case 'slash':
      case 'saber':
      case 'punch':
      case 'brawl':
      case 'kick':
      case 'attack':
        if (cmd === 'attack') {
          this.print('How? Use: {green}blast{/green}, {green}knife{/green}, {green}punch{/green}, or {green}saber{/green} <target>', 'error');
          return;
        }
        return MUD_COMBAT.initiate(cmd, arg);

      case 'buy':
      case 'purchase':
        return this.doBuy(arg);

      case 'sell':
        return this.doSell(arg);

      case 'bargain':
      case 'haggle':
        return this.doBargain();

      case 'gamble':
      case 'sabacc':
      case 'play':
        return this.doGamble(arg);

      case 'chance':
      case 'cubes':
        return this.doChance(arg);

      case 'wheel':
      case 'jubilee':
        return this.doWheel(arg);

      case 'use':
        return this.doUse(arg);

      case 'mine':
      case 'dig':
      case 'extract':
        return MUD_MINE.doMine();

      case 'train':
      case 'learn':
        return this.doTrain(arg);

      case 'save':
        return this.doSave();

      case 'load':
        return this.doLoad();

      case 'clear':
      case 'cls':
        return this.clearScreen();

      case 'credits':
        return this.print('Credits: {gold}' + this.state.credits + '{/gold}');

      case 'status':
      case 'stats':
        return this.doStatus();

      case 'quit':
      case 'exit':
        this.print('{dim}Your progress has been auto-saved. Switch tabs to return to the toolkit.{/dim}', 'system');
        return;

      default:
        this.print("I don't understand that command. Type {gold}help{/gold} for a list of commands.", 'error');
    }
  },

  // --- Command Implementations ---

  doGo(dirInput) {
    if (!dirInput) {
      this.print('Go where? Try a direction: {gold}north, south, east, west{/gold} (or {gold}n, s, e, w{/gold})', 'error');
      return;
    }
    const dir = this.DIR_MAP[dirInput.toLowerCase()] || dirInput.toLowerCase();
    const room = ROOMS_DATA[this.state.currentRoom];
    if (!room || !room.exits || !room.exits[dir]) {
      this.print("You can't go " + dir + " from here.", 'error');
      return;
    }
    this.moveTo(room.exits[dir]);
  },

  doLook() {
    this.displayRoom(this.state.currentRoom);
  },

  doExamine(target) {
    if (!target) {
      this.print('Examine what?', 'error');
      return;
    }

    // Check NPCs first
    const npc = this.findNpc(target);
    if (npc) {
      this.print(npc.look || npc.name + ' stands here.');
      return;
    }

    // Check room objects
    const obj = this.findObject(target);
    if (obj) {
      this.print(obj.desc);
      return;
    }

    // Check inventory
    const invItem = this.state.inventory.find(it =>
      it.name.toLowerCase().includes(target.toLowerCase()) ||
      it.id.toLowerCase() === target.toLowerCase()
    );
    if (invItem) {
      this.print(invItem.description || 'Nothing special about the ' + invItem.name + '.');
      return;
    }

    this.print("You don't see anything called '" + target + "' here.", 'error');
  },

  doTalk(target) {
    if (!target) {
      this.print('Talk to whom?', 'error');
      return;
    }

    const npc = this.findNpc(target);
    if (!npc) {
      this.print("There's nobody called '" + target + "' here to talk to.", 'error');
      return;
    }

    if (!npc.talk || !npc.talk.length) {
      this.print(npc.name + " doesn't seem interested in conversation.");
      return;
    }

    // Find the appropriate dialogue line
    for (const line of npc.talk) {
      // Conditional line — only show if flag is set
      if (line.cond) {
        if (!this.state.flags[line.cond]) continue;
        this.printBlank();
        this.print(line.text);
        if (line.action) this.handleDialogueAction(line.action);
        return;
      }
      // Once-only line — plays once, then sets a flag
      if (line.once) {
        if (!this.state.flags[line.once]) {
          this.state.flags[line.once] = true;
          this.printBlank();
          this.print(line.text);
          if (line.action) this.handleDialogueAction(line.action);
          this.autoSave();
          return;
        }
        continue;
      }
      // Default dialogue (no condition)
      this.printBlank();
      this.print(line.text);
      if (line.action) this.handleDialogueAction(line.action);
      return;
    }

    // Fallback if all lines were once-only and already seen
    this.print(npc.name + " has nothing more to say.");
  },

  handleDialogueAction(action) {
    if (action === 'chargen' && !this.state.flags['character_created']) {
      MUD_CHARGEN.start();
    }
  },

  doTake(target) {
    if (!target) {
      this.print('Take what?', 'error');
      return;
    }
    // Placeholder — items on the ground will come with economy system
    this.print("There's nothing here you can take right now.");
  },

  doLoot(target) {
    if (!target) {
      // Auto-loot: find any lootable defeated NPC in this room
      const room = ROOMS_DATA[this.state.currentRoom];
      if (!room || !room.npcs) { this.print("Nothing to loot here.", 'error'); return; }
      const lootable = Object.keys(room.npcs).find(k =>
        this.isNpcDefeated(this.state.currentRoom, k) &&
        !this.isNpcLooted(this.state.currentRoom, k) &&
        room.npcs[k].loot
      );
      if (!lootable) { this.print("Nothing to loot here.", 'error'); return; }
      return this.lootNpc(this.state.currentRoom, lootable, room.npcs[lootable]);
    }

    // Find matching defeated NPC
    const room = ROOMS_DATA[this.state.currentRoom];
    if (!room || !room.npcs) { this.print("Nothing to loot here.", 'error'); return; }
    const kw = target.toLowerCase();
    const npcId = Object.keys(room.npcs).find(k => {
      const npc = room.npcs[k];
      return this.isNpcDefeated(this.state.currentRoom, k) &&
        (k.toLowerCase().includes(kw) || npc.name.toLowerCase().includes(kw) ||
        (npc.keywords && npc.keywords.some(w => w === kw)));
    });

    if (!npcId) {
      this.print("There's nobody unconscious here matching '" + target + "' to loot.", 'error');
      return;
    }

    if (this.isNpcLooted(this.state.currentRoom, npcId)) {
      this.print("You've already searched them. Nothing left.", 'error');
      return;
    }

    const npc = room.npcs[npcId];
    if (!npc.loot) {
      this.print("You search " + npc.name + " but find nothing worth taking.");
      this.state.lootedNpcs[this.state.currentRoom + ':' + npcId] = this.state.ticks;
      this.autoSave();
      return;
    }

    this.lootNpc(this.state.currentRoom, npcId, npc);
  },

  isNpcLooted(roomId, npcId) {
    const key = roomId + ':' + npcId;
    const lootTick = this.state.lootedNpcs[key];
    if (lootTick == null) return false;
    const defeatTick = this.state.defeatedNpcs[key];
    if (defeatTick == null) return false;
    return lootTick >= defeatTick; // looted since last defeat
  },

  lootNpc(roomId, npcId, npc) {
    const key = roomId + ':' + npcId;
    this.state.lootedNpcs[key] = this.state.ticks;

    this.printBlank();
    this.print('{gold}You search ' + npc.name + '...{/gold}');

    // Credits
    if (npc.loot.credits) {
      const amt = typeof npc.loot.credits === 'object' ?
        Math.floor(Math.random() * (npc.loot.credits.max - npc.loot.credits.min + 1)) + npc.loot.credits.min :
        npc.loot.credits;
      this.state.credits += amt;
      this.print('  {gold}+' + amt + ' credits{/gold}');
    }

    // Items
    if (npc.loot.items) {
      for (const item of npc.loot.items) {
        // Check drop chance
        if (item.chance && Math.random() > item.chance) continue;
        const invItem = { id: item.id, name: item.name, description: item.description || item.name };
        if (item.damage) { invItem.damage = item.damage; invItem.combatType = item.combatType; invItem.stunOnly = item.stunOnly || false; }
        this.state.inventory.push(invItem);
        this.print('  {item}' + item.name + '{/item}');
      }
    }

    // Character points — diminishing returns
    // Base CP sets kills-per-tier. Each tier gives (base - tier#) CP.
    // e.g. base 2: tier0=2 (×2 kills), tier1=1 (×2 kills), tier2=0
    // e.g. base 3: tier0=3 (×3 kills), tier1=2 (×3 kills), tier2=1 (×3 kills), tier3=0
    if (npc.loot.cp && this.state.character) {
      const baseCp = npc.loot.cp;
      const kills = this.state.killCounts[key] || 0;
      this.state.killCounts[key] = kills + 1;

      const tier = Math.floor(kills / baseCp);
      const award = Math.max(0, baseCp - tier);

      if (award > 0) {
        this.state.character.cp = (this.state.character.cp || 0) + award;
        this.print('  {green}+' + award + ' Character Points{/green}');
      } else {
        this.print('  {dim}No Character Points — nothing left to learn from this fight.{/dim}');
      }
    }

    this.autoSave();
  },

  // --- Shop System ---
  findShop() {
    const room = ROOMS_DATA[this.state.currentRoom];
    if (!room || !room.npcs) return null;
    for (const [id, npc] of Object.entries(room.npcs)) {
      if (npc.shop && !this.isNpcDefeated(this.state.currentRoom, id)) return npc;
    }
    return null;
  },

  getSellRate() {
    // Check if bargain bonus is active
    const bt = this.state.flags['bargainTick'];
    if (bt != null && (this.state.ticks - bt) < 25) {
      return this.state.flags['bargainRate'] || 0.25;
    }
    return 0.25; // default 25%
  },

  getItemValue(item) {
    // Check if it matches a shop item to get base price
    const room = ROOMS_DATA[this.state.currentRoom];
    if (room && room.npcs) {
      for (const npc of Object.values(room.npcs)) {
        if (npc.shop && npc.shop.buy) {
          const match = npc.shop.buy.find(s => s.id === item.id || s.name.toLowerCase() === item.name.toLowerCase());
          if (match) return match.price;
        }
      }
    }
    // Quartz sells at its embedded value
    if (item.sellValue) return item.sellValue;
    // Fallback prices by type
    if (item.combatType === 'blaster') return 300;
    if (item.combatType === 'melee') return 150;
    if (item.consumable) return 50;
    return 25; // junk
  },

  doBuy(target) {
    const shop = this.findShop();
    if (!shop) { this.print("There's no shop here. Find a merchant.", 'error'); return; }
    if (!target) { this.print('Buy what? Check the {item}price list{/item} on the wall.', 'error'); return; }

    const kw = target.toLowerCase();
    const item = shop.shop.buy.find(s => s.name.toLowerCase() === kw || s.name.toLowerCase().startsWith(kw) || s.id === kw);
    if (!item) { this.print('"I don\'t have anything called \'' + target + '\'. Check the {item}price list{/item}."', 'error'); return; }

    if (this.state.credits < item.price) {
      this.print('"That\'s ' + item.price + ' credits. You\'ve got ' + this.state.credits + '. Come back when you can afford it."', 'error');
      return;
    }

    this.state.credits -= item.price;
    const invItem = { id: item.id, name: item.name, description: item.description || item.name };
    if (item.damage) { invItem.damage = item.damage; invItem.combatType = item.combatType; invItem.stunOnly = item.stunOnly || false; }
    if (item.consumable) { invItem.consumable = true; invItem.effect = item.effect; }
    this.state.inventory.push(invItem);

    this.print('{npc}' + shop.name + '{/npc} takes your credits and slides the {item}' + item.name + '{/item} across the counter.');
    this.print('{dim}-' + item.price + ' credits. Balance: ' + this.state.credits + '{/dim}');
    this.autoSave();
  },

  pendingSale: null, // { idx, item, shop, sellPrice, baseValue, pct }

  doSell(target) {
    const shop = this.findShop();
    if (!shop) { this.print("There's no shop here. Find a merchant.", 'error'); return; }
    if (!target) { this.print('Sell what? Check your {green}inventory{/green}.', 'error'); return; }

    const kw = target.toLowerCase();
    const idx = this.state.inventory.findIndex(it => it.name.toLowerCase() === kw || it.name.toLowerCase().startsWith(kw) || it.id === kw);
    if (idx === -1) { this.print("You're not carrying anything called '" + target + "'.", 'error'); return; }

    const item = this.state.inventory[idx];
    const baseValue = this.getItemValue(item);
    const rate = this.getSellRate();
    const sellPrice = Math.max(1, Math.floor(baseValue * rate));
    const pct = Math.round(rate * 100);

    this.pendingSale = { idx, item, shop, sellPrice, baseValue, pct };

    this.print('{npc}' + shop.name + '{/npc} examines the {item}' + item.name + '{/item} and nods.');
    this.print('"I\'ll give you ' + sellPrice + ' credits for that." {dim}(' + pct + '% of ' + baseValue + '){/dim}');
    this.printBlank();
    this.print('  {green}yes{/green} — accept the offer');
    this.print('  {green}no{/green}  — keep your item');
    this.print('  {green}bargain{/green} — haggle for a better rate first');
  },

  handlePendingSale(input) {
    const low = input.toLowerCase().trim();
    const sale = this.pendingSale;

    if (low === 'yes' || low === 'y') {
      this.state.inventory.splice(sale.idx, 1);
      this.state.credits += sale.sellPrice;
      this.print('{gold}+' + sale.sellPrice + ' credits. Balance: ' + this.state.credits + '{/gold}');
      this.pendingSale = null;
      this.autoSave();
    } else if (low === 'no' || low === 'n') {
      this.print('"Suit yourself." ' + sale.shop.name + ' shrugs and turns away.');
      this.pendingSale = null;
    } else if (low === 'bargain' || low === 'haggle') {
      this.pendingSale = null;
      this.doBargain();
      this.print('{dim}Try selling again with the new rate.{/dim}');
    } else {
      this.print('{green}yes{/green}, {green}no{/green}, or {green}bargain{/green}?', 'error');
    }
  },

  doBargain() {
    const shop = this.findShop();
    if (!shop) { this.print("There's nobody here to bargain with.", 'error'); return; }
    if (!this.state.character) { this.print("You need a character first.", 'error'); return; }

    // Check if already bargained recently
    const bt = this.state.flags['bargainTick'];
    if (bt != null && (this.state.ticks - bt) < 25) {
      const rate = this.state.flags['bargainRate'] || 0.25;
      this.print('"We already settled on a rate — ' + Math.round(rate * 100) + '%. Come back later if you want to renegotiate."');
      return;
    }

    // Roll player Bargain vs shopkeeper Con (or Bargain)
    const playerPips = MUD_COMBAT.getPlayerSkillPips('Bargain');
    const shopPips = 14; // Toydarian merchant — 4D+2 bargain
    const playerRoll = MUD_COMBAT.rollPips(playerPips);
    const shopRoll = MUD_COMBAT.rollPips(shopPips);
    const diff = playerRoll - shopRoll;

    this.printBlank();
    this.print('{dim}Your Bargain: {/dim}{gold}' + playerRoll + '{/gold}{dim} vs ' + shop.name + ': {/dim}{gold}' + shopRoll + '{/gold}');

    let rate;
    if (diff >= 15) {
      rate = 0.50;
      this.print('{green}' + shop.name + ' looks stunned. "You drive a hard bargain. Fifty percent. For today."{/green}');
    } else if (diff >= 10) {
      rate = 0.45;
      this.print('{green}"Fine, fine! Forty-five percent. You\'re robbing me blind."{/green}');
    } else if (diff >= 5) {
      rate = 0.40;
      this.print('{green}"Alright, forty percent. But that\'s my final offer."{/green}');
    } else if (diff >= 1) {
      rate = 0.35;
      this.print('{green}"Thirty-five percent. Fair enough for the both of us."{/green}');
    } else if (diff >= -4) {
      rate = 0.25;
      this.print('{dim}"Nice try. Standard rate — twenty-five percent. Take it or leave it."{/dim}');
    } else {
      rate = 0.20;
      this.print('{red}"Ha! You insult me with that offer. Twenty percent — and be grateful I\'m buying at all."{/red}');
    }

    this.state.flags['bargainTick'] = this.state.ticks;
    this.state.flags['bargainRate'] = rate;
    this.print('{dim}Sell rate set to ' + Math.round(rate * 100) + '% for the next 25 moves.{/dim}');
    this.autoSave();
  },

  doUse(target) {
    if (!target) { this.print('Use what?', 'error'); return; }
    const kw = target.toLowerCase();
    const idx = this.state.inventory.findIndex(it => it.name.toLowerCase().startsWith(kw) || it.id === kw);
    if (idx === -1) { this.print("You don't have anything called '" + target + "'.", 'error'); return; }

    const item = this.state.inventory[idx];
    if (!item.consumable) { this.print("You can't use the " + item.name + " that way.", 'error'); return; }

    if (item.effect === 'heal') {
      const c = this.state.character;
      if (!c) return;
      if (c.wounds === 'healthy') {
        this.print("You're not injured. No point wasting a medpac.");
        return;
      }
      const wi = MUD_COMBAT.woundIndex(c.wounds);
      c.wounds = MUD_COMBAT.WOUND_LEVELS[Math.max(0, wi - 1)];
      this.state.inventory.splice(idx, 1);
      this.print('{green}You apply the medpac. You are now: ' + MUD_COMBAT.woundLabel(c.wounds) + '{/green}');
      this.autoSave();
      return;
    }

    this.print("You're not sure how to use the " + item.name + " right now.");
  },

  // --- Training / Skill Improvement ---
  findTrainer() {
    const room = ROOMS_DATA[this.state.currentRoom];
    if (!room || !room.npcs) return null;
    for (const [id, npc] of Object.entries(room.npcs)) {
      if (npc.trainer && !this.isNpcDefeated(this.state.currentRoom, id)) return npc;
    }
    return null;
  },

  doTrain(arg) {
    if (!this.state.character) { this.print("You need a character first.", 'error'); return; }

    const trainer = this.findTrainer();
    if (!trainer) { this.print("There's nobody here who can teach you.", 'error'); return; }

    const c = this.state.character;
    const available = trainer.trainer.skills;

    if (!arg) {
      // Show trainable skills and costs
      this.printBlank();
      this.print('{gold}═══ ' + trainer.name + ' — Training ═══{/gold}');
      this.print('{dim}Your CP: {/dim}{gold}' + (c.cp || 0) + '{/gold}');
      this.printBlank();

      for (const skillName of available) {
        const def = MUD_CHARGEN.SKILLS.find(s => s.name === skillName);
        if (!def) continue;
        const currentPips = c.skills[skillName] || c.attrs[def.attr]; // attribute if no skill
        const hasSkill = !!c.skills[skillName];
        const currentDice = MUD_CHARGEN.pipsToDice(currentPips);

        if (!hasSkill) {
          // Learn new skill: 1 CP, starts at attribute+1pip
          const newVal = MUD_CHARGEN.pipsToDice(c.attrs[def.attr] + 1);
          this.print('  {item}' + skillName + '{/item}  {dim}NEW → ' + newVal + '{/dim}  {green}1 CP{/green}');
        } else {
          // Improve: cost = current number of dice
          const cost = Math.floor(currentPips / 3);
          const newVal = MUD_CHARGEN.pipsToDice(currentPips + 1);
          this.print('  {item}' + skillName + '{/item}  {dim}' + currentDice + ' → ' + newVal + '{/dim}  {green}' + cost + ' CP{/green}');
        }
      }

      this.printBlank();
      this.print('{dim}Type {/dim}{green}train <skill name>{/green}{dim} to improve a skill.{/dim}');
      return;
    }

    // Train a specific skill
    const low = arg.toLowerCase();
    const skillName = available.find(s => s.toLowerCase() === low || s.toLowerCase().startsWith(low));
    if (!skillName) {
      this.print('"I don\'t teach that. Type {green}train{/green} to see what I offer."', 'error');
      return;
    }

    const def = MUD_CHARGEN.SKILLS.find(s => s.name === skillName);
    if (!def) return;

    const hasSkill = !!c.skills[skillName];
    const currentPips = c.skills[skillName] || c.attrs[def.attr];

    let cost;
    if (!hasSkill) {
      cost = 1; // new skill with teacher
    } else {
      cost = Math.floor(currentPips / 3); // dice count
    }

    if ((c.cp || 0) < cost) {
      this.print('"You need ' + cost + ' Character Points for that. You\'ve got ' + (c.cp || 0) + '. Come back when you\'ve earned more."', 'error');
      return;
    }

    // Apply training
    c.cp -= cost;
    if (!hasSkill) {
      c.skills[skillName] = c.attrs[def.attr] + 1; // attribute + 1 pip
    } else {
      c.skills[skillName] = currentPips + 1;
    }

    const newVal = MUD_CHARGEN.pipsToDice(c.skills[skillName]);
    this.printBlank();
    this.print('{npc}' + trainer.name + '{/npc} nods approvingly.');
    this.print('{green}' + skillName + ' improved to ' + newVal + '{/green} {dim}(-' + cost + ' CP, ' + c.cp + ' remaining){/dim}');
    this.autoSave();
  },

  // --- Chance Cubes (2D6 high/low) ---
  doChance(arg) {
    if (!this.state.character) { this.print("You need a character first.", 'error'); return; }
    const room = ROOMS_DATA[this.state.currentRoom];
    if (!room || !room.npcs) { this.print("There's nowhere to gamble here.", 'error'); return; }
    let hasDealer = false;
    for (const npc of Object.values(room.npcs)) { if (npc.gambling) { hasDealer = true; break; } }
    if (!hasDealer) { this.print("There's nowhere to gamble here.", 'error'); return; }

    const parts = (arg || '').toLowerCase().split(/\s+/);
    const call = parts[0];
    const bet = parseInt(parts[1]);

    if (!call || !['high', 'low'].includes(call) || !bet) {
      this.print('{dim}Usage: {/dim}{green}chance high <bet>{/green}{dim} or {/dim}{green}chance low <bet>{/green}{dim}. Bets: 1, 5, 10, 25.{/dim}', 'error');
      return;
    }
    const validBets = [1, 5, 10, 25];
    if (!validBets.includes(bet)) { this.print('"Bets are 1, 5, 10, or 25 credits."', 'error'); return; }
    if (bet > this.state.credits) { this.print('"Not enough credits."', 'error'); return; }

    const d1 = Math.floor(Math.random() * 6) + 1;
    const d2 = Math.floor(Math.random() * 6) + 1;
    const total = d1 + d2;

    this.printBlank();
    this.print('{gold}═══ Chance Cubes ═══{/gold}');
    this.print('{dim}The cubes tumble...{/dim} {gold}' + d1 + '{/gold} + {gold}' + d2 + '{/gold} = {gold}' + total + '{/gold}  {dim}(you called ' + call + '){/dim}');

    if (total === 7) {
      this.state.credits -= bet;
      this.print('{red}Seven — house takes it. -' + bet + ' credits.{/red}');
    } else if ((call === 'high' && total >= 8) || (call === 'low' && total <= 6)) {
      this.state.credits += bet;
      this.print('{green}You win! +' + bet + ' credits.{/green}');
    } else {
      this.state.credits -= bet;
      this.print('{red}Wrong call. -' + bet + ' credits.{/red}');
    }
    this.print('{dim}Balance: ' + this.state.credits + '{/dim}');
    this.autoSave();
  },

  // --- Jubilee Wheel (4D6 roulette) ---
  doWheel(arg) {
    if (!this.state.character) { this.print("You need a character first.", 'error'); return; }
    const room = ROOMS_DATA[this.state.currentRoom];
    if (!room || !room.npcs) { this.print("There's nowhere to gamble here.", 'error'); return; }
    let hasDealer = false;
    for (const npc of Object.values(room.npcs)) { if (npc.gambling) { hasDealer = true; break; } }
    if (!hasDealer) { this.print("There's nowhere to gamble here.", 'error'); return; }

    const parts = (arg || '').toLowerCase().split(/\s+/);
    const betType = parts[0];
    const betArg = parts[1];
    const validBets = [1, 5, 10, 25];

    if (!betType) {
      this.print('{gold}Jubilee Wheel — 4D6 (range 4-24){/gold}');
      this.print('  {green}wheel number <#> <bet>{/green}  — pick exact total (pays 10:1, 14 pays 3:1)');
      this.print('  {green}wheel odd <bet>{/green}         — odd total (pays 1:1)');
      this.print('  {green}wheel even <bet>{/green}        — even total (pays 1:1)');
      this.print('  {green}wheel high <bet>{/green}        — 15-24 (pays 1:1)');
      this.print('  {green}wheel low <bet>{/green}         — 4-13 (pays 1:1)');
      this.print('  {green}wheel top <bet>{/green}         — 18-24 (pays 2:1)');
      this.print('  {green}wheel mid <bet>{/green}         — 11-17 (pays 2:1)');
      this.print('  {green}wheel bottom <bet>{/green}      — 4-10 (pays 2:1)');
      this.print('{dim}Bets: 1, 5, 10, or 25 credits.{/dim}');
      return;
    }

    // Roll 4D6
    const dice = [0,0,0,0].map(() => Math.floor(Math.random() * 6) + 1);
    const total = dice.reduce((a,b) => a + b, 0);
    const diceStr = dice.join(' + ');

    let bet, won = false, payout = 0, label = '';

    if (betType === 'number' || betType === 'num' || betType === '#') {
      const num = parseInt(betArg);
      bet = parseInt(parts[2]);
      if (!num || num < 4 || num > 24 || !bet) { this.print('{dim}Usage: {/dim}{green}wheel number <4-24> <bet>{/green}', 'error'); return; }
      if (!validBets.includes(bet)) { this.print('"Bets are 1, 5, 10, or 25."', 'error'); return; }
      if (bet > this.state.credits) { this.print('"Not enough credits."', 'error'); return; }
      label = 'number ' + num;
      if (total === num) {
        won = true;
        payout = num === 14 ? bet * 3 : bet * 10;
      }
    } else if (['odd', 'even', 'high', 'low', 'top', 'mid', 'middle', 'bottom', 'bot'].includes(betType)) {
      bet = parseInt(betArg);
      if (!bet) { this.print('{dim}Usage: {/dim}{green}wheel ' + betType + ' <bet>{/green}', 'error'); return; }
      if (!validBets.includes(bet)) { this.print('"Bets are 1, 5, 10, or 25."', 'error'); return; }
      if (bet > this.state.credits) { this.print('"Not enough credits."', 'error'); return; }
      label = betType;

      if (betType === 'odd') {
        if (total !== 14 && total % 2 === 1) { won = true; payout = bet; }
      } else if (betType === 'even') {
        if (total !== 14 && total % 2 === 0) { won = true; payout = bet; }
      } else if (betType === 'high') {
        if (total >= 15) { won = true; payout = bet; }
      } else if (betType === 'low') {
        if (total <= 13) { won = true; payout = bet; }
      } else if (betType === 'top') {
        if (total >= 18) { won = true; payout = bet * 2; }
      } else if (betType === 'mid' || betType === 'middle') {
        if (total >= 11 && total <= 17) { won = true; payout = bet * 2; }
      } else if (betType === 'bottom' || betType === 'bot') {
        if (total <= 10) { won = true; payout = bet * 2; }
      }
    } else {
      this.print('Unknown bet type. Type {green}wheel{/green} to see options.', 'error');
      return;
    }

    this.printBlank();
    this.print('{gold}═══ Jubilee Wheel ═══{/gold}');
    this.print('{dim}The wheel spins...{/dim} {gold}' + diceStr + '{/gold} = {gold}' + total + '{/gold}  {dim}(you bet ' + label + '){/dim}');

    if (won) {
      this.state.credits += payout;
      this.print('{green}Winner! +' + payout + ' credits.{/green}');
    } else {
      this.state.credits -= bet;
      if (total === 14 && ['odd','even','high','low'].includes(betType)) {
        this.print('{red}Fourteen — house number. -' + bet + ' credits.{/red}');
      } else {
        this.print('{red}No luck. -' + bet + ' credits.{/red}');
      }
    }
    this.print('{dim}Balance: ' + this.state.credits + '{/dim}');
    this.autoSave();
  },

  doGamble(arg) {
    if (!this.state.character) { this.print("You need a character first.", 'error'); return; }

    // Find a dealer NPC in the room
    const room = ROOMS_DATA[this.state.currentRoom];
    let dealerNpc = null;
    if (room && room.npcs) {
      for (const npc of Object.values(room.npcs)) {
        if (npc.gambling) { dealerNpc = npc; break; }
      }
    }
    if (!dealerNpc) { this.print("There's nobody here to gamble with.", 'error'); return; }

    const validBets = [1, 5, 10, 25];
    const bet = parseInt(arg);
    if (!bet || !validBets.includes(bet)) { this.print('"Bets are 1, 5, 10, or 25 credits."', 'error'); return; }
    if (bet > this.state.credits) { this.print('"You\'ve only got ' + this.state.credits + ' credits. Can\'t bet what you don\'t have."', 'error'); return; }

    const playerPips = MUD_COMBAT.getPlayerSkillPips('Gambling');
    const dealerPips = dealerNpc.gambling;

    const playerRoll = MUD_COMBAT.rollPips(playerPips);
    const dealerRoll = MUD_COMBAT.rollPips(dealerPips);
    const diff = playerRoll - dealerRoll;

    this.printBlank();
    this.print('{gold}═══ Sabacc Hand — ' + bet + ' credits ═══{/gold}');
    this.print('{dim}The cards are dealt...{/dim}');
    this.printBlank();

    if (diff > 5) {
      // Big win — pure sabacc
      const winnings = bet * 2;
      this.state.credits += winnings;
      this.print('{green}Pure Sabacc! The table erupts. You rake in ' + winnings + ' credits.{/green}');
      this.print('{dim}Balance: ' + this.state.credits + '{/dim}');
    } else if (diff > 0) {
      // Regular win
      this.state.credits += bet;
      this.print('{green}You win the hand! +' + bet + ' credits.{/green}');
      this.print('{dim}Balance: ' + this.state.credits + '{/dim}');
    } else if (diff === 0) {
      // Push
      this.print('{gold}Push — the hand is a draw. Your credits come back.{/gold}');
      this.print('{dim}Balance: ' + this.state.credits + '{/dim}');
    } else if (diff > -5) {
      // Regular loss
      this.state.credits -= bet;
      this.print('{red}You lose the hand. -' + bet + ' credits.{/red}');
      this.print('{dim}Balance: ' + this.state.credits + '{/dim}');
    } else {
      // Bombed out — lose double
      const loss = Math.min(bet * 2, this.state.credits);
      this.state.credits -= loss;
      this.print('{red}Bombed out! The randomizer shifts and your hand collapses. -' + loss + ' credits.{/red}');
      this.print('{dim}Balance: ' + this.state.credits + '{/dim}');
    }

    this.autoSave();
  },

  doDrop(target) {
    if (!target) {
      this.print('Drop what?', 'error');
      return;
    }
    const idx = this.state.inventory.findIndex(it =>
      it.name.toLowerCase().includes(target.toLowerCase()) ||
      it.id.toLowerCase() === target.toLowerCase()
    );
    if (idx === -1) {
      this.print("You're not carrying anything called '" + target + "'.", 'error');
      return;
    }
    const item = this.state.inventory.splice(idx, 1)[0];
    this.print('You drop the ' + item.name + '.');
    this.autoSave();
  },

  doInventory() {
    if (!this.state.inventory.length && !this.state.credits) {
      this.print("You've got nothing. Not a credit to your name, not a tool in your pocket. Just the clothes on your back — and those aren't even yours.");
      return;
    }
    let text = '{gold}Inventory:{/gold}';
    if (this.state.credits) text += '\n  Credits: {gold}' + this.state.credits + '{/gold}';
    if (this.state.inventory.length) {
      for (const item of this.state.inventory) {
        text += '\n  {item}' + item.name + '{/item}';
      }
    } else {
      text += '\n  {dim}(no items){/dim}';
    }
    this.print(text);
  },

  doStatus() {
    const c = this.state.character;
    if (!c) {
      this.print('{gold}Status:{/gold}');
      this.print('  Location: {gold}' + (ROOMS_DATA[this.state.currentRoom]?.name || 'Unknown') + '{/gold}');
      this.print('  Character: {dim}(not yet created — talk to Administrator Vylen){/dim}');
      return;
    }

    this.print('{gold}═════════════════════════════════════{/gold}');
    this.print('{gold}  ' + c.name + '{/gold}  {dim}(' + c.species + '){/dim}');
    this.print('{gold}═════════════════════════════════════{/gold}');
    this.print('  Location: {gold}' + (ROOMS_DATA[this.state.currentRoom]?.name || 'Unknown') + '{/gold}');
    this.print('  Credits:  {gold}' + this.state.credits + '{/gold}');
    this.print('  CP:       {gold}' + (c.cp || 0) + '{/gold}');
    this.print('  Wounds:   ' + (c.wounds === 'healthy' ? '{green}Healthy{/green}' : '{red}' + c.wounds + '{/red}'));
    this.printBlank();
    for (const attr of MUD_CHARGEN.ATTR_NAMES) {
      this.print('{gold}' + MUD_CHARGEN.ATTR_FULL[attr] + '{/gold}  ' + MUD_CHARGEN.pipsToDice(c.attrs[attr]));
      // Show skills under their parent attribute
      for (const [name, pips] of Object.entries(c.skills)) {
        const def = MUD_CHARGEN.SKILLS.find(s => s.name === name);
        if (def && def.attr === attr) {
          this.print('    {dim}' + name + '{/dim}  ' + MUD_CHARGEN.pipsToDice(pips));
        }
      }
    }
  },

  doHelp() {
    this.print('{gold}[ S.U.D — Commands ]{/gold}');
    this.print('');
    this.print('{gold}Movement:{/gold}');
    this.print('  {green}north{/green} / {green}n{/green}, {green}south{/green} / {green}s{/green}, {green}east{/green} / {green}e{/green}, {green}west{/green} / {green}w{/green}  — move in a direction');
    this.print('  {green}go{/green} <direction>  — same as above');
    this.print('');
    this.print('{gold}Interaction:{/gold}');
    this.print('  {green}look{/green} / {green}l{/green}  — look around the room');
    this.print('  {green}examine{/green} / {green}x{/green} <thing>  — examine something closely');
    this.print('  {green}talk{/green} <person>  — talk to someone');
    this.print('  {green}take{/green} / {green}get{/green} <item>  — pick something up');
    this.print('  {green}drop{/green} <item>  — drop an item');
    this.print('  {green}loot{/green} <body>  — search a defeated NPC');
    this.print('  {green}use{/green} <item>   — use a consumable (medpac, etc.)');
    this.print('');
    this.print('{gold}Shop (in stores):{/gold}');
    this.print('  {green}buy{/green} <item>    — purchase from shop');
    this.print('  {green}sell{/green} <item>   — sell from inventory (25% base)');
    this.print('  {green}bargain{/green}      — haggle for better sell rate');
    this.print('  {green}gamble{/green} <amt>  — play sabacc');
    this.print('  {green}chance{/green} high/low <amt> — chance cubes');
    this.print('  {green}wheel{/green} <type> <amt>  — jubilee wheel');
    this.print('  {green}mine{/green}         — extract quartz at a vein');
    this.print('  {green}train{/green}        — improve skills with a teacher');
    this.print('');
    this.print('{gold}Information:{/gold}');
    this.print('  {green}inventory{/green} / {green}i{/green}  — check your belongings');
    this.print('  {green}status{/green}  — check your current status');
    this.print('  {green}credits{/green}  — check your credit balance');
    this.print('');
    this.print('{gold}Combat:{/gold}');
    this.print('  {green}blast{/green} <target>  — attack with Blaster (vs Dodge)');
    this.print('  {green}knife{/green} <target>  — attack with Melee Combat (vs Melee Parry)');
    this.print('  {green}punch{/green} <target>  — attack with Brawling (vs Brawling Parry)');
    this.print('  {green}saber{/green} <target>  — attack with Lightsabers (vs Melee Parry)');
    this.print('  {green}flee{/green}  — attempt to disengage and run');
    this.print('  {dim}First strike is undefended. 7D+ in skill = extra attacks.{/dim}');
    this.print('');
    this.print('{gold}System:{/gold}');
    this.print('  {green}save{/green}  — save your game');
    this.print('  {green}load{/green}  — load your saved game');
    this.print('  {green}clear{/green}  — clear the screen');
    this.print('  {green}help{/green} / {green}?{/green}  — show this help');
  },

  // --- Save / Load ---
  doSave() {
    this.saveGame();
    this.print('{dim}Game saved.{/dim}', 'system');
  },

  doLoad() {
    if (this.loadGame()) {
      this.clearScreen();
      this.print('{dim}Game loaded.{/dim}', 'system');
      this.displayRoom(this.state.currentRoom);
    } else {
      this.print('No saved game found.', 'error');
    }
  },

  saveGame() {
    try {
      const save = {
        currentRoom: this.state.currentRoom,
        flags: this.state.flags,
        inventory: this.state.inventory,
        credits: this.state.credits,
        character: this.state.character,
        started: this.state.started,
        ticks: this.state.ticks,
        defeatedNpcs: this.state.defeatedNpcs,
        lootedNpcs: this.state.lootedNpcs,
        killCounts: this.state.killCounts,
        mineVeins: this.state.mineVeins,
        spiderRoom: this.state.spiderRoom,
        blockedRooms: this.state.blockedRooms
      };
      localStorage.setItem(this.SAVE_KEY, JSON.stringify(save));
      return true;
    } catch (e) {
      console.error('MUD save failed:', e);
      return false;
    }
  },

  loadGame() {
    try {
      const json = localStorage.getItem(this.SAVE_KEY);
      if (!json) return false;
      const save = JSON.parse(json);
      this.state.currentRoom = save.currentRoom;
      this.state.flags = save.flags || {};
      this.state.inventory = save.inventory || [];
      this.state.credits = save.credits || 0;
      this.state.character = save.character || null;
      this.state.started = save.started || false;
      this.state.ticks = save.ticks || 0;
      this.state.defeatedNpcs = save.defeatedNpcs || {};
      this.state.lootedNpcs = save.lootedNpcs || {};
      this.state.killCounts = save.killCounts || {};
      this.state.mineVeins = save.mineVeins || {};
      this.state.spiderRoom = save.spiderRoom || 'deep_vein_1';
      this.state.blockedRooms = save.blockedRooms || {};
      return true;
    } catch (e) {
      console.error('MUD load failed:', e);
      return false;
    }
  },

  autoSave() {
    this.saveGame();
  },

  // --- Initialization ---
  init() {
    const input = document.getElementById('mud-input');
    if (!input) return;

    // Command input handler
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const val = input.value;
        input.value = '';
        this.processCommand(val);
      }
      // Command history with up/down arrows
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (this.state.history.length) {
          if (this.state.historyIdx === -1) this.state.historyIdx = this.state.history.length;
          if (this.state.historyIdx > 0) {
            this.state.historyIdx--;
            input.value = this.state.history[this.state.historyIdx];
          }
        }
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (this.state.historyIdx >= 0) {
          this.state.historyIdx++;
          if (this.state.historyIdx < this.state.history.length) {
            input.value = this.state.history[this.state.historyIdx];
          } else {
            this.state.historyIdx = -1;
            input.value = '';
          }
        }
      }
    });

    // Focus input when clicking the terminal area
    document.getElementById('mud-screen')?.addEventListener('click', () => {
      input.focus();
    });

    // Try to load existing save
    if (this.loadGame() && this.state.started) {
      this.print("{dim}Welcome back to Drifter's Anchorage. Your previous session has been restored.{/dim}", 'system');
      this.print('{dim}Type {/dim}{green}help{/green}{dim} for commands.{/dim}', 'system');
      this.displayRoom(this.state.currentRoom);
    } else {
      this.startNewGame();
    }
  },

  startNewGame() {
    this.state.started = true;
    this.state.currentRoom = MUD_INTRO_ROOM;
    this.state.flags = {};
    this.state.inventory = [];
    this.state.credits = 0;
    this.state.character = null;

    // Print title
    this.print('{gold}═══════════════════════════════════════════════════{/gold}');
    this.print('{gold}              S . U . D{/gold}');
    this.print('{gold}         Single User Dungeon{/gold}');
    this.print('{dim}       A Star Wars D6 Text Adventure{/dim}');
    this.print('{gold}═══════════════════════════════════════════════════{/gold}');
    this.printBlank();

    // Play intro sequence
    const room = ROOMS_DATA[MUD_INTRO_ROOM];
    if (room && room.intro) {
      for (const line of room.intro) {
        this.print(line);
      }
    }

    // Display the room normally after intro
    this.displayRoom(this.state.currentRoom);
    this.print('{dim}Type {/dim}{green}help{/green}{dim} for a list of commands.{/dim}', 'system');
    this.autoSave();
  }

};

// ============================================================
// CHARACTER CREATOR
// ============================================================

const MUD_CHARGEN = {

  // Available species for the MUD
  SPECIES: ['Human', 'Wookiee', 'Mon Calamari', 'Rodian', 'Bothan', 'Sullustan', 'Trandoshan', 'Duro'],

  // All non-advanced skills from data_skills.js, curated for MUD
  SKILLS: [
    // DEX
    { name: 'Blaster', attr: 'Dex' },
    { name: 'Brawling Parry', attr: 'Dex' },
    { name: 'Dodge', attr: 'Dex' },
    { name: 'Grenade', attr: 'Dex' },
    { name: 'Heavy Weapons', attr: 'Dex' },
    { name: 'Melee Combat', attr: 'Dex' },
    { name: 'Melee Parry', attr: 'Dex' },
    { name: 'Pick Pocket', attr: 'Dex' },
    { name: 'Running', attr: 'Dex' },
    { name: 'Thrown Weapon', attr: 'Dex' },
    { name: 'Vehicle Blasters', attr: 'Dex' },
    // KNO
    { name: 'Alien Species', attr: 'Kno' },
    { name: 'Bureaucracy', attr: 'Kno' },
    { name: 'Business', attr: 'Kno' },
    { name: 'Cultures', attr: 'Kno' },
    { name: 'Intimidation', attr: 'Kno' },
    { name: 'Languages', attr: 'Kno' },
    { name: 'Law Enforcement', attr: 'Kno' },
    { name: 'Planetary Systems', attr: 'Kno' },
    { name: 'Streetwise', attr: 'Kno' },
    { name: 'Survival', attr: 'Kno' },
    { name: 'Tactics', attr: 'Kno' },
    { name: 'Value', attr: 'Kno' },
    { name: 'Willpower', attr: 'Kno' },
    // MEC
    { name: 'Astrogation', attr: 'Mec' },
    { name: 'Beast Riding', attr: 'Mec' },
    { name: 'Communications', attr: 'Mec' },
    { name: 'Ground Vehicle Operation', attr: 'Mec' },
    { name: 'Hover Vehicle Operation', attr: 'Mec' },
    { name: 'Repulsorlift Operation', attr: 'Mec' },
    { name: 'Sensors', attr: 'Mec' },
    { name: 'Space Transports', attr: 'Mec' },
    { name: 'Starfighter Piloting', attr: 'Mec' },
    { name: 'Starship Gunnery', attr: 'Mec' },
    { name: 'Starship Shields', attr: 'Mec' },
    { name: 'Swoop Operation', attr: 'Mec' },
    // PER
    { name: 'Bargain', attr: 'Per' },
    { name: 'Command', attr: 'Per' },
    { name: 'Con', attr: 'Per' },
    { name: 'Forgery', attr: 'Per' },
    { name: 'Gambling', attr: 'Per' },
    { name: 'Hide', attr: 'Per' },
    { name: 'Investigation', attr: 'Per' },
    { name: 'Persuasion', attr: 'Per' },
    { name: 'Search', attr: 'Per' },
    { name: 'Sneak', attr: 'Per' },
    // STR
    { name: 'Brawling', attr: 'Str' },
    { name: 'Climbing/Jumping', attr: 'Str' },
    { name: 'Lifting', attr: 'Str' },
    { name: 'Stamina', attr: 'Str' },
    { name: 'Swimming', attr: 'Str' },
    // TEC
    { name: 'Blaster Repair', attr: 'Tec' },
    { name: 'Computer Programming/Repair', attr: 'Tec' },
    { name: 'Demolitions', attr: 'Tec' },
    { name: 'Droid Programming', attr: 'Tec' },
    { name: 'Droid Repair', attr: 'Tec' },
    { name: 'First Aid', attr: 'Tec' },
    { name: 'Ground Vehicle Repair', attr: 'Tec' },
    { name: 'Repulsorlift Repair', attr: 'Tec' },
    { name: 'Security', attr: 'Tec' },
    { name: 'Space Transports Repair', attr: 'Tec' },
    { name: 'Starship Weapon Repair', attr: 'Tec' }
  ],

  ATTR_NAMES: ['Dex', 'Kno', 'Mec', 'Per', 'Str', 'Tec'],
  ATTR_FULL: { Dex: 'DEXTERITY', Kno: 'KNOWLEDGE', Mec: 'MECHANICAL', Per: 'PERCEPTION', Str: 'STRENGTH', Tec: 'TECHNICAL' },

  // State during creation
  phase: null,   // 'species', 'attributes', 'skills', 'hardmode', 'name', 'confirm'
  species: null,
  attrs: {},     // { Dex: pipValue, Kno: pipValue, ... }
  attrMins: {},
  attrMaxs: {},
  totalPips: 0,
  spentPips: 0,
  skills: [],
  hardMode: false,
  charName: '',
  state_confirmDone: false,

  // --- Dice <-> Pip conversion ---
  diceToPips(diceStr) {
    const m = String(diceStr).match(/(\d+)D?(?:\+(\d))?/i);
    if (!m) return 0;
    return parseInt(m[1]) * 3 + (parseInt(m[2]) || 0);
  },

  pipsToDice(pips) {
    const d = Math.floor(pips / 3);
    const r = pips % 3;
    if (r === 0) return d + 'D';
    return d + 'D+' + r;
  },

  // --- Start character creation ---
  start() {
    this.phase = 'species';
    this.species = null;
    this.attrs = {};
    this.attrMins = {};
    this.attrMaxs = {};
    this.skills = [];
    this.hardMode = false;
    this.charName = '';
    this.state_confirmDone = false;

    MUD.printBlank();
    MUD.print('{gold}═══════════════════════════════════════════════════{/gold}');
    MUD.print('{gold}            CHARACTER REGISTRATION{/gold}');
    MUD.print('{gold}═══════════════════════════════════════════════════{/gold}');
    MUD.printBlank();
    MUD.print('{npc}Administrator Vylen{/npc} slides a datapad across the desk.');
    MUD.printBlank();
    MUD.print('"Let\'s start with the basics. What species are you?"');
    MUD.printBlank();

    for (let i = 0; i < this.SPECIES.length; i++) {
      const sp = this.SPECIES[i];
      const race = RACES_DATA[sp];
      const specAb = race && race.SpecAb ? race.SpecAb[0] : '';
      const brief = specAb ? specAb.split('.')[0] + '.' : '';
      MUD.print('  {green}' + (i + 1) + '{/green}. {gold}' + sp + '{/gold}' + (brief ? ' — {dim}' + brief + '{/dim}' : ''));
    }

    MUD.printBlank();
    MUD.print('{dim}Type a number (1-' + this.SPECIES.length + ') or the species name.{/dim}');
  },

  // --- Process input during chargen ---
  handleInput(input) {
    const raw = input.trim();
    if (!raw) return;

    MUD.print(raw, 'command');
    MUD.state.history.push(raw);
    if (MUD.state.history.length > 50) MUD.state.history.shift();
    MUD.state.historyIdx = -1;

    switch (this.phase) {
      case 'species': return this.handleSpecies(raw);
      case 'attributes': return this.handleAttributes(raw);
      case 'skills': return this.handleSkills(raw);
      case 'hardmode': return this.handleHardMode(raw);
      case 'name': return this.handleName(raw);
      case 'confirm': return this.handleConfirm(raw);
    }
  },

  // --- Phase: Species Selection ---
  handleSpecies(input) {
    const num = parseInt(input);
    let species = null;

    if (num >= 1 && num <= this.SPECIES.length) {
      species = this.SPECIES[num - 1];
    } else {
      const low = input.toLowerCase();
      species = this.SPECIES.find(s => s.toLowerCase() === low || s.toLowerCase().startsWith(low));
    }

    if (!species) {
      MUD.print('"I don\'t recognize that species. Try again — pick a number or name from the list."', 'error');
      return;
    }

    this.species = species;
    const race = RACES_DATA[species];

    // Calculate pip budget
    const basePips = this.diceToPips(race.baseDice);
    this.totalPips = basePips + 18; // +6D hero bonus = +18 pips

    // Set mins/maxes from race data
    for (const attr of this.ATTR_NAMES) {
      const vals = race[attr];
      this.attrMins[attr] = this.diceToPips(vals[0]);
      this.attrMaxs[attr] = this.diceToPips(vals[vals.length - 1]);
      this.attrs[attr] = this.attrMins[attr]; // start at minimum
    }

    this.spentPips = Object.values(this.attrs).reduce((a, b) => a + b, 0);

    MUD.printBlank();
    MUD.print('{npc}Administrator Vylen{/npc} nods. "{gold}' + species + '{/gold}. Very well."');
    MUD.printBlank();
    MUD.print('"Now I need to assess your capabilities. You have {gold}' + this.pipsToDice(this.totalPips) + '{/gold} total to distribute across your six attributes."');
    MUD.printBlank();

    this.phase = 'attributes';
    this.showAttributeStatus();
    MUD.print('{dim}Commands: {/dim}{green}set <attr> <dice>{/green}{dim} (e.g. "set dex 3d+2"), {/dim}{green}done{/green}{dim} when finished.{/dim}');
    MUD.print('{dim}Shorthand: dex, kno, mec, per, str, tec. Also: {/dim}{green}reset{/green}{dim}, {/dim}{green}status{/green}');
  },

  showAttributeStatus() {
    const remaining = this.totalPips - this.spentPips;
    MUD.print('{gold}Remaining: ' + this.pipsToDice(remaining) + ' (' + remaining + ' pips){/gold}');
    MUD.printBlank();
    for (const attr of this.ATTR_NAMES) {
      const cur = this.pipsToDice(this.attrs[attr]);
      const min = this.pipsToDice(this.attrMins[attr]);
      const max = this.pipsToDice(this.attrMaxs[attr]);
      const full = this.ATTR_FULL[attr];
      const isMin = this.attrs[attr] === this.attrMins[attr];
      MUD.print('  ' + (isMin ? '{dim}' : '{green}') + full.padEnd(12) + ' ' + cur.padEnd(5) + (isMin ? '{/dim}' : '{/green}') + '  {dim}(' + min + ' – ' + max + '){/dim}');
    }
    MUD.printBlank();
  },

  // --- Phase: Attribute Distribution ---
  handleAttributes(input) {
    const low = input.toLowerCase().trim();

    if (low === 'done') {
      const remaining = this.totalPips - this.spentPips;
      if (remaining > 0 && !this.state_confirmDone) {
        MUD.print('"You still have {gold}' + this.pipsToDice(remaining) + '{/gold} unassigned. Type {green}done{/green} again to confirm, or keep assigning."');
        this.state_confirmDone = true;
        return;
      }
      this.state_confirmDone = false;
      this.phase = 'skills';
      this.showSkillSelection();
      return;
    }

    this.state_confirmDone = false;

    if (low === 'status' || low === 'show') {
      this.showAttributeStatus();
      return;
    }

    if (low === 'reset') {
      for (const attr of this.ATTR_NAMES) {
        this.attrs[attr] = this.attrMins[attr];
      }
      this.spentPips = Object.values(this.attrs).reduce((a, b) => a + b, 0);
      MUD.print('{dim}All attributes reset to minimums.{/dim}', 'system');
      this.showAttributeStatus();
      return;
    }

    // Parse "set dex 3d+2" or "dex 3d+2" or "dex 3d"
    const cleaned = low.replace(/^set\s+/, '');
    const m = cleaned.match(/^(\w+)\s+(\d+d?\+?\d*)/i);
    if (!m) {
      MUD.print('{dim}Format: {/dim}{green}set dex 3d+2{/green}{dim} — or: {/dim}{green}status{/green}{dim} / {/dim}{green}reset{/green}{dim} / {/dim}{green}done{/green}', 'error');
      return;
    }

    const attrInput = m[1].toLowerCase();
    const attrMap = { dex: 'Dex', dexterity: 'Dex', kno: 'Kno', knowledge: 'Kno', mec: 'Mec', mechanical: 'Mec', per: 'Per', perception: 'Per', str: 'Str', strength: 'Str', tec: 'Tec', technical: 'Tec' };
    const attr = attrMap[attrInput];

    if (!attr) {
      MUD.print('"I don\'t recognize that attribute. Use: dex, kno, mec, per, str, or tec."', 'error');
      return;
    }

    const diceMatch = m[2].match(/(\d+)d?(?:\+(\d))?/i);
    if (!diceMatch) {
      MUD.print('Invalid dice format. Use format like 3D+2, 3D, 2D+1.', 'error');
      return;
    }
    const targetVal = parseInt(diceMatch[1]) * 3 + (parseInt(diceMatch[2]) || 0);

    if (targetVal < this.attrMins[attr]) {
      MUD.print('"Below minimum. ' + this.ATTR_FULL[attr] + ' must be at least {gold}' + this.pipsToDice(this.attrMins[attr]) + '{/gold}."', 'error');
      return;
    }

    if (targetVal > this.attrMaxs[attr]) {
      MUD.print('"Exceeds maximum. ' + this.ATTR_FULL[attr] + ' can\'t go above {gold}' + this.pipsToDice(this.attrMaxs[attr]) + '{/gold}."', 'error');
      return;
    }

    const oldVal = this.attrs[attr];
    const diff = targetVal - oldVal;
    const remaining = this.totalPips - this.spentPips;

    if (diff > remaining) {
      MUD.print('"Only {gold}' + this.pipsToDice(remaining) + '{/gold} left. That change needs ' + this.pipsToDice(diff) + '."', 'error');
      return;
    }

    this.attrs[attr] = targetVal;
    this.spentPips += diff;

    MUD.print('{green}' + this.ATTR_FULL[attr] + ' set to ' + this.pipsToDice(targetVal) + '{/green}');
    this.showAttributeStatus();
  },

  // --- Phase: Skill Selection ---
  showSkillSelection() {
    const remaining = 7 - this.skills.length;
    MUD.printBlank();
    MUD.print('{npc}Administrator Vylen{/npc} scrolls to the next section.');
    MUD.printBlank();
    MUD.print('"Select {gold}7 skills{/gold} you\'re proficient in. Each starts at 1D above its parent attribute."');
    MUD.printBlank();

    for (const attr of this.ATTR_NAMES) {
      const attrSkills = this.SKILLS.filter(s => s.attr === attr);
      const attrVal = this.pipsToDice(this.attrs[attr]);
      const skillVal = this.pipsToDice(this.attrs[attr] + 3);
      MUD.print('{gold}' + this.ATTR_FULL[attr] + ' (' + attrVal + ' → skill at ' + skillVal + '){/gold}');
      for (const s of attrSkills) {
        const picked = this.skills.includes(s.name);
        if (picked) {
          MUD.print('  {green}✓ ' + s.name + '{/green}');
        } else {
          MUD.print('  {dim}•{/dim} {item}' + s.name + '{/item}');
        }
      }
    }

    MUD.printBlank();
    MUD.print('{dim}' + remaining + ' pick' + (remaining !== 1 ? 's' : '') + ' remaining. Type a skill name to select. {/dim}{green}remove <skill>{/green}{dim} to deselect. {/dim}{green}done{/green}{dim} when finished.{/dim}');
  },

  handleSkills(input) {
    const low = input.toLowerCase().trim();

    if (low === 'done') {
      if (this.skills.length < 7) {
        MUD.print('"You still have ' + (7 - this.skills.length) + ' pick' + (7 - this.skills.length !== 1 ? 's' : '') + ' remaining."', 'error');
        return;
      }
      this.phase = 'hardmode';
      this.showHardMode();
      return;
    }

    if (low === 'status' || low === 'show' || low === 'list') {
      this.showSkillSelection();
      return;
    }

    if (low.startsWith('remove ') || low.startsWith('drop ')) {
      const skillName = low.replace(/^(remove|drop)\s+/, '');
      const idx = this.skills.findIndex(s => s.toLowerCase() === skillName || s.toLowerCase().startsWith(skillName));
      if (idx === -1) {
        MUD.print("You haven't picked that skill.", 'error');
        return;
      }
      const removed = this.skills.splice(idx, 1)[0];
      MUD.print('{dim}Removed: ' + removed + '. ' + (7 - this.skills.length) + ' picks remaining.{/dim}', 'system');
      return;
    }

    if (this.skills.length >= 7) {
      MUD.print('"Already at 7 skills. {green}remove <skill>{/green} to swap, or {green}done{/green} to continue."', 'error');
      return;
    }

    // Find matching skill — exact first, then prefix
    let match = this.SKILLS.find(s => s.name.toLowerCase() === low);
    if (!match) match = this.SKILLS.find(s => s.name.toLowerCase().startsWith(low));
    if (!match) {
      MUD.print('"I don\'t see that skill on the list. Check the spelling."', 'error');
      return;
    }

    if (this.skills.includes(match.name)) {
      MUD.print('"You\'ve already picked ' + match.name + '."', 'error');
      return;
    }

    this.skills.push(match.name);
    const skillVal = this.pipsToDice(this.attrs[match.attr] + 3);
    MUD.print('{green}✓ ' + match.name + ' (' + skillVal + '){/green}  {dim}— ' + (7 - this.skills.length) + ' remaining{/dim}');

    if (this.skills.length === 7) {
      MUD.print('{dim}All 7 skills selected. Type {/dim}{green}done{/green}{dim} to continue or {/dim}{green}remove <skill>{/green}{dim} to swap.{/dim}');
    }
  },

  // --- Phase: Hard Mode ---
  showHardMode() {
    MUD.printBlank();
    MUD.print('{npc}Administrator Vylen{/npc} leans back, studying you.');
    MUD.printBlank();
    MUD.print('"One more thing. Station terminals can highlight interactive elements — objects to examine, people to talk to. Some residents prefer to figure things out themselves."');
    MUD.printBlank();
    MUD.print('"Do you want {gold}keyword highlighting{/gold} in room descriptions?"');
    MUD.print('  {green}yes{/green} — color-coded hints {dim}(recommended){/dim}');
    MUD.print('  {green}no{/green}  — hard mode, no hints');
  },

  handleHardMode(input) {
    const low = input.toLowerCase().trim();
    if (low === 'yes' || low === 'y') {
      this.hardMode = false;
      MUD.print('{dim}Keyword highlighting enabled.{/dim}', 'system');
    } else if (low === 'no' || low === 'n') {
      this.hardMode = true;
      MUD.print('{dim}Hard mode — no hints. Good luck.{/dim}', 'system');
    } else {
      MUD.print('{green}yes{/green} or {green}no{/green}?', 'error');
      return;
    }
    this.phase = 'name';
    this.showNamePrompt();
  },

  // --- Phase: Name ---
  showNamePrompt() {
    MUD.printBlank();
    MUD.print('{npc}Administrator Vylen{/npc} positions her fingers over the keyboard.');
    MUD.printBlank();
    MUD.print('"And what name should I register you under?"');
    MUD.print('{dim}Type your character\'s name.{/dim}');
  },

  handleName(input) {
    const name = input.trim();
    if (name.length < 2) {
      MUD.print('"That\'s not really a name. Try again."', 'error');
      return;
    }
    if (name.length > 30) {
      MUD.print('"Let\'s keep it under 30 characters."', 'error');
      return;
    }
    this.charName = name;
    this.phase = 'confirm';
    this.showConfirmation();
  },

  // --- Phase: Confirmation ---
  showConfirmation() {
    MUD.printBlank();
    MUD.print('{gold}═══════════════════════════════════════════════════{/gold}');
    MUD.print('{gold}            REGISTRATION SUMMARY{/gold}');
    MUD.print('{gold}═══════════════════════════════════════════════════{/gold}');
    MUD.printBlank();
    MUD.print('  Name:    {gold}' + this.charName + '{/gold}');
    MUD.print('  Species: {gold}' + this.species + '{/gold}');
    MUD.print('  Mode:    ' + (this.hardMode ? '{red}Hard Mode{/red}' : '{green}Standard{/green}'));
    MUD.printBlank();
    MUD.print('{gold}Attributes:{/gold}');
    for (const attr of this.ATTR_NAMES) {
      MUD.print('  ' + this.ATTR_FULL[attr].padEnd(12) + ' {green}' + this.pipsToDice(this.attrs[attr]) + '{/green}');
    }
    MUD.printBlank();
    MUD.print('{gold}Skills ({/gold}{green}+1D{/green}{gold} above attribute):{/gold}');
    for (const skill of this.skills) {
      const def = this.SKILLS.find(s => s.name === skill);
      const val = this.pipsToDice(this.attrs[def.attr] + 3);
      MUD.print('  {green}' + skill + '{/green} {dim}' + val + '{/dim}');
    }
    MUD.printBlank();
    MUD.print('{npc}Administrator Vylen{/npc}: "Does everything look correct?"');
    MUD.print('  {green}yes{/green} — confirm and begin');
    MUD.print('  {green}no{/green}  — start over');
  },

  handleConfirm(input) {
    const low = input.toLowerCase().trim();
    if (low === 'yes' || low === 'y') {
      this.finalize();
    } else if (low === 'no' || low === 'n') {
      MUD.print('{dim}Starting over...{/dim}', 'system');
      this.start();
    } else {
      MUD.print('{green}yes{/green} or {green}no{/green}?', 'error');
    }
  },

  // --- Finalize character ---
  finalize() {
    const skills = {};
    for (const skill of this.skills) {
      const def = this.SKILLS.find(s => s.name === skill);
      skills[skill] = this.attrs[def.attr] + 3; // stored as pips
    }

    MUD.state.character = {
      name: this.charName,
      species: this.species,
      attrs: { ...this.attrs },
      skills: skills,
      wounds: 'healthy',
      hardMode: this.hardMode,
      cp: 5  // starting character points
    };

    this.phase = null;
    MUD.state.flags['character_created'] = true;

    MUD.printBlank();
    MUD.print('{npc}Administrator Vylen{/npc} taps a final key and a chime sounds.');
    MUD.printBlank();
    MUD.print('"Registration complete. Welcome to Drifter\'s Anchorage, {gold}' + this.charName + '{/gold}."');
    MUD.print('She slides a thin plascard across the desk — your station pass.');
    MUD.printBlank();
    MUD.print('"You\'re free to move about the station. I\'d suggest the cantina — Grek usually knows who\'s hiring. And the docking bay if you want to dream about your own ship."');
    MUD.printBlank();
    MUD.print('{dim}Character saved. Check stats anytime with {/dim}{green}status{/green}{dim}.{/dim}');

    MUD.autoSave();
  }
};

// ============================================================
// COMBAT ENGINE
// ============================================================

const MUD_COMBAT = {

  active: false,
  enemies: [],        // [{ id, name, combat, wounds, stunTurns }]
  round: 0,
  playerActedThisRound: false,
  securityCalled: false,
  securityArriveRound: 0,

  // Attack type → skill / defense mapping
  ATTACK_TYPES: {
    blast:  { skill: 'Blaster',       defense: 'dodge',     attr: 'Dex', type: 'ranged',  verb: 'shoots at',  weaponKey: 'blaster' },
    shoot:  { skill: 'Blaster',       defense: 'dodge',     attr: 'Dex', type: 'ranged',  verb: 'shoots at',  weaponKey: 'blaster' },
    knife:  { skill: 'Melee Combat',  defense: 'meleeParry', attr: 'Dex', type: 'melee',  verb: 'slashes at', weaponKey: 'melee' },
    melee:  { skill: 'Melee Combat',  defense: 'meleeParry', attr: 'Dex', type: 'melee',  verb: 'strikes at', weaponKey: 'melee' },
    slash:  { skill: 'Melee Combat',  defense: 'meleeParry', attr: 'Dex', type: 'melee',  verb: 'slashes at', weaponKey: 'melee' },
    saber:  { skill: 'Lightsabers',   defense: 'meleeParry', attr: 'Dex', type: 'melee',  verb: 'swings at',  weaponKey: 'saber' },
    punch:  { skill: 'Brawling',      defense: 'brawlParry', attr: 'Str', type: 'brawl',  verb: 'punches',    weaponKey: 'brawl' },
    brawl:  { skill: 'Brawling',      defense: 'brawlParry', attr: 'Str', type: 'brawl',  verb: 'attacks',    weaponKey: 'brawl' },
    kick:   { skill: 'Brawling',      defense: 'brawlParry', attr: 'Str', type: 'brawl',  verb: 'kicks',      weaponKey: 'brawl' }
  },

  // --- D6 Dice Rolling ---
  rollPips(pips) {
    // Roll dice for a pip value. Wild die: first die — 6 explodes, 1 = remove highest
    const dice = Math.floor(pips / 3);
    const bonus = pips % 3;
    if (dice === 0) return bonus;

    let total = bonus;
    const rolls = [];

    // Wild die (first)
    let wild = Math.floor(Math.random() * 6) + 1;
    if (wild === 6) {
      total += 6;
      let explode = Math.floor(Math.random() * 6) + 1;
      while (explode === 6) {
        total += 6;
        explode = Math.floor(Math.random() * 6) + 1;
      }
      total += explode;
    } else if (wild === 1 && dice > 1) {
      // Wild die 1: wild counts as 0, remove highest other die
      rolls.push(0); // wild contributes nothing
      for (let i = 1; i < dice; i++) rolls.push(Math.floor(Math.random() * 6) + 1);
      rolls.sort((a, b) => b - a);
      rolls.shift(); // remove highest
      total += rolls.reduce((a, b) => a + b, 0);
      return Math.max(1, total);
    } else {
      total += wild;
    }

    // Regular dice
    for (let i = 1; i < dice; i++) {
      total += Math.floor(Math.random() * 6) + 1;
    }

    return Math.max(1, total);
  },

  // Get player's skill pips (or fall back to attribute)
  getPlayerSkillPips(skillName) {
    const c = MUD.state.character;
    if (!c) return 6; // 2D fallback
    if (c.skills[skillName]) return c.skills[skillName];
    // Fall back to parent attribute
    const def = MUD_CHARGEN.SKILLS.find(s => s.name === skillName);
    if (def && c.attrs[def.attr]) return c.attrs[def.attr];
    return 6;
  },

  getPlayerDefensePips(defenseType) {
    const c = MUD.state.character;
    if (!c) return 6;
    const map = {
      dodge: 'Dodge',
      meleeParry: 'Melee Parry',
      brawlParry: 'Brawling Parry'
    };
    const skillName = map[defenseType] || 'Dodge';
    return this.getPlayerSkillPips(skillName);
  },

  getPlayerStrPips() {
    const c = MUD.state.character;
    return c ? c.attrs.Str : 6;
  },

  // How many attacks per round based on skill pips
  getAttacksPerRound(skillPips) {
    return Math.max(1, Math.floor(skillPips / 21)); // every 7D (21 pips) = 1 attack
  },

  // Multi-action penalty in pips (1D per extra action = 3 pips per extra)
  multiActionPenalty(numActions) {
    return (numActions - 1) * 3;
  },

  // Wound levels
  WOUND_LEVELS: ['healthy', 'stunned', 'wounded', 'wounded2x', 'incapacitated', 'mortally', 'dead'],

  woundIndex(w) {
    return this.WOUND_LEVELS.indexOf(w) || 0;
  },

  applyDamageResult(diff, currentWound) {
    // diff = damageRoll - strRoll
    const ci = this.woundIndex(currentWound);
    if (diff <= 0) return currentWound; // no effect
    if (diff <= 3) {  // stunned
      return ci >= this.woundIndex('stunned') ? this.WOUND_LEVELS[Math.min(ci + 1, 6)] : 'stunned';
    }
    if (diff <= 8) {  // wounded
      if (currentWound === 'wounded') return 'wounded2x';
      return ci >= this.woundIndex('wounded') ? this.WOUND_LEVELS[Math.min(ci + 1, 6)] : 'wounded';
    }
    if (diff <= 12) return 'incapacitated';
    if (diff <= 15) return 'mortally';
    return 'dead';
  },

  woundPenaltyPips(wound) {
    switch (wound) {
      case 'wounded': return 3;    // -1D
      case 'wounded2x': return 6;  // -2D
      default: return 0;
    }
  },

  woundLabel(w) {
    const labels = { healthy: '{green}Healthy{/green}', stunned: '{gold}Stunned{/gold}', wounded: '{gold}Wounded{/gold}',
      wounded2x: '{red}Wounded Twice{/red}', incapacitated: '{red}Incapacitated{/red}', mortally: '{red}Mortally Wounded{/red}', dead: '{red}Dead{/red}' };
    return labels[w] || w;
  },

  // --- Initiate Combat ---
  initiate(attackCmd, targetName) {
    if (!MUD.state.character) {
      MUD.print("You need to create a character first. Talk to Administrator Vylen.", 'error');
      return;
    }

    const atkType = this.ATTACK_TYPES[attackCmd];
    if (!atkType) {
      MUD.print("Unknown attack type. Try: {green}blast{/green}, {green}knife{/green}, {green}punch{/green}, {green}saber{/green}", 'error');
      return;
    }

    // Find NPC
    const npc = MUD.findNpc(targetName);
    if (!npc) {
      MUD.print("There's nobody called '" + targetName + "' here.", 'error');
      return;
    }

    // Check if NPC is defeated
    const room = ROOMS_DATA[MUD.state.currentRoom];
    const npcId = Object.keys(room.npcs).find(k => room.npcs[k] === npc);
    if (MUD.isNpcDefeated(MUD.state.currentRoom, npcId)) {
      MUD.print("They're already down.", 'error');
      return;
    }

    if (!npc.combat) {
      MUD.print(npc.name + " doesn't seem like a combatant.", 'error');
      return;
    }

    // Start combat
    this.active = true;
    this.round = 1;
    this.playerActedThisRound = false;
    this.securityCalled = false;

    // Build enemy from NPC combat data
    this.enemies = [{
      id: npcId,
      roomId: MUD.state.currentRoom,
      name: npc.name,
      combat: npc.combat,
      wounds: 'healthy',
      stunTurns: 0
    }];

    // Call security if flagged
    if (npc.combat.security) {
      this.securityCalled = true;
      this.securityArriveRound = this.round + 2; // security arrives in 2 rounds
      MUD.print('{red}An alarm blares — station security has been alerted!{/red}');
    }

    MUD.printBlank();
    MUD.print('{red}═══ COMBAT — Round ' + this.round + ' ═══{/red}');

    // First attack — player initiated, no dodge on first shot
    this.resolvePlayerAttack(atkType, this.enemies[0], true);
    this.playerActedThisRound = true;

    // If enemy still standing, they retaliate
    if (!this.isCombatOver()) {
      this.processEnemyTurns();
    }

    if (!this.isCombatOver()) {
      this.promptNextRound();
    }
  },

  // --- Player Attack ---
  resolvePlayerAttack(atkType, enemy, isFirstStrike) {
    const c = MUD.state.character;
    const skillPips = this.getPlayerSkillPips(atkType.skill);
    const numAttacks = this.getAttacksPerRound(skillPips);
    const penalty = this.multiActionPenalty(numAttacks);
    const woundPen = this.woundPenaltyPips(c.wounds);

    for (let atk = 0; atk < numAttacks; atk++) {
      if (this.woundIndex(enemy.wounds) >= this.woundIndex('incapacitated')) break;

      const effectiveSkill = Math.max(3, skillPips - penalty - woundPen);
      const attackRoll = this.rollPips(effectiveSkill);

      // Defense — first shot of combat has no dodge; subsequent attacks get dodged
      let defenseRoll = 0;
      if (!isFirstStrike || atk > 0) {
        const defKey = atkType.defense;
        const defPips = enemy.combat[defKey] || enemy.combat.dodge || 6;
        const enemyWoundPen = this.woundPenaltyPips(enemy.wounds);
        defenseRoll = this.rollPips(Math.max(3, defPips - enemyWoundPen));
      }

      const atkLabel = numAttacks > 1 ? ' (attack ' + (atk + 1) + ')' : '';
      MUD.print('{dim}You ' + atkType.verb + ' ' + enemy.name + atkLabel + ': {/dim}{gold}' + attackRoll + '{/gold}{dim} vs defense {/dim}{gold}' + defenseRoll + '{/gold}');

      if (attackRoll > defenseRoll) {
        // Hit! Roll damage vs STR
        const weapon = this.getPlayerWeaponDamage(atkType);
        const damageRoll = this.rollPips(Math.max(3, weapon.pips - penalty));
        const strRoll = this.rollPips(enemy.combat.str || 6);
        const diff = damageRoll - strRoll;

        MUD.print('{dim}  Damage: {/dim}{gold}' + damageRoll + '{/gold}{dim} vs soak {/dim}{gold}' + strRoll + '{/gold}{dim} (diff ' + (diff > 0 ? '+' : '') + diff + '){/dim}');

        const oldWound = enemy.wounds;
        enemy.wounds = this.applyDamageResult(diff, enemy.wounds);

        if (weapon.stunOnly) {
          // Stun weapons can't go past incapacitated
          if (this.woundIndex(enemy.wounds) > this.woundIndex('incapacitated')) {
            enemy.wounds = 'incapacitated';
          }
          if (enemy.wounds !== oldWound) {
            MUD.print('  ' + enemy.name + ' is ' + this.woundLabel(enemy.wounds) + ' {dim}(stun){/dim}');
          } else {
            MUD.print('  {dim}No effect.{/dim}');
          }
        } else {
          if (enemy.wounds !== oldWound) {
            MUD.print('  ' + enemy.name + ' is ' + this.woundLabel(enemy.wounds) + '!');
          } else {
            MUD.print('  {dim}No effect.{/dim}');
          }
        }
      } else {
        MUD.print('  {dim}Miss!{/dim}');
      }

      isFirstStrike = false; // only the very first attack of combat is undefended
    }

    // Check if enemy is down
    if (this.woundIndex(enemy.wounds) >= this.woundIndex('incapacitated')) {
      MUD.print('{green}' + enemy.name + ' is down!{/green}');
      MUD.state.defeatedNpcs[enemy.roomId + ':' + enemy.id] = MUD.state.ticks;

      // Auto-loot dynamically spawned enemies (like the cave spider)
      if (enemy.loot) {
        MUD.printBlank();
        MUD.print('{gold}You search the remains...{/gold}');
        if (enemy.loot.items) {
          for (const item of enemy.loot.items) {
            if (item.chance && Math.random() > item.chance) continue;
            const invItem = { id: item.id, name: item.name, description: item.description || item.name };
            if (item.sellValue) invItem.sellValue = item.sellValue;
            if (item.damage) { invItem.damage = item.damage; invItem.combatType = item.combatType; }
            MUD.state.inventory.push(invItem);
            MUD.print('  {item}' + item.name + '{/item}');
          }
        }
        if (enemy.loot.cp && MUD.state.character) {
          const key = enemy.roomId + ':' + enemy.id;
          const baseCp = enemy.loot.cp;
          const kills = MUD.state.killCounts[key] || 0;
          MUD.state.killCounts[key] = kills + 1;
          const tier = Math.floor(kills / baseCp);
          const award = Math.max(0, baseCp - tier);
          if (award > 0) {
            MUD.state.character.cp = (MUD.state.character.cp || 0) + award;
            MUD.print('  {green}+' + award + ' Character Points{/green}');
          }
        }
      }

      this.enemies = this.enemies.filter(e => e !== enemy);
    }
  },

  getPlayerWeaponDamage(atkType) {
    // Check equipped weapon in inventory matching type
    const weapon = MUD.state.inventory.find(it => it.combatType === atkType.weaponKey);
    if (weapon) return { pips: MUD_CHARGEN.diceToPips(weapon.damage), stunOnly: weapon.stunOnly || false };

    // Fallback — unarmed/improvised
    if (atkType.type === 'brawl') return { pips: MUD.state.character.attrs.Str, stunOnly: false }; // STR damage
    if (atkType.type === 'melee') return { pips: MUD.state.character.attrs.Str + 3, stunOnly: false }; // STR+1D improvised
    // No blaster equipped
    return { pips: 9, stunOnly: false }; // 3D fallback
  },

  // --- Enemy Turns ---
  processEnemyTurns() {
    const c = MUD.state.character;

    for (const enemy of this.enemies) {
      if (this.woundIndex(enemy.wounds) >= this.woundIndex('incapacitated')) continue;
      if (enemy.stunTurns > 0) {
        enemy.stunTurns--;
        MUD.print('{dim}' + enemy.name + ' is stunned and loses their action.{/dim}');
        continue;
      }

      // Enemy attacks player
      const atkPips = enemy.combat.blaster || enemy.combat.melee || enemy.combat.brawl || 6;
      const enemyWoundPen = this.woundPenaltyPips(enemy.wounds);
      const numAttacks = this.getAttacksPerRound(atkPips);
      const penalty = this.multiActionPenalty(numAttacks);

      for (let atk = 0; atk < numAttacks; atk++) {
        if (this.woundIndex(c.wounds) >= this.woundIndex('incapacitated')) break;

        const effectiveAtk = Math.max(3, atkPips - penalty - enemyWoundPen);
        const attackRoll = this.rollPips(effectiveAtk);

        // Player defends — determine defense type based on enemy weapon
        const defType = enemy.combat.weaponType || 'dodge';
        const defPips = this.getPlayerDefensePips(defType);
        const playerWoundPen = this.woundPenaltyPips(c.wounds);
        const defenseRoll = (this.round === 1 && atk === 0 && !this.playerActedThisRound) ?
          0 : this.rollPips(Math.max(3, defPips - playerWoundPen));

        const atkLabel = numAttacks > 1 ? ' (attack ' + (atk + 1) + ')' : '';
        const weaponName = enemy.combat.weaponName || 'weapon';
        MUD.print('{dim}' + enemy.name + ' fires ' + weaponName + atkLabel + ': {/dim}{red}' + attackRoll + '{/red}{dim} vs your defense {/dim}{gold}' + defenseRoll + '{/gold}');

        if (attackRoll > defenseRoll) {
          const dmgPips = enemy.combat.damage || 12;
          const damageRoll = this.rollPips(Math.max(3, dmgPips - penalty));
          const strRoll = this.rollPips(Math.max(3, this.getPlayerStrPips() - playerWoundPen));
          const diff = damageRoll - strRoll;

          MUD.print('{dim}  Damage: {/dim}{red}' + damageRoll + '{/red}{dim} vs your soak {/dim}{gold}' + strRoll + '{/gold}{dim} (diff ' + (diff > 0 ? '+' : '') + diff + '){/dim}');

          const oldWound = c.wounds;
          c.wounds = this.applyDamageResult(diff, c.wounds);

          if (enemy.combat.stunOnly) {
            if (this.woundIndex(c.wounds) > this.woundIndex('incapacitated')) {
              c.wounds = 'incapacitated';
            }
          }

          if (c.wounds !== oldWound) {
            MUD.print('  You are ' + this.woundLabel(c.wounds) + '!');
          } else {
            MUD.print('  {dim}No effect on you.{/dim}');
          }
        } else {
          MUD.print('  {dim}They miss!{/dim}');
        }
      }
    }

    // Check security arrival
    if (this.securityCalled && this.round >= this.securityArriveRound && !this.enemies.find(e => e.id === 'security')) {
      this.spawnSecurity();
    }

    // Check player death
    if (this.woundIndex(c.wounds) >= this.woundIndex('incapacitated')) {
      this.handlePlayerDown();
    }
  },

  // --- Security ---
  spawnSecurity() {
    MUD.printBlank();
    MUD.print('{red}Heavy boots pound the deck — station security arrives!{/red}');
    MUD.print('{npc}Station Security Marshal{/npc} levels a heavy blaster at you. "Drop it. NOW."');

    this.enemies.push({
      id: 'security',
      roomId: MUD.state.currentRoom,
      name: 'Security Marshal',
      combat: {
        blaster: 15,       // 5D
        dodge: 12,         // 4D
        meleeParry: 9,     // 3D
        brawlParry: 9,     // 3D
        brawl: 12,         // 4D
        str: 10,           // 3D+1
        damage: 15,        // 5D heavy blaster
        weaponType: 'dodge',
        weaponName: 'heavy blaster',
        stunOnly: false,
        security: false,   // don't re-trigger security
        chase: true        // follows fleeing players
      },
      wounds: 'healthy',
      stunTurns: 0
    });
  },

  // --- Fleeing ---
  flee(direction) {
    if (!this.active) {
      MUD.print("You're not in combat.", 'error');
      return;
    }

    // Roll dodge vs enemy attack to flee
    const c = MUD.state.character;
    const dodgePips = this.getPlayerDefensePips('dodge');
    const dodgeRoll = this.rollPips(Math.max(3, dodgePips - this.woundPenaltyPips(c.wounds)));

    // Best enemy tries to stop you
    let bestAtk = 0;
    for (const enemy of this.enemies) {
      if (this.woundIndex(enemy.wounds) >= this.woundIndex('incapacitated')) continue;
      const atkPips = enemy.combat.blaster || enemy.combat.melee || enemy.combat.brawl || 6;
      const roll = this.rollPips(Math.max(3, atkPips - this.woundPenaltyPips(enemy.wounds)));
      if (roll > bestAtk) bestAtk = roll;
    }

    MUD.print('{dim}You attempt to flee: dodge {/dim}{gold}' + dodgeRoll + '{/gold}{dim} vs {/dim}{red}' + bestAtk + '{/red}');

    if (dodgeRoll >= bestAtk) {
      MUD.print('{green}You break free and run!{/green}');
      this.endCombat();

      // Pick a valid exit
      const room = ROOMS_DATA[MUD.state.currentRoom];
      const exits = Object.keys(room.exits || {});
      if (direction && room.exits[direction]) {
        MUD.moveTo(room.exits[direction]);
      } else if (exits.length) {
        MUD.moveTo(room.exits[exits[0]]); // flee to first available exit
      }

      // Security follows
      if (this.securityCalled) {
        MUD.print('{red}Security is pursuing you!{/red}');
        // Security will be in the next room — re-engage on next tick
        // For now just flag it; full pursuit comes with more rooms
      }
    } else {
      MUD.print('{red}They block your escape!{/red}');
      // Enemy gets a free attack
      this.processEnemyTurns();
      if (!this.isCombatOver()) {
        this.promptNextRound();
      }
    }
  },

  // --- Player Down ---
  handlePlayerDown() {
    const c = MUD.state.character;
    this.endCombat();

    MUD.printBlank();
    MUD.print('{red}═══════════════════════════════════════════════════{/red}');
    MUD.print('{red}            YOU HAVE BEEN DEFEATED{/red}');
    MUD.print('{red}═══════════════════════════════════════════════════{/red}');
    MUD.printBlank();
    MUD.print('{dim}Everything goes dark...{/dim}');
    MUD.printBlank();

    // Credit penalty
    const penalty = Math.min(5000, Math.floor(MUD.state.credits * 0.9));
    if (penalty > 0) {
      MUD.state.credits -= penalty;
      MUD.print('{red}Medical bills: -' + penalty + ' credits{/red}');
    }

    // Heal and respawn
    c.wounds = 'healthy';
    MUD.state.currentRoom = 'infirmary';
    MUD.state.ticks += 5; // time passes while unconscious

    MUD.printBlank();
    MUD.print('{dim}You wake up in the station infirmary. Again. The 2-1B droid regards you with what might be disapproval.{/dim}');
    MUD.printBlank();
    MUD.print('{npc}2-1B Medical Droid{/npc}: "You really should stop doing that. I\'m running out of bacta patches."');
    MUD.printBlank();

    MUD.displayRoom('infirmary');
    MUD.autoSave();
  },

  // --- Round Management ---
  promptNextRound() {
    this.round++;
    MUD.printBlank();
    MUD.print('{red}═══ Round ' + this.round + ' ═══{/red}');

    // Show status
    for (const enemy of this.enemies) {
      if (this.woundIndex(enemy.wounds) < this.woundIndex('incapacitated')) {
        MUD.print('  ' + enemy.name + ': ' + this.woundLabel(enemy.wounds));
      }
    }
    MUD.print('  You: ' + this.woundLabel(MUD.state.character.wounds));
    MUD.printBlank();
    MUD.print('{dim}Attack ({/dim}{green}blast{/green}{dim}/{/dim}{green}knife{/green}{dim}/{/dim}{green}punch{/green}{dim}/{/dim}{green}saber{/green}{dim} <target>) or {/dim}{green}flee{/green}');
    this.playerActedThisRound = false;
  },

  // --- Handle combat-mode input ---
  handleInput(input) {
    const raw = input.trim();
    if (!raw) return;

    MUD.print(raw, 'command');
    MUD.state.history.push(raw);
    if (MUD.state.history.length > 50) MUD.state.history.shift();
    MUD.state.historyIdx = -1;

    const parts = raw.toLowerCase().split(/\s+/);
    const cmd = parts[0];
    const arg = parts.slice(1).join(' ');

    if (cmd === 'flee' || cmd === 'run' || cmd === 'escape') {
      this.flee(arg);
      return;
    }

    if (cmd === 'status' || cmd === 'stats') {
      MUD.doStatus();
      return;
    }

    if (cmd === 'look' || cmd === 'l') {
      MUD.doLook();
      return;
    }

    const atkType = this.ATTACK_TYPES[cmd];
    if (atkType) {
      if (this.playerActedThisRound) {
        MUD.print('You already acted this round. Wait for enemies to respond.', 'error');
        return;
      }

      // Find target from remaining enemies
      let target = null;
      if (arg) {
        target = this.enemies.find(e =>
          this.woundIndex(e.wounds) < this.woundIndex('incapacitated') &&
          (e.name.toLowerCase().includes(arg) || e.id.toLowerCase().includes(arg))
        );
      }
      if (!target) {
        // Default to first standing enemy
        target = this.enemies.find(e => this.woundIndex(e.wounds) < this.woundIndex('incapacitated'));
      }

      if (!target) {
        MUD.print('No enemies left standing!');
        this.endCombat();
        return;
      }

      this.resolvePlayerAttack(atkType, target, false);
      this.playerActedThisRound = true;

      if (!this.isCombatOver()) {
        this.processEnemyTurns();
      }

      if (!this.isCombatOver()) {
        this.promptNextRound();
      }
      return;
    }

    MUD.print('{dim}In combat — attack ({/dim}{green}blast{/green}{dim}/{/dim}{green}knife{/green}{dim}/{/dim}{green}punch{/green}{dim}/{/dim}{green}saber{/green}{dim} <target>) or {/dim}{green}flee{/green}', 'error');
  },

  isCombatOver() {
    if (!this.active) return true;

    // All enemies down?
    const standing = this.enemies.filter(e => this.woundIndex(e.wounds) < this.woundIndex('incapacitated'));
    if (!standing.length) {
      MUD.printBlank();
      MUD.print('{green}Combat over — all enemies defeated.{/green}');
      this.endCombat();
      return true;
    }

    // Player down?
    if (this.woundIndex(MUD.state.character.wounds) >= this.woundIndex('incapacitated')) {
      this.handlePlayerDown();
      return true;
    }

    return false;
  },

  endCombat() {
    this.active = false;
    this.enemies = [];
    this.round = 0;
    this.playerActedThisRound = false;
    this.securityCalled = false;
    MUD.autoSave();
  }
};

// ============================================================
// MINING SYSTEM
// ============================================================

const MUD_MINE = {

  // Spider figure-8 patrol path through dark rooms
  SPIDER_PATROL: ['deep_vein_1', 'deep_junction', 'deep_vein_2', 'deep_vein_3', 'crystal_chamber', 'deep_vein_3', 'deep_vein_1', 'deep_junction'],

  // Exit direction for collapse — pushes player toward mine entrance
  COLLAPSE_EXIT: {
    shaft_alpha: 'mine_entrance',
    vein_west: 'shaft_alpha',
    vein_east: 'shaft_alpha',
    deep_junction: 'vein_west',
    deep_vein_1: 'deep_junction',
    deep_vein_2: 'deep_junction',
    deep_vein_3: 'deep_vein_1',
    crystal_chamber: 'deep_vein_3'
  },
  spiderPatrolIdx: 0,

  // Small ambient spiderlings — flavor text, non-aggressive
  SPIDERLING_ROOMS: ['vein_west', 'vein_east', 'deep_junction'],
  SPIDERLING_CHANCE: 0.25, // 25% chance to see one when entering a room

  // Move the big spider one step on its patrol
  moveSpider() {
    this.spiderPatrolIdx = (this.spiderPatrolIdx + 1) % this.SPIDER_PATROL.length;
    MUD.state.spiderRoom = this.SPIDER_PATROL[this.spiderPatrolIdx];
  },

  // Check if the player just walked into the spider's room
  checkSpiderEncounter(roomId) {
    if (roomId !== MUD.state.spiderRoom) {
      // Spiderling flavor text in lower lit areas
      if (this.SPIDERLING_ROOMS.includes(roomId) && Math.random() < this.SPIDERLING_CHANCE) {
        setTimeout(() => {
          MUD.print('{dim}A small cave spiderling scuttles across the floor and disappears into a crack in the rock. Harmless — but a reminder of what lurks deeper.{/dim}');
        }, 500);
      }
      return;
    }

    // Player is in the same room as the spider!
    const room = ROOMS_DATA[roomId];
    if (room && room.mine && room.mine.lit) return; // spider won't enter lit rooms

    MUD.printBlank();
    MUD.print('{red}═══════════════════════════════════════════════════{/red}');
    MUD.print('{red}A massive shape lunges from the darkness!{/red}');
    MUD.print('{red}═══════════════════════════════════════════════════{/red}');
    MUD.printBlank();
    MUD.print('The Gamma-7 cave spider — three meters of armored chitin, mandibles, and malice — drops from the ceiling directly in front of you. Its cluster of eyes reflects your glow rod light like wet obsidian.');
    MUD.printBlank();

    // Force combat with the spider
    MUD_COMBAT.active = true;
    MUD_COMBAT.round = 1;
    MUD_COMBAT.playerActedThisRound = false;
    MUD_COMBAT.securityCalled = false;
    MUD_COMBAT.enemies = [{
      id: 'cave_spider',
      roomId: roomId,
      name: 'Cave Spider',
      combat: {
        blaster: 0,
        dodge: 12,         // 4D
        meleeParry: 10,    // 3D+1
        brawlParry: 13,    // 4D+1
        brawl: 15,         // 5D — mandible strike
        melee: 0,
        str: 16,           // 5D+1 — heavily armored
        damage: 16,        // 5D+1 mandible damage
        weaponType: 'brawlParry',
        weaponName: 'mandibles',
        stunOnly: false,
        security: false
      },
      wounds: 'healthy',
      stunTurns: 0,
      loot: {
        credits: { min: 0, max: 0 },
        cp: 3,
        items: [
          { id: 'large_chitin', name: 'Large Spider Chitin Plate', description: 'A thick slab of cave spider chitin — nearly half a meter across. Extremely tough and lightweight. Armorers prize these for custom armor inserts.', sellValue: 60, chance: 0.8 },
          { id: 'large_chitin_2', name: 'Large Spider Chitin Plate', description: 'A thick slab of cave spider chitin — nearly half a meter across. Extremely tough and lightweight. Armorers prize these for custom armor inserts.', sellValue: 60, chance: 0.5 },
          { id: 'large_silk', name: 'Large Spider Silk Bundle', description: 'A thick coil of cave spider silk — strong enough to use as syntherope. Worth good money to the right buyer.', sellValue: 45, chance: 0.8 },
          { id: 'large_silk_2', name: 'Large Spider Silk Bundle', description: 'A thick coil of cave spider silk — strong enough to use as syntherope. Worth good money to the right buyer.', sellValue: 45, chance: 0.5 },
          { id: 'spider_fang', name: 'Cave Spider Fang', description: 'A wickedly curved fang from a Gamma-7 cave spider. Could be fashioned into a blade or sold as a trophy. The venom gland is still attached.', sellValue: 100, chance: 0.3 }
        ]
      }
    }];

    MUD.print('{red}═══ COMBAT — Round 1 ═══{/red}');
    MUD.print('{dim}The spider strikes first! Fight ({/dim}{green}punch{/green}{dim}/{/dim}{green}knife{/green}{dim}/{/dim}{green}blast{/green}{dim}) or {/dim}{green}flee{/green}{dim}!{/dim}');

    // Spider gets first strike — player walked into it
    MUD_COMBAT.processEnemyTurns();
    if (!MUD_COMBAT.isCombatOver()) {
      MUD_COMBAT.playerActedThisRound = false;
    }
  },

  // --- Mining ---
  // Phase 1: Mine nodes (safe). Phase 2: Quartz Root exposed (1/6 collapse per chunk).
  doMine() {
    if (!MUD.state.character) { MUD.print("You need a character first.", 'error'); return; }
    if (MUD_COMBAT.active) { MUD.print("You can't mine during combat!", 'error'); return; }

    const room = ROOMS_DATA[MUD.state.currentRoom];
    if (!room || !room.mine || !room.mine.vein) {
      MUD.print("There's nothing to mine here.");
      return;
    }

    // Require mining kit
    if (!MUD.state.inventory.find(it => it.id === 'mining_kit')) {
      MUD.print("You don't have a mining kit. Buy one from {item}Surplus & Salvage{/item} on the main concourse — 30 credits.");
      return;
    }

    const vein = room.mine.vein;
    const vs = this.getVeinState(vein.id);

    // Check if fully depleted (nodes + root all gone)
    if (vs.fullyDepleted) {
      const ticksSince = MUD.state.ticks - (vs.depletedTick || 0);
      if (ticksSince < 50) {
        MUD.print('{dim}This vein has been mined out completely. The quartz needs time to regenerate.{/dim}');
        return;
      } else {
        // Regenerated!
        vs.mined = 0;
        vs.rootMined = 0;
        vs.fullyDepleted = false;
        vs.depletedTick = null;
      }
    }

    // Phase 1: Normal nodes (safe)
    if (vs.mined < vein.maxNodes) {
      vs.mined++;
      vs.lastMinedTick = MUD.state.ticks;

      const valueVariance = Math.floor(vein.value * 0.2);
      const crystalValue = vein.value + Math.floor(Math.random() * valueVariance * 2) - valueVariance;

      const crystalItem = {
        id: 'quartz_' + vein.depthTier,
        name: vein.name + ' Crystal',
        description: 'A chunk of regenerative quartz from ' + vein.name + '. Worth about ' + crystalValue + ' credits to a buyer.\n\n{dim}Sell at Surplus & Salvage with {/dim}{green}sell quartz{/green}',
        sellValue: crystalValue
      };
      MUD.state.inventory.push(crystalItem);

      const nodesLeft = vein.maxNodes - vs.mined;
      MUD.printBlank();
      MUD.print('{green}You work the quartz vein with your pick, extracting a crystal.{/green}');
      MUD.print('  {item}' + crystalItem.name + '{/item} {dim}(~' + crystalValue + ' cr){/dim}');

      if (nodesLeft > 0) {
        MUD.print('{dim}' + nodesLeft + ' node' + (nodesLeft !== 1 ? 's' : '') + ' remaining in this vein.{/dim}');
      } else {
        MUD.print('{gold}The nodes are cleared. A {/gold}{item}Quartz Root{/item}{gold} is now visible, flush with the wall.{/gold}');
        MUD.print('{dim}The root has 3 chunks. Mining it risks a cave-in. Type {/dim}{green}mine{/green}{dim} to try.{/dim}');
      }

      // Spider might hear mining in dark rooms
      if (!room.mine.lit && MUD.state.spiderRoom !== MUD.state.currentRoom) {
        if (Math.random() < 0.2) {
          MUD.print('{red}You hear skittering echoing from a nearby tunnel. Something heard you working.{/red}');
        }
      }

      MUD.autoSave();
      return;
    }

    // Phase 2: Quartz Root — 1/6 collapse risk per chunk
    if (vs.rootMined >= 3) {
      // Root fully extracted, vein depleted
      vs.fullyDepleted = true;
      vs.depletedTick = MUD.state.ticks;
      MUD.print('{dim}The root is completely extracted. The vein needs time to regenerate.{/dim}');
      MUD.autoSave();
      return;
    }

    // Collapse check — 1 in 6
    if (Math.floor(Math.random() * 6) === 0) {
      MUD.printBlank();
      MUD.print('{red}CAVE-IN!{/red}');
      MUD.print('{red}The root fractures and the ceiling comes down!{/red}');

      // Dodge check — 2D6 damage if failed
      const dodgePips = MUD_COMBAT.getPlayerDefensePips('dodge');
      const dodgeRoll = MUD_COMBAT.rollPips(dodgePips);
      const dmgRoll = MUD_COMBAT.rollPips(6); // 2D falling rock
      MUD.print('{dim}You dive for cover — Dodge: {/dim}{gold}' + dodgeRoll + '{/gold}{dim} vs debris: {/dim}{red}' + dmgRoll + '{/red}');

      if (dodgeRoll >= dmgRoll) {
        MUD.print('{green}You roll clear of the worst of it!{/green}');
      } else {
        const strRoll = MUD_COMBAT.rollPips(MUD.state.character.attrs.Str);
        const diff = dmgRoll - strRoll;
        const oldWound = MUD.state.character.wounds;
        MUD.state.character.wounds = MUD_COMBAT.applyDamageResult(diff, MUD.state.character.wounds);
        MUD.print('{dim}Damage: {/dim}{red}' + dmgRoll + '{/red}{dim} vs Strength: {/dim}{gold}' + strRoll + '{/gold}');
        if (MUD.state.character.wounds !== oldWound) {
          MUD.print('You are ' + MUD_COMBAT.woundLabel(MUD.state.character.wounds) + '!');
        }
      }

      // Block room + deplete vein
      MUD.state.blockedRooms[MUD.state.currentRoom] = MUD.state.ticks;
      vs.fullyDepleted = true;
      vs.depletedTick = MUD.state.ticks;

      // Force player toward exit
      const exitRoom = this.COLLAPSE_EXIT[MUD.state.currentRoom];
      if (exitRoom) {
        MUD.print('{gold}The collapse forces you back!{/gold}');
        MUD.state.currentRoom = exitRoom;
        MUD.state.ticks++;
        this.moveSpider();
        MUD.displayRoom(exitRoom);
      }

      if (MUD_COMBAT.woundIndex(MUD.state.character.wounds) >= MUD_COMBAT.woundIndex('incapacitated')) {
        MUD_COMBAT.handlePlayerDown();
      }

      MUD.autoSave();
      return;
    }

    // Successful root chunk extraction
    vs.rootMined = (vs.rootMined || 0) + 1;

    const rootValue = Math.floor(vein.value * 1.5) + Math.floor(Math.random() * Math.floor(vein.value * 0.3));
    const rootItem = {
      id: 'quartz_root_' + vein.depthTier,
      name: vein.name + ' Root Crystal',
      description: 'A dense chunk of quartz root — the deep-growth core of a regenerative vein. Worth considerably more than surface crystals.\n\n{dim}Sell at Surplus & Salvage with {/dim}{green}sell root{/green}',
      sellValue: rootValue
    };
    MUD.state.inventory.push(rootItem);

    const chunksLeft = 3 - vs.rootMined;
    MUD.printBlank();
    MUD.print('{green}You carefully chip at the Quartz Root...{/green}');
    MUD.print('  {item}' + rootItem.name + '{/item} {dim}(~' + rootValue + ' cr){/dim}');

    if (chunksLeft > 0) {
      MUD.print('{gold}' + chunksLeft + ' chunk' + (chunksLeft !== 1 ? 's' : '') + ' of root remaining. The ceiling groans ominously...{/gold}');
    } else {
      vs.fullyDepleted = true;
      vs.depletedTick = MUD.state.ticks;
      MUD.print('{gold}The root is fully extracted! The vein will regenerate over time.{/gold}');
    }

    // Spider alert in dark rooms
    if (!room.mine.lit && MUD.state.spiderRoom !== MUD.state.currentRoom) {
      if (Math.random() < 0.3) {
        MUD.print('{red}Something is moving in the darkness nearby...{/red}');
      }
    }

    MUD.autoSave();
  },

  getVeinState(veinId) {
    if (!MUD.state.mineVeins[veinId]) {
      MUD.state.mineVeins[veinId] = { mined: 0, rootMined: 0, lastMinedTick: 0, depletedTick: null, fullyDepleted: false };
    }
    return MUD.state.mineVeins[veinId];
  }
};
