const image = new ol.style.Circle({
  radius: 4,
  fill: new ol.style.Fill({ color: '#000000'}),
  stroke: new ol.style.Stroke({ color: '#000000', width: 1 }),
});

const styles = {
  'Point': new ol.style.Style({
    image: image,
  })
}

const styleFunction = function (feature) {
  return styles[feature.getGeometry().getType()];
}

const vectorLayer = new ol.layer.Vector({
  source: new ol.source.Vector({
    url: 'cell-towers.geojson',
    format: new ol.format.GeoJSON(),
  }),
  style: styleFunction,
});

const osmLayer = new ol.layer.Tile({
  source: new ol.source.OSM({
    attributionsCollapsible: false,
  }),
  name: 'osm',
  title: 'OpenStreetMap',
  type: 'base',
  opacity: 1,
});
const map = new ol.Map({
  layers: [osmLayer, vectorLayer],
  target: 'map',
  view: new ol.View({
    center: new ol.proj.fromLonLat([-86.682, 32.605]),
    zoom: 8,
  }),
  interactions: new ol.interaction.defaults({altShiftDragRotate:false, pinchRotate:false,}),
});

const featureOverlay = new ol.layer.Vector({
  source: new ol.source.Vector(),
  map: map,
  style: new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'rgba(255, 255, 255, 0.7)',
      width: 2,
    }),
  }),
});