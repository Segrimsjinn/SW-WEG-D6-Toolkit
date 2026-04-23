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
    description: "The main concourse of Drifter's Anchorage is a wide, vaulted corridor that serves as the station's central hub. A {item}crowd{/item} of spacers, merchants, and hard-eyed individuals flows in both directions. Overhead, a cracked {item}holodisplay{/item} cycles through trade postings and docking schedules in flickering blue text.\n\nThe medical wing lies to the south. A cantina's neon {item}sign{/item} glows to the west, its muffled music bleeding through the doorway. The docking bay access corridor stretches east. To the north, a transparisteel-fronted office bears the sign: STATION ADMINISTRATION. A narrow, poorly lit passage leads southwest into the station's maintenance levels. To the northwest, a shopfront with a flickering neon sign reads: SURPLUS & SALVAGE. A reinforced door to the northeast bears the emblem of station security: MARSHAL'S OFFICE. A grated stairwell descends to the lower deck.",
    exits: {
      south: "med_corridor",
      west: "cantina",
      east: "docking_access",
      north: "admin_office",
      southwest: "maintenance_sub",
      northwest: "general_store",
      northeast: "marshal_office",
      down: "lower_concourse"
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
    description: "A small, surprisingly orderly office behind a transparisteel partition. {npc}Vylen{/npc}, a human woman in a crisp but worn uniform, sits behind a {item}terminal{/item}, processing what seems like an endless queue of datapads. Beside her, a tall {npc}Muun{/npc} in a dark suit manages a banking {item}counter{/item} with quiet efficiency. The walls are lined with {item}cabinets{/item} and a single Imperial-era {item}poster{/item} that someone has defaced with a crude drawing of a mynock. A security {item}camera{/item} blinks red in the corner.",
    exits: {
      south: "main_concourse"
    },
    objects: {
      "terminal": "A standard Imperial administrative terminal, its casing yellowed with age but its screen sharp and bright. Data scrolls past too quickly to read from this angle.",
      "poster": "An old Imperial COMPNOR recruitment poster: 'THE EMPIRE NEEDS YOU — SERVE WITH PRIDE.' Someone has drawn a mynock eating the stormtrooper's helmet. Below that, in smaller handwriting: 'Anchorage needs you too. Pay's worse.'",
      "camera": "A security camera mounted in the corner, its red indicator light blinking steadily. It looks newer than anything else in the room — someone takes security seriously, even if the decor suggests otherwise.",
      "cabinets": "Row after row of old-fashioned filing cabinets. In an age of datapads and holonet access, the presence of physical files suggests either extreme paranoia about slicing, or a bureaucracy too stubborn to modernize. Probably both.",
      "counter": "A small banking counter with reinforced transparisteel and a credit slot. A holographic display shows current exchange rates and account balances. Clean, efficient, very Muun.\n\n{dim}Commands: {/dim}{green}deposit <amount>{/green}{dim}, {/dim}{green}withdraw <amount>{/green}{dim}, {/dim}{green}balance{/green}"
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
      },
      "banker": {
        name: "Nul Vreen",
        keywords: ["banker", "muun", "nul", "vreen", "bank"],
        look: "A tall, thin Muun with elongated features and pale skin, dressed in a perfectly tailored dark suit that probably cost more than everything else in this office combined. His long fingers move across a datapad with mechanical precision. He regards you with the polite detachment of someone who views all organic life as a series of account balances.\n\n{dim}Commands: {/dim}{green}deposit <amount>{/green}{dim}, {/dim}{green}withdraw <amount>{/green}{dim}, {/dim}{green}balance{/green}",
        combat: { blaster: 7, dodge: 8, meleeParry: 5, brawlParry: 5, brawl: 5, str: 5, damage: 9, weaponType: 'dodge', weaponName: 'hold-out blaster', stunOnly: false, security: true },
        talk: [
          { once: "banker_intro", text: "{npc}Nul Vreen{/npc} inclines his head precisely 15 degrees — no more, no less.\n\n\"I manage the station's credit depository. Deposit your credits with me and they are secure — protected from... misfortune.\" His thin lips curve slightly. \"Death, theft, unfortunate gambling incidents. Your balance remains untouched.\"\n\nHe taps his datapad. \"{green}deposit{/green} credits in, {green}withdraw{/green} credits out, {green}balance{/green} to check. Simple. Even for non-Muun.\"" },
          { text: "\"Your account is always available. {green}deposit{/green}, {green}withdraw{/green}, or {green}balance{/green}. I charge no fees. The satisfaction of proper financial management is payment enough.\"" }
        ]
      }
    }
  },

  "cantina": {
    name: "The Rusty Hydrospanner",
    description: "The station cantina is dim and loud, exactly the way its clientele prefers it. Mismatched lighting casts everything in shades of amber and shadow. A long {item}bar{/item} runs along the far wall, tended by a surly-looking Besalisk named {npc}Grek{/npc} whose four arms keep glasses moving with mechanical efficiency. Scattered {item}tables{/item} fill the floor, occupied by the usual assortment of spacers, drifters, and people who'd rather not be looked at too closely.\n\nA {item}jukebox{/item} droid in the corner plays something vaguely jizz-like at a volume that discourages eavesdropping. The exit back to the main concourse is to the east. A bead curtain to the west leads to a dimly lit back room. A narrow staircase leads up to the flophouse rooms.",
    exits: {
      east: "main_concourse",
      west: "back_room",
      up: "flophouse"
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
      "ships": "From up here you can see the ships more clearly. Most are working vessels — freighters and transports showing the wear of regular hyperspace travel. A battered {item}Ghtroc 720{/item} freighter sits on pad 4 with a 'FOR SALE' beacon blinking on its hull. She's seen better days — scorched plating, a patched viewport, one landing strut slightly bent — but the engines look maintained and the hull is intact. Might be the cheapest way off this station.",
      "railing": "The observation railing is cold durasteel, worn smooth by countless hands. Small plaques along its length mark ship berths and their assigned pad numbers. Someone has scratched 'JESSA WAS HERE' into one of them.",
      "ghtroc 720": "A Ghtroc Industries 720 light freighter. She's not pretty — the hull plating is mismatched from repairs, one of the sensor dishes is crooked, and the previous owner apparently lost a disagreement with an asteroid. But the sublight engines are clean, the hyperdrive housing looks solid, and the cargo bay doors open and close without grinding. For a station like this, she's practically a luxury yacht.\n\n{dim}Ask {/dim}{npc}Renn{/npc}{dim} about buying her. Price: {/dim}{gold}23,000 credits{/gold}",
      "ghtroc": "A Ghtroc Industries 720 light freighter on pad 4. Battered but spaceworthy. Ask Renn about the price."
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
          { once: "renn_intro", text: "{npc}Dockmaster Renn{/npc} turns those large red eyes on you, evaluating.\n\n\"Ah. The pod survivor.\" His voice has the characteristic Duros rasp. \"I processed your escape pod's wreckage — or what was left of it. Standard Imperial pod, military-grade. No markings, no serial numbers. Someone went to a lot of trouble to scrub that pod clean before you ended up in it.\"\n\nHe shrugs, turning back to the bay. \"Not my business. My business is ships. When you've got the credits for one, come see me. I handle all sales and berth assignments on the station.\"\n\nHe nods toward the bay below. \"See that {item}Ghtroc 720{/item} on pad 4? Previous owner left in a hurry — gambling debts. She's not much to look at, but she's got a working hyperdrive and cargo space. Twenty-three thousand credits and she's yours. Probably the cheapest ticket off this rock you'll find.\"\n\n{dim}Type {/dim}{green}buy ship{/green}{dim} when you have 23,000 credits.{/dim}" },
          { text: "\"The Ghtroc's still sitting on pad 4. Twenty-three thousand credits. A ship's the only real freedom in this galaxy — and probably the only way you're getting off this station.\" He glances at the bay. \"{green}buy ship{/green} when you're ready.\"" },
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

  "flophouse": {
    name: "Flophouse — Upstairs Rooms",
    description: "A narrow corridor above the cantina lined with identical doors, each leading to a tiny room barely large enough for a {item}cot{/item} and a locker. The walls are thin enough to hear the music from below — and the arguments from next door. A faded {item}sign{/item} on the wall lists the rates.\n\nThe staircase back down to the cantina is below.",
    exits: {
      down: "cantina"
    },
    objects: {
      "cot": "A narrow cot with a lumpy mattress and a single blanket that's seen better decades. It's not comfortable, but it's horizontal and it's indoors. That's luxury on a station like this.\n\n{dim}Type {/dim}{green}sleep{/green}{dim} to rent a room and rest. Costs 25 credits. Advances time by 50 ticks, resetting veins and respawning NPCs. Requires at least 15 ticks of activity since your last rest.{/dim}",
      "sign": "A hand-painted sign:\n\n{gold}FLOPHOUSE RATES{/gold}\n  Cot & locker: {item}25 credits{/item} per rest\n  No refunds. No room service.\n  No blasters discharged indoors.\n  Violators will be ejected. From the airlock.",
      "locker": "A small metal locker bolted to the wall beside each cot. The lock is mechanical — a simple keypad code. Enough to keep honest people out."
    },
    npcs: {}
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
      "price list": "A price board mounted on the wall:\n\n{gold}═══ FOR SALE ═══{/gold}\n  {item}Blaster Pistol{/item}        500 cr  — 4D damage {dim}(blast){/dim}\n  {item}Heavy Blaster Pistol{/item}  750 cr  — 5D damage {dim}(blast){/dim}\n  {item}Vibroblade{/item}            250 cr  — STR+2D damage {dim}(knife){/dim}\n  {item}Force Pike{/item}            500 cr  — STR+2D damage {dim}(knife){/dim}\n  {item}Medpac{/item}                100 cr  — heals one wound level\n  {item}Breath Mask{/item}            50 cr  — survival gear\n  {item}Glow Rod{/item}               10 cr  — light source\n  {item}Comlink{/item}                25 cr  — personal communicator\n  {item}Mining Kit{/item}             30 cr  — helmet, glow rod, pick\n  {item}Blast Vest & Helmet{/item}    400 cr — +1D physical, +2 energy\n  {item}Bounty Hunter Armor{/item}  2,500 cr — +2D physical, +1D energy\n\n{dim}Type {/dim}{green}buy <item>{/green}{dim} to purchase. Type {/dim}{green}sell <item>{/green}{dim} to sell from inventory (25% of value).{/dim}",
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
            { id: 'blast_armor', name: 'Blast Vest & Helmet', price: 400, description: 'A padded vest with lightweight armor plating and a matching reinforced helmet with retractable visor. Standard protection for anyone expecting trouble. +1D physical, +2 energy.\n\n{dim}Worn automatically — adds to your Strength when soaking damage.{/dim}', armor: { physical: 3, energy: 2 } },
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
            { id: 'vibroblade', name: 'Crude Vibroblade', description: 'A low-quality vibroblade with a chipped edge and a motor that rattles when activated. Damage: STR+2D.\n\n{dim}Combat: {/dim}{green}knife{/green}{dim} <target> — uses Melee Combat skill, defended by Melee Parry.{/dim}', damage: '5D+1', combatType: 'melee', chance: 0.4 },
            { id: 'stolen_chrono', name: 'Engraved Chronometer', description: 'A quality chronometer with a scratched but still-legible inscription on the back: \"To K. Corso — 20 years of service. Station Security Division.\"\n\nThis belongs to the Marshal. He\'d probably want it back.\n\n{dim}You could {/dim}{green}sell{/green}{dim} it for quick credits, or return it to {/dim}{npc}Marshal Corso{/npc}{dim} at his office.{/dim}', sellValue: 100, isQuestItem: true, questId: 'corso_chrono', chance: 0.02 }
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
  },

  // ============================================================
  // LOWER DECK — The Underbelly
  // ============================================================

  "lower_concourse": {
    name: "Lower Deck — Concourse",
    description: "The lower deck of Drifter's Anchorage is everything the upper concourse pretends not to be. The ceiling is lower here, the lighting dimmer, and the air carries the smell of cheap stimcaf and recycled sweat. Exposed {item}pipes{/item} and cable runs line the walls. The {item}crowd{/item} is rougher — dock workers, off-shift miners, and people whose business thrives in shadow.\n\nA grated stairwell leads up to the main concourse. A battered neon sign to the west reads: THE BILGE RAT. A cluttered market stretches to the east — the {item}flopmarket{/item}. A dark corridor leads south deeper into the lower deck.",
    exits: {
      up: "main_concourse",
      west: "dive_bar",
      east: "flopmarket",
      south: "dark_corridor"
    },
    objects: {
      "pipes": "Exposed conduit and cable runs, some leaking coolant, others humming with power. Down here, maintenance is an afterthought. Someone has tapped into one of the power lines with an improvised junction — illegal, but nobody's checking.",
      "crowd": "Harder faces than upstairs. A pair of Weequay in stained jumpsuits sharing a bottle. A Devaronian woman counting credit chips at a fold-out table. A skinny human kid darting between legs, pickpocketing with more ambition than skill. Everyone minds their own business, aggressively.",
      "flopmarket": "You can see makeshift stalls and blankets spread with salvage, contraband, and junk stretching into a wide corridor to the east."
    },
    npcs: {
      "dockworker": {
        name: "Grizzled Dockworker",
        keywords: ["dockworker", "worker", "dock hand", "grizzled"],
        look: "A barrel-chested Aqualish in a sleeveless utility vest, his tusks stained with stimcaf. He's leaning against the wall nursing a bottle of something that smells flammable. His arms are covered in faded tattoos — ship registry numbers, from the look of them.",
        combat: { blaster: 9, dodge: 7, meleeParry: 8, brawlParry: 10, brawl: 11, str: 12, damage: 10, weaponType: 'brawlParry', weaponName: 'fists', stunOnly: false, security: false },
        talk: [
          { text: "The Aqualish grunts and gestures with his bottle.\n\n\"Upper deck's for tourists. Down here's where the real station lives.\" He takes a long pull. \"You want work that pays under the table, check the Bilge Rat. You want cheap gear, hit the flopmarket. You want trouble...\" He grins, showing stained tusks. \"Just keep walking south.\"" },
          { text: "\"You again. I don't know nothing about nobody. Buy me a drink sometime and maybe I'll remember something.\"" }
        ]
      }
    },
    lowerDeck: true
  },

  "dive_bar": {
    name: "The Bilge Rat",
    description: "If The Rusty Hydrospanner is rough, The Bilge Rat is a war crime against hospitality. The lighting is whatever filters through the haze of tabac smoke. The {item}bar{/item} is a sheet of corrugated metal propped on fuel drums. {item}Booths{/item} line the walls, most occupied by people who don't want to be seen.\n\nA scarred Trandoshan named {npc}Sska{/npc} tends bar with the warmth of a glacier. A {item}door{/item} in the back wall is marked 'PRIVATE' in three languages.\n\nThe lower concourse is back to the east.",
    exits: {
      east: "lower_concourse",
      west: "guild_back"
    },
    objects: {
      "bar": "A sheet of corrugated durasteel balanced on repurposed fuel drums. The surface is sticky with things you'd rather not identify. A hand-scrawled menu offers three options: 'Grog (5cr)', 'Strong Grog (10cr)', and 'Why (25cr)'. No further description is provided for any of them.",
      "booths": "Dim alcoves carved into the walls, each with a table and bench seats worn smooth. The booths are positioned to prevent anyone from reading lips or seeing datapads. A Rodian and a human are conducting some kind of deal in the far booth — credit chips and data cards changing hands.",
      "door": "A heavy door marked 'PRIVATE' in Basic, Huttese, and what might be Rodian. It's unlocked — whoever's behind it isn't worried about uninvited guests. Or they're confident they can handle them."
    },
    npcs: {
      "bartender": {
        name: "Sska",
        keywords: ["sska", "bartender", "trandoshan", "barkeep"],
        look: "A lean Trandoshan with dark green scales and amber eyes that reflect the dim light. A long scar runs from her jaw to her shoulder — blaster graze, by the look of it. She polishes a glass with a rag that's dirtier than the glass.",
        combat: { blaster: 12, dodge: 10, meleeParry: 11, brawlParry: 11, brawl: 12, str: 12, damage: 13, weaponType: 'dodge', weaponName: 'sawn-off blaster', stunOnly: false, security: false },
        trainer: {
          skills: ['Intimidation', 'Streetwise', 'Survival']
        },
        talk: [
          { text: "{npc}Sska{/npc} fixes you with one amber eye.\n\n\"Drink or leave.\" A pause. \"Or if you're looking for the guild, door's in the back. Tell them Sska didn't see you.\"\n\nShe goes back to polishing her glass.\n\n{dim}She teaches street skills. Type {/dim}{green}train{/green}{dim} to see what she offers.{/dim}" },
          { text: "\"The Hunters' Guild operates out of the back. I don't know nothing, I don't see nothing. That's why I'm still alive.\"" }
        ]
      },
      "smuggler": {
        name: "Nervous Smuggler",
        keywords: ["smuggler", "nervous", "human"],
        look: "A wiry human male in a flight jacket, eyes constantly darting to the exits. He's nursing a drink he hasn't touched, and one hand stays under the table — probably resting on a blaster. He looks like he's waiting for someone, or hiding from someone. Maybe both.",
        combat: { blaster: 10, dodge: 9, meleeParry: 6, brawlParry: 6, brawl: 7, str: 7, damage: 12, weaponType: 'dodge', weaponName: 'blaster pistol', stunOnly: false, security: false },
        talk: [
          { text: "The smuggler flinches when you approach.\n\n\"I'm not here. You didn't see me. We never had this conversation.\" He pauses. \"...Unless you're buying. I might know where to get things. Things that aren't on the shelves upstairs, if you catch my meaning.\"" },
          { text: "\"I said I'm not here. Move along.\"" }
        ]
      }
    },
    lowerDeck: true
  },

  "guild_back": {
    name: "Bounty Guild — Back Office",
    description: "Behind the 'PRIVATE' door, the atmosphere shifts. The room is clean, organized, and surprisingly professional. A {item}bounty board{/item} dominates one wall — holographic displays cycling through faces, crimes, and credit amounts. Weapon racks line another wall, and a {item}terminal{/item} hums in the corner.\n\nA Devaronian named {npc}Vexx{/npc} sits behind a desk piled with datapads, horns gleaming in the blue light of the bounty board.\n\nThe dive bar is back to the east.",
    exits: {
      east: "dive_bar"
    },
    objects: {
      "bounty board": "A wall-mounted holographic display cycling through active bounties. Most are off-station — targets scattered across the sector, well beyond your reach without a ship. But one section is marked 'LOCAL — STATION ACTIVE' in red.\n\n{dim}Type {/dim}{green}bounty{/green}{dim} to see today's active local bounty.{/dim}",
      "terminal": "A secure terminal linked to the regional bounty network. Incoming and outgoing bounty postings, payment confirmations, and target intel. You'd need guild access to use it properly.",
      "weapons": "A well-maintained rack of blasters, vibroblades, stun cuffs, and a few items you can't identify. Guild equipment — not for sale, but guild members can borrow gear for active bounties."
    },
    npcs: {
      "guildmaster": {
        name: "Vexx",
        keywords: ["vexx", "guildmaster", "devaronian", "guild"],
        look: "A Devaronian male with polished black horns and an easy smile that doesn't reach his eyes. He wears a well-cut jacket over a blaster holster — the kind of outfit that says 'I negotiate first, but I always win the negotiation.' A guild badge gleams on his lapel.",
        combat: { blaster: 14, dodge: 13, meleeParry: 10, brawlParry: 10, brawl: 10, str: 10, damage: 15, weaponType: 'dodge', weaponName: 'heavy blaster pistol', stunOnly: false, security: false },
        trainer: {
          skills: ['Investigation', 'Search', 'Streetwise', 'Con', 'Sneak', 'Hide']
        },
        talk: [
          { once: "guild_intro", text: "{npc}Vexx{/npc} looks up from his datapads, one eyebrow raised.\n\n\"Well, well. Fresh meat.\" He leans back, studying you. \"You look like someone who needs credits and isn't too particular about how they earn them. Am I wrong?\"\n\nHe gestures at the bounty board. \"I run the local guild chapter. Small operation, but legitimate — as legitimate as bounty hunting gets, anyway. We get skip-traces, warrant pickups, the occasional 'problem that needs solving.'\"\n\n\"Here's how it works. Every cycle I post a local bounty — someone on this station who's wanted. You take the job, you find them, you bring them down. Dead or alive, though alive pays better. Use your head — ask around, investigate, sneak up on them if you can. Brute force works too, but it's messy.\"\n\n\"Check the {item}bounty board{/item} or type {green}bounty{/green} to see what's active. I also teach the trade — {green}train{/green} if you want to sharpen your skills.\"\n\n\"One more thing — when you drop a target, you'll find a {item}Bounty Chip{/item} on them. Bring it back here and type {green}turn in{/green} to collect your credits. But if you die out there with a chip on you, the infirmary takes it to cover your medical bills. So don't get cocky.\"\n\nHe grins. \"Welcome to the guild. Try not to die on your first job.\"" },
          { text: "\"Check the board — {green}bounty{/green} for the active job. Or {green}train{/green} if you want to get better before you take on the next one.\"" },
          { text: "\"The real money's off-station. Sector-wide bounties, big targets, serious credits. But you'd need a ship for those. Something to work toward.\"" }
        ]
      }
    },
    lowerDeck: true
  },

  "flopmarket": {
    name: "Lower Deck — Flopmarket",
    description: "A wide corridor converted into an open-air market — if you can call recycled station air 'open.' Blankets and tarp-covered {item}stalls{/item} line both sides, selling everything from salvaged ship parts to dubious food to items that definitely fell off a cargo manifest somewhere.\n\nA Bith {npc}junk dealer{/npc} presides over the largest stall, surrounded by mountains of salvage. The lower concourse is back to the west.",
    exits: {
      west: "lower_concourse"
    },
    objects: {
      "stalls": "Dozens of makeshift stalls selling a chaotic mix of goods. Used power cells, mismatched boots, ration packs of questionable vintage, holonovels, droid parts, and a suspicious number of blaster power packs sold 'no questions asked.' The prices are lower than upstairs, but so is the quality."
    },
    npcs: {
      "junk_dealer": {
        name: "Fizz",
        keywords: ["fizz", "junk dealer", "bith", "dealer", "junk"],
        look: "A Bith with oversized cranial lobes and large, watery black eyes that somehow manage to look simultaneously bored and calculating. He sits atop a throne made entirely of stacked droid chassis, surrounded by piles of salvage that seem to obey their own gravitational rules.",
        combat: { blaster: 7, dodge: 8, meleeParry: 5, brawlParry: 5, brawl: 5, str: 5, damage: 9, weaponType: 'dodge', weaponName: 'hold-out blaster', stunOnly: false, security: false },
        talk: [
          { text: "{npc}Fizz{/npc} blinks slowly from atop his salvage throne.\n\n\"Everything's for sale. Nothing's guaranteed. Refund policy is: there is no refund policy.\" He gestures at the chaos around him. \"I also buy. Anything. The more questionable the provenance, the better the price.\"" },
          { text: "\"Still browsing? Take your time. I'm not going anywhere. Neither is any of this.\"" }
        ]
      },
      "armorer": {
        name: "Torgg",
        keywords: ["armorer", "torgg", "trandoshan", "weapons", "upgrade"],
        look: "A grizzled Trandoshan with one clouded eye and scales scarred by chemical burns — the marks of decades spent working with blaster gas and power cells. His workbench is covered in disassembled weapons, soldering tools, and calibration equipment. A magnifying visor is pushed up on his forehead.\n\n{dim}Type {/dim}{green}upgrade{/green}{dim} to see what he can do for your weapons.{/dim}",
        combat: { blaster: 11, dodge: 8, meleeParry: 10, brawlParry: 10, brawl: 11, str: 12, damage: 13, weaponType: 'dodge', weaponName: 'modified blaster', stunOnly: false, security: false },
        talk: [
          { text: "{npc}Torgg{/npc} squints at you with his good eye.\n\n\"You want your weapon hitting harder, I can do that. Recalibrate the power cell, tighten the focusing crystal, bore out the barrel. Two pips max — I'm good, but I'm not a KDY engineer.\"\n\nHe taps his workbench. \"Costs depend on the work. Type {green}upgrade{/green} to see what I can do and what it'll cost.\"\n\n\"Blasters, vibroblades, whatever you're carrying. Bring it here, I'll make it meaner.\"" },
          { text: "\"Got something that needs work? {green}upgrade{/green} to see the options. Two pips max on this bench.\"" }
        ]
      },
      "gambler_loser": {
        name: "Down-on-his-luck Gambler",
        keywords: ["gambler", "loser", "down"],
        look: "A haggard Sullustan sitting on an overturned crate, staring at an empty credit pouch. His clothes were expensive once — now they're just wrinkled and stained. He has the hollow eyes of someone who's lost everything at the sabacc table and is working out what to do next.",
        combat: { blaster: 7, dodge: 8, meleeParry: 5, brawlParry: 5, brawl: 5, str: 6, damage: 9, weaponType: 'dodge', weaponName: 'sporting blaster', stunOnly: false, security: false },
        talk: [
          { text: "The Sullustan looks up with bloodshot eyes.\n\n\"Don't play sabacc with the dealer upstairs. He's a cheat. Well... he's not, he's just better than everyone. Which is worse, really.\"\n\nHe sighs deeply. \"I used to have a ship, you know. A nice one. Had.\"" },
          { text: "\"If you hear about anyone looking for a co-pilot, let me know. I can fly anything. I just can't afford anything.\"" }
        ]
      }
    },
    lowerDeck: true
  },

  "dark_corridor": {
    name: "Lower Deck — Dark Corridor",
    description: "{dim}The lights are sparse down here — every other fixture is dead or stolen.{/dim} A narrow corridor stretches between unmarked {item}doors{/item}. The air is stale and carries a metallic tang. {item}Graffiti{/item} marks the walls — gang tags, warnings, and arrows pointing to destinations that probably don't exist anymore.\n\nA {npc}lookout{/npc} sits on a crate near the south end, watching traffic with practiced disinterest.\n\nThe lower concourse is back to the north. Unmarked doors lead southeast and southwest.",
    exits: {
      north: "lower_concourse",
      southeast: "hideout_1",
      southwest: "hideout_2"
    },
    objects: {
      "doors": "Unmarked durasteel doors, some welded shut, others hanging ajar. The ones that are still in use have no signage — if you belong here, you know which one is yours. If you don't belong here, that's your problem.",
      "graffiti": "Gang tags in luminescent paint — 'VOID DEMONS', 'BLACK NEXU', and a crude skull with the words 'PAY YOUR DEBTS' underneath. An arrow points south with the helpful label 'BAD IDEA.' Someone has crossed it out and written 'WORSE IDEA.'"
    },
    npcs: {
      "lookout": {
        name: "Gang Lookout",
        keywords: ["lookout", "gang", "kid", "spotter"],
        look: "A scrawny Twi'lek teenager perched on a cargo crate, legs dangling. She's young but her eyes are old — scanning everyone who passes with the alertness of someone who's learned the hard way what happens when you don't pay attention.",
        combat: { blaster: 8, dodge: 11, meleeParry: 6, brawlParry: 6, brawl: 7, str: 5, damage: 9, weaponType: 'dodge', weaponName: 'blaster pistol', stunOnly: false, security: false },
        talk: [
          { text: "The Twi'lek sizes you up with a quick flick of her lekku.\n\n\"You don't look like you belong down here.\" She shrugs. \"But neither did I, once. Keep your head down and your credits close.\"" },
          { text: "\"I see things. I hear things. Mostly I forget things. It's healthier that way.\"" }
        ]
      }
    },
    lowerDeck: true
  },

  "hideout_1": {
    name: "Lower Deck — Abandoned Quarters",
    description: "A section of decommissioned crew quarters, long since stripped of anything valuable. {item}Bunks{/item} are stacked three high along the walls, their mattresses removed. The floor is littered with {item}debris{/item} — food wrappers, empty power cells, and a few scattered personal effects left behind by whoever lived here last.\n\nThe dark corridor is back to the northwest.",
    exits: {
      northwest: "dark_corridor"
    },
    objects: {
      "bunks": "Three-tier crew bunks bolted to the walls, Imperial standard issue. The mattresses are gone but some of the frames still have personal storage compartments — all empty, all forced open at some point.",
      "debris": "The usual detritus of transient occupation. Ration wrappers, a cracked datapad with a dead battery, an empty blaster power pack, and a single boot with no match. The stories these walls could tell are probably depressing."
    },
    npcs: {
      "squatter": {
        name: "Twitchy Squatter",
        keywords: ["squatter", "twitchy", "human"],
        look: "A gaunt human male huddled in a lower bunk, wrapped in a thermal blanket. His eyes dart constantly and he flinches at sounds. Spice withdrawal, maybe, or just the paranoia that comes from sleeping in a place like this. He's probably harmless. Probably.",
        combat: { blaster: 6, dodge: 7, meleeParry: 5, brawlParry: 5, brawl: 6, str: 5, damage: 6, weaponType: 'dodge', weaponName: 'shiv', stunOnly: false, security: false },
        talk: [
          { text: "The squatter pulls his blanket tighter.\n\n\"I didn't see nothing. I don't know nothing. Please just leave me alone.\"" },
          { text: "\"...Sometimes people come through here. Different people. They don't stay long. I don't ask why.\"" }
        ]
      }
    },
    lowerDeck: true
  },

  "hideout_2": {
    name: "Lower Deck — Storage Bay",
    description: "A disused storage bay converted into... something. {item}Crates{/item} are stacked to create makeshift walls and partitions, forming a maze of narrow passages within the bay. It smells of machine oil, old food, and desperation. A {item}workbench{/item} in one corner has tools scattered across it.\n\nThe dark corridor is back to the northeast.",
    exits: {
      northeast: "dark_corridor"
    },
    objects: {
      "crates": "Stacked cargo crates forming walls and partitions. Some are empty, some are sealed and heavy. The arrangement creates several hidden alcoves — perfect for stashing goods, holding meetings, or hiding from people you owe money to.",
      "workbench": "A cluttered workbench with soldering tools, a multitool, wire strippers, and what appears to be a half-disassembled comlink. Someone's been modifying equipment down here — probably nothing legal."
    },
    npcs: {
      "mechanic": {
        name: "Underground Mechanic",
        keywords: ["mechanic", "underground", "tech"],
        look: "A heavyset Sullustan female with grease-stained hands and a pair of magnifying goggles pushed up on her forehead. She's elbow-deep in what might have been a security droid, rewiring its motivator with casual expertise.",
        combat: { blaster: 8, dodge: 7, meleeParry: 7, brawlParry: 7, brawl: 8, str: 8, damage: 10, weaponType: 'dodge', weaponName: 'heavy hydrospanner', stunOnly: false, security: false },
        trainer: {
          skills: ['Demolitions', 'Droid Programming', 'Droid Repair', 'Computer Programming/Repair', 'Security']
        },
        talk: [
          { text: "{npc}Underground Mechanic{/npc} glances up from her work.\n\n\"If the marshal sent you, I'm just fixing droids. Nothing illegal here.\" She pauses. \"If the marshal didn't send you... I fix other things too. And I teach. Cheaper than upstairs, and no questions asked.\"\n\n{dim}She teaches tech skills. Type {/dim}{green}train{/green}{dim} to see what she offers.{/dim}" },
          { text: "\"Need something sliced, rewired, or made to look like an accident? Talk to me. Need training? {green}train{/green}. Need a friend? Try upstairs.\"" }
        ]
      }
    },
    lowerDeck: true
  }

};

// ============================================================
// Intro sequence flag — tracks if player has seen the wake-up
// ============================================================
const MUD_INTRO_ROOM = "infirmary";

// --- END OF ROOMS_DATA ---
