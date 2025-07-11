import React, { useEffect } from 'react';
import { Map, View, Feature } from 'ol';
import { Zoom } from 'ol/control';
import TileLayer from 'ol/layer/Tile.js';
import OSM from 'ol/source/OSM.js';
import VectorLayer from 'ol/layer/Vector.js';
import VectorSource from 'ol/source/Vector.js';
import { Point } from 'ol/geom';
import { fromLonLat } from 'ol/proj.js';
import { Style, Icon } from 'ol/style.js';
import reactSvg from './assets/pin.svg?url'; // Import the SVG as a URL
import type { Coordinate } from 'ol/coordinate';

const MAP = 'map' as const;

const coordinates: Coordinate = fromLonLat([-0.118092, 51.509865]);
const feature: Feature<Point> = new Feature({
  geometry: new Point(coordinates),
});

const vectorLayer = new VectorLayer({
  source: new VectorSource({
    features: [feature],
  }),
  style: new Style({
    image: new Icon({
      src: reactSvg,
      anchor: [0.5, 1], // Adjust the anchor point to center the icon
    }),
  }),
});

const OSMLayer = new TileLayer({
  source: new OSM(),
});

const MapElement: React.FC = () => {
  useEffect(() => {
    // Initialize the map when the component mounts
    const map = new Map({
      target: MAP,
      view: new View({
        center: coordinates,
        zoom: 12,
      }),
      layers: [OSMLayer, vectorLayer],
      controls: [new Zoom()],
    });

    return () => {
      // Cleanup the map when the component unmounts
      map.setTarget(undefined);
    };
  }, []);

  return (
    <div className="mapContainer">
      <div id={MAP}></div>
      <div className="attribution">
        © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors
      </div>
    </div>
  );
};

export default MapElement;
