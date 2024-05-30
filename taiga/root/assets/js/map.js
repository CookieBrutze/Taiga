// Initialisiere die Karte
var map = L.map('map').setView([60, 100], 4); // Koordinaten und Zoomlevel einstellen

// Füge eine Basiskarte hinzu (z.B. OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Füge Marker für verschiedene Taiga-Regionen hinzu
var taigaRegions = [
    { name: 'Sibirische Taiga', coords: [60, 100], description: 'Die Sibirische Taiga erstreckt sich über weite Teile Russlands.' },
    { name: 'Nordamerikanische Taiga', coords: [60, -100], description: 'Die Nordamerikanische Taiga erstreckt sich über Kanada und Alaska.' },
    // Weitere Regionen hier hinzufügen
];

taigaRegions.forEach(function(region) {
    L.marker(region.coords).addTo(map)
        .bindPopup('<b>' + region.name + '</b><br>' + region.description);
});
