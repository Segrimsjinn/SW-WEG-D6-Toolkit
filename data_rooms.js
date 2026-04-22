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
        look: "The 2-1B surgical droid regards you with calm photoreceptors. Its vocabulator emits a faint hum, ready to dispense medical advice whether you want it or not.\n\n{dim}It can teach basic field medicine. Type {/dim}{green}train{/green}{dim} to learn.{/dim}",
        combat: { blaster: 6, dodge: 6, meleeParry: 3, brawlParry: 3, brawl: 3, str: 6, damage: 9, weaponType: 'dodge', weaponName: 'stun injector', stunOnly: true, security: true },
        trainer: {
          skills: ['First Aid']
        },
        talk: [
          { once: "med_droid_intro", text: "The droid's photoreceptors brighten. \"Ah, you're up and about. Good. Your vitals have stabilized nicely. I've treated the worst of your injuries — bruised ribs, mild concussion, some superficial burns. Nothing a few days of rest won't finish.\"\n\nIt pauses, adjusting a dial on the monitor.\n\n\"I'd recommend checking in with Station Administration on the main concourse. They'll want to register you. Without papers, you won't be able to find work, book passage, or do much of anything on this station.\"\n\nThe droid tilts its head. \"And between you and me — don't linger in the corridors too long without credits. Drifter's Anchorage isn't the most... charitable place.\"" },
          { text: "\"Your vitals look stable. I'd suggest heading to Station Administration — north through the corridor to the main concourse, then follow the signs. And do try not to get shot before your ribs finish healing.\"" },
          { text: "\"I can teach you the basics of field medicine, but if you're serious about it, a proper medical academy on one of the Core Worlds is where real surgical training happens. You'd need to get off this station first, of course.\"" }
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
    description: "The main concourse of Drifter's Anchorage is a wide, vaulted corridor that serves as the station's central hub. A {item}crowd{/item} of spacers, merchants, and hard-eyed individuals flows in both directions. Overhead, a cracked {item}holodisplay{/item} cycles through trade postings and docking schedules in flickering blue text.\n\nThe medical wing lies to the south. A cantina's neon {item}sign{/item} glows to the west, its muffled music bleeding through the doorway. The docking bay access corridor stretches east. To the north, a transparisteel-fronted office bears the sign: STATION ADMINISTRATION. A narrow, poorly lit passage leads southwest into the station's maintenance levels. To the northwest, a shopfront with a flickering neon sign reads: SURPLUS & SALVAGE. A reinforced door to the northeast bears the emblem of station security: MARSHAL'S OFFICE.",
    exits: {
      south: "med_corridor",
      west: "cantina",
      east: "docking_access",
      north: "admin_office",
      southwest: "maintenance_sub",
      northwest: "general_store",
      northeast: "marshal_office"
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
        keywords: ["admin", "administrator", "vylen", "woman", "officer"],
        look: "A human woman in her forties with close-cropped grey hair and sharp eyes that have seen too many fabricated identification documents. Her uniform is Imperial-cut but stripped of rank insignia — Remnant administrative corps, probably. A nameplate on her desk reads: ADM. K. VYLEN.\n\n{dim}She also teaches administrative and social skills. Type {/dim}{green}train{/green}{dim} to see her courses.{/dim}",
        combat: { blaster: 10, dodge: 9, meleeParry: 6, brawlParry: 6, brawl: 6, str: 7, damage: 12, weaponType: 'dodge', weaponName: 'hold-out blaster', stunOnly: false, security: true },
        trainer: {
          skills: ['Bureaucracy', 'Persuasion', 'Languages', 'Cultures', 'Alien Species', 'Planetary Systems']
        },
        talk: [
          { once: "admin_intro", text: "{npc}Administrator Vylen{/npc} looks up from her terminal, studying you with a practiced eye.\n\n\"The escape pod survivor. The medical droid flagged your arrival.\" She pulls up something on her screen. \"No ID, no transit papers, no credit chit. Not exactly a strong start.\"\n\nShe taps a few keys. \"Here's how this works. I register you in our system, you get a temporary station pass. That lets you move freely, take on posted work, and use the cantina without getting hassled by security. In return, you follow station rules and don't cause problems.\"\n\nShe slides a datapad across the desk. \"Standard waiver. You agree not to hold the station liable for... well, anything, really. Sign it and you're a registered resident of Drifter's Anchorage.\"\n\n\"Ready? Let's get you into the system.\"", action: "chargen" },
          { cond: "character_created", text: "\"You're already in the system. Try not to make me regret it.\"" },
          { text: "\"Still sorting yourself out? Take your time — but not too much time. Unregistered residents make security nervous, and you don't want to make security nervous.\"\n\n{dim}Type {/dim}{green}talk vylen{/green}{dim} again when you're ready to register.{/dim}", action: "chargen" },
          { text: "\"What I teach here is station-level administration. The Diplomatic Corps on Coruscant, or the Bureaucratic Guild — they train people who actually shape policy. You'd need to get off-station to pursue that, though.\"" }
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
        look: "A heavyset Besalisk with mottled green-brown skin and four thick arms that move with surprising dexterity behind the bar. His lower left hand has a cybernetic replacement — cheap but functional. He watches the room with the calm authority of someone who keeps a scatter-gun under the counter and isn't shy about using it.\n\n{dim}Grek knows the streets. Type {/dim}{green}train{/green}{dim} for what he can teach.{/dim}",
        combat: { blaster: 12, dodge: 9, meleeParry: 10, brawlParry: 12, brawl: 13, str: 13, damage: 15, weaponType: 'dodge', weaponName: 'scatter-gun', stunOnly: false, security: true },
        trainer: {
          skills: ['Streetwise', 'Intimidation', 'Survival']
        },
        talk: [
          { once: "grek_intro", text: "{npc}Grek{/npc} glances at you with one eye while his other three arms continue pouring drinks.\n\n\"New face. Escape pod, right? Word travels fast on a station this size.\" One of his hands drops a glass of something murky on the bar in front of you. \"On the house. First one only — after that, you pay like everyone else.\"\n\nHe leans one massive arm on the bar. \"Name's Grek. I own this place. You want to eat, drink, or hear the latest gossip, this is where you come. You want trouble, take it to the docking bay — I just had the floor re-sealed.\"\n\n\"Once you've got some credits together, come back and I might know about some work. Always someone on this station who needs something done and doesn't want to do it themselves.\"" },
          { text: "\"You again. You look like you could use a drink, but I look like I could use paying customers. Come back when you've got credits, or something interesting to tell me.\"" },
          { text: "\"You want real street education? The Bounty Hunters' Guild has training programs — if you've got the stomach for it. Or I know people on Tatooine who could teach you things no academy would. Either way, you'd have to get off this rock first.\"" }
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
    description: "A wide observation platform overlooking the station's main docking {item}bay{/item} through a wall of reinforced transparisteel. Below, the cavernous bay stretches out — a vast space of landing pads, fuel lines, and cargo loaders. {item}Ships{/item} of various sizes sit on the deck, from single-pilot fighters to mid-bulk freighters. Maintenance crews and loading droids move between them.\n\nA grizzled Duros named {npc}Renn{/npc} in a dockmaster's vest leans against the {item}railing{/item}, surveying the bay with proprietary interest. The access corridor lies back to the west. A lift to the south is marked: MINE SHUTTLE — PAD 7.",
    exits: {
      west: "docking_access",
      south: "mine_shuttle"
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
        look: "A lean Duros with faded blue skin and large red eyes that seem to catalog every ship, crate, and person in the bay simultaneously. His dockmaster's vest is covered in pockets, each stuffed with datapads, styluses, and what appears to be a half-eaten ration bar. A heavy blaster pistol sits openly on his hip — standard equipment for someone who handles docking disputes.\n\n{dim}Renn knows ships inside and out. Type {/dim}{green}train{/green}{dim} to learn from him.{/dim}",
        combat: { blaster: 12, dodge: 10, meleeParry: 7, brawlParry: 7, brawl: 7, str: 7, damage: 15, weaponType: 'dodge', weaponName: 'heavy blaster pistol', stunOnly: false, security: true },
        trainer: {
          skills: ['Space Transports', 'Astrogation', 'Starship Gunnery', 'Starship Shields', 'Sensors', 'Communications', 'Repulsorlift Operation', 'Blaster Repair', 'Computer Programming/Repair', 'Droid Repair', 'Repulsorlift Repair', 'Security', 'Space Transports Repair', 'Starship Weapon Repair']
        },
        talk: [
          { once: "renn_intro", text: "{npc}Dockmaster Renn{/npc} turns those large red eyes on you, evaluating.\n\n\"Ah. The pod survivor.\" His voice has the characteristic Duros rasp. \"I processed your escape pod's wreckage — or what was left of it. Standard Imperial pod, military-grade. No markings, no serial numbers. Someone went to a lot of trouble to scrub that pod clean before you ended up in it.\"\n\nHe shrugs, turning back to the bay. \"Not my business. My business is ships. When you've got the credits for one, come see me. I handle all sales and berth assignments on the station.\"\n\nHe nods toward the bay below. \"Got a few vessels for sale right now, if you're the type to dream. That Z-95 down there's been sitting for weeks. Previous owner couldn't pay his docking fees.\"" },
          { text: "\"Still window shopping? Can't blame you. A ship's the only real freedom in this galaxy.\" He glances at the bay. \"Save up your credits. I'll be here when you're ready.\"" },
          { text: "\"What I know, I learned in forty years of docking ships and pulling wrecks apart. But the Spacers' Guild runs proper certification, and Corellian Engineering has an apprenticeship that'll make you a real shipwright. You'd need to get off-station to find either one, though.\"" }
        ]
      }
    }
  },

  "marshal_office": {
    name: "Marshal's Office",
    description: "A no-nonsense security office with reinforced walls and a single narrow window of armored transparisteel looking out onto the concourse. {item}Wanted posters{/item} line one wall — a mix of local troublemakers and galaxy-wide bounties. A weapons {item}locker{/item} stands in the corner, securely locked. The {item}desk{/item} is neat, organized, and dominated by a bank of security monitors.\n\n{npc}Marshal Corso{/npc} sits behind the desk, eyes flicking between the monitors and whoever just walked through his door.\n\nThe main concourse is back to the southwest.",
    exits: {
      southwest: "main_concourse"
    },
    objects: {
      "wanted posters": "A dozen wanted posters tacked to the wall. Most are local — docking fee defaulters, a repeat brawler banned from the cantina, someone who stole a maintenance droid. A few are Imperial Remnant bounties with serious credit amounts attached. One poster in the corner has been there so long the ink has faded to illegibility.",
      "locker": "A heavy weapons locker bolted to the floor and wall. Durasteel construction with a biometric lock. Through the narrow viewing slit you can see blaster rifles, stun cuffs, and what looks like a riot shield. Standard station security armory.",
      "desk": "Marshal Corso's desk is military-neat. A bank of six security monitors shows feeds from around the station — the concourse, docking bay, cantina entrance, and several corridor junctions. A half-empty mug of caf sits next to a blaster cleaning kit.",
      "monitors": "Six security feeds cycling through station cameras. The resolution is grainy but functional. You can see the usual traffic on the concourse, a loading operation in the docking bay, and — on monitor four — the maintenance sublevel, where a familiar-looking thug is loitering."
    },
    npcs: {
      "marshal": {
        name: "Marshal Corso",
        keywords: ["marshal", "corso", "security", "law"],
        look: "A broad-shouldered Zabrak male with a crown of vestigial horns and sharp amber eyes that seem to be running a threat assessment on everyone in the room, including you. His uniform is crisp station security grey with a marshal's badge on the chest. A heavy blaster pistol and a pair of stun cuffs hang from his belt. He moves with the controlled economy of someone who's been in a lot of fights and won most of them.",
        combat: { blaster: 16, dodge: 14, meleeParry: 13, brawlParry: 13, brawl: 13, str: 12, damage: 15, weaponType: 'dodge', weaponName: 'heavy blaster', stunOnly: false, security: false },
        trainer: {
          skills: ['Law Enforcement', 'Investigation', 'Search', 'Command', 'Tactics', 'Willpower']
        },
        talk: [
          { once: "marshal_intro", text: "{npc}Marshal Corso{/npc} looks up from his monitors, amber eyes narrowing.\n\n\"New resident. I've seen your file — escape pod, no ID, no history.\" He leans back. \"I don't care where you came from. I care what you do while you're here.\"\n\nHe taps the desk. \"Station rules are simple. Don't start fights on the concourse. Don't steal from the shops. Don't kill anyone who doesn't deserve it. Break the rules and my security teams will make you regret it.\"\n\nHe pauses. \"That said — I could use people with the right instincts. If you want to learn how to think like security, how to investigate, how to command a situation — I can teach you. For a fee.\"\n\n{dim}Type {/dim}{green}train{/green}{dim} to see what he teaches.{/dim}" },
          { text: "\"Keep your nose clean and we won't have problems. You want training, type {green}train{/green}.\"" },
          { text: "\"What I teach is enough to keep order on a station like this. But if you want real credentials — the CorSec Academy on Corellia, or the Imperial Security Bureau if you've got the nerve — they train proper law enforcement. You'd need to get off-station to apply.\"" }
        ]
      }
    }
  },

  "back_room": {
    name: "The Back Room",
    description: "Past the bead curtain, the cantina's back room is a haze of smoke and low conversation. A single overhead lamp casts a pool of light over a large sabacc {item}table{/item} surrounded by mismatched chairs. The walls are lined with faded {item}posters{/item} of podracing champions and swoop jockeys. A board on the wall lists the {item}games{/item} and their rules.\n\nA grizzled {npc}dealer{/npc} sits at the head of the table, shuffling a deck of cards with mechanical precision. A few other {item}players{/item} occupy the remaining seats — a nervous-looking Sullustan, a scarred human woman, and a Rodian who hasn't blinked in a while.\n\nThe cantina is back to the east.",
    exits: {
      east: "cantina"
    },
    objects: {
      "table": "A hexagonal sabacc table with worn felt and built-in chip trays. The randomizer is a cheap aftermarket model bolted to the center — it sparks occasionally when it cycles. Bets are 1, 5, 10, or 25 credits.\n\n{dim}Type {/dim}{green}gamble <amount>{/green}{dim} to play a hand. Bets: 1, 5, 10, or 25 credits.{/dim}",
      "chips": "Stacks of credit chips in various denominations. The house chips are stamped with a crude hydrospanner logo — Grek's branding, apparently.",
      "games": "Three games run in the back room:\n\n{gold}SABACC{/gold} — Skill-based card game. Your Gambling vs the dealer's. Beat him to double your bet, lose and the house keeps it. Push is a draw.\n  {dim}Command: {/dim}{green}gamble <bet>{/green}\n\n{gold}CHANCE CUBES{/gold} — Two dice, call high (8+) or low (6-). Quick and simple. Seven means the house wins.\n  {dim}Command: {/dim}{green}chance high <bet>{/green}{dim} or {/dim}{green}chance low <bet>{/green}\n\n{gold}JUBILEE WHEEL{/gold} — Four dice are thrown. Bet on the total — pick a number, odd/even, high/low, or thirds. Better odds for broader bets, bigger payouts for exact numbers.\n  {dim}Command: {/dim}{green}wheel{/green}{dim} for full options{/dim}\n\n{dim}All bets: 1, 5, 10, or 25 credits.{/dim}",
      "players": "The other players at the table: a sweating Sullustan who keeps checking his chrono, a hard-faced human woman with a cybernetic eye, and a Rodian whose pile of chips suggests he's been here a while. None of them look like they'd take kindly to cheating.",
      "posters": "Faded holoposters line the walls — podracers from Malastare, swoop champions from Nar Shaddaa, and what appears to be a signed portrait of a Twi'lek dancer. Someone has drawn a mustache on the dancer."
    },
    npcs: {
      "dealer": {
        name: "Sabacc Dealer",
        keywords: ["dealer", "sabacc", "card dealer"],
        look: "A thin human male with slicked-back grey hair and hands that move with the precision of a droid. His expression is permanently neutral — the face of someone who's dealt ten thousand hands and stopped caring about the outcome of any of them. A small earpiece suggests he's in contact with the house — probably Grek.\n\n{dim}He teaches the subtler arts. Type {/dim}{green}train{/green}{dim} between hands.{/dim}",
        combat: { blaster: 9, dodge: 9, meleeParry: 6, brawlParry: 6, brawl: 6, str: 7, damage: 9, weaponType: 'dodge', weaponName: 'hold-out blaster', stunOnly: false, security: true },
        trainer: {
          skills: ['Gambling', 'Con', 'Forgery', 'Hide', 'Sneak', 'Pick Pocket']
        },
        gambling: 17, // 5D+2 — need ~6D to start winning consistently
        talk: [
          { text: "{npc}Sabacc Dealer{/npc} glances up from the cards.\n\n\"Looking to play? Bets are 1, 5, 10, or 25 credits.\"\n\nHe taps the table. \"Standard rules. Your Gambling against mine. Beat me, you double your bet. Lose, the house keeps it. Push means your credits come back.\"\n\n{dim}Type {/dim}{green}gamble <amount>{/green}{dim} to play a hand. Bets: 1, 5, 10, or 25.{/dim}" },
          { text: "The dealer shuffles absently. \"The tricks I teach are good enough for station games. But if you want to run with real operators — the Smugglers' Alliance, or the guilds on Nar Shaddaa — that's a different level. You'd have to get off-station first. And survive the audition.\"" }
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
      "price list": "A price board mounted on the wall:\n\n{gold}═══ FOR SALE ═══{/gold}\n  {item}Blaster Pistol{/item}        500 cr  — 4D damage {dim}(blast){/dim}\n  {item}Heavy Blaster Pistol{/item}  750 cr  — 5D damage {dim}(blast){/dim}\n  {item}Vibroblade{/item}            250 cr  — STR+2D damage {dim}(knife){/dim}\n  {item}Force Pike{/item}            500 cr  — STR+2D damage {dim}(knife){/dim}\n  {item}Medpac{/item}                100 cr  — heals one wound level\n  {item}Breath Mask{/item}            50 cr  — survival gear\n  {item}Glow Rod{/item}               10 cr  — light source\n  {item}Comlink{/item}                25 cr  — personal communicator\n  {item}Mining Kit{/item}             30 cr  — helmet, glow rod, pick\n  {item}Blast Vest{/item}             300 cr — +1D physical, +1 energy\n  {item}Blast Helmet{/item}           300 cr — +1D physical, +1 energy\n  {item}Bounty Hunter Armor{/item}  2,500 cr — +2D physical, +1D energy\n\n{dim}Type {/dim}{green}buy <item>{/green}{dim} to purchase. Type {/dim}{green}sell <item>{/green}{dim} to sell from inventory (25% of value).{/dim}",
      "shelves": "Rows upon rows of merchandise, much of it second-hand. You spot power converters, restraining bolts, hydrospanners, breath masks, glow rods, ration packs, and about a dozen things you can't identify. Some of it has blaster scoring. Some of it might have blood on it. You don't ask."
    },
    npcs: {
      "shopkeeper": {
        name: "Kex",
        keywords: ["shopkeeper", "kex", "toydarian", "merchant", "shop"],
        look: "A portly Toydarian with patchy blue-grey skin and stubby wings that somehow keep his bulk airborne. His snout twitches constantly as he appraises everything in the room — including you. A money belt cinches his waist, jangling with credit chips. His small, shrewd eyes miss nothing.\n\n{dim}He'll teach you the trade. Type {/dim}{green}train{/green}{dim} to learn.{/dim}",
        combat: { blaster: 10, dodge: 12, meleeParry: 6, brawlParry: 6, brawl: 6, str: 5, damage: 12, weaponType: 'dodge', weaponName: 'heavy blaster', stunOnly: false, security: true },
        trainer: {
          skills: ['Bargain', 'Value', 'Business']
        },
        shop: {
          buy: [
            { id: 'blaster_pistol', name: 'Blaster Pistol', price: 500, description: 'A standard BlasTech DL-18 blaster pistol in working condition. Reliable, accurate, nothing fancy. Damage: 4D.\n\n{dim}Combat: {/dim}{green}blast{/green}{dim} <target> — uses Blaster skill, defended by Dodge.{/dim}', damage: '4D', combatType: 'blaster' },
            { id: 'heavy_blaster_pistol', name: 'Heavy Blaster Pistol', price: 750, description: 'A BlasTech DL-44 heavy blaster pistol. Packs a serious punch at the cost of range. Damage: 5D.\n\n{dim}Combat: {/dim}{green}blast{/green}{dim} <target> — uses Blaster skill, defended by Dodge.{/dim}', damage: '5D', combatType: 'blaster' },
            { id: 'vibroblade', name: 'Vibroblade', price: 250, description: 'A standard-issue vibroblade with an ultrasonic edge. Quiet, reliable, and legal on most stations. Damage: STR+2D.\n\n{dim}Combat: {/dim}{green}knife{/green}{dim} <target> — uses Melee Combat skill, defended by Melee Parry.{/dim}', damage: '5D', combatType: 'melee' },
            { id: 'force_pike', name: 'Force Pike', price: 500, description: 'An electrified melee weapon favored by guards and enforcers. The stun tip can be toggled to lethal. Damage: STR+2D.\n\n{dim}Combat: {/dim}{green}knife{/green}{dim} <target> — uses Melee Combat skill, defended by Melee Parry.{/dim}', damage: '5D', combatType: 'melee' },
            { id: 'medpac', name: 'Medpac', price: 100, description: 'A standard field medical kit. Contains bandages, bacta patches, antiseptic spray, and a stimulant injector. One use — heals one wound level.\n\n{dim}Use: {/dim}{green}use medpac{/green}', consumable: true, effect: 'heal' },
            { id: 'breath_mask', name: 'Breath Mask', price: 50, description: 'A compact respirator that filters toxins and provides breathable air in hostile atmospheres. Good for about four hours of continuous use.' },
            { id: 'glow_rod', name: 'Glow Rod', price: 10, description: 'A portable light source. Illuminates about a 20-meter radius. Standard expedition gear.' },
            { id: 'comlink', name: 'Comlink', price: 25, description: 'A personal comlink with a range of about 50 kilometers in atmosphere, or low orbit. Standard civilian model.' },
            { id: 'mining_kit', name: 'Mining Kit', price: 30, description: 'A basic mining kit — hard hat with mounted glow rod, a durasteel pick, and a pair of heavy gloves. Everything you need to work a quartz vein on Gamma-7.\n\n{dim}Required to use the {/dim}{green}mine{/green}{dim} command in the asteroid mine.{/dim}' },
            { id: 'blast_vest', name: 'Blast Vest', price: 300, description: 'A padded vest with lightweight armor plating over the torso. Standard protection for anyone expecting trouble. +1D physical, +1 energy.\n\n{dim}Worn automatically — adds to your Strength when soaking damage.{/dim}', armor: { physical: 3, energy: 1 } },
            { id: 'blast_helmet', name: 'Blast Helmet', price: 300, description: 'A reinforced helmet with a retractable visor. Protects the head from shrapnel, blaster splash, and the occasional bar stool. +1D physical, +1 energy.\n\n{dim}Worn automatically — adds to your Strength when soaking damage.{/dim}', armor: { physical: 3, energy: 1 } },
            { id: 'bounty_hunter_armor', name: 'Bounty Hunter Armor', price: 2500, description: 'A full suit of composite armor plates over a reinforced bodyglove. The kind of gear worn by professionals who expect to get shot at regularly. +2D physical, +1D energy.\n\n{dim}Worn automatically — adds to your Strength when soaking damage.{/dim}', armor: { physical: 6, energy: 3 } }
          ],
          sellRate: 0.25
        },
        talk: [
          { text: "{npc}Kex{/npc} buzzes over, wings humming.\n\n\"Ah, a customer! Or a browser. I get a lot of browsers.\" He gestures at the packed shelves. \"Everything you see is for sale. Fair prices — well, fair for this station.\"\n\nHe taps the price board. \"Check the {item}price list{/item} on the wall. {green}buy{/green} what you need, {green}sell{/green} what you don't. I take anything that's not bolted down — twenty-five percent of market value, take it or leave it.\"\n\nHe hovers closer, lowering his voice. \"And if you find anything... interesting... down in the maintenance levels, I don't ask where it came from.\"" },
          { text: "\"What I teach you is how not to get swindled. The Traders' Guild or the Commerce Guild — they train people to run real operations. Supply chains, interstellar contracts. You'd have to get off this station to find them, but it's good money.\"" }
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
    description: "A converted cargo bay turned into a makeshift training facility. Blast-scarred durasteel walls show the marks of countless practice sessions. A row of {item}targets{/item} lines the far wall — scoring plates that flash when hit. The floor is padded with heavy {item}mats{/item}, and a weapons {item}rack{/item} along one wall holds practice equipment.\n\nA {npc}training droid{/npc} stands at the center of the bay, its photoreceptors scanning for the next opponent. In the corner, a grizzled {npc}instructor{/npc} watches the room with crossed arms. A {item}sign{/item} by the door reads: 'ALL WEAPONS SET TO STUN — NO EXCEPTIONS.'\n\nThe docking access corridor lies to the north.",
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
      "instructor": {
        name: "Instructor Denn",
        keywords: ["instructor", "denn", "teacher", "trainer"],
        look: "A scarred human male in his fifties with a military bearing — straight back, steady hands, eyes that miss nothing. His left arm is cybernetic from the elbow down, polished chrome that whirs softly when he moves. Former Imperial Army, by the look of him, though he doesn't wear insignia anymore.\n\n{dim}Type {/dim}{green}train{/green}{dim} to see what he can teach you.{/dim}",
        combat: { blaster: 15, dodge: 14, meleeParry: 14, brawlParry: 13, brawl: 13, str: 10, damage: 15, weaponType: 'dodge', weaponName: 'heavy blaster', stunOnly: false, security: true },
        trainer: {
          skills: ['Blaster', 'Brawling Parry', 'Dodge', 'Melee Combat', 'Melee Parry', 'Heavy Weapons', 'Grenade', 'Running', 'Thrown Weapon', 'Vehicle Blasters', 'Brawling']
        },
        talk: [
          { text: "{npc}Instructor Denn{/npc} uncrosses his arms and looks you over.\n\n\"You want to learn how to fight — or how to fight better. That's why people come to me.\"\n\nHe flexes his cybernetic hand. \"I teach combat skills. Blasters, blades, brawling, dodging — anything that keeps you alive when someone's trying to kill you. Costs Character Points to improve. The more you know, the more it costs to learn the next step.\"\n\nHe nods toward the mats. \"Type {green}train{/green} to see what I can teach and what it'll cost. You'll need the Character Points — earn them by fighting.\"" },
          { text: "\"If you're serious about combat, the Mercenary Guild on Ord Mantell trains for free — if you can get there. And pass the entrance exam.\"" }
        ]
      },
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
  },

  // ============================================================
  // ASTEROID MINE — Gamma-7 Mining Facility
  // ============================================================

  "mine_shuttle": {
    name: "Mine Shuttle — Pad 7",
    description: "A cramped shuttle bay holding a battered industrial transport — the daily run to Asteroid Gamma-7. The shuttle is little more than a pressurized cargo container with engines bolted on. A {item}schedule{/item} board on the wall shows departure times. A {npc}foreman{/npc} in a hard hat and high-vis vest checks names off a datapad near the boarding ramp.\n\nThe docking bay observation deck is back to the north.",
    exits: {
      north: "docking_bay",
      south: "mine_entrance"
    },
    objects: {
      "schedule": "The shuttle schedule reads:\n  {dim}GAMMA-7 MINING FACILITY — Continuous service{/dim}\n  {dim}Shift rate: 0 credits (you keep what you mine){/dim}\n  {dim}Bring your own mining kit (helmet, glow rod, pick).{/dim}\n  {dim}Company NOT responsible for: injury, death, cave spiders{/dim}",
      "shuttle": "A Sienar Fleet Systems cargo shuttle that has seen far better days. The hull is pockmarked with micrometeorite impacts and the port engine nacelle is held together with welding and optimism. It smells like dust, sweat, and ozone inside."
    },
    npcs: {
      "foreman": {
        name: "Foreman Takka",
        keywords: ["foreman", "takka", "boss", "supervisor"],
        look: "A stocky Rodian female in industrial coveralls and a scuffed hard hat. Her large eyes are perpetually narrowed against imaginary dust, even on the station. A mining pick hangs from her belt loop and a comlink crackles on her shoulder.\n\n{dim}She'll toughen you up. Type {/dim}{green}train{/green}{dim} to see what she teaches.{/dim}",
        combat: { blaster: 10, dodge: 8, meleeParry: 9, brawlParry: 9, brawl: 10, str: 9, damage: 10, weaponType: 'dodge', weaponName: 'mining blaster', stunOnly: false, security: true },
        trainer: {
          skills: ['Stamina', 'Climbing/Jumping', 'Lifting', 'Swimming']
        },
        talk: [
          { once: "foreman_intro", text: "{npc}Foreman Takka{/npc} looks up from her datapad, antennae twitching.\n\n\"You here to work? Good. We're always short-handed — the smart ones leave after their first cave spider sighting, and the dumb ones... well.\"\n\nShe gestures south toward the shuttle. \"The mine's on Gamma-7, a rock about two klicks from the station. Regenerative quartz — the crystal grows back over time, so we never run out. Just head in, find a vein, and {green}mine{/green} it. Bring the quartz back and sell it at the shop.\"\n\n\"You'll need a {item}Mining Kit{/item} — helmet, glow rod, and pick. Grab one from Surplus & Salvage on the concourse. Thirty credits. We don't hand out gear anymore.\"\n\n\"Fair warning: don't get greedy. You overwork a vein and the ceiling comes down. And stay in the lit sections unless you want to meet our resident cave spider. She doesn't come into the light, but the deep tunnels are her territory.\"\n\n{dim}Buy a Mining Kit from the shop, then head south. Type {/dim}{green}mine{/green}{dim} at a quartz vein to extract crystals.{/dim}" },
          { text: "\"Still here? The mine's south. Find quartz, dig it out, sell it topside. Don't die.\"" },
          { text: "\"The Miners' Guild runs proper operations on the big asteroid fields — full safety gear, union wages, pension plans. Not like this scrape-and-pray outfit. You'd have to get off-station to sign up, but it beats dying in a cave spider's nest.\"" }
        ]
      }
    }
  },

  "mine_entrance": {
    name: "Gamma-7 — Mine Entrance",
    description: "The airlock opens into a wide natural cavern converted into a mining operation. Industrial flood{item}lights{/item} bathe everything in harsh white, bolted to support beams driven into the rock. The air is cold and tastes of mineral dust. A set of metal {item}rails{/item} for ore carts runs deeper into the asteroid.\n\nThe shuttle bay is back to the north. A reinforced tunnel leads south into {item}Shaft Alpha{/item}.",
    exits: {
      north: "mine_shuttle",
      south: "shaft_alpha"
    },
    objects: {
      "lights": "Heavy-duty industrial floodlights clamped to the ceiling beams. They hum loudly and throw sharp shadows against the cavern walls. A hand-painted sign near the nearest one reads: 'DO NOT TURN OFF LIGHTS — YOU WILL DIE.'",
      "rails": "Narrow-gauge ore cart rails, rusted but functional. They run from a loading platform near the airlock deep into the tunnels. An empty ore cart sits abandoned near the entrance, half-filled with rock dust.",
      "shaft alpha": "The main tunnel leading deeper into the asteroid. The walls are rough-hewn rock with occasional veins of pale crystal catching the light. Support beams every few meters keep the ceiling from becoming the floor."
    },
    npcs: {},
    mine: { lit: true }
  },

  "shaft_alpha": {
    name: "Gamma-7 — Shaft Alpha",
    description: "A broad tunnel cut through dark grey rock, well-lit by a string of industrial {item}lamps{/item} bolted to the ceiling. The air hums with the distant vibration of drilling equipment somewhere deeper in the complex. Pale veins of regenerative {item}quartz{/item} glitter in the walls — this section has been picked over but not stripped bare.\n\nThe mine entrance is to the north. The tunnel forks ahead — {item}Vein West{/item} branches to the west, and {item}Vein East{/item} branches to the east.",
    exits: {
      north: "mine_entrance",
      west: "vein_west",
      east: "vein_east"
    },
    objects: {
      "lamps": "Industrial glow strips strung along the ceiling, casting steady white light. They're powered by a generator somewhere near the entrance — you can hear its faint hum. As long as these stay on, the cave spiders stay deep.",
      "quartz": "Thin veins of regenerative quartz run through the rock walls. This section has been mined frequently — the crystals here are small and just starting to regrow. The deeper veins will have larger deposits."
    },
    npcs: {},
    mine: { lit: true, vein: { id: 'shaft_alpha', name: 'Shaft Alpha Quartz', maxNodes: 2, value: 15, depthTier: 0 } }
  },

  "vein_west": {
    name: "Gamma-7 — Vein West",
    description: "A narrower side tunnel branching west from the main shaft. The {item}lights{/item} are sparser here — older fixtures that flicker occasionally. Thick bands of pale {item}quartz{/item} run through the walls, some of the crystals as long as your forearm. The rock is stable but you can see old {item}cracks{/item} in the ceiling where previous collapses were shored up with durasteel beams.\n\nShaft Alpha is back to the east. A dark passage continues south toward the deep junction.",
    exits: {
      east: "shaft_alpha",
      south: "deep_junction"
    },
    objects: {
      "lights": "Older-model glow strips, some of them dead, others flickering. This section is right on the edge of the safe zone. Beyond here, the lights give out entirely.",
      "quartz": "Healthy veins of regenerative quartz — the crystals are well-formed and gleaming. This is a productive mining spot. Each extraction takes a chunk but the quartz will regrow given time.",
      "cracks": "Hairline fractures in the ceiling rock, reinforced with durasteel cross-beams. Evidence that this tunnel has collapsed before. Mining carefully is advisable — every extraction weakens the ceiling a little more."
    },
    npcs: {
      "spiderling": {
        name: "Cave Spiderling",
        keywords: ["spiderling", "spider", "little spider", "small spider"],
        look: "A cave spiderling about the size of a dinner plate — pale chitin, eight spindly legs, and tiny mandibles that click nervously. It skitters along the wall, more interested in insects than you. Harmless unless cornered.\n\n{dim}You could {/dim}{green}punch spiderling{/green}{dim} or {/dim}{green}knife spiderling{/green}{dim} if you want its chitin and silk.{/dim}",
        combat: { blaster: 3, dodge: 10, meleeParry: 3, brawlParry: 3, brawl: 6, str: 3, damage: 3, weaponType: 'brawlParry', weaponName: 'tiny mandibles', stunOnly: false, security: false },
        loot: {
          credits: 0,
          cp: 0,
          items: [
            { id: 'spider_chitin', name: 'Spider Chitin Plate', description: 'A small plate of cave spider chitin — lightweight, tough, and slightly translucent. Crafters and armorers pay decent money for these.', sellValue: 20, chance: 0.7 },
            { id: 'spider_silk', name: 'Spider Silk Bundle', description: 'A tangle of cave spider silk — incredibly strong for its weight. Used in lightweight armor weaves and medical sutures.', sellValue: 15, chance: 0.5 }
          ]
        },
        talk: [
          { text: "The spiderling clicks its mandibles and retreats a few centimeters. It doesn't understand Basic. Or much of anything, really." }
        ]
      }
    },
    mine: { lit: true, vein: { id: 'vein_west', name: 'Western Quartz', maxNodes: 3, value: 25, depthTier: 1 } }
  },

  "vein_east": {
    name: "Gamma-7 — Vein East",
    description: "A side tunnel angling east, supported by heavy rock pillars left in place by the miners. The {item}lights{/item} cast long shadows between the pillars. Rich bands of {item}quartz{/item} stripe the walls in pale blue-white, catching the light beautifully. Dust motes drift in the still air.\n\nShaft Alpha is back to the west. A dark opening to the south descends toward the deep junction.",
    exits: {
      west: "shaft_alpha",
      south: "deep_junction"
    },
    objects: {
      "lights": "Mounted on the support pillars, these lights are in decent condition. You can see where the illumination ends though — the southern passage drops into complete darkness.",
      "quartz": "Thick veins of blue-white regenerative quartz. The crystals here are dense and well-formed — more valuable than the picked-over stuff near the entrance."
    },
    npcs: {
      "spiderling": {
        name: "Cave Spiderling",
        keywords: ["spiderling", "spider", "little spider", "small spider"],
        look: "A cave spiderling about the size of a dinner plate — pale chitin, eight spindly legs, and tiny mandibles that click nervously. It skitters along the wall, more interested in insects than you. Harmless unless cornered.\n\n{dim}You could {/dim}{green}punch spiderling{/green}{dim} or {/dim}{green}knife spiderling{/green}{dim} if you want its chitin and silk.{/dim}",
        combat: { blaster: 3, dodge: 10, meleeParry: 3, brawlParry: 3, brawl: 6, str: 3, damage: 3, weaponType: 'brawlParry', weaponName: 'tiny mandibles', stunOnly: false, security: false },
        loot: {
          credits: 0,
          cp: 0,
          items: [
            { id: 'spider_chitin', name: 'Spider Chitin Plate', description: 'A small plate of cave spider chitin — lightweight, tough, and slightly translucent. Crafters and armorers pay decent money for these.', sellValue: 20, chance: 0.7 },
            { id: 'spider_silk', name: 'Spider Silk Bundle', description: 'A tangle of cave spider silk — incredibly strong for its weight. Used in lightweight armor weaves and medical sutures.', sellValue: 15, chance: 0.5 }
          ]
        },
        talk: [
          { text: "The spiderling clicks its mandibles and retreats a few centimeters. It doesn't understand Basic. Or much of anything, really." }
        ]
      }
    },
    mine: { lit: true, vein: { id: 'vein_east', name: 'Eastern Quartz', maxNodes: 3, value: 25, depthTier: 1 } }
  },

  "deep_junction": {
    name: "Gamma-7 — Deep Junction",
    description: "{red}The lights end here.{/red} You stand at a junction where the lit tunnels give way to absolute darkness. The air is colder, damper, and carries a faint organic smell — something lives down here. Your glow rod barely penetrates the gloom.\n\nThick veins of {item}quartz{/item} glitter in your light — larger and more valuable than anything in the upper tunnels. But the {item}darkness{/item} presses in from all sides. You can hear something skittering in the deep passages.\n\nLit tunnels lead north to Vein West and north to Vein East. Dark passages continue southwest and southeast into the deep veins.",
    exits: {
      northwest: "vein_west",
      northeast: "vein_east",
      southwest: "deep_vein_1",
      southeast: "deep_vein_2"
    },
    objects: {
      "quartz": "Massive crystal formations jut from the walls and ceiling — some as thick as your arm. The regenerative quartz down here has had time to grow undisturbed. It's worth considerably more than the surface veins.",
      "darkness": "Beyond your glow rod's feeble circle of light, the tunnels stretch into impenetrable blackness. You can hear the faint click-click of something moving on stone. Something large."
    },
    npcs: {},
    mine: { lit: false, vein: { id: 'deep_junction', name: 'Deep Junction Quartz', maxNodes: 3, value: 50, depthTier: 2 } }
  },

  "deep_vein_1": {
    name: "Gamma-7 — Deep Vein Alpha",
    description: "{red}Deep territory.{/red} A winding passage through raw, unworked rock. Your light catches massive {item}quartz{/item} formations erupting from the walls — pristine crystals that have never been touched by a mining pick. The silence is broken only by the drip of water and the occasional distant {item}skittering{/item}.\n\nThe deep junction is back to the northeast. A narrow crawlway continues south.",
    exits: {
      northeast: "deep_junction",
      south: "deep_vein_3"
    },
    objects: {
      "quartz": "Pristine regenerative quartz — the largest crystals you've seen. They pulse with a faint inner light, almost alive. Extremely valuable, but mining down here is risky. The spider patrols these tunnels.",
      "skittering": "A rhythmic clicking sound echoing from somewhere in the darkness. Multiple legs on stone. It's getting closer — or further away. Hard to tell with the echoes."
    },
    npcs: {},
    mine: { lit: false, vein: { id: 'deep_vein_1', name: 'Deep Vein Alpha Quartz', maxNodes: 4, value: 75, depthTier: 3 } }
  },

  "deep_vein_2": {
    name: "Gamma-7 — Deep Vein Beta",
    description: "{red}Deep territory.{/red} A jagged passage with a low ceiling that forces you to crouch. Massive {item}quartz{/item} crystals grow from every surface — floor, walls, ceiling — creating a glittering forest of pale crystal. The air is thick with mineral dust. {item}Webbing{/item} stretches between some of the larger formations.\n\nThe deep junction is back to the northwest. A tight passage continues south.",
    exits: {
      northwest: "deep_junction",
      south: "deep_vein_3"
    },
    objects: {
      "quartz": "The quartz down here grows in massive clusters, some crystals as long as your leg. They hum faintly when you touch them — the regenerative matrix is strong this deep. Worth a fortune if you can get them out alive.",
      "webbing": "Thick strands of something organic stretch between the crystal formations — pale, sticky, and strong. Definitely not natural mineral deposits. Something built these. Something big."
    },
    npcs: {},
    mine: { lit: false, vein: { id: 'deep_vein_2', name: 'Deep Vein Beta Quartz', maxNodes: 4, value: 75, depthTier: 3 } }
  },

  "deep_vein_3": {
    name: "Gamma-7 — Deep Vein Gamma",
    description: "{red}Deep territory.{/red} The two deep passages converge into a broader chamber. {item}Quartz{/item} formations here are enormous — pillars of crystal stretching from floor to ceiling, pulsing with faint luminescence. The cave spider's {item}nest{/item} is clearly nearby — thick {item}webbing{/item} covers much of the ceiling and a musky animal smell permeates the air.\n\nPassages lead north to Deep Vein Alpha and north to Deep Vein Beta. A large opening continues south to the Crystal Chamber.",
    exits: {
      north: "deep_vein_1",
      northeast: "deep_vein_2",
      south: "crystal_chamber"
    },
    objects: {
      "quartz": "Crystal pillars thick enough that you couldn't wrap your arms around them. The regenerative quartz down here is ancient — decades or centuries of undisturbed growth. Each crystal extracted is worth a small fortune.",
      "webbing": "Dense organic webbing crisscrosses the ceiling and upper walls. Some of it is old and brittle; some is fresh and glistening. The spider has been here recently.",
      "nest": "You can see the remnants of shed chitin plates and what might be old egg casings wedged into a crack in the wall. The spider uses this passage regularly."
    },
    npcs: {},
    mine: { lit: false, vein: { id: 'deep_vein_3', name: 'Deep Vein Gamma Quartz', maxNodes: 4, value: 100, depthTier: 3 } }
  },

  "crystal_chamber": {
    name: "Gamma-7 — Crystal Chamber",
    description: "{red}The heart of the mine.{/red} A vast natural cavern whose walls, floor, and ceiling are almost entirely regenerative {item}quartz{/item}. The crystals' natural luminescence fills the space with an ethereal pale glow — beautiful and deeply unsettling this far underground. The chamber is easily thirty meters across.\n\nThis is the richest deposit in Gamma-7 — and the center of the cave spider's territory. Fresh {item}webbing{/item} and {item}drag marks{/item} on the crystal floor tell you this is a feeding ground.\n\nThe only exit leads north back to Deep Vein Gamma.",
    exits: {
      north: "deep_vein_3"
    },
    objects: {
      "quartz": "The mother lode. Every surface gleams with regenerative quartz in massive, pristine formations. Some crystals are as tall as you are. A single extraction here is worth more than a day's work in the upper tunnels. The risk matches the reward.",
      "webbing": "Thick, fresh webbing in elaborate patterns — this isn't random construction, it's a trap web. The spider uses the crystal chamber as a hunting ground, stringing webs between the larger formations to snare anything that wanders in.",
      "drag marks": "Scrape marks across the crystal floor where something heavy has been dragged. A few scattered pieces of mining equipment — a helmet, a broken pick, a single boot — suggest that not every miner who came down here made it back out."
    },
    npcs: {},
    mine: { lit: false, vein: { id: 'crystal_chamber', name: 'Chamber Quartz', maxNodes: 5, value: 150, depthTier: 4 } }
  }

};

// ============================================================
// Intro sequence flag — tracks if player has seen the wake-up
// ============================================================
const MUD_INTRO_ROOM = "infirmary";

// --- END OF ROOMS_DATA ---
