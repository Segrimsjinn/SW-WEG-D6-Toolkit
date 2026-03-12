# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

A single-page Progressive Web App (PWA) — the **Star Wars D6 Toolkit** — for the West End Games Star Wars D6 RPG. It is a pure static web app: no build system, no package manager, no tests. The entire UI, CSS, and JavaScript logic live in `index.html`. All game data lives in separate `data_*.js` files loaded as `<script>` tags.

Deployed to GitHub Pages (see `CNAME`). To publish changes: edit files locally, commit, and push to `main`.

## Architecture

### index.html
The entire app. Contains all CSS (minified, inline `<style>`), all HTML tab panels, and all JavaScript logic (after the `<!-- DATA SCRIPTS -->` block). Tabs: **NPC** (random NPC generator), **GM** (creatures lookup + Notable NPC lookup), **GALAXY** (planet detail + astrogation calculator), **SETTINGS**.

### Data Files → Global Constants

| File | Global | Format | Notes |
|---|---|---|---|
| `data_npc.js` | `NPC_DATA` | Object of arrays | Random NPC generation tables; keys ending in `_blank` are skip-probability weights (0–1) |
| `data_races.js` | `RACES_DATA` | Object keyed by species | Attribute value arrays per stat, used to roll random NPC attributes |
| `data_names.js` | `NAMES_DATA` | — | Name lists for random generation |
| `data_skills.js` | `SKILLS_DATA` | — | Skill definitions |
| `data_powers.js` | `POWERS_DATA` | — | Force power data |
| `data_forcepowers.js` | — | — | Extended Force powers |
| `data_systems.js` | `SYSTEMS_DATA` | **Minified single line** | Sorted alphabetically; fields: `name, grid, region, col, row, quadrant, hours` |
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
  specialAbilities, forcePoints, characterPoints, move, equipment, capsule,
  source   // "WEGxxxxx Book Title p.##"
}
```

## Key Cross-File Relationships

- **Galaxy search → planet detail**: `PLANETS_DATA` entries link to `SYSTEMS_DATA` via `system` field. A system card becomes clickable when `p.name === sLow`, `p.system === sLow`, `sLow.startsWith(p.name + ' -')`, or `p.aliases.includes(sLow)` (see `index.html` line ~3982).
- **Starport locations in data_systems.js**: Added as separate named entries (e.g. `"Port Haven - Starport"`) alongside their parent system so both are searchable on the galaxy map.
- **Notable NPC filtering**: Filtered by `system`, `location`, `affiliations`, `species`, `name`, `role`, `type` — all searched as a joined lowercase string.
- **Creatures**: Linked to planets via the `planet` field (plain string).

## Important Conventions

- `data_systems.js` is **always minified** (single-line JSON). Use `sed` or a bash substitution to edit it — the Read/Edit tools cannot handle its size. Entries must remain **alphabetically sorted by name**.
- All other data files use readable, indented formatting.
- Source citations follow the format `"WEG##### Book Title p.##"`.
- Planet `aliases` array enables alternate-name lookups without duplicating entries.
- When adding a new starport/station, add it to: `data_systems.js` (for galaxy map search), `data_planets.js` (for detail card), `data_npcs_notable.js` (for any named NPCs), and `data_creatures.js` if the location has notable creatures.
