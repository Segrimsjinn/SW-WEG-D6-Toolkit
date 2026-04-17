const EQUIPMENT_DATA = [
 {
  "name": "Blast Helmet",
  "category": "Armor Accessories",
  "cost": "300",
  "availability": "1",
  "game_notes": "+1D physical, +1 energy (head).",
  "source": "Rulebook (page 234)"
 },
 {
  "name": "CT3 Concussion Helmet",
  "category": "Armor Accessories",
  "cost": "375",
  "availability": "1",
  "game_notes": "Head: +2 front and back from physical (non-energy) attacks, including crash and falling damage.",
  "source": "Gundark's Fantastic Technology (pages 51-52)"
 },
 {
  "name": "Rock Boots",
  "category": "Armor Accessories",
  "cost": "50-200",
  "availability": "2",
  "game_notes": "Reinforced footwear designed to resist harsh volcanic badlands.",
  "source": "Goroth, Slave of the Empire (page 86)"
 },
 {
  "name": "Sonic Dampening Helmet",
  "category": "Armor Accessories",
  "cost": "600",
  "availability": "2",
  "game_notes": "+3D to resist sonic attacks.",
  "source": "Arms and Equipment Guide (page 45)"
 },
 {
  "name": "Lum",
  "category": "Beverages",
  "cost": "6-10 (pitcher)",
  "availability": "1",
  "game_notes": "Powerful beverage favored in Corellian space. Used in 'lumguzzling' drinking competitions: each player drinks a pitcher and makes a Very Easy stamina roll. Failure = pass out. Success = remain conscious but stamina reduced by 1D for the next round. Continue until one player remains. Tastes sweet and slightly soapy. Imbibers cannot overdose on lum — lumguzzling is less dangerous than other drinking games.",
  "source": "WEG40063 Galaxy Guide 9: Fragments from the Rim p.84"
 },
 {
  "name": "Renan Irongut",
  "category": "Beverages",
  "cost": "3-5 (shot)",
  "availability": "2",
  "game_notes": "Named after what you need to drink it. Downing in one shot requires a Moderate stamina roll. Tradition claims it also works as a potent rust remover, though at 3-5 credits a shot it's cheaper to buy actual rust remover.",
  "source": "WEG40063 Galaxy Guide 9: Fragments from the Rim p.84"
 },
 {
  "name": "Elshandruu Pica Thundercloud",
  "category": "Beverages",
  "cost": "Varies",
  "availability": "2",
  "game_notes": "Mixed drink likened to a starfighter flyover — you see it coming, it flashes overhead, brief pause, then an almighty explosion hits. Drinker must make an Easy stamina roll or fall off their seat. Active ingredients produce a miniature cloud of ionized gas above the glass; most establishments serve it in a container that fires microshocks into the cloud, simulating an electrical storm.",
  "source": "WEG40063 Galaxy Guide 9: Fragments from the Rim p.84"
 },
 {
  "name": "Pink Lizard Thunderbolt",
  "category": "Beverages",
  "cost": "Varies",
  "availability": "2",
  "game_notes": "A variant of the Elshandruu Pica Thundercloud. For added realism, the drinker can taste the mud from the ground after being knocked over. Moderate stamina roll to avoid falling over. Named after its inventor — a small, scaly lizard of indeterminate species, gender, and color who frequented Margath's bars on Elshandruu Pica.",
  "source": "WEG40063 Galaxy Guide 9: Fragments from the Rim p.84"
 },
 {
  "name": "Starshine Surprise",
  "category": "Beverages",
  "cost": "Varies",
  "availability": "2",
  "game_notes": "Called the Starshine Surprise because after drinking it, the next thing you notice is the stars above you — probably because you're flat on your back in the street. Only for non-Humans and the most hardened Human drinkers.",
  "source": "WEG40063 Galaxy Guide 9: Fragments from the Rim p.85"
 },
 {
  "name": "Tatooine Sunburn",
  "category": "Beverages",
  "cost": "Varies",
  "availability": "3",
  "game_notes": "Tatooine is a binary system — a Tatooine Sunburn is two Starshine Surprises in the same glass. Never attempt a Cassandra Sunrise (rumored to make excellent sunburn salve, but only if you have extremely thick skin).",
  "source": "WEG40063 Galaxy Guide 9: Fragments from the Rim p.85"
 },
 {
  "name": "Skannbult Likker",
  "category": "Beverages",
  "cost": "15-25 (double measure)",
  "availability": "3",
  "game_notes": "Possibly the most volatile fire-water in the galaxy. Brewed from Dust-Corn and Dry Gene Wheat on the planet Skann in Astal Sector, distilled in rock basins by local farmers. Quality is highly variable — the good stuff is only brewed by small farmers outside town. Traders usually only encounter quick-brewed rotgut. Margath's on Elshandruu Pica stocks the good stuff (sold as 'Fire Liquor'), price rising to 20 credits/single.",
  "source": "WEG40063 Galaxy Guide 9: Fragments from the Rim p.85"
 },
 {
  "name": "Daranu",
  "category": "Beverages",
  "cost": "Varies",
  "availability": "3",
  "game_notes": "Obscure drink from Parein II 4 in Sarin Sector. Made from local Terrberries and spicy nuts, fermented in drilled-out hardnut shells from Parein Sweetgreen Fruit. Rich, refreshing, and warming — then hits like a well-aimed blaster shot about half an hour later.",
  "source": "WEG40063 Galaxy Guide 9: Fragments from the Rim p.85"
 },
 {
  "name": "The Reactor Core",
  "category": "Beverages",
  "cost": "Varies",
  "availability": "3",
  "game_notes": "Many hardened drinkers claim this should only be available by prescription due to the narcotic agents released by mixing Spice Liqueur and Blue Tonic. Fans insist no narcotics are released and — by the way, did you know you've just turned into a lampstand?",
  "source": "WEG40063 Galaxy Guide 9: Fragments from the Rim p.85"
 },
 {
  "name": "The Meltdown",
  "category": "Beverages",
  "cost": "10-12",
  "availability": "3",
  "game_notes": "Supposedly more sophisticated than The Reactor Core. The combination of Lum and Spice Liqueur doesn't need to release narcotic agents to produce exactly the same effect. Much more expensive than the Reactor Core.",
  "source": "WEG40063 Galaxy Guide 9: Fragments from the Rim p.85"
 },
 {
  "name": "Corellian Whisky",
  "category": "Beverages",
  "cost": "Varies (expensive)",
  "availability": "2",
  "game_notes": "The Corellians have sewn up the galaxy's whisky market on both manufacturing and consumption sides. Good quality but expensive due to import costs from the Corellian System. Most non-Corellians consider it too pricey for anything but special occasions.",
  "source": "WEG40063 Galaxy Guide 9: Fragments from the Rim p.86"
 },
 {
  "name": "Savareen Brandy",
  "category": "Beverages",
  "cost": "Varies (premium)",
  "availability": "2",
  "game_notes": "Along with Cassandran brandy, one of the only types worthy of all the arcane procedures that dedicated brandy drinkers like to indulge in. Everyone else agrees they're 'quite nice.'",
  "source": "WEG40063 Galaxy Guide 9: Fragments from the Rim p.86"
 },
 {
  "name": "Cassandran Choholl",
  "category": "Beverages",
  "cost": "500+ (per bottle)",
  "availability": "3",
  "game_notes": "Cassandra's brandy may be good, but their Choholl is better. Grada brand Cassandran Choholl is particularly sought after throughout the galaxy.",
  "source": "WEG40063 Galaxy Guide 9: Fragments from the Rim p.86"
 },
 {
  "name": "Camo Armor",
  "category": "Camouflage Armor",
  "cost": "1,500",
  "availability": "2",
  "game_notes": "Basic Suit: +1D physical, +2 energy (torso, arms, legs). Camo Field: +1D to difficulty of search/Perception to spot wearer if motionless.",
  "source": "Galaxy Guide 10 (page 87)"
 },
 {
  "name": "Camouflage Fatigue",
  "category": "Camouflage Armor",
  "cost": "\u2014",
  "availability": "3",
  "game_notes": "+2D to sneak in forest at ranges of 35+.",
  "source": "Galaxy Guide 5 (page 62)"
 },
 {
  "name": "Camouflage Poncho",
  "category": "Camouflage Armor",
  "cost": "250",
  "availability": "1",
  "game_notes": "+1D to sneak, +2D at ranges of more than 35 meters.",
  "source": "Rules of Engagement (page 33)"
 },
 {
  "name": "Shadowsuit",
  "category": "Camouflage Armor",
  "cost": "600",
  "availability": "3",
  "game_notes": "Anti-sensor suit. +2D to sneak.",
  "source": "Rules of Engagement (page 34)"
 },
 {
  "name": "Thermoguard Jumpsuit",
  "category": "Camouflage Armor",
  "cost": "2,500",
  "availability": "3",
  "game_notes": "Invisible to infrared detection; negates darkvision benefits. -1 Dexterity penalty. Standard power pack lasts 2 hours; takes 1 min to reach correct temperature.",
  "source": "Gamer Magazine"
 },
 {
  "name": "Umbaran Shadowcloak",
  "category": "Camouflage Armor",
  "cost": "5,000",
  "availability": "4",
  "game_notes": "Sensors allow Umbarans to alter coloration: +1D to hide. Only Umbarans can control the color-shifting.",
  "source": "Ultimate Alien Anthology (page 176)"
 },
 {
  "name": "Adhesion Disc",
  "category": "Survival Gear",
  "cost": "150",
  "availability": "2",
  "game_notes": "Micro-suction climbing discs for hands and feet. +2D to climbing skill on smooth surfaces.",
  "source": ""
 },
 {
  "name": "Grappling Gun",
  "category": "Survival Gear",
  "cost": "200",
  "availability": "2",
  "game_notes": "Fires grappling hook with syntherope. 25m range. Easy missile weapons to fire. +1D climbing with attached rope.",
  "source": ""
 },
 {
  "name": "Syntherope",
  "category": "Survival Gear",
  "cost": "2/meter",
  "availability": "1",
  "game_notes": "Standard synthetic rope. Supports up to 500kg. Available in lengths up to 200m.",
  "source": ""
 },
 {
  "name": "A3AA Personal Defense Module",
  "category": "Personal Defense",
  "cost": "8,500",
  "availability": "4, X",
  "game_notes": "Micro-nozzle spray: 5m cloud reduces blaster damage by -2D for ~4 min (3 charges). Alt: 30\u00b0 forward cone. Suit: +2D physical, +1D energy, -1D DEX.",
  "source": "Galaxy Guide 10 (page 87)"
 },
 {
  "name": "Arelik Armor",
  "category": "Combat Armor",
  "cost": "Not for sale",
  "availability": "4, X",
  "game_notes": "+2D physical, +1D energy, -1D DEX (head/torso/arms). Sensor pod: +1D search. Infrared: +1D PER in darkness. Environmental filter helmet.",
  "source": "Gundark's Fantastic Technology (page 48)"
 },
 {
  "name": "Blast-Dampening Armor",
  "category": "Combat Armor",
  "cost": "6,000",
  "availability": "2",
  "game_notes": "+1D+1 energy, +1 physical.",
  "source": "Arms and Equipment Guide (page 43)"
 },
 {
  "name": "Castaan Staad Armor",
  "category": "Combat Armor",
  "cost": "750",
  "availability": "3",
  "game_notes": "+1D physical, +1D energy (torso). Custom Twi'lek warrior armor.",
  "source": "Gundark's Fantastic Technology (page 50)"
 },
 {
  "name": "Combat Jumpsuit",
  "category": "Combat Armor",
  "cost": "500",
  "availability": "2",
  "game_notes": "+1D physical, +2 energy.",
  "source": "Galladinium's Fantastic Technology (page 80)"
 },
 {
  "name": "Corellian 611 Combat Armor",
  "category": "Combat Armor",
  "cost": "5,000",
  "availability": "3, F",
  "game_notes": "+2D physical, +1D energy. +10 difficulty to swimming while wearing.",
  "source": "Gundark's Fantastic Technology (pages 50-51)"
 },
 {
  "name": "Coynite Battle Armor",
  "category": "Combat Armor",
  "cost": "150",
  "availability": "3",
  "game_notes": "+2D physical and energy. -1D DEX.",
  "source": "Gundark's Fantastic Technology (page 51)"
 },
 {
  "name": "Cresh Luck Armor",
  "category": "Combat Armor",
  "cost": "500",
  "availability": "2",
  "game_notes": "+2D physical, +1D energy (torso front/back, legs front). Infrared motion sensor array: 30m range, alarm for 10+kg moving 1+ m/s.",
  "source": "Galaxy Guide 10 (page 87)"
 },
 {
  "name": "Dark Combat Jumpsuit",
  "category": "Combat Armor",
  "cost": "16,500 & 1 FP",
  "availability": "4, X",
  "game_notes": "Cortosis weave (deactivates lightsabers). +1D+2 physical and energy. +1D vs Telepathy. +3 difficulty to Life Detection/Sense against wearer.",
  "source": "Dark Side Sourcebook (page 61)"
 },
 {
  "name": "Dark Heavy Battle Armor",
  "category": "Combat Armor",
  "cost": "37,000 & 2 FP",
  "availability": "4, X",
  "game_notes": "+3D physical and energy. +1D vs Telepathy, +3 difficulty Life Detection/Sense. +2 pips STR for skills/melee damage.",
  "source": "Dark Side Sourcebook (page 61)"
 },
 {
  "name": "Dark Padded Battle Armor",
  "category": "Combat Armor",
  "cost": "12,000 & 1 FP",
  "availability": "4, X",
  "game_notes": "+2D physical and energy. +1D to resist light side Force powers or FP-augmented powers.",
  "source": "Dark Side Sourcebook (page 61)"
 },
 {
  "name": "Dura-Armor",
  "category": "Combat Armor",
  "cost": "8,000",
  "availability": "3",
  "game_notes": "All locations: +2D physical, +2D energy, -2D DEX and PER.",
  "source": "Gundark's Fantastic Technology (page 53)"
 },
 {
  "name": "Electromesh Armor",
  "category": "Combat Armor",
  "cost": "12,000",
  "availability": "4",
  "game_notes": "+1D+2 energy, +1D physical, -1 DEX. Nagai form-fitting suit with electrical field for energy absorption.",
  "source": "Ultimate Alien Anthology (page 104)"
 },
 {
  "name": "Fenelar Armor",
  "category": "Combat Armor",
  "cost": "55,000",
  "availability": "4, X",
  "game_notes": "+2D physical, +1D energy, -1D DEX. Helmet: motion/sound sensors (+1D search), comlink, infrared (30m). Forearm knives (STR+1D). +1D intimidation.",
  "source": "Gamer Magazine"
 },
 {
  "name": "Flex-Armor",
  "category": "Combat Armor",
  "cost": "2,000",
  "availability": "3",
  "game_notes": "All locations: +1D physical and energy, -1D DEX. Mod: reinforce with steel mesh = +2D physical but no energy defense (Moderate armor repair, 1 day).",
  "source": "Gundark's Fantastic Technology (page 54)"
 },
 {
  "name": "Gladiator Armor",
  "category": "Combat Armor",
  "cost": "Not for sale",
  "availability": "4, X",
  "game_notes": "+2D physical, +1D energy (head/torso/arms). No DEX penalty. Conner net gun (5D stun), vibro-shiv (STR+1D), jet pack (Move 100h/70v, 10 charges).",
  "source": "Gundark's Fantastic Technology (pages 54-55)"
 },
 {
  "name": "Glistaweb",
  "category": "Combat Armor",
  "cost": "Not for sale",
  "availability": "4, X",
  "game_notes": "Yuuzhan Vong shimmering cloth armor. +1 pip physical, +1D+1 energy, -1 pip DEX.",
  "source": "New Jedi Order Sourcebook (page 22)"
 },
 {
  "name": "Jedi Battle Armor",
  "category": "Combat Armor",
  "cost": "6,000",
  "availability": "4, X",
  "game_notes": "+2D all damage, -1D+1 DEX, -2 Move.",
  "source": "Power of the Jedi Sourcebook (pages 55-56)"
 },
 {
  "name": "Link Armor",
  "category": "Combat Armor",
  "cost": "500",
  "availability": "1",
  "game_notes": "Head/torso/arms/legs: +1D physical, +2 energy, -1D DEX. Twin-layer mod: +1D+2 physical, +1D energy, -2D DEX (Difficult armor repair, 550cr, 1 week).",
  "source": "Gundark's Fantastic Technology (page 57)"
 },
 {
  "name": "M'uhk'gfa Battle Plate",
  "category": "Combat Armor",
  "cost": "8,000 (2,000 on Gamorr)",
  "availability": "3",
  "game_notes": "+3D physical, +1D energy, -1D+2 DEX. Gamorrean metal plates. 4 rounds to don, 2 to remove (double without help).",
  "source": "Ultimate Alien Anthology (page 62)"
 },
 {
  "name": "Primitive Armor",
  "category": "Combat Armor",
  "cost": "150",
  "availability": "2",
  "game_notes": "+1 to resist physical attacks.",
  "source": "Ultimate Adversaries (page 155)"
 },
 {
  "name": "Reflect Body Glove",
  "category": "Combat Armor",
  "cost": "4,000",
  "availability": "3, X",
  "game_notes": "+1D STR vs blaster at medium/long range only. Absorbs 5 blasts before destroyed. Destroyed if wearer wounded by energy.",
  "source": "Galaxy Guide 10 (page 88)"
 },
 {
  "name": "Shockball Uniform",
  "category": "Recreation",
  "cost": "\u2014",
  "availability": "1",
  "game_notes": "Padding: +2 STR vs physical. Helmet: +1. Includes insulated mitt and scoop.",
  "source": "Cracken's Rebel Operatives (page 77)"
 },
 {
  "name": "Stalker Armor",
  "category": "Combat Armor",
  "cost": "8,000",
  "availability": "3, R",
  "game_notes": "+2D physical, +2D energy, -2D DEX. No hide/sneak/swimming. Tangle gun (4D stun). Duo-flechette rifle (5D). Retractable claws (STR+2D). +1D search, +1D weapons.",
  "source": "Gundark's Fantastic Technology (pages 60-61)"
 },
 {
  "name": "Twi'lek Antistun Suit",
  "category": "Combat Armor",
  "cost": "1,000",
  "availability": "3",
  "game_notes": "+1D STR to resist stun attacks.",
  "source": "Ultimate Alien Anthology (page 172)"
 },
 {
  "name": "Ubese Raider Armor",
  "category": "Combat Armor",
  "cost": "1,000",
  "availability": "3",
  "game_notes": "+2D physical, +1D energy (torso/head). No DEX penalty. Sealed enviro-filter. Flash guard visor nullifies stun from visual sources.",
  "source": "Gundark's Fantastic Technology (pages 61-62)"
 },
 {
  "name": "C1 Personal Comlink",
  "category": "Communications",
  "cost": "200",
  "availability": "1",
  "game_notes": "Encrypted personal communicator. +1D to opponent's difficulty to intercept. 50km range.",
  "source": ""
 },
 {
  "name": "Holo Communicator",
  "category": "Communications",
  "cost": "5,000",
  "availability": "2",
  "game_notes": "Projects holographic image of user during communication. Orbital range. Requires HoloNet access for interstellar.",
  "source": ""
 },
 {
  "name": "Hush-98 Comlink",
  "category": "Communications",
  "cost": "4,000",
  "availability": "2, R",
  "game_notes": "Counter-surveillance encrypted comlink. Very Difficult to intercept or trace. 50km range.",
  "source": ""
 },
 {
  "name": "Jammer Pack",
  "category": "Communications",
  "cost": "600",
  "availability": "2, R",
  "game_notes": "Portable communications jammer. Blocks all comlink transmissions within 1km radius. Moderate sensors to detect jammer location.",
  "source": ""
 },
 {
  "name": "Military Comlink",
  "category": "Communications",
  "cost": "1,000",
  "availability": "2, R",
  "game_notes": "Hardened military communicator. 200km range. Built-in encryption. Resistant to jamming (+2D to resist).",
  "source": ""
 },
 {
  "name": "Personal Comlink",
  "category": "Communications",
  "cost": "25",
  "availability": "1",
  "game_notes": "Standard personal communicator. 50km range on surface. Can reach orbit.",
  "source": "Rulebook"
 },
 {
  "name": "Pocket Scrambler",
  "category": "Communications",
  "cost": "400",
  "availability": "2, R",
  "game_notes": "Attaches to any comlink. Encrypts transmissions: Heroic communications roll to decode without matching scrambler.",
  "source": ""
 },
 {
  "name": "Code Cylinder",
  "category": "Computers",
  "cost": "500",
  "availability": "2",
  "game_notes": "Personal identification and data security device. Imperial officers use these for secure facility access.",
  "source": ""
 },
 {
  "name": "Computer Spikes",
  "category": "Computers",
  "cost": "200 each",
  "availability": "2, R",
  "game_notes": "Single-use device for bypassing computer security. +2D to computer programming/repair when slicing. Consumed on use.",
  "source": ""
 },
 {
  "name": "Datapad",
  "category": "Computers",
  "cost": "100",
  "availability": "1",
  "game_notes": "Standard portable data device. Stores and displays text, images, and holographic data. 16 terabytes of storage.",
  "source": "Rulebook"
 },
 {
  "name": "Handheld Computer",
  "category": "Computers",
  "cost": "1,000",
  "availability": "2",
  "game_notes": "Portable computer. +1D to computer programming/repair rolls. Can run analysis programs and interface with other systems.",
  "source": ""
 },
 {
  "name": "Jedi Holocron",
  "category": "Computers",
  "cost": "Not for sale",
  "availability": "4, X",
  "game_notes": "Force-activated data repository. Contains vast knowledge on Force techniques, Jedi history, and philosophy. Requires Force Sensitivity to activate.",
  "source": ""
 },
 {
  "name": "Sith Holocron",
  "category": "Computers",
  "cost": "Not for sale",
  "availability": "4, X",
  "game_notes": "Dark Side Force-activated repository. Contains knowledge of Sith techniques and history. Dark Side taint; prolonged use risks corruption.",
  "source": ""
 },
 {
  "name": "Cardio-Muscular Package",
  "category": "Cybernetics",
  "cost": "10,000",
  "availability": "3",
  "game_notes": "+1D to STR for stamina rolls and +2 Move.",
  "source": ""
 },
 {
  "name": "Cybernetic Arm",
  "category": "Cybernetics",
  "cost": "10,000",
  "availability": "2",
  "game_notes": "Full arm replacement. +1D to lifting with that arm. Can mount internal weapon (additional 2,000+).",
  "source": ""
 },
 {
  "name": "Cybernetic Eye",
  "category": "Cybernetics",
  "cost": "2,500",
  "availability": "2",
  "game_notes": "Replacement eye. Normal vision restored. Can include zoom (macro mode), recording capability, or IR at extra cost.",
  "source": ""
 },
 {
  "name": "Cybernetic Forearm",
  "category": "Cybernetics",
  "cost": "5,000",
  "availability": "2",
  "game_notes": "Replacement prosthetic forearm and hand. Restores normal function. +1 pip to lifting with that arm.",
  "source": ""
 },
 {
  "name": "Cybernetic Hand",
  "category": "Cybernetics",
  "cost": "2,000",
  "availability": "2",
  "game_notes": "Replacement prosthetic hand. Restores normal function. Can be upgraded with built-in tools or weapons at additional cost.",
  "source": ""
 },
 {
  "name": "Cybernetic Leg",
  "category": "Cybernetics",
  "cost": "8,000",
  "availability": "2",
  "game_notes": "Full leg replacement. Restores normal Move. Can be upgraded to +2 Move (additional 3,000).",
  "source": ""
 },
 {
  "name": "Cybernetic Legs Package",
  "category": "Cybernetics",
  "cost": "20,000",
  "availability": "3",
  "game_notes": "Both legs replaced. +4 Move. +1D climbing/jumping.",
  "source": ""
 },
 {
  "name": "Cyborg Construct",
  "category": "Cybernetics",
  "cost": "Variable",
  "availability": "3",
  "game_notes": "Major cybernetic overhaul. Custom combination of replacements and enhancements. Surgery: Difficult (A) medicine roll.",
  "source": ""
 },
 {
  "name": "Hi-Sense Enhanced Eyes",
  "category": "Cybernetics",
  "cost": "4,000",
  "availability": "2",
  "game_notes": "Enhanced visual spectrum cybernetic eyes. Low-light vision, +1D to visual search/Perception.",
  "source": ""
 },
 {
  "name": "Hifold Sensory Package",
  "category": "Cybernetics",
  "cost": "3,000",
  "availability": "2",
  "game_notes": "Enhanced sensory suite. +1D to search and Perception rolls involving sight and hearing.",
  "source": ""
 },
 {
  "name": "Response Improvement Package",
  "category": "Cybernetics",
  "cost": "12,000",
  "availability": "3",
  "game_notes": "+1D to DEX for initiative and dodge rolls only.",
  "source": ""
 },
 {
  "name": "Skeletal Reinforcement",
  "category": "Cybernetics",
  "cost": "15,000",
  "availability": "3",
  "game_notes": "Internal skeleton reinforcement. +1D to resist physical damage.",
  "source": ""
 },
 {
  "name": "Weapon Mount",
  "category": "Cybernetics",
  "cost": "2,000+",
  "availability": "3",
  "game_notes": "Internal mount for small weapon (hold-out blaster, dart launcher, vibroblade). Concealable: Very Difficult search to detect.",
  "source": ""
 },
 {
  "name": "PackTack 41LT-R MULE Droid",
  "category": "Droids",
  "cost": "",
  "availability": "",
  "game_notes": "Mechanical Universal Labor Eliminating Droid. Height: 1.5m. Move: 7 (repulsorlift, max altitude 1m). DEX 1D, KNO 1D, MEC 3D (repulsorlift operation 4D+1), PER 3D (search 3D+2), STR 6D (lifting 7D), TEC 2D (droid programming 4D, droid repair 5D). One heavy lifting claw, one large storage bay (2 cubic meters, +1D armor). Has self-repair feature — uses droid programming and droid repair to assist a scout with combined actions repairs. Cost: 3,500 credits standard. Availability: 2. Fifth Degree Droid. Personality: Simple. Designed by PackTrack to assist corporate scouts on mission, the MULE moves at a steady (slow) pace and carries up to 1 metric ton of cargo across difficult terrain — when terrain becomes too rough, a backup repulsorlift kicks in. Popular with smugglers and tramp freighter captains making trade runs to low-tech worlds.",
  "source": "WEG40061 Galaxy Guide 8: Scouts | WEG41014 Star Wars Adventure Journal #14 p.262 (Cynabar's Droid Datalog)"
 },
 {
  "name": "House Paramexor Squire Armorer Droid",
  "category": "Droids",
  "cost": "Not for sale",
  "availability": "4",
  "game_notes": "Armorer/weapons maintenance droid. Height: 1.5m. Move: 6 (repulsorlift, ground level-1m). DEX 2D, KNO 2D (bureaucracy 2D+1, law enforcement 2D+2), MEC 2D, PER 2D (search 4D), STR 1D, TEC 3D (armor repair 5D+1, blaster repair 6D, hover vehicle repair 3D+1, repulsorlift repair 3D+1). AA-12X Verbobrain, comms link to shipboard computer, vocabulator, two visual/auditory sensors (Human range). Weapons Database: detailed specs on most known personal weapons. IMR Module: specialized tools for weapons/equipment maintenance, modification, and safety checks.",
  "source": "WEG40073 Galaxy Guide 10: Bounty Hunters p.90"
 },
 {
  "name": "Droxian Model GDA-8 Gambling Droid",
  "category": "Droids",
  "cost": "10,000 (new)",
  "availability": "3",
  "game_notes": "Herglic-invented gambling droid. Height: 1.9m. Move: 7 (repulsorlift). DEX 2D, KNO 3D (value: currency conversion 4D, cultures 3D+2, languages 4D), MEC 1D, PER 3D (gambling 6D, persuasion 4D), STR 1D, TEC 2D (droid repair 3D). Semi-humanoid body with two arms and repulsorlift base. Two visual/auditory sensors (Human range), vocabulator, AA-1 Verbobrain, video display screen. Gambling Database: rules, procedures, and odds for up to 100 games (expandable to 500 with modular memory add-ons). Currency Reservoir: holds up to 10,000 credits; some models exchange multiple planetary currencies. Credit Verification/Transfer System via onboard comlink with house banking agency. Most have at least some gaming programs rigged to favor the house.",
  "source": "WEG40075 Galaxy Guide 11: Criminal Organizations p.87"
 },
 {
  "name": "Seeker (Criminal Location Detection Droid)",
  "category": "Droids",
  "cost": "15,000 (new; not legally available to private concerns)",
  "availability": "4, R",
  "game_notes": "Spherical law enforcement droid. Size: 0.35m diameter. Move: 13 (repulsorlift, ground level to 50m). DEX 2D (blaster 3D, dodge 3D, missile weapons 3D), KNO 2D+1 (languages 3D+1, law enforcement 4D), MEC 1D, PER 2D+2 (investigation 3D+2, search 4D), STR 1D, TEC 1D (security 2D). Visual/auditory sensors (Human range), vocabulator, AA-1 Verbobrain, TranLang I-A module (50,000+ languages), comlink to police command central. Perfect Memory: permanent record of all visual/auditory experiences. DNA Tracer Module: +3D to search when tracking a target via DNA traces. Threat Evaluation Module: determines whether to attempt disarm/detain or request assistance. Originally used by Imperial law enforcement; largely ineffective due to limited range and programming, but still employed on backwater worlds for surveillance and riot control.",
  "source": "WEG40075 Galaxy Guide 11: Criminal Organizations p.92"
 },
 {
  "name": "Droid Caller",
  "category": "Droid Gear",
  "cost": "50",
  "availability": "1",
  "game_notes": "Remote control for restraining bolts. Summons droid from up to 1km. Can activate bolt's shutdown command.",
  "source": ""
 },
 {
  "name": "Droid Customization Kit",
  "category": "Droid Gear",
  "cost": "1,000",
  "availability": "2",
  "game_notes": "Tools and parts for modifying droids. +1D to droid programming/repair for customization tasks.",
  "source": ""
 },
 {
  "name": "Restraining Bolt",
  "category": "Security",
  "cost": "25",
  "availability": "1",
  "game_notes": "Restricts droid actions and prevents leaving a set area. Droid must make Heroic willpower roll to resist commands while bolted.",
  "source": ""
 },
 {
  "name": "Death Stick",
  "category": "Drugs & Toxins",
  "cost": "Variable",
  "availability": "2, X",
  "game_notes": "Hallucinogenic narcotic. Initial euphoria, then -1D to all attributes for 1D hours. Highly addictive and degenerative.",
  "source": ""
 },
 {
  "name": "Emotion Suppressant",
  "category": "Drugs & Toxins",
  "cost": "100",
  "availability": "2",
  "game_notes": "Suppresses emotional responses. +2D to resist intimidation and fear effects. -1D to Perception for 4 hours.",
  "source": ""
 },
 {
  "name": "Glitterstim Spice",
  "category": "Drugs & Toxins",
  "cost": "Variable",
  "availability": "4, X",
  "game_notes": "Telepathic spice from Kessel. Grants short-term telepathy (Sense equivalent at 2D for 1D minutes). Highly addictive. Moderate willpower to resist addiction per use.",
  "source": ""
 },
 {
  "name": "Myostim Unit",
  "category": "Drugs & Toxins",
  "cost": "500",
  "availability": "2",
  "game_notes": "Electrical muscle stimulator. +1D STR for 1 hour. After effects: -1D STR for 2 hours.",
  "source": ""
 },
 {
  "name": "Ryll Spice",
  "category": "Drugs & Toxins",
  "cost": "Variable",
  "availability": "2, X",
  "game_notes": "Medicinal spice from Ryloth. Used in legitimate medicine but also recreationally. Medical: aids healing. Recreational: euphoria, -1D Perception while under effects.",
  "source": ""
 },
 {
  "name": "A-5 Envirosuit",
  "category": "Environmental Suits",
  "cost": "1,000",
  "availability": "2",
  "game_notes": "+2 physical, +1 energy (torso/arms/legs). +1 physical (head, no energy). -1D DEX. Sealed environment, -60 to 150\u00b0C. 6hr air, 10hr battery (4hr extreme). Spotlight.",
  "source": "Goroth, Slave of the Empire (pages 84-86)"
 },
 {
  "name": "All-Temperature Cloak",
  "category": "Environmental Suits",
  "cost": "100",
  "availability": "1",
  "game_notes": "+2 bonus to stamina checks to resist severe weather.",
  "source": "d20 Core Rulebook (page 140)"
 },
 {
  "name": "Body Glove",
  "category": "Environmental Suits",
  "cost": "700",
  "availability": "3",
  "game_notes": "Upper torso to foot coverage. +1 to survival or stamina rolls in harsh conditions.",
  "source": "Galladinium's Fantastic Technology (page 42)"
 },
 {
  "name": "Light Scout Armor",
  "category": "Environmental Suits",
  "cost": "700",
  "availability": "2",
  "game_notes": "+1 to resist damage. +1D sneak in natural terrain. Integrated harness, helmet with breath mask (6hr) and macrobinocular visor.",
  "source": "Rules of Engagement (pages 33-34)"
 },
 {
  "name": "Lightweight Armor",
  "category": "Environmental Suits",
  "cost": "\u2014",
  "availability": "2",
  "game_notes": "+1 STR to resist. Helmet: breath mask (6hr filter) + macrobinoculars. Utility belt with Multipack. +1D sneak in natural terrain.",
  "source": "Galaxy Guide 8 (page 45)"
 },
 {
  "name": "Morseerian Environmental Suit",
  "category": "Environmental Suits",
  "cost": "1,500",
  "availability": "3",
  "game_notes": "Creates artificial methane atmosphere indefinitely. Protects against harmful gases. Functions even when punctured by weapons fire.",
  "source": "Ultimate Alien Anthology (page 100)"
 },
 {
  "name": "Ooglith Cloaker",
  "category": "Environmental Suits",
  "cost": "Not for sale",
  "availability": "4, X",
  "game_notes": "Organic environment suit (Yuuzhan Vong). Painful: inflicts 2D damage when worn. Released by pressing hidden organ (Difficult Knowledge to find). Used with gnullith.",
  "source": "New Jedi Order Sourcebook (pages 22-23)"
 },
 {
  "name": "Polarizing Field Insulator Suit",
  "category": "Environmental Suits",
  "cost": "3,000",
  "availability": "2",
  "game_notes": "+1 to resist damage, -2D DEX. Polarizing field: 4m diameter, 8D resistance vs electricity/ion. 30 min on standard power pack.",
  "source": "Arms and Equipment Guide (page 43)"
 },
 {
  "name": "Scout Armor",
  "category": "Environmental Suits",
  "cost": "\u2014",
  "availability": "3",
  "game_notes": "+2 STR to resist damage, no DEX penalties. Breather and heater units for low/no atmosphere (not vacuum).",
  "source": "Galaxy Guide 8 (page 45)"
 },
 {
  "name": "SeaScape Diving Suit",
  "category": "Environmental Suits",
  "cost": "400",
  "availability": "1-2",
  "game_notes": "+2 pips STR for damage. +2D swimming, underwater Move 12. 6hr air tanks, dives to 200m. Helmet comlink (2km range). DEX reduced on land only.",
  "source": "Gundark's Fantastic Technology (page 60)"
 },
 {
  "name": "Skakoan Pressure Suit (Heavy)",
  "category": "Environmental Suits",
  "cost": "11,000",
  "availability": "4",
  "game_notes": "+2D+1 physical, +1D+1 energy, -1D DEX. Vocalizer distorts speech. 50% suit rupture on Wounded.",
  "source": "Ultimate Alien Anthology (page 143)"
 },
 {
  "name": "Skakoan Pressure Suit (Light)",
  "category": "Environmental Suits",
  "cost": "1,000",
  "availability": "4",
  "game_notes": "+1D physical, +1 energy. Vocalizer distorts speech. 50% suit rupture on Wounded result.",
  "source": "Ultimate Alien Anthology (page 143)"
 },
 {
  "name": "Skakoan Pressure Suit (Medium)",
  "category": "Environmental Suits",
  "cost": "4,500",
  "availability": "4",
  "game_notes": "+1D+2 physical, +1D energy, -1 DEX. Vocalizer distorts speech. 50% suit rupture on Wounded.",
  "source": "Ultimate Alien Anthology (page 143)"
 },
 {
  "name": "Thinsuit",
  "category": "Environmental Suits",
  "cost": "900",
  "availability": "2",
  "game_notes": "+1 physical. 18hr protection vs chemical exposure, -30 to 100\u00b0C. Breath mask (6hr filter, stores 5 more). In space: heat/protection for ~1hr but no air supply.",
  "source": "Galaxy Guide 8 (page 45)"
 },
 {
  "name": "Versatex Survival Suit",
  "category": "Environmental Suits",
  "cost": "900; 150 (plates); 5 (dye)",
  "availability": "2",
  "game_notes": "Waterproof, tear/pressure resistant. -30 to 100\u00b0C. Belt color sensor + dye injection = +1D sneak/hide. Helmet: comlink, breath mask, glowlamp. Optional armor: +1D physical, +2 energy.",
  "source": "Galladinium's Fantastic Technology (page 57)"
 },
 {
  "name": "Organic Gill",
  "category": "Survival Gear",
  "cost": "200",
  "availability": "3",
  "game_notes": "Mon Calamari synthetic organic gill. Gelatinous symbiotic blob worn over breathing apertures; filters oxygen from water. Lasts several weeks underwater before dying. Small microphone/earphone inserts allow muffled communication. Usable by most species with compatible atmospheric requirements. Sullustans have an allergic reaction and cannot use it.",
  "source": "WEG40114 The Jedi Academy Sourcebook p.140; WEG40153 Wretched Hives p.79"
 },
 {
  "name": "Hush-About Jet Pack AJP-400",
  "category": "Jet Packs",
  "cost": "1,800 (150 power pack recharge/coolant refill, 150 portable carrying case)",
  "availability": "3, F or R",
  "game_notes": "Model: Arakyd Aerodynes Inc. Hush-About AJP-400. Skill: Jet pack operation. Lifts up to 300kg total. Moves vertically 200m per charge, horizontally up to 500m per charge. 10 charges, can run on continuous charge-feed. Produces very little noise — any attempt to locate using auditory pickups requires search roll at +10 difficulty penalty.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.12"
 },
 {
  "name": "Z-6 Jet Pack",
  "category": "Jet Packs",
  "cost": "300",
  "availability": "2",
  "game_notes": "Standard jet pack. Move 100m horizontal, 70m vertical. Easy jet pack operation, modified by obstacles. 20 charges, 2 per round max.",
  "source": ""
 },
 {
  "name": "Zim Systems Rocket Pack",
  "category": "Jet Packs",
  "cost": "500",
  "availability": "2",
  "game_notes": "Rocket pack. Move 120m horizontal, 80m vertical. Moderate rocket pack operation. 15 charges, 3 per round max.",
  "source": ""
 },
 {
  "name": "Greshnohr DRPV-78 HSS Thruster Pack",
  "category": "Jet Packs",
  "cost": "600",
  "availability": "2, R",
  "game_notes": "Rocket pack. Each burst: 500m horizontal, 300m vertical. 12 bursts total; must cool 1 round between bursts. Repulsorlift hover mode: Move 15, max 10 min continuous operation, must cool for 2x operating time. Rocket and repulsor cannot be used simultaneously. Skill: rocket pack operation.",
  "source": "WEG40073 Galaxy Guide 10: Bounty Hunters p.90"
 },
 {
  "name": "Rocket Pack (4000 BBY)",
  "category": "Jet Packs",
  "cost": "750",
  "availability": "2, 3",
  "game_notes": "Zim Systems ROCKET. Personal rocket pack. Skill: rocket pack operation. Can carry 80 kilograms up to 40 meters vertically and 120 meters horizontally on a single charge. 10 charges. 4000 BBY era tech.",
  "source": "WEG40082 Tales of the Jedi Companion"
 },
 {
  "name": "Bacta Tank",
  "category": "Medical",
  "cost": "100,000",
  "availability": "2",
  "game_notes": "Full bacta immersion tank. Heals all wounds. Stunned/Wounded: 1D hours. Incapacitated: 4D hours. Mortally Wounded: 1D days. Requires Moderate (A) medicine roll.",
  "source": "Rulebook"
 },
 {
  "name": "Bacta Tray",
  "category": "Medical",
  "cost": "500",
  "availability": "2",
  "game_notes": "Portable bacta treatment for single limb. Heals one wound level per 4 hours of immersion.",
  "source": ""
 },
 {
  "name": "FastFlesh Medpac",
  "category": "Medical",
  "cost": "200",
  "availability": "2",
  "game_notes": "Single-use bacta-impregnated bandage. Heals one wound level in 30 minutes. Requires Easy first aid roll to apply correctly.",
  "source": "Gundark's Fantastic Technology"
 },
 {
  "name": "Med Diagnostic Scanner",
  "category": "Medical",
  "cost": "200",
  "availability": "1",
  "game_notes": "Handheld medical scanner. +1D to first aid/medicine diagnostic rolls.",
  "source": ""
 },
 {
  "name": "Med Unit",
  "category": "Medical",
  "cost": "5,000",
  "availability": "2",
  "game_notes": "Portable medical bed with diagnostic equipment and bacta reservoir. +2D to medicine rolls. Can stabilize mortally wounded patients.",
  "source": ""
 },
 {
  "name": "Medkit",
  "category": "Medical",
  "cost": "300",
  "availability": "1",
  "game_notes": "Advanced medical kit. Adds +1D+2 to first aid skill rolls.",
  "source": "Rulebook"
 },
 {
  "name": "Medpac",
  "category": "Medical",
  "cost": "100",
  "availability": "1",
  "game_notes": "Standard first aid kit. Adds +1D to first aid skill rolls. Contains antiseptic cleansers, bacta patches, bandages, stimulants.",
  "source": "Rulebook"
 },
 {
  "name": "Portable Survival Pod",
  "category": "Medical",
  "cost": "3,000",
  "availability": "2",
  "game_notes": "Emergency life support pod. Stabilizes critically injured patients for up to 48 hours. +2D to stabilize mortally wounded.",
  "source": ""
 },
 {
  "name": "Trauma Kit",
  "category": "Medical",
  "cost": "600",
  "availability": "2",
  "game_notes": "Field surgery kit. +2D to medicine skill rolls for treating serious injuries. Contains portable monitors, autosyringe, field cauterizer.",
  "source": ""
 },
 {
  "name": "Vitapill",
  "category": "Drugs & Toxins",
  "cost": "25",
  "availability": "1",
  "game_notes": "Nutritional supplement. Sustains a being for 1 day without food.",
  "source": ""
 },
 {
  "name": "Traxes BioElectronics Myostim Couch",
  "category": "Medical",
  "cost": "30,000",
  "availability": "3",
  "game_notes": "Contour chair with sensor field and computerized electromyoclonic broadcaster that exercises muscles passively. For every 12 hours spent on the unit, Strength is increased by +1 (maximum bonus +1D). Bonus lasts 1 week. Extended use risk: after more than 6 months of use, characters in an extremely stressful situation may suffer a -2 penalty to Dexterity, Knowledge, Perception, and all related skills; with a mishap, the character becomes enraged and uncontrollable.",
  "source": "WEG40122 Shadows of the Empire p.113"
 },
 {
  "name": "Athakam/RSMA Hyperbaric Medical Chamber",
  "category": "Medical",
  "cost": "50,000",
  "availability": "3, F",
  "game_notes": "Large pressurized living quarters that simulates nearly any atmospheric condition. Can adjust atmospheric pressure, oxygenation, medicated fields, and repulsor-field gravity to suit any species or medical condition. Negates any atmospheric/respiratory penalties and eliminates the need for life-support apparatus while inside the chamber. Used in major medical facilities to allow beings in cybernetic life-support systems to spend time outside their survival suits. Not recommended for extended habitation.",
  "source": "WEG40122 Shadows of the Empire p.112"
 },
 {
  "name": "Athakam/RSMA Bioscan Unit",
  "category": "Medical",
  "cost": "13,000",
  "availability": "3, F",
  "game_notes": "Bioscan sensor array and analysis unit. Scale: Character. Skills: computer programming/repair to set up; first aid or medicine to use. Requires Easy to Difficult computer programming/repair roll to set up (depending on situation). If properly set up, adds +2D to first aid, medicine, or Technical rolls. Maximum range: 3 meters. Provides detailed data on subject's species, sex, heartbeat, respiration, muscle tone index, height, weight, temperature, approximate skin age, biological anomalies or variations, and presence of diseases or viruses. Can also detect and analyze power sources, comm transmissions, hidden weapons, explosives, and other electronic devices concealed on or implanted within a subject. Sensors must be firmly mounted to a stationary frame for accurate readings; any irregularities in placement result in faulty readings. Developed by the Rhinnal State Medical Academy.",
  "source": "WEG40122 Shadows of the Empire p.110"
 },
 {
  "name": "ARC Trooper Armor",
  "category": "Military Armor",
  "cost": "Not for sale",
  "availability": "4, X",
  "game_notes": "+1D physical and energy. Comlink. Climate body glove. MFTAS: +1D search, +1D ranged vs 10+ m/round. Utility belt.",
  "source": "Geonosis and the Outer Rim Worlds (pages 80-81)"
 },
 {
  "name": "Boba Fett's Battle Armor",
  "category": "Military Armor",
  "cost": "Not for sale",
  "availability": "X",
  "game_notes": "Modified Mandalorian armor. +4D physical, +3D energy, -1D DEX. Wrist blaster (5D), flame projector (5D), whipcord launcher, wrist rockets (6D). Jet pack, 360\u00b0 macrobinoculars, IR/motion sensors.",
  "source": "Galaxy Guide 3"
 },
 {
  "name": "Clone Trooper Armor Mk I",
  "category": "Military Armor",
  "cost": "Not for sale",
  "availability": "3, X",
  "game_notes": "+2D physical, +1D energy, -1D DEX. Tongue-activated comlink. Climate body glove. MFTAS: +1 PER low-vis, +1 ranged vs 10+ m/round targets. Utility belt with medpacs.",
  "source": "Geonosis and the Outer Rim Worlds (pages 80-81)"
 },
 {
  "name": "Clone Trooper Armor Mk II",
  "category": "Military Armor",
  "cost": "Not for sale",
  "availability": "3, X",
  "game_notes": "+2D physical, +1D energy, -1D DEX. Tongue-activated comlink. Sealed body glove + breath mask. MFTAS: +1D PER/+1D ranged. Utility belt.",
  "source": "Geonosis and the Outer Rim Worlds (pages 80-81)"
 },
 {
  "name": "Imperial Pilot Flight Suit",
  "category": "Military Armor",
  "cost": "Not for sale",
  "availability": "3, X",
  "game_notes": "+2 STR to resist damage. Limited vacuum protection. +1D+1 stamina vs cold. Helmet: comlink + nav computer linkup (+1D sensors).",
  "source": "Movie Trilogy Sourcebook (page 52)"
 },
 {
  "name": "Katarn Commando Armor",
  "category": "Military Armor",
  "cost": "Not for sale",
  "availability": "4, X",
  "game_notes": "+2D physical and energy, -1D DEX. Retractable vibroblade (STR+1D+2). Sealed 5 min vacuum. Auto-bacta injector (reduces wound penalty by 1D, 1 charge). MFTAS: +2D PER/search, +1D ranged. Macrobinoculars + UV nightvision.",
  "source": "Geonosis and the Outer Rim Worlds (pages 80-81)"
 },
 {
  "name": "Royal Guard Armor",
  "category": "Military Armor",
  "cost": "Not for sale",
  "availability": "3, X",
  "game_notes": "+2D physical, +1D energy, -1D DEX. Top-security scrambler comlink. Sealed body glove. MFTAS: +3D PER/search, +2D ranged. Utility belt.",
  "source": "Rules of Engagement (page 103)"
 },
 {
  "name": "Sandtrooper Armor",
  "category": "Military Armor",
  "cost": "Not for sale",
  "availability": "3, X",
  "game_notes": "+1D physical and energy, -1D DEX. Long-range comlink (surface to orbit). Sealed hot-climate body glove. MFTAS: +2D PER/+2D ranged. Backpack cooling unit.",
  "source": "Rules of Engagement (pages 99-100)"
 },
 {
  "name": "Scout Trooper Armor",
  "category": "Military Armor",
  "cost": "Not for sale",
  "availability": "3, X",
  "game_notes": "+2 physical and energy. Comlink. Sealed body glove. MFTAS: +2D PER/+2D ranged. Macrobinoculars (100-1000m). Sensor pack (+2D repulsorlift op for nav). Camo-tent, water purifier.",
  "source": "Rules of Engagement (pages 100-101)"
 },
 {
  "name": "Snowtrooper Armor",
  "category": "Military Armor",
  "cost": "Not for sale",
  "availability": "3, X",
  "game_notes": "+1D physical and energy, -1D DEX. Comlink. Sealed cold-climate body glove. MFTAS: +2D PER/+2D ranged. Thermal tent, snowboot slippers.",
  "source": "Rules of Engagement (page 99)"
 },
 {
  "name": "Spacetrooper Armor",
  "category": "Military Armor",
  "cost": "Not for sale",
  "availability": "3, X",
  "game_notes": "Zero-G assault powersuit. +2D physical, +2D energy, -1D DEX. Sealed with life support. Repulsorlift: Space 1. Grenade launcher (7D), blaster cannon (5D), proton torpedo launcher. Magnetic grapples.",
  "source": "Imperial Sourcebook"
 },
 {
  "name": "Storm Commando Armor",
  "category": "Military Armor",
  "cost": "Not for sale",
  "availability": "X",
  "game_notes": "+1D physical and energy. Sensor baffling: +2D sneak vs electronic detection. MFTAS. Sealed body glove.",
  "source": "Rules of Engagement"
 },
 {
  "name": "Stormtrooper Armor",
  "category": "Military Armor",
  "cost": "Not for sale",
  "availability": "3, X",
  "game_notes": "+2D physical, +1D energy, -1D DEX. Tongue-activated comlink. Sealed body glove/breath mask. MFTAS: +2D PER in low-vis, +2D ranged vs targets moving 10+ m/round. Utility belt.",
  "source": "Rulebook (page 234)"
 },
 {
  "name": "Coruscant Guard Armor",
  "category": "Military Armor",
  "cost": "Not for sale",
  "availability": "X",
  "game_notes": "Standard Coruscant Guard armor. Basic Suit: +2D physical, +1D energy, -1D DEX and related skills. Optic Sensors: no penalty operating in complete darkness. Filter: self-sealing filter screens all dangerous particulates and crowd control gases; lacks oxygen supply — requires a breathable-but-polluted atmosphere (will not function as vacuum suit). Comlink Scrambler: linked to other Coruscant Guard units and command; optional tracking beacon software adds beacon so unit commander knows troop positions; unit commander's helmet has verbally activated heads-up display showing trooper positions. Climate Control Body Glove: comfortable operation in extreme heat or cold for several hours.",
  "source": "WEG40122 Shadows of the Empire p.113"
 },
 {
  "name": "AV-1A Assault Armor",
  "category": "Powersuits",
  "cost": "50,000",
  "availability": "4, X",
  "game_notes": "+2D+2 physical and energy, -2D DEX. +3D STR (failed = malfunction + stun risk). Repulsorlift, WITS (+2D+2 weapons), 4D first aid system, rocket ejection. 12hr operation.",
  "source": "Galladinium's Fantastic Technology (page 81)"
 },
 {
  "name": "AV-1C Combat Armor",
  "category": "Powersuits",
  "cost": "12,000",
  "availability": "4, X",
  "game_notes": "+2D physical and energy, -1D DEX. +2D STR (failed roll = malfunction 1D rounds + possible 4D stun). Repulsorlift, IR/starlight, WITS (+1D weapons for 2 linked weapons). 24hr operation.",
  "source": "Galladinium's Fantastic Technology (page 81)"
 },
 {
  "name": "AV-1S Scout Armor",
  "category": "Powersuits",
  "cost": "7,500",
  "availability": "3, F",
  "game_notes": "+1D energy, +1D+1 physical, -1D DEX. +1D STR. Repulsorlift (Move 20, 100m ceiling). IR/starlight imaging, power lamp, comlink (50km), macrobinoculars, 5 sureseal patches, bio-readout, environment scanner. 36hr operation.",
  "source": "Galladinium's Fantastic Technology (pages 80-81)"
 },
 {
  "name": "Bounty Hunter Armor",
  "category": "Powersuits",
  "cost": "2,500",
  "availability": "2, R",
  "game_notes": "+2D physical, +1D energy.",
  "source": "Rulebook (page 234)"
 },
 {
  "name": "Corellian HuntSuit",
  "category": "Powersuits",
  "cost": "2,900",
  "availability": "3, R",
  "game_notes": "+2D physical, +1D energy (full body), -1D DEX. +1D lifting. Sensor pod: +1D search within 50m.",
  "source": "Galaxy Guide 10 (page 87)"
 },
 {
  "name": "Corellian Powersuit",
  "category": "Powersuits",
  "cost": "10,000",
  "availability": "2, R",
  "game_notes": "+1D+2 physical, +1D energy, -1D DEX. Servos: +1D STR for lifting/melee/brawling. If Easy powersuit op fails: no bonus, additional -1D STR and DEX.",
  "source": "d20 Core Rulebook (page 139)"
 },
 {
  "name": "Dragon Armor",
  "category": "Powersuits",
  "cost": "Not for sale",
  "availability": "4, X",
  "game_notes": "+3D physical, +2D energy, -2D DEX. Move 7. +1D STR. 180\u00b0 vision, MFTAS. Defensive blaster (3D), twin flamers (5D fire-linked), mini-missile launcher (5D). Sealed 2hr O2.",
  "source": "Gundark's Fantastic Technology (pages 52-53)"
 },
 {
  "name": "Galax Systems Powersuit",
  "category": "Powersuits",
  "cost": "\u2014",
  "availability": "\u2014",
  "game_notes": "+3D lifting. -1D all DEX skills. No damage protection.",
  "source": "Cracken's Rebel Field Guide (page 54)"
 },
 {
  "name": "Hutt Battle Armor",
  "category": "Powersuits",
  "cost": "Not for sale",
  "availability": "4, X",
  "game_notes": "+3D+2 physical, +2D+1 energy, -2D DEX. Microrepulsors: Move 12, +1D sneak. +1D+1 STR, +2 DEX. +1D hide (camo plates). +1D search (helmet). Computer/translator (languages 10D). 2 hold-out blasters (3D), E-Web (8D).",
  "source": "Tempest Feud (page 128)"
 },
 {
  "name": "Juggernaut Armor",
  "category": "Powersuits",
  "cost": "Not for sale",
  "availability": "4, X",
  "game_notes": "+3D physical, +3D energy, -3D DEX. Move 5. +3D STR. 180\u00b0 vision, MFTAS, +2D PER/search. Medium repeating blaster (7D), grenade launcher (5D), retractable claws (STR+2D).",
  "source": "Gundark's Fantastic Technology (pages 55-56)"
 },
 {
  "name": "Krail 210 Personal Armor",
  "category": "Powersuits",
  "cost": "26,000",
  "availability": "X",
  "game_notes": "+2D energy, +3D physical, -1D DEX. Move 16. +1D lifting, +1D search. Line slinger (20m), jet pack (Move 100h/70v, 20 charges), winch (100kg), dual force blades (STR+3D). Sealed 2hr O2.",
  "source": "Galaxy Guide 9 (page 31)"
 },
 {
  "name": "Leviathan Armor",
  "category": "Powersuits",
  "cost": "Not for sale",
  "availability": "4, X",
  "game_notes": "+3D physical and energy, -1D DEX underwater/-3D land. +3D STR. Move 5 land/15 swim. MFTAS, sonar. Duo-flechette (5D), mini-torpedo launcher (5D). Custom fit: extra -1D DEX if not owner.",
  "source": "Gundark's Fantastic Technology (pages 55-56)"
 },
 {
  "name": "Malgon Armor",
  "category": "Powersuits",
  "cost": "Not for sale",
  "availability": "4, X",
  "game_notes": "+2D physical, +2D energy, -2D DEX. No hide/sneak/swimming. +1D STR lifting/melee. +1D search. Dual flame projectors (5D, 1-5m cone).",
  "source": "Gundark's Fantastic Technology (pages 57-58)"
 },
 {
  "name": "Nemesis Armor",
  "category": "Powersuits",
  "cost": "Not for sale",
  "availability": "4, X",
  "game_notes": "+3D physical, +2D energy, -2D DEX. Move 7. +1D STR. 180\u00b0 vision, +2D PER/search, MFTAS (+1D ranged at med/long). DEMP gun (3D ion), light repeating blaster (6D).",
  "source": "Gundark's Fantastic Technology (pages 58-59)"
 },
 {
  "name": "Smasher Armor",
  "category": "Powersuits",
  "cost": "1,250",
  "availability": "3",
  "game_notes": "+1D physical and energy. Servo enhancers: +2D brawling, climbing/jumping, lifting, and STR damage.",
  "source": "Galaxy Guide 10 (page 87)"
 },
 {
  "name": "Sunder 9",
  "category": "Powersuits",
  "cost": "Not for sale",
  "availability": "4, X",
  "game_notes": "+3D physical, +2D energy, -1D+2 DEX. +1D+2 STR. Blaster cannon (6D), flame projector (5D, 3m), rocket pack (Move 90h/50v, 12 charges). 270\u00b0 vision, +1D PER, +2D search, sonar/IR. Aquatic: +2D swimming, Move 14. Sealed 4hr power, 6hr O2.",
  "source": "Alliance Intelligence Reports (page 88)"
 },
 {
  "name": "Barabel Microbe Armor",
  "category": "Protective Vests",
  "cost": "30,000",
  "availability": "4",
  "game_notes": "Starts at +1D vs blaster (front/back torso). Each subsequent hit adds +1 pip (max 3D). Drops 1 pip per 3 min without hits. Destroyed if blast wounds wearer or exposed to below-zero temps for 15 min.",
  "source": "Galladinium's Fantastic Technology (pages 85-86)"
 },
 {
  "name": "Blast Vest",
  "category": "Protective Vests",
  "cost": "300",
  "availability": "1",
  "game_notes": "+1D physical, +1 energy (torso).",
  "source": "Rulebook (page 234)"
 },
 {
  "name": "Corondexx Blast Vest",
  "category": "Protective Vests",
  "cost": "3,000; 25 (power cells)",
  "availability": "2",
  "game_notes": "Power cells project ablative screen: +1D energy, +2 physical (torso). Stores 6 power cells, drained in 10 min continuous. Power jacks allow charging from portable generator (1hr charge, 2 min use).",
  "source": "Galaxy Guide 10 (page 87)"
 },
 {
  "name": "CV14-B Concussion Vest",
  "category": "Protective Vests",
  "cost": "500",
  "availability": "1",
  "game_notes": "Torso: +1D front and back from physical (non-energy) attacks, including crash and falling damage.",
  "source": "Gundark's Fantastic Technology (page 52)"
 },
 {
  "name": "Koromondain Half-Vest",
  "category": "Protective Vests",
  "cost": "250",
  "availability": "1",
  "game_notes": "+1D+2 physical; +2 energy to torso front and back.",
  "source": "Gundark's Fantastic Technology (page 56)"
 },
 {
  "name": "Leather Jerkin",
  "category": "Protective Vests",
  "cost": "300 (+150 custom)",
  "availability": "1",
  "game_notes": "Provides +1 to resist physical damage.",
  "source": "Arms and Equipment Guide (page 42)"
 },
 {
  "name": "Massassi Chest Shield",
  "category": "Protective Vests",
  "cost": "Not for sale",
  "availability": "4, X",
  "game_notes": "Alchemically-treated shield: +1D+1 physical and energy (chest only). Reduces Dexterity by -1 pip.",
  "source": "Dark Side Sourcebook (page 114)"
 },
 {
  "name": "Tracker Utility Vest",
  "category": "Protective Vests",
  "cost": "300",
  "availability": "2",
  "game_notes": "Provides +1 to resist physical damage. Can carry up to 28 objects of 1kg or less in pockets, pouches and straps.",
  "source": "Arms and Equipment Guide (page 41)"
 },
 {
  "name": "Binder Cuffs",
  "category": "Security",
  "cost": "50",
  "availability": "1",
  "game_notes": "Standard restraints. Moderate STR or Difficult security to escape. 5D STR to break.",
  "source": ""
 },
 {
  "name": "Disguise Kit",
  "category": "Security",
  "cost": "500",
  "availability": "2",
  "game_notes": "Makeup, prosthetics, and accessories for disguise. +1D to con rolls when disguised.",
  "source": ""
 },
 {
  "name": "Electronic Lock Breaker",
  "category": "Security",
  "cost": "1,000",
  "availability": "2, R",
  "game_notes": "Automated lock bypass device. Adds +2D to security rolls against electronic locks. Takes 1D rounds to operate.",
  "source": ""
 },
 {
  "name": "Fingerprint Masque",
  "category": "Security",
  "cost": "15,000 (black market)",
  "availability": "4, X",
  "game_notes": "Palm-sized device that overlays fingerprint patterns with a biochemical screen. Uses computer programming/repair skill to operate. Masque pattern can be random or conform to pre-set patterns entered into the device's memory. Re-patternization takes less than a minute per digit and lasts 10-12 hours depending on physiology. Very difficult to apply a different species' masque pattern. Flip-top surface contains a liquid crystal display for commands and pattern display; bottom half has an input panel and sensor pad.",
  "source": "WEG40075 Galaxy Guide 11: Criminal Organizations p.81"
 },
 {
  "name": "Retinal Disguiser",
  "category": "Security",
  "cost": "25,000 (black market)",
  "availability": "4, X",
  "game_notes": "Retinal pattern falsification device. Uses medicine skill; normal operation requires Easy medicine total. If a pre-existing pattern has been loaded (rather than a live subject scan), GM determines relative accuracy and may require a higher difficulty roll. Sufficiently proficient users may attempt to manufacture retinal patterns 'from scratch' if sufficient data on the subject is available, but this always results in much higher medicine difficulties.",
  "source": "WEG40075 Galaxy Guide 11: Criminal Organizations p.84"
 },
 {
  "name": "DimSim",
  "category": "Security",
  "cost": "5,000",
  "availability": "4, X",
  "game_notes": "Portable holographic projector that projects a 'shield' of darkness over the user's face, completely concealing facial features. Defeats computer imaging systems that can see through traditional masks. Small cap or helmet with a micro powerpack that snaps into a side compartment. Uses standard datapad/portable computer powerpacks; lasts up to 20 minutes of continuous operation.",
  "source": "WEG40075 Galaxy Guide 11: Criminal Organizations p.84"
 },
 {
  "name": "Sensor No-Show",
  "category": "Security",
  "cost": "5,000 (black market)",
  "availability": "4, X",
  "game_notes": "Miniature field generators mounted in a wristband configuration. Generates an electromagnetic field that covers the user, interfering with heat and infrared detectors. Motion or vision-based sensors are unaffected. Grants +2D to sneak rolls against heat- and infrared-based sensors. Uses sneak skill. Standard power cell is completely drained after 15 minutes of use.",
  "source": "WEG40075 Galaxy Guide 11: Criminal Organizations p.85"
 },
 {
  "name": "Shipjacking Kit",
  "category": "Security",
  "cost": "8,000 (licensed collection agency), 16,000+ (black market)",
  "availability": "4, F or X",
  "game_notes": "Series of small hand-held electronic decoders used to gain access to ships while in port. Electronically searches out the proper encoded combination and replicates it in seconds. Adds +3D to security roll to break through a ship's security code system.",
  "source": "WEG40075 Galaxy Guide 11: Criminal Organizations p.85"
 },
 {
  "name": "Force Cage",
  "category": "Security",
  "cost": "15,000",
  "availability": "3, R",
  "game_notes": "Energy containment field. 8D to resist escape attempts. Blocks Force powers used to escape (adds +3D difficulty).",
  "source": ""
 },
 {
  "name": "Holographic Image Disguiser",
  "category": "Security",
  "cost": "5,000",
  "availability": "3, R",
  "game_notes": "Projects holographic overlay changing user's appearance. +2D to con for disguise. 2 hours of power per charge.",
  "source": ""
 },
 {
  "name": "Magnacuffs",
  "category": "Security",
  "cost": "100",
  "availability": "2",
  "game_notes": "Magnetic restraints. Difficult STR or Very Difficult security to escape. 7D STR to break.",
  "source": ""
 },
 {
  "name": "Security Kit",
  "category": "Security",
  "cost": "500",
  "availability": "2",
  "game_notes": "Lock picking and bypass tools. +1D to security skill rolls for bypassing locks and alarms.",
  "source": ""
 },
 {
  "name": "Magnaharness",
  "category": "Security",
  "cost": "200",
  "availability": "2, F",
  "game_notes": "Full-sized magnacuff restraint. Attaches at neck and torso with optional clips for arms, hands, upper/lower legs, and feet. Greatly restricts movement. STR 8D to hold individuals.",
  "source": "WEG40073 Galaxy Guide 10: Bounty Hunters p.89"
 },
 {
  "name": "Man Trap",
  "category": "Security",
  "cost": "8,000",
  "availability": "3, F",
  "game_notes": "Miniaturized reversed repulsorlift field. 1m square metal plate, hidden (make hide roll). Powered by small repulsorlift generator with 10m cord (additional lengths available), plus remote activator. Creates high-intensity gravity field that immobilizes anyone stepping on/over it. Target makes opposed Strength roll vs trap's variable gravity setting (5D-15D). Potential targets making a successful Perception roll notice the trap.",
  "source": "WEG40073 Galaxy Guide 10: Bounty Hunters p.89"
 },
 {
  "name": "Restraint Capsule",
  "category": "Security",
  "cost": "10,700",
  "availability": "3, F",
  "game_notes": "Upgraded shipboard force cage. Multiple layers of low-level force fields with power regulators for minimal ship power drain. Shock system variable 1D-7D (stun or normal). STR 7D to break out. Requires security skill to operate.",
  "source": "WEG40073 Galaxy Guide 10: Bounty Hunters p.89"
 },
 {
  "name": "Stun Cuffs",
  "category": "Security",
  "cost": "100",
  "availability": "2, F",
  "game_notes": "BlasTech AR-101. Passive when wearer is still. If the cuffed character struggles, cuffs deal stun damage equal to the character's Strength.",
  "source": "WEG40114 The Jedi Academy Sourcebook p.141"
 },
 {
  "name": "Slave Collars (and Director Unit)",
  "category": "Security",
  "cost": "10,000 (one director unit and 10 slave collars)",
  "availability": "3, R, X",
  "game_notes": "Custom-made slave collars. Metal circlets (adjustable for size) that fit around the neck, arm, or other extremity. Contains micro-circuitry and couplings for power cables to link multiple units. The director unit broadcasts commands and directs high-voltage shocks (2D-5D physical damage depending on setting). Some units feature a 'kill' setting (8D damage) for escape attempts. Once endorsed by the Empire for licensed slavers, now seen only among illegal slaving operations.",
  "source": "WEG40158 Gundark's Fantastic Technology: Personal Gear p.74"
 },
 {
  "name": "Slaver Snare Gun",
  "category": "Security",
  "cost": "1,200 (black market)",
  "availability": "3, F or X",
  "game_notes": "Thalassian Corodex Snare. Skill: Missile weapons: Thalassian snare gun. Scale: Character. Ammo: 6. Range: 5-10/25/50. Damage: 2D stun. Shoulder-mounted tube-launched device that emits a cone of chemically treated wire filaments. On striking the target, filaments coil tightly and begin to expand and contract, fusing into a hard shell. On contact, target makes opposed Strength roll vs snare's starting STR 3D to avoid entanglement. Snare's STR increases by +1D each additional round as filaments harden. A special dissolving agent degrades the filaments. Favored by slaver strike teams.",
  "source": "WEG40158 Gundark's Fantastic Technology: Personal Gear p.75"
 },
 {
  "name": "Tangier Gun",
  "category": "Security",
  "cost": "900 (extra clip: 25)",
  "availability": "3",
  "game_notes": "Salus Tangier Elite 1. Skill: Missile weapons. Ammo: 5. Range: 5-10/30/60. Damage: 2D (impact of weighted ends), 4D stun (durawire tangier package). Fires a triple strand of durawire weighted at each of the three ends. The spinning wires ensnare opponents. Available as a short, wide-barreled sidearm with folding stock and retractable sight, or as armor-mounted. Opponent works free by making opposed Strength roll greater than the stun damage of the tangier.",
  "source": "WEG40158 Gundark's Fantastic Technology: Personal Gear p.76"
 },
 {
  "name": "Universal Energy Cage",
  "category": "Security",
  "cost": "100,000",
  "availability": "X (restricted to legal governments)",
  "game_notes": "Imperial Universal Energy Cage. Move: 15; 45 kmh. Created by Junior Engineer Umak Leth during the Great Jedi Purge to safely transport Jedi to Imperial dungeons. A floating confinement sphere 3 meters in diameter filled with elaborate coils of superconductors. Once energized, the entire sphere is wrapped in a force field with STR up to 15D (unit applies only as much energy as needed, so it's often lower when the prisoner isn't resisting). Emanates a special energy that blocks Force and similar mental energies (effectiveness up to 15D). A bottom-mounted repulsor unit suspends the prisoner in the center and supplies oxygen. Self-contained, floats through the air, no external sabotage points. Only unlocks via a specially coded radio signal held by the Sovereign Protectors. Prisoners are presumed to enter Force hibernation for long stays — no provisions for food or water.",
  "source": "WEG40158 Gundark's Fantastic Technology: Personal Gear p.77"
 },
 {
  "name": "Corellidyne Doubler Suit",
  "category": "Security",
  "cost": "30,000",
  "availability": "4, X",
  "game_notes": "Holographic projector bodysuit. Requires 1 hour recording of subject, then Difficult computer programming/repair to create holo-composite. Easy Mechanical roll projects lifelike image up to 10m away in any direction. Viewers must make Very Difficult Perception/search to detect the image at 50+ meters; difficulty reduces by one level per 10m closer. Allows hunter to draw enemy fire with minimal exposure.",
  "source": "WEG40073 Galaxy Guide 10: Bounty Hunters p.87"
 },
 {
  "name": "Fabritech CN-15 Camouflage Netting",
  "category": "Security",
  "cost": "3,500",
  "availability": "2, R",
  "game_notes": "A physical tarp/netting draped over a small area (ship, vehicle, equipment cache) to hide it from sensor detection. Skill: hide. Adds +2D to the difficulty to detect the camouflaged object with sensor-scanning equipment at ranges greater than 250 meters. No bonus at ranges less than 250 meters. If more than 3 nets are used in tandem, sensor-scanning equipment gains +1D to detect the nets due to interference caused by stacking.",
  "source": "WEG40122 Shadows of the Empire p.112"
 },
 {
  "name": "Comm Scanner",
  "category": "Sensors",
  "cost": "400",
  "availability": "2",
  "game_notes": "Intercepts comlink transmissions within 5km. Moderate communications roll to lock onto specific frequency.",
  "source": ""
 },
 {
  "name": "Energy Scanner",
  "category": "Sensors",
  "cost": "500",
  "availability": "2",
  "game_notes": "Detects energy sources and power signatures within 500m. +1D to search for powered devices, droids, vehicles.",
  "source": ""
 },
 {
  "name": "Force Detector",
  "category": "Sensors",
  "cost": "Not for sale",
  "availability": "4, X",
  "game_notes": "Government Issue Force Detector Unit. Three-component system: control pack + two sheet-crystal reader paddles. Operator brackets subject with paddles; unit scans and projects a wire-frame hologram with color-coded aura overlay. Blue aura = Force-sensitive (stronger corona = stronger in Force); no aura = non-sensitive; red streaks = dark side influence. Tells operator if subject is Force-sensitive and whether they have any Dark Side Points (not how many). Fewer than 10,000 produced; most lost or destroyed.",
  "source": "WEG40114 The Jedi Academy Sourcebook p.140"
 },
 {
  "name": "General Purpose Scanner",
  "category": "Sensors",
  "cost": "300",
  "availability": "1",
  "game_notes": "Multi-purpose handheld scanner. +1D to search within 100m. Detects life forms, energy sources, and metals.",
  "source": ""
 },
 {
  "name": "Lifeform Scanner",
  "category": "Sensors",
  "cost": "500",
  "availability": "2",
  "game_notes": "Detects living beings within 200m. +1D to search for hidden/concealed life forms. Cannot identify species.",
  "source": ""
 },
 {
  "name": "Macrobinoculars",
  "category": "Sensors",
  "cost": "100",
  "availability": "1",
  "game_notes": "Long-range magnifying viewers. Reduces difficulty of Perception checks at range by one level. Effective up to 500m.",
  "source": "Rulebook"
 },
 {
  "name": "Motion Sensor Pack",
  "category": "Sensors",
  "cost": "200",
  "availability": "1",
  "game_notes": "Detects movement within 100m. Alerts user to approaching objects. +1D to Perception for detecting sneaking characters.",
  "source": ""
 },
 {
  "name": "Sensor Jammer (Character)",
  "category": "Sensors",
  "cost": "1,000",
  "availability": "2, R",
  "game_notes": "Portable sensor countermeasure. Adds +2D to difficulty of sensor scans detecting the user within 100m radius.",
  "source": ""
 },
 {
  "name": "Snooper Goggles",
  "category": "Sensors",
  "cost": "300",
  "availability": "2",
  "game_notes": "Combined IR/low-light/magnification goggles. +2D to search in low-light/darkness. Models without photoreducing sensors are susceptible to sudden flashes of light (wearer can be blinded). Newer models incorporate photoreducing sensors for rapidly changing light levels.",
  "source": "WEG40042 Han Solo and the Corporate Sector Sourcebook p.121"
 },
 {
  "name": "Gungan Portable Shield Generator",
  "category": "Shields",
  "cost": "\u2014",
  "availability": "3",
  "game_notes": "Generates a large energy bubble shield for battlefield protection.",
  "source": ""
 },
 {
  "name": "Personal Energy Shield",
  "category": "Shields",
  "cost": "\u2014",
  "availability": "2",
  "game_notes": "Provides energy shield against ranged attacks. Various models with different STR ratings.",
  "source": ""
 },
 {
  "name": "Portable Shield Generator",
  "category": "Shields",
  "cost": "\u2014",
  "availability": "3",
  "game_notes": "Creates a localized energy shield protecting an area.",
  "source": ""
 },
 {
  "name": "Primitive Shield",
  "category": "Shields",
  "cost": "\u2014",
  "availability": "2",
  "game_notes": "Used as melee weapon parry. +1D to resist physical attacks from front.",
  "source": ""
 },
 {
  "name": "Riot Shield",
  "category": "Shields",
  "cost": "\u2014",
  "availability": "3",
  "game_notes": "+2D to resist physical, +1D energy from front.",
  "source": ""
 },
 {
  "name": "Hyperdrive Booster",
  "category": "Ship Equipment",
  "cost": "8,000",
  "availability": "3",
  "game_notes": "External hyperdrive ring or booster. Adds or improves hyperdrive capability by one class.",
  "source": ""
 },
 {
  "name": "Armored Flight Suit",
  "category": "Spacesuits",
  "cost": "4,000",
  "availability": "2",
  "game_notes": "+2 STR to resist damage. Limited vacuum protection. +1D+1 stamina vs cold.",
  "source": "d20 Core Rulebook (page 138)"
 },
 {
  "name": "Bulk Exploratory Armor",
  "category": "Spacesuits",
  "cost": "\u2014",
  "availability": "3",
  "game_notes": "+1D to resist, -1D DEX. Sealed environment. Rebreather, O2 cylinders. Magnetic boots. Tool/utility belt. Helmet comlink + flashlight.",
  "source": "Galaxy Guide 8 (page 45)"
 },
 {
  "name": "EVA Vacuum Pod",
  "category": "Spacesuits",
  "cost": "15,000",
  "availability": "\u2014",
  "game_notes": "Droid-monitored space pod. 1D maneuverability, Move 55 (160 km/h), Body 4D. 2hr life support. Full comlink. Forward arms with attachments.",
  "source": "Galladinium's Fantastic Technology (page 54)"
 },
 {
  "name": "Flight Suit",
  "category": "Spacesuits",
  "cost": "250",
  "availability": "1",
  "game_notes": "One-piece coverall + helmet. Life support, hostile environment protection, protects against high-velocity flying effects.",
  "source": "d20 Core Rulebook (page 142)"
 },
 {
  "name": "Heavy Radiation Powersuit",
  "category": "Powersuits",
  "cost": "3,000",
  "availability": "2",
  "game_notes": "+2D physical and energy, -1D DEX. Move 3. Detachable boosters (10 bursts, Space 1, 1D maneuverability). +1D sensors. Comlink, 12hr O2, 6hr power, fusion cutter (5D), magnetic boots.",
  "source": "Gundark's Fantastic Technology (page 55)"
 },
 {
  "name": "LifeLine Space Suit",
  "category": "Spacesuits",
  "cost": "2,200",
  "availability": "2, F",
  "game_notes": "Heating unit, waste recycling, onboard food. 10 standard days of supplies. -2D to all DEX checks.",
  "source": "Rulebook (pages 227-228)"
 },
 {
  "name": "Nova-Tech Powersuit",
  "category": "Powersuits",
  "cost": "1,000",
  "availability": "2",
  "game_notes": "+2D energy, +3D physical. 1D maneuverability, Space 1. Blaster cannon (FC 1D, 5D damage).",
  "source": "Gundark's Fantastic Technology (page 59)"
 },
 {
  "name": "Padded Flight Suit",
  "category": "Spacesuits",
  "cost": "800",
  "availability": "1",
  "game_notes": "+1 STR physical. Helmet/gloves seal for 10hr life support. +2 stamina vs cold.",
  "source": "d20 Core Rulebook (page 139)"
 },
 {
  "name": "Space Suit",
  "category": "Spacesuits",
  "cost": "\u2014",
  "availability": "\u2014",
  "game_notes": "+1D to resist, -1D DEX. Voice-activated comlink. 6hr O2. Heavy gloves prevent normal blaster use (Easy repair to modify, -1D blaster after).",
  "source": "Abduction of Crying Dawn Singer (page 28)"
 },
 {
  "name": "Vacuum Suit",
  "category": "Spacesuits",
  "cost": "1,100",
  "availability": "1",
  "game_notes": "10hr atmosphere. Moderate stamina/STR check every hour in space or suffer a wound from cold.",
  "source": "Rulebook (pages 227-228)"
 },
 {
  "name": "Vagabond Suit",
  "category": "Powersuits",
  "cost": "2,500",
  "availability": "3",
  "game_notes": "Deep space powersuit. +2D sensors/comms (independent) or +1D (linked to ship). +2D vs physical. Booster jets: Space 1, 1D maneuverability. Sensor array included.",
  "source": "Gundark's Fantastic Technology (page 62)"
 },
 {
  "name": "Wrokix Works Armored Spacesuit",
  "category": "Spacesuits",
  "cost": "8,500",
  "availability": "2",
  "game_notes": "+1D energy, +2D physical, -1D DEX. 5hr life support. Internal gyro stabilizer: +1D DEX in zero gravity.",
  "source": "Gundark's Fantastic Technology (page 63)"
 },
 {
  "name": "Aquata Breather",
  "category": "Survival Gear",
  "cost": "350",
  "availability": "1",
  "game_notes": "Compact underwater rebreather. Provides 2 hours of breathable air underwater.",
  "source": ""
 },
 {
  "name": "Breath Mask",
  "category": "Survival Gear",
  "cost": "50",
  "availability": "1",
  "game_notes": "Filters toxins from breathable atmospheres. Does not provide oxygen in vacuum. Filter lasts 1 hour, replacements 10cr.",
  "source": ""
 },
 {
  "name": "Glow Rod",
  "category": "Survival Gear",
  "cost": "10",
  "availability": "1",
  "game_notes": "Portable light source. Illuminates 25m radius. 100 hours of continuous use.",
  "source": ""
 },
 {
  "name": "Jedi Utility Belt",
  "category": "Survival Gear",
  "cost": "500",
  "availability": "2",
  "game_notes": "Contains: glow rod, comlink, aquata breather, food capsules (1 week), grappling hook (20m), medical supplies.",
  "source": ""
 },
 {
  "name": "Luma Flare",
  "category": "Survival Gear",
  "cost": "5",
  "availability": "1",
  "game_notes": "Emergency flare visible for 1.5km. Burns for 30 minutes.",
  "source": ""
 },
 {
  "name": "Micro Fusion Reactor",
  "category": "Survival Gear",
  "cost": "1,500",
  "availability": "2",
  "game_notes": "Portable power source. Powers equipment for months. Recharges power packs.",
  "source": ""
 },
 {
  "name": "Pressure Tent",
  "category": "Survival Gear",
  "cost": "500",
  "availability": "2",
  "game_notes": "Pressurized shelter for hostile environments. Maintains breathable atmosphere for 2 beings for 24 hours.",
  "source": ""
 },
 {
  "name": "Ration Concentrates",
  "category": "Survival Gear",
  "cost": "5/week",
  "availability": "1",
  "game_notes": "One week of concentrated food. Provides minimum nutrition. Not exactly gourmet.",
  "source": ""
 },
 {
  "name": "Shelter",
  "category": "Survival Gear",
  "cost": "100",
  "availability": "1",
  "game_notes": "Standard portable shelter for 2 beings. Provides protection from weather. Sets up in 10 minutes.",
  "source": ""
 },
 {
  "name": "Heavy Fusion Cutter",
  "category": "Tools",
  "cost": "500",
  "availability": "2",
  "game_notes": "Industrial-grade plasma cutter. 7D damage to materials. Cuts through armored plating and starship hulls.",
  "source": ""
 },
 {
  "name": "Tech Scanner",
  "category": "Tools",
  "cost": "200",
  "availability": "1",
  "game_notes": "Diagnostic scanner for mechanical systems. +1D to repair skill diagnostic rolls.",
  "source": ""
 },
 {
  "name": "Opirus Tri-Laser Engraver (KL-543)",
  "category": "Tools",
  "cost": "4,000; 8,000+ (black market)",
  "availability": "3, F or R",
  "game_notes": "Counterfeiting tool. Uses forgery skill. Micro-miniature array of laser beams replicates finely textured incisions on metal and plastic plates used for planetary currency production. Adjustable angle, pitch, and beam width for each individual laser produces patterns virtually indistinguishable from originals. Long-term close-up use without proper protective eyewear can lead to temporary visual distress and permanent injury.",
  "source": "WEG40075 Galaxy Guide 11: Criminal Organizations p.86"
 },
 {
  "name": "Holorecording Macrobinoculars (Neuro-Saav TT4)",
  "category": "Sensors",
  "cost": "2,000",
  "availability": "2",
  "game_notes": "+2D to search or Perception rolls at ranges over 100 meters. Can record up to 3 standard hours of visuals on a standard data card.",
  "source": "WEG40131 The Thrawn Trilogy Sourcebook p.186"
 },
 {
  "name": "Industrial Automaton Decon III Droid",
  "category": "Droids",
  "cost": "",
  "availability": "",
  "game_notes": "Decontamination droid. Height: 1.3m. Move: 6 (treads). DEX 2D, KNO 1D (decontamination processes 3D), MEC 1D+1, PER 2D (search 3D, search: contaminants 5D), STR 2D (lifting 2D+1), TEC 2D. Internal four-stage decontamination processor (uses decontamination processes skill, 3 kg/hour, difficulty varies by contamination level). Visual, infrared, and analyzation sensors. Heavy scooper (+1D lifting). Retractable arm. Chemical spray appendages for radiation-absorbing foam.",
  "source": "WEG40131 The Thrawn Trilogy Sourcebook p.195"
 },
 {
  "name": "MerenData Espionage Droid (Protocol Shell)",
  "category": "Droids",
  "cost": "",
  "availability": "X",
  "game_notes": "Espionage droid in protocol droid shell. Height: 1.7m. Move: 8. DEX 2D (dodge 2D+2, pick pocket 3D), KNO 3D (culture 4D, languages 8D, value 6D), MEC 2D+1 (communications 5D+1, sensors 5D+1), PER 4D (con 6D, hide 6D+1, investigation 6D, search 6D, sneak 6D+1), STR 2D, TEC 3D (computer programming 5D, security 6D). Humanoid body. Information recording and coded retrieval/broadcast system. Vocabulator. Broad-band antenna receiver. AA-1 VerboBrain. TranLang III protocol module. Espionage hard-wired module (survives standard memory wipes; must be physically pulled to remove).",
  "source": "WEG40131 The Thrawn Trilogy Sourcebook p.196"
 },
 {
  "name": "Arakyd G-2RD Guard Droid",
  "category": "Droids",
  "cost": "",
  "availability": "",
  "game_notes": "Security guard droid. Height: 1.2m. Move: 10 (repulsorlift). DEX 3D (blaster 5D, dodge 4D, melee combat 4D+1, running 4D), KNO 2D (bureaucracy 3D, intimidation 4D, intimidation: interrogation 5D, languages 3D, law enforcement 3D+2), MEC 2D (repulsorlift operation 4D, sensors 5D), PER 4D (command 5D, investigation 5D, search 7D), STR 4D+1, TEC 2D (first aid 3D, security 5D). Visual/sound sensors. Vocabulator. Broad-band antenna. Stun appendage (6D stun). Blaster appendage (5D, ranges 3-7/25/50). Grasping claw (+1D lifting). Programming allows deadly force if necessary. Cost: 6,000 credits. Availability: 2, R. Fourth Degree Droid. Personality: Advanced. Often demanding or abusive in behavior, with a strong operational record. Used by security departments, law enforcement, and prison systems. Smuggler tip: a blaster power cell wired to a restraining bolt has been known to short out the safeguards on a G-2RD's programming (with high risk of injury to the slicer).",
  "source": "WEG40131 The Thrawn Trilogy Sourcebook p.196 | WEG41014 Star Wars Adventure Journal #14 p.255 (Cynabar's Droid Datalog)"
 },
 {
  "name": "Rebaxan Colmuni MSE-6 General Purpose Droid",
  "category": "Droids",
  "cost": "",
  "availability": "",
  "game_notes": "Mouse droid. Height: 0.3m. Move: 5 (treads). DEX 2D, KNO 1D, MEC 1D, PER 1D, STR 1D, TEC 1D. Electro-photoreceptor. Auditory sensor. Holocam. Retractable heavy manipulator (+2D lifting). Retractable fine manipulator (+1D lifting). One interchangeable skill matrix programmed with one skill at a time (bureaucracy 3D, sensors 3D, hide 3D, search 4D, armor repair 3D, blaster repair 3D, capital ship repair 4D, capital ship weapon repair 3D, computer programming/repair 3D, droid programming 3D, droid repair 3D, security 3D, or starfighter repair 3D).",
  "source": "WEG40131 The Thrawn Trilogy Sourcebook p.197"
 },
 {
  "name": "Imperial IT-0 Interrogator Droid",
  "category": "Droids",
  "cost": "",
  "availability": "X",
  "game_notes": "Interrogation droid. Height: 1m. Move: 3 (repulsorlift). DEX 1D (dodge 3D, melee combat 3D, melee combat: interrogation tools 4D+1), KNO 3D (alien species 4D, humanoid biology 5D, intimidation 6D, intimidation: interrogation 7D), MEC 2D (sensors 3D), PER 4D (investigation 5D, search 5D), STR 3D, TEC 2D (first aid 5D, medicine 5D, security 4D). Visual/sound sensors. Vocabulator. Laser scalpel (2D damage). Hypodermic injectors (4D stun). Power shears (5D damage). Grasping claw (+1D lifting). Monitors vital signs to apply maximum pain with minimal damage.",
  "source": "WEG40131 The Thrawn Trilogy Sourcebook p.197 | WEG41014 Star Wars Adventure Journal #14 p.258 (Cynabar's Droid Datalog)"
 },
 {
  "name": "Industrial Automaton MD-5 Medical Droid",
  "category": "Droids",
  "cost": "",
  "availability": "",
  "game_notes": "General practitioner medical droid. Height: 1.6m. Move: 7 (within medical bay). DEX 2D, KNO 4D (alien species 5D, humanoid biology 5D), MEC 2D+2 (sensors 3D+2), PER 3D (bargain 4D, investigation 4D+1, search 4D+1), STR 2D+1, TEC 3D (first aid 6D, medicine 8D). Computer interface tether. Medical diagnostic computer. Analytical computer. Surgical attachments. Hypodermic injectors (4D stun). Medicine dispensers. Must treat all injuries/illnesses encountered — code cannot be altered without destroying behavioral matrix.",
  "source": "WEG40131 The Thrawn Trilogy Sourcebook p.198"
 },
 {
  "name": "Industrial Automaton MN-2E Maintenance Droid",
  "category": "Droids",
  "cost": "800",
  "availability": "",
  "game_notes": "Janitorial/maintenance droid. Height: 1m. Move: 7 (repulsorlift, max altitude 75m). DEX 1D, KNO 1D, MEC 2D, PER 1D, STR 2D, TEC 2D. Wastestream Systems refuse recycling unit. Vibro-shears (STR+2). Extendable arm with buffer and polisher attachments. Extendable cleanser applicator. Refuse collection scanning computer. Communicates via electronic squawks and clucks. Can be equipped with program modules for specialized duties (plant care, sensitive sanitation protocols). Cost: 800 credits. Availability: 1. Second Degree Droid. Personality: None. Easy Programming Story Factor: any character attempting to program gardening, light equipment maintenance, or sensitive sanitation duties does so at one difficulty level below the normal roll. Originally developed for the facilities director of the Imperial Palace on Coruscant for janitorial work in the dark recesses of the Palace's vaulted ceilings.",
  "source": "WEG40131 The Thrawn Trilogy Sourcebook p.198 | WEG41014 Star Wars Adventure Journal #14 p.250 (Cynabar's Droid Datalog)"
 },
 {
  "name": "Arakyd Viper Probe Droid",
  "category": "Droids",
  "cost": "",
  "availability": "X",
  "game_notes": "Imperial probe droid (probot). Height: 1.5m. Move: 12 (repulsorlift). DEX 3D (blaster 5D, dodge 5D), KNO 2D+2 (intimidation 7D+2, planetary systems 4D+2), MEC 3D (astrogation 5D, communications 6D, sensors 6D, space transports: hyperdrive pod 5D), PER 3D (con 4D, hide 5D, investigation 6D, search 6D, sneak 5D), STR 4D, TEC 2D+1. Multi-purpose appendages. Planetary sensor array — Passive: 10m/0D, Scan: 100m/1D, Search: 500m/2D, Focus: 10m/3D. Recording devices. Broad-band broadcast antenna. Blaster (4D+2, ranges 3-10/30/120). Can be launched in Arakyd Predator I hyperdrive pod (starfighter scale, 4m, x2 hyperdrive, 3 jumps, Hull 3D, Shields 1D).",
  "source": "WEG40131 The Thrawn Trilogy Sourcebook p.199"
 },
 {
  "name": "Industrial Automaton SE4 Servant Droid",
  "category": "Droids",
  "cost": "2,600 (1,300 used)",
  "availability": "",
  "game_notes": "Domestic servant droid. Height: 1.6m. Move: 8. DEX 2D, KNO 2D (culinary arts 4D, culture 3D, home economics 4D, languages 3D), MEC 2D (communications 3D, repulsorlift operation 3D), PER 2D (bargain 3D), STR 2D (lifting 3D), TEC 2D (first aid 3D). Humanoid body. Vocabulator. Photoreceptors. Auditory sensors. Programmable personality modules. Memory stores full of recipes, dining etiquette, and domestic service information.",
  "source": "WEG40131 The Thrawn Trilogy Sourcebook p.199"
 },
 {
  "name": "Industrial Automaton Hound-W2 SPD Droid",
  "category": "Droids",
  "cost": "3,500",
  "availability": "",
  "game_notes": "Scanning Patrol Detail security droid. Height: 0.4m. Move: 7 (treads). DEX 2D, KNO 1D, MEC 1D, PER 5D (search 6D, search: transmitting devices 8D+2), STR 1D, TEC 1D. Fabritech communications/sensor array. Four retractable extensor arms (extend up to 15m). Retractable fine work grasper arm. Extendable video sensor. Four sensor modules (thermal imaging +1D search, audio receptors, laser scan, pulse scan). Probability projection computer for detailed search procedures. Communicates in astromech-style chirps and beeps. Cost: 3,500 credits. Availability: 2, R. Fourth Degree Droid. Personality: Elementary. The bane of fringers — extremely good at locating covert transmissions and hidden weapons. Communications use the same high-pitched beeps and chirps as astromechs, requiring a scomp-linked translation system to decipher. Slicer note: since these droids must scomp-link into a comm system to 'talk,' it should be relatively easy to plant a false 'all clear' into them.",
  "source": "WEG40131 The Thrawn Trilogy Sourcebook p.200 | WEG41014 Star Wars Adventure Journal #14 p.260 (Cynabar's Droid Datalog)"
 },
 {
  "name": "Melihat UniScan Sensor System",
  "category": "Planetary Sensors",
  "cost": "7,800 (3,600 used)",
  "availability": "2, R",
  "game_notes": "Focused uni-direction sensor dish. Crew: 5 (skeleton 3/+10). Skill: Sensors: uni-direction sensor dish. Maximum range 10 km. Scans a small focused area: 100m wide x 100m long x 20m high. Adds +2D to sensors skill to identify targets only. Provides no bonus in rough, hilly, mountainous, or cluttered urban terrain where targets can hide behind obstacles.",
  "source": "WEG40091 Rebel Alliance Sourcebook p.105"
 },
 {
  "name": "Siep-Irol GlobeScan",
  "category": "Planetary Sensors",
  "cost": "12,500 (6,250 used)",
  "availability": "2, R",
  "game_notes": "Omni-directional sensor globe. Crew: 10 (skeleton 4/-10). Skill: Sensors: omni-directional sensor globe. Scans in a 20 km radius in all directions (including atmosphere). Adds +1D to sensors skill to detect targets only. Provides no bonus in rough, hilly, mountainous, or cluttered urban terrain where targets can hide behind obstacles.",
  "source": "WEG40091 Rebel Alliance Sourcebook p.105"
 },
 {
  "name": "Tana Ire GroundSweeper-3",
  "category": "Planetary Sensors",
  "cost": "18,000 (12,000 used)",
  "availability": "2, R",
  "game_notes": "Omniprobe sensor array. Crew: 5 (skeleton 2/-15). Skill: Sensors: omniprobe sensor array. Scans in a 5 km radius up to 2m height. Adds +1D to sensors skill to detect targets only. Rough terrain provides no protection (unlike other sensor types).",
  "source": "WEG40091 Rebel Alliance Sourcebook p.105"
 },
 {
  "name": "Industrial Automaton V1 Pilot Droid",
  "category": "Droids",
  "cost": "11,800 (9,600 used)",
  "availability": "",
  "game_notes": "Autopilot droid. Height: 1m. Move: 5 (three wheeled legs, one retractable). DEX 1D, KNO 1D, MEC 1D (astrogation 3D, space transports 5D), PER 1D, STR 2D, TEC 1D (computer programming/repair 3D, space transports repair 3D). One retractable arm. Visual sensor (human range). Starship interface jack. Video display screen. Memory for three pre-programmed hyperspace jumps.",
  "source": "WEG40091 Rebel Alliance Sourcebook p.117"
 },
 {
  "name": "AccuTronics B1 Worker Droid",
  "category": "Droids",
  "cost": "9,800 (6,400 used)",
  "availability": "",
  "game_notes": "Heavy labor droid. Height: 1.5m. Move: 6. DEX 1D, KNO 1D, MEC 1D, PER 1D, STR 8D (lifting 10D, stamina 4D), TEC 1D. Suction/magnetic-tipped digits. Retractable third leg (+1D to lifting when deployed). Visual spectrum scanners.",
  "source": "WEG40091 Rebel Alliance Sourcebook p.117"
 },
 {
  "name": "Cybot Galactica AC1 \"Spy-Eye\" Surveillance Droid",
  "category": "Droids",
  "cost": "5,300 (2,600 used)",
  "availability": "",
  "game_notes": "Remote-controlled surveillance droid. Height: 0.7m. Move: 10 (repulsorlift, max height 3m). DEX 2D (dodge 4D), KNO 1D, MEC 1D, PER 3D (search 6D, sneak 4D), STR 1D+1, TEC 1D. Visual range holocam (500m range) with simultaneous transmitter. Holo receiver unit. Joystick controller (max range 500m).",
  "source": "WEG40091 Rebel Alliance Sourcebook p.117"
 },
 {
  "name": "Industrial Automaton R2 Astromech Droid",
  "category": "Droids",
  "cost": "4,525",
  "availability": "",
  "game_notes": "Astromech droid. Height: 1m. Move: 5 (three wheeled legs, one retractable). DEX 1D, KNO 1D, MEC 2D (astrogation 5D, space transports 3D, starfighter piloting 3D), PER 1D, STR 1D, TEC 2D (computer programming/repair 4D, starfighter repair 5D). May attempt starship repairs while in flight if acting as co-pilot. Retractable heavy grasper arm (lifting 2D). Retractable fine work grasper arm. Extendable 0.3m video sensor (360° rotation). Electric arc welder (1D-5D, 0.3m range). Circular saw (4D, 0.3m range). Video display screen. Holographic projector/recorder. Fire extinguisher. Small internal cargo area (20cm x 8cm).",
  "source": "WEG40093 Star Wars Sourcebook p.52"
 },
 {
  "name": "Cybot Galactica 3PO Protocol Droid",
  "category": "Droids",
  "cost": "3,000",
  "availability": "",
  "game_notes": "Human-cyborg relations droid. Height: 1.7m. Move: 8. DEX 1D, KNO 3D (cultures 6D, languages 10D), MEC 1D, PER 1D, STR 1D, TEC 1D. Humanoid body. Two visual and two audial sensors (human range). Vocabulator speech/sound system (can reproduce virtually any sound heard or programmed). Broad-band antenna receiver. AA-1 VerboBrain. TranLang III Communication module with over seven million languages.",
  "source": "WEG40093 Star Wars Sourcebook p.53"
 },
 {
  "name": "Industrial Automaton 2-1B Surgical Droid",
  "category": "Droids",
  "cost": "4,300",
  "availability": "",
  "game_notes": "Too-Onebee series surgical droid. Height: 1.5m. Move: 4. DEX 1D, KNO 2D (alien species 5D), MEC 2D ((A) bacta tank operation 5D), PER 3D ((A) injury/ailment diagnostics 6D), STR 1D, TEC 3D (first aid 6D, (A) medicine 9D). Computer interface tether (5m range, +2D to all medical skills). Medical diagnostic computer. Analytical computer. Surgical attachments. Hypodermic injectors (4D stun). Medicine dispensers. Many have performed flawlessly for decades. Can perform cyborg adaptations, replacing damaged body parts by integrating automated machinery into the patient's CNS. Sought after by military units; many independents serve voluntarily with the Rebel Alliance.\n\nEmdee (MD) Series Variants (replaced the antiquated FX series): MD-0 Diagnostic, MD-1 Lab Tech, MD-2 Anesthesiologist, MD-3 Pharmaceutical, MD-4 Microsurgeon, MD-5 General Practitioner.",
  "source": "WEG40093 Star Wars Sourcebook p.54"
 },
 {
  "name": "Eliminator 434 Assassin Droid",
  "category": "Droids",
  "cost": "Not for sale",
  "availability": "X",
  "game_notes": "Assassin droid (manufacturer unknown). Height: 1.8m. Move: 11. DEX 2D (blaster 5D, missile weapons 5D), KNO 1D, MEC 1D, PER 2D (search 5D), STR 5D, TEC 1D. Humanoid body. Broad-band antenna receiver (monitors comlink channels). Blaster cannon (0-50/150/300, 6D). Concussion missile launcher (0-50/100/200, ammo: 20, 7D). Assassin droids are illegal by Imperial edict — penalty of death for operating, harboring, or repairing them. Rogue assassin droids remain at large galaxy-wide, some hunting alternate targets or freelancing as bounty hunters. The ISD reportedly uses assassin droids for one-third of all secret high-level arrests and eliminations.",
  "source": "WEG40093 Star Wars Sourcebook p.57"
 },
 {
  "name": "Industrial Automaton 2-ZH Surgical Droid",
  "category": "Droids",
  "cost": "3,000 (used)",
  "availability": "",
  "game_notes": "Imperial prison medical droid. Height: 1.5m. Move: 4. DEX 1D, KNO 2D (alien species 3D+1), MEC 2D, PER 3D ((A) injury/ailment diagnosis 4D+2), STR 1D, TEC 3D (first aid 6D, (A) medicine 7D). Computer interface tether (5m range, +2D to all medical skills). Medical diagnostic computer. Analytical computer. Surgical attachments. Hypodermic injectors (4D stun). Medicine dispensers. Not programmed for patient comfort — prioritizes physical health only, often resulting in needlessly painful recoveries. Painted unappetizing green with black rubberized optical sheath.",
  "source": "WEG40114 The Jedi Academy Sourcebook p.141"
 },
 {
  "name": "XL-Lioness TDL Nanny Droid",
  "category": "Droids",
  "cost": "9,000 (new)",
  "availability": "",
  "game_notes": "Height: 1.9m. Move: 10. DEX 4D (blaster: arm blaster 7D, dodge 5D+1), KNO 3D (cultures 6D, languages 5D, scholar: child care 9D), MEC 1D, PER 2D (hide 3D+1, search 3D, sneak 4D), STR 2D, TEC 1D (first aid 5D, security 4D). Humanoid body (four arms, two legs). Armor plating (+2D vs physical and energy). Two heavy blasters concealed in lower arms (4D+2, 0-3/10/20). Two visual and two audial sensors (human range). Vocabulator speech/sound system. AA-1 VerboBrain. TranLang III Communications module with over seven million languages. Synthskin special ability: equipped with synthetic warmed flesh that youngsters find less disturbing than the metal skin common to most droids. Cost: 9,000 credits new. Availability: 2. Third Degree Droid. Personality: Complex. Primary programming module contains a wealth of information on the child-rearing habits of thousands of species and 'hug circuitry' for extreme affection toward charges. Favored by executives and politicians for child care. SECURITY WARNING: TDL processors have notoriously weak security — children with access to a computer probe have been known to spike them and insert routines forcing the droid to let them stay up late. Corporate execs and Imperial higher-ups are rumored to reprogram family TDLs into extremely effective bodyguards using the heavy blasters built into the lower arms.",
  "source": "WEG40114 The Jedi Academy Sourcebook pp.141-143 | WEG41014 Star Wars Adventure Journal #14 p.253 (Cynabar's Droid Datalog)"
 },
 {
  "name": "FIDO (Foreign Intruder Defense Organism)",
  "category": "Droids",
  "cost": "Not for sale",
  "availability": "",
  "game_notes": "Semi-organic defense droid patterned after the Calamarian krakana. Central pod buried in target area; 26 extendible attack tentacles up to 100m long. Stationary (tentacles Move 15). DEX 6D (brawling parry 6D+2, dodge 7D), KNO 1D, MEC 1D, PER 5D (search 6D), STR 12D (brawling 13D, lifting 15D), TEC 1D (security 6D). All stats apply to tentacles and sensors — central pod is stationary. Tentacles: STR+2D damage. Armored central pod: +4D vs physical and energy attacks. Long-range sensor: +1D to search between 200m–5km. Movement sensor: +2D to search for moving objects up to 100m. Can be activated remotely or programmed for time/event triggers. Can distinguish cleared personnel from intruders.",
  "source": "WEG40114 The Jedi Academy Sourcebook p.143"
 },
 {
  "name": "MSE-6 \"Mouse\" Droid",
  "category": "Droids",
  "cost": "2,000",
  "availability": "3, R",
  "game_notes": "Height: 0.3m. Move: 5 (treads). DEX 2D, KNO 1D, MEC 1D, PER 1D, STR 1D, TEC 1D. Equipped: electro-photoreceptor, auditory sensors, holocam, treads, retractable heavy manipulator (+2D lifting), retractable fine manipulator (+1D lifting), one skill matrix pre-programmed with a single skill at 3D (owner's choice: bureaucracy, sensors, hide, search, armor repair, blaster repair, capital ship repair, capital ship weapon repair, computer programming/repair, droid programming, droid repair, security, or starfighter repair). Small dedicated maintenance droid used for single-system maintenance, message delivery, cleaning, and scouting damaged areas. Almost exclusively Imperial use — the Empire bought nearly the entire production run at a steep discount for use on Star Destroyers and installations.",
  "source": "REUP Star Wars RPG: Revised Expanded Updated p.381"
 },
 {
  "name": "Industrial Automaton ASP-7 Labor Droid",
  "category": "Droids",
  "cost": "1,000 (new); 300–3,000 (used/modified)",
  "availability": "2, F",
  "game_notes": "Light-duty labor droid. Height: 1.6m. Move: 6. DEX 1D, KNO 1D, MEC 1D, PER 1D (search 2D), STR 1D (lifting 2D), TEC 1D. Equipped: humanoid body (two arms, two legs, head, torso), one visual ocular (human-range vision), two audial receivers. Story Factors — Basic Programming: programmed only for menial tasks; out of place in specialized settings (starship engineering bays, medical suites, battlefields); can be upgraded with improved programming and attachments at additional cost. Restricted Vocabulary: basic unit can only reply 'affirmative' or 'negative' regardless of question or situation encountered. Many owners modify ASPs heavily rather than replace them.",
  "source": "WEG40122 Shadows of the Empire p.102; WEG40089 The Movie Trilogy Sourcebook SE p.163; REUP Star Wars RPG: Revised Expanded Updated p.381"
 },
 {
  "name": "Modified ASP-19 Lightsaber Training Droid (Mark IX)",
  "category": "Droids",
  "cost": "Not for sale",
  "availability": "Unique",
  "game_notes": "Modified Industrial Automaton ASP-19, Lightsaber Training Configuration, Mark IX. Maintained by Darth Vader at his castle in Imperial Center for personal combat training. Height: 2.2m. Move: 12. DEX 3D (lightsaber 8D+2), KNO 1D, MEC 1D, PER 3D, STR 4D (brawling 5D), TEC 1D. Equipped: reinforced alloy humanoid body (two arms, two legs, head, torso), one high-speed visual sensor, two audial receivers, AA-1 Verbo-brain (packed with combat techniques; rumored to include lightsaber training data from a Jedi holocron of Master Vo'ren Faalo's personal techniques), armor plating and reinforced alloys (+2D STR vs physical and energy damage). Equipment: Lightsaber (5D) — a single spare lightsaber shared among the training units. Story Factors — Attack Restrictions: programming restricts attacks only to opponents wielding lightsabers; all others are ignored.",
  "source": "WEG40122 Shadows of the Empire p.104"
 },
 {
  "name": "Veril Line Systems IN-4 Information Droid",
  "category": "Droids",
  "cost": "2,500",
  "availability": "1",
  "game_notes": "Public information and directions droid. Height: 1.3m. Move: 3 (treadwell locomotion). DEX 1D, KNO 4D (languages 5D), MEC 1D, PER 1D, STR 1D, TEC 1D (computer programming/repair 4D). Equipped: box frame body, treadwell locomotion unit, video sensor, vocabulator speech/sound system, extendible I/O computer jack. Programmed with up to two dozen languages (customizable at purchase). I/O jack access is hardwired to lowest data levels only — cannot be used to slice into protected data even by a skilled slicer. Rebel operatives have modified these droids with extra c-boards to add voice and visual ID recognition, converting them into inconspicuous dead-drop points for messages and datacards (concealed datacard slot behind a service panel).",
  "source": "WEG40122 Shadows of the Empire p.105"
 },
 {
  "name": "Arakyd \"Stiletto\" Imperial Security Droid",
  "category": "Droids",
  "cost": "7,500 (black market only)",
  "availability": "X",
  "game_notes": "Security/detention droid. Height: 1m. Move: 5 (low-power repulsor field — extremely quiet but slower than a typical droid; most humans can outrun it). DEX 2D (blaster: stun bolt 5D+2, dodge 4D), KNO 1D, MEC 1D, PER 2D (search 5D), STR 2D, TEC 1D. Equipped: cylindrical body; 2 light blaster cannons (range 0-10/20/40, 4D stun); reflective plate armor (+2D to Strength to resist damage); NeuroSaav sensor suite (+1D to search); NeuroSaav biorecognition package (+2D to search if bio-scan readings of target are in database; max range 40 meters — data typically extracted from prisoner physicals). Outdated model, out of production for ~20 years. Used at the Imperial garrison base south of Salis D'aar, Bakura. Not widely known on Bakura due to locals' profound dislike of droids.",
  "source": "WEG40085 The Truce at Bakura p.135"
 },
 {
  "name": "Industrial Automaton \"Elegance\" Message Drone",
  "category": "Droids",
  "cost": "250,000 (new; no longer manufactured or readily available), 50,000 (to replenish fuel)",
  "availability": "4",
  "game_notes": "Automated message drone. Scale: Starfighter. Length: 9m. Crew: None (droid brain; astrogation 5D). Cargo: 15 kg. Consumables: 3 weeks. Hyperdrive x1/3 — limited to 1 jump before refueling; hyperdrive destroyed after 5 jumps total. Nav computer limited to 1 jump. Space 5. Hull 1D. Sensors — Passive 100/2D, Scan 200/3D, Search 300/4D, Focus 10/5D. Equipped: Self-destruct mechanism (600 meter blast radius, space range <1, 9D damage); anti-tampering safeguards (if proper Imperial recognition codes not received within 4–10 minutes of sensor contact — timing customizable — self-destruct activates with 1-minute completion cycle). Launched like a torpedo from starships or ground launchers; enters hyperspace to target coordinates, then homes in on target world or activates short-range beacon. No longer in fashion due to HoloNet's lower cost; retained by remote governors for emergencies. Governor Nereus used one to deliver his Ssi-ruuvi distress call to Endor.",
  "source": "WEG40085 The Truce at Bakura p.135"
 },
 {
  "name": "Ssi-ruuvi Security Droid",
  "category": "Droids",
  "cost": "Not available outside Ssi-ruuvi space",
  "availability": "X",
  "game_notes": "Ssi-ruuvi security and prisoner-control droid. Height: 0.8m. Move: 8. DEX 3D (blaster: stun bolt 5D, dodge 5D+2), KNO 1D, MEC 1D, PER 1D+1 (search 6D), STR 2D, TEC 1D. Equipped: sensor suite (+1D to all search rolls); stun bolt projector (6D stun, range 0-3/10/15); armored chassis (+2D physical, +1D energy); three wheeled legs (one retractable). Spherical body, smaller than an R2 unit; metallic green with hexagonal power conduits clustered near the stun projector. Originally designed to keep P'w'ecks in line; also used to guard human entechment prisoners. Powered by enteched life energy — Force users can sense or communicate with the trapped life essence, and can fool or pacify the droid long enough to deactivate it. Vulnerable to stun bolts reflected back by a lightsaber, which cause the unit to short-circuit and shut down.",
  "source": "WEG40085 The Truce at Bakura p.136"
 },
 {
  "name": "Dodonna's Battle Analysis Computer (BAC)",
  "category": "Computers",
  "cost": "Not available for sale",
  "availability": "Unique",
  "game_notes": "Custom prototype built from processing cores of several droids; exact specs classified. Skill: Tactics: fleets 5D, tactics: starfighters 5D. Displays course, distance, shield strength, firepower, damage, speed, and condition for all combatants in the battle area. A battlefield commander may defer to the BAC's recommendations (use BAC's skill for tactics rolls) or use the Combined Actions rules. Can be patched into a standard computer monitor, hologram projector, or R2 unit holoprojector for a 3D overview. Designed by General Jan Dodonna; prototype first tested by Commander Skywalker at Bakura. Intended for installation aboard Alliance battle cruisers once software is refined — battlefield testing revealed flaws causing confusing or contradictory responses under rapidly changing conditions.",
  "source": "WEG40085 The Truce at Bakura p.137"
 },
 {
  "name": "Alliance MasterNav Software Module Gamma",
  "category": "Computers",
  "cost": "Not available for sale",
  "availability": "4, X",
  "game_notes": "Specialized navigational database. Skill: Astrogation. Can be patched into a starship's navigation systems with an Easy astrogation roll, granting +1D to astrogation rolls for one month. If data is older than 1 standard month, imposes -1D penalty to astrogation rolls instead. A roll of 1 on the Wild Die while using MasterNav indicates a catastrophic navigational error (roll on the Astrogation Mishap Table, SW2E p.111). Required for Alliance pinpoint military hyperspace jumps close to planetary gravity wells. All pilots required by Alliance regulation to perform sensor sweeps and download updated data; distributed to fleet as update packets.",
  "source": "WEG40085 The Truce at Bakura p.137"
 },
 {
  "name": "Bakuran Disruption Bubble Generator",
  "category": "Security",
  "cost": "150,000 (Bakuran black market), 2,500–5,000 (elsewhere)",
  "availability": "4, F, R or X",
  "game_notes": "Anti-surveillance device. ~1.5 kg; fits in a pocket. Blocks all sound from a 2-meter diameter sphere for up to 2 hours per micro-power cell. Sensor stealth 4D — if a sensor operator actively searches the area, make an opposed roll; if the operator wins, they detect that an anti-surveillance device is in operation (but not necessarily its location). Bubble is difficult to detect passively; can be masked by external noise sources. Bakuran originals are extremely old and fragile: Strength 1D to resist damage if dropped, shot, or roughly handled — even light damage destroys the unit permanently. Originally developed by Bakuran politicians to protect against eavesdropping during political infighting; hidden successfully from Governor Nereus. Could be scratch-built from off-the-shelf components but none on Bakura dare openly manufacture them.",
  "source": "WEG40085 The Truce at Bakura p.138"
 },
 {
  "name": "BioTech RFX/K Medisensor",
  "category": "Medical",
  "cost": "5,000",
  "availability": "2",
  "game_notes": "Portable medical diagnostic relay. Skill: First aid. Scans targets up to 3 meters away; comlinks data to a full medical computer for remote diagnosis. Grants +2D to first aid, medicine, and related skill checks (requires access to its paired medical computer; useless without it). Memory holds up to 5 scans plus basic software utilities; stores data for up to 3 species. Must be calibrated before use for each species: Easy to Heroic first aid roll depending on the medic's knowledge of the species. Alternatively, parameters can be called up from a medical computer (usually Easy computer programming/repair roll, but takes several minutes). Military version: 2km broadcast range, signal scrambler available. Civilian version: <300m range.",
  "source": "WEG40085 The Truce at Bakura p.138"
 },
 {
  "name": "Master Coder Chip",
  "category": "Security",
  "cost": "1,000–340,000 (dependent on quality and utility)",
  "availability": "4, X",
  "game_notes": "Illegal security override device. Skill: Security. Any electronic chip with sufficient memory can be erased and imprinted with security codes to override voice, retinal, and palmprint circuits. Grants +1D to +4D bonus to security rolls involving electronic systems (code locks, palm scanners, retinal scanners, etc.); bonus depends on sophistication of target system. A failed security roll or a '1' on the Wild Die means the chip has been detected, triggering an alarm. Must be imprinted by a 1st–4th degree droid or specially programmed computer. Most security systems include anti-counterfeit safeguards against droid-imprinted chips — but Bakura (a world where droids were essentially banned) had none, allowing C-3PO to freely counterfeit military and government security codes for Han Solo. Possession is illegal in Imperial space; immediate execution if caught. Favored by smugglers and pirates operating in low-tech systems.",
  "source": "WEG40085 The Truce at Bakura p.139"
 },
 {
  "name": "DRK-1 \"Dark Eye\" Probe Droid",
  "category": "Droids",
  "cost": "Not for sale",
  "availability": "4, X",
  "game_notes": "Height: 0.2m. Move: 16. DEX 3D (blaster 4D, dodge 5D), KNO 3D (scholar: Jedi lore 6D, survival 7D), MEC 1D, PER 3D (hide 7D, search 10D, sneak 6D), STR 1D, TEC 1D. Equipped: anti-scan shell (+1D+1 to hide), comlink, improved sensor package (+2 to search), infrared vision (30m), laser cannon (5D, 3-30/100/300), low-light vision (2× human range), motion sensors (+2 search vs moving targets), recording unit (5 min), self-destruct system, sonic sensors (+2 search via sound), stun blaster (4D stun, 3-10/30/120), poison dart needler (3-10/30/60; paralytic — target makes Difficult STR check or paralyzed 1D×40 minutes, 10 shots), telescopic vision, holoprojector, grenade launcher with 6 frag grenades. Developed by Arakyd Industries for Darth Maul.",
  "source": "REUP Star Wars RPG: Revised Expanded Updated p.379"
 },
 {
  "name": "IG-100 MagnaGuard",
  "category": "Droids",
  "cost": "19,000",
  "availability": "4, X",
  "game_notes": "Height: 1.95m. Move: 13. DEX 5D (blaster 7D, brawling parry 6D+2, dodge 7D, melee combat 9D, melee parry 8D+2, missile weapons 7D), KNO 2D, MEC 2D, PER 3D (search 6D, search: tracking 8D, sneak 4D), STR 4D+2 (brawling 6D, climbing/jumping 6D, lifting 5D+1), TEC 1D+2 (computer programming/repair 3D, droid programming 3D, droid repair 3D). Equipped: humanoid body, body armor (+1D vs damage), long-range sensor (+2D search 50-750m), motion sensor (+2D search vs moving objects up to 400m). Equipment: electrostaff (STR+2D, deflects lightsaber). Custom-built to General Grievous's specifications.",
  "source": "REUP Star Wars RPG: Revised Expanded Updated p.379"
 },
 {
  "name": "T-Series Tactical Droid",
  "category": "Droids",
  "cost": "14,000",
  "availability": "4, X",
  "game_notes": "Height: 1.8m. Move: 10. DEX 2D (blaster 2D+1, vehicle blasters 2D+1), KNO 3D (tactics 4D+1), MEC 3D (capital ship piloting 3D+2, capital ship shields 3D+2), PER 3D (command 3D+1, search 4D+2), STR 2D (brawling 2D+1), TEC 2D (computer programming/repair 3D+1). Equipped: humanoid body, internal comlink, synchronized fire circuits (+2D to command remotely linked droids), durasteel plating (+2D physical, +1D energy), vocabulator. Equipment: electrobinoculars, blaster carbine (5D, 3-20/60/210). Combat-analysis software; commands override 00M-Series battle droid commanders, causing command conflicts — Confederacy leaders avoid pairing T-Series with 00M-Series droids.",
  "source": "REUP Star Wars RPG: Revised Expanded Updated p.379"
 },
 {
  "name": "Viper Series Probe Droid",
  "category": "Droids",
  "cost": "18,500",
  "availability": "3, X",
  "game_notes": "Height: 1.6m. Move: 14 (repulsorlift). DEX 3D (blaster 4D), KNO 2D+2 (planetary systems 4D), MEC 3D (sensors 6D), PER 3D (search 4D, search: tracking 7D+1), STR 4D, TEC 2D+1. Equipped: long-range sensor (+1D search 200m–5km), movement sensor (+2D search vs moving objects up to 100m), atmosphere sensor (determines atmosphere class within 30 min), blaster cannon (4D+2), self-destruct mechanism, repulsor generator, retractable manipulator arms, retractable sensor/sample-gathering arms. Optional sublight delivery system +5,000 cr; hyperspace-capable version +15,000 cr. Self-destructs if it takes significant damage to prevent capture.",
  "source": "REUP Star Wars RPG: Revised Expanded Updated p.380"
 },
 {
  "name": "8D Smelter Droid",
  "category": "Droids",
  "cost": "7,200",
  "availability": "2, F",
  "game_notes": "Height: 1.65m. Move: 7. DEX 1D, KNO 1D, MEC 2D (machinery operation 4D), PER 2D, STR 4D (stamina 6D), TEC 1D. Equipped: humanoid body, vocabulator, heat-resistant chassis (durasteel molecularly bonded with kevlex; +1D vs physical and energy damage, melting point 4,000°C — allows operation in smelting environments that would destroy standard droids), protected photoreceptors (-1D to search, but includes infrared vision). Made by Roche for the major smelting companies.",
  "source": "REUP Star Wars RPG: Revised Expanded Updated p.380"
 },
 {
  "name": "Dwarf Spider Droid",
  "category": "Droids",
  "cost": "3,500",
  "availability": "3, X",
  "game_notes": "Height: 1.6m. Move: 10 / 4 (burrowing). DEX 3D (blaster artillery: blaster cannon 4D), KNO 1D, MEC 1D, PER 2D (search 3D), STR 3D+1 (climbing 4D+1), TEC 1D. Equipped: blaster cannon (9D), light armor (+2 STR vs damage), comlink, digging claws, locked access (internal shutdown switch), magnetic feet, restraining bolt, improved sensor package (+2 to all search rolls), infrared vision (30m in darkness), self-destruct system. Originally designed by the Commerce Guild to root out illegal mining operations within its borders. Cannot be played as a droid hero.",
  "source": "REUP Star Wars RPG: Revised Expanded Updated p.378"
 },
 {
  "name": "LM-432 Crab Droid",
  "category": "Droids",
  "cost": "20,000",
  "availability": "3, X",
  "game_notes": "Height: 1.49m (scout); up to 6m (assault). Move: 9. DEX 3D (blasters 4D+1), KNO 1D, MEC 1D, PER 1D (search 3D), STR 3D (climbing/jumping 5D), TEC 1D. Equipped: twin blasters (6D), water/mud jet sprayer, armorplast shielding (+1D vs damage), six legs (two tipped with heavy duranium stabilizers, granting +3D to climbing/jumping). Nicknamed 'muckrakers' by clone troopers. Used as advance scouts and trailblazers in harsh/swampy terrain; vacuum system can clear a path for following battle droids. Weak spot atop central body exposes vital systems. Cannot be played as a droid hero.",
  "source": "REUP Star Wars RPG: Revised Expanded Updated p.378"
 },
 {
  "name": "B1 Series Battle Droid",
  "category": "Droids",
  "cost": "1,800",
  "availability": "3, X",
  "game_notes": "Height: 1.8m. Move: 10. DEX 1D (blaster: blaster rifle 3D), KNO 1D, MEC 1D, PER 1D, STR 2D (brawling 3D), TEC 1D. Equipped: integrated comlink, remote receiver (5,000km range), body armor (+1D STR vs all damage), vocabulator (can replicate organic speech). Equipment: blaster carbine (5D, 3-30/100/300). Drone controlled by a Central Control Computer operating thousands of battle droids simultaneously; control signal nearly impossible to jam (Heroic communications roll required). Deactivates if it loses contact with remote processor.",
  "source": "REUP Star Wars RPG: Revised Expanded Updated p.376"
 },
 {
  "name": "B2 Series Super Battle Droid",
  "category": "Droids",
  "cost": "3,300",
  "availability": "3, X",
  "game_notes": "Height: 1.8m. Move: 10. DEX 2D (blaster 3D, blaster: blaster rifle 4D, dodge 3D, melee combat 3D, vehicle blasters 3D), KNO 1D, MEC 1D, PER 1D, STR 2D (brawling 3D), TEC 1D. Equipped: mounted blaster rifle (5D, 3-30/100/300), remote receiver (5,000km range) with local backup processor, light armor (+1D STR vs damage), vocabulator. Backup internal processor stores last orders and continues acting on them if the central control computer goes offline — does not deactivate on signal loss.",
  "source": "REUP Star Wars RPG: Revised Expanded Updated p.377"
 },
 {
  "name": "Droideka Destroyer Droid",
  "category": "Droids",
  "cost": "21,000",
  "availability": "3, X",
  "game_notes": "Height: 1.5m. Move: 4 (walking), 25 (wheel mode). DEX 3D (blaster: heavy repeating blaster 8D+2), KNO 1D, MEC 1D, PER 1D (search 3D+2), STR 3D (brawling 7D+1), TEC 1D. Equipped: two mounted heavy repeating blasters (8D, 3-75/200/500), body armor (+1D STR vs all damage), defensive shields (+3D STR vs damage), remote processor (500km range). Microrepulsor-assisted wheel mode allows it to fold into a wheel shape and roll at high speed; more ponderous when unfolded for combat. Cannot be played as a droid hero.",
  "source": "REUP Star Wars RPG: Revised Expanded Updated p.377"
 },
 {
  "name": "CZ Secretary Droid",
  "category": "Droids",
  "cost": "8,280",
  "availability": "2, F",
  "game_notes": "Height: 1.7m. Move: 10. DEX 1D+1, KNO 2D (business 5D, languages 5D), MEC 1D, PER 2D (con 3D+1, persuasion 3D+2), STR 1D, TEC 2D (computer programming/repair 4D+2). Equipped: humanoid body, locked access (shutdown switch secured or internally located), multinode communications link, internalized datapad, TransLang I Communications module (500,000+ languages). Acts as a switchboard, receiving and routing audio comlink signals, text/data messages, and HoloNet holographics simultaneously. Owner can prioritize incoming communications so only urgent messages pass through during the work day.",
  "source": "REUP Star Wars RPG: Revised Expanded Updated p.376"
 },
 {
  "name": "EV Series Supervisor Droid",
  "category": "Droids",
  "cost": "11,380",
  "availability": "2, F",
  "game_notes": "Height: 1.8m. Move: 7. DEX 1D, KNO 3D (intimidation: droids 4D, languages 4D, value: droids 5D), MEC 1D, PER 2D (command: droids 5D), STR 1D, TEC 3D (computer programming/repair 4D, droid programming 5D, droid repair 4D+1). Equipped: humanoid body, high-frequency binary comlink, broad-band broadcast antenna/receiver, two visual and audio sensors (human range), vocabulator. Equipment: arc welder (6D), datapad. Note: MerenData accidentally installed torture-droid motivators in the original production run; these flawed models proved more 'effective' at droid management through sadistic methods. A massive recall replaced most motivators, but some customers (crime lords, etc.) specifically sought out unrecalled units.",
  "source": "REUP Star Wars RPG: Revised Expanded Updated p.376"
 },
 {
  "name": "2-1B Surgical Droid",
  "category": "Droids",
  "cost": "4,300",
  "availability": "2, R",
  "game_notes": "Height: 1.5m. Move: 4. DEX 1D, KNO 2D (alien species 5D), MEC 2D ((A) bacta tank operation 5D), PER 3D ((A) injury/ailment diagnosis 6D), STR 1D, TEC 3D (first aid 6D, (A) medicine 9D). Equipped: computer interface tether (5m; when connected to medical mainframe adds +2D to all medical skills), medical diagnostic computer, analytical computer, surgical attachments, hypodermic injectors (4D stun), medicine dispensers. Programmed with the 'physician's code' — cannot refuse medical aid to any being (unless ordered by authorized operator) and cannot deliberately harm an organic creature except as defined by life-saving guidelines; will not engage in combat. Successor to the FX-6; preceded by FX-7 in the medical droid lineage.",
  "source": "REUP Star Wars RPG: Revised Expanded Updated p.372"
 },
 {
  "name": "WED 15 Treadwell Droid",
  "category": "Droids",
  "cost": "3,000",
  "availability": "2, F",
  "game_notes": "Height: 1.6m. Move: 8 (dual-tread). DEX 2D, KNO 1D (languages: droid languages 4D), MEC 1D, PER 3D (search 3D+1), STR 1D, TEC 2D (computer programming/repair 4D+2, machinery repair 6D, repulsorlift repair 4D, space transports repair 4D+1, starfighter repair 5D+1). Equipped: video sensor, dual-tread locomotion, fine manipulator arms (+1D to repair skills), extensible video microbinoculars (+2D search for microscale work), various tools, Cybot acoustic signaler (droid languages). Simple rolling-platform design with viewer stalk and 4+ tool arms — often mistaken for a tool rack. Arms swap quickly; many owners keep a stockpile of specialty arms. Not particularly bright, but obedient, single-minded, and reliable. Popular on fringe worlds. Fragile — requires regular maintenance and low-hazard environments.",
  "source": "REUP Star Wars RPG: Revised Expanded Updated p.375 | WEG41014 Star Wars Adventure Journal #14 p.249 (Cynabar's Droid Datalog)"
 },
 {
  "name": "3PO Protocol Droid",
  "category": "Droids",
  "cost": "3,000",
  "availability": "2, F",
  "game_notes": "Height: 1.7m. Move: 8. DEX 1D, KNO 3D (cultures 6D, languages 10D), MEC 1D, PER 1D, STR 1D, TEC 1D. Equipped: humanoid body (two arms, two legs, head), two visual and audio sensors (human range), vocabulator speech/sound system (can reproduce virtually any sound heard or programmed), AA-1 VerboBrain, TransLang III Communications module (7+ million languages). Factory-installed restraining bolt mount. Programmed for passive behavior — never attacks under any circumstances. Shutdown switch located at back of neck. Comes in a wide variety of colors.",
  "source": "REUP Star Wars RPG: Revised Expanded Updated p.375"
 },
 {
  "name": "R4 Agromech Droid",
  "category": "Droids",
  "cost": "2,500",
  "availability": "2, F",
  "game_notes": "Height: 1m. Move: 8. DEX 2D, KNO 2D (languages 3D), MEC 3D (repulsorlift operation 4D), PER 2D (search 3D), STR 2D, TEC 3D (computer programming/repair 4D+2, droid repair 4D, repulsorlift repair 5D, security 4D). Equipped: three wheeled legs (one retractable), internal comlink, photoreceptor with infrared vision (30m in darkness), internal storage (8kg capacity or upgrades), 4 tool mounts, acoustic signaler. Based on R2 design with cost-saving measures for casual/fringe users — taller and sturdier, with fewer miniaturized parts that spread internal components farther apart, reducing computing power but increasing stability and damage resistance. Unsuitable as a starfighter astromech without modification. Popular with repair crews; can monitor crops, medical equipment, and nearly any sensor type. Spare parts and common modification instructions are widely available.",
  "source": "REUP Star Wars RPG: Revised Expanded Updated p.374"
 },
 {
  "name": "R2 Astromech Droid",
  "category": "Droids",
  "cost": "4,500",
  "availability": "2, F",
  "game_notes": "Height: 1m. Move: 5. DEX 1D, KNO 1D, MEC 2D (astrogation 5D, starfighter piloting 3D, space transports 3D), PER 1D, STR 1D, TEC 2D (computer programming/repair 4D, starfighter repair 5D). Note: astromech droids acting as co-pilot may attempt starship repair while in flight. Equipped: three wheeled legs (center retractable), retractable heavy grasping arm (lifting 2D), retractable fine work grasper arm, extendable 0.3m video sensor (360° rotation), electric arc welder (1D–5D, 0.3m range), circular saw (4D, 0.3m range), video display screen, holographic projector/recorder, fire extinguisher, internal cargo area (20cm × 8cm), assorted small tools. IA's most successful diagnostic/repair series — compact enough to fit starfighter astromech sockets, with an overwhelming array of tools tucked behind access panels. Tool appendages can be swapped for specialty arms. Because R2s are quick-witted and often insightful, many owners are reluctant to wipe their memories, resulting in headstrong, independent units.",
  "source": "REUP Star Wars RPG: Revised Expanded Updated p.374"
 },
 {
  "name": "FX-6 Medical Droid",
  "category": "Droids",
  "cost": "4,300",
  "availability": "2, R",
  "game_notes": "Height: 1.83m. Move: 4 (mobility caster trio). DEX 1D, KNO 1D (alien species 3D), MEC 1D ((A) bacta tank operation 3D+1), PER 2D ((A) injury/ailment diagnostics 3D+2), STR 1D, TEC 2D (first aid 3D+1, (A) medicine 4D). Equipped: medical computer scomp link (+1D to all medical skills when interfaced with an adequate medical computer or surgeon droid), readout screen (no vocoder — communicates via readout panel only), medical diagnostic computer and sensor, analytical computer and sensors, 14 light manipulator arms, 6 main manipulator arms, surgical attachments, hypodermic injectors (4D stun), medicine dispensers. Clone Wars-era field medical droid; common after the war due to large production runs and battlefield salvage. Predecessor to the FX-7.",
  "source": "REUP Star Wars RPG: Revised Expanded Updated p.373"
 },
 {
  "name": "FX-7 Medical Assistant Droid",
  "category": "Droids",
  "cost": "3,500 (used only)",
  "availability": "2",
  "game_notes": "Height: 1.7m. Move: 0 (stationary). DEX 0D, KNO 2D (alien species 4D), MEC 1D ((A) bacta tank operation 4D), PER 2D ((A) injury/ailment diagnostics 4D), STR 1D, TEC 2D (first aid 4D, (A) medicine 5D). Equipped: medical computer scomp link (interfacing with an adequate medical computer or surgeon droid adds +2D to all medical skills), medical diagnostic computer and sensor, analytical computer and sensors, 20 light manipulator arms, one main manipulator, surgical attachments, hypodermic injectors (4D stun), medicine dispensers. No longer manufactured; available used only.",
  "source": "WEG40089 The Movie Trilogy Sourcebook SE p.165"
 },
 {
  "name": "IM4-099 Imperial Mark IV Patrol Droid",
  "category": "Droids",
  "cost": "Not for sale",
  "availability": "Imperial use only",
  "game_notes": "Height: 0.3m diameter. Move: 15. DEX 3D (dodge 4D), KNO 1D (law enforcement: Imperial legal codes 5D), MEC 2D, PER 4D (search 5D), STR 1D, TEC 1D. Equipped: holorecording macrobinoculars (+1D search; records within 50m line of sight), broad-band comlink (coded to Imperial alert frequencies), hover package (10m flight ceiling). The Mos Eisley garrison's unit (IM4-099) is nicknamed 'Face' by the local militia. Its comm-signal monitoring protocols have caused considerable friction with the Imperial garrison — the Prefect's comm repeaters boost signals into the illegally-prohibited range, causing Face to alarm on the ASP droids installing them.",
  "source": "WEG40089 The Movie Trilogy Sourcebook SE p.164"
 },
 {
  "name": "DefenStar 5000 Planetary Shield Relay System",
  "category": "Planetary Defense",
  "cost": "500,000 per shield",
  "availability": "X",
  "game_notes": "Model: Hibomehrt-Wyrrgex DefenStar 5000. Scale: Death Star. Skill: Planetary shields. Crew: 150 (skeleton 50/+15, crew skill: planetary shields 6D). Fire Control: 3D. Each shield protects a 100 square kilometer area with 6D Death Star-scale protection. Anything hitting the shield suffers 6D damage; energy bolts make opposed damage rolls — if the shield roll is higher the bolt is snuffed, if the bolt's roll is higher, for every 6 points exceeding the shield roll, 1D of damage passes through. If the shield system is damaged, 5D of backup shields can be brought online with a Moderate planetary shields roll. Each shield requires its own power generator. PLANETARY NOTES: A typical habitable planet has a structural rating of 10D-20D (Death Star scale). Alderaan had no shields and was utterly vaporized. A shielded planet overcome by a superlaser may 'merely' have its entire surface burned off or split into several pieces.",
  "source": "WEG40071 Dark Empire Sourcebook p.130"
 },
 {
  "name": "Hunter-Killer Probot",
  "category": "Droids",
  "cost": "Not for sale",
  "availability": "Imperial use only",
  "game_notes": "Type: Arakyd Hunter-Killer Probot. Scale: Capital. Size: 150m tall. Space: 3. Atmosphere: 105; 300 kmh. Hull: 4D. Shields: 1D. DEX 3D (dodge 5D), KNO 2D+2 (bureaucracy 3D, law enforcement: Imperial customs procedures 6D), MEC 3D (starship gunnery 5D, starship shields 5D), PER 4D (search 7D), STR 2D, TEC 2D+2. Sensors: Passive 40/2D, Scan 80/2D+2, Search 100/3D+1, Focus 5/4D+2. Equipped: 4 heavy grasping extensors (+2D lifting), 4 fine work grasping extensors, advanced sensor array with penetrating hullscanners and graphiscan recognition codes (11,000+ registries, cross-references forgeries), internal secure chamber (30x30x10m — holds a light freighter). Weapons: 2 Quad Blaster Cannons (fire-linked, turret, 1-5/10/17, 4D+1), 2 Ion Cannons (turret, 1-3/7/36, 8D), 1 Tractor Beam Projector (front, 1-5/15/30, 5D). Groups can coordinate with up to a dozen others, typically slaved to an Imperial Customs Frigate or Patrol Vessel.",
  "source": "WEG40071 Dark Empire Sourcebook p.133"
 },
 {
  "name": "BlasTech Sniffer Weapon Detector",
  "category": "Security",
  "cost": "5,600",
  "availability": "2, R (restricted to governments)",
  "game_notes": "Portable hand-held weapon scanner. Search 5D to detect hidden energy weapons, or adds +2D to operator's search: weapon detector skill (must have at least 1D in the specialization). Difficulty depends on camouflage: simply in a pack = Easy; drained of blaster gas, power packs removed, cleaned of residue, disassembled and parts spread among luggage = Very Difficult. Scanner is a small cube with scanning panel on one side and output screen on the other showing outlines and energy readings. A skilled operator is necessary for best effectiveness to interpret data.",
  "source": "WEG40042 Han Solo and the Corporate Sector Sourcebook p.116"
 },
 {
  "name": "TaggeCo. Biodegradable Binders",
  "category": "Security",
  "cost": "75",
  "availability": "2, R",
  "game_notes": "High-strength polymer binders with a one-way clasp that seals once linked. Once applied, character must make opposed Strength roll to break free (binders have STR 6D). Binders deteriorate in 36 hours. Application of a special harmless molecular solvent degrades them sooner.",
  "source": "WEG40042 Han Solo and the Corporate Sector Sourcebook p.117"
 },
 {
  "name": "Quickdraw Holster",
  "category": "Weapon Accessories",
  "cost": "Varies",
  "availability": "",
  "game_notes": "Custom-made by an expert to fit a specific weapon. Molded around the weapon's shape with no bumps or details to slow the draw. Adds +1 to +2D or more to blaster skill when quickdrawing. Price varies by quality and customization. QUICKDRAW RULES: Character uses blaster skill or specialization with an appropriate weapon (blaster pistol, hold-out blaster, heavy blaster pistol). Character may not do anything else in the round, including dodge — quickdrawing characters are easy marks for anyone else. Character splits blaster skill dice between speed draw dice and accuracy dice. Both characters roll speed draw dice — highest fires first. The first shooter then rolls accuracy dice to hit. Actions are NOT simultaneous: the second character may only fire back if not injured. A character stunned by a quickdraw shot loses -3D off all following shots that round. A character wounded or worse cannot return fire. Multiple shots suffer multi-action penalties to both speed draw and accuracy dice. Against dodging opponents: roll speed draw vs target's dodge — if speed draw is higher, shoot at normal range difficulty only (dodge doesn't add); if dodge is higher, dodge roll adds to range difficulty.",
  "source": "WEG40042 Han Solo and the Corporate Sector Sourcebook p.121"
 },
 {
  "name": "CSA Harvester Droid CD-2",
  "category": "Droids",
  "cost": "45,000",
  "availability": "",
  "game_notes": "Height: 15m. Scale: Speeder. Move: 14; 40 kmh. DEX 1D, KNO 1D, MEC 1D (harvesting machinery operation 3D), PER 2D, STR 4D, TEC 1D. Equipped: remote interface control mechanism, tractor treads, limited optical perception suite (observes grain condition only), harvester blades (7D speeder scale damage). Simple processors with limited program parameters and emergency safety shutdowns.",
  "source": "WEG40042 Han Solo and the Corporate Sector Sourcebook p.126"
 },
 {
  "name": "Cybot Galactica BigHaul Robo-Hauler",
  "category": "Droids",
  "cost": "1,500",
  "availability": "",
  "game_notes": "Length: 1.6m. Move: 5. DEX 1D, KNO 1D, MEC 1D, PER 1D, STR 4D (lifting 5D), TEC 1D. Equipped: remote programming receiver, one pair tractor treads, four grapple arms for cargo, cargo bed (2 ton capacity). More of an automated cargo hauling device than an actual droid — limited-function droid brain attached to an industrial vehicle. Takes simple orders and monitors operating condition; notifies central processor or organic managers of abnormalities. Can be rigged for remote control.",
  "source": "WEG40042 Han Solo and the Corporate Sector Sourcebook p.127"
 },
 {
  "name": "Cybot Galactica Sartorifex Robo-Valet",
  "category": "Droids",
  "cost": "5,600",
  "availability": "",
  "game_notes": "Height: 1.5m. Move: 3. DEX 1D, KNO 3D (alien species: native garbs and fabrics 6D, cultures 5D, cultures: fashion 7D), MEC 1D, PER 2D (fashion trends 4D), STR 1D, TEC 1D. Equipped: internal VibroSound dry cleaning device, internal steam press, rethreading/reweaving micro manipulators, one pair photoreceptors (Human range), galactic fashion database. Programmed to maintain and store the master's clothing and gear — cleaning, pressing, mending, and selection of clothing. Industrial models serve hotels with high volume cleaning, pressing, folding and minor mending.",
  "source": "WEG40042 Han Solo and the Corporate Sector Sourcebook p.129"
 },
 {
  "name": "Cybot Galactica MixRMastR Robo-Bartender",
  "category": "Droids",
  "cost": "1,000",
  "availability": "",
  "game_notes": "Height: 0.5m. Move: 12. DEX 1D, KNO 4D (alien species: favorite drinks 6D, drink mixology 7D), MEC 1D, PER 2D, STR 1D, TEC 1D. Equipped: chemical/liquor drum siphons, photoreceptor/audio receiver (Human range), two fine manipulator arms, retractable drink/credit tray, repulsorlift unit (optional). Stationary versions plug into tubing from source liquors; remote versions hover above crowded barroom floors. Technically-inclined slicers can easily reprogram the systems — leading to deleted bar tabs and toxic cocktails.",
  "source": "WEG40042 Han Solo and the Corporate Sector Sourcebook p.129"
 },
 {
  "name": "Go Corp/Utilitech Metrocab Robo-Hack",
  "category": "Droids",
  "cost": "15,000",
  "availability": "",
  "game_notes": "Length: 6m. Scale: Speeder. Move: 105; 300 kmh. DEX 1D, KNO 1D (streetwise: local shortcuts 6D), MEC 1D (repulsorlift operation: landspeeder 6D), PER 1D (con 5D), STR 3D, TEC 1D. Equipped: armor plating (+4D exterior and droid brain/credit compartment), internal passenger compartment (seats 3), heavy suspension repulsorlift motors, internal streetmap/database with uplink to local communication and transportation network, credit operation box, vocabulator panel. Central Learning Chip allows the droid to learn from past experiences. Some are programmed to produce maximum revenue rather than provide customer service — known to ride extra kilometers to defraud visitors. Self-defense: doors auto-lock in case of robbery or non-payment, delivering the individual to the nearest law enforcement.",
  "source": "WEG40042 Han Solo and the Corporate Sector Sourcebook p.130 | WEG41014 Star Wars Adventure Journal #14 p.265 (Cynabar's Droid Datalog)"
 },
 {
  "name": "Bith Vehicle Voice Lock (BiWoL) RVR-325",
  "category": "Security",
  "cost": "650",
  "availability": "3",
  "game_notes": "Model: Casillis Electronic Defenses BiWoL RVR-325. Skill: Streetwise. Easy communications roll to encode or change pattern. Auto-activates within 10m by owner voice command (owner can alter tone to fail under duress). Failed circumvention disables vehicle power until secondary ID system verifies owner. Secondary ID can be customized: datakeys, datachips, specific switch sequences, computer sub-routines, or retinal/fingerprint/genetic scans. Forging requires a voice replication unit with sound adjustment, 3+ hours of work, and Moderate communications + Moderate forgery rolls. Computer holds up to 1 minute of recorded voice data.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.13"
 },
 {
  "name": "Kolocast Live Organism Comfort Conveyor",
  "category": "Survival Gear",
  "cost": "300 (25kg), 500 (60kg), 800 (100kg)",
  "availability": "2",
  "game_notes": "Model: Kolocast Consumer Goods T-P-C4. Animal transport and containment system. Three sizes: small (up to 25kg), medium (up to 60kg), large (up to 100kg). Special orders for larger needs. Internal bio-scanner monitors vital life functions. Micro-repulsor chips cushion animal in soothing pulsating waves. Heating/cooling, bio-system controls and food/water systems included. Safety monitors watch companion's condition throughout journey.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.14"
 },
 {
  "name": "Vewas PVC-800 Personal Vehicle Coordinator",
  "category": "Electronics",
  "cost": "1,200",
  "availability": "",
  "game_notes": "Model: Vewas Data Controllers PVC-800. Limited to vehicles under 10m long and under 10 metric tons. Projects data readouts on windshield — speed, course, angle of inclination with coded visual and aural warnings. Adds +1D to vehicle operation skill under normal situations. In emergencies, if programmed by owner, PVC automatically makes evasive maneuvers (+2D to operation roll to avoid collision — but prevents unsafe maneuvers).",
  "source": "WEG40025 Galladinium's Fantastic Technology p.15"
 },
 {
  "name": "Bespin Motors Remote DVI Activator",
  "category": "Electronics",
  "cost": "500 (speeders), 2,500 (starfighter scale starships)",
  "availability": "2",
  "game_notes": "Hand-held remote activation controller. Range 2km. Instructs vehicle's droid brain to begin normal ignition and pre-flight safety checks. Pre-flight takes 20 seconds (some speeders) to 5+ minutes (some starships). User must still pilot manually.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.18"
 },
 {
  "name": "Go Corp CD-12a Autopilot Droid Brain",
  "category": "Droids",
  "cost": "5,000 (repulsorlift), 10,000 (starfighter-scale)",
  "availability": "4, R",
  "game_notes": "Autopilot droid brain with wrist-mounted activator (5km range). DEX 0D, KNO 1D, MEC 1D (one of: repulsorlift operation 4D, space transports 4D, or starfighter piloting 4D), PER 1D, STR 0D, TEC 1D (repulsorlift repair 2D). When activated, takes control of vehicle and uses sensors, guidance and drive systems to fly to the wrist activator's homing signal. Some pilots have illegally modified CD-12s to have combat skills.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.18"
 },
 {
  "name": "GST System Diagnostic Filter",
  "category": "Ship Equipment",
  "cost": "3,500",
  "availability": "2",
  "game_notes": "Model: GST System Diagnostic Filter. Starship computer translator — large datapad with separate droid brain processing unit and two computer adaptors. Adds +1D+1 to computer programming/repair for shipboard computer diagnostics. Adds +2 to space transports repair for system malfunctions not totally computer-related (hyperdrives, sublight drives, etc.). If roll failed by more than 10, the ship computer detects an intrusion, shuts down, and must be completely re-booted (Easy computer programming/repair, but takes at least 15 minutes).",
  "source": "WEG40025 Galladinium's Fantastic Technology p.18"
 },
 {
  "name": "AccuTronics MK 8001 Attendant Droid",
  "category": "Droids",
  "cost": "3,000",
  "availability": "",
  "game_notes": "Height: 1.6m. Move: 7. DEX 2D (running 2D+1), KNO 2D+2 (alien species 3D, cultures 3D, languages 3D+1), MEC 1D+1 (communications 4D, ground vehicle operation 2D+1, hover vehicle operation 2D, repulsorlift operation 2D+2, sensors 2D), PER 1D+1 ((A) injury/ailment diagnostics 2D), STR 1D+1, TEC 2D (first aid 6D). Equipped: humanoid body, two visual/auditory sensor recorders (Human range), vocabulator, AA-1 Verbobrain. Medical Database: 50,000 common illnesses and diseases with search/retrieval for advanced first aid in crisis situations. Medical SupportLink: maintains direct comlink to nearest medical facility with two-way data transmission via planetary communication grids.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.20"
 },
 {
  "name": "Caldrahlsen C4LR Litigation Droid",
  "category": "Droids",
  "cost": "3,000-10,000 (up to 3 litigation modules at 2,000 each)",
  "availability": "",
  "game_notes": "Height: 1.6m. Move: 8. DEX 1D, KNO 2D (bureaucracy: Imperial administration 5D+2, bureaucracy: courtroom procedures 5D+2, cultures 4D+1, intimidation 4D+2, law enforcement 6D, scholar: Imperial law 6D+2), MEC 1D, PER 2D (bargain 3D, persuasion 5D+1), STR 1D, TEC 1D. Equipped: humanoid body, two visual/auditory sensor recorders (Human range), holographic projector/recorder, vocabulator, AX-02 Verbobrain, litigation module (Imperial legal precedents and case histories; specializations include civil arrest/prosecution, commercial law, taxation law, military jurisprudence; 1 base module installed, up to 4 additional). Perfect Memory: permanent record of all courtroom proceedings, can replay conversations verbatim and provide hardcopy. Honesty: programming prevents lying, exaggerating or misrepresenting facts. Accepted as accredited members of the Imperial justice system.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.21"
 },
 {
  "name": "Cybot Galactica 434-FPC Personal Chef Droid",
  "category": "Droids",
  "cost": "4,000",
  "availability": "",
  "game_notes": "Height: 1.4m. Move: 6. DEX 1D, KNO 2D (culinary arts 6D+2, cultures 3D, cultures: galactic cuisines 5D, cultures: food preparation 5D, home economics 4D+2, languages 2D+1, value: foodstuffs 2D+2), MEC 1D, PER 2D, STR 1D, TEC 1D. Equipped: humanoid body, two visual/auditory sensor recorders (Human range), vocabulator, various cooking attachments (replaceable, left arm), AA-1 Verbobrain, TranLang I Communications module, food preparation database (17,000+ recipes), food sample analyzer. Also serves as mobile food taste-tester, shopping servant and host's assistant.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.22 | WEG41014 Star Wars Adventure Journal #14 p.252 (Cynabar's Droid Datalog)"
 },
 {
  "name": "Opti-Prime XA-540 Personal Secretary Droid",
  "category": "Droids",
  "cost": "2,500",
  "availability": "",
  "game_notes": "Height: 1.6m. Move: 8. DEX 1D, KNO 2D+1 (bureaucracy 4D, business 4D), MEC 1D, PER 1D+2 (bargain 2D+2), STR 1D, TEC 1D (computer programming/repair 3D+2). Equipped: humanoid body, two visual/auditory sensor recorders (Human range), vocabulator, TranLang I Communications module, business administration database. Loyalty Inhibitor: hard-wired programming prevents disclosing business-sensitive information to unauthorized personnel — reprogramming attempts cause circuitry overload and burnout. Handles correspondence, stock portfolio management, budgetary analysis, employee relations, and makes a good cup of chaffir.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.23"
 },
 {
  "name": "Veril Line Systems V5-T Transport Droid",
  "category": "Droids",
  "cost": "2,500 (tread), 4,500 (repulsorlift)",
  "availability": "",
  "game_notes": "Height: 2.2m. Move: 35 (tread), 50 (repulsorlift). DEX 1D, KNO 1D, MEC 1D, PER 1D, STR 4D, TEC 1D. Retractable lifting arm (lifting 4D, up to 500kg). Carries up to 2 metric tons. Fifth-degree unit — follows basic commands, can be preprogrammed with transport routes. Advanced models have remote computer link for traffic data and orders via com signals.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.23"
 },
 {
  "name": "Industrial Automation TTS-15 Tutor Droid",
  "category": "Droids",
  "cost": "500 (initial lease), 1,000/year (service contract with inspection and program upgrades)",
  "availability": "",
  "game_notes": "Height: 1.5m. Move: 7. DEX 1D, KNO 3D (alien species 4D+1, cultures 4D+1, economics 4D+2, languages 4D+2, planetary systems 4D+1, scholar: applied educational theory 5D+2, scholar: galactic history 4D, scholar: various 3D+2), MEC 1D, PER 2D, STR 1D, TEC 1D (computer programming/repair 2D). Equipped: humanoid body, two visual/auditory sensor recorders (Human range), vocabulator, AA-1 Verbobrain, TranLang II Communications module. Education Pack: pre-programmed with up to 3 subject areas (galactic history, sciences, languages, literature, cultures, mathematics, etc.). Competence levels selected prior to shipment.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.24"
 },
 {
  "name": "Kalibac Industries NR-5 Maintenance Droid",
  "category": "Droids",
  "cost": "2,200",
  "availability": "",
  "game_notes": "Height: 0.7m. Move: 3. DEX 1D (dodge 1D+2), KNO 1D, MEC 1D, PER 1D, STR 1D, TEC 1D (computer programming/repair 4D, security 2D, space transports repair 3D). Equipped: visual photoreceptors (Human range, infrared, ultraviolet), Kalibac Mechro-II brain, wide-band radio receptor, retractable heavy grasper arm (+1D lifting), retractable fine manipulator arm, 2 treaded legs. Budget competitor to the R2 Astromech — lacks astrogation and piloting but substantially cheaper.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.25"
 },
 {
  "name": "Rseikharhl LE-VO Law Enforcement Droid",
  "category": "Droids",
  "cost": "9,000",
  "availability": "2, R or F",
  "game_notes": "Height: 2.4m. Move: 8/12. DEX 3D (blaster 5D, dodge 3D+2), KNO 2D+2 (alien species 3D, bureaucracy 3D, intimidation 4D, law enforcement 6D, streetwise 4D), MEC 2D (repulsorlift operation 3D), PER 1D (con 2D+2, command 3D+2, investigation 4D+2, persuasion 2D, search 3D), STR 3D, TEC 1D. Equipped: two auto-balance legs, swivel torso, body armor (+2D physical and energy all locations). Equipment: blaster rifle (5D, normally set on stun). Will not fire on an opponent unless absolutely necessary, insisting on peaceful surrender first. Developed by the Rseikharhl species as a criminal deterrent — exceptional service record with zero fatalities.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.25"
 },
 {
  "name": "Ulqib MacroTronics Droid Customization Kit",
  "category": "Tools",
  "cost": "400 (additional costs for specific attachments)",
  "availability": "",
  "game_notes": "Skills: Droid programming, droid repair. Kit includes: droid datapad neural pathway linkage, memory modulator (skill/attachment software programming), memory wipe module (erases all non-hardwired memory), replacement actuators and micro-servos, additional software node (+2D to one skill if droid's skill is less than 2D over attribute), broadband antenna receiver, movement sensor (search +2D over PER for moving objects within 100m if search is less than 2D over PER), repulsorlift motor (Move 13 for droids under 100kg, requires repulsorlift repair to install), internal computer interface socket, two photoreceptors (above Human range), two audio receptors (Human range), vocabulator panel, database retrieval system, remote programming receiver. Most hardware additions require corresponding software programming. Additional tools and parts may be needed — GM determines difficulty and time.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.25"
 },
 {
  "name": "Mk-11 Droid Diagnostic",
  "category": "Tools",
  "cost": "200",
  "availability": "",
  "game_notes": "Model: Interstellar Droid Monitoring Inc. Mk-11. Skills: Droid programming, droid repair. Very Easy droid programming roll for standard systems check and readout (takes 30 minutes). Contains parameters for over 500 droid models. Diagnostic-assisted repair adds +1D to droid repair for maintenance only — does not apply to major repairs or modifications.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.26"
 },
 {
  "name": "AccuTronics CL-3 Droid Command Link",
  "category": "Communications",
  "cost": "850",
  "availability": "",
  "game_notes": "Remote droid command link with 1km range. Incorporates standard comlink features plus direct audio/video feed from linked droid's sensors. Side controls switch between droid visual senses (normal, infrared, ultraviolet if available). Can display droid communications as text — popular with R2 series and other high-density electronic language droids. Installation: Moderate droid repair + Easy droid programming, 2 hours. Originally for droids in hostile conditions; also used in military surveillance operations.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.26"
 },
 {
  "name": "Industrial Automaton R-Series Voice Box Adaptor",
  "category": "Droid Hardware",
  "cost": "250 (language programs 25-100 each)",
  "availability": "",
  "game_notes": "Attaches to R1-R5 series astromech droids. Reprograms droid with chosen language (Basic, Bocce, Rodian, Wookiee, etc.). Adjustable pitch, intonation and speech patterns. Installation: Moderate droid repair, 15 min. Removal: Easy droid repair, 15 min (failed roll = 3D stun to droid + one random skill eliminated). Can cause operation problems (on mishap, skill attempt fails or -2D penalty). Can only fit in specially refitted droid couplings on X-wings/Y-wings, or must be mounted externally (e.g. on droid's head). If damaged or ripped off: 3D stun damage to droid.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.27"
 },
 {
  "name": "Aqualish Bio-Light Panel ABP-980",
  "category": "General Equipment",
  "cost": "250",
  "availability": "2",
  "game_notes": "Model: Ferisoliq Imports Ltd. ABP-980. 1m tall by 2m long rectangular tank with photo-chemical reactive plankton in controlled liquid environment. Plankton emit light in ever-changing fluid patterns when exposed to common gases (carbon dioxide, nitrogen, hydrogen). Recessed stud controls gas filters along frame edge to control light output. Both functional lighting and decorative art piece.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.28"
 },
 {
  "name": "Veretrex Bith Hiding Cube SCT-1000",
  "category": "Security",
  "cost": "3,000",
  "availability": "4",
  "game_notes": "75cm cube security container. Advanced prism with fiber optic relays that carry light across each face — when recessed into a wall, appears as continuous wall surface. Does not work in the open (creates a 'fuzzy' effect that draws attention). Moderate Perception roll to notice something about the wall. External magna-locks require Very Difficult security to pick. Outer surface STR 4D to resist damage.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.28"
 },
 {
  "name": "CoreDataFiles CFC-100 Corporate Watcher",
  "category": "Computers",
  "cost": "12,500 (10,000/year service fee for weekly data upgrades)",
  "availability": "2",
  "game_notes": "Skill: Business. Financial tracking computer covering 10,000+ business conglomerates including Galaxy 500, Surnack's Sentinel 100, and Tradoc Core Index. AI routines find gems of information in huge datastreams. Includes Bank of the Core Investment Division service contract for weekly updates. HoloNet access provides continuous updates. Easy business roll to retrieve company operations info. Moderate+ for hypothetical 'what-if' scenarios and long-term trend analysis. No specialized computer skills to install.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.28"
 },
 {
  "name": "MicroData Pocket Secretary",
  "category": "General Equipment",
  "cost": "150",
  "availability": "1",
  "game_notes": "Voice-activated hands-free datapad. Two pieces: standard datapad with internal audio coding chip, and a comlink-sized device (hand-held or attached to headset/necklace). Speak a code-phrase to begin recording; sensor relays spoken messages to datapad which translates to computer data. Can review data later with queries. Also used for covert recording of conversations.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.29"
 },
 {
  "name": "Ealewon DCD-4800 Cryptographic Coder",
  "category": "Security",
  "cost": "1,200",
  "availability": "3",
  "game_notes": "Skill: Computer programming/repair. Hand-held computer data encryptor. Easy computer programming/repair to secure selected data files with encryption. Attempting to access encrypted files without authorization requires Difficult computer programming/repair. Mark individual files for password access while maintaining open systems. Hides sensitive materials even from sophisticated search operations.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.29"
 },
 {
  "name": "Farendress Defel Heat Reducer HR-1200",
  "category": "General Equipment",
  "cost": "500",
  "availability": "2",
  "game_notes": "Heat reducer and energy generator using power plates with Defel micro-organism cultures that thrive on ultraviolet radiation. The one-celled creatures absorb local heat sources and generate electricity stored in battery cells. Ideal for desert climates or UV-rich environments. Produces enough energy to power several datapads or other small appliances.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.29"
 },
 {
  "name": "Valkrex Dispersal Canister",
  "category": "General Equipment",
  "cost": "400",
  "availability": "2",
  "game_notes": "Portable personal waste disintegrator. Round cylinder 1m tall by 40cm diameter. Disintegrates waste elements in a contained fusion reaction, producing harnessable electricity stored in 6 removable rechargeable power packs for datapads, comlinks and other appliances. For home, office or shipboard use.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.30"
 },
 {
  "name": "Synergentics Rapid Recipe Food Manager",
  "category": "General Equipment",
  "cost": "250",
  "availability": "2",
  "game_notes": "Skill: Culinary arts (Knowledge). Fully automated food preparation system replicating thousands of recipes. Built-in ingredient equivalency module suggests alternate foodstuffs for rare ingredients. Automated menu planner advises quantities for any number of diners. Very Easy culinary arts to locate a recipe. Moderate+ to incorporate a new recipe from scratch.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.30"
 },
 {
  "name": "zZip Refresher Booth",
  "category": "General Equipment",
  "cost": "2,500",
  "availability": "2",
  "game_notes": "Fully automated self-contained ultrasonic shower system. Incorporates minute amounts of specially-formulated bacta to promote cellular repair and muscular stimulation. Low-frequency heat induction coils provide warm drying cycle. Complete cycle takes 10 minutes.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.30"
 },
 {
  "name": "Gafladen Repulsor Lounge Floater 432GLM",
  "category": "General Equipment",
  "cost": "350",
  "availability": "2",
  "game_notes": "Adjustable repulsor fields from 1 to 30cm hovering height with micro-inducers for relaxing massage. Perfect for relaxation after a tough day.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.31"
 },
 {
  "name": "Quarlitech Grav Mill GRGC-800",
  "category": "General Equipment",
  "cost": "700",
  "availability": "2",
  "game_notes": "Gravity treadmill for exercise and gravity acclimation. Dedicated training for an extended period (days to weeks depending on severity of gravity change) can help eliminate penalties due to higher or lower gravity worlds.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.31"
 },
 {
  "name": "Locris Magna Lock MLC-50",
  "category": "Security",
  "cost": "150",
  "availability": "2",
  "game_notes": "Skill: Security. Surface locking mechanism using micro magnetic fields to almost molecularly bond two items in place. Very Easy security roll to activate. Adds +2D to object's Strength to resist damage. Use on entrance panels, viewport windows, speeder accessports, and other entry points. Can only be removed from the inside.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.31"
 },
 {
  "name": "Novaplex Monofilament Screen Guards",
  "category": "Security",
  "cost": "450 (1 pair 80cm strips)",
  "availability": "4, F/R/X",
  "game_notes": "Anti-intrusion device. Place strips above or below intrusion points; when activated, extends hundreds of needle-sharp monofilament fiber strands vertically up to 2m. Practically invisible even with night-enhanced vision. Very Difficult search to detect. Contact causes 6D damage (9D if subject moving rapidly). Illegal in many systems.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.31"
 },
 {
  "name": "ChandrilTech PX-7 Heat Sensor",
  "category": "Sensors",
  "cost": "250",
  "availability": "4",
  "game_notes": "Skill: Sensors. Hand-held heat sensor scanning 100m radius. Visual display shows relative heat intensity by brightness and distance to sources.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.32"
 },
 {
  "name": "zZip Deluxe Sun Room",
  "category": "General Equipment",
  "cost": "22,500",
  "availability": "3",
  "game_notes": "Artificial environment booth, 20 square meters by 3m tall. Custom configured to approximate natural lighting conditions on any number of worlds — specific radiation, light and temperature levels set by owner. Ideal for deep-space travelers needing natural light exposure.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.32"
 },
 {
  "name": "MerenData Universal Computer Interface",
  "category": "Computers",
  "cost": "2,500 (100/year software upgrades)",
  "availability": "1",
  "game_notes": "Skill: Computer programming/repair. Interface card that examines unfamiliar computer systems to determine operating procedures and interprets commands. Computer programming/repair roll required (difficulty varies by how much the system differs from standard). Success adds +1D to all subsequent computer programming/repair rolls on that system. Does not override security programming or permit unauthorized access. Provides easy data transference between otherwise incompatible system architectures.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.32"
 },
 {
  "name": "Udrane Universal Power Adaptor",
  "category": "General Equipment",
  "cost": "100",
  "availability": "2",
  "game_notes": "Modulates incoming current to match any device's power needs with variable input adaptors. Very Easy Technical roll to make proper adjustments. Not 100% universal but covers the vast majority of galactic power standards.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.33"
 },
 {
  "name": "Tramora VDV-100 Holo Communicator",
  "category": "Communications",
  "cost": "800",
  "availability": "2",
  "game_notes": "Holographic communications display with two-way message transmit/receive. Holographic relays (requires compatible local comms network). Security features: block specific holo signals, identify incoming signal source. Interphase module for downloading and visual recording of incoming messages to compatible computer systems. Default image processor can create a virtual image to replace owner's actual features.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.33"
 },
 {
  "name": "Agrierd InstaMist Generator",
  "category": "General Equipment",
  "cost": "15 (dispenser), 10 (mist cartridge)",
  "availability": "2",
  "game_notes": "High-pressure cartridge device. Fire extinguishing mist turns to smothering foam. Water mist cartridges used by moisture farmers to extract water from rock veins. Can also generate fog for cover/escape (acts as thick smoke per standard smoke rules).",
  "source": "WEG40025 Galladinium's Fantastic Technology p.33"
 },
 {
  "name": "Farbreini Coruscant Cascader BPEA-1A",
  "category": "Luxury Goods",
  "cost": "5,000",
  "availability": "4",
  "game_notes": "Electronic molecular excitation net incorporated into any piece of clothing. Produces dazzling matrix of custom-designed light shapes that highlight the figure. Controlled low-power 'static lightning' show of ever-changing hues responding to the slightest movement. Perfectly safe — touching it produces only a slight tingle.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.34"
 },
 {
  "name": "Menendahl Cybernetic Nexus Ring",
  "category": "Cybernetics",
  "cost": "5,000",
  "availability": "4, R",
  "game_notes": "Cyborg power interface disguised as a signet ring. Opens to extend a chemically-coated monofilament fiber (1m length) with standard energy jack connector for interfacing with local power sources. Energy converter adjusts flow to boost prosthetic performance. Store 1 hour of energy for +1D STR or DEX bonus to prosthetic for 10 minutes (max 15 min stored / 1.5 hr charge). Complication while boosted = 4D stun from energy feedback. Using more than once per week requires Moderate willpower roll per additional use — failure means psychological addiction (need daily boost or -1D STR; while boosted, full STR + 1D bonus).",
  "source": "WEG40025 Galladinium's Fantastic Technology p.34"
 },
 {
  "name": "Palladia Dissuasion Field Belt DFB-200",
  "category": "Personal Defense",
  "cost": "700",
  "availability": "3",
  "game_notes": "Stylish belt generating low-energy 360-degree force field 3cm from wearer's body. Any significant kinetic pressure triggers 1D-4D stun damage (set by wearer, from mild shock to non-lethal blast). Power pack: 3 hours at setting 1, 45 minutes at setting 4. Rechargeable with standard power systems.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.35"
 },
 {
  "name": "Gorondin Holo Chronometer Model 7643",
  "category": "Luxury Goods",
  "cost": "300 (standard), 50 (additional imagery chips), 500+ (deluxe)",
  "availability": "2",
  "game_notes": "Wrist-worn holographic chronometer accurate to 1 second per standard year. Dozen+ built-in holographic displays for time (standard or 30 local timekeeping standards), temperature and vital info. Deluxe models allow personalized holographic messages up to 15cm tall, recorded on standard holographic recorders and downloaded via computer cable.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.35"
 },
 {
  "name": "zZip Personal Transponder Ring",
  "category": "Sensors",
  "cost": "100-500 (varies by setting design)",
  "availability": "2",
  "game_notes": "Decorative ring with miniature signal tracker. Each pair uniquely coded to its own frequency. Very Easy sensors roll to locate transponder signal within 200m radius. Available in various precious and semi-precious stone settings.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.36"
 },
 {
  "name": "Raflkind Radiation Deflection Pin",
  "category": "Personal Defense",
  "cost": "250-500",
  "availability": "2",
  "game_notes": "Personal ornamentation energy deflector available as rings, broaches and scarabs. Generates particle field screening out low-level radiation. Adds +1D to survival rolls concerning low-level radiation. Does not apply to high-energy radiation but warning alarm sounds if levels exceed specified amounts. Miniature power cell replaced after 50 hours continuous use.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.36"
 },
 {
  "name": "Consolidated Learning Systems Emotion Suppressant ES23",
  "category": "Personal Defense",
  "cost": "750",
  "availability": "3",
  "game_notes": "Disguised as lapel ornamentations. Generates continuous variable frequency soothing waves (frequency varies by species). Detects signs of anxiety and increases intensity to maintain calm. Must be worn 24-30 hours for calibration to wearer's life function rhythms. Adds +2D to willpower rolls to resist emotional impulses. Could conceivably help resist torture (no effect on Force abilities). Uses micro-power cells.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.36"
 },
 {
  "name": "Traxes Ultrawave Sight Enhancer",
  "category": "Cybernetics",
  "cost": "12,500 (excludes implantation surgery)",
  "availability": "4",
  "game_notes": "Metallic headband with ultrasonic wave motion sensory system feeding input directly into user's brain. 'Paints' a 3D sonic graph of surroundings — crystal clear black-and-white image. Easy sensors roll to calibrate after implantation. Very Easy Perception roll periodically for normal use. 50m operating range, works in all conditions except severe electrical disturbances.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.37"
 },
 {
  "name": "Saldalith Veridicator 200",
  "category": "Sensors",
  "cost": "4,000",
  "availability": "4, R",
  "game_notes": "Skill: Sensors: personal sensors. Disguised as arm band with Falasian liquid crystal inset. Subtle lie detector detecting minute physiological changes from stress. Easy sensors roll for normal use. 5m range within 60-degree arc. Acts as Perception check 4D+2 to detect falsehoods. Target aware of scans can make willpower roll to control biorhythms and disguise lies. Pulsating pressure nodes on underside signal changes. Illegal to use without consent in some systems; not admissible in Imperial courts.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.37"
 },
 {
  "name": "Fabreth Anti-Shock Blanket",
  "category": "Medical",
  "cost": "250 (20-40 to replenish medicines)",
  "availability": "2",
  "game_notes": "Skill: First aid. Emergency blanket administering fast-acting medicines to any portion of a patient's body. Medicine dispersal controlled by medical computer or datapad linked to blanket's computer relay. Use medpac rules but reduce difficulties by one level. Single use before medicines must be replenished.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.38"
 },
 {
  "name": "Nilar Field Cauterizer",
  "category": "Medical",
  "cost": "200 (50 when sold to Rebel Alliance)",
  "availability": "3",
  "game_notes": "Pen-like device (16cm) emitting small low-frequency laser that cauterizes and disinfects bleeding wounds. Effective against cuts, scrapes, abrasions, minor lacerations and minor slug-thrower wounds. Ineffective for internal injuries. Heals minor wounds, removing stun damage due to bleeding only (GM discretion). Nilar Med/Tech secretly sells to the Rebel Alliance at reduced price.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.38"
 },
 {
  "name": "Chiewab ECM-598 Customized Medical Backpack",
  "category": "Medical",
  "cost": "600",
  "availability": "2",
  "game_notes": "Skill: First aid. Advanced medical kit with computer-assisted diagnostics. All components Easy first aid unless noted. Contents: Hand-Held Diagnostic Scanner (Easy first aid or Moderate sensors — vital signs, injury specifics, recommended procedures). Medicines (anesthetics, blood pressure, respiration, pulse regulation for common species). Emergency Procedures Database (Easy computer programming/repair — quick reference treatment procedures). Filtration Mask (oxygen supply, connectable to other atmospheric compound bottles). Heat Closure Packs (pressurized sealant bandages, cauterize/sterilize wounds up to 10cm). Laser Scalpel (Difficult first aid). Medicine Dispenser (Moderate first aid, loadable with various medicines). Portable Repulsor-Stretcher (collapsible, supports up to 150kg). Pressure Cuffs (5-30cm diameter inflatable chambers). Sterile Heating Cloth (1.6m x 0.75m). 2 Universal Plasma Fluid Sacks (Moderate first aid, IV plasma stabilization).",
  "source": "WEG40025 Galladinium's Fantastic Technology p.39"
 },
 {
  "name": "Synthtech MDS-50 Medical Diagnostic Scanner",
  "category": "Medical",
  "cost": "75",
  "availability": "1",
  "game_notes": "Skill: First aid. Hand-held personal medical scanner operable over wide range of species norms. Select diagnostic mode or punch in specific parameters. Easy first aid for basic overall physical condition readouts. Moderate first aid to scan for specific ailments. Identifies current physical abnormalities and suggests probable causes but does not recommend treatment. Difficulties adjusted for unusual or hard-to-detect conditions.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.39"
 },
 {
  "name": "Hadrassi Plasma Protein Replicator PFG-700",
  "category": "Medical",
  "cost": "5,500",
  "availability": "3",
  "game_notes": "Skill: First aid. Emergency blood synthesizer using proteins from local organic materials to synthesize stabilizing plasma serums. Requires genetic sample (skin, hair or blood) from patient. Difficult first aid roll to prepare tissue/blood sample and match with local organics for synthesis. Produces up to 2 liters of blood substitute per hour. Not a long-term substitute for actual blood type.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.39"
 },
 {
  "name": "Praxen Portable Survival Pod PSP-278",
  "category": "Medical",
  "cost": "13,500",
  "availability": "3",
  "game_notes": "Skills: First aid, computer programming/repair. 2m long cylinder with swing-open central tube. Computer-guided step-by-step activation for novice users. Incapacitated/Wounded patient: Easy computer programming/repair + Moderate first aid. Mortally Wounded patient: Moderate computer programming/repair + Difficult first aid. Successful activation stabilizes patient (will not worsen) as long as power generator supplies the pod.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.40"
 },
 {
  "name": "Athakam II Med Unit",
  "category": "Medical",
  "cost": "3,000",
  "availability": "2",
  "game_notes": "Computerized medical cot (2.5m x 1m x 1m) with articulated limbs and display/input panel. Self-contained unit providing care when medpac is insufficient and medical droid/surgeon unavailable. First aid 5D, medicine 1D. Diagnoses patient condition in 1 minute using either skill. Successful diagnosis triggers appropriate treatments (medicines, antibiotics, anti-viral, anti-toxin). Failed diagnosis displays 'Diagnosis Indeterminable' with likely problems and statistical probability. A 2-1B or other medical droid interfacing with the unit receives +2D to first aid and +1D to medicine.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.40"
 },
 {
  "name": "Xarnin Replar Splint GRS-600",
  "category": "Medical",
  "cost": "200",
  "availability": "2",
  "game_notes": "Skill: First aid. Creates miniature suspension field to immobilize and relieve pressure on damaged bone. Limited movement possible once activated. Easy first aid for normal placement. Moderate for multiple or compound fractures.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.40"
 },
 {
  "name": "Sluissi Gravitic Pressure Bandage SGB-543",
  "category": "Medical",
  "cost": "750",
  "availability": "2",
  "game_notes": "Skill: First aid. Hollow metal cylinder with inflatable cloth lining. Connected to medical datapad, applies micro-repulsor fields of differing strengths to compress damaged arteries without affecting surrounding tissues. Prevents internal bleeding complications. Easy first aid for proper placement. Wounded patients act as unwounded; Incapacitated patients act as Wounded. Injury remains but patient can move. Patient can be moved carefully once in place.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.40"
 },
 {
  "name": "SyntheCure Spray Plasto-Cast",
  "category": "Medical",
  "cost": "35",
  "availability": "1",
  "game_notes": "Skill: First aid. One-handed pistol-spray applying fine chemical mist that instantly solidifies. Additional applications increase pressure for chemical pressure bandage or tourniquet. Safe and non-toxic, removable with reactant chemical washes (included). Easy first aid for proper application (Moderate survival may substitute in emergencies). Adds +2 to character's next healing roll. Covers 50cm x 20cm area. Single use, cannot be refilled. Adjustable emission tip controls spray width.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.41"
 },
 {
  "name": "Ulqib BX-333 BioRecorder",
  "category": "Luxury Goods",
  "cost": "5,000 (50 per holocube)",
  "availability": "3",
  "game_notes": "Personal recording system using a matrix of sensors to capture feelings and emotions by recording user's respiration, brain waves and bio-functions alongside holographic recording. Captures not just words but the feelings and intentions behind them. Playback conveys the emotional state of the recorder to the viewer.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.42"
 },
 {
  "name": "Kamperdine CSC-5000 Body Glove",
  "category": "Luxury Goods",
  "cost": "700",
  "availability": "3",
  "game_notes": "Climate-controlled body glove fitting like a second skin. Network of tiny feedback sensors keeps user comfortable in any condition. Climate controls and reactant reservoirs in ornamental waistband. Pre-set variables for seasonal change and atmospheric density. Upper torso to foot coverage. Adds +1 to survival or stamina rolls in harsh environmental conditions.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.42"
 },
 {
  "name": "Meredex Bubble Cloak EMS-90",
  "category": "Survival Gear",
  "cost": "800",
  "availability": "2",
  "game_notes": "Emergency shelter cloak that rapidly inflates into 2m diameter cocoon with self-sealing entrance flap and 2 hours of atmosphere. Easy Dexterity roll for removal and inflation within 30 seconds. Puncture and heat resistant, opaque bubble has STR 1D+2 to resist damage and atmosphere loss.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.42"
 },
 {
  "name": "MerenData Credit Chip Bio-Encoder",
  "category": "Security",
  "cost": "2,500",
  "availability": "3, R or X",
  "game_notes": "Biological credit chip encryption. Uses owner's genetic sample to replicate a culture of organisms coating the credit chip surface. Neutral-reactive to owner's genetic code. Unauthorized handlers trigger immediate response: discoloration and 4D stun damage. Easy first aid roll to properly encode genetic sample.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.43"
 },
 {
  "name": "Seselin Cyduct E-23 Chemical Booster",
  "category": "Medical",
  "cost": "1,250",
  "availability": "3, F/R/X",
  "game_notes": "Skill: First aid. Interdermal injection system worn on waist/shoulder strap. Micro-sonic vibration injectors deliver chemicals through skin without pain or marks. Configurable for time-released or continuous feed. Holds up to 10 doses. Easy first aid for first-time setup. Available serums (prescription only): DiMatolin (100/dose, 1hr, negates DEX penalties in high gravity up to 1.4G). Elisinandrox (250/dose, 10hr, +1D+1 STR/stamina vs radiation sickness). Greshollpolyforim (150/dose, 3hr, negates STR penalties in high gravity up to 2G). Haladreshin (200/dose, 8hr, +1D PER and related skills, neurological stimulant). Requilisant (200/dose, 6hr, negates DEX penalties in low/zero gravity).",
  "source": "WEG40025 Galladinium's Fantastic Technology p.43"
 },
 {
  "name": "MerenData IPI-1000 Electronic ID Display",
  "category": "Security",
  "cost": "450",
  "availability": "2, possibly F",
  "game_notes": "Skill: Security. Holographically scans and stores documents up to 30cm x 20cm (up to 12 documents). Data coded under 10 security levels with personal access codes. Displays holos of documents on request while originals remain locked away. Recognized by all major Imperial agencies and banking institutions. Easy security roll to scan documents. Only certified government officials may perform scans. Imperial agencies have standard code override for accessing secured data. Storage of improperly registered or altered materials subject to fine and/or criminal investigation.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.44"
 },
 {
  "name": "Alliwon Vennoc-x Chronometer with Hidden Compartment",
  "category": "General Equipment",
  "cost": "50 (wrist), 65 (belt version)",
  "availability": "1",
  "game_notes": "Chronometer with hidden compartment released by pressing chrono-programming controls in specified order. Wrist version: 4cm x 4cm compartment. Belt version: 8cm x 6cm x 3cm deep. Can hide credits, identification, datachips, vials or anything that fits.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.44"
 },
 {
  "name": "Iyranis Gravity Belt",
  "category": "Survival Gear",
  "cost": "500",
  "availability": "3",
  "game_notes": "Skill: Repulsorlift operation. Waist belt that activates gravity pulses in emergency free-fall situations, slowing velocity for a gentle landing. Other items can be normally attached to the belt.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.44"
 },
 {
  "name": "Arantha OTM-900 Orbital Transmission Monitor",
  "category": "Communications",
  "cost": "550",
  "availability": "2",
  "game_notes": "Skill: Communications. Subspace receiver with instantaneous reception up to 15 light-years. Easy to Very Difficult communications roll to find specific frequencies (planetary customs fairly easy; Imperial military channels carefully hidden). Decrypting scrambled codes or translating languages requires separate skills.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.45"
 },
 {
  "name": "Willienk RTDS-1000 Remote Text Data Scanner",
  "category": "General Equipment",
  "cost": "750",
  "availability": "2",
  "game_notes": "Skill: Communications. Scans hard copy documents and transmits via unit interface cable through standard comlink or comm system to remote host computer at any distance. Single or multiple file storage/retrieval, multiple copies and downloadings. Automatic data verification ensures integrity. Very Easy communications to scan; Easy communications to transmit.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.45"
 },
 {
  "name": "Mahled Servo Slippers",
  "category": "Jet Packs",
  "cost": "2,500 per pair (foot/leg or hand/arm)",
  "availability": "3",
  "game_notes": "Repulsorlift assisted leg and arm braces using muscle stimulators, repulsor compensators and movement servos. On high gravity worlds: foot/leg braces alone negate Movement penalties and cut Dexterity penalties by 2 pips. Hand/arm braces alone cut Dexterity penalties by 2 pips. Both pairs together completely negate all Dexterity penalties. Also helps impaired individuals with motor skills.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.45"
 },
 {
  "name": "Paradour Signature Scent Synthesizer",
  "category": "Luxury Goods",
  "cost": "1,500 (150 refills)",
  "availability": "3",
  "game_notes": "Computerized fragrance synthesizer and replicator. Replicates any desired fragrance custom-tailored to mood and tastes. Thousands of stock fragrances, mix and match ingredients. Stores up to 1 million custom creations. Some fragrances may contain pheromonal additives inducing strong effects — 'victims' may suffer willpower penalties to resist infatuation or effects of command, con, persuasion and similar skills. Characters with chemistry background may concoct substances with various physiological or psychological effects.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.46"
 },
 {
  "name": "Paretaine Sound Bubble SNS-600",
  "category": "Sensors",
  "cost": "300",
  "availability": "3",
  "game_notes": "Skill: Sensors. Easy sensors roll for normal operation. Passive mode: 360-degree field out to 5m — sounds outside the radius are absorbed, only sounds within the bubble are heard. Active mode: 60-degree arc out to 10m — dampens sound waves, preventing any aural vibrations from being sensed by live or automated detectors.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.46"
 },
 {
  "name": "MicroThrust Clockwatcher Wrist Chronometer",
  "category": "General Equipment",
  "cost": "50 (+10 thermo sensor, +10 gravity sensor, +30 atmosphere sensor, +50 comlink, +50 droid linkup)",
  "availability": "1",
  "game_notes": "Maintains Standard Galactic time plus up to 50 local timekeeping methods/zones. Alarm, stopwatch and countdown functions. Water-sealed to 20m depth. Options: thermo sensor (temperature), gravity sensor (local gravity vs standard), atmosphere sensor (complete analysis, scans for lethal gas concentrations), comlink (2km range), droid linkup (requires comlink, constant communication with one droid via audio or viewscreen display).",
  "source": "WEG40025 Galladinium's Fantastic Technology p.46"
 },
 {
  "name": "Consolidated Learning Synoptic Teacher",
  "category": "General Equipment",
  "cost": "10,500 (200-1,000 per information module)",
  "availability": "3",
  "game_notes": "Subconscious teaching system transferring data directly to brain at subconscious level. Painless 15-30 minute procedure. Easy to Very Difficult Perception roll to absorb material (varies by technical/cultural sophistication). Success grants +1D to +3D in a skill or specialization if character's skill is below 5D (including attribute). User may benefit from each module only once. GM adjusts costs, difficulties, bonuses and limits as desired. WARNING: Also used as a subconscious brainwashing tool by Imperial Intelligence and other organizations to plant post-hypnotic suggestions without knowledge or consent.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.47"
 },
 {
  "name": "Consolidated Learning Systems Transliterator",
  "category": "Communications",
  "cost": "1,200 (includes 500 common languages, +500 per additional 500-language module)",
  "availability": "3",
  "game_notes": "Skill: Communications. Language interpretation unit designed for social situations — translates slang phrases in context with suggested diplomatic or devastating replies at the press of a button. Easy communications roll to select up to 20 languages to track. Effective to 10m range, focuses on nearest sounds first. Phrase translations display until manually cleared or after preset delay up to 15 seconds. Database contains 500 common languages and dialects.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.47"
 },
 {
  "name": "Sarno Home Spheroids Simulator",
  "category": "Recreation",
  "cost": "500",
  "availability": "2",
  "game_notes": "Holographic spheroids simulator — officially sanctioned by the Interstellar Professional Spheroids Association. Features: customized image selection, game storage and replay, black hole options, 2/3+ player versions and automated computer opponents. Maneuvers use thrown weapons skill; GM sets target difficulties or uses opposed rolls.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.48"
 },
 {
  "name": "Wethrenn Declination Holographic Game",
  "category": "Recreation",
  "cost": "3,500",
  "availability": "3",
  "game_notes": "Mental holographic game — maneuver a TIE fighter through a holographic asteroid field using thought-controlled headset controllers while eluding opponent's vessel from the opposite side. Up to 8 players, computer opponents, and adjustable difficulty (Very Easy to Heroic+). Characters use starfighter piloting and starship gunnery or Perception. Combat uses opposed skill rolls with terrain modifiers.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.49"
 },
 {
  "name": "Corgorlath Master-Grav 1000 Grav Boots",
  "category": "Recreation",
  "cost": "550 (pair)",
  "availability": "2",
  "game_notes": "Repulsorlift field boots allowing rapid maneuvering along planes 45-180 degrees opposite normal gravity. Move up to 20m per turn, max altitude 150m. Relatively quiet. Maneuvers use powersuit operation skill with varying difficulties.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.50"
 },
 {
  "name": "Lakan DHS-2 Holomatic Dejarik Set",
  "category": "Recreation",
  "cost": "1,500 (100 per additional grandmaster module)",
  "availability": "2",
  "game_notes": "Skill: Scholar: dejarik (Knowledge). Holographic dejarik system housed in circular table-sized mount. 10 types of playing pieces in static and live-action modes. AI based on Lakan engine (2nd place at Galactic Core Interzonals). Replicate playing styles of 50+ grandmasters. Pieces range 5-30cm height. Passive mode records moves instantly; live-action mode shows animated piece movement and combat. The classic holographic board game — as seen aboard the Millennium Falcon.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.51"
 },
 {
  "name": "Plescinia CS-Mark 10 Imperial Combat Simulator",
  "category": "Recreation",
  "cost": "350",
  "availability": "2",
  "game_notes": "Skill: Tactics. Holographic combat simulator from the 'Great Battles of the Empire' series. 12 stock historical simulations plus scenario editor for custom historical or hypothetical engagements. Play against opponent or computer. Micro-manage individual units or direct entire assault groups — fighters, repulsor tanks, walkers and elite troops. Remote access links for multiple players. Easy computer programming/repair to install. Tactics rolls vary by scenario difficulty.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.51"
 },
 {
  "name": "Dendratis Bio-Cocoon",
  "category": "Security",
  "cost": "2,000",
  "availability": "3",
  "game_notes": "Biological containment system — 1.5 sq meter foldable cloth with dormant microorganisms. Remote-activated: organisms swarm over victim, leeching bio-electrical energy to form a cocoon. Victim makes brawling parry to avoid: Moderate (up to 150kg), Easy (151-300kg), Very Easy (301-450kg), no effect over 450kg. Failure: -1D DEX penalty and 1D stun damage immediately. Each subsequent turn: brawling parry difficulty increases one level, DEX penalty increases -1D, stun damage increases +1D. Fully cocooned when DEX penalty matches/exceeds character's DEX or stun knocks them out. Favorite of big-game hunters for live capture.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.53"
 },
 {
  "name": "CEC Copycat Pod",
  "category": "Ship Equipment",
  "cost": "10,000 (plus permit fees)",
  "availability": "3, F or R",
  "game_notes": "Skill: Sensors. Full spectrum ECM device disguised as standard probe/launcher. Ties into ship's sublight drive and navigation, analyzes transponder signature and flight dynamics. When launched, mimics parent vessel's characteristics to lure pursuers. Works with starfighters and small transports (cargo 100 metric tons or less). Max Space speed 6. To distinguish from real ship: Difficult sensors on passive/scan, Moderate on search, Easy on focus. Failed roll = both ships appear real.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.53"
 },
 {
  "name": "Gandorthral Oxidizer",
  "category": "Survival Gear",
  "cost": "350",
  "availability": "2",
  "game_notes": "Molecular oxygen extractor resembling a re-breather with waist-mounted filtration unit connected to standard breather mask. Extracts oxygen from methane, ammonia and other gas atmospheres using miniaturized ram-jet filtration. Up to 4 hours on full power pack charge (1 hour recharge). Used by scouts and planetary prospectors. Requires local atmospheric pressure not too great.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.54"
 },
 {
  "name": "Idellian ILF-5000 Lifeform Scanner",
  "category": "Sensors",
  "cost": "3,500",
  "availability": "2",
  "game_notes": "Skill: Sensors. Range: 500m/1km/1.5km. Pre-programmed to distinguish among thousands of common animal lifeforms. Provides number of lifeforms, rate and direction of movement, body temperature, mass and respiration rates. Informs user if body function parameters match database lifeforms. Alien species or beast riding roll may identify specific lifeform (GM discretion).",
  "source": "WEG40025 Galladinium's Fantastic Technology p.55"
 },
 {
  "name": "Lardanis MFCR-200 Micro Fusion Reactor",
  "category": "Survival Gear",
  "cost": "750",
  "availability": "1",
  "game_notes": "Backpack-sized medium fusion power generator. Supplies power equivalent to most medium generators. For powering perimeter shields, equipment and other field devices in the wilderness.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.55"
 },
 {
  "name": "Zone Control Repulsorlift Grappling Gun",
  "category": "Survival Gear",
  "cost": "1,200 (gun), 1,000 (wrist)",
  "availability": "2",
  "game_notes": "Skill: Firearms. Scale: Character. Combines traditional grappling gun with repulsorlift generators. Mode 1: fires grapple normally. Mode 2: thumb joystick controls ascent rate and direction (30 second repulsorlift charge). Automatic winch for ascent. Gun version: oversized blaster shape, standard blaster pack (10 launches), 200m molecularly-reinforced line, winch 20m/sec, supports 200kg, optional harness recommended. Wrist version: forearm mount with snap-up handle, hold-out blaster pack (5 launches), 100m line, 10m/sec ascent, supports 150kg, nearly concealable. 1st place winner in reader submissions.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.55"
 },
 {
  "name": "Vercanne FOE-2000 Oxygen Extractor",
  "category": "Survival Gear",
  "cost": "350",
  "availability": "2",
  "game_notes": "Meter-long probe extracting oxygen molecules from sub-surface water deposits or water vapor trapped in rock formations. Modulated wave pulses separate water and oxygen from surrounding rock, drawing it to surface into storage tank. Functions in vacuum and weightless conditions. Useful in desert and other environments.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.57"
 },
 {
  "name": "Vectac Versatex Survival Suit",
  "category": "Survival Gear",
  "cost": "900 (+150 armor plates)",
  "availability": "2",
  "game_notes": "All-purpose all-terrain suit of micro-capillaried Versatex fabric. Handles temperature extremes (-30°C to 100°C), moisture and pressure. Waterproof and tear resistant, recycles wearer's moisture in dry environments. Backpack heating/cooling/air filter unit with belt controls. Camouflage system: belt color sensor reads desired color, tinted dyes injected into micro-capillaries — color change takes ~2 minutes (+1D sneak). 5 base dye colors (5 credits each) blendable for custom colors. Helmet: open-faced or sealed, built-in comlink, breath mask and glowlamp. Optional strap-on armor plates for torso/legs/arms (+1D physical, +2 energy, retains color-changing capability).",
  "source": "WEG40025 Galladinium's Fantastic Technology p.57"
 },
 {
  "name": "Cybersoft Neural Control Collar",
  "category": "Security",
  "cost": "600 (collar + basic computer), 300 (collar only), 1,000 (multi-collar computer)",
  "availability": "2, R",
  "game_notes": "Animal control device overriding voluntary muscles via nervous system attack (7D stun, resisted by target's Strength). Must be fitted around the neck. Two parts: armored collar with lock (6-digit combination, simple power cell) and control computer (wrist-mounted bracelet, central computer, or droid modification). Computer has keypad and 400-word instruction memory. Central computer controls up to 50 collars; remote range 5km. Collar moved out of range forces wearer to return and inflicts 6D pain damage. Droids and lifeforms without central nervous system are immune. Outlawed on many planets, especially Core Worlds.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.58"
 },
 {
  "name": "Veredictas Bith Computer Retinal Lock",
  "category": "Security",
  "cost": "1,200",
  "availability": "3",
  "game_notes": "Skill: Computer programming/repair. Retinal scanning system providing authorized file access only to pre-scanned retinal patterns. Disguises scans as colorful mathematical pattern startup display using wafer-thin scanner mimicking the monitor. Does not deny system access — only locks specific coded files. Transmits intruder's retinal pattern to authorities. Easy computer programming/repair to install. Only a retinal falsification system bypasses security.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.59"
 },
 {
  "name": "Dalabar SDS-632 Surveillance Detector",
  "category": "Security",
  "cost": "450 (+175 for NI-632 noise inhibitor)",
  "availability": "2",
  "game_notes": "Skill: Sensors. Palm-sized surveillance scanner sweeping 30 cubic meters in under 60 seconds. Scans 5D sensors skill. Detects monitoring carrier waves in infrared, microwave and localized subspace bands. Also scans for motion tracking signal emissions. Adjustable filters for upper electromagnetic spectrum. Optional NI-632 noise inhibitor blankets 10m diameter area with sonic disturbances matching detected sensor frequencies. Note: Imperial Intelligence sensors may operate outside calibrated parameters — no guarantee against Imperial devices.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.59"
 },
 {
  "name": "Servenidain Data Bio-Encryptor",
  "category": "Security",
  "cost": "25,000",
  "availability": "3, R",
  "game_notes": "Skill: Computer programming/repair. Palm-sized chip encoding system — data written to micro-chip encased in jell-like capsule that is physically ingested. Chemical coating prevents digestion; time-released reactant triggers regurgitation (settable 20-200 hours). Stores up to 3 full data chips. Easy computer programming/repair to download/encrypt or upload at destination. Heroic sensors roll to detect ingested capsule. Can be used on unsuspecting couriers by disguising as medicine or hiding in food — courier honestly passes lie detection. Used by couriers throughout the Empire.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.60"
 },
 {
  "name": "Kystallio Eye in the Sky RMD-20",
  "category": "Security",
  "cost": "800",
  "availability": "2",
  "game_notes": "Skill: Sensors. Portable free-flight monitor sphere (30cm diameter) with micro-repulsorlift nodes. Easy sensors for initial activation; free flight is automatic. 20+ programmable flight patterns or auto-heel mode following subject at up to 100m. Max altitude 200m, max range 10km, 5 hours flight per charge. Audio and visual sensor feeds to host computer or datapad within 100m radius. Move: 45; 130 kmh. Dozen+ modulated frequencies available.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.60"
 },
 {
  "name": "Vreshann Gotal Electromagnetic Scanner",
  "category": "Sensors",
  "cost": "2,500",
  "availability": "3",
  "game_notes": "Skill: Sensors. Detects electromagnetic radiation from central nervous systems and other sources. Moderate sensors to detect emissions within 100m radius. Difficult sensors to detect lifeforms behind walls or blocking materials. Returns visual outline approximations — provides number of persons, approximate size and mass. Useful for mining rescue and security.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.61"
 },
 {
  "name": "Dalesepp HPD-100 Heat Pod",
  "category": "Sensors",
  "cost": "70",
  "availability": "3, F",
  "game_notes": "Skill: Thrown weapons. Grenade-sized heat generator deployable manually or via grenade launcher. Emits ever-widening zone of light and heat blanketing up to 20m radius for 15 minutes. Increases difficulty of heat-based sensors or tracking by two levels (varies by type, distance, other factors). Operator slips under cover of the more powerful generators.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.61"
 },
 {
  "name": "Crozo At-cyb Husher Mike",
  "category": "Communications",
  "cost": "3,000 (mike + receiver, implantation surgery extra)",
  "availability": "3",
  "game_notes": "Vocal communications implant amplifying vocal cord vibrations and converting to electrical impulses. Short-range transponders visible on either side of neck transmit on preset frequency to monitored receiver. Allows virtually silent, unobservable communication in crowded environments. 1km effective range. One-way voice transmission only — does not cover reception.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.61"
 },
 {
  "name": "Varge Corp. PS-xqt9s Pocket Scrambler",
  "category": "Security",
  "cost": "800",
  "availability": "4, F or R",
  "game_notes": "Skill: Security. Attaches to any standard comms device. Modulates frequencies with scrambling signals — requires matching PS-xqt9s and correct encryption code to decode. 5+ million possible codes. Easy communications for normal use. Without matching device and code: Very Difficult to Heroic communications to decrypt.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.62"
 },
 {
  "name": "Culcanis Tagger",
  "category": "Security",
  "cost": "250",
  "availability": "3, F",
  "game_notes": "Remote surveillance tracking device disguised as a datapad stylus. Fires a 5mm transponder dart up to 5m via pressurized gas (silent). Attached transponder sends intermittent high-frequency signal (~every 5 minutes) to receiver up to 1.2km away. Hard for unauthorized receivers to detect due to intermittent broadcast. 40 standard hours of operation.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.62"
 },
 {
  "name": "Aratech R82 Jump Boots",
  "category": "Jet Packs",
  "cost": "150 (25 fuel)",
  "availability": "2",
  "game_notes": "Combination repulsor and rocket unit lighter than standard rocket packs. Allows boosted jumps or simple gliding. Thin strong cables drawn to knee attach to pants/leggings for support. Control cables reach user's hands. Repulsorlift engine: 1 hour before power pack replacement, 35m flight ceiling, Move 18. Rocket jets: 5 blasts of fuel, up to 35m vertical or 50m horizontal per blast.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.62"
 },
 {
  "name": "zZip PSG-8487 View Masker",
  "category": "Security",
  "cost": "2,500 (50 power cells, 100 sensor alarm module)",
  "availability": "3, F/R/X",
  "game_notes": "Voice code activated portable distortion field (1m diameter). Makes visual or audio scans virtually impossible — waves of color and visual static obscure activity inside the field.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.63"
 },
 {
  "name": "Ulkop SVC-700 Voice Scrambler",
  "category": "Security",
  "cost": "600",
  "availability": "3",
  "game_notes": "Disguised as ornamental jewelry. Low-frequency distortion field modulates and breaks up voice patterns through distortion layers. Conversation unrecognizable at more than 3m range. Normal speech within close proximity unaffected.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.63"
 },
 {
  "name": "Falkenharn Mark V14 Repulsorlift Baggage Cart",
  "category": "General Equipment",
  "cost": "250 (+50 infrared guide stick)",
  "availability": "2",
  "game_notes": "Collapsible repulsor carrier supporting up to 500kg. Extended: 1.75m long, 80cm wide, 65cm tall. Adjustable flotation height up to 1.8m. Hinged left/right sections fold for storage. Manual steering handle or optional infrared guide stick (10m hands-off range). 100 standard hours continuous lift per charge. Three miniaturized repulsor inducers with inertia dampeners for near-frictionless motion.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.64"
 },
 {
  "name": "Saladar PED-21 Distress Beacon",
  "category": "Survival Gear",
  "cost": "200",
  "availability": "2",
  "game_notes": "Portable emergency distress beacon. Two long-life micro-power cells (10+ year shelf life). Transmits personal transponder codes on all major subspace frequencies up to 5 light-years range. Automatic on activation. Moderate communications roll to calibrate for non-standard bandwidths (Imperial military, government-restricted, Alliance frequencies).",
  "source": "WEG40025 Galladinium's Fantastic Technology p.64"
 },
 {
  "name": "Valerenn Emergency Inflation Shelter",
  "category": "Survival Gear",
  "cost": "500",
  "availability": "2",
  "game_notes": "Skill: Survival. Pre-activation: flat 1m square, 25cm thick cube. Inflates to 2.5m diameter hemispherical shelter housing humanoids up to 2.25m. Fully oxygenated and temperature-controlled. Solar energy filaments in highly reflective fabric charge batteries for up to 10 hours continuous use. Zippered entryway. Very Easy survival to activate.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.65"
 },
 {
  "name": "Dardrennis EMS-500 Energy Capacitor",
  "category": "Survival Gear",
  "cost": "1,500",
  "availability": "2",
  "game_notes": "Skill: Survival. Meter-long tube with collector plates for obtaining energy from sources and transferring to other devices. Max capacity: power one landspeeder for 3 hours, or one blaster pistol for 100 shots, or one comlink for 15 hours. Easy Technical for normal operation (difficulty varies by energy type/amount). Collection time: 1 hour from large generator to 6 days from low-power blaster packs for full charge.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.65"
 },
 {
  "name": "SuriTech Ezl Food Analyzer",
  "category": "Survival Gear",
  "cost": "250 (+50 additional data chips, +100 customized chips)",
  "availability": "2",
  "game_notes": "Skill: Survival. Personal food analyzer — place sample in receptacle, sensors compare to pre-loaded digestive needs. Readout within seconds. Base model identifies 5,000+ food and drink selections. Up to 5 additional data chips for specific planetary environments or cuisines. Customized datachips available for food allergies and specific component warnings. Very Easy survival for normal operation.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.65"
 },
 {
  "name": "Bank of the Core GCC-1000 Currency Converter",
  "category": "General Equipment",
  "cost": "300 (+50 additional sector modules)",
  "availability": "2",
  "game_notes": "Skill: Business. Pocket-sized currency conversion computer. Seconds to calculate exchange rates. Interface adaptor clips for tie-in to BOC customer computer net at thousands of offices (free exchange rate uploads). Base unit covers Core, Inner Rim and Colonies sectors. Additional sector modules available. Reinforced shielded alloy construction resists radiation storms. Easy business for normal operation.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.66"
 },
 {
  "name": "Givin Emergency Vacuum Seal EVS BBS-909",
  "category": "Ship Equipment",
  "cost": "750 (up to 50cm), 1,000 (51-100cm)",
  "availability": "3",
  "game_notes": "Emergency hull breach seal — circular disk slapped against interior hull. Micro-molecular grip-locks hold in place, then electrical current stimulates Givin micro-organisms that multiply in vacuum to form extremely durable biological seal within seconds. Neutralizing current prevents uncontrolled growth. Application: Moderate Strength (fight atmosphere pull) + Moderate Dexterity (reach controls while resisting pull). Sizes from 10cm to 1m diameter.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.66"
 },
 {
  "name": "Salasetti Heat Induction Staff",
  "category": "Survival Gear",
  "cost": "300",
  "availability": "2",
  "game_notes": "Skill: Survival. Meter-long staff using multiple low-intensity heating lasers to excite molecules of any material touched. Outer surface remains intact while internally excited atoms generate heat over several hours. By-product of Rodian weapon technology. Power cells last up to 40 hours continuous use. Easy survival for normal operation. Accidental contact with heating point: 3D damage. Ideal for arctic worlds or thin atmosphere conditions.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.66"
 },
 {
  "name": "Celextrian SNDF-12 Navigation/Direction Finder",
  "category": "Survival Gear",
  "cost": "850",
  "availability": "2",
  "game_notes": "Skill: Survival. Triangulates orbital satellite communications to pinpoint location within 20m. Works in inclement weather, day or night (requires planet with standard location protocol satellites). Pre-program surface area maps. Easy survival for normal operation. Moderate survival to use local broadcast networks instead of orbital satellites.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.67"
 },
 {
  "name": "Cirenian SW-95 Portable Message Transceiver",
  "category": "Communications",
  "cost": "400",
  "availability": "2",
  "game_notes": "Skill: Communications. Extended range hand-held transceiver using modulated broadcast relays to piggyback on traditional mass media signals. Receivable by host comm stations over 2,000km range. Performance previously available only in vehicle-sized units. Range dependent on local conditions — inadequate outlets or extreme weather can hamper or eliminate capability.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.67"
 },
 {
  "name": "Pretormin WPR-60 Water Purifier",
  "category": "Survival Gear",
  "cost": "100",
  "availability": "1",
  "game_notes": "Skill: Survival. Fill external canister with water — microbiological filtering, heating and radiation elements eliminate 99%+ harmful bacteria, viruses and contaminants. Average filtration 5 minutes (varies by source). Solar rechargeable. Very Easy survival for normal use. Unit notifies when cleansing is complete.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.67"
 },
 {
  "name": "Arakyd Mark X Executioner Gladiator Droid",
  "category": "Droids",
  "cost": "35,000",
  "availability": "",
  "game_notes": "Height: 2.4m. Move: 11. DEX 2D (archaic guns 4D, blaster 5D, brawling parry 6D, dodge 5D, energy weapons 3D+2, flamethrower 5D, melee combat 6D+1, missile weapons 5D+2), KNO 1D (alien species: anatomy 4D, intimidation 6D), MEC 1D, PER 1D, STR 4D (brawling 7D), TEC 1D. Tread locomotion. Armor plating (+3D all areas except underside and retractable arms). Retractable arm weapons: flechette canister (6D, 5m blast, 0-5/10/15), neuronic whip (STR+3D), flame projector (5D, 0-3/5/10), vibro-saw blades (STR+2D, continuous damage), blaster rifle (5D+2, 0-5/20/50), missile launcher (6D, 0-5/15/30), force pike (STR+2D), sonic cannon (4D+2, 0-2/5/10), spiked club (STR+1D), vibro-axe (STR+2D+1). Can be equipped with control overrides for owner operation — incidents of rogue droids killing their masters have occurred.",
  "source": "WEG40042 Han Solo and the Corporate Sector Sourcebook p.131"
 },
 {
  "name": "BlasTech Blaster Repair Kit",
  "category": "Tools",
  "cost": "500",
  "availability": "2",
  "game_notes": "Skill: Blaster repair. Deluxe kit containing: pulse adaptor module tester, collimator beam focuser, prismatic crystal aligner, static pulse adaptor modules, energy converter valve (Heter-Valve), multiple gas valve nozzles, power pack recharger, universal power pack, power pack cables, spare gas container, spare trigger cable and variable pressure adjustor.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.79"
 },
 {
  "name": "BlasTech Ramtek Portable Clip Recharger",
  "category": "Weapon Accessories",
  "cost": "750",
  "availability": "4, F or R",
  "game_notes": "Thin metal box with 6 slots and adaptors for common power pack types. Charges clips in 2 minutes (red indicator when full). 30 clips per charge, then needs 3 hours recharging from a power generator. Also manufactured as CapTech Stealthpak and Power Products Ultrapaq.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.79"
 },
 {
  "name": "CapTech Blaster Target Board",
  "category": "Weapon Accessories",
  "cost": "450 (+50 sighting coupling)",
  "availability": "2",
  "game_notes": "2.5m x 2.5m flexible sheet with targeting computer (scomp-linked). Projects variable targets (number, size, speed). User sets blaster to stun with mounted sighting coupling. GM may allow regular target practice to reduce blaster skill advancement cost.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.79"
 },
 {
  "name": "Novaless Ultrasonic Sighting System",
  "category": "Weapon Accessories",
  "cost": "800",
  "availability": "2",
  "game_notes": "Skill: Blaster. Sonic targeting scope using paired ultrasonic beam emitters at different frequencies. Data analyzer constructs 3D 'sound pattern' unaffected by light or heat levels. Adds +1D+2 to blaster rolls when aiming for one round (stacks with normal aiming bonus). Max effective range 50m.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.79"
 },
 {
  "name": "Zemphyr Passive Defender PD-0943 Dampener Aerosol",
  "category": "Personal Defense",
  "cost": "600",
  "availability": "3, F or R",
  "game_notes": "Skill: Missile weapons. Hand-held canister (10cm x 4cm) spraying courenth and ves gas mixture that disperses blaster bolts on contact. 3 charges per canister. Each charge produces visible cloud covering 1 cubic meter — any blaster bolt entering cloud loses -1D damage. Cloud lasts 1 minute (heavy winds/precipitation may disperse). Additional charges in same area have no added benefit.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.80"
 },
 {
  "name": "Kirgalis Abyssin Grafting Patch",
  "category": "Medical",
  "cost": "5,000",
  "availability": "3",
  "game_notes": "Skill: First aid or medicine. Regenerative cells from Abyssin biochemical extracts. Difficult first aid or Easy medicine to apply. Newly formed skin cells grow in/around wound area like bacta immersion. Healing times: Wounded 2D hours, Incapacitated 8D hours, Mortally Wounded 2D days. Single use. Lifeforms with natural regenerative abilities have high resistance to effects.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.85"
 },
 {
  "name": "MerenData Duros Bio-Comp 1000",
  "category": "Computers",
  "cost": "35,000",
  "availability": "4",
  "game_notes": "Skill: Computer programming/repair. High-performance personal computer integrating biological elements. Microscopic lifeforms in fluid culture react to electrical impulses for mass data storage. Photosynthetic biological entities provide power — virtually independent of external power sources. Hybrid organic compounds in liquid-display unit for 2D and holographic imaging. Bio-chemical fiber stores encoded instructions via modified protein combinations. Larger than average personal computer but maintenance-free.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.87"
 },
 {
  "name": "Traxes Implant Communicator",
  "category": "Cybernetics",
  "cost": "12,500 (operation costs and license vary)",
  "availability": "4, F/R/X",
  "game_notes": "Implanted transmitter (~10mm diameter) for sub-vocalized transmission. Mastoid process receivers intercept broadcasts perceived as 'voices in head.' Sub-vocalized sentences broadcast by 'thinking aloud.' Supports EM carrier waves, digital microwave, and coded ultrawave linkages for automatic business datafeeds. 1km max broadcast range. Remains in place for several standard years without maintenance.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.88"
 },
 {
  "name": "Mon Calamari Aquatic Computer ACCA-1dx000",
  "category": "Computers",
  "cost": "8,000",
  "availability": "4",
  "game_notes": "Skill: Computer programming/repair. Designed for liquid environments using rare Calamari sea minerals for self-generated electrical power — no external power source needed. Non-corrosive native elements for circuitry. Organic microorganism display works up to 200m depth. Calamari crystalline data receptors. Internal battery allows 10 hours use out of water. Advanced AI modules add +1D to computer programming/repair rolls. Also prized as art/collectible.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.88"
 },
 {
  "name": "Golan Personal Combat Threat Analyzer",
  "category": "Sensors",
  "cost": "4,500",
  "availability": "4",
  "game_notes": "Provides +1D bonus to tactics or search rolls in specific combat situations. Identifies attacker locations, determines number and types of weapons in use, evaluates situation and suggests where next attack will come from. Results given as percentage probability of attack type, origin and predicted future action. GM can use to give hints without divulging all facts.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.88"
 },
 {
  "name": "Tranthebar Racing Harness TRHA-300",
  "category": "Recreation",
  "cost": "12,500 (tranthebar, training and registration fees separate)",
  "availability": "4, F",
  "game_notes": "Skill: Beast riding: tranthebar. Cybernetic avian symbiotic control harness — series of external cyber-attachments linking minds of rider and tranthebar mountain ripper, sharing emotions and thoughts. Adds +2D to beast riding: tranthebar. Four-week training program required for amateur certification. Physical and mental exams recommended before purchase.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.91"
 },
 {
  "name": "Simcronics MagnaForce Security Shield",
  "category": "Shields",
  "cost": "25,000 (pair), 2,500 (custom power cells)",
  "availability": "4, F/R/X",
  "game_notes": "Skill: Melee parry. Wrist-worn defensive force field generator (sold in pairs). Easy melee parry to activate — generates 50cm diameter round shield. Use melee parry vs attacker's blaster roll: if higher, shield blocks (bolt must then roll vs shield's 4D defensive field to penetrate). If lower, shield wasn't placed in time. Power cell lasts 2 minutes before draining. Character scale equivalent of starship shields.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.92"
 },
 {
  "name": "HD 5-D Hyperdrive Booster",
  "category": "Ship Equipment",
  "cost": "16,500+",
  "availability": "4, X",
  "game_notes": "Skill: Space transports repair. Forces more energy through hyperdrive to increase speed. Only for freighters with 100 metric ton cargo capacity or less. One booster per engine, permanently configured once activated. Successful install reduces hyperdrive multiplier: x10+ becomes x4, x9-x6 becomes x3, x5-x3 becomes x2, x2 becomes x1, x1 becomes x0.5. Failed install = catastrophic mishap immediately or next hyperdrive use. HD 5-D has limited use — roll a die each activation; if number rolled is less than times compressor has been used, entire hyperdrive shuts down (Very Difficult repair to restore). Further hyperdrive modifications after install double all mishap modifiers. +2 mishap modifier per Galaxy Guide 6 rules.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.93"
 },
 {
  "name": "KDY N-CRAB Nav Computer Bypass",
  "category": "Ship Equipment",
  "cost": "Not available for sale",
  "availability": "4, X",
  "game_notes": "Skill: Astrogation. Prototype navigation computer bypass allowing mid-hyperspace route changes without exiting hyperspace. Three astrogation rolls required: 1) Duplicate original course (one difficulty level lower than original). 2) Chart new course from upcoming point to new destination (Very Easy to Heroic). 3) Feed new course through N-CRAB into nav computer (one level lower than roll 2). Failing rolls 1-2: N-CRAB won't function. Failing roll 3: hyperspace mishap. Programming takes 1/10 of new route travel time. WARNING: Interferes with nav computer — requires Moderate astrogation or computer programming/repair to 'clean.' Without cleaning: 2nd use = all difficulties +1 level, 3rd = +2 levels, continuing to Heroic+10/+20/+30.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.93"
 },
 {
  "name": "Illicit Electronics SB-20 Slicer Droid",
  "category": "Droids",
  "cost": "12,000",
  "availability": "4, X",
  "game_notes": "Height: 1m. Move: 5. DEX 1D, KNO 1D, MEC 1D (communications 5D), PER 1D (forgery 4D), STR 1D, TEC 1D (computer programming/repair 7D, security 5D). Modified R-series shell (appears as ordinary R1/R2 unit). Equipped: three wheeled legs (one retractable), heavy grasper arm (lifting 2D), fine work grasper arm, 0.3m video sensor (360°), arc welder (1D-5D, 0.3m), circular saw (4D, 0.3m), video display, holographic projector/recorder, fire extinguisher, internal cargo area (20x8cm), CodeRifter encryption equipment, Securityviolator programming. Illegal throughout the Empire — Imperial Intelligence has acquired some for its own use.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.94"
 },
 {
  "name": "Arakyd RLG Guardian Droid System",
  "category": "Droids",
  "cost": "3,000 (new), 1,000 (used), 300 (remote unit)",
  "availability": "3, F/R/X",
  "game_notes": "Height: 15cm. Move: 10. Two-droid system — one active on repulsorlift, one recharging in waist pouch. DEX 2D (blaster 4D), KNO 1D (tactics 2D), MEC 1D (sensors 3D), PER 2D (search 4D), STR 1D, TEC 1D. Internal blaster pistol (4D, 0-5/15/25). FullSpec sensors (passive 25/0D, scan 35/1D, search 40/1D+2, focus 3/2D+2). Self-destruct (8D 0-2m, 6D 3-4m, 4D 5-6m, 2D 7-9m) — activates if master injured. 12 hours operation per charge, swap every 10 hours, 2 hour recharge. Recharging unit needs weekly 12-hour recharge from generator. Optional remote unit (+300 credits) for 500m control with audio/visual feed. Popular with crimelords as last line of defense.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.95"
 },
 {
  "name": "Illicit Electronics Flesh Camouflage System",
  "category": "Security",
  "cost": "11,000 (computer), 500 (retinal contacts, non-reusable), 500 (SecCard), 250 (flesh kit, non-reusable)",
  "availability": "4, X",
  "game_notes": "Skill: Computer programming/repair. Advanced disguise system producing retinal contacts, chemical SecCards (10 image sheets, no electronics), and flesh disguises (face/hands/feet replicas with voice modifier). Requires target's retina, fingerprint and genetic scan data. Computer programming/repair roll determines quality: Very Easy = unusable. Easy = +2 to security/con. Moderate = +1D. Difficult = +1D+2. Very Difficult = +2D. Heroic = +3D. Bonuses apply to retinal scans (security), card scans (security), and impersonation (con) respectively.",
  "source": "WEG40025 Galladinium's Fantastic Technology p.95"
 },
 {
  "name": "SeaScape Aquasuit (Hardshell)",
  "category": "Environmental Suits",
  "cost": "400",
  "availability": "1 (coastal), 2 (elsewhere)",
  "game_notes": "Skill: Swimming. Heavy diving suit providing internal atmosphere with 6 hours of air. Reinforced ribbing adds +2 pips to Strength for damage resistance only. Allows dives to 200 meters. Flippers and onboard propulsion unit add 2D to swimming skill with underwater Move rate of 12. Dexterity codes only reduced on land. Helmet comlink with 2km range. Swimming rolls not needed for basic underwater movement.",
  "source": "WEG40129 Adventure Journal 1 p.62"
 },
 {
  "name": "Haileycraft MaxMode Flotation Lifter",
  "category": "Tools",
  "cost": "1,000",
  "availability": "3 (coastal), 4 (elsewhere)",
  "game_notes": "Skill: Repulsorlift operation. Underwater mechanical device for lifting light loads to the surface. Two large air canisters mounted on a frame with a sling. Water let in to sink, expelled to raise. About 1 meter long, can be dismantled to fit in a small boat hull. Can handle supply crates plus three divers on straps, plus the driver sitting atop. No motor — goes up and down only, must be manually maneuvered.",
  "source": "WEG40129 Adventure Journal 1 p.62"
 },
 {
  "name": "WBY-102 FirstMate Sailing Droid",
  "category": "Droids",
  "cost": "3,000",
  "availability": "2",
  "game_notes": "Height: 1.6m. Move: 8. DEX 3D, KNO 1D, MEC 2D (communications 4D, sailed nautical vessel operation 4D), PER 1D (command 4D — tutorial only), STR 1D, TEC 2D (first aid 3D+1, sailed nautical vessel repair 4D). Humanoid torso with two legs and arms, emergency inflatable flotation bag, comlink, two visual/auditory sensors (Human range), vocabulator, AA-1 Verbobrain. Inertia compensators add 1D to Dexterity when maintaining footing on a swaying deck. Waterproof hard-impact plastic shell (deep blue). Speaks in a deep, confident voice. Programmed for steadfast calm in sea storms but less effective in violent combat situations.",
  "source": "WEG40129 Adventure Journal 1 p.63"
 },
 {
  "name": "Arakyd 6G2 Explorer Droid",
  "category": "Droids",
  "cost": "",
  "availability": "",
  "game_notes": "Move: 10 (swimming). DEX 1D, KNO 1D, PER 1D (search 4D), STR 1D, TEC 1D. Long-range sensor (+2D to search for moving objects). Designed for exploration and survey work; these units on Alluuvia have been refitted for underwater use.",
  "source": "WEG40132 Operation: Elrood p.45"
 },
 {
  "name": "Line Master Tube-Launched Grapple (TLG)",
  "category": "Survival Gear",
  "cost": "800",
  "availability": "2, R",
  "game_notes": "Skill: Missile weapons, Easy difficulty to fire on target. Portable one-shot grappling device — hollow cylinder 40cm long, 10cm diameter resembling a lightsaber hilt. Features pop-up targeting sight, retractable hand grip with braking controls for controlled descents, 100 meters of ultra-light micro-woven synthecord, small motorized winch (Move: 2, pulls full load at 25 meters/minute), and hook for harness cable. Grapple head is a flat flexible disk coated with strong bonding agent that instantly bonds on impact. Line supports up to 200 kg.",
  "source": "WEG40132 Operation: Elrood p.85"
 },
 {
  "name": "Quarren Industrial Q-4 Borer Droid",
  "category": "Droids",
  "cost": "",
  "availability": "",
  "game_notes": "Height: 0.7m, diameter 0.2m. Move: 10. DEX 1D (blaster: drilling laser 1D+2), KNO 1D, MEC 2D (repulsorlift operation 2D+1), PER 2D (search: metals/ores 2D+1), STR 1D, TEC 1D. Repulsorlift engine. Heavy-duty drilling laser (0.5m range, 6D damage, -1D penalty against moving targets). Sensor apparatus (+1D to search for ores/metals). Minimal auditory/visual sensors (-1D to visual/auditory search rolls).",
  "source": "WEG40133 Classic Adventures Vol 3 p.74"
 },
 {
  "name": "SoroSuub Tracker GPS Module (Automap)",
  "category": "Tools",
  "cost": "2,000",
  "availability": "2",
  "game_notes": "Skill: Computer programming/repair. Virtually impossible to get lost while linked to an orbiting data source (ship sensors or weather satellite). Relays accurate position, local weather, moving objects, and navigational hazards. Link requires Moderate computer programming/repair roll once per hour to maintain. Unlinked mode extrapolates position with marginal accuracy (Difficult roll for accurate data). Roughly datapad-sized with backlit hinged display, adjustable brightness, and navigational bearing indicator showing direction and speed.",
  "source": "WEG40137 Instant Adventures"
 },
 {
  "name": "Rebel Alliance Treaty Recording System",
  "category": "Sensors",
  "type": "Holorecorder",
  "cost": "Not available for sale",
  "availability": "4, X",
  "game_notes": "Skill: Holorecorder operation: Rebel Alliance Treaty Recording System. Main image lens has fixed focus with only one focal length (depth of visual field 1.1 to 3 meters), making it unusable for long-range surveillance. Images processed through RTZ security filters and recorded on a WORM chip so data cannot be modified. Mounted on gyroscopically stabilized tripod. Only available to Rebel Alliance diplomatic teams.",
  "source": "WEG40138 Classic Adventures Vol 4"
 },
 {
  "name": "MicroThrust Holo Ore Scanner FR9",
  "category": "Sensors",
  "type": "Semi-portable ore scanner",
  "cost": "5,000",
  "availability": "3",
  "game_notes": "Requires sensors or mining skill roll. Roughly a 1-meter cube with controls and holographic projector on upper side. Accurately locates veins and pockets of metal and mineral ores, displaying findings as a 3D hologram. Search range: 1km/1D, Focus range: 500m/2D. Various factors can decrease range and accuracy. Often used by planners to map richest veins in limited operations or when mining crystals.",
  "source": "WEG40077 Flashpoint! Brak Sector p.25"
 },
 {
  "name": "MineSystems Emergency Life Support Unit",
  "category": "Survival Gear",
  "type": "Emergency life support system",
  "cost": "3,000",
  "availability": "2",
  "game_notes": "Portable emergency life support for underground mining. Rectangular box 2m x 1m x 1.5m. Activated by pressing large buttons on each side, or automatically if sensors detect dangerous air quality drop. Provides oxygen for 10 people for 30 hours (10 masks). Contains emergency supplies, two medpacs, and automatic distress beacon. Standard backup system in Lish XI mining stations.",
  "source": "WEG40077 Flashpoint! Brak Sector p.25"
 },
 {
  "name": "GLD-M General Labor Mining Droid",
  "category": "Droids",
  "type": "Modified Industrial Automaton GLD-M General Labor Droid/Mining",
  "cost": "4,000 (comes with 2 modules, additional modules 500 each)",
  "availability": "",
  "game_notes": "Height: 2m. Move: 8/9. DEX 2D, KNO 1D, MEC 2D (mining 3D), PER 2D (search 3D), STR 4D (lifting 6D), TEC 2D. Humanoid body with visual/infrared/audio sensors, vocabulator, reinforced frame for heavy lifting, RapidProgram module system for quick reprogramming. Can be programmed for anything from aiding scouts to piloting skiffs to debris clearance.",
  "source": "WEG40077 Flashpoint! Brak Sector p.25"
 },
 {
  "name": "MEMD-2 Multi-Environment Mining Droid",
  "category": "Droids",
  "type": "Industrial Automaton Multi-Environment Mining Droid MEMD-2",
  "cost": "20,000",
  "availability": "",
  "game_notes": "Size: 20m long, 8m tall. Move: 4/6. DEX 1D, KNO 2D, MEC 3D (mining 5D), PER 1D+2 (search 3D), STR 3D (lifting 5D), TEC 1D. Two all-terrain tracks, 2 high-intensity beam drills, 1 high-power cutting laser, 4 heavy lifting arms, 1 repulsorlift conveyor, visual/audio/infrared/night vision sensors, metal and mineral sensors, DataLink transceiver. LMC's most common mining droid, a mobile self-contained mining unit. Operated in fleets directed from recon speeders or mining stations. 72-90 hours between recharges.",
  "source": "WEG40077 Flashpoint! Brak Sector p.26"
 },
 {
  "name": "Arakyd Resource Probe Droid",
  "category": "Droids",
  "type": "Arakyd Resource Probe Droid",
  "cost": "10,000",
  "availability": "",
  "game_notes": "Height: 1.5m. Move: 12/13. DEX 2D, KNO 3D (planetary systems 4D+2, scholar: mineral resources 5D), MEC 3D (astrogation 5D, communications 6D, sensors 6D, space transports 5D), PER 3D (investigation 6D, search 6D), STR 2D, TEC 2D. Multi-purpose appendages, repulsorlift engine (5m ceiling), investigation/analytical computer, planetary sensor array (passive 10/0D, scan 100/1D, search 500/2D, focus 10/3D), recording devices, broad-band transceiver, mineral sampler, beam drill (3D, 5m range, lower 180-degree arc). Uses standard probot hyperdrive pod for transport. Scans for mineral concentrations from orbit, lands for detailed sampling and analysis.",
  "source": "WEG40077 Flashpoint! Brak Sector p.26"
 },

 {
  "name": "Starscream-9 Ion Drive",
  "category": "Ship Equipment",
  "type": "Sienar Fleet Systems Starscream-9 Ion Drive",
  "cost": "500,000 (plus installation)",
  "availability": "X",
  "game_notes": "Military ion engine, originally designed for starfighters. Space: 12 (atmosphere 450; 1,300 kmh). Weight: 24 metric tons. Possession is a class one infraction in Imperial space. Double all difficulties for modifying this drive and double all modifiers when rolling for mishaps. Available on the black market only.",
  "source": "WEG40063 Galaxy Guide 6: Tramp Freighters p.38"
 },
 {
  "name": "Boshaa-C'hi Ion Drive",
  "category": "Ship Equipment",
  "type": "Kuat Drive Yards Boshaa-C'hi Ion Drive",
  "cost": "100,000 (plus installation)",
  "availability": "X",
  "game_notes": "Older model military ion engine, originally designed for starfighters. Space: 10. Weight: 18 metric tons. Possession is a class one infraction in Imperial space. Double all difficulties for modifying this drive and double all modifiers when rolling for mishaps. Available on the black market only.",
  "source": "WEG40063 Galaxy Guide 6: Tramp Freighters p.38"
 },
 {
  "name": "Corellian Evader-GT Ion Drive",
  "category": "Ship Equipment",
  "type": "Corellian Evader-GT Ion Drive",
  "cost": "50,000 (plus installation, 5,000 Imperial permit)",
  "availability": "F",
  "game_notes": "Scaled-down version of a military ion drive. Space: 8. Weight: 16 metric tons. Requires a 5,000 credit Imperial permit to legally possess. Double all difficulties for modifying this drive and double all modifiers when rolling for mishaps beyond a +1 modification.",
  "source": "WEG40063 Galaxy Guide 6: Tramp Freighters p.38"
 },
 {
  "name": "Incom Starslinger Ion Drive",
  "category": "Ship Equipment",
  "type": "Incom Starslinger Ion Drive",
  "cost": "20,000 (plus installation, 500 Imperial permit)",
  "availability": "F",
  "game_notes": "Commercial propulsion system. Space: 6. Weight: 12 metric tons. Requires a 500 credit Imperial permit. Double all difficulties for modifying this drive and double all modifiers when rolling for mishaps beyond a +1 modification.",
  "source": "WEG40063 Galaxy Guide 6: Tramp Freighters p.39"
 },
 {
  "name": "Verpine Asteroid Pusher Ion Drive",
  "category": "Ship Equipment",
  "cost": "3,000 (plus installation)",
  "availability": "2",
  "game_notes": "Minimal-output ion drive designed by Verpine engineers for asteroid tugs and orbital platforms. Space: 1. Weight: 2 metric tons. Extremely reliable at low speeds. Often found on mining barges and construction rigs.",
  "source": "House Rule (extrapolated from WEG40063)"
 },
 {
  "name": "Corellian Engineering CL-2 Ion Drive",
  "category": "Ship Equipment",
  "cost": "5,000 (plus installation)",
  "availability": "1",
  "game_notes": "Budget hauler-class ion drive. Space: 2. Weight: 4 metric tons. Designed for bulk freighters and barges where speed is secondary to reliability and low cost.",
  "source": "House Rule (extrapolated from WEG40063)"
 },
 {
  "name": "Corellian Engineering CL-3 Ion Drive",
  "category": "Ship Equipment",
  "cost": "7,500 (plus installation)",
  "availability": "1",
  "game_notes": "Light commercial ion drive. Space: 3. Weight: 8 metric tons. Standard propulsion for medium transports and cargo shuttles. Reliable and easy to service.",
  "source": "House Rule (extrapolated from WEG40063)"
 },
 {
  "name": "SoroSuub Boav Ion Drive",
  "category": "Ship Equipment",
  "type": "SoroSuub Boav Ion Drive",
  "cost": "10,000 (plus installation)",
  "availability": "2",
  "game_notes": "Simple, economical ion drive unit. Space: 4. Weight: 10 metric tons. Mostly compatible with other SoroSuub hardware. Technicians installing a Boav unit face an increase of one difficulty level in their space transports repair roll for non-SoroSuub ships.",
  "source": "WEG40063 Galaxy Guide 6: Tramp Freighters p.39"
 },
 {
  "name": "Corellian Engineering CE-5 Ion Drive",
  "category": "Ship Equipment",
  "cost": "15,000 (plus installation)",
  "availability": "2",
  "game_notes": "Fast commercial ion drive. Space: 5. Weight: 11 metric tons. Popular upgrade for freighter captains who need to outrun pirates or make tight delivery windows.",
  "source": "House Rule (extrapolated from WEG40063)"
 },
 {
  "name": "Sienar Fleet Systems Sprint-7 Ion Drive",
  "category": "Ship Equipment",
  "cost": "35,000 (plus installation, 2,500 Imperial permit)",
  "availability": "2, F",
  "game_notes": "Military patrol-grade ion drive. Space: 7. Weight: 14 metric tons. Standard propulsion on SFS patrol craft and light corvettes. Requires Imperial permit. Double all difficulties for modifying this drive beyond a +1 modification.",
  "source": "House Rule (extrapolated from WEG40063)"
 },
 {
  "name": "FreiTek FT-9 Ion Drive",
  "category": "Ship Equipment",
  "cost": "80,000 (plus installation)",
  "availability": "3, R",
  "game_notes": "Fighter-grade ion drive designed for high-performance starfighters. Space: 9. Weight: 17 metric tons. Developed by FreiTek Inc. for next-generation combat craft. Restricted — military procurement only without black market contacts.",
  "source": "House Rule (extrapolated from WEG40063)"
 },
 {
  "name": "Incom W-11 Ion Drive",
  "category": "Ship Equipment",
  "cost": "300,000 (plus installation)",
  "availability": "4, X",
  "game_notes": "Elite interceptor-class ion drive. Space: 11. Weight: 22 metric tons. Derived from Incom's advanced starfighter propulsion program. Possession is a class one infraction in Imperial space. Double all difficulties for modifying this drive and double all modifiers when rolling for mishaps.",
  "source": "House Rule (extrapolated from WEG40063)"
 },
 {
  "name": "Volatile x0.5 Hyperdrive (Salvaged)",
  "category": "Ship Equipment",
  "cost": "50,000 (plus 15,000 installation)",
  "availability": "X",
  "game_notes": "Salvaged x0.5 hyperdrive pulled from a wreck. Weight: 20 metric tons. Extremely prone to failure — might explode. Very illegal. Finding a willing mechanic is a challenge in itself.",
  "source": "WEG40063 Galaxy Guide 6: Tramp Freighters p.39"
 },
 {
  "name": "Temperamental x0.5 Hyperdrive (Patched)",
  "category": "Ship Equipment",
  "cost": "60,000 (plus 15,000 installation)",
  "availability": "X",
  "game_notes": "Patched-together x0.5 hyperdrive. Works, usually. Weight: 20 metric tons. Needs constant babysitting — frequent recalibration between jumps. Very illegal.",
  "source": "WEG40063 Galaxy Guide 6: Tramp Freighters p.39"
 },
 {
  "name": "Unreliable x0.5 Hyperdrive (Refurbished)",
  "category": "Ship Equipment",
  "cost": "70,000 (plus 15,000 installation)",
  "availability": "X",
  "game_notes": "Refurbished x0.5 hyperdrive. Decent bones, questionable wiring. Weight: 20 metric tons. Prone to intermittent failures under sustained use. Very illegal.",
  "source": "WEG40063 Galaxy Guide 6: Tramp Freighters p.39"
 },
 {
  "name": "Serviceable x0.5 Hyperdrive (Custom-Built)",
  "category": "Ship Equipment",
  "cost": "80,000 (plus 15,000 installation)",
  "availability": "X",
  "game_notes": "Custom-built x0.5 hyperdrive. Proper job, still not factory-spec. Weight: 20 metric tons. Reasonably reliable with regular maintenance. Very illegal.",
  "source": "WEG40063 Galaxy Guide 6: Tramp Freighters p.39"
 },
 {
  "name": "Dependable x0.5 Hyperdrive (Precision)",
  "category": "Ship Equipment",
  "cost": "90,000 (plus 15,000 installation)",
  "availability": "X",
  "game_notes": "Precision-built x0.5 hyperdrive — best you'll get outside a military yard. Weight: 20 metric tons. Reliable performance under normal conditions. Very illegal.",
  "source": "WEG40063 Galaxy Guide 6: Tramp Freighters p.39"
 },
 {
  "name": "SoroSuub Griffyn-XTG Hyperdrive (x1)",
  "category": "Ship Equipment",
  "type": "SoroSuub Griffyn-XTG Lightspeed Unit",
  "cost": "15,000 (plus installation, 5,000 Imperial permit)",
  "availability": "F",
  "game_notes": "Commercial x1 hyperdrive. Weight: 18 metric tons. Generally used aboard SoroSuub vessels — non-SoroSuub vessels suffer an increase of one difficulty level during installation. Operating at this speed without proper documentation and permit is punishable under Imperial law with stiff fines and possible license suspension.",
  "source": "WEG40063 Galaxy Guide 6: Tramp Freighters p.39"
 },
 {
  "name": "Corellian Avatar-10 Hyperdrive (x2)",
  "category": "Ship Equipment",
  "type": "Corellian Avatar-10",
  "cost": "10,000 (plus installation)",
  "availability": "2",
  "game_notes": "Commercial x2 hyperdrive. Weight: 15 metric tons. An attempt at a universal hyperdrive system compatible with any type of craft. Space transports repair rolls to install an Avatar-10 receive a +1D bonus. The most common speed hyperdrive found aboard tramp freighters — reliable, cheap, and fast enough.",
  "source": "WEG40063 Galaxy Guide 6: Tramp Freighters p.39"
 },
 {
  "name": "Incom Horizon-Hopper Hyperdrive (x3)",
  "category": "Ship Equipment",
  "type": "Incom Horizon-Hopper Light Stardrive",
  "cost": "7,000 (plus installation)",
  "availability": "2",
  "game_notes": "Commercial x3 hyperdrive. Weight: 12 metric tons. Any ship relying on a x3 or slower hyperdrive for main propulsion risks great delays in shipping routes.",
  "source": "WEG40063 Galaxy Guide 6: Tramp Freighters p.39"
 },
 {
  "name": "Rendili StarDrive ATX-5 Hyperdrive (x4)",
  "category": "Ship Equipment",
  "type": "Rendili StarDrive ATX-5",
  "cost": "4,000 (plus installation)",
  "availability": "1",
  "game_notes": "Commercial x4 hyperdrive. Weight: 10 metric tons. Generally used as a backup rather than a main drive at this class.",
  "source": "WEG40063 Galaxy Guide 6: Tramp Freighters p.39"
 },
 {
  "name": "SFS Lifesaver 1000 Hyperdrive (x5)",
  "category": "Ship Equipment",
  "type": "Sienar Fleet Systems Lifesaver 1000 Reserve Hyperdrive",
  "cost": "2,500 (plus installation)",
  "availability": "1",
  "game_notes": "Commercial backup x5 hyperdrive. Weight: 8 metric tons. Only recommended as a backup hyperdrive and must be overhauled after each use.",
  "source": "WEG40063 Galaxy Guide 6: Tramp Freighters p.39"
 },
 {
  "name": "Backup Hyperdrive (x6)",
  "category": "Ship Equipment",
  "type": "Generic Budget Backup Unit",
  "cost": "2,000",
  "availability": "1",
  "game_notes": "Emergency backup hyperdrive, class x6. Weight: 7 metric tons. Slow but reliable enough for an emergency jump to the nearest system. Must be overhauled after each use.",
  "source": "Mock-up (house rule)"
 },
 {
  "name": "Backup Hyperdrive (x8)",
  "category": "Ship Equipment",
  "type": "Generic Economy Backup Unit",
  "cost": "1,500",
  "availability": "1",
  "game_notes": "Emergency backup hyperdrive, class x8. Weight: 6 metric tons. Bare-minimum hyperspace capability for emergency retreats. Must be overhauled after each use.",
  "source": "Mock-up (house rule)"
 },
 {
  "name": "Backup Hyperdrive (x10)",
  "category": "Ship Equipment",
  "type": "Generic Surplus Backup Unit",
  "cost": "1,000",
  "availability": "1",
  "game_notes": "Emergency backup hyperdrive, class x10. Weight: 5 metric tons. Cheap surplus unit — gets you there eventually. Must be overhauled after each use.",
  "source": "Mock-up (house rule)"
 },
 {
  "name": "Backup Hyperdrive (x12)",
  "category": "Ship Equipment",
  "type": "Generic Salvage Backup Unit",
  "cost": "750",
  "availability": "1",
  "game_notes": "Emergency backup hyperdrive, class x12. Weight: 4 metric tons. Bottom-shelf backup — barely functional but better than nothing. Must be overhauled after each use.",
  "source": "Mock-up (house rule)"
 },
 {
  "name": "Backup Hyperdrive (x15)",
  "category": "Ship Equipment",
  "type": "Generic Junkyard Backup Unit",
  "cost": "500",
  "availability": "1",
  "game_notes": "Emergency backup hyperdrive, class x15. Weight: 3 metric tons. Absolute bottom of the barrel — pray to the Force it gets you somewhere. Must be overhauled after each use.",
  "source": "Mock-up (house rule)"
 },
 {
  "name": "Capital Power Plant Retrofit",
  "category": "Ship Equipment",
  "type": "Aftermarket Capital-Grade Reactor",
  "cost": "150,000",
  "availability": "2, X",
  "game_notes": "Replaces stock starfighter-scale power plant with a capital-grade reactor. Weight: 40 metric tons (stock unit ~10 mt, net +30 mt). Enables mounting of capital-scale weapons and shields on starfighter-scale hulls. Requires Very Difficult space transports repair roll and 2 weeks of drydock installation. Highly restricted — Imperial permit required.",
  "source": "Mock-up (house rule)"
 },
 {
  "name": "Capital Capacitor Shunt",
  "category": "Ship Equipment",
  "type": "Capital-Scale Weapon Capacitor Bypass",
  "cost": "8,000",
  "availability": "2, R",
  "game_notes": "Allows mounting of ONE capital-scale weapon on a starfighter-scale ship without a full reactor retrofit. Weapon can only fire once every 3 rounds due to capacitor recharge. Does not stack — one shunt, one weapon. Requires Moderate space transports repair to install.",
  "source": "Mock-up (house rule)"
 },
 {
  "name": "Fire Control Station",
  "category": "Ship Equipment",
  "type": "Dedicated Targeting Computer Station",
  "cost": "5,000",
  "availability": "2",
  "game_notes": "Scale: Capital. Dedicated fire control station for one weapon type on one fire arc. Weight: 5 metric tons. Raises base fire control to 3D for all fire-linked weapons of the same type within the covered arc (e.g. all turbolasers on the right arc). Does not stack — one station per weapon type per arc. Only applies to fire-linked weapon groups. Add one per arc/type combination needed.",
  "source": "Mock-up (house rule)"
 },
 {
  "name": "Capital Laser Cannon",
  "category": "Ship Equipment",
  "type": "Capital-Scale Laser Cannon",
  "cost": "8,000",
  "availability": "2, R",
  "game_notes": "Scale: Capital. Skill: Capital ship gunnery. Fire Control: 2D. Space Range: 1-3/12/25. Damage: 3D. Weight: 4 metric tons.",
  "source": "Mock-up (derived from ship builder)"
 },
 {
  "name": "Capital Heavy Laser Cannon",
  "category": "Ship Equipment",
  "type": "Capital-Scale Heavy Laser Cannon",
  "cost": "10,000",
  "availability": "2, R",
  "game_notes": "Scale: Capital. Skill: Capital ship gunnery. Fire Control: 2D. Space Range: 1-3/12/25. Damage: 4D. Weight: 5 metric tons.",
  "source": "Mock-up (derived from ship builder)"
 },
 {
  "name": "Capital Light Turbolaser",
  "category": "Ship Equipment",
  "type": "Capital-Scale Light Turbolaser",
  "cost": "10,000",
  "availability": "2, R",
  "game_notes": "Scale: Capital. Skill: Capital ship gunnery. Fire Control: 2D. Space Range: 3-15/35/75. Damage: 3D. Weight: 5 metric tons.",
  "source": "Mock-up (derived from ship builder)"
 },
 {
  "name": "Capital Turbolaser",
  "category": "Ship Equipment",
  "type": "Capital-Scale Turbolaser",
  "cost": "12,000",
  "availability": "2, R",
  "game_notes": "Scale: Capital. Skill: Capital ship gunnery. Fire Control: 2D. Space Range: 3-15/35/75. Damage: 4D. Weight: 6 metric tons.",
  "source": "Mock-up (derived from ship builder)"
 },
 {
  "name": "Capital Heavy Turbolaser",
  "category": "Ship Equipment",
  "type": "Capital-Scale Heavy Turbolaser",
  "cost": "18,000",
  "availability": "2, X",
  "game_notes": "Scale: Capital. Skill: Capital ship gunnery. Fire Control: 2D. Space Range: 3-15/35/75. Damage: 5D. Weight: 8 metric tons.",
  "source": "Mock-up (derived from ship builder)"
 },
 {
  "name": "Capital Double Turbolaser",
  "category": "Ship Equipment",
  "type": "Capital-Scale Double Turbolaser",
  "cost": "25,000",
  "availability": "2, X",
  "game_notes": "Scale: Capital. Skill: Capital ship gunnery. Fire Control: 2D. Space Range: 3-15/35/75. Damage: 6D. Weight: 12 metric tons.",
  "source": "Mock-up (derived from ship builder)"
 },
 {
  "name": "Capital Turbolaser Battery",
  "category": "Ship Equipment",
  "type": "Capital-Scale Turbolaser Battery",
  "cost": "40,000",
  "availability": "2, X",
  "game_notes": "Scale: Capital. Skill: Capital ship gunnery. Fire Control: 1D. Space Range: 3-15/35/75. Damage: 7D. Weight: 16 metric tons. Multi-barrel volley-fire assembly — trades accuracy for raw firepower.",
  "source": "Mock-up (derived from ship builder)"
 },
 {
  "name": "Capital Light Ion Cannon",
  "category": "Ship Equipment",
  "type": "Capital-Scale Light Ion Cannon",
  "cost": "8,000",
  "availability": "2, R",
  "game_notes": "Scale: Capital. Skill: Capital ship gunnery. Fire Control: 2D. Space Range: 1-10/25/50. Damage: 3D (ion). Weight: 3 metric tons.",
  "source": "Mock-up (derived from ship builder)"
 },
 {
  "name": "Capital Ion Cannon",
  "category": "Ship Equipment",
  "type": "Capital-Scale Ion Cannon",
  "cost": "10,000",
  "availability": "2, R",
  "game_notes": "Scale: Capital. Skill: Capital ship gunnery. Fire Control: 2D. Space Range: 1-10/25/50. Damage: 4D (ion). Weight: 4 metric tons.",
  "source": "Mock-up (derived from ship builder)"
 },
 {
  "name": "Capital Heavy Ion Cannon",
  "category": "Ship Equipment",
  "type": "Capital-Scale Heavy Ion Cannon",
  "cost": "15,000",
  "availability": "2, X",
  "game_notes": "Scale: Capital. Skill: Capital ship gunnery. Fire Control: 2D. Space Range: 1-10/25/50. Damage: 5D (ion). Weight: 6 metric tons.",
  "source": "Mock-up (derived from ship builder)"
 },
 {
  "name": "Capital Proton Torpedo Tube (x10)",
  "category": "Ship Equipment",
  "type": "Capital-Scale Proton Torpedo Launcher",
  "cost": "8,000",
  "availability": "2, R",
  "game_notes": "Scale: Capital. Skill: Capital ship gunnery. Fire Control: 3D. Space Range: 2-12/30/60. Damage: 6D. Weight: 3 metric tons. Includes 10-torpedo magazine.",
  "source": "Mock-up (derived from ship builder)"
 },
 {
  "name": "Capital Concussion Missile Tube (x10)",
  "category": "Ship Equipment",
  "type": "Capital-Scale Concussion Missile Launcher",
  "cost": "12,000",
  "availability": "2, X",
  "game_notes": "Scale: Capital. Skill: Capital ship gunnery. Fire Control: 2D. Space Range: 2-5/30/60. Damage: 9D. Weight: 4 metric tons. Includes 10-missile magazine.",
  "source": "Mock-up (derived from ship builder)"
 },
 {
  "name": "Capital Light Tractor Beam",
  "category": "Ship Equipment",
  "type": "Capital-Scale Light Tractor Beam Projector",
  "cost": "8,000",
  "availability": "2",
  "game_notes": "Scale: Capital. Skill: Capital ship gunnery. Fire Control: 2D. Space Range: 1-5/15/30. Strength: 4D. Weight: 4 metric tons.",
  "source": "Mock-up (derived from ship builder)"
 },
 {
  "name": "Capital Tractor Beam",
  "category": "Ship Equipment",
  "type": "Capital-Scale Tractor Beam Projector",
  "cost": "15,000",
  "availability": "2",
  "game_notes": "Scale: Capital. Skill: Capital ship gunnery. Fire Control: 2D. Space Range: 1-5/15/30. Strength: 5D. Weight: 6 metric tons.",
  "source": "Mock-up (derived from ship builder)"
 },
 {
  "name": "Capital Heavy Tractor Beam",
  "category": "Ship Equipment",
  "type": "Capital-Scale Heavy Tractor Beam Projector",
  "cost": "20,000",
  "availability": "2, R",
  "game_notes": "Scale: Capital. Skill: Capital ship gunnery. Fire Control: 2D. Space Range: 1-5/15/30. Strength: 6D. Weight: 8 metric tons.",
  "source": "Mock-up (derived from ship builder)"
 },
 {
  "name": "Ship Shields (1D)",
  "category": "Ship Equipment",
  "cost": "4,000",
  "availability": "",
  "game_notes": "Combined particle and ray/energy shields, equally effective against lasers and missiles. Shield code: 1D. Weight: 6 metric tons. Shields are almost impossible to improve beyond their initial strength.",
  "source": "WEG40063 Galaxy Guide 6: Tramp Freighters p.40"
 },
 {
  "name": "Ship Shields (2D)",
  "category": "Ship Equipment",
  "cost": "10,000",
  "availability": "",
  "game_notes": "Combined particle and ray/energy shields, equally effective against lasers and missiles. Shield code: 2D. Weight: 8 metric tons. Shields are almost impossible to improve beyond their initial strength.",
  "source": "WEG40063 Galaxy Guide 6: Tramp Freighters p.40"
 },
 {
  "name": "Ship Shields (3D)",
  "category": "Ship Equipment",
  "cost": "20,000",
  "availability": "",
  "game_notes": "Combined particle and ray/energy shields, equally effective against lasers and missiles. Shield code: 3D. Weight: 10 metric tons. Shields are almost impossible to improve beyond their initial strength.",
  "source": "WEG40063 Galaxy Guide 6: Tramp Freighters p.40"
 },
 {
  "name": "Ship Shields (4D)",
  "category": "Ship Equipment",
  "cost": "45,000",
  "availability": "3, R",
  "game_notes": "Heavy-duty combined particle and ray/energy shields. Shield code: 4D. Weight: 12 metric tons. Military-grade output typically found on assault yachts and heavy freighters. Requires Imperial permit.",
  "source": "House Rule (extrapolated from WEG40063)"
 },
 {
  "name": "Taim & Bak Kd-3 Light Blaster Cannon",
  "category": "Ship Equipment",
  "cost": "1,000 (plus 30% Imperial permit fee)",
  "availability": "",
  "game_notes": "Fire Control: 1D. Damage: 1D. Weight: 1 metric ton. Relatively weak blaster, usually mounted on lightly armed vessels. Requires Imperial permit (opposed con or bureaucracy roll vs damage code).",
  "source": "WEG40063 Galaxy Guide 6: Tramp Freighters p.40"
 },
 {
  "name": "Kuat Vonak Light Laser Cannon",
  "category": "Ship Equipment",
  "cost": "1,500 (plus 30% Imperial permit fee)",
  "availability": "",
  "game_notes": "Fire Control: 2D. Damage: 2D. Weight: 2 metric tons. Stronger version of the blaster cannon. Requires Imperial permit.",
  "source": "WEG40063 Galaxy Guide 6: Tramp Freighters p.40"
 },
 {
  "name": "Arakyd Tomral Heavy Laser Cannon",
  "category": "Ship Equipment",
  "cost": "3,000 (plus 30% Imperial permit fee)",
  "availability": "",
  "game_notes": "Fire Control: 2D. Damage: 5D. Weight: 4 metric tons. Heavy laser cannon. Requires Imperial permit.",
  "source": "WEG40063 Galaxy Guide 6: Tramp Freighters p.40"
 },
 {
  "name": "Incom W-34t Turbolaser",
  "category": "Ship Equipment",
  "cost": "9,000 (illegal)",
  "availability": "",
  "game_notes": "Fire Control: 3D. Damage: 7D. Weight: 5 metric tons. Heavy ship-mounted laser, usually only on larger ships. Can only fire every other combat round (jury-rigged to freighter). Illegal to mount on a private vessel.",
  "source": "WEG40063 Galaxy Guide 6: Tramp Freighters p.40"
 },
 {
  "name": "Comar f-2 Light Ion Cannon",
  "category": "Ship Equipment",
  "cost": "1,000 (plus 30% Imperial permit fee)",
  "availability": "",
  "game_notes": "Fire Control: 1D. Damage: 2D (ionization). Weight: 0.5 metric tons. Temporarily disables enemy electronics instead of destroying the vessel. Requires Imperial permit.",
  "source": "WEG40063 Galaxy Guide 6: Tramp Freighters p.40"
 },
 {
  "name": "Comar f-4 Medium Ion Cannon",
  "category": "Ship Equipment",
  "cost": "1,500 (plus 30% Imperial permit fee)",
  "availability": "",
  "game_notes": "Fire Control: 2D. Damage: 3D (ionization). Weight: 1 metric ton. Temporarily disables enemy electronics. Requires Imperial permit.",
  "source": "WEG40063 Galaxy Guide 6: Tramp Freighters p.40"
 },
 {
  "name": "Comar f-9 Heavy Ion Cannon",
  "category": "Ship Equipment",
  "cost": "3,000 (plus 30% Imperial permit fee)",
  "availability": "",
  "game_notes": "Fire Control: 4D. Damage: 4D (ionization). Weight: 2 metric tons. Temporarily disables enemy electronics. Requires Imperial permit.",
  "source": "WEG40063 Galaxy Guide 6: Tramp Freighters p.40"
 },
 {
  "name": "Arakyd Hi-fex Proton Torpedo Launcher",
  "category": "Ship Equipment",
  "cost": "2,500 (plus 30% Imperial permit fee)",
  "availability": "",
  "game_notes": "Fire Control: 2D. Damage: 9D. Weight: 2 metric tons. Includes 12-torpedo rack. Replacement torpedoes: 800 credits each. Proton-scattering energy warhead. Torpedoes have no appreciable weight. Requires Imperial permit.",
  "source": "WEG40063 Galaxy Guide 6: Tramp Freighters p.40"
 },
 {
  "name": "Weapon Link Computer",
  "category": "Ship Equipment",
  "cost": "100 per weapon",
  "availability": "",
  "game_notes": "Computer linkage to fire up to 3 identical weapons at same target simultaneously. Linking 2 weapons adds +1D damage, linking 3 adds +2D damage. Weapons must have identical damage codes. Considered a +1 modification on mishap charts.",
  "source": "WEG40063 Galaxy Guide 6: Tramp Freighters p.40"
 },
 {
  "name": "Electro-Photo Receptors (EPRs)",
  "category": "Ship Equipment",
  "cost": "300",
  "availability": "",
  "game_notes": "Ship sensor system. No appreciable weight. See The Star Wars Sourcebook, Second Edition for details.",
  "source": "WEG40063 Galaxy Guide 6: Tramp Freighters p.41"
 },
 {
  "name": "Full Spectrum Transceivers (FSTs)",
  "category": "Ship Equipment",
  "cost": "500",
  "availability": "",
  "game_notes": "Ship sensor system. No appreciable weight. See The Star Wars Sourcebook, Second Edition for details.",
  "source": "WEG40063 Galaxy Guide 6: Tramp Freighters p.41"
 },
 {
  "name": "Dedicated Energy Receptors (DERs)",
  "category": "Ship Equipment",
  "cost": "600",
  "availability": "",
  "game_notes": "Ship sensor system. No appreciable weight. See The Star Wars Sourcebook, Second Edition for details.",
  "source": "WEG40063 Galaxy Guide 6: Tramp Freighters p.41"
 },
 {
  "name": "Life-Form Indicators (LFIs)",
  "category": "Ship Equipment",
  "cost": "800",
  "availability": "",
  "game_notes": "Ship sensor system. No appreciable weight. See The Star Wars Sourcebook, Second Edition for details.",
  "source": "WEG40063 Galaxy Guide 6: Tramp Freighters p.41"
 },
 {
  "name": "Fabritech NightBlind 472 Sensor Jammer",
  "category": "Ship Equipment",
  "type": "Fabritech NightBlind 472",
  "cost": "4,000 (plus installation)",
  "availability": "X",
  "game_notes": "Sensor jamming device. Weight: 1 metric ton. Floods area with static that blinds all sensors. +1D to difficulty to identify ship, but -2D to detect (easier to detect the jamming source). Broadcasts the general location of the jamming ship.",
  "source": "WEG40063 Galaxy Guide 6: Tramp Freighters p.41"
 },
 {
  "name": "Corellian Trickster Sensor Decoys",
  "category": "Ship Equipment",
  "type": "Corellian Trickster Decoys",
  "cost": "2,000 (plus installation)",
  "availability": "F",
  "game_notes": "Starship countermeasures system. Weight: 2 metric tons. Sends out electromagnetic and holo signals identical to the ship. Ejected with a pre-programmed course, max sublight speed 5. +2D to difficulty to determine which sensor reading is the ship and which is the decoy. Single-use (engines burn out after use). Easily detectable but effective at distance. Requires Imperial certification.",
  "source": "WEG40063 Galaxy Guide 6: Tramp Freighters p.41"
 },
 {
  "name": "Solid Fuel Converter",
  "category": "Ship Equipment",
  "cost": "8,000",
  "availability": "",
  "game_notes": "Converts virtually any matter into fuel cell power. Weight: 5 metric tons. Ship can refuel on bulky low-energy materials (oxygen, water, plastics, cellulose/wood, waste) or heavy metals and other high-energy materials. Halves restocking fees at starports, but the captain must personally arrange fuel supplies elsewhere.",
  "source": "WEG40063 Galaxy Guide 6: Tramp Freighters p.41"
 },
 {
  "name": "Atmospheric Scoops",
  "category": "Ship Equipment",
  "cost": "15,000",
  "availability": "",
  "game_notes": "Allows ships to dip into a planet's atmosphere or seas to collect natural resources for recharging power cells. Weight: 15 metric tons. Popular with scout ships.",
  "source": "WEG40063 Galaxy Guide 6: Tramp Freighters p.42"
 },
 {
  "name": "Solar Converters",
  "category": "Ship Equipment",
  "cost": "12,000",
  "availability": "",
  "game_notes": "Huge molecule-thick solar-absorbent sails. Weight: 10 metric tons. Recharges ship's systems in about 15 days in-system, 60 days out-system to fully recharge power cells.",
  "source": "WEG40063 Galaxy Guide 6: Tramp Freighters p.42"
 },
 {
  "name": "Secret Cargo Compartment (Concealed)",
  "category": "Ship Equipment",
  "cost": "200 per ton of cargo hidden",
  "availability": "",
  "game_notes": "Requires a Difficult Perception roll to locate visually, but a scanner detects it immediately. Takes 5 tons of cargo capacity per 1 ton of hidden cargo space. Up to 3 people can fit per ton of space. If more than 20% of cargo space is secret compartments, customs officials will become suspicious.",
  "source": "WEG40063 Galaxy Guide 6: Tramp Freighters p.42"
 },
 {
  "name": "Secret Cargo Compartment (Hidden)",
  "category": "Ship Equipment",
  "cost": "400 per ton of cargo hidden",
  "availability": "",
  "game_notes": "Requires a Very Difficult Perception roll to locate visually; scanner finds it on a Moderate Perception roll. Takes 5 tons of cargo capacity per 1 ton of hidden cargo space. Up to 3 people can fit per ton of space.",
  "source": "WEG40063 Galaxy Guide 6: Tramp Freighters p.42"
 },
 {
  "name": "Secret Cargo Compartment (Scanner Resistant)",
  "category": "Ship Equipment",
  "cost": "1,000 per ton of cargo hidden",
  "availability": "",
  "game_notes": "Requires a Very Difficult Perception roll to locate visually; does not show up on scanners at all. Takes 5 tons of cargo capacity per 1 ton of hidden cargo space. Up to 3 people can fit per ton of space.",
  "source": "WEG40063 Galaxy Guide 6: Tramp Freighters p.42"
 },
 {
  "name": "Automatic Cargo Jettisoning System",
  "category": "Ship Equipment",
  "cost": "500",
  "availability": "",
  "game_notes": "Jettisons any portion of cargo from either secret compartments or main bay. Can be triggered by remote or by timer. Weight: negligible.",
  "source": "WEG40063 Galaxy Guide 6: Tramp Freighters p.42"
 },

 {
  "name": "Conner Net (Type I Restraining Net)",
  "category": "Ship Equipment",
  "cost": "5,000 per canister",
  "availability": "3, R",
  "game_notes": "Starfighter scale. Skill: Starship gunnery. Damage: 10D. Range: 5-25/50/100 (starfighter scale). Ammo: 1 per canister. Difficult starship gunnery roll to activate. Net is 50 meters in diameter. All ships touched by the net suffer +5D penalty to any electrical system (drives, weapons, sensors, ship-integrated communications). Any unprotected person touching a charged net suffers 10D damage every round of contact.",
  "source": "WEG40131 The Thrawn Trilogy Sourcebook p.192"
 },
 {
  "name": "Metal-Crystal Phase Shifter (MCPS) — Quarter-Scale Prototype",
  "category": "Ship Equipment",
  "cost": "Not for sale (Imperial superweapon prototype)",
  "availability": "4, X",
  "game_notes": "Scale: Capital. Skill: MCPS operation. Damage: 5D capital scale (bypasses shields). Range: 3-30/50/300. Fire Rate: 1/5. Crew: 12, skeleton 8/+10. Body: 3D (starfighter scale). Fire Control: 2D. Blast Radius: 300m. The MCPS field alters the crystalline structure of metals, causing them to break down into fine powder. Cannot be blocked by shields. Every ship within the 300m field is equally affected. This quarter-scale prototype (Maw Installation Lab Module A) affects ~1% of target surface area but leaves pinhole structural failures across the entire hull — sufficient to destroy most ships. Uses old Death Star laser-focusing lens; a custom lens would produce full-powered field. Project headed by Doxin.",
  "source": "WEG40114 The Jedi Academy Sourcebook p.68"
 },
 {
  "name": "GenaTech Zeta One Heavy Ion Cannon",
  "category": "Ship Equipment",
  "cost": "Not available for sale",
  "availability": "4, X",
  "game_notes": "Scale: Capital. Skill: Capital ship gunnery: heavy ion cannon. Damage: 7D. Range: 1-5/15/35 (space), 2-10/30/75 km (atmosphere). Crew: 2. Fire Control: 1D. Ammo: Power generator (1 shot per 50 standard hours). Experimental heavy ion cannon developed by an Imperial faction in Corva Sector. Potential to completely ionize a ship on the first successful strike. 2 in 6 chance per use of backfiring and ionizing all systems of the carrying ship. Leaves nano-scopic fields of highly ionized particles that telegraph the presence of a vessel bearing this weapon.",
  "source": "WEG40138 Classic Adventures Vol 4 p.48"
 },
 {
  "name": "zZip Personality Series ChaumScanner 5",
  "category": "Security",
  "type": "Customized Poison Detector",
  "cost": "6,540",
  "availability": "3, F",
  "game_notes": "The food scanner has a 4D search to detect any chemical or biological toxins. If specially programmed with the owner's unique biochemistry (allergies and the like), its skill goes to 7D. Produces a distinctive rhythmic vibration (detectable only by the wearer) when it detects a toxic substance. The wearer may make a Moderate cultures roll to seem inconspicuous when rejecting poisoned food or drink. Standard model availability 3, F; luxury version 4, R. Rivoche Tarkin's brooch version has a miniaturized holorecorder built in — she activates it by touching the brooch when flirting. 80 minutes recording capacity.",
  "source": "WEG40084 Cracken's Rebel Operatives p.34"
 },
 {
  "name": "Rim Securities K7 'Black Dagger' Security Droid",
  "category": "Droids",
  "cost": "Not for sale",
  "availability": "4, X",
  "game_notes": "Height: 1.7m. Move: 12. DEX 3D+2 (blaster 8D, dodge 7D, running 5D), KNO 1D, MEC 1D, PER 3D (search 4D), STR (not listed), TEC 1D. Two auto-balance legs, two arms. Body armor: +2D energy and physical to all locations. Internal blaster rifle (5D, 5-30/100/200). Used by the Empire on Goroth Prime to patrol starport facilities — modified to resist Goroth's radiation flux. A dozen patrol the Graith starport; 3-4 at A'Lenba.",
  "source": "WEG40098 Goroth Slave of the Empire p.65"
 },
 {
  "name": "NeuroSaav 9954/1 Sensor Array",
  "category": "Planetary Sensors",
  "cost": "5,000",
  "availability": "2, R",
  "game_notes": "Installation-level sensor package. Crew: 3. Skill: Sensors. Central processing computer with 50+ sensor dishes. Includes powerful FST (full-spectrum transceiver) capable of picking up basic info from near-orbit, dedicated energy receptor (DER) for detecting energy use/fluctuation, and hyperwave signal interceptor (HSI). Range can be extended with Sensor Relay Satellites (2,000 credits each). Optional life-form indicator (LFI) available for 1,000 credits.",
  "source": "WEG40111 Hideouts & Strongholds p.12"
 },
 {
  "name": "IntelStar BlindSide Sensor Jammer",
  "category": "Planetary Sensors",
  "cost": "5,000 plus installation",
  "availability": "2, X",
  "game_notes": "Sensor jammer for hidden strongholds. Originally designed for ships. Opposed sensors contest between scanner and jammer operators. Limitation: anyone scanning will know they're being jammed.",
  "source": "WEG40111 Hideouts & Strongholds p.12"
 },
 {
  "name": "IntelStar Tranquillity System I Sensor Blind",
  "category": "Planetary Sensors",
  "cost": "400,000",
  "availability": "4, X",
  "game_notes": "Instead of blocking scans, the sensor blind analyzes the target and transmits an additional energy wave that causes equipment and energy use to appear as natural phenomena (thermal updrafts, solar winds, etc.). Opposed roll vs scanning sensors — if blind operator wins by 5+, scanner receives false reading. +1D bonus in densely populated areas. Cannot fool a crystal gravfield trap (CGT) sensor.",
  "source": "WEG40111 Hideouts & Strongholds p.12"
 },
 {
  "name": "NeuroSaav 3K40 Targeting System",
  "category": "Planetary Defense",
  "cost": "5,000 (system), 3,000 (upgrade to +2D)",
  "availability": "2, R",
  "game_notes": "Installation targeting computer. Handles up to 5 weapons of any scale simultaneously. Can assign separate targets for each weapon or link fire. Provides +1D bonus to gunner's skill. Upgrade available to raise bonus to +2D.",
  "source": "WEG40111 Hideouts & Strongholds p.12"
 },
 {
  "name": "MerrSonn Guardian-Class Shield Generator",
  "category": "Planetary Defense",
  "cost": "60,000",
  "availability": "3, R",
  "game_notes": "Capital scale. Crew: 2. Skill: Shields. Base shield generator including both particle and energy shields. Each unit provides 6D of protection for up to 4 fire arcs.",
  "source": "WEG40111 Hideouts & Strongholds p.13"
 },
 {
  "name": "Taptronics CovOps Mark III Surveillance Pod",
  "category": "Planetary Sensors",
  "cost": "8,000",
  "availability": "2, R",
  "game_notes": "Concealed surveillance pod camouflaged to match plants and landscape. Houses miniature holocams, motion/heat sensors, and high-gain microphones. Independently powered by small batteries (unaffected by main power sabotage). Adds +2D to sensors roll of the operator. In auto-function mode, treated as sensors 4D, automatically raising alert if unauthorized motion, heat, or sound detected.",
  "source": "WEG40111 Hideouts & Strongholds p.60"
 },
 {
  "name": "Arakyd Flight Bay Tractor Beam",
  "category": "Planetary Defense",
  "cost": "12,000",
  "availability": "2",
  "game_notes": "Starfighter scale. Crew: 1. Skill: Gunnery. FC 2D. Damage: 3D. Designed for flight bays — when hooked to an installation's computer, automates landing ships in cramped quarters. Also useful for preventing raiding ships from escaping, buying time for patrol ships to arrive.",
  "source": "WEG40111 Hideouts & Strongholds p.13"
 },
 {
  "name": "MerrWeapons WorldArmor 9 Planetary Shield (Encasing)",
  "category": "Planetary Defense",
  "cost": "12,000,000,000 (12 billion credits)",
  "availability": "4, X",
  "game_notes": "Death Star scale. Crew: 25. Skill: Planetary shields. Body 3D (capital scale). Shield: 3D. Range: 1/3/5 units. Difficulty: Easy (short range or half-planet), Moderate (full planet), Difficult (long range or orbiting station). Encasing shields are solid 'walls' of energy — either on or off. Block sensors, energy weapons, and damage ships passing through (roll shield dice vs hull). Can be cross-linked to cover entire planet. Friendly fire cannot penetrate except through permanently assigned fire gaps (Difficult to Heroic terrain for starfighters, Heroic+ for capital ships).",
  "source": "WEG40111 Hideouts & Strongholds p.14"
 },
 {
  "name": "WorldArmor 4 Defensive Shield",
  "category": "Planetary Defense",
  "cost": "80,000,000 (80 million credits)",
  "availability": "4, X",
  "game_notes": "Capital scale. Crew: 25. Skill: Planetary shields. Body 3D (capital scale). Shield: 5D (capital scale). Range: 1/3/5 units. Difficulty: Easy (short range or half-planet), Moderate (full planet), Difficult (long range or orbiting station). Used at Fortress Keremark with six overlapping generators providing layered protection strong enough to deflect orbital bombardments.",
  "source": "WEG40111 Hideouts & Strongholds p.74"
 },
 {
  "name": "DefenStar Nyalsan II Planetary Shield (Shutter)",
  "category": "Planetary Defense",
  "cost": "500,000,000 (500 million credits)",
  "availability": "4, X",
  "game_notes": "Capital scale. Crew: 18. Skill: Planetary shields. Body 3D. Shield: 10D. Range: 1/2/3 units. Difficulty: Easy (short range or half-planet), Moderate (full planet), Difficult (long range). Shutter shields are interlocking adjustable shields that can overlap for combined defense and open for friendly fire/launches. Flying through without a gap: Moderate to Heroic. Active blocking: operator's planetary shields skill (typically 4D-5D) vs starship dodge. More versatile than encasing shields but cannot project around orbiting objects. Relatively 'flat' in range.",
  "source": "WEG40111 Hideouts & Strongholds p.14"
 },
 {
  "name": "GH-5D2 Maintenance Droid",
  "category": "Droids",
  "cost": "",
  "availability": "",
  "game_notes": "Sewer/facility maintenance droid. Move: repulsorlift (50m flight ceiling). DEX 1D, KNO 1D, MEC 1D (repulsorlift operation 4D, sensors 4D), PER 2D+2 (search 6D), STR 2D, TEC 3D (droid repair 4D, sewer maintenance 5D). Two retractable manipulators. Repulsorlift engine. Audio and visual sensors.",
  "source": "WEG40111 Hideouts & Strongholds p.159"
 },
 {
  "name": "Karflo AR-2B Utility Droid",
  "category": "Droids",
  "cost": "2,250",
  "availability": "2",
  "game_notes": "Fifth-degree droid. Height: 1.7m. Move: 7. DEX 1D, KNO 1D, MEC 1D, PER 1D, STR 1D (lifting 3D), TEC 1D. Humanoid body, two visual/audial sensors (Human range), vocabulator (300-word vocabulary, harsh buzzing voice), C3-DD NeuroNet brain. Designed specifically for Goroth Prime — pre-shielded against radiation flux. Built for menial labor (home, office, industrial). Exceptionally literal-minded — incapable of abstract thought or hypothetical situations. Produced on-planet by Karflo Corporation; significantly cheaper than retrofitting standard droids but still more expensive than using 'client-workers.'",
  "source": "WEG40098 Goroth Slave of the Empire p.84"
 },
 // WEG40116 Cynabar's Fantastic Technology: Droids — Droid TraitWare
 {
  "name": "Droid TraitWare Datacard — Dexterity",
  "category": "Droid TraitWare",
  "cost": "100-300/pip, 150-300/die (varies by degree)",
  "availability": "2",
  "game_notes": "Soft-installed attribute boost. Each datacard adds +1 pip to the droid's Dexterity attribute. Erased after installation — if roll fails, new card must be purchased. Cost per die: 1st degree 300, 2nd degree 300, 3rd degree 300, 4th degree 150, 5th degree 250. Cost per pip: 1st 100, 2nd 100, 3rd 100, 4th 50, 5th 85. Installation difficulty: 1st Heroic, 2nd Heroic, 3rd Very Difficult, 4th Moderate, 5th Difficult. Requires (A) Droid Engineering; droid repair increases difficulty by two levels. Max attribute: 10D.",
  "source": "WEG40116 Cynabar's Fantastic Technology: Droids p.22"
 },
 {
  "name": "Droid TraitWare Datacard — Knowledge",
  "category": "Droid TraitWare",
  "cost": "50-400/pip, 150-400/die (varies by degree)",
  "availability": "2",
  "game_notes": "Soft-installed attribute boost. Each datacard adds +1 pip to the droid's Knowledge attribute. Erased after installation. Cost per die: 1st 150, 2nd 300, 3rd 150, 4th 350, 5th 400. Cost per pip: 1st 50, 2nd 100, 3rd 50, 4th 150, 5th 135. Installation difficulty: 1st Difficult, 2nd Very Difficult, 3rd Moderate, 4th Heroic, 5th Very Difficult.",
  "source": "WEG40116 Cynabar's Fantastic Technology: Droids p.22"
 },
 {
  "name": "Droid TraitWare Datacard — Mechanical",
  "category": "Droid TraitWare",
  "cost": "50-325/pip, 150-325/die (varies by degree)",
  "availability": "2",
  "game_notes": "Soft-installed attribute boost. Each datacard adds +1 pip to the droid's Mechanical attribute. Erased after installation. Cost per die: 1st 300, 2nd 150, 3rd 325, 4th 300, 5th 250. Cost per pip: 1st 100, 2nd 50, 3rd 110, 4th 100, 5th 85. Installation difficulty: 1st Very Difficult, 2nd Moderate, 3rd Difficult, 4th Moderate, 5th Heroic.",
  "source": "WEG40116 Cynabar's Fantastic Technology: Droids p.22"
 },
 {
  "name": "Droid TraitWare Datacard — Perception",
  "category": "Droid TraitWare",
  "cost": "65-150/pip, 200-350/die (varies by degree)",
  "availability": "2",
  "game_notes": "Soft-installed attribute boost. Each datacard adds +1 pip to the droid's Perception attribute. Erased after installation. Cost per die: 1st 225, 2nd 300, 3rd 200, 4th 250, 5th 350. Cost per pip: 1st 75, 2nd 100, 3rd 65, 4th 85, 5th 150. Installation difficulty: 1st Moderate, 2nd Difficult, 3rd Easy, 4th Moderate, 5th Very Difficult.",
  "source": "WEG40116 Cynabar's Fantastic Technology: Droids p.22"
 },
 {
  "name": "Droid TraitWare Datacard — Strength",
  "category": "Droid TraitWare",
  "cost": "50-150/pip, 150-400/die (varies by degree)",
  "availability": "2",
  "game_notes": "Soft-installed attribute boost. Each datacard adds +1 pip to the droid's Strength attribute. Erased after installation. Cost per die: 1st 350, 2nd 350, 3rd 400, 4th 200, 5th 150. Cost per pip: 1st 150, 2nd 150, 3rd 135, 4th 65, 5th 50. Installation difficulty: 1st Very Difficult, 2nd Very Difficult, 3rd Moderate, 4th Easy, 5th Moderate.",
  "source": "WEG40116 Cynabar's Fantastic Technology: Droids p.22"
 },
 {
  "name": "Droid TraitWare Datacard — Technical",
  "category": "Droid TraitWare",
  "cost": "50-135/pip, 150-400/die (varies by degree)",
  "availability": "2",
  "game_notes": "Soft-installed attribute boost. Each datacard adds +1 pip to the droid's Technical attribute. Erased after installation. Cost per die: 1st 150, 2nd 150, 3rd 325, 4th 400, 5th 200. Cost per pip: 1st 50, 2nd 50, 3rd 110, 4th 135, 5th 65. Installation difficulty: 1st Moderate, 2nd Moderate, 3rd Very Difficult, 4th Very Difficult, 5th Very Difficult.",
  "source": "WEG40116 Cynabar's Fantastic Technology: Droids p.22"
 },
 {
  "name": "Droid SkillWare — Dexterity Skills",
  "category": "Droid TraitWare",
  "cost": "75-550/die (varies by skill, x degree multiplier)",
  "availability": "1-4, varies (some R or X)",
  "game_notes": "Programmable skill datacards. Purchased per die, installed via droid programming roll. Base costs per die: Archaic Guns 300 (4,R), Blaster 225 (3,R), Blaster Artillery 250 (3,X), Bowcaster 400 (4,X), Bows 250 (4,X), Brawling Parry 200 (2,F), Dodge 150 (1), Firearms 300 (4,X), Grenade 250 (4,X), Lightsaber 550 (4,X), Melee Combat 225 (3,R), Melee Parry 175 (3,R), Missile Weapons 250 (3,R), Pick Pocket 400 (3,X), Running 75 (2), Thrown Weapons 275 (4,R), Vehicle Blasters 250 (3,R). Degree multipliers: 1st x2.5, 2nd x3, 3rd x3, 4th x1, 5th x2. Max 4D at creation, 13D total. Installation: 1st/2nd Very Difficult, 3rd Difficult, 4th Easy, 5th Moderate.",
  "source": "WEG40116 Cynabar's Fantastic Technology: Droids p.23"
 },
 {
  "name": "Droid SkillWare — Knowledge Skills",
  "category": "Droid TraitWare",
  "cost": "75-350/die (varies by skill, x degree multiplier)",
  "availability": "1-4, varies",
  "game_notes": "Programmable skill datacards. Base costs per die: Alien Species 75 (2), Bureaucracy 100 (1), Business 75 (1), Cultures 200 (2), Intimidation 300 (3,F), Languages 75 (1), Law Enforcement 250 (2), Planetary Systems 75 (1), Streetwise 350 (3), Survival 200 (2), Value 175 (1), Willpower 300 (4). Degree multipliers: 1st x1.5, 2nd x2.5, 3rd x1, 4th x3, 5th x3. Installation: 1st Moderate, 2nd Difficult, 3rd Easy, 4th Very Difficult, 5th Very Difficult.",
  "source": "WEG40116 Cynabar's Fantastic Technology: Droids p.23"
 },
 {
  "name": "Droid SkillWare — Mechanical Skills",
  "category": "Droid TraitWare",
  "cost": "75-350/die (varies by skill, x degree multiplier)",
  "availability": "2-4, varies",
  "game_notes": "Programmable skill datacards. Base costs per die: Archaic Starship Piloting 250 (4), Astrogation 200 (2), Beast Riding 300 (3), Capital Ship Gunnery 350 (3,R), Capital Ship Piloting 150 (2,F), Capital Ship Shields 200 (2), Communications 75 (2), Ground Vehicle Operation 75 (2), Hover Vehicle Operation 100 (2), Powersuit Operation 200 (4), Repulsorlift Operation 100 (2), Sensors 75 (2), Space Transports 150 (2), Starfighter Piloting 200 (2,F), Starship Gunnery 350 (2,R), Starship Shields 200 (2,F), Swoop Operation 250 (3), Walker Operation 175 (4). Degree multipliers: 1st x3, 2nd x1.5, 3rd x2.5, 4th x2.5, 5th x1.5. Installation: 1st Difficult, 2nd Easy, 3rd Moderate, 4th Difficult, 5th Easy.",
  "source": "WEG40116 Cynabar's Fantastic Technology: Droids p.23"
 },
 {
  "name": "Droid SkillWare — Perception Skills",
  "category": "Droid TraitWare",
  "cost": "100-300/die (varies by skill, x degree multiplier)",
  "availability": "2-4, varies",
  "game_notes": "Programmable skill datacards. Base costs per die: Bargain 150 (2), Command 300 (3,F), Con 300 (3,R), Forgery 300 (4,X), Gambling 150 (2,F), Hide 175 (3), Investigation 100 (2), Persuasion 125 (3), Search 150 (2), Sneak 200 (3). Degree multipliers: 1st x2, 2nd x2, 3rd x1.5, 4th x2, 5th x3. Installation: 1st/2nd Easy, 3rd/4th Moderate, 5th Easy.",
  "source": "WEG40116 Cynabar's Fantastic Technology: Droids p.24"
 },
 {
  "name": "Droid SkillWare — Strength Skills",
  "category": "Droid TraitWare",
  "cost": "50-250/die (varies by skill, x degree multiplier)",
  "availability": "2-3, varies",
  "game_notes": "Programmable skill datacards. Base costs per die: Brawling 250 (3,R), Climbing/Jumping 75 (3), Lifting 50 (2), Stamina 150 (3), Swimming 200 (2). Degree multipliers: 1st x3, 2nd x3, 3rd x3, 4th x1.5, 5th x1. Installation: 1st/2nd Difficult, 3rd Moderate, 4th Easy, 5th Difficult.",
  "source": "WEG40116 Cynabar's Fantastic Technology: Droids p.24"
 },
 {
  "name": "Droid SkillWare — Technical Skills",
  "category": "Droid TraitWare",
  "cost": "50-250/die (varies by skill, x degree multiplier)",
  "availability": "2-3, varies",
  "game_notes": "Programmable skill datacards. Base costs per die: Armor Repair 175 (3), Blaster Repair 150 (2), Capital Ship Repair 100 (2), Capital Ship Weapon Repair 125 (2,F), Computer Programming/Repair 50 (2), Demolitions 250 (3,R), Droid Programming 75 (2), Droid Repair 125 (2), First Aid 200 (2,F), Ground Vehicle Repair 100 (2), Hover Vehicle Repair 125 (2), (A) Medicine 250 (2,F), Repulsorlift Repair 150 (2), Security 250 (3,F), Space Transports Repair 150 (2), Starfighter Repair 150 (2), Starship Weapon Repair 175 (3,F), Walker Repair 175 (3). Degree multipliers: 1st x1, 2nd x1, 3rd x2, 4th x3, 5th x2.5. Installation: 1st/2nd Easy, 3rd/4th Difficult, 5th Moderate.",
  "source": "WEG40116 Cynabar's Fantastic Technology: Droids p.24"
 },
 {
  "name": "Droid Database — Knowledge/Technical Skills",
  "category": "Droid TraitWare",
  "cost": "Base SkillWare cost per die (no degree multiplier)",
  "availability": "2",
  "game_notes": "Attachment that gives bonus dice to Knowledge and Technical skills only. Purchased by die (+1D to +5D). No degree multiplier applied — base SkillWare catalog price per die. Only one database can be installed at a time — installing a second voids both. Cannot be modified after installation. Installation via droid programming: +1D Very Easy, +2D Easy, +3D Moderate, +4D Difficult, +5D Very Difficult.",
  "source": "WEG40116 Cynabar's Fantastic Technology: Droids p.27"
 },
 // WEG40116 Cynabar's Fantastic Technology: Droids — Droid Hardware
 {
  "name": "Droid Locomotion — Wheels",
  "category": "Droid Hardware",
  "cost": "50/Move (Move 1-15)",
  "availability": "1",
  "game_notes": "Cheapest locomotion option. Movement rolls over terrain are one difficulty level higher (Moderate becomes Difficult, etc.). Cost: Move x 50 credits. Installation: Easy.",
  "source": "WEG40116 Cynabar's Fantastic Technology: Droids p.28"
 },
 {
  "name": "Droid Locomotion — Legs",
  "category": "Droid Hardware",
  "cost": "100/Move (Move 1-15)",
  "availability": "1",
  "game_notes": "Standard locomotion. Reacts to terrain like organic legs. Cost: Move x 100 credits. Installation: Moderate.",
  "source": "WEG40116 Cynabar's Fantastic Technology: Droids p.28"
 },
 {
  "name": "Droid Locomotion — Treads",
  "category": "Droid Hardware",
  "cost": "150/Move (Move 1-15)",
  "availability": "2",
  "game_notes": "Terrain difficulties decreased by one level. Cost: Move 1=150, 2=300, 3=450, ... 10=1,600, 15=2,450. Installation: Difficult.",
  "source": "WEG40116 Cynabar's Fantastic Technology: Droids p.28"
 },
 {
  "name": "Droid Locomotion — Repulsorlift",
  "category": "Droid Hardware",
  "cost": "200/Move (Move 1-15)",
  "availability": "2",
  "game_notes": "No terrain difficulty penalties. May need movement rolls to maneuver around objects. Cost: Move x 200 credits. Installation: Very Difficult.",
  "source": "WEG40116 Cynabar's Fantastic Technology: Droids p.28"
 },
 {
  "name": "Droid Sensors — Standard (Human Range)",
  "category": "Droid Hardware",
  "cost": "100",
  "availability": "1",
  "game_notes": "Visual (photoreceptors) and auditory sensors detecting stimuli within normal human range. Standard equipment on most droids.",
  "source": "WEG40116 Cynabar's Fantastic Technology: Droids p.28"
 },
 {
  "name": "Droid Sensors — Enhanced Search Package",
  "category": "Droid Hardware",
  "cost": "150-750/die (+1D to +5D), x target types",
  "availability": "2",
  "game_notes": "Adds dice to droid's search skill for specified targets. Cost per die: +1D 150, +2D 300, +3D 450, +4D 600, +5D 750. Multiply cost by number of target types: 1 type = x1, 2 types = x2, 3 types = x3, 4 types = x4, 5 types = x5, 6 types = x6. Max 6 target types. Target examples: moving objects, heat sources, distance (25-50m), organic life, electromagnetic emissions, chemical traces.",
  "source": "WEG40116 Cynabar's Fantastic Technology: Droids p.29"
 },
 {
  "name": "Cybot Galactica 'Lifeline' Astrogation Buffer",
  "category": "Droid Hardware",
  "cost": "1,300",
  "availability": "2, F",
  "game_notes": "Stores one set of nav coordinates indefinitely. Scomp-link + Moderate computer programming/repair roll downloads data to nav computer, then data is deleted. Loading more than one set of coordinates overwrites the older data. Effectively a backup nav computer in a droid.",
  "source": "WEG40116 Cynabar's Fantastic Technology: Droids p.30"
 },
 {
  "name": "Droid Cargo Winch",
  "category": "Droid Hardware",
  "cost": "400 (basic), 800 (heavy lifting)",
  "availability": "2",
  "game_notes": "Small cargo-lifting device with 50m durasteel cable. Supports up to 80kg (droid must anchor itself). Unstable/uneven ground increases lifting difficulty by one level. Heavy version adds +1D to lifting attempts.",
  "source": "WEG40116 Cynabar's Fantastic Technology: Droids p.30"
 },
 {
  "name": "Industrial Automaton Type 10 Circular Saw",
  "category": "Droid Hardware",
  "cost": "500 (external), 1,200 (retractable internal)",
  "availability": "2",
  "game_notes": "High-speed durasteel circular saw. Cuts power cables, heavy foliage, syntherope. Damage: 4D. Range: 0.3m. Can be used in melee combat (skill: melee combat: circular saw) but impractical as weapon. Internal version requires droid minimum 0.3m long/tall.",
  "source": "WEG40116 Cynabar's Fantastic Technology: Droids p.31"
 },
 {
  "name": "Concealed Vibroblade (Droid)",
  "category": "Droid Hardware",
  "cost": "500 (basic), 800 (sensor-resistant)",
  "availability": "2, X",
  "game_notes": "Retractable vibroblade housed in wrist or finger of humanoid droids. Damage: STR+3D (max 6D+2). Skill: Melee Combat. Basic version detectable with Easy sensors roll. Sensor-resistant version requires Difficult sensors roll. Highly illegal.",
  "source": "WEG40116 Cynabar's Fantastic Technology: Droids p.31"
 },
 {
  "name": "Fine Work Grasper Arm",
  "category": "Droid Hardware",
  "cost": "350",
  "availability": "2",
  "game_notes": "Retractable appendage extending up to 0.5m. Allows droids without limbs (astromechs, power droids) to manipulate small objects, keypads, and tools. Servo-boosted joints and fingers. Available with claws, pincers, or 3-5 fingered hands.",
  "source": "WEG40116 Cynabar's Fantastic Technology: Droids p.31"
 },
 {
  "name": "Heavy Grasper Arm",
  "category": "Droid Hardware",
  "cost": "550",
  "availability": "2",
  "game_notes": "Retractable appendage extending up to 0.5m. Servo-boosted joints add +2D to lifting attempts. Available with claws, pincers, or 3-5 fingered hands. Allows manipulation of heavier objects than fine work version.",
  "source": "WEG40116 Cynabar's Fantastic Technology: Droids p.31"
 },
 {
  "name": "Neuro-Saav TL3 Holo-Imaging Package",
  "category": "Droid Hardware",
  "cost": "2,500 (basic), +200/upgrade",
  "availability": "2",
  "game_notes": "Holocam tied into droid's optical modules. Records first-person 3D view up to 20m (line-of-sight). Downloads to datacards, dataplaques, or holoprojectors. Upgrades available: Macrobinocular hookup (extends range to 100m, +200), All-Environment 360° recording (10m radius, +200), Night-Vision thermal/UV mode (+200), Motion sensor tracking (+200). Skill: Sensors.",
  "source": "WEG40116 Cynabar's Fantastic Technology: Droids p.31"
 },
 {
  "name": "SoroSuub G-series Holoprojector",
  "category": "Droid Hardware",
  "cost": "300-8,000",
  "availability": "2",
  "game_notes": "Projects pre-recorded holograms. Basic unit (standard on R-series astromechs) projects up to 1.5m away, image size 0.5-10m. More sophisticated units project 360° spheres up to 10m. Price scales with capability. Skill: Computer Programming/Repair.",
  "source": "WEG40116 Cynabar's Fantastic Technology: Droids p.32"
 },
 {
  "name": "SoroSuub 'AutoTracker' Internal Automap",
  "category": "Droid Hardware",
  "cost": "4,000",
  "availability": "2",
  "game_notes": "Built-in GPS module. Links to orbiting data sources (ship sensors, weather satellites, traffic control). Provides exact location, local weather, moving objects, navigational hazards. Requires Moderate computer programming/repair roll once per hour to maintain link. Data displayed via scomp-link to datapad or droid's imaging systems. Virtually impossible to get lost while active.",
  "source": "WEG40116 Cynabar's Fantastic Technology: Droids p.32"
 },
 {
  "name": "Fabritech 'VoxLink' Internal Comlink",
  "category": "Droid Hardware",
  "cost": "100",
  "availability": "2",
  "game_notes": "Built-in communications device. Broadcast/reception range: 50km in clear weather. Monitors up to 10 frequencies simultaneously. Skill: Communications.",
  "source": "WEG40116 Cynabar's Fantastic Technology: Droids p.32"
 },
 {
  "name": "Jabriel VCA Droid Line Caster",
  "category": "Droid Hardware",
  "cost": "1,100",
  "availability": "2, F",
  "game_notes": "Fires syntherope or durasteel cable with grappling hook up to 50m (range 1-10/20/50). Works with cargo winch to snare and retrieve heavy objects. Solo use for wall/incline scaling by organics. Skill: Blaster: Line Caster (or Dexterity). Requires targeting SkillWare for effective use.",
  "source": "WEG40116 Cynabar's Fantastic Technology: Droids p.33"
 },
 {
  "name": "Onboard Blaster (Droid)",
  "category": "Droid Hardware",
  "cost": "1,200 (basic), 1,600 (sensor-resistant), 25 (powerpack)",
  "availability": "3, X",
  "game_notes": "Concealed energy weapon. Range: 3-10/30/120. Damage: 4D. Ammo: 100. Basic version: Easy sensors roll to detect. Sensor-resistant: Very Difficult sensors or Heroic search/Perception to find. Exterior-mounted version: 800 credits (easily visible). Damage can be increased +1D per 400 credits (max 6D). Skill: Blaster.",
  "source": "WEG40116 Cynabar's Fantastic Technology: Droids p.33"
 },
 {
  "name": "Onboard Flame Projector (Droid)",
  "category": "Droid Hardware",
  "cost": "600 (basic), 1,000 (sensor-resistant), 200 (extra ammo)",
  "availability": "3, X",
  "game_notes": "Sprays corrosive, highly flammable chemical mist. Range: 3-4/5/7. Damage: 5D first round, 3D for next 5 rounds unless extinguished. Ammo: 10. Fire rate: 1/2. Basic: Easy sensors or Moderate search to detect. Sensor-resistant: Difficult sensors or Very Difficult search. If fuel tank is damaged, chemical does 3D corrosion damage to the droid. Skill: Missile Weapons.",
  "source": "WEG40116 Cynabar's Fantastic Technology: Droids p.33"
 },
 {
  "name": "Genetech A2 Accounting/Business Droid",
  "category": "Droids",
  "cost": "8,000",
  "availability": "2",
  "game_notes": "First-degree droid. Height: 0.6m tall, 1m wide. Move: 10. DEX 1D, KNO 3D (Bureaucracy 8D, Business 8D, Value 7D), MEC 1D, PER 1D (Bargain 3D), STR 1D, TEC 1D. Hemispherical body with two fine manipulators, repulsorlift unit (2m ceiling), speech synthesizer, holographic recorder and projector. Advanced personality matrix. Originally intended as personal account manager and negotiation-facilitator for corporate environments. Personality modules were never fully debugged — poor negotiator but adept at determining market values and extremely efficient accountant. Highly visible in the Corporate Sector and Core Worlds. SkillWare 'flutter' bug in smaller-scale operations causes faulty invoicing, late billing, and accounting errors — free upgrade available from Genetech on complaint.",
  "source": "WEG40116 Cynabar's Fantastic Technology: Droids p.42"
 },
 {
  "name": "Industrial Automaton A9G Archive Droid",
  "category": "Droids",
  "cost": "8,000 (used only)",
  "availability": "2",
  "game_notes": "First-degree droid. Height: 1.7m. Move: 9. DEX 2D, KNO 2D (Bureaucracy: Library Science 4D), MEC 1D, PER 1D, STR 1D+2, TEC 2D (Computer Programming/Repair 5D). Humanoid body (two arms, two legs, head). Kraren XI Superprocessor for rapid data collation. Cybot Galactica Data-Sifter software (+1D to computer programming/repair rolls involving data searches). Designed for computer and library system management — data storage, collation, and analysis. Not terribly successful in high-traffic environments due to glitches and poor judgement, but useful for smaller-scale applications. Advanced personality matrix. Popular with the Rebel Alliance for processing raw field intelligence.",
  "source": "WEG40116 Cynabar's Fantastic Technology: Droids p.43; WEG41014 Star Wars Adventure Journal #14 p.252; WEG40085 The Truce at Bakura p.134"
 },
 {
  "name": "Arakyd Seeker AS-M12 Message Droid",
  "category": "Droids",
  "cost": "4,000",
  "availability": "2",
  "game_notes": "Second-degree droid. Height: 0.5m. Move: 10. DEX 1D, KNO 2D (Planetary Systems 3D), MEC 1D (Sensors 3D), PER 2D (Search 4D), STR 2D, TEC 1D (Computer Programming/Repair 3D). Compact globe with repulsorlift generator, visual/audial sensors, vocabulator, retractable fine work grasper arm, holographic projector/recorder, computer I/O jack. Message security: will not convey information without proper passcode (Heroic droid programming to circumvent). Can travel system-to-system via civilian version of Arakyd Viper probe droid hyperspace pod. Has hardwired data storage buffer storing launch coordinates in directional module. Elementary personality matrix. Reliable system-to-system communication, typically limited to military or corporate use due to cost. Can be rigged as an explosive seeker with detonite and proximity detonator.",
  "source": "WEG40116 Cynabar's Fantastic Technology: Droids p.44; WEG40122 Shadows of the Empire p.108"
 },
 {
  "name": "TelBrinTel GHT Medevac Droid",
  "category": "Droids",
  "cost": "5,200",
  "availability": "2",
  "game_notes": "First-degree droid. Length: 1m. Move: 11 (repulsorlift), 6 (wheels). DEX 1D, KNO 2D (Alien Species: Biology 4D), MEC 1D, PER 2D (Search 4D, Hide 3D), STR 2D (Lifting 4D), TEC 3D (First Aid 6D). Four retractable wheels, repulsorlift (carries droid + one wounded human-sized individual, 0.5m ceiling), two photoreceptors (human and macro range), auditory receptor, two reinforced fine work manipulator arms, reinforced hull (+1D vs physical and energy damage). Moderate personality matrix. Designed for battlefield medic support — retrieves injured soldiers, applies temporary first aid, returns wounded to field hospitals. Requires detailed coordinates to locate downed soldiers; internal automap installation fixes this limitation.",
  "source": "WEG40116 Cynabar's Fantastic Technology: Droids p.46"
 },
 {
  "name": "Roche J9 Worker Drone",
  "category": "Droids",
  "cost": "1,200",
  "availability": "2",
  "game_notes": "Third-degree droid. Height: 1.9m. Move: 10. DEX 2D, KNO 4D (Alien Species 5D+1, Bureaucracy 5D+2, Languages 4D+1), MEC 1D, PER 3D (Bargain 4D+2, Sneak 4D), STR 1D, TEC 1D (Security 5D+1). Two photoreceptors/video sensors (Verpine range), bipedal locomotion, olfactory sensor (+1D to odor-based search rolls), Torplex microwave sensor (+1D to security), Arjan vocabulator, TranLang II Communication module (+2D to languages). Simple personality matrix. Created by the Verpine as a protocol unit with programming some claim is more advanced than a 3PO unit. Commercial failure due to extremely mechanical/skeletal insect-like appearance and misleading 'Worker Drone' nickname. Over 2,000 produced. Easily modified for other tasks.",
  "source": "WEG40116 Cynabar's Fantastic Technology: Droids p.49"
 },
 {
  "name": "Arakyd AD Armorer Droid",
  "category": "Droids",
  "cost": "7,700 (used only)",
  "availability": "3",
  "game_notes": "Second-degree droid. Height: 1.5m. Move: 6. DEX 2D, KNO 2D, MEC 2D, PER 2D, STR 2D, TEC 3D (Armor Repair 4D+1, Blaster Repair 5D, Blaster Repair: Blaster Artillery 5D). AA-12X Verbobrain, communications link with base computer, humanoid body (two arms, two legs, head), repulsorlift unit (1m ceiling), visual/auditory sensors (human range), vocabulator. Complex personality matrix. Originally developed to sell to the Empire for weapons maintenance but the efficiency increase was marginal (0.0006%). Arakyd sold surplus stock to mercenary units, local law enforcement, and bounty hunting guilds. Easily modified with additional SkillWare for shipboard weapons and conventional repairs.",
  "source": "WEG40116 Cynabar's Fantastic Technology: Droids p.50"
 },
 {
  "name": "Industrial Automaton FLR Logger Droid",
  "category": "Droids",
  "cost": "2,500",
  "availability": "2",
  "game_notes": "Fifth-degree droid. Height: 2m. Move: 7. DEX 2D, KNO 1D, MEC 1D, PER 2D (Search 4D+2), STR 4D+2 (Lifting 6D+2), TEC 1D. Fabritech communications array, two heavy manipulator arms, one heavy tree-felling saw, one light brush-removing saw, probability projection computer (determines how/when a felled tree will land), extendible video sensor, emergency audio alarm (for felling miscalculations). No personality matrix. Developed under contract from Greel Wood Logging Corporation for Pii 3 logging operations. Performs modestly well but not widely used outside Pii 3. Overly user-friendly programming — spends excessive time confirming commands, making programming frustrating and time-consuming. Replacement parts scarce as IA doesn't prioritize FLR manufacturing.",
  "source": "WEG40116 Cynabar's Fantastic Technology: Droids p.52"
 },
 {
  "name": "Cybot Galactica GY-I Information Analysis Droid",
  "category": "Droids",
  "cost": "7,500",
  "availability": "2",
  "game_notes": "First-degree droid. Height: 1m. Move: 5. DEX 2D, KNO 3D+1 (Planetary Systems 3D+2), MEC 2D, PER 2D+1, STR 1D+1, TEC 2D (Computer Programming/Repair 3D+2). Humanoid body (two legs, two arms, head). Arakyd data storage and collation software (+1D to computer programming/repair for data research). Cybot Galactica multi-socket computer interface (access to most computer systems in the Empire). Cybot Galactica GY-I data analysis software (+2D to computer programming/repair for collation/analysis of data). Elementary personality matrix. Processes upwards of 500,000 data information packets per second. Originally for high-end corporations and learning facilities; military adopted for tactics analysis. Custom modules available from Cybot Galactica at 10% of unit price (e.g. shipboard version stores up to 30 hyperspace coordinates). Installed in 24 hours with Easy computer programming/repair roll.",
  "source": "WEG40116 Cynabar's Fantastic Technology: Droids p.53"
 },
 {
  "name": "Roche 'Hatchling' Zero-G Maintenance Droid",
  "category": "Droids",
  "cost": "2,050",
  "availability": "2, F",
  "game_notes": "Second-degree droid. Length: 2m. Move: 6 (atmosphere), 15 (space). DEX 2D (Blaster 5D, Blaster: Welding Tools 7D, Dodge 4D), KNO 1D, MEC 1D, PER 2D (Search 4D), STR 4D, TEC 1D. Six arms, repulsorlift/thruster package (10m ceiling in atmosphere, thruster for space movement), welding lasers (0.3m range, 8D damage), various repair appendages for specific missions, broadband transmitter/receiver package, repair database (+1D to all repair rolls to spacecraft). Simple personality matrix. Verpine-designed zero-g maintenance droid, functions best in vacuum. Typically serves as repair unit in stardocks and deep-space shipyards. Can be refitted with blaster on tool hardpoints for hull security (mynock scraping, etc.).",
  "source": "WEG40116 Cynabar's Fantastic Technology: Droids p.54"
 },
 {
  "name": "Cybot Galactica LE-series Repair Droid",
  "category": "Droids",
  "cost": "12,800 (new), 6,500 (used)",
  "availability": "2",
  "game_notes": "Second-degree droid. Height: 1.7m. Move: 7. DEX 1D, KNO 2D, MEC 2D (Astrogation 2D+1, Communications 3D, Sensors 3D), PER 1D, STR 2D, TEC 2D (Capital Starship Repair 4D, Computer Programming/Repair 5D, Space Transports Repair 3D). Humanoid body (two arms, two legs, head), visual/audial sensors (human range), vocabulator. Complex personality matrix. Combination of 3PO protocol unit communicative ability with astromech utility. Serviceable ship mechanics with enough social skill to deal with organics effectively. Not equipped with same level of computer data exchange gear as astromechs but easily modified to suit individual needs.",
  "source": "WEG40116 Cynabar's Fantastic Technology: Droids p.55"
 },
 {
  "name": "Les Tech M38 Explorer Droid",
  "category": "Droids",
  "cost": "13,000 (new), 5,500 (used)",
  "availability": "2, F",
  "game_notes": "Second-degree droid. Height: 1.3m. Move: 5. DEX 1D, KNO 1D (Planetary Systems 4D+2, Survival 4D+2), MEC 1D, PER 1D (Search 4D+2), STR 5D, TEC 1D. Seismic sensors (+1D to search for ground vibrations and source identification), movement sensors (+1D to search for moving objects up to 500m), electromagnetic sensors (monitors EM spectrum), dual photoreceptors (visual and infrared), radiation sensors (detects levels harmful to organics), heavy grasper arm (+1D to lifting), fine work manipulator arm (+1D to Dexterity/Technical skills for sample gathering), holocam, specimen hopper (5kg), heavy treads. Elementary personality matrix. Handles dangerous initial exploration duties for scouts — full sensor package and holorecording. Tread system requires alignment before each deployment or droid may overcompensate on control.",
  "source": "WEG40116 Cynabar's Fantastic Technology: Droids p.56; WEG40091 Rebel Alliance Sourcebook p.117"
 },
 {
  "name": "Industrial Automaton P2 Astromech Prototype",
  "category": "Droids",
  "cost": "2,500 (used)",
  "availability": "3",
  "game_notes": "Second-degree droid. Height: 2.2m. Move: 4 (wheels). DEX 1D, KNO 1D, MEC 1D (Space Transports 2D), PER 1D (Search 2D), STR 2D, TEC 2D (Space Transports Repair 5D). Three wheeled legs (one retractable), heavy grasper arm, three medium retractable arms, laser welder (5D damage, 0.5m range), video display screen, buzzsaw (5D damage), armored hull (+1D to Strength vs damage). No personality matrix. Precursor to the R2 astromech — much larger, very simple computer-brain, extremely subservient. Awkward and tends to bump into nearby objects. Communicates only through video screen or input jacks. No longer manufactured — R-series production ended the P2 line.",
  "source": "WEG40116 Cynabar's Fantastic Technology: Droids p.57"
 },
 {
  "name": "Industrial Automaton PG-5 Gunnery Droid",
  "category": "Droids",
  "cost": "5,100",
  "availability": "3",
  "game_notes": "Second-degree droid. Height: 2.5m. Move: 4 (wheels). DEX 1D, KNO 1D, MEC 1D (Capital Ship Gunnery 3D, Capital Ship Shields 4D, Communications 3D, Sensors 6D, Starship Gunnery 3D, Starship Shields 4D), PER 1D, STR 1D, TEC 2D (Capital Ship Weapon Repair 5D, Computer Programming/Repair 4D, Starship Weapon Repair 5D). Three wheeled legs (one retractable), heavy grasper arm, three medium retractable arms, laser welder (6D damage, 0.3m range), scomp-link (+1D to computer programming/repair when linked). No personality matrix. Built on astromech chassis for Imperial capital ship crew augmentation. Severely flawed design — cannot communicate without scomp-link, extremely bulky for cramped gunnery bays, not aggressive enough for backup gunner duty. Only a few hundred produced before IA ceased production. Most sold to local militias and law enforcement. Cheap to acquire at surplus auctions; easily upgraded with additional SkillWare to match R2 capability.",
  "source": "WEG40116 Cynabar's Fantastic Technology: Droids p.58"
 },
 {
  "name": "Industrial Automaton R5 Astromech Droid",
  "category": "Droids",
  "cost": "2,000",
  "availability": "2",
  "game_notes": "Second-degree droid. Height: 1m. Move: 5 (wheels). DEX 1D, KNO 1D, MEC 1D, PER 1D, STR 1D, TEC 2D (Computer Programming/Repair 4D, Space Transports Repair 4D). Three wheeled legs (one retractable), retractable heavy grasper arm (+1D to lifting, max 2D), retractable fine worker arm, small circular saw (4D damage, 0.3m range), acoustic signaler, holographic projector/recorder, fire extinguisher. Simple personality matrix. Cheapest R-unit series — quickly discontinued due to poor quality and sales. Only holds one set of hyperspace coordinates at a time. Personality matrix was cut during design — prone to becoming 'bitter' without frequent memory wipes and regular maintenance. Available at discount; commonly found in Outer Rim Territories.",
  "source": "WEG40116 Cynabar's Fantastic Technology: Droids p.60"
 },
 {
  "name": "Industrial Automaton V6 Pilot Droid",
  "category": "Droids",
  "cost": "17,800 (new), 12,000 (used)",
  "availability": "2, F",
  "game_notes": "Second-degree droid. Height: 1m. Move: 5 (wheels). DEX 1D, KNO 1D (Planetary Systems 4D), MEC 1D (Astrogation 4D, Space Transports 5D+2), PER 1D, STR 2D, TEC 1D (Computer Programming/Repair 3D, Space Transports Repair 3D, Starfighter Repair 3D). Three wheeled legs (one retractable), one retractable arm, one visual sensor (human range), starship interface jack, video display screen, memory for 5 pre-programmed hyperspace jumps. Complex personality matrix. Latest in the V-series astromech line — designed as a ship pilot for small vessels (freighters, tugs) for short distances. Useful for cargo hops and moving bulk freighters into parking orbits but unreliable in combat — tends to panic. Most systems require expensive flight permits with genetic, retinal, and ship registry info to allow droid piloting.",
  "source": "WEG40116 Cynabar's Fantastic Technology: Droids p.61"
 },
 {
  "name": "Roche Siak-series Protocol Droid",
  "category": "Droids",
  "cost": "3,500 (new), 1,200 (used)",
  "availability": "2",
  "game_notes": "Third-degree droid. Height: 1.5m. Move: 6 (legs). DEX 1D (Dodge 2D), KNO 3D (Cultures 4D, Cultures: Human 5D, Languages 5D), MEC 1D, PER 2D (Persuasion 3D), STR 1D, TEC 1D. TranLang IV Communications module, two photoreceptors and two auditory receptors (human range), languages database (+1D to languages), Verpinoid body (head, torso, two arms, two legs), vocabulator. Advanced personality matrix. Roche Corporation's second attempt at the human-cyborg relations market after the J9's failure — hired human contractors to design a more appealing chassis and personality matrix. Translates several hundred languages, can negotiate independently. Still in production, commonly seen in urban areas.",
  "source": "WEG40116 Cynabar's Fantastic Technology: Droids p.65"
 },
 {
  "name": "Arakyd BT-16 Perimeter Security Droid",
  "category": "Droids",
  "cost": "4,100",
  "availability": "2, F",
  "game_notes": "Fourth-degree droid. Height: 2.3m. Move: 14. DEX 4D (Blaster 5D+1, Dodge 5D+1, Grenade 5D+1), KNO 2D (Languages 3D+1, Law Enforcement 4D+2, Survival 3D+1), MEC 1D, PER 4D (Search 4D+1), STR 1D (Climbing 2D+1, Swimming 2D+1), TEC 2D (Computer Programming/Repair 3D+2, Security 3D+1). Six-leg arachnid locomotion, video sensor, Carbanti motion sensor and Fabritech seismic sensor (+1D to search), Imperial standard comlink, Arakyd vocabulator (droid languages only), TranLang I communication module (+1D to languages), armor (+2D to Strength vs physical and energy attacks), Taim & Bak repeating blaster (6D, 2-10/25/50, turret mount). No personality matrix. Extremely reliable perimeter security unit — heavy armor and advanced sensor package. Sensors keyed to detect small creatures, popular with farmers for 'varmint' control. Can be upgunned with missile racks for military-grade perimeter defense.",
  "source": "WEG40116 Cynabar's Fantastic Technology: Droids p.67"
 },
 {
  "name": "Aro-GX Security Droid",
  "category": "Droids",
  "cost": "9,000 (military/government use only)",
  "availability": "3, X",
  "game_notes": "Fourth-degree droid. Height: 1.8m. Move: 10. DEX 3D (Blaster 6D, Dodge 8D, Running 4D), KNO 1D, MEC 1D, PER 1D (Search 4D+2), STR 1D (Lifting 3D), TEC 1D (Computer Programming/Repair 3D+2, Droid Repair 4D, Security 5D). Body armor (+3D STR to all locations), wrist blasters (3D damage, 3-10/30/100), two auto-balance legs, two arms. Advanced personality matrix. Formidable security droid with targeting systems comparable to top-end military units. Banned from commercial sale by the Empire as 'too lethal' after a reprogrammed GX nearly assassinated the Corellian Diktat. Manufacturer Aro was wiped out by the bad press. Banned entirely from the Corellian system. Surplus units available on Black Market. High Imperial officials (Moffs, Admirals) keep upgunned versions for personal security despite the prohibition.",
  "source": "WEG40116 Cynabar's Fantastic Technology: Droids p.68"
 },
 {
  "name": "Holowan Mechanicals IG-series Combat Prototype",
  "category": "Droids",
  "cost": "1,500,000 (Black Market only)",
  "availability": "3, X",
  "game_notes": "Fourth-degree droid. Height: 2m. Move: 13. DEX 4D (Blaster 6D, Dodge 6D, Energy Weapons: Sonic Stunner 5D+2, Flamethrower 5D, Grenade 6D, Missile Weapons 6D), KNO 2D+1 (Languages 3D+1, Planetary Systems 3D+1), MEC 2D+2 (Astrogation 4D+2, Space Transports 4D+1), PER 3D+1 (Search 7D, Search: Tracking 9D, Sneak 4D), STR 4D (Lifting 6D), TEC 1D+2 (Computer Programming/Repair 3D, Droid Programming 3D, Droid Repair 3D). Humanoid body, broad-band antenna (intercepts and decodes most standard-frequency communications), flamethrower (3D/round until extinguished, 10m range), long-range sensor (+2D search 50-750m), motion sensor (+2D search for moving objects up to 400m), sonic stunner (4D stun, 10m range), grenade launcher (5D). Complex personality matrix. Equipment: Blaster rifle (5D). One of the deadliest droid models ever constructed — upon activation, initial prototypes killed the entire Holowan Mechanicals design team. Never mass-produced; only a handful of prototypes survived. Original records seized by the Empire.",
  "source": "WEG40116 Cynabar's Fantastic Technology: Droids p.69"
 },
 {
  "name": "Rim Securities K4 Security Droid",
  "category": "Droids",
  "cost": "7,500",
  "availability": "2, R",
  "game_notes": "Fourth-degree droid. Height: 1.6m. Move: 11. DEX 3D (Blaster 7D, Dodge 8D, Running 4D), KNO 1D, MEC 1D, PER 1D, STR 1D, TEC 1D. Two auto-balance legs, two arms, body armor (+2D Strength vs damage), internal blaster rifle (5D, 5-30/100/200). Elementary personality matrix. Popular defense droid in the Outer Rim Territories. Found serving private corporations, local governments, and crime lords. Solid and dependable. Known targeting glitch when moving at high speed — actually caused by leg gyros moving out of synch with sensors rather than true targeting error. Regular alignment and cleaning of blaster housing and leg gyros fixes this. A well-placed blaster shot can knock the blaster or leg gyros out of alignment.",
  "source": "WEG40116 Cynabar's Fantastic Technology: Droids p.70"
 },
 {
  "name": "MerenData RM-2020 Espionage Droid",
  "category": "Droids",
  "cost": "160,000 (new), 100,000 (used, Black Market only)",
  "availability": "2, R",
  "game_notes": "Fourth-degree droid. Height: 1m. Move: 10. DEX 3D (Blaster 4D, Dodge 6D, Melee Combat 3D+1), KNO 3D, MEC 2D (Repulsorlift Operation 3D, Sensors 5D), PER 4D (Investigation 6D, Search 5D), STR 4D, TEC 2D (Security 5D). Espionage hardwired module, humanoid body (two arms, two legs, head), information recording/coded broadcast system, repulsorlift engine, ultraviolet/infrared/analysis sensors, visual/audio sensor package (human range), vocabulator. Simple personality matrix. Designed for battlefield data gathering — spots troop movements and reports detailed analysis of enemy weaknesses to coordinating base. Can be equipped for sabotage and infiltration missions. Additional combat SkillWare turns it into a formidable combat unit. Used by Churhee's Riflemen and other mercenary groups.",
  "source": "WEG40116 Cynabar's Fantastic Technology: Droids p.71"
 },
 {
  "name": "Sienar Intelligence Systems ZQ Infantry Droid",
  "category": "Droids",
  "cost": "8,350",
  "availability": "2, R",
  "game_notes": "Fourth-degree droid. Height: 1m. Move: 11. DEX 3D (Blaster 5D, Dodge 4D, Melee Weapons 4D, Missile Weapons 5D), KNO 1D, MEC 1D, PER 2D (Command 4D, Hide 3D, Search 4D), STR 4D (Brawling 4D+2), TEC 2D (Droid Repair 3D). Repulsorlift engine, heavy blaster cannon (7D), light blaster cannon (5D), two photoreceptors, vocabulator, miniature concussion missile system (8D, 3-10/15/20m, ammo: 10), grasper arm. Simple personality matrix. Highly successful infantry support unit created for Imperial military in the early days of the Empire. Extremely deadly — two main blasters and anti-personnel missile system capable of neutralizing armored combat troops. Both arms contain hardpoints for up to four additional weapon systems. Though the Empire denies it, ZQs still see service on modern battlefields in the Outer Rim. Storm Commando units ('DeathWhispers') have been assigned ~20 ZQs for customization.",
  "source": "WEG40116 Cynabar's Fantastic Technology: Droids p.73"
 },
 {
  "name": "Veril Line Systems EG-6 Power Droid",
  "category": "Droids",
  "cost": "2,500",
  "availability": "2",
  "game_notes": "Fifth-degree droid. Height: 1.1m. Move: 3. DEX 1D, KNO 1D (Languages: Droid Languages 4D), MEC 1D (Energize Power Cells 5D+2), PER 1D, STR 1D, TEC 3D (Machinery Repair 5D, Repulsorlift Repair 4D+1, Systems Diagnosis 5D). Video sensor, bipedal locomotion, ultra-fine manipulator (+1D to Technical skills), system diagnosis package (infrared receptor, sonar, X-ray, spectrometer; +1D to systems diagnosis), Cybot acoustic signaler (droid/computer languages only, cannot speak Basic), armored housing (+2D to Strength). No personality matrix. Designed for low-level stardocks and drop-point flights without standardized refueling. Can reenergize power cells of a Walker-scale vehicle in one standard day, then requires direct attachment to energy reservoir to recharge. Always conserves enough power for own functionality. Extremely susceptible to suggestion — will follow any order literally.",
  "source": "WEG40116 Cynabar's Fantastic Technology: Droids p.76"
 },
 {
  "name": "Industrial Automaton 'Elegance' Message Drone",
  "category": "Droids",
  "cost": "250,000 (new, no longer manufactured), 50,000 (fuel replenishment)",
  "availability": "2, F",
  "game_notes": "Starfighter-scale message drone. Length: 9m. Crew: None (droid brain with Astrogation 5D). Cargo: 15kg. Consumables: 3 weeks. Hyperdrive x1/3 (limited to 1 jump before refueling, max 5 jumps before hyperdrive destroyed by wear). Nav computer limited to 1 jump. Space: 5. Hull: 1D. Sensors — Passive: 100/2D, Scan: 200/3D, Search: 300/4D, Focus: 10/5D. Self-destruct mechanism (600m blast radius, 9D damage). Anti-tampering safeguards: if proper recognition codes not received within 4-10 minutes of sensor contact, self-destruct activates (1 minute cycle). No personality matrix. Pre-HoloNet courier system now making a comeback due to heavy HoloNet traffic restrictions. Many refitted by NewsNet agencies for system-to-system newsfeeds. Only outlying Imperial garrisons still issued these droids.",
  "source": "WEG40116 Cynabar's Fantastic Technology: Droids p.77"
 },
 {
  "name": "Cybot Galactica F1 Exploration Droid",
  "category": "Droids",
  "cost": "2,750",
  "availability": "3",
  "game_notes": "Fifth-degree droid. Height: 1m. Move: 10 (legs). DEX 2D, KNO 1D (Survival 4D), MEC 2D (Communications 2D, Sensors 5D), PER 1D (Hide 2D, Sneak 2D, Search 3D), STR 1D (Lifting 2D), TEC 1D (Security 2D). Four legs, heavy grasper jaw (holds targets without crushing damage), two photoreceptors (human range), auditory sensors (human range), olfactory sensors, motion sensor array (+1D to search for detecting movement, 50m range), communications link to base-ship computer extending from rear, binary vocoder. Elementary personality matrix. Companion and protector for scouts in unknown space — exceptional sensor array forewarns of approaching life forms or vehicles. Can assist injured organics by pulling them to safety and back to a waiting ship. Chassis can be reprogrammed and rebuilt as heavily-armed bodyguards.",
  "source": "WEG40116 Cynabar's Fantastic Technology: Droids p.78; WEG40061 Galaxy Guide 8: Scouts"
 },
 {
  "name": "Veril Line Systems I-C2 Construction Droid",
  "category": "Droids",
  "cost": "1,700,000 (new), 975,000 (used)",
  "availability": "2, F",
  "game_notes": "Fifth-degree droid. Size: 10m tall, 30m long. Move: 7. DEX 0D, KNO 1D, MEC 3D (Ground Vehicle Operation: Integral Tread System 3D+2, Sensors 3D+1), PER 0D, STR 10D (Lifting 11D), TEC 2D (Computer Programming/Repair 3D, General Repair 10D, Machinery Repair 10D). Processing furnace (absorbs damaged structures and debris, disintegrates at 10D walker-scale damage), heavy-duty tread system, multiple lifting/repair appendages, photoreceptor/audio receiver (human range). Simple personality matrix. Equipment: Multiple cleaning and repair tools. Less-expensive, smaller alternative to Imperial construction droids on Coruscant. More independent and self-reliant — can assess situations and initiate repairs without consulting central planning. Used by local governments on lower-tech Outer Rim worlds. VLS uses I-C2 trade concessions to establish factories on lesser-developed planets.",
  "source": "WEG40116 Cynabar's Fantastic Technology: Droids p.79"
 },
 {
  "name": "Veril Line Systems S9 Heavy Power Droid",
  "category": "Droids",
  "cost": "4,000",
  "availability": "2",
  "game_notes": "Fifth-degree droid. Height: 0.75m. Move: 4. DEX 1D, KNO 1D, MEC 1D (Generator Operation 4D), PER 1D, STR 2D, TEC 1D (Power Cell Repair 4D, Starfighter Repair 3D, Space Transports Repair 2D). Reinforced chassis (+1D energy, +2D physical), photoreceptors (human range), binary vocabulator, internal heavy generator (recharges one starfighter-scale vehicle per standard day), heavy treads, extendible power transfer cable (6m). Simple personality matrix. Advanced successor to the EG-6 — higher energy efficiency, recharges starship power cells in the time the EG-6 takes for a landspeeder. Recharge time for own cells much shorter than EG-6. Ideally suited for rough terrain planets. Rebel Alliance actively acquiring these droids. Can be armored and equipped with shielded sensors and minor weaponry for harassment tactics.",
  "source": "WEG40116 Cynabar's Fantastic Technology: Droids p.80"
 },
 {
  "name": "SoroSuub Wanderer Scout Survey Droid",
  "category": "Droids",
  "cost": "17,000 (new), 8,000 (used)",
  "availability": "2",
  "game_notes": "Fifth-degree droid. Size: 1m diameter, 2m tall. Move: 12. DEX 3D (Blaster: Stun Blaster 5D), KNO 0D, MEC 3D, PER 1D (Search 5D), STR 2D (Climbing/Jumping 4D), TEC 1D (Medical Dissection 6D). Eight mechanical legs (arachnid design), photoreceptor eye (360° rotation), stun blaster (5D damage, 3-20/35/50m, for subduing/capturing specimen creatures), three fine manipulators, sensor pack. No personality matrix. Distinctly arachnid design that many find fearsome. Underside bristles with sensor apparatus and equipment. Superior scouting performance but very difficult to add personality matrix — scouting and medical protocols hardwired with processing priority, overriding any new programming. Small processing capacity relative to stored medical/scouting data. Additional storage space could potentially be used to hide data.",
  "source": "WEG40116 Cynabar's Fantastic Technology: Droids p.81"
 },
 {
  "name": "MerenData TS-Arach Pest Control Droid",
  "category": "Droids",
  "cost": "600",
  "availability": "1",
  "game_notes": "Fifth-degree droid. Width: 0.3m. Move: 5. DEX 2D (Blaster: Mounted 4D, Dodge 3D, Pesticide Hose 4D), KNO 1D (Entomology 3D), MEC 1D, PER 3D (Search 5D), STR 2D, TEC 1D. Four legs, small blaster (3D, 2-5/10/20m, ammo: 5), pesticide dispensers (4D), one photoreceptor (human range plus micro-scale), auditory receptors (human range + high-frequency), lifeform sensors, entomology database. Simple personality matrix. Patrols crops hunting and destroying harmful insects and lifeforms. Determines if creatures are threats via lifeform scanner and entomology database — logs non-threats and downloads sightings at end of shift. Functions in virtually any environment. Useful for scouting missions with automap hookup — provides detailed area maps and wildlife holos without setting foot on the ground. High demand on Outer Rim colony worlds.",
  "source": "WEG40116 Cynabar's Fantastic Technology: Droids p.82"
 },
 {
  "name": "Arakyd Seeker Transport Hyperspace Pod",
  "category": "Droids",
  "cost": "20,000",
  "availability": "2",
  "game_notes": "Starfighter-scale automated hyperspace pod for message droids. Length: 2m. Crew: None (droid brain with Astrogation 4D, Space Transports 4D). Passengers: 1 message droid. Consumables: 1 month. Hyperdrive x1. Nav computer limited to 1 jump. Space: 6. Atmosphere: 330; 950 km/h. Hull: 1D+2. Sensors — Passive: 20/1D, Scan: 40/2D, Search: 60/3D, Focus: 3/4D. No weapons. Susceptible to spacejacking — Alliance has captured several. Often modified by criminals to haul small cargo instead of message droids.",
  "source": "WEG40116 Cynabar's Fantastic Technology: Droids p.44; WEG40122 Shadows of the Empire p.108"
 },
 {
  "name": "Imperial Orbital Nightcloak",
  "category": "Ship Equipment",
  "type": "Imperial DMR Orbital Nightcloak",
  "cost": "Not available for sale",
  "availability": "4",
  "game_notes": "Scale: Starfighter. Satellite-based electromagnetic absorption network. Skill: Space transports: remote satellite piloting. Body: 3D. Range: Orbit to surface. Difficulty: Difficult. Blast Radius: 5 kilometers per satellite. Damage: N/A. Absorbs all electromagnetic radiation approaching a planet, remaining in relative stationary orbit on the planet's dayside, effectively swathing the planet in permanent night. An average temperate world can survive no more than four days without solar heat. Forces population to capitulate without destroying the planet — planet can be recovered, albeit in an ecologically crippled state. Vulnerable to anti-orbital attacks by turbolasers or starfighters. Network includes dummy satellites as partial countermeasure. DMR's final report recommends orbital bombardment escort force including TIE fighters and anti-starfighter ships to guard the system. Custom ordnance developed by Imperial Department of Military Research.",
  "source": "WEG40139 Cracken's Threat Dossier p.54"
 }
,{
  "category": "Ship Equipment",
  "name": "Hyperwave Sustainer",
  "type": "Bakuran Hyperwave Inertial Momentum Sustainer (HIMS)",
  "cost": "Not available for sale",
  "availability": "Unique",
  "game_notes": "Anti-interdiction field hyperwave sustainer. Scale: Capital. Skill: Capital ship piloting. The Bakuran hyperwave sustainer allows a ship to pass through an interdiction field. During an 'interrupted jump' the pilot must make successful Very Difficult capital ship piloting rolls for each round the vessel is attempting to travel. The hyperdrive speed of the vessel is reduced to x12. Failure to make at least an Easy total on the required capital ship piloting checks results in a mishap; typically the ship is thrown off course or is damaged and must revert to sublight speeds (at the gamemaster's discretion). Uses a gravitic sensor for fast cut-off of the ship's normal hyperdrive, saving it from damage caused by entering an interdiction field. Simultaneously activates a static hyperspace bubble produced by a hyperspace coil designed to burn up and blow out in the presence of the interdiction field. The static hyperwave bubble cannot provide any thrust, but it can hold the ship in hyperspace while the ship's forward momentum carries it along. Still in preliminary experimental stages; the Corellian Incident marked the device's first battlefield test.",
  "source": "WEG40139 Cracken's Threat Dossier p.135"
 },
 {
  "name": "Spacer's Chest",
  "type": "SoroSuub Wanderer Space Chest",
  "category": "General Equipment",
  "cost": "200",
  "availability": "1",
  "game_notes": "Durable personal storage chest for spacers. Can be protected with an electronic combo-lock (Moderate to pick). Sealed against vacuum. Has the equivalent of 6D strength against damage. Padded compartments for fragile items. Comes in various shapes — cylindrical, rectangular, or small cargo container style. Most spacers customize them with holo-stickers, scratched-in messages, and busted Imperial Customs seals. Recommended contents: spare blaster or hold-out blaster, knife, comlink, medpac, food bars, portable emergency beacon, and a few 100-credit chits beneath a hidden flap.",
  "source": "WEG40141 Platt's Smugglers Guide p.44"
 },
 {
  "name": "Gear Bag",
  "type": "SoroSuub Pak-It Gear Bag",
  "category": "General Equipment",
  "cost": "50",
  "availability": "1",
  "game_notes": "Portable gear bag for transient spacers. Tear and heat-resistant fabric withstands the usual rigors of a spacer's life, but can be cut with a blade or burned by direct flame. Multiple straps and fasteners allow shoulder or back carry. Meagerly padded interior pouches for hard or fragile items. Not as durable or secure as a spacer's chest, but far more portable. Can double as a pillow or mattress when stuffed with soft clothing.",
  "source": "WEG40141 Platt's Smugglers Guide p.44-45"
 },
 {
  "name": "Permit Datapad",
  "type": "BoSS Documentation Datapad",
  "category": "Computers",
  "cost": "1,500",
  "availability": "2, F",
  "game_notes": "Stores official spacer documentation — ship registry, captain's accreditation, arms load-out permit, operating license. A customized BoSS input plug (available only at BoSS and Imperial Space Ministry offices) is the only legal way to alter data. Has a separate 'read only' interface for downloading info to ship computers. Forgery: Altering data by reversing the 'read only' port to 'write only' requires a Heroic forgery roll (high risk of frying the datapad). Using a custom-made BoSS input plug requires a Difficult forgery roll (plug must be acquired or crafted first). Cracking the datapad casing to change documentation requires a Very Difficult forgery roll. Rolling a 1 on the Wild Die means the forger has accidentally fried the circuitry and destroyed the datapad. Sharp customs officers check for hairline cracks, adhesive drips, casing fractures, or data display malfunctions.",
  "source": "WEG40141 Platt's Smugglers Guide p.45-46"
 },
 {
  "name": "Archaic Astrogation Plotter",
  "type": "Republic Sienar Systems A-121 Plotter",
  "category": "Ship Equipment",
  "cost": "1,000-7,500",
  "availability": "4",
  "game_notes": "Manual astrogation plotter from the pioneer days of hyperspace. Assembly of plastic and metal slide rules, factor wheels, and slot charts. If a pilot has all necessary astrographic information on the point of origin and destination, using the plotter quintuples the time a nav computer would ordinarily take and increases the astrogation difficulty by two levels. Downloading coordinates into the ship's hyperdrive motivators requires a jury-rigged interface with a personal computer or sophisticated datapad — a Very Difficult computer programming/repair roll. Useful as a backup when nav computers and ship data systems are inoperable.",
  "source": "WEG40141 Platt's Smugglers Guide p.46-47"
 },
 {
  "name": "Headset Comlink",
  "type": "VargeCorp Hands-Free Comlink",
  "category": "Communications",
  "cost": "100",
  "availability": "1",
  "game_notes": "Hands-free personal comlink. Speaker microphone mounted on an adjustable boom, voice-activated. Earphone covers one ear, leaving the other free. Dials on the earpiece for channel switching and volume. Some models include plug cords to jack into a ship's intercom system (disables normal comlink transmission while plugged in). The microphone transmitter is voice-activated; a comlink will not activate unless spoken to at or above background noise level.",
  "source": "WEG40141 Platt's Smugglers Guide p.47"
 },
 {
  "name": "Thermal Credit Belt",
  "type": "Nuvaplasx Security Belt",
  "category": "General Equipment",
  "cost": "100",
  "availability": "2",
  "game_notes": "Concealed money belt worn flush around the belly. Four fabric credit pouches absorb body heat on the inside and radiate it on the outside, making it more difficult to detect on scans. The soft, warm fabric resists detection during pat-downs. Best worn with loose-fitting clothes — obvious under close-cut outfits. If worn with a blast vest or other torso armor, the user suffers -2 to Dexterity and related rolls. Body heat accentuates the smell of any spice concealed inside — customs sniffers can still detect it.",
  "source": "WEG40141 Platt's Smugglers Guide p.48"
 },
 {
  "name": "Tox Detector",
  "type": "SuriTech Disposable Toxmeter Patch",
  "category": "Medical",
  "cost": "20",
  "availability": "2",
  "game_notes": "Flat, half-meter square metallic patch with a deep-blue circle in the center. Adhesive or magnetic backing for mounting on bulkheads. Visually alerts to poisonous fumes — if the center dot turns from deep blue to any degree of fluorescent orange, something noxious is in the air. Manufactured to react with any gas harmful to those breathing standard human atmospheres; some tailored for specific alien biologies. Single-use: once triggered, the chemical reactant cannot revert. Place midway between deckplates and overhead panels. Used detectors can serve as decoy contamination markers.",
  "source": "WEG40141 Platt's Smugglers Guide p.49"
 },
 {
  "name": "Crate Hooks",
  "type": "Vlanth Cargo Grippers",
  "category": "General Equipment",
  "cost": "50 per pair",
  "availability": "1",
  "game_notes": "Skill: Lifting or melee combat. Damage: STR+1D. Handles with curved, blunted blades used to grasp cargo crates and box handles. Protect a loader's hands from being ragged and chaffed. Can pull boxes from hold recesses, grasp handles, and swing cargo onto repulsor carts. Secondary uses: crack cargo seals, pry open stuck lids, rough climbing claws on softer surfaces. Too small and awkward to parry attacks. Available in various handle styles for different species.",
  "source": "WEG40141 Platt's Smugglers Guide p.49-50"
 },
 {
  "name": "Loader's Gloves",
  "type": "Vlanth LG-70 Hauler's Gloves",
  "category": "General Equipment",
  "cost": "100 per pair",
  "availability": "1",
  "game_notes": "Skill: Lifting or melee combat. Damage: STR+2. Heavy fabric gloves covering hands and forearms with a protective exoskeleton of metal struts and armor plates. Provide extra leverage and protection when moving crates. Metal framework protects hands from cuts and crushing, can be locked in place for extra gripping endurance. Rubber finger and palm pads maintain grip on smooth containers. Unwieldy for anything other than moving cargo or bashing heads — cannot fire blasters, press finger controls, or use datapads. Takes 5 minutes to put on or remove, and requires a second person to help with the second glove.",
  "source": "WEG40141 Platt's Smugglers Guide p.50"
 },
 {
  "name": "Repulsorlift Cart",
  "type": "Ubrikkian Model B Cargo Platform",
  "category": "General Equipment",
  "cost": "500",
  "availability": "2",
  "game_notes": "2 meters long, 1.5 meters wide. Fixed altitude of 0.35 meters. Repulsor coil beneath a platform — keeps cart hovering but provides no propulsion. Pushed/pulled via raised bars on each end. Raised railings with clips for straps and nets to restrain cargo. Notoriously difficult to control without feet on the ground. No substitute for a good cargo skiff, but ideal for dragging crates longer distances through starports.",
  "source": "WEG40141 Platt's Smugglers Guide p.50-51"
 },
 {
  "name": "Servo-Lifter",
  "type": "Verekil Servo-Lifter V-2r",
  "category": "Powersuits",
  "cost": "10,000 (new), 7,000 (used)",
  "availability": "3",
  "game_notes": "Powered exoskeleton for lifting heavy cargo. Scale: Character. Length: 3 meters tall. Skill: Powersuit operation: servo-lifter. Crew: 1. Maneuverability: 1D. Move: 30; 50 kmh. Body Strength: 2D. Can lift up to 1.5 metric tons. Strictly a luxury for spacers — most are better off hiring roustabouts or buying a worker droid.",
  "source": "WEG40141 Platt's Smugglers Guide p.51"
 },
 {
  "name": "Crate Tag Imprinter",
  "type": "MerenData Cargo Label Generator 2-CLG",
  "category": "General Equipment",
  "cost": "1,500",
  "availability": "2, F",
  "game_notes": "Hand-held unit resembling a datapad with a bulky printer attachment. Dedicated freight inventory recorder that prints individual scancode tags. Enter cargo information and the unit imprints a tag with details in coding and lettering: cargo type, number, sender, receiver, authorized transport agent, ship date, hazards/cautions, and system routing data. Takes about one minute to produce one tag. Copy function duplicates data with sequential tracking numbers. No programming prevents mislabeling contents.",
  "source": "WEG40141 Platt's Smugglers Guide p.51-52"
 },
 {
  "name": "Tag Scanner Datapad",
  "type": "MerenData DH-4 Scanner",
  "category": "General Equipment",
  "cost": "150",
  "availability": "2",
  "game_notes": "Standard datapad with inventory tracking programming and a removable comlink-sized scanner unit. Run the sensor over tag coding to record data; plugging it into the datapad socket automatically downloads and interprets scanned information. Can be modified to interpret other scancode coding — requires access to the coding cipher program, a Very Difficult computer programming/repair roll, and a Moderate sensors roll.",
  "source": "WEG40141 Platt's Smugglers Guide p.52"
 },
 {
  "name": "Imperial Customs Holoseal",
  "type": "MerenData Imperial Holoseal",
  "category": "General Equipment",
  "cost": "Not available for sale",
  "availability": "2, R",
  "game_notes": "Plastic stickers used to seal and mark cargo that has passed Imperial Customs inspection. One side has a holographic Imperial symbol, the other is adhesive. Applied along the crack between container body and lid. Each has a register code readable by special Imperial Customs tag scanners. Successfully removing an Imperial holoseal without destroying it is a Very Difficult security task. Seals used by sector and system customs authorities can be removed with a Moderate to Difficult security roll. Tampering with a holoseal is a class four infraction: 1,000-5,000 credit fine, up to a month imprisonment, and cargo confiscation.",
  "source": "WEG40141 Platt's Smugglers Guide p.52-53"
 },
 {
  "name": "Containment Box",
  "type": "Synthtech Medtech Corporation Irradiator Box",
  "category": "General Equipment",
  "cost": "500",
  "availability": "2",
  "game_notes": "Uses broad-spectrum radiation, ultrasonics, and other means to kill bacteria, viruses, and microscopic contaminants on tools and equipment. No larger than a spacer's chest — stows in engineering spaces, cargo holds, or personal quarters. Rechargeable power source. One-minute sterilization cycle. Residual power can foul up scanners, but anyone looking inside will find contraband.",
  "source": "WEG40141 Platt's Smugglers Guide p.53"
 },
 {
  "name": "Containment Booth",
  "type": "Synthtech Medtech Corporation Irradiator Booth",
  "category": "General Equipment",
  "cost": "2,500",
  "availability": "1, F",
  "game_notes": "Larger version of the containment box for sterilizing spacesuits and bulky items. Requires hookup into the ship's power system to operate.",
  "source": "WEG40141 Platt's Smugglers Guide p.53"
 },
 {
  "name": "Cold Crate",
  "type": "SoroSuub CLEK-50 CryoCase",
  "category": "General Equipment",
  "cost": "250 (50 per additional cryo canister)",
  "availability": "2",
  "game_notes": "Insulated crate with a small cryogenic unit mounted at one end. Temperature adjustable from cool to well below freezing. Power and liquid gas maintain freezing temperatures for 50 standard hours; low temperatures maintained indefinitely by recharging fuel cells from ship's generator and replacing cryo canisters. Most are 1m wide, 2m long, 1m deep. Not designed for suspended animation. Extreme temperatures and insulated case block most sensors — hide contraband at the bottom under frozen cargo. Few customs inspectors willing to chip through frozen filla-fish.",
  "source": "WEG40141 Platt's Smugglers Guide p.54"
 },
 {
  "name": "Hot Box",
  "type": "SoroSuub HT-50 Heated Crate",
  "category": "General Equipment",
  "cost": "250",
  "availability": "2",
  "game_notes": "Insulated crate with a heater unit in the base. Temperature adjustable from warm to near-boiling. Pressure valves vent excess steam (recommend hooking to a hose). Power cells keep contents hot for up to 50 hours, rechargeable from ship's generator. Check every 10 hours — heater units tend to overheat and pressure valves sometimes jam. If carrying more than 5 hot boxes, lower bay temperature and seal hatches. Vented steam can turn cargo bay into a humid nightmare. Insulated body and excessive heat foil sensors; vented steam fouls readings on nearby crates. Not very good for smuggling — few items withstand prolonged heat and humidity.",
  "source": "WEG40141 Platt's Smugglers Guide p.54-55"
 },
 {
  "name": "Sleight Box",
  "type": "Ecls Industries R-Coil Crate",
  "category": "General Equipment",
  "cost": "750-2,000",
  "availability": "3, X",
  "game_notes": "Looks like an ordinary cargo container but has a low-powered repulsorlift coil matrix and power supply concealed in the bottom casing. A small compensation field helps the repulsor field neutralize the weight of anything inside, making the box feel empty. Fools most customs officials who don't look inside — avoid holoseals or tag markers indicating cargo within. Scans detect the energy source on a Difficult sensors roll; increase difficulty one level if stowed near another power source. Custom-made in smuggler shadowports; not available from regular freight outfitters.",
  "source": "WEG40141 Platt's Smugglers Guide p.55"
 },
 {
  "name": "Cargo Netting",
  "type": "SoroSuub 1010 Cargo Restraint",
  "category": "General Equipment",
  "cost": "100 per 10x10 meter section",
  "availability": "2",
  "game_notes": "Webbing to tie down and partition crates in cargo bays. Tightly woven synthetic fiber straps fastened at crossings by sturdy metal grommets. Adjustable edge straps with durable hooks, buckles, and clamps for securing to hold fixtures. Resists normal wear and tear but can be cut with a blade and is easily melted by blaster fire. Netting straps have 3D Strength for resisting damage. Not effective for capturing anything unless used in a pitfall or with weighted edge straps.",
  "source": "WEG40141 Platt's Smugglers Guide p.55-56"
 },
 {
  "name": "Portable Emergency Beacon",
  "type": "Chedak Emergency Pack",
  "category": "Survival Gear",
  "cost": "1,000",
  "availability": "2",
  "game_notes": "About the size of two medpacs. Contains one burst beacon broadcasting position on emergency frequency — anyone within 4 light years will pick it up. Strobe marks position for search parties within a few km. Detachable glow rod lantern. Powered by a mini-fusion generator (250 hours capacity). Power jack recharges glow rods, blaster power packs, and low-power accessories — each charge drains about 1 hour from generator. Heat vent with fan warms immediate area. Activated by a rip-cord switch — once activated, cannot be shut off until generator dies. Rigging it for on/off capability is a Moderate Technical task but risks blowing out all powered components.",
  "source": "WEG40141 Platt's Smugglers Guide p.56-57"
 },
 {
  "name": "Personal Strobe Locator",
  "type": "Saladar Systems Solo Strobe",
  "category": "Survival Gear",
  "cost": "100",
  "availability": "2",
  "game_notes": "Comlink-sized personal strobe with a ring for hooking and a retractable spike for ground placement. Flashes once every 5 seconds for up to 20 hours, visible for 3 km. Rechargeable from most energy sources. Can be turned on and off as needed. Can be used as a blinding distraction in dark conditions — flick on for one burst to temporarily blind a target (like a reusable flash grenade).",
  "source": "WEG40141 Platt's Smugglers Guide p.57"
 },
 {
  "name": "Survival Pack",
  "type": "Chedak Survival Kit",
  "category": "Survival Gear",
  "cost": "750",
  "availability": "2",
  "game_notes": "Knapsack crammed with survival supplies for uncivilized environments. Standard contents: 2 weeks rations, 3 medpacs, glow rod, 2 thermal flares, single-person di-chrome shelter, breath mask, 6 meters syntherope, knife, portable fusion power generator. Multiple lanyards, hooks, rings, and pockets for additional gear. Experienced smugglers customize contents — swap power generator for a portable emergency beacon, replace flares with a hold-out blaster, add a personal flamer for starting fires.",
  "source": "WEG40141 Platt's Smugglers Guide p.58"
 },
 {
  "name": "Aqua Survival Shelter",
  "type": "Vaterenn Environmentals Flotation Shelter",
  "category": "Survival Gear",
  "cost": "2,500",
  "availability": "2",
  "game_notes": "Ocean survival raft. Comes in a pack the size of a large spacer's chest. Grasp rip handle and toss — inflates with rising support struts forming a two-person di-chrome shelter. Flotation material withstands reasonable acidity/saltiness but moderately corrosive liquid eats through it. Built-in homing beacon broadcasts on civilian and military emergency channels up to 4 light years, activates on deployment. Powered by a small fusion generator (250 hours, with heat vent). Detachable supply bundle: 2 weeks rations, glow rod, 6m syntherope, 2 medpacs, large fresh water tank (some models include a water purifier). Includes collapsible bailing bucket and quick-patch repair kit with mini-inflator. No propulsion, but shelter components can be dismantled into a makeshift sail. Supplies support 2 people for 2 weeks; reduce time if more are aboard.",
  "source": "WEG40141 Platt's Smugglers Guide p.58-59"
 },
 {
  "name": "Electronic Combination Hatch Lock",
  "type": "VargeCorp Cipher Security Seal",
  "category": "Security",
  "cost": "750",
  "availability": "2, F",
  "game_notes": "Installing yourself requires a Difficult security roll. Failure means the lock sometimes sticks or doesn't engage all the way. Bypassing requires a Difficult security roll.",
  "source": "WEG40141 Platt's Smugglers Guide p.59"
 },
 {
  "name": "Key Card Ship's Lock",
  "type": "Aratech Cardset System",
  "category": "Security",
  "cost": "1,000",
  "availability": "2, F",
  "game_notes": "Installing yourself requires a Difficult security roll. Failure means the lock sometimes sticks or doesn't engage all the way. Comes with two imprinted key cards. Bypassing requires a Very Difficult security roll.",
  "source": "WEG40141 Platt's Smugglers Guide p.59"
 },
 {
  "name": "Remote Control Hatch Lock",
  "type": "VargeCorp Ranged Lock",
  "category": "Security",
  "cost": "1,250",
  "availability": "2, F",
  "game_notes": "Installing yourself requires a Very Difficult security roll. Failure means the lock sometimes sticks or doesn't engage all the way. Remote control unit has a range of 30 meters. Bypassing requires a Very Difficult security roll.",
  "source": "WEG40141 Platt's Smugglers Guide p.59"
 },
 {
  "name": "Console Lock Panel",
  "type": "VargeCorp CS-20 Board Plate",
  "category": "Security",
  "cost": "300 (electronic combination), 500 (key card)",
  "availability": "2",
  "game_notes": "Large metal plate form-molded to cockpit console contours, slides into place and locks down over controls. Installing yourself requires a Difficult security roll. Failure means the panel sometimes sticks or doesn't engage all the way. Bypassing the lock mechanism requires a Moderate security roll. Takes 6 rounds to engage or remove. Must stow the heavy metal panel during flight. A bit of a hindrance — takes a minute to put on or remove, and needs a second person ideally.",
  "source": "WEG40141 Platt's Smugglers Guide p.60"
 },
 {
  "name": "Console Dead Lock",
  "type": "Arakyd PowerLock 2500",
  "category": "Security",
  "cost": "1,000 (electronic combination), 1,500 (key card)",
  "availability": "2",
  "game_notes": "Hooks directly into the power coupling to cockpit controls. When engaged, cuts the energy feed to control boards until the proper combination or key card is used. Installed beneath control panels where not easily noticeable. Have a professional install it — installing yourself requires a Very Difficult security roll; failure damages cockpit instrumentation and controls. Damage by inexperienced thieves often blows command consoles or melts wiring. Bypassing requires a Very Difficult security roll.",
  "source": "WEG40141 Platt's Smugglers Guide p.60-61"
 },
 {
  "name": "Starship Tool Kit",
  "type": "SoroSuub Journeyman Tool Box",
  "category": "Tools",
  "cost": "200",
  "availability": "1",
  "game_notes": "Sturdy box organized into neat compartments with one of nearly every kind of tool needed for starship repairs. Includes basic hydrospanners and servodrivers, plus extra power couplings, a spool of all-purpose wiring, and one strip of hull-patch metal. Adds +1D to any starship-related repair rolls.",
  "source": "WEG40141 Platt's Smugglers Guide p.61"
 },
 {
  "name": "Power Prybar",
  "type": "SoroSuub Prybar 2H00",
  "category": "Tools",
  "cost": "30",
  "availability": "1",
  "game_notes": "Metal prybar with joined fulcrums and hydraulic pistons. A small pressure computer gauges force and uses hydraulics to provide extra leverage. Internal energy cell is long-lasting and replaceable. Can't pry gaps wider than 10 cm. Adds +1D to +3D when used to pry things up, open, or apart. Damage as melee weapon: STR+1D.",
  "source": "WEG40141 Platt's Smugglers Guide p.62"
 },
 {
  "name": "Servodriver",
  "type": "Corellian Engineering SD-47",
  "category": "Tools",
  "cost": "50",
  "availability": "1",
  "game_notes": "Shaft handle with a sonic drive head. Torque surface perpendicular to shaft — must hold upright relative to fastener. Tightens or loosens screws, bolts, and twist fasteners. Power cell lasts years. Switch for clockwise, counterclockwise, or off. Zero-gravity compensators included. Each servodriver handles a certain size range of bolts. Bonuses for repair work range from +1 to +1D at GM discretion.",
  "source": "WEG40141 Platt's Smugglers Guide p.62"
 },
 {
  "name": "Hydrospanner",
  "type": "Corellian Engineering V-07 Hydrospanner",
  "category": "Tools",
  "cost": "50",
  "availability": "1",
  "game_notes": "Sonic drive head mounted parallel to the shaft, allowing side-access to bolts, nuts, and screws in hard-to-reach places. Same energy capacity, power controls, and varied size range as a servodriver. Bonuses for repair work range from +1 to +1D at GM discretion.",
  "source": "WEG40141 Platt's Smugglers Guide p.62"
 },
 {
  "name": "Power Scanner",
  "type": "VargeCorp Energy Tester",
  "category": "Tools",
  "cost": "150",
  "availability": "1",
  "game_notes": "Diagnostic tool monitoring energy flow through circuits, conduits, and power couplings. Hand-held box with digital power readout and variable settings for many energy ranges. Two extendible wires with clamp leads connect to power sources. Tests conductive metal and connection points. Can be cannibalized for parts (wires, digital readout, energy flux capacitors, micro-power regulators). Can be hooked to an inactive power line as a diversion — turning on the power blows the scanner in a shower of sparks. Bonuses for repair work range from +1 to +1D at GM discretion.",
  "source": "WEG40141 Platt's Smugglers Guide p.63"
 },
 {
  "name": "Laser Welder",
  "type": "Boralite Metalworking & Materials LSW-983",
  "category": "Tools",
  "cost": "50",
  "availability": "1",
  "game_notes": "Two independently directed laser emitters for welding seams in metal. Also effective for slicing through most high-grade reinforced plastics. Internal power cell provides about 50 hours of use, rechargeable via standard adapter or ship power systems. Emitters finely tunable from 0.2-20 cm weld diameter. Keep spare hull plating strips nearby for hull breaches. Bonuses for repair work range from +1 to +1D at GM discretion.",
  "source": "WEG40141 Platt's Smugglers Guide p.63"
 },
 {
  "name": "Fusion Cutter",
  "type": "Boralite Metalworking & Materials PCW-876",
  "category": "Tools",
  "cost": "75",
  "availability": "1",
  "game_notes": "Variable-beam fusion cutter that shears through most metals, plastics, and ceramics up to 25 cm thick in seconds. Great for slicing through entry hatch deadbolt seals. Can be used as a melee weapon at close range — accidental exposure to beam causes 3D-6D damage. Bonuses for repair work range from +1 to +1D at GM discretion.",
  "source": "WEG40141 Platt's Smugglers Guide p.63"
 },
 {
  "name": "Tech Vacuum Suit",
  "type": "LifeLine TechMaster II Vacuum Suit",
  "category": "Spacesuits",
  "cost": "1,000",
  "availability": "1",
  "game_notes": "Bare-essentials vacuum suit tailored for starship repair work in space. Covered with tool harnesses, sealable pouches, syntherope tether, and padded guards for knees, elbows, and shoulders. Tight-fitting gloves for intricate manipulation. Trades temperature regulators, waste recyclers, and extra atmosphere for more mobility. Since the suit is only insulated, not heated, a character in space must make a Moderate stamina or Strength check every hour or suffer a wound from freezing cold.",
  "source": "WEG40141 Platt's Smugglers Guide p.64"
 },
 {
  "name": "Flitter Vacuum Suit",
  "type": "Corellian Engineering Flitter",
  "category": "Spacesuits",
  "cost": "1,500",
  "availability": "2",
  "game_notes": "Skill: Rocket pack operation. Tech vacuum suit with more durable fabric resistant to tears and punctures from space debris. Includes a small maneuvering backpack unit with rocket nozzles, controlled from a wrist-mounted panel. Pack has fuel for only a few bursts — enough to scoot back to a ship. Reinforced fabric provides +2 bonus when resisting physical attacks. Same insulation as tech suit — unless a character executes a 'heater burn' (Moderate rocket pack operation roll), must make a Moderate stamina or Strength check every hour or suffer a wound from freezing cold. A heater burn fires half the engines then uses opposing thrust to neutralize momentum, warming the suit.",
  "source": "WEG40141 Platt's Smugglers Guide p.64-65"
 },
 {
  "name": "ASP-7 Droid",
  "type": "Industrial Automaton ASP-7",
  "category": "Droids",
  "cost": "1,000 (new), 300 (used)",
  "availability": "1",
  "game_notes": "Height: 1.6m. Move: 6. DEX 1D, KNO 1D, MEC 1D, PER 1D (search 2D), STR 1D (lifting 2D), TEC 1D. Simple menial laborer. Restricted vocabulary — only replies 'affirmative' or 'negative.' Can be upgraded with new programming and physical modifications.",
  "source": "WEG40141 Platt's Smugglers Guide p.65"
 },
 {
  "name": "B1 Worker Droid",
  "type": "AccuTronics B1 Worker Droid",
  "category": "Droids",
  "cost": "9,800 (new), 6,400 (used)",
  "availability": "2, F",
  "game_notes": "Move: 6. DEX 1D, KNO 1D, MEC 1D, PER 1D, STR 8D (lifting 10D, stamina 4D), TEC 1D. Reinforced chassis with exceptional strength and a third stabilizer leg (+1D to lifting when deployed). Durable chassis makes good portable cover. Extremely limited intelligence — stomps around, doesn't watch where it dumps crates, takes orders from anyone, can't learn new tasks. Tiny visual spectrum scanners easily shot off.",
  "source": "WEG40141 Platt's Smugglers Guide p.66"
 },
 {
  "name": "Binary Load Lifter",
  "type": "Cybot Galactica Binary Load Lifter",
  "category": "Droids",
  "cost": "2,500",
  "availability": "2, F",
  "game_notes": "Move: 7. DEX 1D, KNO 1D, MEC 1D, PER 1D, STR 6D (lifting 8D), TEC 1D. About 3 meters tall when fully standing. Can lift cargoes higher, farther, and faster than B1 workers. Responds to simple verbal commands. Oblivious to surroundings — life preservation programming prevents harm to living beings but tends to march uncomfortably close to people. Often too big for light freighters; common on bulk freighters and in major starports.",
  "source": "WEG40141 Platt's Smugglers Guide p.66"
 },
 {
  "name": "LE Repair Droid",
  "type": "Cybot Galactica LE Repair Droid",
  "category": "Droids",
  "cost": "12,800 (new), 6,500 (used)",
  "availability": "2",
  "game_notes": "Move: 7. DEX 1D, KNO 2D, MEC 2D (astrogation 2D+1, communications 3D, sensors 3D), PER 1D, STR 2D, TEC 2D (capital starship repair 4D, computer programming/repair 5D, space transports repair 3D). Combination astromech and protocol droid — carries out maintenance duties and interacts decently with people. Learns quickly on technical and social ends; develops loyal personality over time.",
  "source": "WEG40141 Platt's Smugglers Guide p.66"
 },
 {
  "name": "NR-5 Maintenance Droid",
  "type": "Cybot Galactica NR-5 Maintenance Droid",
  "category": "Droids",
  "cost": "2,200",
  "availability": "2",
  "game_notes": "Move: 3. DEX 1D (dodge 1D+2), KNO 1D, MEC 1D, PER 1D, STR 1D, TEC 1D (computer programming/repair 4D, security 2D, space transports repair 3D). Wide-band comm receptor. Retractable heavy grasper arm (+1D to lifting). Retractable fine manipulator arm. Small circular saw (4D). Narrower tread base than WED droids allows access to tighter spaces. Longer, more adjustable visual receptor arm for poking around tight spots.",
  "source": "WEG40141 Platt's Smugglers Guide p.66-67"
 },
 {
  "name": "R5 Astromech Droid",
  "type": "Industrial Automaton R5-Series Astromech",
  "category": "Droids",
  "cost": "2,000",
  "availability": "2",
  "game_notes": "Move: 5. DEX 1D, KNO 1D, MEC 1D, PER 1D, STR 1D, TEC 2D (computer programming/repair 4D, space transports repair 4D). Retractable heavy grasper arm (+1D to lifting, max 2D), retractable fine worker arm, small circular saw (4D), holographic projector/recorder, fire extinguisher. Cheaper alternative to R2s — breaks down more easily, holds only 1 set of astrogation coordinates. Simple personality matrix. Not heavily monitored by Imperial Intelligence.",
  "source": "WEG40141 Platt's Smugglers Guide p.67"
 },
 {
  "name": "V5-T Transport Droid",
  "type": "Veril Line Systems V5-T Transport Droid",
  "category": "Droids",
  "cost": "2,500 (tread), 4,500 (repulsorlift)",
  "availability": "2",
  "game_notes": "Move: 35 (tread), 50 (repulsorlift). DEX 1D, KNO 1D, MEC 1D, PER 1D, STR 4D, TEC 1D. Retractable lifting arm (lifting 4D). Can carry up to 2 metric tons in low-walled payload area. Tread versions are slower but more stable than repulsorlift models. Doubles as uncovered personnel transport. Not very smart — takes commands from almost anyone unless security recognition routine installed. Good for long-distance cargo transport but less efficient than B1s or binary lifters for loading/unloading.",
  "source": "WEG40141 Platt's Smugglers Guide p.67-68"
 },
 {
  "category": "Ship Equipment",
  "name": "Sensor Baffling",
  "type": "Arakyd Nightshadow Anti-Sensor Treatment",
  "cost": "20,000/starfighter Hull die; 50,000/capital Hull die (ignore pips)",
  "availability": "4, X",
  "game_notes": "Sensor countermeasure coating. Light treatment (1 coat) adds 1D to sensor operator's difficulty to detect the ship. Heavy treatment (2 coats) adds 2D. Additional coats are futile — does not prevent detection of engine exhaust. Ships 500+ meters long, blunt/angular, or with more than 5D Hull (either scale) can only be baffled to 1D protection. Slender, rounded ships (e.g. smaller Mon Calamari vessels) baffle more effectively. Possession of a sensor-baffled ship is an Imperial code one violation.",
  "source": "WEG40143 Pirates & Privateers p.38"
 },
 {
  "category": "Ship Equipment",
  "name": "Sensor Mask",
  "type": "Fabritech Vanish 2 Military Sensor Masking System",
  "cost": "150,000 per starfighter Hull die; 300,000 per capital Hull die",
  "availability": "4, X",
  "game_notes": "When activated, adds 2D to enemy sensor operator's difficulty to detect and identify. Can be turned on/off (less obvious than baffling). Monitors conditions around ship (radiation, comm signals, visible light) and re-emits them on opposite side — effectively camouflages the ship. Leaves a refracting edge but otherwise invisible. Current masking technologies offer a maximum of 3D sensor protection. Combined with baffling and other stealth techniques, can render a ship virtually invisible.",
  "source": "WEG40143 Pirates & Privateers p.38"
 },
 {
  "category": "Ship Equipment",
  "name": "Sensor Decoy (Trickster)",
  "type": "Corellian Engineering Trickster Drone",
  "cost": "7,500 (1 tube + 5 drones); 500/additional drone",
  "availability": "2, F",
  "game_notes": "Adds 2D to sensor operator's difficulty to discriminate between decoy and real ship. Includes 5 drones. Drones move in pre-programmed pattern up to speed 5. Cannot be used in atmosphere. Decoy tubes cost ~5,000 per tube to install, or standard missile/torpedo launchers can be modified (Moderate starship weapon repair) to accept decoys (launcher can no longer fire regular ordnance).",
  "source": "WEG40143 Pirates & Privateers p.39"
 },
 {
  "category": "Ship Equipment",
  "name": "Sensor Decoy (Mimic)",
  "type": "MerenData Mimic Sensor Decoy",
  "cost": "13,000 (2 tubes + 3 decoys); 1,000/additional decoy",
  "availability": "2, X",
  "game_notes": "Adds 2D to sensor operator's difficulty to discriminate between decoy and real ship. Decoys move up to speed 10, have simple droid brains, and can be issued new movement instructions via comlink or programmed with several patterns. False image option impersonates one of 5 preloaded profiles: ship of origin, TIE/ln, YT-1300, Lambda shuttle, or Corellian corvette. New profiles: Moderate droid programming roll + appropriate signal profile.",
  "source": "WEG40143 Pirates & Privateers p.39"
 },
 {
  "category": "Ship Equipment",
  "name": "Comm Jammer",
  "type": "IntelStar Silencer Comm Jammer",
  "cost": "5,000 plus installation",
  "availability": "2, R",
  "game_notes": "Skill: Communications. Floods comm frequencies with static. Operates 10 combat rounds before recharging (10 rounds to recharge). Subtract 1 round operating time per fire arc jammed (focused jamming subtracts 5 rounds). Opposed communications roll; jamming ship gains bonus dice based on arcs jammed: All arcs +0D, 3 arcs +1D, 2 arcs +2D, 1 arc +3D, focused (1 ship) +4D.",
  "source": "WEG40143 Pirates & Privateers p.39"
 },
 {
  "category": "Ship Equipment",
  "name": "Sensor Jammer (Starship)",
  "type": "IntelStar BlindSide Sensor Jammer",
  "cost": "5,000 plus installation",
  "availability": "2, X",
  "game_notes": "Skill: Sensors. Floods sensor frequencies with static. Opposed sensors roll against jamming ship's sensor operator. Jamming ship adds its sensor dice to the jamming roll, using standard sensor arcs, active modes only.",
  "source": "WEG40143 Pirates & Privateers p.39"
 },
 {
  "category": "Ship Equipment",
  "name": "Baffled Drive",
  "type": "Rendili StarDrive WhisperThrust",
  "cost": "100,000+ (black market); extra tank: 7,000",
  "weight": "20 metric tons; extra tank: 2 metric tons",
  "availability": "4, X",
  "game_notes": "Highly illegal baffled realspace drive using supercooled chemical thrust. Allows ship to move while running silent at base speed 2. Detectability: Cautious movement = no more detectable than drifting; Cruise +5 to sensor operator's roll; High Speed +10; All-Out +15. Fuel capacity: 100 spatial units of movement. Fuel synthesis requires 120 liters spin-sealed tibanna gas + 2 kg high-grade hyperbarides + standard power generator; refining takes ~3 standard days.",
  "source": "WEG40143 Pirates & Privateers p.39-40"
 },
 {
  "category": "Ship Equipment",
  "name": "Backup Battery",
  "type": "CEC Lifesaver Emergency Battery",
  "cost": "10,000",
  "weight": "1 metric ton",
  "availability": "2",
  "game_notes": "Life support fail-safe providing up to 1 hour extra survival during catastrophic power failure. Pirates use these when running silent — normally life support fails in minutes without power, but the backup battery extends silent running significantly.",
  "source": "WEG40143 Pirates & Privateers p.40"
 },
 {
  "category": "Ship Equipment",
  "name": "Transponder Code Masking Modulator",
  "type": "Code Masking Device",
  "cost": "1,500-6,000 (varies by number of codes)",
  "availability": "4, X",
  "game_notes": "Interferes with ship's transponder code, producing a new code or mimicking another ship of the same model. Codes switchable from ship controls. Installation difficulty by number of additional codes: 1 code Easy/1,500cr, 2 codes Moderate/3,000cr, 3 codes Difficult/4,500cr, 4 codes Very Difficult/6,000cr. Detection: 5+ codes Easy sensors, 4 codes Moderate, 3 codes Difficult, 2 codes Very Difficult, 1 code Heroic. Acquiring another ship's code: 1 week research + 1,000cr per code. Registering a code: Moderate-Difficult con or bureaucracy + 1,000cr per code.",
  "source": "WEG40143 Pirates & Privateers p.40-41"
 },
 {
  "category": "Spacesuits",
  "name": "Armored Vacuum Suit",
  "type": "Corellian Technologies Boarding Armor",
  "cost": "4,000",
  "availability": "2, R",
  "game_notes": "Based on classic Incom vacuum suit. 10 hours atmosphere, Moderate stamina check every hour in vacuum or suffer a wound. +1D vs energy and physical damage. -1D from Dexterity and related skills in gravity. Self-patching.",
  "source": "WEG40143 Pirates & Privateers p.44"
 },
 {
  "category": "Spacesuits",
  "name": "Armored Spacesuit",
  "type": "Merr-Sonn Weapons Superior Boarding Armor",
  "cost": "10,000",
  "availability": "2, X",
  "game_notes": "Simpler than spacetrooper armor but adequate for most boarders. 25 hours atmosphere, heating unit, waste unit, onboard food supplements. Self-patching, includes comlink. +2D vs energy and +1D vs physical damage. -1D from Dexterity and related skills in gravity. Includes rocket pack (Space Move: 1, uses rocket pack operation).",
  "source": "WEG40143 Pirates & Privateers p.44; Gundark's Fantastic Technology p.58"
 },
 {
  "category": "Ship Equipment",
  "name": "Ion Cannon (Light)",
  "type": "Comar f-2 Ion Cannon",
  "cost": "1,000",
  "weight": "0.5 metric tons",
  "availability": "2, F",
  "game_notes": "Scale: Starfighter. Skill: Starship gunnery. Space Range: 1-3/7/36. Atmo Range: 100-300/700/3.6 km. Fire Control: 1D. Damage: 2D (ion). Cheap and simple, suitable for light defense.",
  "source": "WEG40143 Pirates & Privateers p.45"
 },
 {
  "category": "Ship Equipment",
  "name": "Ion Cannon (Medium)",
  "type": "Comar f-4 Ion Cannon",
  "cost": "1,500",
  "weight": "1 metric ton",
  "availability": "2, F",
  "game_notes": "Scale: Starfighter. Skill: Starship gunnery. Space Range: 1-3/7/36. Atmo Range: 100-300/700/3.6 km. Fire Control: 2D. Damage: 3D (ion). Moderately more powerful version of the f-2.",
  "source": "WEG40143 Pirates & Privateers p.45"
 },
 {
  "category": "Ship Equipment",
  "name": "Ion Cannon (Heavy)",
  "type": "Comar f-9 Ion Cannon",
  "cost": "3,000",
  "weight": "1 metric ton",
  "availability": "2, F",
  "game_notes": "Scale: Starfighter. Skill: Starship gunnery. Space Range: 1-3/7/36. Atmo Range: 100-300/700/3.6 km. Fire Control: 4D. Damage: 4D (ion). Same power as f-4 but with superior fire control computer.",
  "source": "WEG40143 Pirates & Privateers p.45"
 },
 {
  "category": "Ship Equipment",
  "name": "Tractor Beam (Light)",
  "type": "Bonadon Cargo-Mover Tractor Beam",
  "cost": "8,000",
  "weight": "15 metric tons",
  "availability": "2",
  "game_notes": "Scale: Starfighter. Skill: Starship gunnery. Space Range: 1-3/7/15. Atmo Range: 100-300/700/1.5 km. Fire Control: 2D. Damage: 2D. Standard commercial cargo tractor beam, adaptable to less legitimate pursuits. Beam pulls smaller vessel toward freighter (if freighter is smaller, it is drawn toward the other ship instead).",
  "source": "WEG40143 Pirates & Privateers p.45; WEG40063 Galaxy Guide 6: Tramp Freighters p.42"
 },
 {
  "category": "Ship Equipment",
  "name": "Conner Web",
  "type": "SoroSuub Type IV Ship Restraining Net",
  "cost": "5,000 per canister",
  "availability": "2, R",
  "game_notes": "Scale: Starfighter. Skill: Starship gunnery. Space Range: 1/5/10. Atmo Range: 100/500/1 km. Fire Control: 2D. Damage: 5D (ion). Base difficulty: Difficult. Net is 50m diameter. Enmeshes a ship and delivers strong electrical charge — ionizes controls. Battery lasts 1 hour, can be switched off by signal from firing ship. Works in space or atmosphere (updated from older ground-only Conner nets).",
  "source": "WEG40143 Pirates & Privateers p.45"
 },
 {
  "category": "Ship Equipment",
  "name": "Concussion Missile Launcher",
  "type": "Arakyd Morne-3 Concussion Missile Launcher",
  "cost": "3,500 (launcher); 500/dumb missile, 1,500/smart missile, 3,000/savant missile",
  "availability": "2, X",
  "game_notes": "Scale: Starfighter. Skill: Starship gunnery. Space Range: 1-2/8/15. Atmo Range: 100-200/800/1.5 km. Fire Control: 1D. Damage: 8D. Weight: 3 metric tons. Includes 10-missile rack. Dumb missiles (500 cr): no tracking. Smart missiles (1,500 cr): 4D fire control, move 15 spatial units/round for up to 10 rounds, droid brain picks nearest target if first moves out of range. Savant missiles (3,000 cr): act dumb on first round, become smart on second round if they miss. Requires Imperial permit (30% surcharge).",
  "source": "WEG40143 Pirates & Privateers p.45; WEG40063 Galaxy Guide 6: Tramp Freighters p.40"
 },
 {
  "category": "Medical",
  "name": "MedKit",
  "type": "BioTech MedKit",
  "cost": "2,200 (full kit); 1,000 (reload medpacs)",
  "availability": "2",
  "game_notes": "Skill: First aid or (A) Medicine. Can be used as a medpac up to 10 times. Diagnostics sensor: Easy first aid roll to diagnose diseases, assess health, and basic medical uses. Sufficiently equipped for field surgery with medicine advanced skill (exhausts medpacs).",
  "source": "WEG40143 Pirates & Privateers p.47"
 },
 {
  "category": "Communications",
  "name": "Alliance Communications Encoder",
  "type": "Alliance Communications Encoder/Decoder",
  "cost": "Not for sale",
  "availability": "4",
  "game_notes": "Skill: Communications. Standard Alliance privateer/military equipment. Adds +2D to communications skill for encoding or decoding transmissions, making intercepted comms difficult or impossible to understand. Also carries Code Quasar, a METOSP broadcast identifying the ship as an Alliance privateer (no game effect — equivalent to flying an ID flag).",
  "source": "WEG40143 Pirates & Privateers p.47"
 },
 {
  "category": "Spacesuits",
  "name": "Shipsuit",
  "type": "Ayelic/Krongbing Textiles Shipsuit",
  "cost": "200",
  "availability": "1",
  "game_notes": "Multi-pocketed coverall for tools and equipment. Tough synthweave fabric lasts years — fireproof and electrically nonconductive (but not heat-resistant). Functions as a vacuum suit internal body sleeve, allowing fast change into EVA gear.",
  "source": "WEG40143 Pirates & Privateers p.47"
 },
 {
  "category": "Tools",
  "name": "Squib Battering Ram",
  "type": "Fegigrish Heavy Industrials Battering Ram",
  "cost": "3,500",
  "availability": "3",
  "game_notes": "Scale: Character. Shoulder-mounted structural weakener — large square plate clamped against target; alternating energy pulsations batter at molecular level until obstruction gives way. 4D (P&P) to 6D (Galladinium) damage against body of wall or door. Will eventually hammer through any door or hatchway. Not intended for breaching hull integrity. Also useful for after-hours 'withdrawals' from locked financial institutions.",
  "source": "WEG40143 Pirates & Privateers p.47; WEG40025 Galladinium's Fantastic Technology p.57"
 },
 {
  "category": "Tools",
  "name": "Plasma Punch",
  "type": "Drever Corporation Phoenix Plasma Punch",
  "cost": "5,000",
  "availability": "2, X",
  "game_notes": "Scale: Starfighter. Variable setting cutter — cuts circles from 3cm to 3m diameter. Damage: 6D. Can cut through any material including quadranium and magnetically sealed hatches given time. Very power-hungry: 2 activations of up to 10 minutes each before batteries drain; 6-hour recharge. Range: 0-2m. Impractical as ship-to-ship weapon. Favored by Imperial Customs branches.",
  "source": "WEG40143 Pirates & Privateers p.47"
 },
 {
  "category": "Ship Equipment",
  "name": "Plasma Torch Boarding Device",
  "type": "BlasTech Plasma Cut Boarding Device",
  "cost": "4,750",
  "availability": "X",
  "game_notes": "Scale: Starfighter. Skill: Starship gunnery. Crew: 2. Mounted on ship's airlock system, controls just inside main airlock. Extendable plasma torch: Fire Control 0D, Range 4m, Damage 8D. Roll target ship's hull -2D; 'lightly damaged' = hull breached. After breach, 1 full minute to cut a 1m x 2m hole. Extendable boarding tube attaches to hull and forms airtight seal in 30 seconds. Restricted technology — normally used by military smuggling interdiction ships. Illegally obtained torches are often used by pirates and shipjackers.",
  "source": "WEG40143 Pirates & Privateers p.48; WEG40042 Han Solo and the Corporate Sector Sourcebook p.101"
 },
 {
  "category": "Security",
  "name": "Lock Breaking Kit",
  "type": "Individual Manufacture Security Code De-scrambler",
  "cost": "8,000 (legitimate); 16,000+ (black market)",
  "availability": "4, R or X",
  "game_notes": "Skill: Security. Adds +2D to security skill when attempting to open an electronically sealed entryway. Most kits are self-assembled from other tool kits with rare components from security manufacturers.",
  "source": "WEG40143 Pirates & Privateers p.48"
 },
 {
  "category": "Ship Equipment",
  "name": "Universal Airlock",
  "type": "SoroSuub Corp. Universal Airlock",
  "cost": "3,000",
  "availability": "2",
  "game_notes": "Space-to-ship portable airlock. Durable synthetic fabric over collapsible frame. Collapsed: 0.5m diameter. Expanded: 5m diameter capsule with hatch and bag-lock. Bag-lock exits to space, pressurized by high-power pneumatic pump. Other exit is a simple hatch with multi-lock sealing ring. 3D Strength to resist damage (somewhat vulnerable to punctures, but frame resists instant depressurization).",
  "source": "WEG40143 Pirates & Privateers p.48"
 },
 {
  "category": "Ship Equipment",
  "name": "Cotterdam",
  "type": "TaggeCo. Cotterdam Universal Airlock",
  "cost": "3,500",
  "availability": "2",
  "game_notes": "Ship-to-ship airlock. Flexible tube with interior ladder/walkway and multi-lock ring on extended end. Multi-lock ring houses three sets of pressure, chemical, magnetic, and mechanical surface-to-surface sealing methods. One of the older and more proven universal spacelocks.",
  "source": "WEG40143 Pirates & Privateers p.48"
 },
 {
  "category": "Medical",
  "name": "Cybernetic Prosthetics (Repli-Limb)",
  "type": "Bio-Tech Repli-Limb Prosthetics",
  "cost": "Arm 2,000; Ear 2,750; Eye 2,750; Hand 1,000; Heart 5,000; Kidney 4,500; Leg 2,000; Lungs 4,000",
  "availability": "2",
  "game_notes": "State-of-the-art prosthetics. Difficult Perception roll to tell from organic. No special abilities — replacement matches original function. Cost includes prosthetic and operation. Jury-rigging enhancements: cost = base price x pip increase x starting die code (ignore pips). E.g., boosting a 3D+1 hand by 2D = 1,000 x 6 x 3 = 18,000cr. Drawbacks: strong social prejudice against obvious cybernetics; enhanced characters accumulate Dark Side Points faster when committing evil (1-2 enhancements +1 DSP, 3-4 +2 DSP, 5-6 +3 DSP). A basic replacement counts as half an enhancement (round down).",
  "source": "WEG40143 Pirates & Privateers p.50"
 }
 ,
 {
  "name": "Fibra-rope",
  "type": "Standard Fibra-rope",
  "category": "Survival Gear",
  "cost": "10 per 25 meters",
  "availability": "1",
  "game_notes": "Synthetic rope manufactured in small thin spools. Three large fibrous cables tightly woven together, 6-8 cm in diameter. Bulky, but capable of supporting up to 750 kilograms of weight before breaking.",
  "source": "WEG40158 Gundark's Fantastic Technology: Personal Gear p.79"
 },
 {
  "name": "Animal Excluder",
  "type": "Merr-Sonn Excluder",
  "category": "Survival Gear",
  "cost": "350",
  "availability": "2, F or R",
  "game_notes": "Hand-sized sonic device generating high-frequency sound waves (inaudible to humans and many aliens) that ward off most creatures. Three power settings: low (2D, 10m sphere), normal (4D, 20m sphere), high (6D, 40m sphere). Each round a creature attempts to approach, it makes a willpower or Strength roll vs the excluder's power. Failure means it retreats; success means it advances but suffers -2D to all actions due to irritation. Cornering an affected creature triggers full flight-or-fight instincts. Some predators become enraged by certain frequencies. Sentient species with delicate hearing (e.g., Wookiees) can buy cancellation headsets.",
  "source": "WEG40158 Gundark's Fantastic Technology: Personal Gear p.81"
 },
 {
  "name": "Anti-Insect Canister",
  "type": "Barkhesh Insect Culture",
  "category": "Survival Gear",
  "cost": "275",
  "availability": "3",
  "game_notes": "Sealed canister filled with a unique microorganism discovered in the dense southern jungles of Barkhesh. The airborne microorganisms infest local insect life, congregating inside the insect's body and digesting it from within. They show no interest in higher life forms, have a short lifespan once released, and cannot reproduce outside their Barkhesh jungle environment. Sprayed onto uniforms, equipment, or shelters; or into the air around a base camp. Effects last 1-5 days depending on application method (direct surface = effective but short; atmospheric = longer). One canister can coat 3 humans or protect a small ship/camp. Effective up to one month from purchase before microorganisms die. Sentient insect aliens experience odd carapace irritation but no danger.",
  "source": "WEG40158 Gundark's Fantastic Technology: Personal Gear p.81"
 },
 {
  "name": "Dehydrated Food Pack",
  "type": "Standard Dehydrated Food Pack",
  "category": "Survival Gear",
  "cost": "2",
  "availability": "1",
  "game_notes": "Moistureless nutritional supplements that can be stored indefinitely in minimal space — a major concern on space-faring vessels. Each pack contains enough nourishment for a human for one meal (does not include liquids). Notoriously bland; ordering a disobedient crewman to subsist on dry packs is a common form of military punishment. Sealed packs remain edible for centuries.",
  "source": "WEG40158 Gundark's Fantastic Technology: Personal Gear p.82"
 },
 {
  "name": "Gyro-Grappler",
  "type": "Standard Gyro-Grappler",
  "category": "Survival Gear",
  "cost": "15",
  "availability": "1",
  "game_notes": "Grappling hook equipped with built-in microthrusters that activate upon throwing, propelling the device forward in the intended direction. Originally designed for Old Republic military scaling of walls/inclines. The thruster package is extremely quiet and allows throws up to 120 meters. Climbers using a gyro-grappler get +1D to climbing skill rolls during ascent. Most military forces stopped using them decades ago — found primarily in Outer Rim surplus dumps.",
  "source": "WEG40158 Gundark's Fantastic Technology: Personal Gear p.82"
 },
 {
  "name": "Med-aid",
  "type": "Jassim Design QuickMed",
  "category": "Medical",
  "cost": "250",
  "availability": "1",
  "game_notes": "Small medical kit providing rudimentary first aid gear for burns, cuts, and contusions. More expensive kits also contain anti-venom supplements and pain-killers. Conveys a +1D bonus to any one first aid skill roll. Each med-aid may be used only once. Many surviving kits are old Outer Rim surplus — the medicines have lost potency or become toxic, but military-issue med-aids remain valuable to collectors.",
  "source": "WEG40158 Gundark's Fantastic Technology: Personal Gear p.83"
 },
 {
  "name": "Verti-Go Line Thrower",
  "type": "Susuax Verti-Go Climbing System",
  "category": "Survival Gear",
  "cost": "400",
  "availability": "2",
  "game_notes": "Skill: Missile weapons. Range: 10-150m. Damage: 4D+2. Reliable lightweight personal line thrower and climber. Can be stowed in a backpack or mounted under a blaster rifle. Consists of gas-propelled projectile rod, assorted grappler heads, pulley gear ascent motor, and 150 meters of high-strength thincord. Two ascent speeds: fast (6 m/sec) and very fast (12 m/sec — three times louder, reduces Perception difficulty to spot the climber by two levels). Designed for utility, not combat.",
  "source": "WEG40158 Gundark's Fantastic Technology: Personal Gear p.85"
 },
 {
  "name": "B'shingh",
  "type": "Dakerno Inc. B'shingh Holo Game",
  "category": "Entertainment",
  "cost": "500",
  "availability": "3",
  "game_notes": "Skill: Alien species, tactics. Holo boardgame invented by military strategist Crat Dakerno after studying ritualistic tribal customs of two warring factions on Ab'Bshingh — the Farangs and the Waroots. Object: paim or kill your opponents and capture his base (the opposite side of the board) in a series of moves across the gameboard. Moves include physical steps in any direction (tribal chiefs may only move forward) or a stance change. Knowledge of tribal rituals helps players anticipate the randomizer's move every fifth turn. Rarely seen outside intellectual or military circles.",
  "source": "WEG40158 Gundark's Fantastic Technology: Personal Gear p.86"
 },
 {
  "name": "Chidinkalu",
  "type": "Bith Musical Instrument",
  "category": "Entertainment",
  "cost": "2,500",
  "availability": "3",
  "game_notes": "Skill: Musical instrument operation: chidinkalu. Gonidor Supply Co. Hand-made. A large bass musical instrument almost exclusively played by Biths — used as the rhythm section in jatz bands. Stands nearly as tall as the average Bith. The base rests on the floor and is tilted back so the musician can reach the mouthpiece; air travels down through the neck and body before angling up and pouring out the amplifying cone facing the audience. Because of its size, an uncommon studio-only instrument. Often modified to smuggle contraband (the body has plenty of internal space).",
  "source": "WEG40158 Gundark's Fantastic Technology: Personal Gear p.86"
 },
 {
  "name": "Kloo Horn",
  "type": "Bith Musical Instrument",
  "category": "Entertainment",
  "cost": "2,000",
  "availability": "3",
  "game_notes": "Skill: Musical instrument operation: Kloo Horn. Gonidor Supply Co. Hand-made. The most popular instrument used by Biths who play jizz and jatz. Nearly three-fourths the height of a Bith musician, held in the hands. Mouthpiece contains a double reed; the stem bends back on itself in an elongated 's' to connect with the top of the body. Internal sections allow pitch and tone changes. Tenor in pitch, mainly used as the lead instrument. A good horn doubles as an effective truncheon when cantina audiences turn rowdy.",
  "source": "WEG40158 Gundark's Fantastic Technology: Personal Gear p.86"
 },
 {
  "name": "Synth-Harmonica",
  "type": "Mikar Music Amplified Synth-Harmonica",
  "category": "Entertainment",
  "cost": "500",
  "availability": "2",
  "game_notes": "Skill: Musical instrument operation: synth-harmonica. Electronic instrument designed to accommodate nearly every alien form. Only about 20 cm long with a 4 cm wide pressure-sensitive keyboard, playable by a digit or a centimeter-wide baton. Underside has three pressure pads to change pitch range (high/medium/low). Built-in speakers can fill a normally chatting room. A side switch activates any one of ten pre-recorded popular songs for the non-musically inclined.",
  "source": "WEG40158 Gundark's Fantastic Technology: Personal Gear p.87"
 },
 {
  "name": "Electronic Blaster Sighting System",
  "type": "SoroSuub True-Site System",
  "category": "Weapon Accessories",
  "cost": "500",
  "availability": "2, R",
  "game_notes": "Skill: Blaster. Small electronic sight that fits on top of a blaster and projects a holographic crosshair one meter in front of the muzzle. Adds +1D to blaster. Drawback: the glowing sight profile gives away the user's position in night firefights, and polarized lens filters (such as those in stormtrooper helmets) obscure the holosight.",
  "source": "WEG40158 Gundark's Fantastic Technology: Personal Gear p.91"
 },
 {
  "name": "Hover-Cam",
  "type": "Data-Link Industries 250 Hover-Cam",
  "category": "Electronics",
  "cost": "900",
  "availability": "2, F",
  "game_notes": "Audio, visual, and holo-recording device. Uses small repulsors to float about a meter above and slightly behind the user, following spoken directions. The DLI-250 is the reporter's favorite — it 'learns' on the job what action its user wants recorded, so it doesn't need constant direction. Flight ceiling: 50 meters. Can be summoned to return via beckon call. Common in journalism, family recording, and (with espionage programming) urban surveillance.",
  "source": "WEG40158 Gundark's Fantastic Technology: Personal Gear p.91"
 },
 {
  "name": "Infra-goggles",
  "type": "Drolan Plasteel Infra-goggles",
  "category": "Sensors",
  "cost": "300",
  "availability": "2",
  "game_notes": "Common night-vision device that decodes ambient infrared and ultraviolet light to enhance visibility in near-dark conditions. Reduces darkness-related attack difficulty modifiers by 2D. If intense light (glowrod or sudden illumination) is shined directly on the goggles, the wearer must immediately make a Difficult willpower roll or be blinded for 1D rounds.",
  "source": "WEG40158 Gundark's Fantastic Technology: Personal Gear p.91"
 },
 {
  "name": "PTP Link",
  "type": "Point-to-Point Multi-channel Personal Communicator",
  "category": "Electronics",
  "cost": "150 (basic); up to 1,000 (encrypted)",
  "availability": "2",
  "game_notes": "Multiple-channel personal audio comm device with a range of 25 km. Average models are simple audio-only. More expensive models contain encryption packages — using one requires a Moderate communications roll; if successful, the channel cannot be deciphered. Today PTP links are mostly seen on low-tech worlds (particularly the Tion Hegemony) or prized by collectors. Modern signal scanners have a hard time detecting their low-powered, out-of-date carrier wave.",
  "source": "WEG40158 Gundark's Fantastic Technology: Personal Gear p.92"
 },
 {
  "name": "Wide-scan Binocs",
  "type": "Jassim Design VX3 Scanner",
  "category": "Sensors",
  "cost": "100",
  "availability": "1",
  "game_notes": "Image-intensification binoculars using only a series of lenses (no electronics, no power cells required). Several control knobs adjust focus and magnification. Provides a +1D bonus to search skill rolls where the target lies more than 20 meters from the viewer. A reasonably effective and easily-repaired alternative to macrobinoculars.",
  "source": "WEG40158 Gundark's Fantastic Technology: Personal Gear p.92"
 },
 {
  "name": "Master Command Unit",
  "type": "Authority Master Command Unit",
  "category": "Electronics",
  "cost": "100,000",
  "availability": "4, X",
  "game_notes": "Small flat unit usually worn on a belt. Can keep control over up to 25 different items (communications, primary defense systems, etc.) within 300 meters (more with receptor circuitry extension). The user activates the code slicer/takeover switch to capture the signals of a specific system and binds it to a numbered button. Originally given to only the highest-ranking Corporate Sector Authority officials. Can control everything from lights to mass security systems — in the wrong hands, capable of destroying a government. Most CSA buildings are slave-rigged, making the device especially valuable for larceny against CSA installations.",
  "source": "WEG40158 Gundark's Fantastic Technology: Personal Gear p.93"
 },
 {
  "name": "Code Slicer",
  "type": "Duwani Mechanical Products UniSlice",
  "category": "Security",
  "cost": "2,000",
  "availability": "3",
  "game_notes": "Skill: Security. Provides +1D security bonus in attempts to bypass or break through security measures. Infiltrates the electronic hardware of locks, slicing the cabling that security measures contain. While keeping the electronics busy, a low-power energy torch burns through the locking mechanism. Generally takes 5-8 minutes to use. An older Old Republic-era design — illegal in most jurisdictions today, but still useful in the Outer Rim where archaic anti-theft measures are common. Carrying one is a fineable offense in most modern systems.",
  "source": "WEG40158 Gundark's Fantastic Technology: Personal Gear p.95"
 },
 {
  "name": "Portable Plasma Cutter",
  "type": "Portable Plasma Cutter",
  "category": "Tools",
  "cost": "150 (gas canister: 20)",
  "availability": "1",
  "game_notes": "Hand-held device slightly larger than a standard hold-out blaster. Portable fuel cylinder attaches forward of the pistol grip; internal fuel supply lasts 4 minutes, the canister has fuel for 1 hour of continuous use. Adjustable focusing for cutting depth and intensity. Damage: 7D. Takes one round per 1D of body strength to cut a 2m x 1m hole (e.g., a 6D blast door takes 6 rounds). When used as a weapon, requires a Moderate melee combat roll to hit. The included blast goggles (or a blast visor) must be worn — anyone within 2 meters without proper eye protection must make a Moderate Perception roll to look away or be blinded for 3 minutes. Includes one set of blast goggles; extras 15 credits each. WARNING: shooting the plasma canister with a blaster makes an instant bomb.",
  "source": "WEG40158 Gundark's Fantastic Technology: Personal Gear p.96"
 },
 {
  "name": "VoiceBox",
  "type": "BothiCorp VoiceBox Speech Pattern Duplicator",
  "category": "Security",
  "cost": "5,000",
  "availability": "X",
  "game_notes": "Skill: Security. Voice lock buster. Plugs into a lock's wiring and fools the lock by encrypting the user's voice patterns with a copy of the authentication files. Modern voice-activated security systems process accent, inflection, tone, stress, and many other voice pattern characteristics — the VoiceBox defeats them. A successful security roll against the lock's difficulty rating is required for success. Can also be patched into a freighter's communications system for limited voice disguising against customs voiceprint analyzers. Standard equipment for Rebel Alliance Special Ops shipjacking teams.",
  "source": "WEG40158 Gundark's Fantastic Technology: Personal Gear p.96; WEG41013 Star Wars Adventure Journal #13 (Special Ops: Shipjackers)"
 },
 {
  "name": "CorSec Autoscan Weapons Detector",
  "type": "CorSec Autoscan Weapons Detector",
  "category": "Security",
  "cost": "7,200",
  "availability": "2, R (restricted to governments)",
  "game_notes": "Stationary weapons detector. Has search 6D to detect hidden energy weapons. Petal-shaped array tracks individuals and vehicles moving within range. Deployed in fixed sites near public thoroughfares and transportation centers. If weapons are detected, an alarm is transmitted to security personnel. Difficulty to detect weapons depends on how well the user has hidden them with hide skill.",
  "source": "WEG40158 Gundark's Fantastic Technology: Personal Gear p.102"
 },
 {
  "name": "Geological Scanner",
  "type": "Fabritech 7000 Geoscanner",
  "category": "Sensors",
  "cost": "4,800",
  "availability": "2",
  "game_notes": "Range: 500m / 1km / 2km. Primarily used by miners and prospectors. Detects geologic characteristics like precious minerals, ore deposits, and underground features. Can also analyze geothermal, seismic, volcanic, and glacial activity. A favorite tool of claims-jumper outfits.",
  "source": "WEG40158 Gundark's Fantastic Technology: Personal Gear p.103"
 },
 {
  "name": "Medscanner",
  "type": "Cryoncorp Mediscan 21",
  "category": "Medical",
  "cost": "3,000",
  "availability": "2",
  "game_notes": "Small hand-held diagnostic unit used by field medical personnel to quickly diagnose diseases and assess injuries. Difficulty matches medpac difficulty: Easy for Wounded, Moderate for Incapacitated, Difficult for Mortally Wounded. Successful use adds +1D to first aid rolls. Sensitive instruments — easily damaged when dropped or roughly handled.",
  "source": "WEG40158 Gundark's Fantastic Technology: Personal Gear p.103"
 },
 {
  "name": "Search-Scan 4 Security Scanner",
  "type": "BlasTech Search-Scan 4",
  "category": "Security",
  "cost": "9,800",
  "availability": "2, R (restricted to governments)",
  "game_notes": "Multi-capable security scanner used by Imperial and local planetary governments. The size of a large chest — typically wheeled around on a cart or repulsor sled. Contains numerous probes and receptors attached by insulated cables. Highly sensitive — can often penetrate some forms of shielding. Adds +1D to the operator's sensor skill roll. Detects structural anomalies hiding secret compartments, energy signatures showing weapons, life forms, and energy sources within a confined area (docking bay, cargo hold, compartment).",
  "source": "WEG40158 Gundark's Fantastic Technology: Personal Gear p.104"
 },
 {
  "name": "Malkite Poisoner's Kit",
  "type": "Malkite Poisoner's Kit",
  "category": "Drugs & Toxins",
  "cost": "800,000",
  "availability": "4, X",
  "game_notes": "Illegal assassination tool used by the Malkite Poisoners — a deadly sect within the Outer Rim Malkite Ring assassins. A small unadorned duraplas box with a sophisticated locking mechanism (+1D to hide attempts due to small size). Contains: vials of H'gartha liquid neurotoxin (kills target on contact within two rounds; no known antidote save bacta immersion, and the poison resumes once removed; +2 levels to (A) medicine/first aid difficulty to detect); needles (Difficult sneak + Moderate melee combat to apply); aerosol spray applicators (must be within 0.5m, Moderate Dexterity or Poisoner is also exposed); Disruption Field Override Generator (within 1m of medical scanner, Moderate computer programming/repair, increases (A) medicine/first aid difficulty by one level to detect cause of death); Pheromone Zone Generator (within 3m of food sniffers, +1 level search/investigation difficulty); Scanner Jammer (within 2m of airborne-substance sensor, +1 level detection difficulty); Heat-Sealer (Moderate Dexterity or sneak, instantly closes puncture wounds in one round). Malkite honor creed forbids using any tools beyond those in the kit.",
  "source": "WEG40158 Gundark's Fantastic Technology: Personal Gear p.108"
 }
 ,{
  "name": "Vec-Tech Keeper Subdermal Control System",
  "type": "Vector Technologies AA-2 Keeper",
  "category": "Security",
  "cost": "5,000",
  "availability": "4, X",
  "game_notes": "A beacon surgically implanted under the victim's skin. Can only be removed by the being with the tracker unit, who must enter a password. Any other extraction attempt releases an exotic neurotoxin (8D damage, kills instantly). Tracker shows range, direction, and speed up to 25 km. If target moves beyond 25 km, the neurotoxin releases automatically.",
  "source": "WEG40153 Wretched Hives p.112"
 }
 ,{
  "name": "Nullifier Energy Diffusion Armor",
  "type": "Unknown manufacturer",
  "category": "Combat Armor",
  "cost": "Not available for sale",
  "availability": "X (believed unique)",
  "game_notes": "Ancient powered armor: black carapace-like plates, full-cover helmet, and tactile gloves. When activated, emits a powerful force field (5D to resist energy attacks, acts as cover) capable of nullifying nearly all energy attacks. Blaster bolts are absorbed on contact. Lightsabers 'bounce' off. Major drawback: the force field makes it impossible to fire energy weapons from inside — outgoing bolts are absorbed just like incoming. The energy field hums and crackles visibly, making the wearer an outstanding target. Worn by bounty hunter Vallikor En-Vahdi, who uses projectile weapons to compensate.",
  "source": "WEG40153 Wretched Hives p.123"
 }
 ,{
  "name": "ShipFinder",
  "type": "Drooim-Durtha Systems ShipFinder",
  "category": "Sensors",
  "cost": "100,000",
  "availability": "X",
  "game_notes": "Subspace tracking device. Use requires an Easy sensors roll — on a success the user can locate the tracker and plot a course to it from any present coordinates. Rather than emitting a continuous beam, the ShipFinder disperses bursts of particles at a given time interval (faster interval = easier to track but shorter cell life). Range 20 light years. The current production version's power cell lasts only 8 days before going dead. Designed by Neb Ufentes for the remaining Imperial forces; prototypes were stolen from Ufentes' private lab by the crimelord Mahk'khar shortly before he was captured by the New Republic.",
  "source": "WEG41008 Star Wars Adventure Journal #8 p.143"
 }
 ,{
  "name": "P2 Astromech Droid",
  "type": "Industrial Automaton (Automata Galactica) P2 Astromech Droid Prototype",
  "category": "Droids",
  "cost": "2,500 (used)",
  "availability": "2",
  "game_notes": "Height: 2.2m. Move: 4. DEX 1D, KNO 1D, MEC 1D (space transports 2D), PER 1D (search 2D), STR 2D, TEC 2D (space transports repair 5D). Three wheeled legs (one retractable), heavy grasper arm, three medium retractable arms, laser welder (5D damage, 0.5m range), buzzsaw (5D damage), video display screen. Strengthened body shell gives +1D STR vs damage. Communicates only through video screen or input jacks. Original Industrial Automaton (Automata Galactica) astromech prototype, precursor to the R-series. Sold exclusively to the Old Republic shipping fleet to test the prototype and serve massive container vessels and capital-scale transports. Large, cylindrical, clumsy, and lacking aesthetic value but very subservient. To this day some still operate on independent and privateer vessels — outdated and never sold new anymore; encountered units are often modified.",
  "source": "WEG41007 Star Wars Adventure Journal #7 p.132 (History of R-Series Astromech Droids)"
 }
 ,{
  "name": "R1 Astromech Droid",
  "type": "Industrial Automaton R1 Astromech Droid",
  "category": "Droids",
  "cost": "3,000 (used)",
  "availability": "2",
  "game_notes": "Height: 2m. Move: 2. DEX 1D, KNO 1D, MEC 2D (astrogation 4D, space transports 3D), PER 1D (search 3D), STR 1D, TEC 2D (capital starship repair 5D, space transports repair 5D). Treaded unipod (single foot), light retractable manipulator, heavy retractable manipulator, welding arm (1D-4D damage), small circular saw (3D damage), laser cutters (3D+1 damage), video screen, acoustic signaler, comlink. Strengthened body gives +2D STR vs damage. Built into the Mark II reactor drone shell to recover from the P2 lawsuit fiasco — extensive radiation shielding, Intellex III computer with 500 starship designs and primitive single-jump nav computer. Large astromech designed for use in capital warships or large transports. Not very mobile and prone to recalcitrance if given time to develop a personality. Often modified and commonly mistaken for Mark II reactor drones.",
  "source": "WEG41007 Star Wars Adventure Journal #7 p.134 (History of R-Series Astromech Droids)"
 }
 ,{
  "name": "R3 Astromech Droid",
  "type": "Industrial Automaton R3 Astromech Droid (military issue)",
  "category": "Droids",
  "cost": "5,000",
  "availability": "2, R or X (military)",
  "game_notes": "Height: 1m. Move: 5. DEX 1D, KNO 1D, MEC 2D (astrogation 4D, capital starship piloting 4D, space transports 3D), PER 1D (search 4D), STR 1D, TEC 2D (capital starship repair 6D, capital starship weapon repair 6D, computer programming/repair 5D, security 5D). Three wheeled legs, retractable heavy grasper arm (lifting 2D), retractable fine worker arm, small electric welder (1D-5D, 0.3m range), small circular saw (4D, 0.3m range), video display screen, acoustic signaler, holographic projector/recorder, fire extinguisher. Distinguished by clear plastex dome head showing off the Intellex V computer and a more sensitive sensor package. Holds up to 5 hyperspace jump coordinates in RAM. Built specifically for capital warship and battle station service with gunnery repair and security skills — served on Old Republic capital ships, Imperial Star Destroyers, both Death Stars, and now privateer vessels and stolen Rebel ships. Originally restricted to government military agencies; since the rise of the New Republic, Industrial Automaton sells to planetary governments and private fleets, but its policy bars knowingly selling to the Empire or Imperial factions.",
  "source": "WEG41007 Star Wars Adventure Journal #7 p.138 (History of R-Series Astromech Droids)"
 }
 ,{
  "name": "R4 Astromech Droid",
  "type": "Industrial Automaton R4 Astromech Droid (urban issue)",
  "category": "Droids",
  "cost": "3,000",
  "availability": "2, F",
  "game_notes": "Height: 1m. Move: 5. DEX 1D, KNO 1D, MEC 2D (repulsorlift operation 4D), PER 1D, STR 1D, TEC 2D (computer programming/repair 5D, repulsorlift repair 4D, space transports repair 5D). Three wheeled legs, retractable heavy grasper arm (lifting 2D), retractable fine worker arm, small electric welder (1D-5D, 0.3m range), small circular saw (4D, 0.3m range), acoustic signaler, holographic projector/recorder. Recognizable by its truncated conical head; uses the familiar R2 shell. Not technically an astromech droid — its Intellex VI computer features repulsorcraft designs as well as starship configurations to appeal to the Outer Rim urban market with limited income. Holds only 1 hyperspace jump coordinate in RAM. Cheap and effective; popular with Rebel and privateer groups, with many Rebel starfighters using R4 counterparts running repairs — a tradition continued by the New Republic.",
  "source": "WEG41007 Star Wars Adventure Journal #7 p.139 (History of R-Series Astromech Droids)"
 }
 ,{
  "name": "R6 Astromech Droid",
  "type": "Industrial Automaton R6 Astromech Droid",
  "category": "Droids",
  "cost": "4,000",
  "availability": "2, F",
  "game_notes": "Height: 1m. Move: 5. DEX 1D, KNO 1D, MEC 2D (astrogation 5D, starfighter piloting 3D, space transports 3D), PER 1D, STR 1D, TEC 2D (computer programming/repair 5D, space transports repair 6D, starfighter repair 5D). Note: astromechs in co-pilot capacity may attempt starship repairs in flight. Three wheeled legs, retractable heavy grasper arm (lifting 2D), retractable fine worker arm, extendable 0.3m video sensor (360° rotation), small electric welder (1D-5D, 0.3m range), small circular saw (4D, 0.3m range), video display screen, holographic projector/recorder, acoustic signaler, fire extinguisher, internal cargo area (20cm × 8cm). The first astromech sold by Industrial Automaton after the fall of the Empire — built to redeem Industrial Automaton's image after the failure of the R5, priced low for the turbulent New Republic economy. Holds an impressive 12 hyperspace jump coordinates in RAM. Sold very well until the rise of Grand Admiral Thrawn and the return of the Empire-Republic struggle.",
  "source": "WEG41007 Star Wars Adventure Journal #7 p.141 (History of R-Series Astromech Droids)"
 }
 ,{
  "name": "R7 Astromech Droid",
  "type": "Industrial Automaton R7 Astromech Droid (E-wing dedicated)",
  "category": "Droids",
  "cost": "Not for sale",
  "availability": "X (New Republic military only)",
  "game_notes": "Height: 1m. Move: 5. DEX 1D, KNO 1D, MEC 3D (astrogation 5D, starfighter piloting: E-wing 5D), PER 2D (search 4D), STR 1D, TEC 2D (computer programming/repair 6D, starfighter repair: E-wing 7D). Note: astromechs in co-pilot capacity may attempt starship repairs in flight. Three wheeled legs, retractable heavy grasper arm (lifting 2D), retractable fine worker arm, extendable 0.3m video sensor (360° rotation), small electric welder (1D-5D, 0.3m range), small circular saw (4D, 0.3m range), video display screen, holographic projector/recorder, acoustic signaler, fire extinguisher, internal cargo area (20cm × 8cm). The first R-series astromech designed for a specific starfighter — the New Republic E-wing built by FreiTek Incorporated. The traditional Intellex computer was replaced with a dedicated FreiTek system, achieving a higher counterpart interactivity ratio than the old R2/X-wing configuration. Holds 15 hyperspace jump coordinates in RAM. Civilians cannot legally purchase R7s, and the unit is somewhat limited in its abilities interfacing with craft other than the FreiTek E-wing. Both the E-wing and R7 were rushed into service to combat the resurrected Emperor's World Devastators over Calamari before full testing could be completed.",
  "source": "WEG41007 Star Wars Adventure Journal #7 p.142 (History of R-Series Astromech Droids)"
 }
 ,{
  "name": "Imperial Customs Bureau Seals",
  "type": "Coded shipping container seals",
  "category": "Security",
  "cost": "Not available for sale",
  "availability": "X (Imperial use only)",
  "game_notes": "Small plastic strips and stickers used to seal the latches, locks, and openings of shipping containers. Embedded with tiny microchips and thin reservoirs of dissolving compounds; individual seals are identified with standard code-scanner units. The seals are coated with a bonding agent that activates when the protective wrapper is removed and dries in approximately 30 seconds, hardening the seal in place. After hardening, any code tampering, electronic disruption, rough handling, or breakage triggers the seal's small reservoirs of dissolving compounds, destroying it and rendering it useless. Containers bearing intact Imperial seals matched against Imperial inspection reports written to Write-Once-Read-Many (WORM) chips are allowed to bypass normal customs inspections — the linchpin of the lumrunner's classic 'pre-sealed cargo' shell game (rotating Imperial seals onto previously inspected legitimate cargoes while contraband flows through under the same paperwork). Virtually impossible to counterfeit; success should be beyond the scope of most characters.",
  "source": "WEG41009 Star Wars Adventure Journal #9 p.135 (Lumrunners)"
 }
 ,{
  "name": "ColuChem Anti-Corr 113",
  "type": "Anti-corrosion spray/gel",
  "category": "Tools",
  "cost": "75 per liter",
  "availability": "2",
  "game_notes": "Anti-corrosion treatment developed by Bith chemists to protect equipment positioned outside their hermetically sealed cities after the Bith biochemical civil war. Applied as a spray or a thicker gel, the coated area is shielded from extreme heat and hostile environments. Anti-Corr 113 takes decades to chemically break down or evaporate and can normally only be removed by very powerful (and expensive) chemical solvents — which sometimes physically damage softer treated items in the process. One liter in spray form covers about three square meters; gel form covers less because it is applied in thicker protective layers. Notorious side effect: the formula stains everything it touches a pasty blue residue and is designed to penetrate deeply, so it is seldom buffed out. Unprotected surfaces (notably stormtrooper armor) suffer severe discoloration on contact during application or handling. Smugglers regularly coat 'industrial repulsor coils' or other innocuous machine parts with Anti-Corr to discourage thorough hands-on inspection by Imperial boarding teams (see Lumrunners, AJ#9).",
  "source": "WEG41009 Star Wars Adventure Journal #9 p.142 (Lumrunners)"
 }
 ,{
  "name": "UniTech \"Patch\" Diverter",
  "type": "UniTech Diagnostic Systems Diverter",
  "category": "Tools",
  "cost": "5,200",
  "availability": "2, R (restricted to governments)",
  "game_notes": "Interlacing system bridge. Requires a Moderate computer programming/repair roll to apply; adds +1D+2 to the user's security or relevant skill. Consists of a master base unit plus eight slave units placed at junction points between the bypassed subsystem and the outside system. Originally a legitimate Imperial tech tool used during emergency repairs to keep a damaged or breached subsystem from disrupting the master computer core — the patch emulates the signals and responses of the affected subsystem so the master treats it as healthy. In Alliance hands the patch lets a slicer enter a specific part of an Imperial system and operate relatively undetected. Crucial limitation: the patch handles routine automated security sweeps fine, but has serious trouble dealing with sentient remote inquiries from another system — once a live tech starts probing through, the patch falls behind quickly and the slicer is exposed (Cracken nearly lost his team this way during operations in the Trugan Cluster).",
  "source": "WEG41010 Star Wars Adventure Journal #10 p.135 (Cracken's Rebel Field Guide — Slicing Aids)"
 }
 ,{
  "name": "TerexComm DataSearch 9C",
  "type": "TerexComm Deluxe DataSearch Engine 9C",
  "category": "Tools",
  "cost": "600",
  "availability": "2",
  "game_notes": "Administrative datasearch device. Requires an Easy computer programming/repair roll to connect; adds +1D+2 to computer programming/repair and +2D to security skill when used to search for information. Modifying the 9C with a simple power condenser (Moderate computer programming/repair) lets it locate lower-level encrypted files — discovered by an Alliance field agent on Dixthaar — but the additional power virtually destroys any program or scandoc the 9C searches as it tears them into electronic bits. When using a modified 9C, your escape craft must be ready and waiting; you don't have long before someone notices the damage trail unless you've also laid a UniTech Patch across the system.",
  "source": "WEG41010 Star Wars Adventure Journal #10 p.136 (Cracken's Rebel Field Guide — Slicing Aids)"
 }
 ,{
  "name": "TerexComm DataSearch 12C-A",
  "type": "TerexComm Executive DataSearch Engine 12C-A",
  "category": "Tools",
  "cost": "850",
  "availability": "2",
  "game_notes": "Administrative datasearch device. Requires an Easy computer programming/repair roll to use; adds +2D to computer programming/repair when searching for information. Searches thousands of DSUs (data screen units) in less than three seconds without destroying the data, unlike the 9C. A general query like 'stormtrooper' yields a vast and useless results pile; a more specific query like 'stormtrooper attempts to use Yag-tessix in queries' produces immediately actionable intel. Will not function with the 9C's power condenser modification — it tends to short out if so modified.",
  "source": "WEG41010 Star Wars Adventure Journal #10 p.137 (Cracken's Rebel Field Guide — Slicing Aids)"
 }
 ,{
  "name": "AccuTronics Encryption Package",
  "type": "AccuTronics Encryption Package Ia 41 87",
  "category": "Tools",
  "cost": "500",
  "availability": "2",
  "game_notes": "Datafile encryption device. Files encrypted with the AccuTronics Package gain +5 to the difficulty number to be found and require a Moderate computer programming/repair roll to crack the encryption code if the password is unknown. Originally a civilian product, modified and upgraded by the Alliance Cryptology division for protecting lesser-security datafiles. Adequate for the day-to-day disinformation kits the Alliance circulates, but Cracken explicitly notes he would not use it to safeguard the location of Delta Base.",
  "source": "WEG41010 Star Wars Adventure Journal #10 p.137 (Cracken's Rebel Field Guide — Slicing Aids)"
 }
 ,{
  "name": "Analysis/Encoding Computer (A/E Unit)",
  "type": "Analysis/Encoding Document Server",
  "category": "Tools",
  "cost": "Not for sale (Imperial)",
  "availability": "2, R (restricted to Imperial use)",
  "game_notes": "Analysis/encoding computer used by Imperial Intelligence and as crewing droids on Plexus Droid Vessels (PDVs) to code and recode Sector Plexus messages. Designed to take a file, open the encryption, analyze the contents, and recode it. Connecting an A/E unit to another system requires a Moderate computer programming/repair roll, and activating it requires a second Moderate computer programming/repair roll. Once active, an A/E unit reduces the encryption difficulty on Imperial scandocs or files transferred to a connected system by one level (Difficult to Moderate, etc.). No complete A/E unit has yet been captured intact by the Alliance, so the theoretical applications — slicing Imperial encryption techniques, intercepting Sector Plexus traffic via captured PDV droids — remain untested. Cracken is publicly skeptical of using captured A/E units for live message interception, but considers them genuinely promising for offline encryption-cracking research.",
  "source": "WEG41010 Star Wars Adventure Journal #10 p.138 (Cracken's Rebel Field Guide — Slicing Aids)"
 }
 ,{
  "name": "Modified TranLang III Module (Espionage)",
  "type": "Modified TranLang III Communication Module",
  "category": "Droid Hardware",
  "cost": "1,500 (market version)",
  "availability": "2 (market version) — modified Alliance Intel version is strictly illegal",
  "game_notes": "Standard droid translation module covertly modified to deliver coded keyword messages to Alliance contacts. Modifying a standard unit to spec requires a Difficult droid programming roll followed by a Moderate droid repair roll to install without damaging the host droid; planting the droid in the target locale afterward is its own problem. Once installed, the modified module subliminally biases the host droid (usually a protocol droid, sometimes an astromech or medical droid) toward using pre-specified keywords from a particular language at designated intervals during normal conversation — to any observer or eavesdropping translator droid, the conversation sounds entirely natural, but to the receiving Alliance agent the keyword sequence carries a coded message decoded from a key sheet supplied by Intelligence. The modification is wired directly to the portion of the droid's CPU that handles word selection (so the droid never questions its own choices), but that same direct connection makes the module relatively easy to detect — a Moderate droid programming roll, if the technician is specifically looking for secondary programming. Modified droids accordingly have shorter lifespans than most espionage units. Lieutenant Zeneta's Shroud Team is one of the units fed valuable intel through this method.",
  "source": "WEG41010 Star Wars Adventure Journal #10 p.139 (Cracken's Rebel Field Guide — Slicing Aids)"
 }
 ,{
  "name": "Subspace Tight-Beam Transmission Core",
  "type": "MerenData 45-T InfoCore",
  "category": "Communications",
  "cost": "900",
  "availability": "2, R",
  "game_notes": "Subspace tight-beam transmission core that forms the integral relay component of an espionage droid's secondary programming. Upon receipt of a prearranged high-frequency activation signal, the host droid downloads its recorded data via a tight beam to the signal's source. Detecting an espionage droid carrying one of these requires a Very Difficult droid programming roll, and the technician must specifically state they are searching for secondary programming; once detected, removing the chips without damaging the droid requires a Moderate droid programming roll (the chips must be physically removed — the espionage programming will withstand a normal memory wipe). The tight-beam transmission evades nearly all sensor types except dedicated energy receptors (DERs) in active scan mode, which can pick the transmission up and triangulate its source. Most commonly installed in protocol droids, though astromechs and medical droids are also used. Both the Empire and the Alliance use espionage droids extensively against each other — Cracken personally headed the investigation into the droid that compromised Sinjan Outpost.",
  "source": "WEG41010 Star Wars Adventure Journal #10 p.140 (Cracken's Rebel Field Guide — Slicing Aids)"
 }
 ,{
  "name": "Intellex IV Internal Computer",
  "type": "Industrial Automaton Intellex IV Astromech Internal Computer",
  "category": "Droid Hardware",
  "cost": "800",
  "availability": "2",
  "game_notes": "Internal computer and analysis program package found in many of the better astromech units, including Industrial Automaton R2-series and the VI-series pilot droids. Performs over 10,000 MPF operations per second, and supports sophisticated analysis programs including lifeform identification subroutines (LFIs) and many low-level scanner tasks. Primarily valued as part of an astromech for its ability to scan technical files, pinpoint potential problems, find data patterns, and debug computer code. Removed from its host droid, an independent Intellex IV becomes a slicer's tool — a character can use one as a portable slicing aid when entering restricted systems or files (gamemaster determines computer programming/repair difficulties for the target). Removing an Intellex IV from a non-cooperative astromech droid requires a Moderate droid repair roll and takes about half an hour; cooperative astromech allies will often perform the operation themselves on request. The same trick works with the Intellex V or VI but every difficulty is raised one level. Agent Shaparo's R2-Q8 supplied an Intellex IV that broke into the Dnalvec garrison's prisoner files on Sriluur during the rescue of captured Alliance personnel.",
  "source": "WEG41010 Star Wars Adventure Journal #10 p.141 (Cracken's Rebel Field Guide — Slicing Aids)"
 }
 ,{
  "name": "TaggeCo TC-40 Padlink",
  "type": "TaggeCo TC-40 Padlink — Remote Datapad/System Interface",
  "category": "Tools",
  "cost": "1,000",
  "availability": "2",
  "game_notes": "Remote two-piece datapad/system interface unit with a 100-meter range. Originally marketed to executives who want to work from a datapad without losing their connection to the office system: the comm attachment installs on the master terminal (Easy computer programming/repair roll) and the mobile half links to the datapad through its two minor coupler ports, leaving a constant power source routed through the primary port. Alliance technicians have started using padlinks for remote slicing — once the comm unit is on a target master system, an authorized hacker can sit up to 100 m away with a datapad and download files in moments without ever entering the building. Slicing through the padlink requires an Easy computer programming/repair roll to use the device as intended, plus a +5 modifier added to the target system's normal computer programming/repair difficulty. Critical limitation: the comm unit must already be installed on the target master system, so this only works on systems where the owner (or a planted operative) has previously installed the padlink. Cracken used one personally on Arsteni to download troop reports from a constable's personal system without ever entering the building.",
  "source": "WEG41010 Star Wars Adventure Journal #10 p.142 (Cracken's Rebel Field Guide — Slicing Aids)"
 }
 ,{
  "name": "TelBrinTel Science Research Droid",
  "type": "TelBrinTel Science Research Droid",
  "category": "Droids",
  "cost": "12,500",
  "availability": "3",
  "game_notes": "Height: 1.9 m. Move: 8. DEX 2D, KNO 4D (scholar: chemistry 6D, scholar: physics 6D, scholar: science 7D), MEC 1D, PER 2D, STR 1D, TEC 2D. Equipped with: enhanced protocol chip; molecular microscopic eyepiece; olfactory sensors (+1D Knowledge to identify any odor); two fine control manipulating arms (+1D on any Dexterity roll requiring precise movement); suspension system (+2D on any Dexterity roll requiring smooth movement); endosystem (six dockable ports on the upper-torso vertebrae for additional arms, injection needles, work surfaces, and small tools). The Empire commissioned TelBrinTel's research droid for chemical compound work tied to armor and biological weapons projects; the first large shipment reached Imperial research centers immediately following the Battle of Hoth, and rumors indicate a substantial portion of that shipment is in Rebel hands.",
  "source": "WEG41010 Star Wars Adventure Journal #10 p.143 (Toria Tell's Droid Journal)"
 }
 ,{
  "name": "Lovolan Supreme-class Servant Droid",
  "type": "Lovolan Supreme-class Servant Droid",
  "category": "Droids",
  "cost": "3,500",
  "availability": "2",
  "game_notes": "Height: 2 m. Move: 12. DEX 3D, KNO 4D (cultures 5D, languages 5D), MEC 1D (communications 4D), PER 2D, STR 1D, TEC 1D. Equipped with: Lovolan network communications package (constant link to galactic news services and financial databases); repulsorlift propulsion system (20-meter flight ceiling); two secondary serving arms stored in hidden compartments. Designed to serve food and drinks in the elegant lounges and bars of Coruscant, Cloud City, and other high-class venues, with the etiquette and small-talk programming to match aristocratic clientele. Lovolan rushed production to meet demand and the droids constantly fall apart, creating embarrassing scenes for owners. Some unscrupulous customers exploit the droids' communication and data access systems to launder credits from corporate databases, place remote bets, and listen in on private comm conversations — a problem that has drawn Imperial Intelligence attention.",
  "source": "WEG41010 Star Wars Adventure Journal #10 p.145 (Toria Tell's Droid Journal)"
 }
 ,{
  "name": "Scavenger Series Labor and Recycling Droid",
  "type": "Scavenger Series Labor and Recycling Droid",
  "category": "Droids",
  "cost": "10,500",
  "availability": "3, R",
  "game_notes": "Height: 2.9 m. Move: 6. DEX 3D, KNO 1D, MEC 1D, PER 2D (search 3D), STR 4D (lifting 7D), TEC 1D. Equipped with: crawler system; repulsorlift propulsion system (Move drops to 3 in a gravity environment, 25 m flight ceiling); two heavy-duty arms (+1D on lifting rolls); basic lighting package; beamcutter breakdown chute; storage area (3 cubic meters); six tractor beam projectors (Strength 1D total). Joint underworld project between several pirate, scavenger, and outlaw tech groups to recycle the enormous amounts of debris left by the Galactic Civil War — collected materials are compacted, indexed, and sold back into the rawmat shortage at high markup. Two huge arms feed the breakdown chute while six head-mounted tractor beam projectors net the smallest fragments; the droid plants marker transponders on debris too large for it to handle and signals heavier equipment.",
  "source": "WEG41010 Star Wars Adventure Journal #10 p.149 (Toria Tell's Droid Journal)"
 }
 ,{
  "name": "Ulban Arms Class I Defense Droid",
  "type": "Ulban Arms Class I Defense Droid",
  "category": "Droids",
  "cost": "20,000",
  "availability": "3, X",
  "game_notes": "Height: 3.2 m (six meters long, four-legged design). Move: 17. DEX 2D (blaster 5D, blaster artillery 4D+2), KNO 1D, MEC 1D, PER 2D (search 4D), STR 5D, TEC 1D. Equipped with: 4 heavy-duty legs; 1 medium anti-vehicle laser cannon (speeder, blaster artillery, 10–500/1.5/2.5 km, damage 5D, rotates 30° down / 105° up, top section traverses left-right); 1 medium repeating blaster (character, blaster, 3-75/200/500, damage 7D, mounted on the belly pylon); lighting package. Originally conceived by Imperial Army Captain Kist as an unmanned defense supplement for ground troops; rejected by Imperial engineers and (according to Imperial accusations) stolen for the Corporate Sector Authority. Rumor says Kist sold the plans to the CSA himself. Built for the maneuverability of an AT-ST with reduced leg vulnerability. The processor section uses redundant layers of components and an information matrix center (IMAC) that relays sensor and tactical data back to a mobile command base or fixed bunker. Saboteurs have discovered the IMAC processor is vulnerable to foreign manipulation and have reprogrammed several droids to serve their own ends.",
  "source": "WEG41010 Star Wars Adventure Journal #10 p.151 (Toria Tell's Droid Journal) | WEG41014 Star Wars Adventure Journal #14 p.255 (Cynabar's Droid Datalog)"
 }
 ,{
  "name": "Publictechnic Model 850.AA Public Service Headquarters and Maintenance Droid",
  "type": "Publictechnic Model 850.AA Public Service Headquarters and Maintenance Droid",
  "category": "Droids",
  "cost": "75,000",
  "availability": "3",
  "game_notes": "Height: 13 m (nearly 13 m wide). Move: 30. DEX 1D, KNO 2D, MEC 1D, PER 1D (command 4D), STR 7D, TEC 1D. Equipped with: repulsorlift system (20 m flight ceiling); Publictechnic power cell system (reserve fuel cells store a small portion of energy with every hour of operation, enough to recharge all onboard equipment); 14 beamcleaners; 3 coarse cleaning brushes; sensorlink network system (monitors roads, lighting, waste receptacles, and commbooths); equipment bay (25 sq m of storage; lower level houses ~30 droids of various sizes; second level holds two ~10 m land vehicles; top level is a landing platform for two ~10 m airspeeders); various repair droids. Massive urban-maintenance base droid used in the Corporate Sector and Empire — assigns priorities to maintenance tasks and dispatches the right droid or human team to each job. Typical droid complement includes 5 Accutronics B-1 Worker Droids, 5 EG-6 Veril Line Systems power droids, 10 Industrial Automaton MN2D General Maintenance Droids, and 10 Cybot Galactica WED-15 Treadwell droids. Publictechnic offers fire-fighting and construction package variants on the same chassis.",
  "source": "WEG41010 Star Wars Adventure Journal #10 p.152 (Toria Tell's Droid Journal)"
 }
 ,{
  "name": "Xebonica (Imperial Security Neurotoxin)",
  "type": "Imperial Intelligence Class A Code Red Security Substance",
  "category": "Drugs & Toxins",
  "cost": "Restricted (Imperial Intelligence issue only)",
  "availability": "4, X",
  "game_notes": "Slow-acting time-released neurotoxin issued by Imperial Intelligence to garrison commanders and field operatives, mandatory for all Class A Code Red individuals (research scientists, weapons manufacturers, and others carrying top-priority information) during transfer from native worlds to secure areas. Includes a bio-masking agent to prevent easy detection. Antidote: Trypanid 20 mcg at 10-hour intervals for standard humans, as directed for other lifeforms — without the antidote the active ingredient becomes lethal far more rapidly. Symptoms in human and similar life-forms follow the standard pattern for invasive neurotoxin poisoning. Imperial Intelligence advises commanders to provide cover stories that give the subject sufficient cause to seek regular medical checks at the required intervals. Custom variants exist — Major Pedrin used a sub-variant on Ketrian Altronel that the standard Trypanid antidote could not counter.",
  "source": "WEG41010 Star Wars Adventure Journal #10 p.208 (Desperate Measures — Chemical Security Protocols)"
 }
 ,{
  "name": "Mangoriza (Imperial Security Neurotoxin)",
  "type": "Imperial Intelligence Class A Code Red Security Substance",
  "category": "Drugs & Toxins",
  "cost": "Restricted (Imperial Intelligence issue only)",
  "availability": "4, X",
  "game_notes": "Slow-acting time-released neurotoxin issued by Imperial Intelligence as an alternate to Xebonica for use on Class A Code Red individuals. Includes a bio-masking agent to prevent easy detection. Antidote: Alaswal-XT 40 mcg at 10-hour intervals for standard humans, as directed for other lifeforms — without the antidote the active ingredient becomes lethal far more rapidly. Symptoms follow the standard invasive neurotoxin pattern. Intelligence Command continually rotates the chemicals on issue to defeat terrorist counter-intelligence; supplies must be regularly upgraded.",
  "source": "WEG41010 Star Wars Adventure Journal #10 p.208 (Desperate Measures — Chemical Security Protocols)"
 }
 ,{
  "name": "Stun Steps",
  "type": "Telex-Delcor Ramp Entry Security System",
  "category": "Ship Equipment",
  "cost": "1,500 (additional 500 per +1D stun damage past 3D, max 5D)",
  "availability": "2, F",
  "game_notes": "Anti-boarding security device. Uses the natural conductive abilities of standard ramps and steps to create an electromagnetic neuro-shock field — anything that enters the field receives a 3D stun shock (upgradable to 5D). Plugs directly into the ship's power grid for unlimited shocks while powered; backup battery delivers a total of 20D of stun damage if main power is lost. System consists of a backup power supply, charge capacitor, remote control unit, field generator rods, and a simple sensor package. A separate system must be installed for each ramp/step/entrance, but multiple systems can be slaved to the same remote. Most users do not integrate stun-step controls into the ship's security programs — they prefer a remote control device, making the unit nearly invisible to intruders until it's too late. Encountered by Rebel Special Ops Major T'Charek Haathi during a Zelos II shipjacking when she set foot on the Maker's entry ramp before Lt. Morgan Raventhorn could disconnect the system; she was thrown backward in a sizzling pink flash and temporarily lost the use of her legs.",
  "source": "WEG41013 Star Wars Adventure Journal #13 (Special Ops: Shipjackers)"
 }
 ,{
  "name": "Scomp-Spiker",
  "type": "Custom-built Outlaw Tech Computer Spiker",
  "category": "Security",
  "cost": "20 (in spare parts)",
  "availability": "X",
  "game_notes": "Outlaw-tech computer wrecker consisting of a charge capacitor, scomp link, power jack, and a remote control. Plugged first into the scomp link, then into the power jack to prevent blowout. After charging, the unit sends a high-voltage blast into the computer system, melting connections and destroying programs along its course. The device is not selective — it is designed to destroy computer components or, at minimum, render the sub-station where it is used inoperable. Common gear for shipjacker teams who need to crater a security computer rather than slice it.",
  "source": "WEG41013 Star Wars Adventure Journal #13 (Special Ops: Shipjackers)"
 }
 ,{
  "name": "Serv-O-Droid 87-RM Scout Collector Droid",
  "type": "Serv-O-Droid 87-RM Scouting Droid",
  "category": "Droids",
  "cost": "4,350 credits",
  "availability": "2, F",
  "game_notes": "Second Degree Droid (engineering/maintenance). Personality: Simple. Height: 2.5 meters. Move: 7. DEX 1D (melee combat 3D, melee parry 4D), KNO 1D, MEC 1D, PER 1D (search 3D), STR 6D (lifting 8D), TEC 1D. Equipped with: repulsorlift floaters, two grappling claws, shields, flash-freeze unit. CLAW ATTACK: claws do 3D damage in melee combat; a successful hit means the target has been restrained and will be dumped next round into the flash-freeze chamber. FLASH-FREEZE: the droid flash-freezes its specimens; after a couple of minutes of cryogenically controlled hypothermia, the sample is flash-frozen for the return trip. A character captured by the droid but rescued within two minutes can be revived using first aid techniques for cold exposure (Moderate first aid roll); only three attempts can be made (once per hour) and failure to revive results in incapacitated wound status; success means the frozen character is treated as wounded for 1D hours but recovers completely. SHIELDS: limited shields worth +2D against energy attacks; if a creature touches the outer shell, the droid can concentrate its shields into a contact stun of 5D damage, but only once per combat round. Created by Serv-O-Droid to assist colonists and scouts during the initial stages of a planet's exploration — collector droids perform cleanup duties after scout droids locate and stun target specimens, rumbling along with a steam condensation trail behind them, picking up stunned units with their two large claws and placing them inside their gaping maw at the top of the droid for flash-freezing. Repulsorlift generators underneath maintain a one-meter elevation. The Empire reportedly discontinued use of this model after one unit went crazy and clawed something like 300 colonists on Corva Yag near the Minos Cluster — public safety briefs blamed counter-programming, possibly Rebel sabotage, but Cynabar's contributors speculated the colonists may have stumbled into something the Imperials wanted hidden.",
  "source": "WEG41013 Star Wars Adventure Journal #13 (Cynabar's Droid Datalog)"
 }
 ,{
  "name": "BioTech Mark 16 Enzymer",
  "type": "Bio-Identification Unit and Counter-Agent Producer",
  "category": "Medical",
  "cost": "Not for general sale (requires medical/scientific license)",
  "availability": "1",
  "game_notes": "Skill: first aid. The enzymer is a tabletop console device that grows and identifies biological residues — bacteria, viruses, and certain parasites — and produces a matching counter-agent. The unit is only as good as its sample database; counter-agents can only be produced for known pathogens already on file. Outdated registry programming (as on the unit at the Irrational Number bar/inn at Jugsmuk Station, Gamorr) limits the device's usefulness for treating exotic diseases from undocumented worlds, but for most galactic-mainline infections it remains a reliable rough-and-ready medical tool — popular with remote outpost bars, frontier clinics, and traders working on planets where proper medical droids and clinics are non-existent.",
  "source": "WEG41014 Star Wars Adventure Journal #14 p.50 (Murder in Slushtime)"
 }
 ,{
  "name": "Cybot Galactica IC-M Utility Droid",
  "type": "Cybot Galactica IC-M General Utility Droid",
  "category": "Droids",
  "cost": "1,700 credits (new), 500 credits (used)",
  "availability": "2, R",
  "game_notes": "Second Degree Droid. Personality: None. Height: 1.5m. Move: 7. DEX 1D, KNO 1D, MEC 2D, PER 2D, STR 3D (lifting 5D), TEC 4D (computer programming/repair 5D, general repair 8D+1, machinery repair 5D). Equipped with: photoreceptor/auditory receiver (human range), seven manipulator arms with interchangeable fixtures, heavy Treadwell locomotion, rear storage bay containing various cleaning and repair tools, two heads (allows the unit to access data such as Imperial building codes and scheduled tasks while performing the job at hand). Designed to maintain and clean the lower levels of Coruscant for the Empire. Programming allows minor structural repairs (changing dead light fixtures) to minor landscaping (weeding walkways). Many IC-Ms have been purchased by other system and local governments to save on the cost of organic workers. SMUGGLER NOTE: since IC-Ms operate deep in the Coruscant underlevels they are harder to keep under Imperial surveillance and easier to co-opt for illegal purposes — recommended for covert communication memory-buffer relay on Imperial Center as an alternative to the closely-monitored IN-4 message droids.",
  "source": "WEG41014 Star Wars Adventure Journal #14 p.249 (Cynabar's Droid Datalog); WEG40114 The Jedi Academy Sourcebook p.141"
 }
 ,{
  "name": "Cybot Galactica M4 Message Droid",
  "type": "Cybot Galactica M4 Message Droid (M4m military variant available)",
  "category": "Droids",
  "cost": "2,000 credits (civilian issue), 4,000 credits (M4m military issue)",
  "availability": "1 (civilian), 2 R (military)",
  "game_notes": "Second Degree Droid. Personality: Simple. Height: 0.3m. Move: 30 (repulsorlift, max altitude 4m). DEX 1D (dodge 5D), KNO 1D, MEC 1D, PER 1D, STR 1D, TEC 1D. Equipped with: holographic projector/recorder, repulsorlift drive unit with 4-meter flight ceiling. Military variant (M4m) adds: body armor (+2D physical, +1D energy) and an internal sporting blaster (3D+1 stun damage, ranges 0-5/10/20). Designed to make quick information exchange less risky than standard data transmission methods. Capable of playing pre-recorded messages and datatapes as well as recording holo messages on the spot; encryption codes must be entered by the recipient of any given message. The Rebel Alliance uses the M4m model (officially designated 'IN-4') for message drops, drawing close Imperial attention to anything resembling one in the wild.",
  "source": "WEG41014 Star Wars Adventure Journal #14 p.249 (Cynabar's Droid Datalog); WEG40025 Galladinium's Fantastic Technology p.24"
 }
 ,{
  "name": "Cybot Galactica Guardian-class Droid",
  "type": "Cybot Galactica Guardian-class Protector/Companion Droid",
  "category": "Droids",
  "cost": "4,000 credits (new), 2,000 credits (used)",
  "availability": "2, F",
  "game_notes": "Fourth Degree Droid. Personality: Elementary. Height: 1.5m (roughly canine in appearance). Move: 13. DEX 2D (blaster 4D, brawling parry 2D+1, dodge 3D+2, melee combat 4D, melee parry 4D, running 4D), KNO 1D (alien species 2D, intimidation 4D), MEC 3D (communications 2D, sensors 4D), PER 2D (search 3D), STR 3D (brawling 4D), TEC 1D. Equipped with: four legs, hinged grasping jaw with retractable blade incisors (STR+2 damage), two visual/auditory sensor recorders (human range), retractable blaster (3D damage, ranges 0-3/10/20). LOYALTY IMPRINT special ability: absolute obedience to master and designated family members; will defend would-be attackers in a potential threat situation unless directly countermanded by a designated family member. Made extremely popular by a series of children's holotexts and favored by parents who require a protector/companion for children. Modders frequently retrofit Guardians with sensor packages, tracking SkillWare, automaps (excellent scouting assistants), or — less commonly — combat SkillWare and metal claws/fangs for freighter security duty (the modified version actually growls).",
  "source": "WEG41014 Star Wars Adventure Journal #14 p.257 (Cynabar's Droid Datalog); WEG40025 Galladinium's Fantastic Technology p.19"
 }
 ,{
  "name": "Cybot Galactica LIN Demolitionmech Mining Droid",
  "type": "Cybot Galactica LIN Demolitionmech Mining Droid (military minelayer variant)",
  "category": "Droids",
  "cost": "12,000 credits (black market), 6,000 credits (military issue)",
  "availability": "2, R",
  "game_notes": "Fourth Degree Droid. Personality: None. Height: 0.7m. Move: 3. DEX 1D (blaster artillery 4D), KNO 1D, MEC 1D, PER 3D, STR 6D, TEC 3D (demolitions 6D+1). Equipped with: video sensor, dual-tread locomotion, fine manipulator arm under dome (for planting explosives), Cybot acoustic signaler (droid languages only), armored housing (+2D Strength). Military model adds a minelayer mount (ammo magazine, up to 60 mines of varying types). Developed for deep excavation mining where the highly sensitive charges required would be too dangerous for organic workers — moves slowly, strategically planting explosives so detected ore can be made available. Easily modified for military use, planting or removing mines from a battlefield. SLICER NOTE: the programming module is not difficult to slice; with a few hardpoints for distance weapons (concussion missiles, grenade launchers, flame projectors) the LIN can be a formidable opponent, especially in night engagements where its sensitive sensors give it an advantage.",
  "source": "WEG41014 Star Wars Adventure Journal #14 p.259 (Cynabar's Droid Datalog)"
 }
 ,{
  "name": "Publictechnic 850.AA Public Maintenance Droid",
  "type": "Publictechnic 850.AA Public Maintenance Droid",
  "category": "Droids",
  "cost": "75,000 credits",
  "availability": "2",
  "game_notes": "Fourth Degree Droid (officially classified for political reasons; functionally a fifth degree maintenance unit). Personality: None. Height: 13m. Move: 30 (repulsorlift, flight ceiling 20m). DEX 1D, KNO 2D, MEC 1D, PER 1D (command 4D), STR 7D, TEC 1D. Equipped with: repulsorlift system, Publictechnic power cell system, beamcleaners, coarse cleaning brushes, sensorlink network system, equipment bay, various smaller repair droids it can deploy and recall. An immense unit capable of handling almost all of an urban region's maintenance duties; the internal bay houses smaller maintenance units which the 850.AA controls by regulating their schedules and workloads. NOTORIETY: 850.AAs have been banned on Kothlis after a Bothan clan squabble in which one faction reprogrammed an 850.AA to pass a rival's home and disgorge dozens of reprogrammed Arakyd Seekers (the official newsnet classification of the resulting firefight as 'a minor geologic upheaval' satisfied no one).",
  "source": "WEG41014 Star Wars Adventure Journal #14 p.260 (Cynabar's Droid Datalog)"
 }
 ,{
  "name": "Cybot Galactica CLL-8 Binary Cargo Load Lifter",
  "type": "Cybot Galactica CLL-8 Binary Cargo Load Lifter",
  "category": "Droids",
  "cost": "2,500 credits",
  "availability": "1",
  "game_notes": "Fifth Degree Droid. Personality: None. Height: 3m. Move: 7. DEX 1D, KNO 1D, MEC 1D, PER 1D, STR 6D (lifting 8D), TEC 1D. Equipped with: two gyro-stabilized heavy lifting legs, two heavy cargo arms, armored systems housing. Standard binary cargo lifter found throughout the galaxy's starports — legs and arms are reinforced and filled with hydraulics to allow heavy cargo lifting. Responds to simple verbal commands; protocol droids are sometimes used to program CLL-8s for more complex extended jobs such as loading an entire freighter cargo bay while sorting by data identification labels. NOTE: Cybot Galactica uses the same binary language to program load lifters that moisture farmers use to control vaporators — Jawas and other local scavengers tend to cannibalize vaporator programming modules to repair damaged load lifters. WARNING: equipping a CLL-8 with combat weaponry powerful enough to stop armored troops risks punching a blaster shot through the freighter hull (CLL-8s aren't terribly bright).",
  "source": "WEG41014 Star Wars Adventure Journal #14 p.262 (Cynabar's Droid Datalog)"
 }
 ,{
  "name": "Serv-O-Droid DC5-1 Cargo Droid",
  "type": "Serv-O-Droid DC5-1 Cargo Labor Droid",
  "category": "Droids",
  "cost": "4,500 credits",
  "availability": "1",
  "game_notes": "Fifth Degree Droid. Personality: None. Height: 2.8m. Move: 6. DEX 2D, KNO 1D, MEC 1D, PER 1D, STR 4D (lifting 10D), TEC 1D (security 4D). Equipped with: four extendible manipulators, one pair of heavy treads, one pair of lifting claws, cranial turret with audio/video sensor, remote directional transponder, armored chassis (+1D physical and energy), laser scanner. CARGO CODE DATABASE special ability: the laser scanner identifies each cargo module's identity band on the side of the module and correlates it to where the module should be off-loaded; the scanner can also re-code identity bands for new cargoes. Popular on Imperial-aligned worlds where Customs officials tend to trust the droid's internal cargo manifests — with creative reprogramming, falsifying records is straightforward. WARNING: the DC5-1 has a hardwired memory backup that automatically dumps a copy of the original system parameters anytime primary programming is altered. Smart Customs officials check the backup memory.",
  "source": "WEG41014 Star Wars Adventure Journal #14 p.263 (Cynabar's Droid Datalog); WEG40042 Han Solo and the Corporate Sector Sourcebook p.126"
 }
 ,{
  "name": "Industrial Automaton L2 Base Labor Droid",
  "type": "Industrial Automaton L2 Base Labor Droid",
  "category": "Droids",
  "cost": "1,200 credits",
  "availability": "2, F",
  "game_notes": "Fifth Degree Droid. Personality: Simple. Height: 1m. Move: 5. DEX 1D, KNO 1D, MEC 1D, PER 1D, STR 2D (lifting 4D), TEC 1D. Equipped with: two heavy grasper arms (+1D lifting), retractable fine work heavy grasper arm, two tractor feet, two visual and two auditory sensor recorders, small circular saw (4D damage, 0.3m range). SKILL DUPLICATION special ability: since L2 labor droids record all visual and auditory instruction, they attempt to duplicate the instructions to the letter — an L2 can perform a Mechanical or Technical task at the same skill level of the instructor, provided all steps to complete the task have been explained to the droid in exacting detail. Cheap, reliable, menial workers; can be programmed to complete tasks of up to 100 separate steps and repeat them indefinitely without further instruction. Popular for owners needing units in industrial activities, maintenance, construction, and mechanical repair. The L2 is so heavily moddable that many in service have been customized beyond recognition.",
  "source": "WEG41014 Star Wars Adventure Journal #14 p.263 (Cynabar's Droid Datalog)"
 }
 ,{
  "name": "Cybot Galactica RA Servant Droid",
  "type": "Cybot Galactica RA-series Servant Droid",
  "category": "Droids",
  "cost": "1,500 credits",
  "availability": "1",
  "game_notes": "Fifth Degree Droid. Personality: Complex. Height: 1.7m. Move: 5. DEX 1D, KNO 2D (cultures 3D), MEC 1D, PER 1D, STR 2D, TEC 2D. Equipped with: two photoreceptors and auditory receptors (human range), vocabulator (capable of speaking one programmed language), humanoid frame (two arms, two legs). Cybot Galactica's answer to the galactic call for a more appealing servant droid — based on the popular 3PO protocol unit, the RA provides owners with a low-end affordable servant droid capable of minor cleaning and attendance duties. NOTE: the RA-series is innocuous and inexpensive, making it very easy to upgrade into a combat or espionage unit. The well-known thief Tombat famously reprogrammed an RA droid to give him the layout of a manor house, casing the entire structure without ever setting foot inside — simply by adding a holocam and automap to the unit.",
  "source": "WEG41014 Star Wars Adventure Journal #14 p.265 (Cynabar's Droid Datalog)"
 }
 ,{
  "name": "Bavar Tasari Breath Mask",
  "type": "Bavar Breathing Systems Portable Environmental Support Unit",
  "category": "Survival Gear",
  "cost": "40 credits",
  "availability": "3",
  "game_notes": "Tasari-manufactured breath mask covering the face and nose of humanoid beings. Oxygen is supplied through a hose from a detachable Tasari Oxygen Tank (sold separately). Tasari masks are bulkier than the standard galactic breath mask (2 kg airtank weight) but have a major advantage: the Tasari have developed a way to compress oxygen (or other gases a being might need to survive) so that each tank supplies the wearer with roughly two days of breathable gases depending on how much physical exertion the wearer performs.",
  "source": "WEG41015 Star Wars Adventure Journal #15 p.187 (Tasariq: The Crystal Planet)"
 }
 ,{
  "name": "TasCorp Essential Miner's Gear (Mining Kit)",
  "type": "Tasari Mining Utility Kit",
  "category": "Tools",
  "cost": "200 credits",
  "availability": "3",
  "game_notes": "A complete mining kit provides all non-power equipment needed for successful tasar crystal mining, packed into a sturdy backpack. Contents: basic manual-excavation tools for tasar crystals or blaststick-debris sifting, one week of military-style dried rations, a Tasari breath mask, and two personal Tasari oxygen tanks. The backpack is designed so that miners can repurpose it to carry tasar crystals once they start eating their rations. Provides characters excavating tasar crystals with +1D to Search or mining skill rolls. Widely used by both native Tasari and cash-poor, ill-prepared off-worlders starting their quest for tasar crystal fortune.",
  "source": "WEG41015 Star Wars Adventure Journal #15 p.188 (Tasariq: The Crystal Planet)"
 }
 ,{
  "name": "Tasari Personal Oxygen Tank",
  "type": "Tasari Elder Council Oxygen Tank (personal model)",
  "category": "Survival Gear",
  "cost": "10 credits (1 credit to refill at any Tasari Filling Station)",
  "availability": "3",
  "game_notes": "Armor value 1D. Weighs 2 kilograms. Connects to a Tasari breath mask or other life-support valve. Tasari compression technology lets each tank supply approximately six days of breathable atmosphere (vs. about 1 hour for a standard galactic breath mask before filters and power packs need replacement). Fitted with a gauge. Intended to be reused — although many off-worlders treat them as disposable due to their low cost, the Tasari virtually always reuse them and every settlement has at least one Filling Station. PUNCTURE HAZARD: should a personal tank be punctured, the carrier suffers 2D damage from the resulting explosion and shrapnel from the sudden release of compressed gases. The manufacture of oxygen tanks is a Tasari community project — Tasari who commit minor infractions of tribal law are sentenced to manufacture oxygen tanks (quality control is strict; failing a safety inspection extends the sentence by a week), which is one reason why they are priced so low.",
  "source": "WEG41015 Star Wars Adventure Journal #15 p.189 (Tasariq: The Crystal Planet)"
 }
 ,{
  "name": "Tasari Vehicle Oxygen Tank",
  "type": "Tasari Elder Council Oxygen Tank (vehicle model)",
  "category": "Survival Gear",
  "cost": "55 credits (5 credits to refill at any Tasari Filling Station)",
  "availability": "3",
  "game_notes": "Armor value 3D. Weighs 10 kilograms. Designed for use on surface vehicles and temporary shelters (pressure tents). Provides approximately six days of breathable atmosphere at normal consumption rates. PUNCTURE HAZARD: when a vehicle tank is punctured, all beings within 2 meters suffer 2D damage from the explosion and shrapnel.",
  "source": "WEG41015 Star Wars Adventure Journal #15 p.189 (Tasariq: The Crystal Planet)"
 }
 ,{
  "name": "TasCorp Enviro-Tent 2A (Small Pressure Tent)",
  "type": "Tasari Small Survival Pressure Tent",
  "category": "Survival Gear",
  "cost": "100 credits",
  "availability": "3",
  "game_notes": "Skill: Survival. Holds 1-3 people. Uses 2 personal oxygen tanks; the tanks provide one week of use. Setup time: about one hour. A lightweight domed pressure tent with hollow poles covered by a plastic skin and a special airlock entrance. A gas regulator maintains the atmosphere. Provides protection from weather conditions (even severe storms) but NO protection from blaster fire, explosions, or projectile/melee weapons. When not in use it can be packed away compactly.",
  "source": "WEG41015 Star Wars Adventure Journal #15 p.190 (Tasariq: The Crystal Planet)"
 }
 ,{
  "name": "TasCorp Enviro-Tent 9B (Medium Pressure Tent)",
  "type": "Tasari Medium Survival Pressure Tent",
  "category": "Survival Gear",
  "cost": "350 credits",
  "availability": "3",
  "game_notes": "Skill: Survival. Holds 6-12 people. Uses 2 vehicle oxygen tanks; the tanks provide one week of use. Setup time: about one hour. Features two airlocks and can be joined to other pressure tents to form many-roomed buildings. A gas regulator maintains the atmosphere. Weather protection only — no protection from weapons.",
  "source": "WEG41015 Star Wars Adventure Journal #15 p.190 (Tasariq: The Crystal Planet)"
 }
 ,{
  "name": "TasCorp Enviro-Tent 30C (Large Pressure Tent)",
  "type": "Tasari Large Survival Pressure Tent",
  "category": "Survival Gear",
  "cost": "1,200 credits",
  "availability": "3",
  "game_notes": "Skill: Survival. Holds 20-40 people. Uses 4 vehicle oxygen tanks; the tanks provide one week of use. Setup time: about one hour. Multiple airlocks, can be joined to other pressure tents to build permanent-feeling complexes. A gas regulator maintains the atmosphere. Weather protection only — no protection from weapons.",
  "source": "WEG41015 Star Wars Adventure Journal #15 p.190 (Tasariq: The Crystal Planet)"
 }
 ,{
  "name": "Tasar Crystal (Ordinary)",
  "type": "Tasar Crystal",
  "category": "Tasar Crystals",
  "cost": "2D × 1,000 credits (varies by color count and size)",
  "availability": "1 (F on Tasariq)",
  "game_notes": "Ordinary tasar crystals have no practical application but are ascetically prized and valuable as jewelry. Come in a variety of colors and sizes (the more colors, the higher the value). Size ranges from a few millimeters to as much as 3 meters in length and width. The famous Rainbow Labyrinth crystal sold for 50 million credits. The Tasari believe crystals promote healing and good health and carry one as a good luck charm; some crystals have a noticeable soothing effect even to ardent skeptics. Only off-worlders sell tasar crystals by raw carat-weight; Tasari themselves recognize that a rare minority are POWER CRYSTALS and keep these within family lines.",
  "source": "WEG41015 Star Wars Adventure Journal #15 p.195 (Tasariq: The Crystal Planet)"
 }
 ,{
  "name": "Tasar Power Crystal — Amethyst",
  "type": "Tasar Power Crystal",
  "category": "Tasar Crystals",
  "cost": "10x normal price (if recognized); Tasari rarely sell recognized power crystals at any price",
  "availability": "4, F",
  "game_notes": "Color: Deep purple. Power: ION GENERATION. Effect: ions have a soothing effect upon most beings — ion generation helps calm lost tempers and promote feelings of good will. The power adds +1D (+2D for Tasari) to interpersonal skills such as willpower, bargain, command, con, and persuasion. Difficulty: Easy used within 2 meters; raise the difficulty level by one for every additional 2 meters of range. Random generation table: Table 1 (roll 1) result 1. Attunement: beings who carry a tasar power crystal on their person for 2D months gradually become attuned to the crystal and become Force-sensitive, gaining Force-power-like abilities specific to the crystal type. Power levels: 4D (native Tasari), 3D (Jedi), 2D (Force-sensitive prior to attunement), 1D (other characters). If a character owns more than one power crystal, powers function at different levels — once they become Force-sensitive through attunement to the first, a second will function at 2D instead of 1D.",
  "source": "WEG41015 Star Wars Adventure Journal #15 p.195 (Tasariq: The Crystal Planet)"
 }
 ,{
  "name": "Tasar Power Crystal — Aquamarine",
  "type": "Tasar Power Crystal",
  "category": "Tasar Crystals",
  "cost": "10x normal price (if recognized)",
  "availability": "4, F",
  "game_notes": "Color: Pale blue-green. Power: PSYCHOMETRY. Effect: the ability to handle a non-animate object and discover information about its past. Difficulty: Easy to receive simple information (mood and physical condition of the person who last handled the object); Difficult to receive complex information (name, race, and other personal information). Random generation table: Table 1 result 2. (Attunement rules as per Tasar Power Crystal — Amethyst.)",
  "source": "WEG41015 Star Wars Adventure Journal #15 p.195 (Tasariq: The Crystal Planet)"
 }
 ,{
  "name": "Tasar Power Crystal — Azurite",
  "type": "Tasar Power Crystal",
  "category": "Tasar Crystals",
  "cost": "10x normal price (if recognized)",
  "availability": "4, F",
  "game_notes": "Color: Mottled blue. Power: REMAIN CONSCIOUS (as per the Force rules, except no prerequisite power is needed). Random generation table: Table 2 result 1. (Attunement rules as per Tasar Power Crystal — Amethyst.)",
  "source": "WEG41015 Star Wars Adventure Journal #15 p.196 (Tasariq: The Crystal Planet)"
 }
 ,{
  "name": "Tasar Power Crystal — Bloodstone",
  "type": "Tasar Power Crystal",
  "category": "Tasar Crystals",
  "cost": "10x normal price (if recognized)",
  "availability": "4, F",
  "game_notes": "Color: Dark gray with flecks of red. Power: WOUND REDUCTION. Effect: if the Wound Reduction power works, the user has his wound level healed by one. The power can only be used once per day. Difficulty: Easy for wounded; Moderate for incapacitated; Difficult for mortally wounded. Random generation table: Table 3 result 1. (Attunement rules as per Tasar Power Crystal — Amethyst.)",
  "source": "WEG41015 Star Wars Adventure Journal #15 p.196 (Tasariq: The Crystal Planet)"
 }
 ,{
  "name": "Tasar Power Crystal — Carnelian",
  "type": "Tasar Power Crystal",
  "category": "Tasar Crystals",
  "cost": "10x normal price (if recognized)",
  "availability": "4, F",
  "game_notes": "Color: Orange shading to red. Power: ANIMAL TELEPATHY. Effect: allows the user to read the thoughts of an animal or other creature. The more intelligent the animal the more complex the thoughts; simple animals have thought processes based strongly on instinct. Does NOT work on sapient species. Difficulty: Easy. Random generation table: Table 2 result 2. (Attunement rules as per Tasar Power Crystal — Amethyst.)",
  "source": "WEG41015 Star Wars Adventure Journal #15 p.196 (Tasariq: The Crystal Planet)"
 }
 ,{
  "name": "Tasar Power Crystal — Chalcite",
  "type": "Tasar Power Crystal",
  "category": "Tasar Crystals",
  "cost": "10x normal price (if recognized)",
  "availability": "4, F",
  "game_notes": "Color: Green mixed with swirling golden lines. Power: RECEPTIVE TELEPATHY (as per the Force rules, except that no prerequisite power is needed). Random generation table: Table 3 result 2. (Attunement rules as per Tasar Power Crystal — Amethyst.)",
  "source": "WEG41015 Star Wars Adventure Journal #15 p.196 (Tasariq: The Crystal Planet)"
 }
 ,{
  "name": "Tasar Power Crystal — Citrine",
  "type": "Tasar Power Crystal",
  "category": "Tasar Crystals",
  "cost": "10x normal price (if recognized)",
  "availability": "4, F",
  "game_notes": "Color: Yellow-brown. Power: ACCELERATE HEALING (as per the Force rules). Random generation table: Table 1 result 3. (Attunement rules as per Tasar Power Crystal — Amethyst.) Notable bearers: Ansan Talam; Garuk (as part of his power amulet).",
  "source": "WEG41015 Star Wars Adventure Journal #15 p.196 (Tasariq: The Crystal Planet)"
 }
 ,{
  "name": "Tasar Power Crystal — Garnet",
  "type": "Tasar Power Crystal",
  "category": "Tasar Crystals",
  "cost": "10x normal price (if recognized)",
  "availability": "4, F",
  "game_notes": "Color: Red, brown, and green. Power: CONTROL ANOTHER'S PAIN (as per the Force rules). Random generation table: Table 3 result 3. (Attunement rules as per Tasar Power Crystal — Amethyst.)",
  "source": "WEG41015 Star Wars Adventure Journal #15 p.196 (Tasariq: The Crystal Planet)"
 }
 ,{
  "name": "Tasar Power Crystal — Jasper",
  "type": "Tasar Power Crystal",
  "category": "Tasar Crystals",
  "cost": "10x normal price (if recognized)",
  "availability": "4, F",
  "game_notes": "Color: Brown shading to blue-black. Power: MAGNIFY SENSES (as per the Force rules). Random generation table: Table 2 result 3. (Attunement rules as per Tasar Power Crystal — Amethyst.) Notable bearer: Garuk (in his ceremonial headband).",
  "source": "WEG41015 Star Wars Adventure Journal #15 p.196 (Tasariq: The Crystal Planet)"
 }
 ,{
  "name": "Tasar Power Crystal — Malachite",
  "type": "Tasar Power Crystal",
  "category": "Tasar Crystals",
  "cost": "10x normal price (if recognized)",
  "availability": "4, F",
  "game_notes": "Color: Bands of light and dark green. Power: POISON SENSE. Effect: allows the user to sense, in advance, any contaminants or other factors that could make a substance dangerous to ingest. Difficulty: Easy. Random generation table: Table 2 result 4. (Attunement rules as per Tasar Power Crystal — Amethyst.)",
  "source": "WEG41015 Star Wars Adventure Journal #15 p.197 (Tasariq: The Crystal Planet)"
 }
 ,{
  "name": "Tasar Power Crystal — Opal",
  "type": "Tasar Power Crystal",
  "category": "Tasar Crystals",
  "cost": "10x normal price (if recognized)",
  "availability": "4, F",
  "game_notes": "Color: A rainbow spectrum of colors. Power: BATTLE SENSE. Effect: if the Battle Sense power works, the user receives +1D to initiative on the first round of combat only. Difficulty: Moderate. Random generation table: Table 3 result 4. (Attunement rules as per Tasar Power Crystal — Amethyst.)",
  "source": "WEG41015 Star Wars Adventure Journal #15 p.197 (Tasariq: The Crystal Planet)"
 }
 ,{
  "name": "Tasar Power Crystal — Peridot",
  "type": "Tasar Power Crystal",
  "category": "Tasar Crystals",
  "cost": "10x normal price (if recognized)",
  "availability": "4, F",
  "game_notes": "Color: Olive green. Power: CONTROL PAIN (as per the Force rules). Random generation table: Table 1 result 4. (Attunement rules as per Tasar Power Crystal — Amethyst.) Notable bearers: Jhorag Corconnan (in a ring); Garuk (as part of his power amulet).",
  "source": "WEG41015 Star Wars Adventure Journal #15 p.197 (Tasariq: The Crystal Planet)"
 }
 ,{
  "name": "Tasar Power Crystal — Sardonyx",
  "type": "Tasar Power Crystal",
  "category": "Tasar Crystals",
  "cost": "10x normal price (if recognized)",
  "availability": "4, F",
  "game_notes": "Color: Red and white. Power: ACCELERATE ANOTHER'S HEALING (as per the Force rules). Random generation table: Table 3 result 5. (Attunement rules as per Tasar Power Crystal — Amethyst.)",
  "source": "WEG41015 Star Wars Adventure Journal #15 p.197 (Tasariq: The Crystal Planet)"
 }
 ,{
  "name": "Tasar Power Crystal — Spinel",
  "type": "Tasar Power Crystal",
  "category": "Tasar Crystals",
  "cost": "10x normal price (if recognized)",
  "availability": "4, F",
  "game_notes": "Color: Red-brown. Power: HYPERTHERMIA. Effect: the ability to see minute temperature differences in animate objects, allowing rolls against a character's Perception or search ratings to detect the changes. Range 15 meters. Also allows a character to see animate objects in the dark, and acts as a diagnostic aid in healing — giving a bonus to the first aid skill equal to the number before the 'D.' Difficulty: Easy. Random generation table: Table 1 result 5. (Attunement rules as per Tasar Power Crystal — Amethyst.)",
  "source": "WEG41015 Star Wars Adventure Journal #15 p.197 (Tasariq: The Crystal Planet)"
 }
 ,{
  "name": "Tasar Power Crystal — Tiger's Eye",
  "type": "Tasar Power Crystal",
  "category": "Tasar Crystals",
  "cost": "10x normal price (if recognized)",
  "availability": "4, F",
  "game_notes": "Color: Dark brown with a central yellow eye. Power: TELEKINESIS (as per the Force rules). Random generation table: Table 3 result 6. (Attunement rules as per Tasar Power Crystal — Amethyst.) Notable bearer: Garuk (in his left arm bracelet).",
  "source": "WEG41015 Star Wars Adventure Journal #15 p.197 (Tasariq: The Crystal Planet)"
 }
 ,{
  "name": "Tasar Power Crystal — Topaz",
  "type": "Tasar Power Crystal",
  "category": "Tasar Crystals",
  "cost": "10x normal price (if recognized)",
  "availability": "4, F",
  "game_notes": "Color: Golden yellow. Power: LIFE DETECTION (as per the Force rules). Random generation table: Table 1 result 6. (Attunement rules as per Tasar Power Crystal — Amethyst.) Notable bearer: Bersin Sekolah.",
  "source": "WEG41015 Star Wars Adventure Journal #15 p.197 (Tasariq: The Crystal Planet)"
 }
 ,{
  "name": "Tasar Power Crystal — Tourmaline",
  "type": "Tasar Power Crystal",
  "category": "Tasar Crystals",
  "cost": "10x normal price (if recognized)",
  "availability": "4, F",
  "game_notes": "Color: The blue spectrum, from pale azure to deep indigo. Power: EMPATHY. Effect: allows the user to experience the emotions of a sapient individual, but no actual thoughts can be read. Difficulty: Easy for own species; Moderate for other species. Random generation table: Table 2 result 5. (Attunement rules as per Tasar Power Crystal — Amethyst.)",
  "source": "WEG41015 Star Wars Adventure Journal #15 p.197 (Tasariq: The Crystal Planet)"
 }
 ,{
  "name": "Tasar Power Crystal — Turquoise",
  "type": "Tasar Power Crystal",
  "category": "Tasar Crystals",
  "cost": "10x normal price (if recognized)",
  "availability": "4, F",
  "game_notes": "Color: Light blue shading to green. Power: NATURAL NAVIGATION. Effect: prevents the user from getting lost, as long as the person has a map or some sense of the appropriate direction. If the individual has no idea of the surroundings, they can still discern magnetic north. Difficulty: Very Easy. Random generation table: Table 2 result 6. (Attunement rules as per Tasar Power Crystal — Amethyst.) Notable bearer: Bersin Sekolah.",
  "source": "WEG41015 Star Wars Adventure Journal #15 p.197 (Tasariq: The Crystal Planet)"
 },
 {
  "name": "Simcronics MagnaForce Personal Energy Shield",
  "category": "Shields",
  "cost": "25,000 (frontal only), 50,000 (full protection), 2,500 (custom power cells)",
  "availability": "4, F, R or X",
  "game_notes": "Character scale. Worn as a powerbox around the waist (usually under clothing). Shield score: 5D to deflect blaster bolts and other energy weapons (use protection rules p.63 Revised & Expanded). Any further damage affects target per 'Cover Modifiers' chart. Power cells last 1 standard hour before draining. Politician's dream — popular with crime lords, bounty hunters, and bill collectors. Embellished version of the MagnaForce Security Shield with longer duration (1 hour vs 2 minutes) and stronger defenses.",
  "source": "WEG41016 Star Wars Adventure Journal #16 p.215 (Credit Denied)"
 },
 {
  "category": "Security",
  "name": "HackCom 3000 Code Key Cylinder Slicer",
  "type": "Outlaw Cylinder Slicer / ID Maker",
  "cost": "12,000 (black market only), cipher program updates 3,000",
  "availability": "4, X",
  "game_notes": "Skill: Forgery: cylinder slicer. Small hand-held microcomputer that copies and alters most civilian and military code key cylinders and ident badges. Uses highly illegal cipher programs to break and mimic security protocols. Features detachable holocam, data jacks, standard scomp-link, two universal cylinder sockets, and a key card slot accepting all standard ident cards. Forgery roll required per attempt — Easy: unaltered copies; Moderate: minor data alterations (name, picture, personal info); Difficult: major alterations (retina patterns, fingerprints, voice samples). Modifiers: +10 if using matching blanks, +5 for extensive experience with ident type, +5 difficulty if no experience, +10+ difficulty for non-matching blanks, +30 difficulty for cipher programs more than 4 months old. Wild die 1 = accidental destruction of original ident. WARNING: Possession carries a mandatory 30-year sentence in an Imperial correction facility.",
  "source": "WEG41017 Star Wars Adventure Journal #17 p.75-76 (Special Ops: The Art of Infiltration)"
 },
 {
  "category": "Tools",
  "name": "Modified BothiCorp Remote Detonator Glove",
  "type": "Outlaw Tech Remote Demolition Controller",
  "cost": "300 (glove), 200 (c-chips and parts)",
  "availability": "X",
  "game_notes": "Skill: Demolitions: detonator glove. Originally a BothiCorp Labor Droid Remote Glove for controlling cargo-handling BI labor droids. Commands entered via input buttons in palm and wristband, uploaded via built-in comlink. Moderate computer repair roll to replace and modify command chips and programming. Easy demolitions roll to synchronize each explosive device's remote detonator to the glove's comlink. Once modified, controls up to 200 individual explosive devices at 300 meters range. Created by Lieutenant Morgan Q. Raventhorn; has become near-standard gear in the Special Ops community.",
  "source": "WEG41017 Star Wars Adventure Journal #17 p.78 (Special Ops: The Art of Infiltration)"
 },
 {
  "name": "Mist's Modified Krail 1010 Photo-reactive Armor",
  "category": "Powersuits",
  "type": "Modified personal battle armor",
  "cost": "80,000 (with all modifications)",
  "availability": "Basic suit X (illegal on most planets); modified suit is unique",
  "game_notes": "Skill: Powersuit operation: Krail 1010 armor. BASIC SUIT: +2D to Strength vs energy attacks, +2D+1 vs physical attacks; -1D to Dexterity and related skills. Powered movement: Move 15 rolled on powersuit operation skill. POWER SUIT: +1D to lifting. SENSOR POD: +1D+1 to search. INTEGRAL FLECHETTE LAUNCHER: 20m range, missile weapons skill, 3D stun. JET PACK: Move 100m horizontal/65m vertical, jet pack operation skill (base Easy difficulty), 16 charges, up to 2 per round. SEALED ENVIRO FILTER: Blocks harmful molecules; can fully seal with 3 hours of oxygen. Blast helmet filter includes voice disguiser (renders voiceprint ID futile). PHOTO-REACTIVE COATING: Microscopic photosensitive crystals reflect ambient colors, making the armor difficult to see in virtually any situation (+2D to sneak). REFLEC PLATING: Fine mesh of reflec sensor-absorbing material (favored by Imperial Storm Commandos) adds +1D to sneak. Worn by the enigmatic bounty hunter Mist, making them nearly invisible in most situations while still providing full protection.",
  "source": "WEG40209 The DarkStryder Campaign: Kathol Outback p.19 (Denizens of the Outback)"
 },
 {
  "name": "Paravacc 1JC",
  "category": "Medical",
  "type": "Uukaablian MedCorp Paravacc 1JC Parasite-Repelling Vaccine",
  "cost": "1,000",
  "availability": "2",
  "game_notes": "Skill: Medicine. Easy medicine roll to administer. Successful vaccination grants +1D to Strength for rolls to resist diseases caused by parasites for the next 20 hours. Each paravacc cylinder holds 10 doses. WARNING: Characters using the vaccine for more than 3 consecutive days begin to suffer what seems like utter exhaustion, losing 1 pip from each attribute per day until use ends. Each day without injection returns 1 pip per attribute. Prolonged use has been known to cause deleterious effects on the nervous system. Delivered via polished metal cylinder pressed against the back of the target's neck and activated via end stud; injection causes a slight headache but no other immediate effects.",
  "source": "WEG40209 The DarkStryder Campaign: Kathol Outback p.54 (Wildfire)"
 },
 {
  "name": "Exocron Repulsorlift Personal Jump Pack (Cloud Jumper)",
  "category": "Jet Packs",
  "type": "Exocron Airfleet cloud-jumper repulsorlift pack",
  "cost": "Not available for sale",
  "availability": "3, R",
  "game_notes": "Skill: Repulsorlift operation. Not a true rocket pack — the wearer cannot fly. Instead, the pack allows the wearer to make incredible leaps of over 200 meters at a time, from point to point (hence the 'Cloud Jumper' nickname). Can also be used to slow a free-fall descent for a soft landing in most cases. Cannot be carried while hauling another pack or another person without -1D penalty to repulsorlift operation rolls. Moderate-to-Difficult repulsorlift operation rolls required for most tactical leaps. Looks similar to a popular model of rug-cleaning droid.",
  "source": "WEG40209 The DarkStryder Campaign: Kathol Outback p.76 (The Masters of Exocron)"
 },
 {
  "name": "Imperial Munitions Rampart II Portable Shield Generator",
  "category": "Shields",
  "type": "Portable tactical shield generator",
  "cost": "Not generally available",
  "availability": "3, R",
  "game_notes": "Skill: Computer programming/repair. Crew: 1. Scale: Character. Provides 6D character-scale protection to those behind the shield. Can be configured to either close off an entire corridor (full-width barrier) or to stand roughly 1.5m high and 6m wide (half-wall allowing return fire over the top). When struck, roll 6D vs the incoming weapon's damage — if the generator's total is lower than the damage roll, its protection drops by -1D. When the shield reaches 0D it is destroyed. The FarStar carries several in the Forward Topside Hold and the Deck One Forward Cargo Hold; used by Chase's mutineers to fortify the corridors to engineering during 'Rogue Elements.'",
  "source": "WEG40121 The Kathol Rift p.47 (Rogue Elements)"
 },
 {
  "name": "The Codex",
  "category": "Artifacts",
  "type": "Ancient DarkStryder Force artifact",
  "cost": "Not for sale (unique)",
  "availability": "Unique",
  "game_notes": "Scale: Character. A small metallic pyramid that can easily be lifted in one hand. Thousands of years old and covered in flowing alien script. GAME NOTES: Provides +2D to all Force skills the user possesses. Allows a Force-sensitive to automatically locate 'galactic' scale disturbances in the Force (destruction of a planet or other cataclysm). If used for more than 3 rounds per day: any Dark Side Points the character receives while using it are DOUBLED, and other Force-sensitives can detect the device over distances of more than 100 light years. Body strength 1D to resist damage; if roughly handled or damaged it will break and cannot be repaired. Recovered from an ancient alien waystation in the Kathol Rift. The Aing-Tii trained Makezh specifically to retrieve this artifact, which they believe will allow them to communicate with 'Those Who Dwell Beyond The Veil.' Brings Jessa Dajus a severe Force vision when brought aboard the FarStar, collapsing her into a coma.",
  "source": "WEG40121 The Kathol Rift p.63 (Waystation)"
 },
 {
  "name": "Imperial Medical Resources Trauma Kit",
  "category": "Medical",
  "type": "Trauma-specific medpac",
  "cost": "200",
  "availability": "1, F",
  "game_notes": "Skill: First aid. Scale: Character. Provides +1D to first aid or medicine when used to treat severe physical trauma — burns, cuts, contusions, abrasions, and other external physical injuries. Provides no bonus for other types of injury (internal injuries) or for the treatment of toxins or poisons. Features medicines and treatments specifically for physical injuries common in a crash (burns, contusions, broken limbs, etc.).",
  "source": "WEG40121 The Kathol Rift p.90 (Showdown)"
 },
 {
  "name": "DarkStryder Mindwarper Module",
  "category": "Artifacts",
  "type": "DarkStryder artifact — area-effect incapacitant",
  "cost": "Not available for sale",
  "availability": "4",
  "game_notes": "Skill: Willpower. Scale: Character. Range: 20 meters. Requires Moderate willpower to activate (1 round). All characters within 20 meters must make a Very Difficult willpower check or fall immediately unconscious for 1 hour; can only be awakened by vigorous shaking (Moderate Strength). Single-use only. Same type that Sarne used to escape New Republic ground forces at Kal'Shebbol. Powered by embryonic Precursor life-energy from the Lifewell — each use kills a bit of the trapped Precursors. MISFIRE: On-planet misfires on Wild Die 1; in Kathol system 1-2; in the Rift 1-3; in the Outback 1-4; within 5 weeks travel 1-5; beyond 5 weeks auto-detonates as 10D thermal detonator.",
  "source": "WEG40112 Endgame p.28 (The DarkStryder Planet)"
 },
 {
  "name": "DarkStryder Lightning Module",
  "category": "Artifacts",
  "type": "DarkStryder artifact — lightning bolt weapon",
  "cost": "Not available for sale",
  "availability": "4",
  "game_notes": "Skill: Willpower (used like blaster skill to determine hits). Scale: Character. Range: 3-7/25/50. Fires a lightning bolt at a single target. Damage: 7D. Single-use only. Same misfire rules as Mindwarper Module based on distance from Kathol.",
  "source": "WEG40112 Endgame p.29 (The DarkStryder Planet)"
 },
 {
  "name": "DarkStryder Firespray Module",
  "category": "Artifacts",
  "type": "DarkStryder artifact — burning flame weapon",
  "cost": "Not available for sale",
  "availability": "4",
  "game_notes": "Skill: Willpower (used like blaster skill to determine hits). Scale: Character. Range: 3-4/8/12. Launches a fan of green flame at a single target. Damage: 3D per round until fire is extinguished. Single-use only. Same misfire rules as Mindwarper Module based on distance from Kathol.",
  "source": "WEG40112 Endgame p.29 (The DarkStryder Planet)"
 }
 ,
 // === WEG40215 Lords of the Expanse — Tapani Sector Equipment ===
 {
  "name": "BDG Series Bodyguard Droid",
  "type": "Lanthe Artifice BDG Bodyguard Droid",
  "category": "Droids",
  "cost": "12,500",
  "availability": "2",
  "game_notes": "Height: 2.2m. Move: 10/12. DEX 3D (blaster 4D+2, brawling parry 4D, dodge 4D, melee combat 4D), KNO 1D (intimidation 1D), MEC 1D, PER 2D (investigation 3D, search 3D+2), STR 1D (brawling 5D, lifting 5D), TEC 1D. Equipped with: humanoid body, visual/auditory sensors, body armor (+1D physical resist), vocabulator, AA-1 VerboBrain, retractable heavy stun pistol (4D+2 stun). Loyalty programming bonds the droid to a single individual upon activation — memory wipe required to reassign. Customizable modules (additional weapons, martial arts programming, enhanced sensors) available for 1,000-2,500 credits each.",
  "source": "WEG40215 Lords of the Expanse p.39"
 },
 {
  "name": "KI 301-MAX Nightlight",
  "type": "Kalibac Industries 301-MAX Nightlight",
  "category": "Droids",
  "cost": "8,000",
  "availability": "2",
  "game_notes": "Height: 0.5m. Move: 15. Floater security droid. DEX 3D (blaster 4D+2, dodge 6D), KNO 1D, MEC 1D, PER 3D (hide 4D+2, search 5D+1, sneak 5D), STR 1D, TEC 2D (security 4D). Equipped with: repulsorlift generator (+2D dodge), visual/audio/combat sensors (+2D search and blaster), ionization buffer (+3D vs ion damage), retractable fine work grasper arm, computer I/O jack, stun blaster (2D stun, range 3-10/30/100). Anti-reprogramming package: unauthorized reprogramming attempts cause circuitry overload and burnout.",
  "source": "WEG40215 Lords of the Expanse p.40"
 },
 {
  "name": "Bacta Geltab",
  "type": "Genetech G-5 Geltab",
  "category": "Medical",
  "cost": "50 (pack of 6)",
  "availability": "1",
  "game_notes": "Fluorescent green marble-sized capsule containing bacta. Apply to wound with a Very Easy Dexterity roll before using a medpac to gain +1D bonus on the subsequent first aid roll. Covers approximately 0.3m² area. Large wounds may require 2+ geltabs for full bonus; insufficient coverage grants only +1 or +2 pips instead. Useless without a medpac — acts only as antiseptic on its own.",
  "source": "WEG40215 Lords of the Expanse p.40"
 },
 {
  "name": "Bacta Tray",
  "type": "Genetech BT-16 Bacta Tray",
  "category": "Medical",
  "cost": "2,200",
  "availability": "2",
  "game_notes": "Mobile medical stabilization unit. 2.5m x 0.5m rectangular tray floating on a repulsor field, filled with a thin bacta layer held by low-power tractor beam. 30-hour power pack charge. Activating requires an Easy first aid roll — success stabilizes a mortally wounded patient's condition until full bacta tank treatment is available. Navigates rocky terrain via repulsor field. Designed to complement the RES-Q airspeeder.",
  "source": "WEG40215 Lords of the Expanse p.40"
 },
 {
  "name": "EAR-1 Eavesdropping Unit",
  "type": "EAR-1 Unit",
  "category": "Security",
  "cost": "750 (each bug), 1,000 (headset), 2,500 (microcomputer & recording unit)",
  "availability": "2, R",
  "game_notes": "Eavesdropping system with 5 thumbnail-sized electrobugs, headset, and matte-black microcomputer receiver/recorder. Bugs emit a dampening field that prevents standard scanning equipment from detecting them. 200-meter range, line-of-sight only (blocked by metal and thick walls, but passes through clothing and thin walls). Microcomputer records audio and produces hardcopy transcripts.",
  "source": "WEG40215 Lords of the Expanse p.41"
 },
 {
  "name": "Hex Heavy Turbolaser Battery (HX.6)",
  "type": "Golan Arms HX.6",
  "category": "Ship Equipment",
  "cost": "300,000 (new), 75,000 (used)",
  "availability": "3, X",
  "game_notes": "Scale: Capital. Skill: Blaster artillery: HX.6 turbolaser battery. Crew: 21, skeleton 9/+10. Six barrels firing in alternating pattern. Fire Rate: 1. Fire Control: 3D. Damage: 8D. Body: 4D. Unlimited ammo via dedicated power generator. Surface-to-space weapon designed to defend against capital ship assault. Currently unsuitable for ship mounting due to space, power, and heat requirements. Best mounted in mountainous or forested terrain; can be placed on orbital platforms but crews dislike being on obvious stationary targets. Three batteries are mounted on Reena's moon as planetary defense.",
  "source": "WEG40215 Lords of the Expanse p.41"
 },
 {
  "name": "Power Pitons",
  "type": "MTS-56T Power Piton",
  "category": "Survival Gear",
  "cost": "300",
  "availability": "2",
  "game_notes": "Set of 4 climbing aids (2 hand discs, 2 foot ovals). Two settings: magnetic (for metallic surfaces) and vibro (generates vibrosharp projections for rock, wood, durocrete). Using all 4 pitons with an Easy Dexterity roll adds +2D to climbing rolls. Using only 2 (hand or foot only) grants +1D. Originally designed for mountaineers; popular with fringers for catburgling and emergency escape routes.",
  "source": "WEG40215 Lords of the Expanse p.41"
 }
 ,
 {
  "name": "SIS Surveillance Droid",
  "type": "Taptronics SIS Surveillance Droid",
  "category": "Droids",
  "cost": "5,000",
  "availability": "2",
  "game_notes": "Size: 1m diameter. Move: 20. DEX 3D (dodge 6D), KNO 2D (law enforcement 4D), MEC 1D, PER 2D (search 6D), STR 1D, TEC 1D. Equipped with: repulsorlift unit (50m flight ceiling), holographic/audio recorder, internal comlink. Simple security camera with repulsorlift and basic brain — too simple to reason with or con. Job is to spot criminal activity and notify human officers.",
  "source": "WEG40147 Tapani Sector Instant Adventures p.9 (The Mecetti File)"
 },
 {
  "name": "K4 Security Droid",
  "type": "Rim Securities K4 Security Droid",
  "category": "Droids",
  "cost": "7,200 (new)",
  "availability": "2",
  "game_notes": "Size: 1.6m. Move: 11. DEX 3D (blaster 7D, dodge 8D, running 4D), KNO 1D (law enforcement: Lamuir IV), MEC 1D, PER 1D, STR 1D, TEC 1D. Equipped with: two auto-balance arms, body armor (+2D to Strength to resist damage), internal blaster rifle (5D, range 5-30/100/200). Recently purchased by Lemuir IV Spaceport Security and augmented with law enforcement SkillWare.",
  "source": "WEG40147 Tapani Sector Instant Adventures p.9 (The Mecetti File)"
 },
 {
  "name": "Millaflower Extract",
  "category": "Drugs & Toxins",
  "cost": "15-30 (30 doses)",
  "availability": "3, R",
  "game_notes": "Tranquilizer. Dose 1: Relaxed. Dose 2: Uninhibited. Dose 3: Drunken (-2 all). Dose 4: Unconscious. Dose 5: Paralysis (death in 1hr without care). Dose 6: Heart failure (immediate death without care). Duration: 10hrs minus STR dice.",
  "source": "Secrets of Naboo p.54"
 },
 {
  "name": "Sith Poison",
  "category": "Drugs & Toxins",
  "cost": "Not for sale",
  "availability": "4",
  "game_notes": "Ingested or injected. Very Difficult STR or 2D damage. Feeds anger: Very Difficult willpower/Control when spending Force Points or calling on the Dark Side (gaining DSP). 5 successful resists to purge. Created via Sith Alchemy (Heroic Alter roll).",
  "source": "Dark Side Sourcebook p.65"
 }
// --- END OF EQUIPMENT_DATA ---
];
