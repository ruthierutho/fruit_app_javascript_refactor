<template>
  <div>
    <p class="mapdeets">
      <b>
        {{ fruit.name }} originate from {{ fruit.origin.country }}, you can see
        where this is on the map below!</b
      >
    </p>
    <div id="mapid">
      <l-map
        :zoom="3"
        :center="[fruit.origin.latitude, fruit.origin.longitude]"
      >
        <l-tile-layer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        ></l-tile-layer>
        <l-marker :lat-lng="[fruit.origin.latitude, fruit.origin.longitude]">
          <l-icon
            class="map-icon"
            :icon-size="[40, 40]"
            :icon-url="require(`@/assets/${fruit.image}`)"
          ></l-icon>
          <l-tooltip class="tooltip">{{ fruit.name }}</l-tooltip></l-marker
        >
      </l-map>
    </div>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker, LIcon, LTooltip } from "vue2-leaflet";
import { L, icon } from "leaflet";

export default {
  name: "fruit-map",
  props: ["fruit"],
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
    LTooltip,
  },
};
</script>

<style>
#fruit-title {
  font-size: 30px;
  padding-top: 0px;
  margin-top: 0px;
}
.mapdeets {
  padding: 10px;
  font-family: "Montserrat", sans-serif;
  background-color: rgba(253, 243, 129, 0.906);
  color: orange;
}
#mapid {
  min-width:400px;
  height: 400px;
  justify-content: center;
  align-content: center;
  padding: 10px 10px 10px 10px;
}

.tooltip {
  font-family: "Montserrat", sans-serif;
  font-size: 1.6em;
  color: rgb(255, 153, 0);
  margin: 0px 10px;
}
</style>