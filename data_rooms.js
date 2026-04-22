// ============================================================
// MUDD-LITE STATION — Room Data
// ============================================================
const ROOMS_DATA = {

  "infirmary": {
    name: "Station Infirmary",
    description: "Harsh white light fills this sterile medical bay. Two rows of narrow {item}cot{/item}s line the walls, most empty. A {npc}2-1B{/npc} surgical {npc}droid{/npc} stands near a wall-mounted {item}monitor{/item}, its photoreceptors dimly pulsing. The antiseptic smell of {item}bacta{/item} hangs in the recycled air. A sliding door to the north leads into the medical wing corridor.",
    exits: {
      north: "med_corridor"
    },
    objects: {
      "cot": "A standard-issue medical cot with thin padding over a durasteel frame. The sheets are clean but threadbare. This one still has the indent from where you were lying.",
      "monitor": "The wall-mounted vitals monitor shows a flatline — your readings were cleared when the droid discharged you. A small dataplate reads: 'Patient: UNKNOWN. Status: RELEASED.'",
      "droid": "A 2-1B surgical droid, its chrome casing dulled from years of service. One of its manipulator arms has been replaced with a non-standard attachment — probably a field repair. Despite the wear, its movements are precise and deliberate.",
      "bacta": "A half-empty bacta tank sits in the corner, its murky green fluid bubbling softly. The tank's label has been scratched off and re-labeled by hand: 'RESERVED — STATION PERSONNEL ONLY.'"
    },
    npcs: {
      "med_droid": {
        name: "2-1B Medical Droid",
        keywords: ["droid", "medical", "2-1b", "doc"],
        look: "The 2-1B surgical droid regards you with calm photoreceptors. Its vocabulator emits a faint hum, ready to dispense medical advice whether you want it or not.",
        combat: { blaster: 6, dodge: 6, meleeParry: 3, brawlParry: 3, brawl: 3, str: 6, damage: 9, weaponType: 'dodge', weaponName: 'stun injector', stunOnly: true, security: true },
        talk: [
          { once: "med_droid_intro", text: "The droid's photoreceptors brighten. \"Ah, you're up and about. Good. Your vitals have stabilized nicely. I've treated the worst of your injuries — bruised ribs, mild concussion, some superficial burns. Nothing a few days of rest won't finish.\"\n\nIt pauses, adjusting a dial on the monitor.\n\n\"I'd recommend checking in with Station Administration on the main concourse. They'll want to register you. Without papers, you won't be able to find work, book passage, or do much of anything on this station.\"\n\nThe droid tilts its head. \"And between you and me — don't linger in the corridors too long without credits. Drifter's Anchorage isn't the most... charitable place.\"" },
          { text: "\"Your vitals look stable. I'd suggest heading to Station Administration — north through the corridor to the main concourse, then follow the signs. And do try not to get shot before your ribs finish healing.\"" }
        ]
      }
    },
    intro: [
      "{dim}You dream of stars rushing past. An alarm. Fire. Then... nothing.{/dim}",
      "",
      "Consciousness returns slowly. Harsh white light stabs at your eyes.",
      "",
      "You're lying on a narrow medical cot in a sterile bay. The hum of recycled air fills your ears. Everything hurts.",
      "",
      "A metallic voice speaks:",
      "",
      "{npc}2-1B Medical Droid{/npc}: \"Ah, you're awake. Good. I was beginning to wonder if that concussion was worse than the scans suggested.\"",
      "",
      "A surgical droid leans into your field of vision, photoreceptors glowing softly.",
      "",
      "\"You were recovered from an escape pod drifting near the Bastion system. Your pod's transponder was dead and its flight logs were corrupted. No identification, no personal effects, no credits. Nothing to tell us who you are or where you came from.\"",
      "",
      "The droid pauses, adjusting something on a wall-mounted monitor.",
      "",
      "\"You're aboard {gold}Drifter's Anchorage{/gold} — a waystation on the edge of Imperial Remnant space. Not the friendliest stretch of the galaxy, but you're alive. That counts for something out here.\"",
      "",
      "\"Your injuries have been treated. You're free to go whenever you feel ready. I'd suggest checking in with {gold}Station Administration{/gold} — they'll want to register you before you can find work or book passage.\"",
      "",
      "{dim}The droid turns back to its instruments, leaving you to take stock of your situation.{/dim}",
      ""
    ]
  },

  "med_corridor": {
    name: "Medical Wing Corridor",
    description: "A narrow {item}corridor{/item} with scuffed durasteel plating underfoot. Harsh overhead {item}lights{/item} flicker intermittently, casting uneven light. The infirmary lies to the south, and the corridor opens north into the bustle of the main concourse. To the east, a small alcove offers a viewport looking out into space.",
    exits: {
      south: "infirmary",
      north: "main_concourse",
      east: "viewport_alcove"
    },
    objects: {
      "corridor": "The walls are bare durasteel, pockmarked with old bolt holes where signs or panels once hung. A faded directional stripe on the floor — Imperial standard yellow — points north toward the main concourse.",
      "lights": "The overhead light strips are mismatched. Some are original Imperial-spec fluorescents; others are cheap aftermarket replacements that buzz and flicker. Nobody's maintaining this section with any enthusiasm."
    },
    npcs: {}
  },

  "viewport_alcove": {
    name: "Viewport Alcove",
    description: "A small alcove carved from the corridor wall, dominated by a transparisteel {item}viewport{/item} two meters wide. Beyond the glass, the star-flecked void stretches endlessly. The angular bulk of Drifter's Anchorage extends below — you can see docking pylons, hull plating scarred by micrometeorites, and the faint blue glow of the {item}station{/item}'s ventral thrusters holding position. In the far distance, the pale disc of a {item}planet{/item} catches the light of a nearby star.",
    exits: {
      west: "med_corridor"
    },
    objects: {
      "viewport": "Through the transparisteel, you can make out the station's superstructure — a converted Imperial supply depot, by the look of it. Sections of the hull still bear faded Imperial Navy markings beneath newer paint. Several ships are docked at the pylons: a battered YT-1300, a sleek but aging Firespray, and what appears to be an Imperial customs frigate with its transponder lights dark.",
      "planet": "The pale disc in the distance must be Bastion — or one of its moons. From here it's just a point of light, indifferent to the small dramas playing out on this station.",
      "station": "Drifter's Anchorage. From out here you can see it's a repurposed Imperial supply depot — modular construction, military-grade hull plating, but clearly showing its age. Antenna arrays and sensor dishes jut from the upper hull at odd angles, most of them aftermarket additions."
    },
    npcs: {}
  },

  "main_concourse": {
    name: "Main Concourse",
    description: "The main concourse of Drifter's Anchorage is a wide, vaulted corridor that serves as the station's central hub. A {item}crowd{/item} of spacers, merchants, and hard-eyed individuals flows in both directions. Overhead, a cracked {item}holodisplay{/item} cycles through trade postings and docking schedules in flickering blue text.\n\nThe medical wing lies to the south. A cantina's neon {item}sign{/item} glows to the west, its muffled music bleeding through the doorway. The docking bay access corridor stretches east. To the north, a transparisteel-fronted office bears the sign: STATION ADMINISTRATION. A narrow, poorly lit passage leads southwest into the station's maintenance levels. To the northwest, a shopfront with a flickering neon sign reads: SURPLUS & SALVAGE.",
    exits: {
      south: "med_corridor",
      west: "cantina",
      east: "docking_access",
      north: "admin_office",
      southwest: "maintenance_sub",
      northwest: "general_store"
    },
    objects: {
      "holodisplay": "The cracked holodisplay cycles through listings:\n  {dim}• CARGO HAULER NEEDED — Bulk freight to Muunilinst. Payment on delivery. No questions.{/dim}\n  {dim}• MINING CREW — 3-week rotation, Asteroid Belt Gamma-7. Hazard pay included.{/dim}\n  {dim}• WANTED: Ship mechanic. Must have own tools. See Docking Bay 3.{/dim}\n  {dim}• PUBLIC NOTICE: Unlicensed weapons discharge in the concourse will be met with lethal force. — Station Security{/dim}\nMost of the listings look weeks old.",
      "crowd": "The usual mix of Outer Rim station life. A Rodian haggling with a junk dealer over a pile of spare parts. Two humans in grease-stained flight suits arguing about hyperdrive calibration. A Twi'lek leaning against a support column, watching the crowd with professional disinterest. Nobody pays you any particular attention — just another drifter on a station full of them.",
      "sign": "The Station Administration sign is clean and well-lit — one of the few things on this station that seems properly maintained. Below it, a smaller placard reads: 'ALL UNREGISTERED PERSONS MUST REPORT WITHIN 48 STANDARD HOURS OF ARRIVAL.'"
    },
    npcs: {}
  },

  "admin_office": {
    name: "Station Administration",
    description: "A small, surprisingly orderly office behind a transparisteel partition. {npc}Vylen{/npc}, a human woman in a crisp but worn uniform, sits behind a {item}terminal{/item}, processing what seems like an endless queue of datapads. The walls are lined with {item}cabinets{/item} and a single Imperial-era {item}poster{/item} that someone has defaced with a crude drawing of a mynock. A security {item}camera{/item} blinks red in the corner.",
    exits: {
      south: "main_concourse"
    },
    objects: {
      "terminal": "A standard Imperial administrative terminal, its casing yellowed with age but its screen sharp and bright. Data scrolls past too quickly to read from this angle.",
      "poster": "An old Imperial COMPNOR recruitment poster: 'THE EMPIRE NEEDS YOU — SERVE WITH PRIDE.' Someone has drawn a mynock eating the stormtrooper's helmet. Below that, in smaller handwriting: 'Anchorage needs you too. Pay's worse.'",
      "camera": "A security camera mounted in the corner, its red indicator light blinking steadily. It looks newer than anything else in the room — someone takes security seriously, even if the decor suggests otherwise.",
      "cabinets": "Row after row of old-fashioned filing cabinets. In an age of datapads and holonet access, the presence of physical files suggests either extreme paranoia about slicing, or a bureaucracy too stubborn to modernize. Probably both."
    },
    npcs: {
      "admin": {
        name: "Administrator Vylen",
        keywords: ["admin", "administrator", "voss", "woman", "officer"],
        look: "A human woman in her forties with close-cropped grey hair and sharp eyes that have seen too many fabricated identification documents. Her uniform is Imperial-cut but stripped of rank insignia — Remnant administrative corps, probably. A nameplate on her desk reads: ADM. K. VYLEN.",
        combat: { blaster: 10, dodge: 9, meleeParry: 6, brawlParry: 6, brawl: 6, str: 7, damage: 12, weaponType: 'dodge', weaponName: 'hold-out blaster', stunOnly: false, security: true },
        talk: [
          { once: "admin_intro", text: "{npc}Administrator Vylen{/npc} looks up from her terminal, studying you with a practiced eye.\n\n\"The escape pod survivor. The medical droid flagged your arrival.\" She pulls up something on her screen. \"No ID, no transit papers, no credit chit. Not exactly a strong start.\"\n\nShe taps a few keys. \"Here's how this works. I register you in our system, you get a temporary station pass. That lets you move freely, take on posted work, and use the cantina without getting hassled by security. In return, you follow station rules and don't cause problems.\"\n\nShe slides a datapad across the desk. \"Standard waiver. You agree not to hold the station liable for... well, anything, really. Sign it and you're a registered resident of Drifter's Anchorage.\"\n\n\"Ready? Let's get you into the system.\"", action: "chargen" },
          { cond: "character_created", text: "\"You're already in the system. Try not to make me regret it.\"" },
          { text: "\"Still sorting yourself out? Take your time — but not too much time. Unregistered residents make security nervous, and you don't want to make security nervous.\"\n\n{dim}Type {/dim}{green}talk vylen{/green}{dim} again when you're ready to register.{/dim}", action: "chargen" }
        ]
      }
    }
  },

  "cantina": {
    name: "The Rusty Hydrospanner",
    description: "The station cantina is dim and loud, exactly the way its clientele prefers it. Mismatched lighting casts everything in shades of amber and shadow. A long {item}bar{/item} runs along the far wall, tended by a surly-looking Besalisk named {npc}Grek{/npc} whose four arms keep glasses moving with mechanical efficiency. Scattered {item}tables{/item} fill the floor, occupied by the usual assortment of spacers, drifters, and people who'd rather not be looked at too closely.\n\nA {item}jukebox{/item} droid in the corner plays something vaguely jizz-like at a volume that discourages eavesdropping. The exit back to the main concourse is to the east. A bead curtain to the west leads to a dimly lit back room — you catch the sound of shuffling cards and clinking chips.",
    exits: {
      east: "main_concourse",
      west: "back_room"
    },
    objects: {
      "bar": "The bar is a slab of scarred durasteel that might have once been a cargo loading ramp, mounted on industrial supports. Its surface is etched with countless rings from glasses and the occasional blaster scorch mark. A hand-painted sign behind it reads: 'NO CREDIT. NO TABS. NO EXCEPTIONS.'",
      "jukebox": "A battered jukebox droid, its chrome plating mostly replaced with welded scrap panels. It sways slightly as it plays, the music tinny but persistent. Someone has stuck a 'DO NOT KICK' label on its chassis, which has clearly been kicked many times.",
      "tables": "The tables are a mix of salvaged ship components and repurposed cargo containers. Most of the occupants are minding their own business with the studied indifference of people who've learned not to ask questions. A few sabacc games are in progress at the back tables.",
      "sign": "The sign behind the bar reads in blocky Aurebesh: 'THE RUSTY HYDROSPANNER — DRINKS, FOOD, MIND YOUR OWN BUSINESS.' Below it, smaller text adds: 'Management is not responsible for lost property, lost teeth, or lost dignity.'"
    },
    npcs: {
      "bartender": {
        name: "Grek",
        keywords: ["bartender", "besalisk", "grek", "barkeep"],
        look: "A heavyset Besalisk with mottled green-brown skin and four thick arms that move with surprising dexterity behind the bar. His lower left hand has a cybernetic replacement — cheap but functional. He watches the room with the calm authority of someone who keeps a scatter-gun under the counter and isn't shy about using it.",
        combat: { blaster: 12, dodge: 9, meleeParry: 10, brawlParry: 12, brawl: 13, str: 13, damage: 15, weaponType: 'dodge', weaponName: 'scatter-gun', stunOnly: false, security: true },
        talk: [
          { once: "grek_intro", text: "{npc}Grek{/npc} glances at you with one eye while his other three arms continue pouring drinks.\n\n\"New face. Escape pod, right? Word travels fast on a station this size.\" One of his hands drops a glass of something murky on the bar in front of you. \"On the house. First one only — after that, you pay like everyone else.\"\n\nHe leans one massive arm on the bar. \"Name's Grek. I own this place. You want to eat, drink, or hear the latest gossip, this is where you come. You want trouble, take it to the docking bay — I just had the floor re-sealed.\"\n\n\"Once you've got some credits together, come back and I might know about some work. Always someone on this station who needs something done and doesn't want to do it themselves.\"" },
          { text: "\"You again. You look like you could use a drink, but I look like I could use paying customers. Come back when you've got credits, or something interesting to tell me.\"" }
        ]
      }
    }
  },

  "docking_access": {
    name: "Docking Bay Access Corridor",
    description: "A wide industrial corridor leading to the station's docking facilities. The floor is grated metal, and through the gaps you can see {item}conduits{/item} and cable runs snaking into the station's guts. Heavy blast {item}doors{/item} line both sides — individual docking bay airlocks, each with a status {item}panels{/item} showing green (occupied), red (sealed), or dark (empty).\n\nThe main concourse lies to the west. A large set of doors to the east opens into the main docking bay observation deck. To the south, a reinforced door is marked: TRAINING BAY.",
    exits: {
      west: "main_concourse",
      east: "docking_bay",
      south: "training_bay"
    },
    objects: {
      "doors": "The blast doors are numbered DB-01 through DB-12. Most show green — occupied. A few are dark. DB-07 has a hand-written 'OUT OF ORDER' sign taped over its status panel. The doors themselves are Imperial-spec: thick, magnetically sealed, and designed to contain explosive decompression.",
      "conduits": "Through the grated floor, you can see the station's mechanical guts — power conduits, fuel lines, atmospheric processors, and data cables bundled in thick sheaths. It's a tangled mess that suggests decades of modifications by dozens of different mechanics, none of whom bothered to consult the previous one's work.",
      "panels": "The status panels beside each door show basic information: bay number, current occupant's ship registration (or 'SEALED' for empty bays), atmospheric status, and power draw. Most of the registration numbers mean nothing to you."
    },
    npcs: {}
  },

  "docking_bay": {
    name: "Docking Bay Observation Deck",
    description: "A wide observation platform overlooking the station's main docking {item}bay{/item} through a wall of reinforced transparisteel. Below, the cavernous bay stretches out — a vast space of landing pads, fuel lines, and cargo loaders. {item}Ships{/item} of various sizes sit on the deck, from single-pilot fighters to mid-bulk freighters. Maintenance crews and loading droids move between them.\n\nA grizzled Duros named {npc}Renn{/npc} in a dockmaster's vest leans against the {item}railing{/item}, surveying the bay with proprietary interest. The access corridor lies back to the west.",
    exits: {
      west: "docking_access"
    },
    objects: {
      "bay": "The main docking bay is an impressive space — clearly this station's primary reason for existing. You count at least eight ships on the deck below: a couple of beat-up YT-series freighters, a Corellian Action VI transport taking on cargo, what looks like a decommissioned Z-95 Headhunter with its weapons stripped, and several smaller craft you can't identify from up here. Fuel lines and power cables snake across the deck like mechanical serpents.",
      "ships": "From up here you can see the ships more clearly. Most are working vessels — freighters and transports showing the wear of regular hyperspace travel. The Z-95 catches your eye — it's small, fast-looking even with empty weapon mounts. A price tag hangs from its landing strut, but you can't read it from this distance.",
      "railing": "The observation railing is cold durasteel, worn smooth by countless hands. Small plaques along its length mark ship berths and their assigned pad numbers. Someone has scratched 'JESSA WAS HERE' into one of them."
    },
    npcs: {
      "dockmaster": {
        name: "Dockmaster Renn",
        keywords: ["dockmaster", "renn", "duros"],
        look: "A lean Duros with faded blue skin and large red eyes that seem to catalog every ship, crate, and person in the bay simultaneously. His dockmaster's vest is covered in pockets, each stuffed with datapads, styluses, and what appears to be a half-eaten ration bar. A heavy blaster pistol sits openly on his hip — standard equipment for someone who handles docking disputes.",
        combat: { blaster: 12, dodge: 10, meleeParry: 7, brawlParry: 7, brawl: 7, str: 7, damage: 15, weaponType: 'dodge', weaponName: 'heavy blaster pistol', stunOnly: false, security: true },
        talk: [
          { once: "renn_intro", text: "{npc}Dockmaster Renn{/npc} turns those large red eyes on you, evaluating.\n\n\"Ah. The pod survivor.\" His voice has the characteristic Duros rasp. \"I processed your escape pod's wreckage — or what was left of it. Standard Imperial pod, military-grade. No markings, no serial numbers. Someone went to a lot of trouble to scrub that pod clean before you ended up in it.\"\n\nHe shrugs, turning back to the bay. \"Not my business. My business is ships. When you've got the credits for one, come see me. I handle all sales and berth assignments on the station.\"\n\nHe nods toward the bay below. \"Got a few vessels for sale right now, if you're the type to dream. That Z-95 down there's been sitting for weeks. Previous owner couldn't pay his docking fees.\"" },
          { text: "\"Still window shopping? Can't blame you. A ship's the only real freedom in this galaxy.\" He glances at the bay. \"Save up your credits. I'll be here when you're ready.\"" }
        ]
      }
    }
  },

  "back_room": {
    name: "The Back Room",
    description: "Past the bead curtain, the cantina's back room is a haze of smoke and low conversation. A single overhead lamp casts a pool of light over a large sabacc {item}table{/item} surrounded by mismatched chairs. The walls are lined with faded holoposters of podracing champions and swoop jockeys.\n\nA grizzled {npc}dealer{/npc} sits at the head of the table, shuffling a deck of cards with mechanical precision. A few other players occupy the remaining seats — a nervous-looking Sullustan, a scarred human woman, and a Rodian who hasn't blinked in a while.\n\nThe cantina is back to the east.",
    exits: {
      east: "cantina"
    },
    objects: {
      "table": "A hexagonal sabacc table with worn felt and built-in chip trays. The randomizer is a cheap aftermarket model bolted to the center — it sparks occasionally when it cycles. Minimum buy-in appears to be 25 credits.\n\n{dim}Type {/dim}{green}gamble <amount>{/green}{dim} to play a hand of sabacc. Uses your Gambling skill vs the dealer's.{/dim}",
      "chips": "Stacks of credit chips in various denominations. The house chips are stamped with a crude hydrospanner logo — Grek's branding, apparently.",
      "players": "The other players at the table: a sweating Sullustan who keeps checking his chrono, a hard-faced human woman with a cybernetic eye, and a Rodian whose pile of chips suggests he's been here a while. None of them look like they'd take kindly to cheating.",
      "posters": "Faded holoposters line the walls — podracers from Malastare, swoop champions from Nar Shaddaa, and what appears to be a signed portrait of a Twi'lek dancer. Someone has drawn a mustache on the dancer."
    },
    npcs: {
      "dealer": {
        name: "Sabacc Dealer",
        keywords: ["dealer", "sabacc", "card dealer"],
        look: "A thin human male with slicked-back grey hair and hands that move with the precision of a droid. His expression is permanently neutral — the face of someone who's dealt ten thousand hands and stopped caring about the outcome of any of them. A small earpiece suggests he's in contact with the house — probably Grek.",
        combat: { blaster: 9, dodge: 9, meleeParry: 6, brawlParry: 6, brawl: 6, str: 7, damage: 9, weaponType: 'dodge', weaponName: 'hold-out blaster', stunOnly: false, security: true },
        gambling: 17, // 5D+2 — need ~6D to start winning consistently
        talk: [
          { text: "{npc}Sabacc Dealer{/npc} glances up from the cards.\n\n\"Looking to play? Buy-in starts at 25 credits. No upper limit — if you've got the nerve.\"\n\nHe taps the table. \"Standard rules. Your Gambling against mine. Beat me, you double your bet. Lose, the house keeps it. Push means your credits come back.\"\n\n{dim}Type {/dim}{green}gamble <amount>{/green}{dim} to play a hand. Minimum 25 credits.{/dim}" }
        ]
      }
    }
  },

  "general_store": {
    name: "Surplus & Salvage",
    description: "A cluttered shop crammed floor-to-ceiling with merchandise. Display cases hold blasters, vibroblades, and assorted gear in varying states of repair. Shelves line every wall, stacked with medpacs, power packs, tools, and equipment that ranges from nearly-new to barely-functional. The air smells of gun oil and solder.\n\nA Toydarian shopkeeper hovers behind a reinforced {item}counter{/item}, wings buzzing. A {item}price list{/item} is mounted on the wall. The main concourse is back to the southeast.",
    exits: {
      southeast: "main_concourse"
    },
    objects: {
      "counter": "A heavy durasteel counter with a transparisteel display top showing the higher-end merchandise — a few decent blasters, a vibroblade with an intact edge, and a rack of medpacs. A small sign reads: 'YOU BREAK IT, YOU BUY IT. YOU STEAL IT, I SHOOT YOU.'",
      "price list": "A price board mounted on the wall:\n\n{gold}═══ FOR SALE ═══{/gold}\n  {item}Blaster Pistol{/item}        500 cr  — 4D damage {dim}(blast){/dim}\n  {item}Heavy Blaster Pistol{/item}  750 cr  — 5D damage {dim}(blast){/dim}\n  {item}Vibroblade{/item}            250 cr  — STR+2D damage {dim}(knife){/dim}\n  {item}Force Pike{/item}            500 cr  — STR+2D damage {dim}(knife){/dim}\n  {item}Medpac{/item}                100 cr  — heals one wound level\n  {item}Breath Mask{/item}            50 cr  — survival gear\n  {item}Glow Rod{/item}               10 cr  — light source\n  {item}Comlink{/item}                25 cr  — personal communicator\n\n{dim}Type {/dim}{green}buy <item>{/green}{dim} to purchase. Type {/dim}{green}sell <item>{/green}{dim} to sell from inventory (25% of value).{/dim}",
      "shelves": "Rows upon rows of merchandise, much of it second-hand. You spot power converters, restraining bolts, hydrospanners, breath masks, glow rods, ration packs, and about a dozen things you can't identify. Some of it has blaster scoring. Some of it might have blood on it. You don't ask."
    },
    npcs: {
      "shopkeeper": {
        name: "Kex",
        keywords: ["shopkeeper", "kex", "toydarian", "merchant", "shop"],
        look: "A portly Toydarian with patchy blue-grey skin and stubby wings that somehow keep his bulk airborne. His snout twitches constantly as he appraises everything in the room — including you. A money belt cinches his waist, jangling with credit chips. His small, shrewd eyes miss nothing.",
        combat: { blaster: 10, dodge: 12, meleeParry: 6, brawlParry: 6, brawl: 6, str: 5, damage: 12, weaponType: 'dodge', weaponName: 'heavy blaster', stunOnly: false, security: true },
        shop: {
          buy: [
            { id: 'blaster_pistol', name: 'Blaster Pistol', price: 500, description: 'A standard BlasTech DL-18 blaster pistol in working condition. Reliable, accurate, nothing fancy. Damage: 4D.\n\n{dim}Combat: {/dim}{green}blast{/green}{dim} <target> — uses Blaster skill, defended by Dodge.{/dim}', damage: '4D', combatType: 'blaster' },
            { id: 'heavy_blaster_pistol', name: 'Heavy Blaster Pistol', price: 750, description: 'A BlasTech DL-44 heavy blaster pistol. Packs a serious punch at the cost of range. Damage: 5D.\n\n{dim}Combat: {/dim}{green}blast{/green}{dim} <target> — uses Blaster skill, defended by Dodge.{/dim}', damage: '5D', combatType: 'blaster' },
            { id: 'vibroblade', name: 'Vibroblade', price: 250, description: 'A standard-issue vibroblade with an ultrasonic edge. Quiet, reliable, and legal on most stations. Damage: STR+2D.\n\n{dim}Combat: {/dim}{green}knife{/green}{dim} <target> — uses Melee Combat skill, defended by Melee Parry.{/dim}', damage: '5D', combatType: 'melee' },
            { id: 'force_pike', name: 'Force Pike', price: 500, description: 'An electrified melee weapon favored by guards and enforcers. The stun tip can be toggled to lethal. Damage: STR+2D.\n\n{dim}Combat: {/dim}{green}knife{/green}{dim} <target> — uses Melee Combat skill, defended by Melee Parry.{/dim}', damage: '5D', combatType: 'melee' },
            { id: 'medpac', name: 'Medpac', price: 100, description: 'A standard field medical kit. Contains bandages, bacta patches, antiseptic spray, and a stimulant injector. One use — heals one wound level.\n\n{dim}Use: {/dim}{green}use medpac{/green}', consumable: true, effect: 'heal' },
            { id: 'breath_mask', name: 'Breath Mask', price: 50, description: 'A compact respirator that filters toxins and provides breathable air in hostile atmospheres. Good for about four hours of continuous use.' },
            { id: 'glow_rod', name: 'Glow Rod', price: 10, description: 'A portable light source. Illuminates about a 20-meter radius. Standard expedition gear.' },
            { id: 'comlink', name: 'Comlink', price: 25, description: 'A personal comlink with a range of about 50 kilometers in atmosphere, or low orbit. Standard civilian model.' }
          ],
          sellRate: 0.25
        },
        talk: [
          { text: "{npc}Kex{/npc} buzzes over, wings humming.\n\n\"Ah, a customer! Or a browser. I get a lot of browsers.\" He gestures at the packed shelves. \"Everything you see is for sale. Fair prices — well, fair for this station.\"\n\nHe taps the price board. \"Check the {item}price list{/item} on the wall. {green}buy{/green} what you need, {green}sell{/green} what you don't. I take anything that's not bolted down — twenty-five percent of market value, take it or leave it.\"\n\nHe hovers closer, lowering his voice. \"And if you find anything... interesting... down in the maintenance levels, I don't ask where it came from.\"" }
        ]
      }
    }
  },

  "maintenance_sub": {
    name: "Maintenance Sublevel — Back Alley",
    description: "A cramped passage between exposed conduit runs and leaking pipes, lit by a single flickering emergency strip that casts everything in sickly yellow. The air is thick with the smell of coolant and rust. {item}Graffiti{/item} covers the walls — gang tags, crude drawings, and what appears to be a tally of debts owed. Puddles of condensation reflect the dim light.\n\nA narrow stairwell leads northeast back up to the main concourse. The passage continues south into deeper maintenance tunnels, but a collapsed {item}bulkhead{/item} blocks the way.\n\nA {npc}thug{/npc} leans against the far wall, watching you with unfriendly eyes.",
    exits: {
      northeast: "main_concourse"
    },
    objects: {
      "graffiti": "A mess of spray-painted tags in Aurebesh and Basic. 'VOID DEMONS RUN THIS DECK' is scrawled across one wall in red. Below it, someone added in smaller text: 'Void Demons couldn't run a refresher.' A series of tally marks near the floor might be tracking fights — or kills.",
      "bulkhead": "A collapsed section of ceiling has blocked the passage south. Durasteel beams and shattered plating form an impassable barrier. Whatever's beyond it has been sealed off for a long time — rust has welded the debris together.",
      "puddles": "Murky puddles of condensation and coolant runoff. They smell faintly of ozone and machine oil. Not the kind of water you'd want to drink, even on a station this rough.",
      "pipes": "Exposed pipes of various diameters run along the ceiling and walls, some wrapped in deteriorating insulation, others bare and warm to the touch. One of them hisses steam at irregular intervals."
    },
    npcs: {
      "thug": {
        name: "Station Thug",
        keywords: ["thug", "tough", "punk", "guy"],
        look: "A heavyset human male with a scarred face, wearing a stained utility jumpsuit with the sleeves torn off. A crude vibroblade is strapped to his thigh and a cheap blaster pistol sits in a hip holster. He has the look of someone who's been on the wrong side of the law for so long he's forgotten which side is which.",
        combat: {
          blaster: 9,         // 3D
          dodge: 7,           // 2D+1
          meleeParry: 8,      // 2D+2
          brawlParry: 8,      // 2D+2
          brawl: 10,          // 3D+1
          melee: 9,           // 3D
          str: 10,            // 3D+1
          damage: 12,         // 4D blaster pistol
          weaponType: 'dodge',
          weaponName: 'cheap blaster pistol',
          stunOnly: false,
          security: false     // no security down here
        },
        loot: {
          credits: { min: 15, max: 75 },
          cp: 2,
          items: [
            { id: 'cheap_blaster', name: 'Cheap Blaster Pistol', description: 'A worn-out BlasTech knockoff. The power pack is half-depleted and the barrel is slightly warped, but it still fires. Damage: 3D+2.\n\n{dim}Combat: {/dim}{green}blast{/green}{dim} <target> — uses Blaster skill, defended by Dodge.{/dim}', damage: '3D+2', combatType: 'blaster', chance: 0.5 },
            { id: 'vibroblade', name: 'Crude Vibroblade', description: 'A low-quality vibroblade with a chipped edge and a motor that rattles when activated. Damage: STR+2D.\n\n{dim}Combat: {/dim}{green}knife{/green}{dim} <target> — uses Melee Combat skill, defended by Melee Parry.{/dim}', damage: '5D+1', combatType: 'melee', chance: 0.4 }
          ]
        },
        talk: [
          { text: "The thug pushes off the wall and squares up to you.\n\n\"Wrong turn, spacer. This ain't the promenade.\" He cracks his knuckles. \"Toll's fifty credits. Or you can try walking past me. Your call.\"\n\n{dim}You could pay ({/dim}{green}pay thug{/green}{dim}), fight ({/dim}{green}blast thug{/green}{dim} / {/dim}{green}punch thug{/green}{dim} / {/dim}{green}knife thug{/green}{dim}), or leave ({/dim}{green}ne{/green}{dim}).{/dim}" }
        ]
      }
    }
  },

  "training_bay": {
    name: "Training Bay",
    description: "A converted cargo bay turned into a makeshift training facility. Blast-scarred durasteel walls show the marks of countless practice sessions. A row of {item}targets{/item} lines the far wall — scoring plates that flash when hit. The floor is padded with heavy mats, and a weapons {item}rack{/item} along one wall holds practice equipment.\n\nA {npc}training droid{/npc} stands at the center of the bay, its photoreceptors scanning for the next opponent. A sign by the door reads: 'ALL WEAPONS SET TO STUN — NO EXCEPTIONS.'\n\nThe docking access corridor lies to the north.",
    exits: {
      north: "docking_access"
    },
    objects: {
      "targets": "Scoring plates mounted on the far wall, each about torso-sized. They flash green on a hit, red on a miss. The accuracy tracking system above them appears to be broken — nobody's kept score in a while.",
      "rack": "A weapons rack holding practice equipment: a training blaster (set to stun), a padded combat staff, and a set of sparring gloves. The blaster has 'PROPERTY OF DRIFTER'S ANCHORAGE — DO NOT REMOVE' etched into the grip.\n\n{dim}Weapon keywords for combat:{/dim}\n  {green}blast{/green} <target> — Blaster skill, defended by Dodge\n  {green}knife{/green} <target> — Melee Combat, defended by Melee Parry\n  {green}punch{/green} <target> — Brawling, defended by Brawling Parry\n  {green}saber{/green} <target> — Lightsabers, defended by Melee Parry\n  {green}flee{/green} — attempt to disengage from combat",
      "sign": "A plasteel sign bolted to the wall: 'TRAINING BAY RULES: 1) All weapons stun only. 2) No lethal modifications. 3) Medical droid on standby. 4) Management not responsible for bruised egos. 5) If the droid beats you, you buy it a lubricant.'",
      "mats": "Thick padded mats covering the deck — enough cushioning to break a fall without breaking a spine. They're worn smooth in the center from heavy use."
    },
    npcs: {
      "training_droid": {
        name: "Training Droid",
        keywords: ["droid", "training", "combat droid", "sparring"],
        look: "A boxy Mark IV combat training droid, about 1.5 meters tall. Its chassis is dented and scorched from countless sparring sessions, but it moves with smooth mechanical precision. A glowing blue band around its torso indicates stun-only mode. Its vocabulator occasionally emits encouraging beeps between rounds.\n\n{dim}To fight it, type: {/dim}{green}blast droid{/green}{dim}, {/dim}{green}punch droid{/green}{dim}, or {/dim}{green}knife droid{/green}",
        combat: { blaster: 8, dodge: 7, meleeParry: 7, brawlParry: 7, brawl: 7, str: 7, damage: 8, weaponType: 'dodge', weaponName: 'stun blaster', stunOnly: true, security: false },
        talk: [
          { text: "The training droid beeps twice and assumes a ready stance. Its vocabulator crackles:\n\n\"COMBAT TRAINING PROTOCOL READY. STUN MODE ACTIVE. INITIATE WHEN READY.\"\n\n{dim}Attack it to start a sparring match: {/dim}{green}blast droid{/green}{dim}, {/dim}{green}punch droid{/green}{dim}, or {/dim}{green}knife droid{/green}" }
        ]
      }
    }
  }

};

// ============================================================
// Intro sequence flag — tracks if player has seen the wake-up
// ============================================================
const MUD_INTRO_ROOM = "infirmary";

// --- END OF ROOMS_DATA ---
