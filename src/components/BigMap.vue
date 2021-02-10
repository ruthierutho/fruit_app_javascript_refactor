<template>
  <div id="map-container">
    <div id="map-wrap" style="height: 100%">
      <l-map :zoom="2" :center="[15, 15]">
        <l-tile-layer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        ></l-tile-layer>
        <l-marker
          v-for="(fruit, index) in fruits"
          :key="index"
          :fruit="fruit"
          :lat-lng="[fruit.origin.latitude, fruit.origin.longitude]"
          @click=handleMapClick(fruit)
        >
          <l-icon
            class="map-icon"
            :icon-size="[40, 40]"
            :icon-url="require(`@/assets/${fruit.image}`)"
          ></l-icon>
          <l-tooltip class="tooltip">{{ fruit.name }}</l-tooltip>
        </l-marker>
      </l-map>
    </div>
  </div>
</template>

<script>
import { L, icon } from "leaflet";
import { LMap, LTileLayer, LMarker, LIcon, LTooltip } from "vue2-leaflet";

import { eventBus } from "../main.js";

export default {
  name: "big-map",
  props: ["fruits"],

  methods: {
    handleMapClick(fruit) {
      eventBus.$emit("fruit-map-selected", fruit);
    },
  },

  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
    LTooltip,
  },
};
</script>

<style scoped>
#map-container {
  height: 400px;
  margin: 2% 5%;
  padding: 1% 1% 1% 1%;
  background-color: rgb(255, 153, 0);
}

.tooltip {
  font-family: "Montserrat", sans-serif;
  font-size: 1.6em;
  color: rgb(255, 153, 0);
  margin: 0px 10px;
}
</style>