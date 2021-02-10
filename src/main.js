import Vue from 'vue'
import App from './App.vue'
import VModal from 'vue-js-modal'
import { LMap, LTileLayer, LMarker, LIcon, LTooltip } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

Vue.config.productionTip = false

export const eventBus = new Vue();

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);
Vue.component('l-icon', LIcon)
Vue.component('l-tooltip', LTooltip)

Vue.use(VModal)

new Vue({
  render: h => h(App),
}).$mount('#app')



