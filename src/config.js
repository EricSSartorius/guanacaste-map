const MAP = {
  // for creating mapboxgl.Map(). container defaults to 'map'
  style: 'mapbox://styles/guanacaste/cjj079axn0aqu2so55fx6ln2x',
  center:[-85.61365526723557, 10.838261234356153],
  zoom: 9.619976883678385
  //"sprite": "mapbox://sprites/mapbox/bright-v8"
};

const ACCESS_TOKEN =
  'pk.eyJ1IjoiZ3VhbmFjYXN0ZSIsImEiOiJjamowNzhuYnAwZXU2M2txczhsc21mbDVsIn0.amJMu3O1jfjcbg-B1qC7ww';

export default {
  LAYER_ID: 'toggle-turismo',
  SOURCE_LAYER: 'Turismo',
  //FLY_TO_ZOOM_LEVEL: 9.619976883678385,
  ANIMATION_DURATION: 2000,
  LEGEND_TITLE: 'Puestos Estaciónes y Tourismos',
  ACCESS_TOKEN,
  MAP,
  SOURCE_TYPES: [
    {
      name: 'biological',
      label: 'Biological',
      icon: `<svg><use href="assets/svg/information-11.svg"></use></svg>`
    },
    {
      name: 'tourist',
      label: 'Touristo',
      icon: `<svg><use href="assets/svg/park-11.svg"></use></svg>`
      
    }
  ],
  LAYERS: {
    'toggle-turismo': 'Turismo',
    'toggle-acg-unesco-2018-crtm-area-copy': 'UNESCO'
  }
};
