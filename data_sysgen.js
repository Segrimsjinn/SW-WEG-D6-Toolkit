// System Generation Tables — WEG40061 Galaxy Guide 8: Scouts, Chapter 9
const SYSGEN_DATA = {
  planetType: {
    // Roll 2D
    table: [
      { range: [2,9], value: "Terrestrial" },
      { range: [10,10], value: "Satellite", note: "Normally Gas Giant" },
      { range: [11,11], value: "Asteroid Belt", mods: { population: -2 }, incompatible: { function: ["Agriculture", "Homeworld"] } },
      { range: [12,12], value: "Artificial", mods: { population: -2 } }
    ],
    dice: "2D"
  },
  temperature: {
    // Roll 2D
    table: [
      { range: [2,2], value: "Searing", desc: "60°C+. Almost too hot to support known life." },
      { range: [3,4], value: "Hot", desc: "30–59°C. Uncomfortably hot for Humans." },
      { range: [5,9], value: "Temperate", desc: "-5 to 29°C. Comfortable for Humans." },
      { range: [10,11], value: "Cool", desc: "-6 to -20°C. Fairly cold, often habitable." },
      { range: [12,12], value: "Frigid", desc: "-21°C or lower. Very inhospitable." }
    ],
    dice: "2D"
  },
  terrain: {
    // Roll D6% (two D6, first=tens, second=ones)
    table: [
      { range: [11,11], value: "Barren", mods: { population: -2, atmosphere: 3 }, compatible: { hydrosphere: ["Arid","Dry"] }, incompatible: { hydrosphere: ["Moist","Saturated"] } },
      { range: [12,13], value: "Cave", mods: { atmosphere: 2, population: -2 } },
      { range: [14,14], value: "Crater Field", incompatible: { atmosphere: ["Type IV"] } },
      { range: [15,16], value: "Desert", compatible: { hydrosphere: ["Arid","Dry"] }, incompatible: { hydrosphere: ["Moist","Saturated"] } },
      { range: [21,24], value: "Forest", compatible: { hydrosphere: ["Moderate","Moist"], temperature: ["Hot","Temperate","Cool"] }, incompatible: { hydrosphere: ["Arid"], temperature: ["Frigid","Searing"] } },
      { range: [25,26], value: "Glacier", compatible: { hydrosphere: ["Moist","Saturated"], temperature: ["Cool","Frigid"] }, incompatible: { hydrosphere: ["Arid","Dry"], temperature: ["Searing","Hot","Temperate"] } },
      { range: [31,32], value: "Jungle", compatible: { hydrosphere: ["Moderate","Moist","Saturated"], temperature: ["Searing","Hot","Temperate"] }, incompatible: { hydrosphere: ["Arid","Dry"], temperature: ["Cool","Frigid"] } },
      { range: [33,34], value: "Mountain", incompatible: { hydrosphere: ["Saturated"] } },
      { range: [35,41], value: "Ocean", mods: { population: -1 }, compatible: { hydrosphere: ["Moderate","Moist","Saturated"] }, incompatible: { hydrosphere: ["Arid","Dry"] } },
      { range: [42,44], value: "Plain", compatible: { hydrosphere: ["Dry","Moderate","Moist"], temperature: ["Hot","Temperate","Cool"] }, incompatible: { hydrosphere: ["Arid","Saturated"], temperature: ["Searing","Frigid"] } },
      { range: [45,46], value: "Plateau", incompatible: { hydrosphere: ["Saturated"] } },
      { range: [51,52], value: "Urban", mods: { population: 1 } },
      { range: [53,61], value: "Wetlands", incompatible: { hydrosphere: ["Arid","Dry"], temperature: ["Frigid","Searing"] } },
      { range: [62,63], value: "Volcanic", mods: { population: -2, atmosphere: 3 }, incompatible: { atmosphere: ["Type I"] } },
      { range: [64,66], value: "Special Terrain" }
    ],
    dice: "D6%"
  },
  atmosphere: {
    // Roll 2D
    table: [
      { range: [2,9], value: "Type I", desc: "Breathable" },
      { range: [10,10], value: "Type II", desc: "Breath Mask Suggested" },
      { range: [11,11], value: "Type III", desc: "Breath Mask Required" },
      { range: [12,12], value: "Type IV", desc: "Environment Suit Required" }
    ],
    dice: "2D"
  },
  gravity: {
    // Roll 2D
    table: [
      { range: [2,4], value: "Light", mods: { atmosphere: 2 } },
      { range: [5,11], value: "Standard" },
      { range: [12,12], value: "Heavy", mods: { atmosphere: 2 } }
    ],
    dice: "2D"
  },
  hydrosphere: {
    // Roll 2D
    table: [
      { range: [2,2], value: "Arid", desc: "85–100% land" },
      { range: [3,4], value: "Dry", desc: "50–84% land" },
      { range: [5,9], value: "Moderate", desc: "15–45% land" },
      { range: [10,11], value: "Moist", desc: "5–14% land" },
      { range: [12,12], value: "Saturated", desc: "Less than 5% land" }
    ],
    dice: "2D"
  },
  starport: {
    // Roll 2D (with negative modifiers for isolation)
    table: [
      { range: [-99,2], value: "Landing Field", desc: "Flat area, no control tower, no services." },
      { range: [3,5], value: "Limited Services", desc: "Control tower, possibly refueling/repair." },
      { range: [6,8], value: "Standard Class", desc: "Fully staffed, refueling, resupply, minor repairs." },
      { range: [9,11], value: "Stellar Class", desc: "Docks most ship classes, shipyards for major repairs." },
      { range: [12,99], value: "Imperial Class", desc: "Large, luxurious, complete storage and repair." }
    ],
    dice: "2D",
    regionMods: { civilized: 0, frontier: -1, semiWilderness: -3, wilderness: -6 }
  },
  techLevel: {
    // Roll 2D (with negative modifiers)
    table: [
      { range: [-99,2], value: "Stone", desc: "Primitive tools, tribal cultures, barter economy." },
      { range: [3,3], value: "Feudal", desc: "Metal-working, primitive manufacturing, travel by ship or caravan." },
      { range: [4,4], value: "Industrial", desc: "Mass production, motorized transport, projectile weapons." },
      { range: [5,5], value: "Atomic", desc: "Large-scale production, atomic energy, advanced alloys. Space travel in infancy." },
      { range: [6,7], value: "Information", desc: "Advanced computers, satellites, energy weapons developing. Inter-system travel." },
      { range: [8,99], value: "Space", desc: "Hyperspace technology, droids, blasters, highly efficient industry." }
    ],
    dice: "2D",
    regionMods: { civilized: 0, frontier: -1, semiWilderness: -3, wilderness: -5 }
  },
  population: {
    // Roll 1D for magnitude
    table: [
      { range: [1,1], value: "Hundreds", desc: "1–999" },
      { range: [2,3], value: "Thousands", desc: "In the thousands" },
      { range: [4,5], value: "Millions", desc: "In the millions" },
      { range: [6,6], value: "Billions", desc: "In the billions" }
    ],
    dice: "1D",
    regionMods: { civilized: 0, frontier: -1, semiWilderness: -2, wilderness: -3 }
  },
  planetFunction: {
    // Roll D6%
    table: [
      { range: [11,11], value: "Abandoned Colony" },
      { range: [12,12], value: "Academic", mods: { starport: 1, techLevel: 1 } },
      { range: [13,13], value: "Administrative/Government", mods: { starport: 1, techLevel: 1 } },
      { range: [14,21], value: "Agriculture", incompatible: { planetType: ["Asteroid Belt","Artificial"], terrain: ["Barren"] } },
      { range: [22,22], value: "Colony" },
      { range: [23,23], value: "Disaster", mods: { starport: -3, techLevel: -2, atmosphere: 3 } },
      { range: [24,24], value: "Entertainment" },
      { range: [25,26], value: "Exploration", mods: { starport: -2, techLevel: -2 } },
      { range: [31,31], value: "Hidden Base" },
      { range: [32,33], value: "Homeworld", incompatible: { planetType: ["Asteroid Belt"] } },
      { range: [34,34], value: "Luxury Goods" },
      { range: [35,36], value: "Manufacturing/Processing (Low Tech)" },
      { range: [41,41], value: "Manufacturing/Processing (Mid Tech)", mods: { starport: 2, techLevel: 2 } },
      { range: [42,42], value: "Manufacturing/Processing (High Tech)", mods: { starport: 3, techLevel: 4 } },
      { range: [43,43], value: "Military", mods: { starport: 3, techLevel: 2 } },
      { range: [44,46], value: "Mining", mods: { starport: 2, techLevel: 1 } },
      { range: [51,55], value: "Natural Resources" },
      { range: [56,56], value: "Research" },
      { range: [61,61], value: "Service", mods: { starport: 1, techLevel: 2 } },
      { range: [62,63], value: "Subsistence" },
      { range: [64,66], value: "Trade", mods: { starport: 3, techLevel: 2 } }
    ],
    dice: "D6%"
  },
  government: {
    // Roll D6%
    table: [
      { range: [11,11], value: "Alliance/Federation" },
      { range: [12,12], value: "Anarchy" },
      { range: [13,16], value: "Competing States" },
      { range: [21,22], value: "Corporate Owned", mods: { starport: 3, techLevel: 2 } },
      { range: [23,24], value: "Dictatorship" },
      { range: [25,25], value: "Family" },
      { range: [26,31], value: "Feudalism" },
      { range: [32,32], value: "Guild/Professional Organization" },
      { range: [33,42], value: "Imperial Governor" },
      { range: [43,45], value: "Military" },
      { range: [46,52], value: "Monarchy" },
      { range: [53,53], value: "Organized Crime" },
      { range: [54,54], value: "Rebel Alliance/New Republic" },
      { range: [55,55], value: "Participatory Democracy" },
      { range: [56,56], value: "Representative Democracy" },
      { range: [61,61], value: "Ruler By Selection/Rite" },
      { range: [62,62], value: "Theocracy" },
      { range: [63,66], value: "Tribal" }
    ],
    dice: "D6%"
  },
  starType: {
    normal: [
      { value: "N", color: "Brown", temp: "2,500 or less" },
      { value: "M", color: "Red", temp: "2,500–3,500" },
      { value: "K", color: "Orange", temp: "3,500–5,000" },
      { value: "G", color: "Yellow", temp: "5,000–6,000" },
      { value: "F", color: "Yellow-White", temp: "6,000–7,500" },
      { value: "A", color: "Blue-White / White", temp: "7,500–11,000" },
      { value: "B", color: "Blue", temp: "11,000–28,000" },
      { value: "O", color: "Blue", temp: "28,000–40,000" }
    ],
    abnormal: [
      { value: "Red Giant", color: "Red", desc: "Hydrogen fuel exhausted; star has ballooned to huge size, possibly enveloping inner planets. May be variable. Stable terrestrial planets possible." },
      { value: "Red Dwarf", color: "Red", desc: "Small star with insufficient fuel to grow large. Planets likely small with trace atmospheres but possibly valuable mineral deposits." },
      { value: "Brown Dwarf", color: "Brown", desc: "Insufficient fuel to become a true star. Often companion to another star. Small terrestrial worlds possible." },
      { value: "White Dwarf", color: "White", desc: "Collapsed remains of an exhausted star. Remnant dust clouds make excellent hiding places. May have captured rogue planets." },
      { value: "Neutron Star", color: "Pulsar", desc: "Remains of an exploded star, 10–20 km across. Intense gravity and radiation. Nearby worlds bathed in x-ray and gamma radiation; marine life may survive underwater. Source of unique minerals and crystals." },
      { value: "Black Hole", color: "None", desc: "Pocket of gravity so intense nothing escapes. No system per se, but may affect nearby stars. Scientific stations and trapped ships possible. Navigation hazard." },
      { value: "Nebula", color: "Varies", desc: "Extensive dust cloud, possibly forming a system. Obscures sensors; must be investigated directly. Good hiding place for pirate bases and secret facilities." },
      { value: "Nova", color: "Varies", desc: "Exploding star giving off intense light, gas, and radiation. Area is extremely dangerous. Dead worlds may hold remnant civilizations or artifacts." }
    ]
  }
};
