import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';

export function renderMap(coordinates) {
  document.getElementById('map').innerHTML = '';

  const map = new Map({
    target: 'map',
    layers: [
      new TileLayer({
        source: new OSM()
      })
    ],
    view: new View({
      center: fromLonLat([coordinates.lng, coordinates.lat]),
      zoom: 16
    })
  });

  return map; // ✅ So it can be reused
}
