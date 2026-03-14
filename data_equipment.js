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
  "category": "Climbing Gear",
  "cost": "150",
  "availability": "2",
  "game_notes": "Micro-suction climbing discs for hands and feet. +2D to climbing skill on smooth surfaces.",
  "source": ""
 },
 {
  "name": "Grappling Gun",
  "category": "Climbing Gear",
  "cost": "200",
  "availability": "2",
  "game_notes": "Fires grappling hook with syntherope. 25m range. Easy missile weapons to fire. +1D climbing with attached rope.",
  "source": ""
 },
 {
  "name": "Syntherope",
  "category": "Climbing Gear",
  "cost": "2/meter",
  "availability": "1",
  "game_notes": "Standard synthetic rope. Supports up to 500kg. Available in lengths up to 200m.",
  "source": ""
 },
 {
  "name": "A3AA Personal Defense Module",
  "category": "Combat Armor",
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
  "category": "Combat Armor",
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
  "name": "Cybot Galactica FL Exploration Droid",
  "category": "Droids",
  "cost": "",
  "availability": "",
  "game_notes": "Scout Companion Droid. Height: 1m. Move: 10. DEX 2D, KNO 1D (survival 4D), MEC 2D (communications 2D, sensors 5D), PER 1D (hide 2D, sneak 2D, search 3D), STR 1D (lifting 2D), TEC 1D (security 2D). Four legs, heavy grasper jaw (designed for holding without crushing), video/hearing/odor sensor arrays on head, movement sensor, communications link to ship computer. Limited verbal communication — narrow range of warning sounds.",
  "source": "WEG40061 Galaxy Guide 8: Scouts"
 },
 {
  "name": "PackTack 41LT-R MULE Droid",
  "category": "Droids",
  "cost": "",
  "availability": "",
  "game_notes": "Mechanical Universal Labor Eliminating Droid. Height: 1.5m. Move: 7 (repulsorlift, max altitude 1m). DEX 1D, KNO 1D, MEC 3D (repulsorlift operation 4D+1), PER 3D (search 3D+2), STR 6D (lifting 7D), TEC 2D (droid programming 4D, droid repair 5D). One heavy lifting claw, one large storage bay (2 cubic meters, +1D armor). Has self-repair feature — uses droid programming and droid repair to assist a scout with combined actions repairs.",
  "source": "WEG40061 Galaxy Guide 8: Scouts"
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
  "category": "Droid Gear",
  "cost": "25",
  "availability": "1",
  "game_notes": "Restricts droid actions and prevents leaving a set area. Droid must make Heroic willpower roll to resist commands while bolted.",
  "source": ""
 },
 {
  "name": "Death Stick",
  "category": "Drugs",
  "cost": "Variable",
  "availability": "2, X",
  "game_notes": "Hallucinogenic narcotic. Initial euphoria, then -1D to all attributes for 1D hours. Highly addictive and degenerative.",
  "source": ""
 },
 {
  "name": "Emotion Suppressant",
  "category": "Drugs",
  "cost": "100",
  "availability": "2",
  "game_notes": "Suppresses emotional responses. +2D to resist intimidation and fear effects. -1D to Perception for 4 hours.",
  "source": ""
 },
 {
  "name": "Glitterstim Spice",
  "category": "Drugs",
  "cost": "Variable",
  "availability": "4, X",
  "game_notes": "Telepathic spice from Kessel. Grants short-term telepathy (Sense equivalent at 2D for 1D minutes). Highly addictive. Moderate willpower to resist addiction per use.",
  "source": ""
 },
 {
  "name": "Myostim Unit",
  "category": "Drugs",
  "cost": "500",
  "availability": "2",
  "game_notes": "Electrical muscle stimulator. +1D STR for 1 hour. After effects: -1D STR for 2 hours.",
  "source": ""
 },
 {
  "name": "Ryll Spice",
  "category": "Drugs",
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
  "name": "Shipsuit",
  "category": "Environmental Suits",
  "cost": "200",
  "availability": "1",
  "game_notes": "Multi-pocketed coverall, fireproof and electrically nonconductive.",
  "source": "Gundark's Fantastic Technology (page 76)"
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
  "name": "Hush-About Jet Pack",
  "category": "Jet Packs",
  "cost": "1,000",
  "availability": "3",
  "game_notes": "Silent jet pack. Move 100m horizontal, 70m vertical. +2D to sneak while using. 10 charges.",
  "source": ""
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
  "name": "Anti-Shock Blanket",
  "category": "Medical",
  "cost": "50",
  "availability": "1",
  "game_notes": "Heated blanket that stabilizes patients. +1D to stamina rolls for shock/exposure.",
  "source": ""
 },
 {
  "name": "Bacta Geltab",
  "category": "Medical",
  "cost": "50",
  "availability": "2",
  "game_notes": "Chewable bacta tablet. Heals Stunned/minor wounds. No skill roll needed.",
  "source": ""
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
  "name": "Medisensor",
  "category": "Medical",
  "cost": "400",
  "availability": "2",
  "game_notes": "Advanced medical sensor. +2D to diagnosis rolls. Detects poisons, diseases, and foreign bodies.",
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
  "name": "Nilar Field Cauterizer",
  "category": "Medical",
  "cost": "150",
  "availability": "2",
  "game_notes": "Seals wounds. +1D first aid to stop bleeding. Cauterized wounds are treated one wound level lower for healing purposes.",
  "source": ""
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
  "name": "Spray Plasto-Cast",
  "category": "Medical",
  "cost": "25",
  "availability": "1",
  "game_notes": "Quick-setting spray cast for broken bones. Keeps limb immobile for proper healing. Reduces healing time by 25%.",
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
  "category": "Medical",
  "cost": "25",
  "availability": "1",
  "game_notes": "Nutritional supplement. Sustains a being for 1 day without food.",
  "source": ""
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
  "name": "Servo-Lifter",
  "category": "Powersuits",
  "cost": "10,000 (7,000 used)",
  "availability": "3",
  "game_notes": "3m tall exo-skeleton. 1D maneuverability, Move 30 (90 km/h), Body 2D. Lifts up to 1.5 metric tons.",
  "source": "Galladinium's Fantastic Technology (page 57)"
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
  "cost": "250",
  "availability": "2",
  "game_notes": "Restraints that deliver stun shock if tampered with. 4D stun per escape attempt. Difficult security to bypass stun feature.",
  "source": ""
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
  "cost": "10,000",
  "availability": "4, X",
  "game_notes": "Detects Force usage within 500m. Moderate sensors roll to detect active Force use. Very Difficult to detect passive Force sensitivity.",
  "source": ""
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
  "name": "Infra-Goggles",
  "category": "Sensors",
  "cost": "500",
  "availability": "2",
  "game_notes": "Infrared vision goggles. See heat signatures in complete darkness up to 100m. +1D to search in darkness.",
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
  "name": "Sensor Jammer",
  "category": "Sensors",
  "cost": "1,000",
  "availability": "2, R",
  "game_notes": "Portable sensor countermeasure. Adds +2D to difficulty of sensor scans detecting the user within 100m radius.",
  "source": ""
 },
 {
  "name": "Snooper Goggles",
  "category": "Sensors",
  "cost": "800",
  "availability": "2",
  "game_notes": "Combined IR/low-light/magnification goggles. +2D to search in low-light/darkness. Effective range 200m.",
  "source": ""
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
  "name": "Baffled Drive",
  "category": "Ship Equipment",
  "cost": "10,000+",
  "availability": "3, R",
  "game_notes": "Modified sublight drive reducing engine signature. +1D to sneak vs sensor detection while in motion.",
  "source": ""
 },
 {
  "name": "Comm Jammer (Ship)",
  "category": "Ship Equipment",
  "cost": "2,000",
  "availability": "2, R",
  "game_notes": "Ship-mounted communications jammer. Blocks comlink transmissions within 50km radius.",
  "source": ""
 },
 {
  "name": "Cotterdam Universal Airlock",
  "category": "Ship Equipment",
  "cost": "500",
  "availability": "1",
  "game_notes": "Inflatable universal docking seal. Connects ships with incompatible docking ports. Seals in 2 rounds.",
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
  "name": "Sensor Baffling",
  "category": "Ship Equipment",
  "cost": "5,000",
  "availability": "3, R",
  "game_notes": "Hull modification reducing sensor profile. +2D to difficulty of detecting ship. Stacks with other countermeasures.",
  "source": ""
 },
 {
  "name": "Sensor Jammer (Ship)",
  "category": "Ship Equipment",
  "cost": "4,000",
  "availability": "2, R",
  "game_notes": "Ship-mounted sensor countermeasure. +2D to difficulty of enemy sensor scans against your ship.",
  "source": ""
 },
 {
  "name": "Sensor Mask",
  "category": "Ship Equipment",
  "cost": "3,000",
  "availability": "3, R",
  "game_notes": "Reduces ship's sensor signature. +1D to difficulty of detecting ship on passive sensors.",
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
  "name": "Armored Vacuum Suit",
  "category": "Spacesuits",
  "cost": "4,000",
  "availability": "2, R",
  "game_notes": "+1D vs physical and energy. 10hr atmosphere. Moderate stamina every hour in space or wound.",
  "source": "Gundark's Fantastic Technology (pages 48-49)"
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
  "name": "Flitter Vacuum Suit",
  "category": "Spacesuits",
  "cost": "1,500",
  "availability": "2",
  "game_notes": "+2 vs physical. Moderate stamina/STR every hour in space unless \"heater burn\" executed.",
  "source": "Platt's Smugglers Guide (page 59)"
 },
 {
  "name": "Heavy Radiation Powersuit",
  "category": "Spacesuits",
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
  "name": "Merr-Sonn Armored Spacesuit",
  "category": "Spacesuits",
  "cost": "10,000",
  "availability": "2, X",
  "game_notes": "+2D energy, +1D physical, -1D DEX. 25hr atmosphere. Includes rocket pack (Space Move 1).",
  "source": "Gundark's Fantastic Technology (page 58)"
 },
 {
  "name": "Nova-Tech Powersuit",
  "category": "Spacesuits",
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
  "name": "Tech Vacuum Suit",
  "category": "Spacesuits",
  "cost": "1,000",
  "availability": "1",
  "game_notes": "Insulated not heated. Moderate stamina/STR every hour in space or suffer wound from cold.",
  "source": "Platt's Smugglers Guide (pages 58-59)"
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
  "category": "Spacesuits",
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
  "category": "Survival",
  "cost": "350",
  "availability": "1",
  "game_notes": "Compact underwater rebreather. Provides 2 hours of breathable air underwater.",
  "source": ""
 },
 {
  "name": "Breath Mask",
  "category": "Survival",
  "cost": "50",
  "availability": "1",
  "game_notes": "Filters toxins from breathable atmospheres. Does not provide oxygen in vacuum. Filter lasts 1 hour, replacements 10cr.",
  "source": ""
 },
 {
  "name": "Glow Rod",
  "category": "Survival",
  "cost": "10",
  "availability": "1",
  "game_notes": "Portable light source. Illuminates 25m radius. 100 hours of continuous use.",
  "source": ""
 },
 {
  "name": "Jedi Utility Belt",
  "category": "Survival",
  "cost": "500",
  "availability": "2",
  "game_notes": "Contains: glow rod, comlink, aquata breather, food capsules (1 week), grappling hook (20m), medical supplies.",
  "source": ""
 },
 {
  "name": "Luma Flare",
  "category": "Survival",
  "cost": "5",
  "availability": "1",
  "game_notes": "Emergency flare visible for 1.5km. Burns for 30 minutes.",
  "source": ""
 },
 {
  "name": "Micro Fusion Reactor",
  "category": "Survival",
  "cost": "1,500",
  "availability": "2",
  "game_notes": "Portable power source. Powers equipment for months. Recharges power packs.",
  "source": ""
 },
 {
  "name": "Pressure Tent",
  "category": "Survival",
  "cost": "500",
  "availability": "2",
  "game_notes": "Pressurized shelter for hostile environments. Maintains breathable atmosphere for 2 beings for 24 hours.",
  "source": ""
 },
 {
  "name": "Ration Concentrates",
  "category": "Survival",
  "cost": "5/week",
  "availability": "1",
  "game_notes": "One week of concentrated food. Provides minimum nutrition. Not exactly gourmet.",
  "source": ""
 },
 {
  "name": "Shelter",
  "category": "Survival",
  "cost": "100",
  "availability": "1",
  "game_notes": "Standard portable shelter for 2 beings. Provides protection from weather. Sets up in 10 minutes.",
  "source": ""
 },
 {
  "name": "Survival Pack",
  "category": "Survival",
  "cost": "500",
  "availability": "1",
  "game_notes": "Standard survival kit: 2 glow rods, comlink, knife, ration concentrates (1 week), water purifier, medpac, thermal cloak, breath mask.",
  "source": ""
 },
 {
  "name": "Water Purifier",
  "category": "Survival",
  "cost": "50",
  "availability": "1",
  "game_notes": "Portable water purification device. Filters contaminants and makes most water drinkable.",
  "source": ""
 },
 {
  "name": "Fusion Cutter",
  "category": "Tools",
  "cost": "150",
  "availability": "1",
  "game_notes": "Plasma cutting tool. 5D damage to materials at touch range. Essential for heavy repair and cutting through bulkheads.",
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
  "name": "Hydrospanner",
  "category": "Tools",
  "cost": "50",
  "availability": "1",
  "game_notes": "Standard multi-purpose mechanical tool. Essential for most repair work.",
  "source": ""
 },
 {
  "name": "Laser Welder",
  "category": "Tools",
  "cost": "100",
  "availability": "1",
  "game_notes": "Precision welding tool. Essential for hull patching and fine metalwork. 3D damage to materials.",
  "source": ""
 },
 {
  "name": "Power Prybar",
  "category": "Tools",
  "cost": "75",
  "availability": "1",
  "game_notes": "Powered leverage tool. +1D to STR for prying/forcing open doors, hatches, and panels.",
  "source": ""
 },
 {
  "name": "Power Scanner",
  "category": "Tools",
  "cost": "250",
  "availability": "1",
  "game_notes": "Diagnostic scanner for power systems and electrical circuits. +1D to repair diagnostics on powered systems.",
  "source": ""
 },
 {
  "name": "Starship Tool Kit",
  "category": "Tools",
  "cost": "250",
  "availability": "1",
  "game_notes": "Complete set of tools for starship repair and maintenance. Required for most starship repair rolls.",
  "source": ""
 },
 {
  "name": "Tech Scanner",
  "category": "Tools",
  "cost": "200",
  "availability": "1",
  "game_notes": "Diagnostic scanner for mechanical systems. +1D to repair skill diagnostic rolls.",
  "source": ""
 }
];
