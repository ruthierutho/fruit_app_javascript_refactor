import Vue from 'vue'
import App from './App.vue'
import VModal from 'vue-js-modal'
import { LMap, LTileLayer, LMarker, icon } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';

Vue.config.productionTip = false

export const eventBus = new Vue();
Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);

Vue.use(VModal)

new Vue({
  render: h => h(App),
}).$mount('#app')



