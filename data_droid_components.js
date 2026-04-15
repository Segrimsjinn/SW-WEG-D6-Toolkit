// ============================================================
// DROID_COMPONENTS
// Curated catalog of modular droid parts and subsystems
// extracted from WEG droid templates across the sourcebook
// library. These complement the Droid Hardware / Droid TraitWare
// entries in data_equipment.js (which are the WEG40116 formal
// component catalog). The entries here cover components that
// appear inside droid template stat blocks but lack their own
// standalone catalog entries.
//
// Fields:
//   name         — catalog display name
//   subcategory  — grouping inside "Droid Components"
//   game_notes   — short functional description
//   source       — sourcebook reference (best guess; most WEG books)
// ============================================================
const DROID_COMPONENTS = [

  // --- Sensors & Perception ---
  { name: "Auditory Sensors (Human Range)", subcategory: "Sensors", game_notes: "Standard hearing pickup matching baseline Human auditory range.", source: "Various WEG droid templates" },
  { name: "Olfactory Sensor", subcategory: "Sensors", game_notes: "Chemical-detection intake for smell-based identification.", source: "Various WEG droid templates" },
  { name: "Motion Sensor", subcategory: "Sensors", game_notes: "Detects movement in the droid's immediate vicinity; adds to Perception against concealed targets.", source: "Various WEG droid templates" },
  { name: "Night Vision Sensors", subcategory: "Sensors", game_notes: "Low-light visual pickup. Negates darkness penalties in night engagements.", source: "Various WEG droid templates" },
  { name: "Infrared Sensors", subcategory: "Sensors", game_notes: "Thermal imaging. Useful for tracking warm-blooded targets through smoke or poor visibility.", source: "Various WEG droid templates" },
  { name: "Radiation Sensors", subcategory: "Sensors", game_notes: "Detects ionizing radiation and electromagnetic pulses at range.", source: "Various WEG droid templates" },
  { name: "Electromagnetic Spectrum Sensors", subcategory: "Sensors", game_notes: "Broad-spectrum EM pickup — covers ultraviolet through long radio wavelengths.", source: "Various WEG droid templates" },
  { name: "Sonic Sensors", subcategory: "Sensors", game_notes: "Ultrasonic / subsonic pickup outside the standard auditory range.", source: "Various WEG droid templates" },
  { name: "Lifeform Sensor", subcategory: "Sensors", game_notes: "Biosignature detector. Identifies living creatures at short range.", source: "Various WEG droid templates" },
  { name: "Seismic Sensor", subcategory: "Sensors", game_notes: "Ground-vibration pickup. Detects footsteps, vehicles, or underground activity.", source: "Various WEG droid templates" },
  { name: "Long-Range Sensor Package", subcategory: "Sensors", game_notes: "Extended-range scanner suite. Typically adds +1D to sensors or search at long range.", source: "Various WEG droid templates" },
  { name: "Extendible Video Sensor", subcategory: "Sensors", game_notes: "Retractable camera arm. Lets a stationary droid peek around corners or over obstacles.", source: "Various WEG droid templates" },

  // --- Communications ---
  { name: "Vocabulator", subcategory: "Communications", game_notes: "Standard droid speech synthesizer. Required for verbal interaction with organics.", source: "Various WEG droid templates" },
  { name: "Broad-Band Antenna", subcategory: "Communications", game_notes: "Omnidirectional receiving antenna covering most civilian comm frequencies.", source: "Various WEG droid templates" },
  { name: "Broad-Band Broadcast Antenna", subcategory: "Communications", game_notes: "Transmits on a wide range of frequencies simultaneously. Useful for relay droids.", source: "Various WEG droid templates" },
  { name: "Integrated Comlink", subcategory: "Communications", game_notes: "Internal comlink built into the chassis. No external handset required.", source: "Various WEG droid templates" },
  { name: "High-Frequency Binary Comlink", subcategory: "Communications", game_notes: "Droid-to-droid data link using binary communication code. Private and nearly undetectable to organics.", source: "Various WEG droid templates" },
  { name: "Imperial Standard Comlink", subcategory: "Communications", game_notes: "Encrypted military-grade comlink keyed to Imperial channels. Illegal for private use in most sectors.", source: "WEG40131 Thrawn Trilogy Sourcebook (common Imperial droid fitment)" },
  { name: "Multinode Communications Link", subcategory: "Communications", game_notes: "Ties multiple droids into a shared communications net. Standard for coordinated units.", source: "Various WEG droid templates" },
  { name: "Starship Computer Link", subcategory: "Communications", game_notes: "Dedicated link to a specific starship's computer. Droid stays in contact while within short range of the ship.", source: "Various WEG droid templates" },

  // --- Cognition / Processing ---
  { name: "AA-1 Verbobrain", subcategory: "Cognition", game_notes: "Industrial Automaton's standard mid-grade droid brain. Used in a huge range of service droids.", source: "Various WEG droid templates" },
  { name: "AA-12X Verbobrain", subcategory: "Cognition", game_notes: "Upgraded Verbobrain with expanded language and analysis capacity. Common in protocol and specialist droids.", source: "Various WEG droid templates" },
  { name: "Intellex III Computer", subcategory: "Cognition", game_notes: "Mid-range primary processor used in utility and labor droids.", source: "Various WEG droid templates" },
  { name: "Intellex VI Computer", subcategory: "Cognition", game_notes: "Higher-tier Intellex processor. Stock astromech brain in many R-series droids.", source: "Various WEG droid templates" },
  { name: "Kraren XI Superprocessor", subcategory: "Cognition", game_notes: "High-end processing unit. Typically installed in tactical, espionage, or medical droids.", source: "Various WEG droid templates" },
  { name: "Analytical Computer", subcategory: "Cognition", game_notes: "Generic analysis subprocessor. Adds to investigation, search, or scholar rolls depending on loadout.", source: "Various WEG droid templates" },
  { name: "Probability Projection Computer", subcategory: "Cognition", game_notes: "Odds-calculation processor. Common in gambling, tactical, and astrogation droids.", source: "Various WEG droid templates" },
  { name: "Medical Diagnostic Computer", subcategory: "Cognition", game_notes: "Dedicated medical analysis subprocessor. Boosts first aid and (A) medicine rolls when linked to medical sensors.", source: "Various WEG droid templates" },
  { name: "Anti-Reprogramming Package", subcategory: "Cognition", game_notes: "Hardware defenses against memory wipe and unauthorized reprogramming. Raises the difficulty to slice the droid.", source: "Various WEG droid templates" },

  // --- Personality Matrix ---
  { name: "Personality Matrix — None", subcategory: "Personality", game_notes: "No developed personality. Purely task-driven; follows orders literally.", source: "Various WEG droid templates" },
  { name: "Personality Matrix — Elementary", subcategory: "Personality", game_notes: "Simple personality baseline. Basic preferences emerge over time but no real adaptive behavior.", source: "Various WEG droid templates" },
  { name: "Personality Matrix — Moderate", subcategory: "Personality", game_notes: "Standard personality baseline for service droids. Recognizably individual with regular memory wipes.", source: "Various WEG droid templates" },
  { name: "Personality Matrix — Advanced", subcategory: "Personality", game_notes: "Complex personality baseline. Strong individual quirks; often becomes demanding without regular wipes.", source: "Various WEG droid templates" },
  { name: "Personality Matrix — Complex", subcategory: "Personality", game_notes: "Top-tier personality baseline. Effectively sapient behavior when allowed to develop without wipes.", source: "Various WEG droid templates" },

  // --- Language / Translation ---
  { name: "TranLang I-A Module", subcategory: "Language", game_notes: "Entry-level translation module. Covers roughly 1,000 common languages.", source: "Various WEG droid templates" },
  { name: "TranLang III Protocol Module", subcategory: "Language", game_notes: "Full protocol-droid translation suite. 6+ million forms of communication.", source: "WEG40131 Thrawn Trilogy Sourcebook (MerenData Espionage Droid)" },

  // --- Locomotion ---
  { name: "Hover Package", subcategory: "Locomotion", game_notes: "Hover-repulsor chassis supplement. Keeps the droid at low altitude (under 1m) over most terrain.", source: "Various WEG droid templates" },
  { name: "Thruster Package", subcategory: "Locomotion", game_notes: "Reaction-thruster set for short-range flight or zero-G maneuvering.", source: "Various WEG droid templates" },

  // --- Manipulation / Arms ---
  { name: "Fine Manipulator Arm", subcategory: "Manipulation", game_notes: "Precision arm for delicate work. Adds to repair or first aid rolls on tiny components.", source: "Various WEG droid templates" },
  { name: "Retractable Heavy Grasping Arm", subcategory: "Manipulation", game_notes: "Stores flush to the chassis; extends for lifting heavy objects. +1D lifting when deployed.", source: "Various WEG droid templates" },
  { name: "Welding Arm", subcategory: "Manipulation", game_notes: "Arc-welding tool. Performs structural repairs and is occasionally improvised as a close-combat weapon (STR+1D damage).", source: "Various WEG droid templates" },
  { name: "Extendable Arm with Buffer", subcategory: "Manipulation", game_notes: "Long-reach arm with polishing buffer. Common on custodial and detail droids.", source: "Various WEG droid templates" },
  { name: "Grasping Claw", subcategory: "Manipulation", game_notes: "Basic two-prong gripper. Handles standard objects; no fine manipulation.", source: "Various WEG droid templates" },
  { name: "Heavy Scooper", subcategory: "Manipulation", game_notes: "Large bucket-style implement for moving loose material. +1D lifting while scooping.", source: "Various WEG droid templates" },

  // --- Weapon Appendages ---
  { name: "Stun Appendage", subcategory: "Weaponry", game_notes: "Built-in stun rod. Typically 6D stun damage at melee range.", source: "Various WEG droid templates" },
  { name: "Stun Bolt Projector", subcategory: "Weaponry", game_notes: "Ranged stun weapon. Shoots stunning ionized pulses. Typical: 5D stun, range 3-7/25/50.", source: "Various WEG droid templates" },
  { name: "Chemical Spray Appendages", subcategory: "Weaponry", game_notes: "Nozzle array for dispensing fire retardant, radiation foam, or adhesive. Non-lethal by default.", source: "WEG40131 Thrawn Trilogy Sourcebook (decontamination droid)" },

  // --- Utility / Iconic ---
  { name: "Restraining Bolt (Factory-Installed)", subcategory: "Utility", game_notes: "Standard obedience device. A matching droid caller enforces commands; bolt can be removed with a Moderate security roll.", source: "Core Rulebook; universal" },
  { name: "Scomp-Link", subcategory: "Utility", game_notes: "Retractable computer interface probe. Standard on astromech droids; enables direct slicing of starship and facility computers.", source: "Core Rulebook; universal" },
  { name: "Power Cell (Standard)", subcategory: "Utility", game_notes: "Baseline rechargeable droid power source. Powers most service droids for weeks between charges.", source: "Various WEG droid templates" },
  { name: "Publictechnic Power Cell", subcategory: "Utility", game_notes: "Heavy-duty rechargeable cell used in industrial droids. Longer duration than standard cells.", source: "Various WEG droid templates" },
  { name: "Holographic Recorder and Projector", subcategory: "Utility", game_notes: "Combined record-and-play holographic system. Captures and displays 3D imagery.", source: "Various WEG droid templates" },
  { name: "Medical SupportLink", subcategory: "Utility", game_notes: "Dedicated data link to hospital or emergency medical computer. +1D to medical skills when interfaced.", source: "Various WEG droid templates (medical droids)" },
  { name: "DataLink", subcategory: "Utility", game_notes: "Generic wired data-transfer port. Accepts standard datapad / datacard / computer cable connections.", source: "Various WEG droid templates" },
  { name: "Espionage Hardwired Module", subcategory: "Utility", game_notes: "Covert surveillance hardware. Survives standard memory wipes — must be physically extracted.", source: "WEG40131 Thrawn Trilogy Sourcebook" },
  { name: "DNA Tracer Module", subcategory: "Utility", game_notes: "Adds +3D to search when tracking a target via residual DNA traces.", source: "WEG40075 Galaxy Guide 11 (Seeker Droid)" },
  { name: "Threat Evaluation Module", subcategory: "Utility", game_notes: "Tactical subprocessor that decides whether to engage, disarm, or request reinforcement.", source: "WEG40075 Galaxy Guide 11 (Seeker Droid)" },
  { name: "IMR Module", subcategory: "Utility", game_notes: "Integrated Maintenance and Repair module. Bundles tools and schematics for weapons/armor servicing.", source: "WEG40073 Galaxy Guide 10 (Armorer Droid)" },
  { name: "System Diagnosis Package", subcategory: "Utility", game_notes: "Self-test and error-reporting suite. +1D to droid repair when diagnosing faults.", source: "Various WEG droid templates" },

  // --- Databases (specialized memory modules) ---
  { name: "Database — Weapons", subcategory: "Database", game_notes: "Detailed specs on most known personal weapons. Adds to (A) weapon engineering and armor/blaster repair.", source: "WEG40073 Galaxy Guide 10 (Armorer Droid)" },
  { name: "Database — Medical", subcategory: "Database", game_notes: "Medical procedures, drug interactions, and species physiology. Adds to first aid and (A) medicine rolls.", source: "Various WEG droid templates" },
  { name: "Database — Cargo Codes", subcategory: "Database", game_notes: "Current cargo classification codes across major shipping networks. Aids streetwise and value skills.", source: "Various WEG droid templates" },
  { name: "Database — Repair", subcategory: "Database", game_notes: "Schematics and repair procedures for common ships, vehicles, and droids. +1D to relevant repair skills.", source: "Various WEG droid templates" },
  { name: "Database — Languages", subcategory: "Database", game_notes: "Bulk language storage (separate from TranLang translation logic). Adds to languages rolls.", source: "Various WEG droid templates" },
  { name: "Database — Gambling", subcategory: "Database", game_notes: "Rules, odds, and procedures for ~100 games of chance. Adds to gambling rolls.", source: "WEG40075 Galaxy Guide 11 (Gambling Droid)" },
  { name: "Database — Galactic Fashion", subcategory: "Database", game_notes: "Regional fashion, etiquette, and social customs. Used by protocol and concierge droids.", source: "Various WEG droid templates" },
  { name: "Database — Food Preparation", subcategory: "Database", game_notes: "Recipes, dietary profiles, and cooking techniques across thousands of cultures.", source: "Various WEG droid templates" },
  { name: "Database — Entomology", subcategory: "Database", game_notes: "Classification of insect and arthropod species. Used by scout and field-research droids.", source: "Various WEG droid templates" },

];

// Expose as a window global for index.html's pcPopulateEquipGrid helper.
if (typeof window !== 'undefined') window.DROID_COMPONENTS = DROID_COMPONENTS;
