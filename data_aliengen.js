// Alien Generation tables — WEG40166 Alien Encounters Ch.1 (pp.4-17)
// Used by generateRandomAlien() in index.html

const ALIENGEN_DATA = {

  // 2D table — primary terrain
  environment: [
    { range: [2, 2], value: "Barren", desc: "Arid, hostile environment with intolerable atmosphere; aliens may need breath masks in standard environments." },
    { range: [3, 3], value: "Desert", desc: "Lack of plant cover; hardy lifeforms accustomed to extreme heat or cold and little water." },
    { range: [4, 4], value: "Forest", desc: "Temperate woodland; large trees dominate, herbivores subsist on them, large carnivores keep them in check." },
    { range: [5, 5], value: "Glacier", desc: "Frozen sheets of ice, polar regions or ice ages; lifeforms hardy and cold-adapted." },
    { range: [6, 6], value: "Jungle", desc: "Tropical rain forest; layered canopy ecosystems with little contact between strata." },
    { range: [7, 7], value: "Mountain", desc: "Geologically active highlands; lifeforms hardy, sure-footed, accustomed to thin air." },
    { range: [8, 8], value: "Ocean", desc: "Marine or surface-dwelling species; coastal tides on tidally-influenced worlds often produce amphibians." },
    { range: [9, 9], value: "Plains", desc: "Grasslands with sparse trees; speed-oriented herbivores and carnivores travel great distances." },
    { range: [10, 10], value: "Wetlands", desc: "Ponds, marshes, swamps; vast array of lifeforms in warm or cool climates." },
    { range: [11, 11], value: "Mixed", desc: "A combination of two terrain types — re-roll twice and combine." },
    { range: [12, 12], value: "Exotic", desc: "Unusual conditions: volcano caves, gas giant strata, magnesium forests, etc." }
  ],

  // 2D table — biological origin
  origin: [
    { range: [2, 2], value: "Plant", desc: "Photosynthetic; usually immobile, passive defenses; difficult to communicate with." },
    { range: [3, 3], value: "Soft Invertebrate", desc: "Worm/slug/octopoid descent; flexible, sometimes shape-changing; muscular locomotion." },
    { range: [4, 5], value: "Insect", desc: "Arthropod with segmented body; exoskeleton, jointed legs, possibly wings; any diet." },
    { range: [6, 7], value: "Reptile", desc: "Cold-blooded vertebrate; scaled or plated; egg-laying, mostly land-dwelling." },
    { range: [8, 9], value: "Mammal", desc: "Warm-blooded vertebrate; nurses young; covered in hair or fur. Most common Star Wars sentient." },
    { range: [10, 10], value: "Hard Invertebrate", desc: "Crustacean or chitinous flier; jointed legs, no internal skeleton; usually carnivorous." },
    { range: [11, 11], value: "Aquatic", desc: "Marine descent — amphibian, mammalian, reptilian, or fish-like; may breathe air, water, or both." },
    { range: [12, 12], value: "Avian", desc: "Warm-blooded, feathered, winged; may still fly or have become ground-dwelling." }
  ],

  // 1D table — ecological niche
  niche: [
    { range: [1, 1], value: "Herbivore", desc: "Plant-eater; skittish, herd-oriented, defensive adaptations (speed, armor, camouflage)." },
    { range: [2, 3], value: "Carnivore", desc: "Meat-eater; cunning, aggressive, may have natural weapons (claws, fangs, venom)." },
    { range: [4, 5], value: "Omnivore", desc: "Eats both plants and animals; competitive, curious, adaptive." },
    { range: [6, 6], value: "Scavenger", desc: "Feeds on remains; not the dominant predator, but often well-defended." }
  ],

  // 2D table — technological level
  techLevel: [
    { range: [2, 5], value: "Stone", desc: "Small social groups, simple tools, primitive agriculture, foot travel, oral storytelling." },
    { range: [6, 8], value: "Feudal", desc: "Regional contact, specialized craftsmen, herding/farming, animal/wind/water power, written language." },
    { range: [9, 9], value: "Industrial", desc: "Mass production, motorized transport, electricity from burning fuels, telegraphs and printed text." },
    { range: [10, 10], value: "Atomic", desc: "Advanced alloys and plastics, early space travel, growing transportation/communications/medicine." },
    { range: [11, 11], value: "Information", desc: "Global community, automation, atomic and solar power, in-system spaceflight, early droids and energy weapons." },
    { range: [12, 12], value: "Space", desc: "Hyperdrives, droids, energy weapons, extra-system colonies — Republic/Empire baseline." }
  ],

  // 2D table — total attribute dice
  attributeDice: [
    { range: [2, 2], value: "8D" },
    { range: [3, 3], value: "9D" },
    { range: [4, 4], value: "10D" },
    { range: [5, 6], value: "11D" },
    { range: [7, 9], value: "12D" },
    { range: [10, 11], value: "13D" },
    { range: [12, 12], value: "14D" }
  ],

  // 3D table — per-attribute die range (min/max)
  attributeRange: [
    { range: [3, 3], value: "1D/2D" },
    { range: [4, 4], value: "1D/2D+1" },
    { range: [5, 5], value: "1D/2D+2" },
    { range: [6, 7], value: "1D+1/3D" },
    { range: [8, 8], value: "1D+1/3D+1" },
    { range: [9, 9], value: "1D+2/3D+1" },
    { range: [10, 11], value: "1D+2/3D+2" },
    { range: [12, 14], value: "2D/4D" },
    { range: [15, 15], value: "2D+1/4D+1" },
    { range: [16, 16], value: "2D+2/4D+2" },
    { range: [17, 17], value: "3D/5D" },
    { range: [18, 18], value: "4D/6D" }
  ],

  // 2D table — natural weapon type
  naturalWeapon: [
    { range: [2, 2], value: "Claws", desc: "STR+1D damage" },
    { range: [3, 3], value: "Tail", desc: "STR+1D damage" },
    { range: [4, 4], value: "Fangs", desc: "STR+1D damage" },
    { range: [5, 5], value: "Tusks", desc: "STR+1D damage" },
    { range: [6, 6], value: "Beak", desc: "STR+1D damage" },
    { range: [7, 7], value: "Powerful Kick", desc: "STR+1D damage" },
    { range: [8, 8], value: "Talons", desc: "STR+1D damage" },
    { range: [9, 9], value: "Pincers", desc: "STR+1D damage" },
    { range: [10, 10], value: "Trampling", desc: "STR+1D damage" },
    { range: [11, 11], value: "Body Spikes", desc: "STR+1D damage" },
    { range: [12, 12], value: "Venom", desc: "STR+1D stun damage only" }
  ],

  // 2D table — natural weapon damage override
  naturalWeaponDamage: [
    { range: [2, 3], value: "STR damage" },
    { range: [4, 5], value: "STR+1 damage" },
    { range: [6, 7], value: "STR+2 damage" },
    { range: [8, 9], value: "STR+1D damage" },
    { range: [10, 10], value: "STR+1D+2 damage" },
    { range: [11, 11], value: "STR+2D damage" },
    { range: [12, 12], value: "STR+3D damage" }
  ],

  // 1D table — natural armor
  naturalArmor: [
    { range: [1, 2], value: "Natural Body Armor", desc: "Thick hide provides +1D against physical attacks. No bonus against energy attacks." },
    { range: [3, 4], value: "Natural Body Armor", desc: "Thick hide provides +1D against both physical and energy attacks." },
    { range: [5, 6], value: "Natural Body Armor", desc: "Thick hide provides +2D against physical and +1D against energy attacks." }
  ],

  // 3D table — skill bonus
  skillBonus: [
    { range: [3, 3], value: "Climbing Claws", desc: "+2D to climbing skill while using the claws (climbing only)." },
    { range: [4, 4], value: "Jumping", desc: "+2D bonus to jumping skill from strong legs." },
    { range: [5, 5], value: "Natural Camouflage", desc: "+2D to sneak in native terrain only." },
    { range: [6, 6], value: "Prehensile Tail", desc: "Use as extra limb at +1D+1 to Dexterity." },
    { range: [7, 7], value: "Special Balance", desc: "+2D to climbing, jumping, acrobatics, or other balance actions." },
    { range: [8, 8], value: "Stamina", desc: "+2D bonus when rolling stamina and willpower skills." },
    { range: [9, 9], value: "Stealth", desc: "+2D when using hide or sneak skills." },
    { range: [10, 10], value: "Swimming", desc: "+1D to dodge and +3 to Move underwater." },
    { range: [11, 11], value: "Agriculture", desc: "+2D bonus to agriculture (Knowledge) rolls." },
    { range: [12, 12], value: "Intimidation", desc: "+1D to intimidation due to fearsome appearance." },
    { range: [13, 13], value: "Teaching Ability", desc: "Advance scholar specializations at half the normal Character Point cost." },
    { range: [14, 14], value: "Wilderness Survival", desc: "+1D to survival rolls in mountains or plains." },
    { range: [15, 16], value: "Enhanced Vision", desc: "+2D to search rolls based on visual acuity." },
    { range: [17, 17], value: "Acute Senses", desc: "+1D to search skill from keen eyesight and hearing." },
    { range: [18, 18], value: "Sense Vibrations", desc: "Senses ground-contact movements up to 60 m away (Very Easy Perception roll)." }
  ],

  // 2D table — constant abilities
  constantAbility: [
    { range: [2, 3], value: "Aquatic", desc: "Breathes both air and water; withstands extreme ocean pressures." },
    { range: [4, 5], value: "Flight", desc: "Capable of full powered flight." },
    { range: [6, 7], value: "Gliding", desc: "Glides 15 m/round in standard gravity, 30 m in light, 5 m in heavy." },
    { range: [8, 9], value: "Infrared Vision", desc: "Sees in infrared spectrum — sees in complete darkness if heat sources are present." },
    { range: [10, 11], value: "Night Vision", desc: "Sees in darkness with no penalty." },
    { range: [12, 12], value: "High-Temperature Tolerance", desc: "No ill effects from hot, arid climates up to 85°C." }
  ],

  // 2D table — beginning character abilities
  beginningAbility: [
    { range: [2, 2], value: "Affinity for Business", desc: "At creation, 2D for every 1D allocated to bureaucracy, business, bargain, or value." },
    { range: [3, 3], value: "Aquatic Survival", desc: "At creation, 2D for every 1D allocated to swimming and survival: aquatic." },
    { range: [4, 4], value: "Climbing", desc: "At creation, 2D for every 1D allocated to climbing/jumping." },
    { range: [5, 5], value: "Combat Finesse", desc: "At creation, 2D for every 1D allocated to melee weapons, brawling, and thrown weapons." },
    { range: [6, 6], value: "Cultural Learning", desc: "At creation, 2D for every 1D allocated to cultures, languages, or value." },
    { range: [7, 7], value: "Dexterous", desc: "At creation, +2D bonus skill dice to add to Dexterity skills." },
    { range: [8, 9], value: "Farming", desc: "At creation, +2D bonus skill dice for agriculture, business, ecology, value, weather prediction, bargain, persuasion, first aid." },
    { range: [10, 10], value: "Mechanical Aptitude", desc: "At creation, 2D for every 1D allocated to any Mechanical skills." },
    { range: [11, 11], value: "Stealthy", desc: "At creation, 2D for every 1D allocated to hide, search, and sneak." },
    { range: [12, 12], value: "Technical Aptitude", desc: "At creation, 2D for every 1D allocated to any Technical skills." }
  ],

  // 2D table — penalties
  penalty: [
    { range: [2, 3], value: "Delicate Build", desc: "Fragile bone structure: -2 modifier to all Strength rolls to resist damage." },
    { range: [4, 5], value: "Breath Masks", desc: "Requires breath mask in standard atmospheres; -1D to all skills and attributes without one." },
    { range: [6, 7], value: "Technological Ignorance", desc: "-1D penalty when using anything more advanced than stone-age tools until acclimated." },
    { range: [8, 9], value: "Light Gravity", desc: "On standard gravity worlds: -3 Move, -1D Strength and Dexterity (min +2) without power harness." },
    { range: [10, 11], value: "Poor Vision", desc: "-1D penalty for vision-based actions at greater than 50 m range." },
    { range: [12, 12], value: "Voice Box", desc: "Cannot pronounce Basic, but can understand it perfectly well." }
  ],

  // 1D table — story factors
  storyFactor: [
    { range: [1, 1], value: "Aggressive", desc: "Members of this species are very aggressive and respect only power." },
    { range: [2, 2], value: "Blood Feud", desc: "Declared a blood feud with another species; morally obligated to seek their death on sight." },
    { range: [3, 3], value: "Enslaved", desc: "Species enslaved en masse by the Empire; restricted to labor camps, travelers in danger of capture." },
    { range: [4, 4], value: "Religious Observances", desc: "Forbidden to eat in the company of aliens or sleep in the same room." },
    { range: [5, 5], value: "Pacifist", desc: "Culture is traditionally against violence; individual flouters are cast out of society." },
    { range: [6, 6], value: "Wealth", desc: "Very wealthy species; most members have a high standard of living." }
  ],

  // 3D table — Move and size
  moveSize: [
    { range: [3, 3], move: "4/5", height: "0.8 m" },
    { range: [4, 4], move: "5/6", height: "0.9 m" },
    { range: [5, 5], move: "7/9", height: "1.0 m" },
    { range: [6, 6], move: "8/10", height: "1.2 m" },
    { range: [7, 7], move: "9/11", height: "1.4 m" },
    { range: [8, 9], move: "10/12", height: "1.6 m" },
    { range: [10, 11], move: "10/13", height: "1.8 m" },
    { range: [12, 12], move: "11/14", height: "2.0 m" },
    { range: [13, 13], move: "11/14", height: "2.2 m" },
    { range: [14, 14], move: "11/14", height: "2.4 m" },
    { range: [15, 15], move: "12/15", height: "2.6 m" },
    { range: [16, 16], move: "12/16", height: "2.8 m" },
    { range: [17, 17], move: "13/17", height: "3.0 m" },
    { range: [18, 18], move: "14/18", height: "3.2 m" }
  ]

};
