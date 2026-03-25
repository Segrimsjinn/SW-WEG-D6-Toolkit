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
  locations, // key locations — each location as "Name (description)." separated by a space; the renderer splits on "). " to create paragraph breaks
  ofNote     // GM-facing notes — use " | " (pipe with spaces) to separate sections; the renderer converts pipes to paragraph breaks. Prefix era-specific notes with the year: "10 ABY (Source): text" or "4000 BBY (Era): text"
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
- **Sub-locations in data_systems.js**: Cities and districts get their own entries using hierarchical dash notation: `"Planet - City"`. Examples: `"Tatooine - Mos Eisley"`, `"Bespin - Cloud City"`, `"Tatooine - Wayfar"`. Individual buildings, shops, and points of interest within a city do **NOT** get separate system entries — instead, describe them in the `locations` and `ofNote` fields of the city's `data_planets.js` entry (e.g., Docking Bay 94, Mos Eisley Cantina, and Carbon-Freeze Chamber are all described in their parent city's planet entry, not as `"Planet - City - Location"` entries in `data_systems.js`). The planet entry `name` should match the system entry format (e.g., `"Tatooine - Mos Eisley"`, not just `"Mos Eisley"`).
- **Notable NPC filtering**: Filtered by `system`, `location`, `affiliations`, `species`, `name`, `role`, `type` — all searched as a joined lowercase string.
- **Planet detail → Notable NPC cross-link**: `linkifyNpcNames(text, system)` in `index.html` scans `NOTABLE_NPCS` base names against `p.locations` and `p.ofNote` text at render time. Any match becomes a cyan clickable span that calls `lookupNotableNpcsBySystem(system)` — switching to the NPC tab and setting the system filter to the planet's `system` field, showing all NPCs in that system. **The planet's `system` field must exactly match the NPC's `system` field for the filter to return results.**
- **Creatures**: Linked to planets via the `planet` field (plain string).

## Important Conventions

- `data_systems.js` is multi-line (one entry per line). Entries must remain **alphabetically sorted by name**. The file is large (~6,800 lines) but the Edit tool can handle it for targeted changes.
- **All other data files are NOT alphabetically sorted** — entries are grouped by sourcebook order. New entries should be **appended to the end** of the array (or after the last entry of the same category for `data_weapons.js`, `data_equipment.js`, `data_vehicles.js`). Do not try to insert alphabetically.
- **Context-efficient editing for large files**: Data files are large (`data_starships.js` ~34K lines, `data_npcs_notable.js` ~21K lines). To conserve context window: use `tail` to check the last few lines of a file before appending, use `Grep` to find specific entries by name rather than reading large sections, and use `Read` with tight `offset`/`limit` only when editing existing entries. Avoid reading more than ~20 lines at a time from these files.
- All other data files use readable, indented formatting.
- Source citations follow the format `"WEG##### Book Title p.##"`.
- **Planet `locations` formatting**: Each location entry follows the pattern `"Name (description)."` — the renderer automatically splits on `"). "` to create separate paragraphs for each location on the detail card.
- **Planet `ofNote` formatting**: Use ` | ` (pipe with spaces) to separate sections. The renderer converts pipes to `<br><br>` paragraph breaks. Prefix era-specific notes with the year and source era in parentheses: `"10 ABY (Dark Empire): text | 14 ABY STATUS: text"`. When a planet has data from multiple eras, each era gets its own pipe-separated section with the year prefix so GMs can quickly identify what applies to their campaign timeline.
- Planet `aliases` array enables alternate-name lookups without duplicating entries.
- When adding a new starport/station/city, add it to: `data_systems.js` (for galaxy map search, using `"Planet - City"` naming — no sub-location entries), `data_planets.js` (for detail card, with all buildings/points of interest in `locations`/`ofNote` fields), `data_npcs_notable.js` (for any named NPCs), and `data_creatures.js` if the location has notable creatures.
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
  - **Known secondary tags in use** (append to primary, never replace it):
    - Imperial branches: `"Stormtrooper Corps"`, `"Imperial Navy"`, `"Imperial Army"`, `"Imperial Customs"`, `"ISB Agents"`, `"COMPNOR"`
    - Rebel/NR units: `"Rogue Squadron"`
    - Organizations: `"Jedi Praxeum"`, `"Maw Installation"`
    - Fringe/Criminal groups: `"Bothan Spynet"`, `"Bounty Hunters' Guild"`, `"Black Sun"`, `"Jabba's Organization"`, `"Void Demons"`, `"Omze's Incredible Traveling Starport"`
    - When adding a new secondary tag, add it to this list so future sessions can find it.
- **Droids — stock vs. NPC**: Stock/template droids (generic models with a cost, meant to be purchased) go in `data_equipment.js` under the `"Droids"` category, with stats condensed into the `game_notes` field (e.g. `"Height: 1.5m. Move: 6. DEX 2D, KNO 2D, ..."`). Named/unique NPC droids (IG-88, 4-LOM, GSAD-43, etc.) go in `data_npcs_notable.js` with full stat blocks like any other NPC.
- **Auto-push UI/layout changes**: When making format or layout changes to the website (card layouts, column arrangements, styling in `index.html`), commit and push immediately without asking.
