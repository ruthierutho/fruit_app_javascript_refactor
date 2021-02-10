<template>
    <section class="charts">
        <vue-highcharts :options="options" ref="pieChart"></vue-highcharts>
    </section>
</template>
<script>
import VueHighcharts from "vue2-highcharts";
import FruitDetail from "./FruitDetail.vue";

export default {
  name: 'pie-chart', 
  props: ['options'], 
  components: {
    VueHighcharts,
    "fruit-detail": FruitDetail
  },
  
  
  methods: {}
};        
</script>
<style>
.charts {
  
     padding: 10px;
     font-family: 'Montserrat', sans-serif;
     background-color: rgba(253, 243, 129, 0.906);
     color: orange;

 
}
</style>