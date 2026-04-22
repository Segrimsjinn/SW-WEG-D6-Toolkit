// ============================================================
// MUDD-LITE STATION — Room Data
// ============================================================
const ROOMS_DATA = {

  "infirmary": {
    name: "Station Infirmary",
    description: "Harsh white light fills this sterile medical bay. Two rows of narrow cots line the walls, most empty. A 2-1B surgical droid stands near a wall-mounted vitals monitor, its photoreceptors dimly pulsing. The antiseptic smell of bacta hangs in the recycled air. A sliding door to the north leads into the medical wing corridor.",
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
    description: "A narrow corridor with scuffed durasteel plating underfoot. Harsh overhead strips flicker intermittently, casting uneven light. The infirmary lies to the south, and the corridor opens north into the bustle of the main concourse. To the east, a small alcove offers a viewport looking out into space.",
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
    description: "A small alcove carved from the corridor wall, dominated by a transparisteel viewport two meters wide. Beyond the glass, the star-flecked void stretches endlessly. The angular bulk of Drifter's Anchorage extends below — you can see docking pylons, hull plating scarred by micrometeorites, and the faint blue glow of the station's ventral thrusters holding position. In the far distance, the pale disc of a planet catches the light of a nearby star.",
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
    description: "The main concourse of Drifter's Anchorage is a wide, vaulted corridor that serves as the station's central hub. Foot traffic flows in both directions — spacers, merchants, a few hard-eyed individuals who could be anything from bounty hunters to off-duty Remnant officers. Overhead, a cracked holodisplay cycles through trade postings and docking schedules in flickering blue text.\n\nThe medical wing lies to the south. A cantina's neon sign glows to the west, its muffled music bleeding through the doorway. The docking bay access corridor stretches east. To the north, a transparisteel-fronted office bears the sign: STATION ADMINISTRATION.",
    exits: {
      south: "med_corridor",
      west: "cantina",
      east: "docking_access",
      north: "admin_office"
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
    description: "A small, surprisingly orderly office behind a transparisteel partition. A human woman in a crisp but worn uniform sits behind a terminal, processing what seems like an endless queue of datapads. The walls are lined with filing cabinets and a single Imperial-era motivational poster that someone has defaced with a crude drawing of a mynock. A security camera blinks red in the corner.",
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
        name: "Administrator Voss",
        keywords: ["admin", "administrator", "voss", "woman", "officer"],
        look: "A human woman in her forties with close-cropped grey hair and sharp eyes that have seen too many fabricated identification documents. Her uniform is Imperial-cut but stripped of rank insignia — Remnant administrative corps, probably. A nameplate on her desk reads: ADM. K. VOSS.",
        talk: [
          { once: "admin_intro", text: "{npc}Administrator Voss{/npc} looks up from her terminal, studying you with a practiced eye.\n\n\"The escape pod survivor. The medical droid flagged your arrival.\" She pulls up something on her screen. \"No ID, no transit papers, no credit chit. Not exactly a strong start.\"\n\nShe taps a few keys. \"Here's how this works. I register you in our system, you get a temporary station pass. That lets you move freely, take on posted work, and use the cantina without getting hassled by security. In return, you follow station rules and don't cause problems.\"\n\nShe slides a datapad across the desk. \"Standard waiver. You agree not to hold the station liable for... well, anything, really. Sign it and you're a registered resident of Drifter's Anchorage.\"\n\n{dim}[Registration will be available once the character creator is implemented.]{/dim}" },
          { text: "\"Still sorting yourself out? Take your time — but not too much time. Unregistered residents make security nervous, and you don't want to make security nervous.\"" }
        ]
      }
    }
  },

  "cantina": {
    name: "The Rusty Hydrospanner",
    description: "The station cantina is dim and loud, exactly the way its clientele prefers it. Mismatched lighting casts everything in shades of amber and shadow. A long bar runs along the far wall, tended by a surly-looking Besalisk whose four arms keep glasses moving with mechanical efficiency. Scattered tables fill the floor, occupied by the usual assortment of spacers, drifters, and people who'd rather not be looked at too closely.\n\nA jukebox droid in the corner plays something vaguely jizz-like at a volume that discourages eavesdropping. The exit back to the main concourse is to the east.",
    exits: {
      east: "main_concourse"
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
        talk: [
          { once: "grek_intro", text: "{npc}Grek{/npc} glances at you with one eye while his other three arms continue pouring drinks.\n\n\"New face. Escape pod, right? Word travels fast on a station this size.\" One of his hands drops a glass of something murky on the bar in front of you. \"On the house. First one only — after that, you pay like everyone else.\"\n\nHe leans one massive arm on the bar. \"Name's Grek. I own this place. You want to eat, drink, or hear the latest gossip, this is where you come. You want trouble, take it to the docking bay — I just had the floor re-sealed.\"\n\n\"Once you've got some credits together, come back and I might know about some work. Always someone on this station who needs something done and doesn't want to do it themselves.\"" },
          { text: "\"You again. You look like you could use a drink, but I look like I could use paying customers. Come back when you've got credits, or something interesting to tell me.\"" }
        ]
      }
    }
  },

  "docking_access": {
    name: "Docking Bay Access Corridor",
    description: "A wide industrial corridor leading to the station's docking facilities. The floor is grated metal, and through the gaps you can see conduits and cable runs snaking into the station's guts. Heavy blast doors line both sides — individual docking bay airlocks, each with a status panel showing green (occupied), red (sealed), or dark (empty).\n\nThe main concourse lies to the west. A large set of doors to the east opens into the main docking bay observation deck.",
    exits: {
      west: "main_concourse",
      east: "docking_bay"
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
    description: "A wide observation platform overlooking the station's main docking bay through a wall of reinforced transparisteel. Below, the cavernous bay stretches out — a vast space of landing pads, fuel lines, and cargo loaders. Ships of various sizes sit on the deck, from single-pilot fighters to mid-bulk freighters. Maintenance crews and loading droids move between them.\n\nA grizzled Duros in a dockmaster's vest leans against the railing, surveying the bay with proprietary interest. The access corridor lies back to the west.",
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
        talk: [
          { once: "renn_intro", text: "{npc}Dockmaster Renn{/npc} turns those large red eyes on you, evaluating.\n\n\"Ah. The pod survivor.\" His voice has the characteristic Duros rasp. \"I processed your escape pod's wreckage — or what was left of it. Standard Imperial pod, military-grade. No markings, no serial numbers. Someone went to a lot of trouble to scrub that pod clean before you ended up in it.\"\n\nHe shrugs, turning back to the bay. \"Not my business. My business is ships. When you've got the credits for one, come see me. I handle all sales and berth assignments on the station.\"\n\nHe nods toward the bay below. \"Got a few vessels for sale right now, if you're the type to dream. That Z-95 down there's been sitting for weeks. Previous owner couldn't pay his docking fees.\"" },
          { text: "\"Still window shopping? Can't blame you. A ship's the only real freedom in this galaxy.\" He glances at the bay. \"Save up your credits. I'll be here when you're ready.\"" }
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
