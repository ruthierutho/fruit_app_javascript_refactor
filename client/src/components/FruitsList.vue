<template>
  <div>
      <ul id="fruit-grid">
          <fruit-list-item v-for="(fruit, index) in fruits" :fruit="fruit" :key="index"></fruit-list-item>
      </ul>
  </div>
</template>

<script>
import FruitListItem from './FruitListItem.vue'

export default {
    name: 'fruits-list',
    props: ['fruits'],
    components: {
        "fruit-list-item": FruitListItem
    }
}
</script>

<style>

#fruit-grid {
    display: grid;
    grid-template-areas: 
        'fruit fruit fruit'
        'fruit fruit fruit'
        'fruit fruit fruit'
        'fruit fruit fruit'
        'fruit fruit fruit';
    grid-template-columns: 1fr 1fr 1fr;
    list-style-type: None;
    padding: 10px 10px 10px 20px;
}

</style>