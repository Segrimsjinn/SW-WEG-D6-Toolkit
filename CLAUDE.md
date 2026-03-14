# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

A single-page Progressive Web App (PWA) — the **Star Wars D6 Toolkit** — for the West End Games Star Wars D6 RPG. It is a pure static web app: no build system, no package manager, no tests. The entire UI, CSS, and JavaScript logic live in `index.html`. All game data lives in separate `data_*.js` files loaded as `<script>` tags.

Deployed to GitHub Pages (see `CNAME`). To publish changes: edit files locally, commit, and push to `main`.

## Architecture

### index.html
The entire app. Contains all CSS (minified, inline `<style>`), all HTML tab panels, and all JavaScript logic (after the `<!-- DATA SCRIPTS -->` block). Tabs: **NPC** (random NPC generator + Notable NPC lookup), **TRAVEL** (astrogation calculator + quick reference), **GALAXY** (planet detail + galaxy map), **SHIPS** (starship/vehicle/equipment lookup), **DICE** (creatures lookup + dice roller + combat tracker), **SETTINGS** (calibration + how-to guide + about).

### Data Files → Global Constants

| File | Global | Format | Notes |
|---|---|---|---|
| `data_npc.js` | `NPC_DATA` | Object of arrays | Random NPC generation tables; keys ending in `_blank` are skip-probability weights (0–1) |
| `data_races.js` | `RACES_DATA` | Object keyed by species | Attribute value arrays per stat, used to roll random NPC attributes |
| `data_names.js` | `NAMES_DATA` | — | Name lists for random generation |
| `data_skills.js` | `SKILLS_DATA` | — | Skill definitions |
| `data_powers.js` | `POWERS_DATA` | — | Force power data |
| `data_forcepowers.js` | — | — | Extended Force powers |
| `data_systems.js` | `SYSTEMS_DATA` | Multi-line, one entry per line | Sorted alphabetically; fields: `name, grid, region, col, row, quadrant, hours` |
| `data_grid.js` | — | — | Galaxy grid reference |
| `data_images.js` | — | — | Image references |
| `data_planets.js` | `PLANETS_DATA` | Array of objects | Rich planet/location entries (see below) |
| `data_npcs_notable.js` | `NOTABLE_NPCS` | Array of objects | Full stat blocks for sourcebook NPCs |
| `data_creatures.js` | `CREATURES_DATA` | Array of objects | Fields: `name, type, planet, habitat, dex, per, str, move, size, orneriness, special, source` |
| `data_armor.js` | — | — | Armor entries |
| `data_starships.js` | — | — | Starship entries |
| `data_equipment.js` | — | — | Equipment entries |
| `data_weapons.js` | — | — | Weapon entries |
| `data_vehicles.js` | — | — | Vehicle entries |
| `data_sysgen.js` | `SYSGEN_DATA` | Object of table arrays | GG8 random system generation tables (planet type, terrain, atmosphere, etc.) |

### PLANETS_DATA Entry Shape
```js
{
  name, system, star, grid, region, type, temperature, atmosphere,
  hydrosphere, gravity, terrain, lengthOfDay, lengthOfYear,
  sapientSpecies, starport, population, function, government,
  techLevel, majorExports, majorImports,
  aliases: ["alternate name", ...],  // optional — triggers lookup match
  source,    // "WEGxxxxx Book Title p.##"
  summary,   // paragraph narrative
  locations, // key locations as a single descriptive string
  ofNote     // GM-facing notes, docking fees, hazards, notable NPCs callout
}
```

### NOTABLE_NPCS Entry Shape
```js
{
  name, species, system, location,   // location = "Place — Sublocation"
  affiliations: [...],
  role, type,
  stats: {
    DEXTERITY: { base: "XD", skills: { "skill name": "XD", ... } },
    // KNOWLEDGE, MECHANICAL, PERCEPTION, STRENGTH, TECHNICAL same shape
  },
  specialAbilities, forcePoints, darkSidePoints, characterPoints, move, equipment, capsule,
  // darkSidePoints — optional, Dark Side characters only; rendered in red between Force Points and Character Points
  source   // "WEGxxxxx Book Title p.##"
}
```

## Key Cross-File Relationships

- **Galaxy search → planet detail**: `PLANETS_DATA` entries link to `SYSTEMS_DATA` via `system` field. A system card becomes clickable when `p.name === sLow`, `p.system === sLow`, `sLow.startsWith(p.name + ' -')`, or `p.aliases.includes(sLow)` (see `index.html` line ~3982).
- **Sub-locations in data_systems.js**: Cities, districts, and points of interest are added as separate entries using hierarchical dash notation: `"Planet - City"`, `"Planet - City - Location"`. Examples: `"Tatooine - Mos Eisley"`, `"Tatooine - Mos Eisley - Docking Bay 94"`, `"Bespin - Cloud City - Upper Plaza"`, `"Tatooine - Wayfar"`. These entries are sorted alphabetically and grouped under their parent planet (not scattered by their sub-name). The planet detail cross-link uses longest-name matching so `"Bespin - Cloud City - Upper Plaza"` links to the Cloud City planet entry, not Bespin.
- **Notable NPC filtering**: Filtered by `system`, `location`, `affiliations`, `species`, `name`, `role`, `type` — all searched as a joined lowercase string.
- **Planet detail → Notable NPC cross-link**: `linkifyNpcNames(text, system)` in `index.html` scans `NOTABLE_NPCS` base names against `p.locations` and `p.ofNote` text at render time. Any match becomes a cyan clickable span that calls `lookupNotableNpcsBySystem(system)` — switching to the NPC tab and setting the system filter to the planet's `system` field, showing all NPCs in that system. **The planet's `system` field must exactly match the NPC's `system` field for the filter to return results.**
- **Creatures**: Linked to planets via the `planet` field (plain string).

## Important Conventions

- `data_systems.js` is multi-line (one entry per line). Entries must remain **alphabetically sorted by name**. The file is large (~6,800 lines) but the Edit tool can handle it for targeted changes.
- All other data files use readable, indented formatting.
- Source citations follow the format `"WEG##### Book Title p.##"`.
- Planet `aliases` array enables alternate-name lookups without duplicating entries.
- When adding a new starport/station/city, add it to: `data_systems.js` (for galaxy map search, using `"Planet - City"` or `"Planet - City - Location"` naming), `data_planets.js` (for detail card), `data_npcs_notable.js` (for any named NPCs), and `data_creatures.js` if the location has notable creatures.
- **Multi-era NPCs**: Characters who appear across multiple sourcebooks with improved stats get one entry per era. Use BBY/ABY in the `name` field: `"Luke Skywalker (0 BBY)"`, `"Luke Skywalker (3 ABY)"`, etc. Searching by first name returns all versions. The `source` field confirms which book each stat block came from.
- **NPC Affiliations — 7 canonical primary values** (always the first element in the array):
  - `"Galactic Empire"` — all Imperial branches and agents (use secondary tag for branch: `"Stormtrooper Corps"`, `"Imperial Navy"`, `"Imperial Army"`, `"Imperial Customs"`, etc.)
  - `"Rebel Alliance"` — Rebellion era fighters, operatives, supporters
  - `"New Republic"` — post-Endor Republic characters
  - `"Old Republic"` — prequel/clone wars era (senators, Jedi, clone troopers); replaces "Galactic Republic" and "Grand Army of the Republic" as primary
  - `"The Fringe"` — above-board independents: traders, pilots, smugglers, mercenaries, bounty hunters
  - `"Criminal Underworld"` — crime lords, pirates, assassins, gangs, hired killers
  - `"Neutral"` — civilians, academics, journalists, truly neutral parties
  - Specific faction/org tags (e.g. `"Void Demons"`, `"Omze's Incredible Traveling Starport"`) may be kept as a **second** array element for search value. Location-only tags belong in the `location` field, not `affiliations`.
- **Auto-push UI/layout changes**: When making format or layout changes to the website (card layouts, column arrangements, styling in `index.html`), commit and push immediately without asking.
