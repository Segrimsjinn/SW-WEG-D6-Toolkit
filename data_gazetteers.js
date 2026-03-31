// ============================================================
// SECTOR GAZETTEERS — Travel time overrides for astrogation
// ============================================================
// When both origin and destination are in the same gazetteer,
// use the listed time instead of the grid-based calculation.
// When only one endpoint is in a gazetteer, route through
// the appropriate gateway system.
//
// All times in hours at x1 hyperdrive multiplier.
// Sources noted per sector.
// ============================================================

const GAZETTEER_DATA = {

  // ----------------------------------------------------------
  // BRAK SECTOR — WEG40077 Flashpoint! Brak Sector
  // Full matrix, 23 systems, grid O-14 (Expansion Region)
  // ----------------------------------------------------------
  "Brak Sector": {
    source: "WEG40077 Flashpoint! Brak Sector",
    grid: "O-14",
    // Gateway routing: Enet (default), Latoma (from M-14/N-14), Genesia (from N-15)
    gateways: [
      { system: "Enet", fromGrids: null },          // default
      { system: "Latoma", fromGrids: ["M-14","N-14"] },
      { system: "Genesia", fromGrids: ["N-15"] }
    ],
    surcharge: 0,
    systems: ["Aramand","Asran","Bacrana","Cirra","Demar","De'nel","Enet","Genesia","Garia","Intran","Jinet","Latoma","Laud","Lota","Mangez","Maxca","Mila","Orma","Ralme","Rehn","Skone","Tel","Torve"],
    times: {
      "Aramand|Asran":11,"Aramand|Bacrana":10,"Aramand|Cirra":2,"Aramand|Demar":14,"Aramand|De'nel":10,
      "Aramand|Enet":22,"Aramand|Genesia":20,"Aramand|Garia":30,"Aramand|Intran":22,"Aramand|Jinet":19,
      "Aramand|Latoma":34,"Aramand|Laud":25,"Aramand|Lota":1,"Aramand|Mangez":15,"Aramand|Maxca":35,
      "Aramand|Mila":1,"Aramand|Orma":2,"Aramand|Ralme":17,"Aramand|Rehn":18,"Aramand|Skone":15,
      "Aramand|Tel":29,"Aramand|Torve":27,
      "Asran|Bacrana":13,"Asran|Cirra":13,"Asran|Demar":17,"Asran|De'nel":17,"Asran|Enet":33,
      "Asran|Genesia":18,"Asran|Garia":14,"Asran|Intran":18,"Asran|Jinet":19,"Asran|Latoma":34,
      "Asran|Laud":26,"Asran|Lota":12,"Asran|Mangez":15,"Asran|Maxca":39,"Asran|Mila":12,
      "Asran|Orma":13,"Asran|Ralme":25,"Asran|Rehn":21,"Asran|Skone":17,"Asran|Tel":34,"Asran|Torve":36,
      "Bacrana|Cirra":12,"Bacrana|Demar":14,"Bacrana|De'nel":20,"Bacrana|Enet":26,"Bacrana|Genesia":27,
      "Bacrana|Garia":7,"Bacrana|Intran":29,"Bacrana|Jinet":19,"Bacrana|Latoma":30,"Bacrana|Laud":16,
      "Bacrana|Lota":11,"Bacrana|Mangez":6,"Bacrana|Maxca":32,"Bacrana|Mila":11,"Bacrana|Orma":12,
      "Bacrana|Ralme":16,"Bacrana|Rehn":12,"Bacrana|Skone":7,"Bacrana|Tel":31,"Bacrana|Torve":27,
      "Cirra|Demar":16,"Cirra|De'nel":15,"Cirra|Enet":24,"Cirra|Genesia":22,"Cirra|Garia":32,
      "Cirra|Intran":24,"Cirra|Jinet":21,"Cirra|Latoma":36,"Cirra|Laud":27,"Cirra|Lota":3,
      "Cirra|Mangez":17,"Cirra|Maxca":37,"Cirra|Mila":4,"Cirra|Orma":2,"Cirra|Ralme":19,
      "Cirra|Rehn":20,"Cirra|Skone":17,"Cirra|Tel":31,"Cirra|Torve":29,
      "Demar|De'nel":15,"Demar|Enet":30,"Demar|Genesia":27,"Demar|Garia":11,"Demar|Intran":30,
      "Demar|Jinet":31,"Demar|Latoma":20,"Demar|Laud":25,"Demar|Lota":15,"Demar|Mangez":17,
      "Demar|Maxca":22,"Demar|Mila":15,"Demar|Orma":16,"Demar|Ralme":22,"Demar|Rehn":30,
      "Demar|Skone":19,"Demar|Tel":20,"Demar|Torve":25,
      "De'nel|Enet":21,"De'nel|Genesia":32,"De'nel|Garia":22,"De'nel|Intran":22,"De'nel|Jinet":28,
      "De'nel|Latoma":32,"De'nel|Laud":33,"De'nel|Lota":11,"De'nel|Mangez":24,"De'nel|Maxca":34,
      "De'nel|Mila":11,"De'nel|Orma":12,"De'nel|Ralme":23,"De'nel|Rehn":25,"De'nel|Skone":25,
      "De'nel|Tel":25,"De'nel|Torve":26,
      "Enet|Genesia":52,"Enet|Garia":32,"Enet|Intran":35,"Enet|Jinet":29,"Enet|Latoma":50,
      "Enet|Laud":41,"Enet|Lota":23,"Enet|Mangez":31,"Enet|Maxca":45,"Enet|Mila":23,
      "Enet|Orma":24,"Enet|Ralme":21,"Enet|Rehn":31,"Enet|Skone":29,"Enet|Tel":38,"Enet|Torve":20,
      "Genesia|Garia":23,"Genesia|Intran":31,"Genesia|Jinet":33,"Genesia|Latoma":36,"Genesia|Laud":33,
      "Genesia|Lota":21,"Genesia|Mangez":25,"Genesia|Maxca":43,"Genesia|Mila":21,"Genesia|Orma":22,
      "Genesia|Ralme":41,"Genesia|Rehn":33,"Genesia|Skone":29,"Genesia|Tel":41,"Genesia|Torve":51,
      "Garia|Intran":31,"Garia|Jinet":25,"Garia|Latoma":26,"Garia|Laud":13,"Garia|Lota":31,
      "Garia|Mangez":7,"Garia|Maxca":28,"Garia|Mila":31,"Garia|Orma":32,"Garia|Ralme":20,
      "Garia|Rehn":16,"Garia|Skone":10,"Garia|Tel":29,"Garia|Torve":30,
      "Intran|Jinet":27,"Intran|Latoma":49,"Intran|Laud":44,"Intran|Lota":23,"Intran|Mangez":31,
      "Intran|Maxca":51,"Intran|Mila":23,"Intran|Orma":24,"Intran|Ralme":39,"Intran|Rehn":33,
      "Intran|Skone":33,"Intran|Tel":46,"Intran|Torve":47,
      "Jinet|Latoma":50,"Jinet|Laud":32,"Jinet|Lota":20,"Jinet|Mangez":19,"Jinet|Maxca":51,
      "Jinet|Mila":20,"Jinet|Orma":21,"Jinet|Ralme":22,"Jinet|Rehn":13,"Jinet|Skone":17,
      "Jinet|Tel":44,"Jinet|Torve":38,
      "Latoma|Laud":24,"Latoma|Lota":35,"Latoma|Mangez":32,"Latoma|Maxca":10,"Latoma|Mila":35,
      "Latoma|Orma":36,"Latoma|Ralme":38,"Latoma|Rehn":42,"Latoma|Skone":36,"Latoma|Tel":16,
      "Latoma|Torve":32,
      "Laud|Lota":26,"Laud|Mangez":14,"Laud|Maxca":27,"Laud|Mila":26,"Laud|Orma":27,
      "Laud|Ralme":23,"Laud|Rehn":18,"Laud|Skone":16,"Laud|Tel":29,"Laud|Torve":30,
      "Lota|Mangez":16,"Lota|Maxca":36,"Lota|Mila":3,"Lota|Orma":2,"Lota|Ralme":18,
      "Lota|Rehn":19,"Lota|Skone":16,"Lota|Tel":30,"Lota|Torve":28,
      "Mangez|Maxca":33,"Mangez|Mila":16,"Mangez|Orma":17,"Mangez|Ralme":18,"Mangez|Rehn":10,
      "Mangez|Skone":4,"Mangez|Tel":36,"Mangez|Torve":32,
      "Maxca|Mila":36,"Maxca|Orma":37,"Maxca|Ralme":37,"Maxca|Rehn":42,"Maxca|Skone":37,
      "Maxca|Tel":11,"Maxca|Torve":30,
      "Mila|Orma":2,"Mila|Ralme":18,"Mila|Rehn":19,"Mila|Skone":16,"Mila|Tel":30,"Mila|Torve":28,
      "Orma|Ralme":19,"Orma|Rehn":20,"Orma|Skone":17,"Orma|Tel":31,"Orma|Torve":29,
      "Ralme|Rehn":20,"Ralme|Skone":15,"Ralme|Tel":33,"Ralme|Torve":18,
      "Rehn|Skone":6,"Rehn|Tel":43,"Rehn|Torve":34,
      "Skone|Tel":37,"Skone|Torve":31,
      "Tel|Torve":22
    }
  },

  // ----------------------------------------------------------
  // RINGALI SHELL — WEG40029 Far Orbit Project
  // Full matrix, 6 systems, grid L-9 (Core Worlds)
  // ----------------------------------------------------------
  "Ringali Shell": {
    source: "WEG40029 Far Orbit Project",
    grid: "L-9",
    // Gateway routing: Corulag (west/Deep Core), Brentaal (north/center), Raltiir (east)
    gateways: [
      { system: "Raltiir", fromGrids: null },        // default (east)
      { system: "Corulag", fromGrids: ["K-9","K-8","K-10","J-9","J-8","J-10","I-9","I-8","I-10","H-9","H-8","H-10","G-9","G-8","G-10","F-9","F-8","F-10","E-9","E-8","E-10"] },
      { system: "Brentaal", fromGrids: ["L-8","L-7","L-6","K-7","K-6","M-8","M-7"] }
    ],
    surcharge: 0,
    systems: ["Brentaal","Chandrila","Corulag","Esseles","Raltiir","Rhinnal"],
    times: {
      "Brentaal|Chandrila":18,"Brentaal|Corulag":29,"Brentaal|Esseles":16,"Brentaal|Raltiir":74,"Brentaal|Rhinnal":43,
      "Chandrila|Corulag":11,"Chandrila|Esseles":34,"Chandrila|Raltiir":92,"Chandrila|Rhinnal":61,
      "Corulag|Esseles":45,"Corulag|Raltiir":103,"Corulag|Rhinnal":72,
      "Esseles|Raltiir":58,"Esseles|Rhinnal":27,
      "Raltiir|Rhinnal":31
    }
  },

  // ----------------------------------------------------------
  // ELROOD SECTOR — WEG40132 Operation: Elrood
  // Route-based, 16 systems, grid M-20 (Outer Rim)
  // Pre-computed shortest paths via Dijkstra on route graph
  // ----------------------------------------------------------
  "Elrood Sector": {
    source: "WEG40132 Operation: Elrood",
    grid: "M-20",
    gateways: [
      { system: "Coyn", fromGrids: null }            // all traffic
    ],
    surcharge: 0,
    systems: ["Almaran","Berea","Bodrin","Coyn","Dega","Derilyn","Elrood","Halbara","Kidron","Korad","Kuras","Lanthrym","Merisee","Osirrag","Tifnyl","Torina"],
    // Route graph — direct connections only; lookup function computes shortest paths
    routes: {
      "Halbara|Elrood":6,"Elrood|Kidron":3,"Kidron|Bodrin":4,"Bodrin|Coyn":2,
      "Coyn|Korad":1,"Korad|Merisee":1,"Merisee|Torina":3,"Torina|Derilyn":4,
      "Torina|Almaran":3,
      "Tifnyl|Derilyn":5,"Lanthrym|Merisee":3,"Lanthrym|Korad":4,"Lanthrym|Coyn":3,"Lanthrym|Bodrin":5,
      "Berea|Derilyn":4,"Kidron|Dega":5,"Dega|Osirrag":2
    }
  },

  // ----------------------------------------------------------
  // MINOS CLUSTER — WEG40063 Galaxy Guide 6: Tramp Freighters
  // Full matrix, 10 systems, grid M-20 (Outer Rim)
  // 5-day (120h) surcharge to reach Travnin from M-20 grid
  // ----------------------------------------------------------
  "Minos Cluster": {
    source: "WEG40063 Galaxy Guide 6: Tramp Freighters",
    grid: "M-20",
    gateways: [
      { system: "Travnin", fromGrids: null }          // all traffic
    ],
    surcharge: 120,  // 5 days to reach cluster from M-20
    systems: ["Adarlon","Karideph","Mestra","Yelsain","Pergitor","Gesaril","Travnin","Quockra","Eliad","Shesharile"],
    times: {
      "Adarlon|Karideph":65,"Adarlon|Mestra":40,"Adarlon|Yelsain":20,"Adarlon|Pergitor":55,
      "Adarlon|Gesaril":45,"Adarlon|Travnin":15,"Adarlon|Quockra":30,"Adarlon|Eliad":75,"Adarlon|Shesharile":55,
      "Karideph|Mestra":80,"Karideph|Yelsain":105,"Karideph|Pergitor":20,"Karideph|Gesaril":10,
      "Karideph|Travnin":60,"Karideph|Quockra":40,"Karideph|Eliad":70,"Karideph|Shesharile":35,
      "Mestra|Yelsain":40,"Mestra|Pergitor":25,"Mestra|Gesaril":60,"Mestra|Travnin":40,
      "Mestra|Quockra":55,"Mestra|Eliad":15,"Mestra|Shesharile":10,
      "Yelsain|Pergitor":75,"Yelsain|Gesaril":90,"Yelsain|Travnin":15,"Yelsain|Quockra":55,
      "Yelsain|Eliad":35,"Yelsain|Shesharile":65,
      "Pergitor|Gesaril":40,"Pergitor|Travnin":60,"Pergitor|Quockra":85,"Pergitor|Eliad":30,"Pergitor|Shesharile":40,
      "Gesaril|Travnin":70,"Gesaril|Quockra":40,"Gesaril|Eliad":80,"Gesaril|Shesharile":25,
      "Travnin|Quockra":15,"Travnin|Eliad":60,"Travnin|Shesharile":10,
      "Quockra|Eliad":70,"Quockra|Shesharile":35,
      "Eliad|Shesharile":45
    }
  },

  // ----------------------------------------------------------
  // KIRA RUN — WEG40060 Twin Stars of Kira
  // Route-based, 14 systems, spans N-15/N-16/O-15/O-16/M-16
  // ----------------------------------------------------------
  "Kira Run": {
    source: "WEG40060 Twin Stars of Kira",
    grid: null,  // multi-grid corridor
    gateways: [
      { system: "Opiteihr", fromGrids: null },        // default (southwest)
      { system: "Krann", fromGrids: ["O-14","O-15","P-14","P-15"] },  // east
      { system: "Kalinda", fromGrids: ["O-16","O-17","P-16","P-17","N-17"] },  // southeast
      { system: "Lahopa", fromGrids: ["M-15","L-15","L-16","M-17","L-17"] }   // west/inner rim
    ],
    surcharge: 0,
    systems: ["Arrgaw","Brevost","Cerenia","Kalinda","Kira","Krann","Lahopa","Lazerian","Nigel","Opiteihr","Pax","Roldalna","Ropagi","Seltos"],
    // Route graph — direct connections only
    routes: {
      "Krann|Brevost":135,"Brevost|Cerenia":19,"Cerenia|Lazerian":52,"Lazerian|Arrgaw":23,"Arrgaw|Lahopa":77,
      "Lazerian|Kira":2,"Kira|Ropagi":2,
      "Opiteihr|Pax":67,"Pax|Ropagi":59,"Ropagi|Roldalna":39,"Roldalna|Nigel":6,"Nigel|Kalinda":228,
      "Roldalna|Seltos":51
    }
  }

};

// ============================================================
// GAZETTEER LOOKUP FUNCTIONS
// ============================================================

// Look up time between two systems in a gazetteer's times object
function gazetteerLookup(times, a, b) {
  return times[a + '|' + b] || times[b + '|' + a] || null;
}

// For route-based gazetteers, compute shortest path using Dijkstra
function gazetteerRouteDijkstra(routes, systems, from, to) {
  const dist = {}, prev = {};
  systems.forEach(s => dist[s] = Infinity);
  dist[from] = 0;
  const unvisited = new Set(systems);

  while (unvisited.size > 0) {
    let current = null, minDist = Infinity;
    for (const s of unvisited) {
      if (dist[s] < minDist) { minDist = dist[s]; current = s; }
    }
    if (!current || current === to) break;
    unvisited.delete(current);

    // Find neighbors
    for (const key of Object.keys(routes)) {
      const [a, b] = key.split('|');
      let neighbor = null, cost = routes[key];
      if (a === current) neighbor = b;
      else if (b === current) neighbor = a;
      if (neighbor && unvisited.has(neighbor)) {
        const nd = dist[current] + cost;
        if (nd < dist[neighbor]) { dist[neighbor] = nd; prev[neighbor] = current; }
      }
    }
  }

  if (dist[to] === Infinity) return null;

  // Reconstruct path
  const path = [];
  let c = to;
  while (c) { path.unshift(c); c = prev[c]; }
  return { hours: dist[to], path: path };
}

// Find which gazetteer a system belongs to (returns sector name or null)
function findGazetteer(systemName) {
  for (const [name, gaz] of Object.entries(GAZETTEER_DATA)) {
    if (gaz.systems.includes(systemName)) return name;
  }
  return null;
}

// Get travel time between two systems in same gazetteer
function getGazetteerTime(sectorName, from, to) {
  const gaz = GAZETTEER_DATA[sectorName];
  if (!gaz) return null;
  if (gaz.times) return gazetteerLookup(gaz.times, from, to);
  if (gaz.routes) {
    const result = gazetteerRouteDijkstra(gaz.routes, gaz.systems, from, to);
    return result ? result.hours : null;
  }
  return null;
}

// Determine which gateway to use based on the external system's grid
function pickGateway(sectorName, externalGrid) {
  const gaz = GAZETTEER_DATA[sectorName];
  if (!gaz) return null;
  // Check specific grid matches first
  for (const gw of gaz.gateways) {
    if (gw.fromGrids && gw.fromGrids.includes(externalGrid)) return gw.system;
  }
  // Fall back to default (fromGrids: null)
  for (const gw of gaz.gateways) {
    if (!gw.fromGrids) return gw.system;
  }
  return gaz.gateways[0].system;
}
