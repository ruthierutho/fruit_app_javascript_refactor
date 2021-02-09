<template>
  <div id="deets" v-if="fruit">
      <h2 id="fruit-title">{{fruit.name}}  {{fruit.emoji}}</h2> 
      <h4><b>Order:</b> {{fruit.order}} </h4> 
      <p>Orders contain different families. Each order is divided into families.</p>
      <h4><b>Family:</b> {{fruit.family}} </h4> 
      <p>Families are plants with many botanical features in common. There are roughly 150-500 different families of plants (the botanists can't agree on how many)!</p>
      <h4><b>Genus:</b> {{fruit.genus}} </h4>
      <p>Just think of the genus like your last name!</p>
     
      <p><b> {{fruit.name}} originate from {{fruit.origin.country}}, you can see where this is on the map below!</b></p>
      <div id="mapid">
          <l-map :zoom=3 :center="[ fruit.origin.latitude, fruit.origin.longitude ]">
              <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
              <l-marker :lat-lng="[ fruit.origin.latitude, fruit.origin.longitude ]"></l-marker>
          </l-map>
      </div>
       <p>
          <span><b>Nutrition (per 100g)</b></span>: 
          Carbohydrates: {{fruit.nutritions.carbohydrates}}g,
          Protein: {{fruit.nutritions.protein}}g,
          Fat: {{fruit.nutritions.fat}}g,
          Calories: {{fruit.nutritions.calories}}kcal,
          Sugar: {{fruit.nutritions.sugar}}g  
      </p>
       
  </div>
</template>

<script>
import PieChart from "./PieChart.vue";
import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.imagePath = '/';
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('../../node_modules/leaflet/dist/images/marker-icon-2x.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'), 
});
export default {
    name: 'fruit-detail',
    props: ['fruit'],
    components: {
        "pie-chart": PieChart
    }
}
</script>

<style>

#fruit-title {
font-size: 30px;
padding-top: 0px;
margin-top: 0px;

}
 #deets {
     padding: 10px;
     font-family: 'Montserrat', sans-serif;
     background-color: rgba(253, 243, 129, 0.906);
     color: orange;

 }
#mapid {
    height: 360px;
    width: 720px;
    justify-content: center;
}
</style>