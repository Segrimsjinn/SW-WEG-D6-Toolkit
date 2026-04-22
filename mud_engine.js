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
    character: null,    // placeholder for Step 2 character creator
    history: [],        // command history for up/down arrow
    historyIdx: -1,
    started: false
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
    this.print(room.description);

    // Show exits
    const exits = Object.keys(room.exits || {});
    if (exits.length) {
      this.print('{dim}Exits: ' + exits.join(', ') + '{/dim}');
    }

    // Show NPCs present
    const npcKeys = Object.keys(room.npcs || {});
    if (npcKeys.length) {
      const names = npcKeys.map(k => room.npcs[k].name);
      this.print('{dim}You see: ' + names.join(', ') + '{/dim}');
    }
  },

  // --- Movement ---
  moveTo(roomId) {
    if (!ROOMS_DATA[roomId]) {
      this.print("You can't go that way.", 'error');
      return false;
    }
    this.state.currentRoom = roomId;
    this.displayRoom(roomId);
    this.autoSave();
    return true;
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
      if (line.once) {
        // This dialogue plays once, then sets a flag
        if (!this.state.flags[line.once]) {
          this.state.flags[line.once] = true;
          this.printBlank();
          this.print(line.text);
          this.autoSave();
          return;
        }
        // Already seen this once-line, skip to next
        continue;
      }
      // Default dialogue (no condition)
      this.printBlank();
      this.print(line.text);
      return;
    }

    // Fallback if all lines were once-only and already seen
    this.print(npc.name + " has nothing more to say.");
  },

  doTake(target) {
    if (!target) {
      this.print('Take what?', 'error');
      return;
    }
    // Placeholder — items on the ground will come with economy system
    this.print("There's nothing here you can take right now.");
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
    // Placeholder for character stats — Step 2
    this.print('{gold}Status:{/gold}');
    this.print('  Location: {gold}' + (ROOMS_DATA[this.state.currentRoom]?.name || 'Unknown') + '{/gold}');
    this.print('  Credits: {gold}' + this.state.credits + '{/gold}');
    this.print('  Items: ' + (this.state.inventory.length || 'none'));
    if (this.state.character) {
      this.print('  Character: {gold}' + this.state.character.name + '{/gold} (' + this.state.character.species + ')');
    } else {
      this.print('  Character: {dim}(not yet created){/dim}');
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
    this.print('');
    this.print('{gold}Information:{/gold}');
    this.print('  {green}inventory{/green} / {green}i{/green}  — check your belongings');
    this.print('  {green}status{/green}  — check your current status');
    this.print('  {green}credits{/green}  — check your credit balance');
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
        started: this.state.started
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
