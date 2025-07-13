# Simple map

Demo: [https://eremina-official.github.io/ol-react-map/](https://eremina-official.github.io/ol-react-map/)

This project shows how to add a simple map with location pin to a webpage.

Stack:
- OpenLayers
- React
- TypeScript
- Vite

Install vite with react-ts template, 
Install openlayers, if you do not want to include ol to bundle, can use CDN
Add map with OSM layer and center this on London. Find coords for London as lon,lat
We will need a Map component from the OpenLayers library.
The map component takes parameters: target and view.
Map takes layers as parameter.
Controls for map, what is controls
Set controls, style controls
Add vector layer with pin: Add Feature and Point, find coordinates (lon, lat), conivert coords to map default projection
Update View with coordinates and zoom level
Center map to pin

TODO:
Set page title