<template>
  <div id="deets" v-if="fruit">
    <h2 id="fruit-title">{{ fruit.name }} {{ fruit.emoji }}</h2>
    <h4><b>Order:</b> {{ fruit.order }}</h4>
    <p>
      Orders contain different families. Each order is divided into families.
    </p>
    <h4><b>Family:</b> {{ fruit.family }}</h4>
    <p>
      Families are plants with many botanical features in common. There are
      roughly 150-500 different families of plants (the botanists can't agree on
      how many)!
    </p>
    <h4><b>Genus:</b> {{ fruit.genus }}</h4>
    <p>Just think of the genus like your last name!</p>

    <p>
      <span><b>Nutrition (per 100g)</b></span
      >: Carbohydrates: {{ fruit.nutritions.carbohydrates }}g, Protein:
      {{ fruit.nutritions.protein }}g, Fat: {{ fruit.nutritions.fat }}g,
      Calories: {{ fruit.nutritions.calories }}kcal, Sugar:
      {{ fruit.nutritions.sugar }}g
    </p>
  </div>
</template>

<script>

export default {
  name: "fruit-detail",
  props: ["fruit"],
  components: {
  
  },
};
</script>

<style>
#fruit-title {
  font-size: 30px;
  padding-top: 0px;
  margin-top: 0px;
}
#deets {
  padding: 10px;
  font-family: "Montserrat", sans-serif;
  background-color: rgba(253, 243, 129, 0.906);
  color: orange;
}
#mapid {
  height: 360px;
  width: 650px;
  justify-content: center;
  align-content: center;
}

.tooltip {
  font-family: "Montserrat", sans-serif;
  font-size: 1.6em;
  color: rgb(255, 153, 0);
  margin: 0px 10px;
}
</style>