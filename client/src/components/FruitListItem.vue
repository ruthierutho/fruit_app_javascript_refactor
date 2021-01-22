<template>
  <li v-on:click="handleClick">
      <p style="font-size:5rem;width:100%;text-align:center;" id="fruit-emoji">{{fruit.emoji}}</p>
      <p id="fruit-name" >{{fruit.name}}</p>
    </li>
</template>

<script>
import { eventBus } from '../main'
export default {
    name: 'fruit-list-item',
    props: ['fruit'],
    methods: {
        handleClick(){
            eventBus.$emit('fruit-selected', this.fruit)
        }
    }
}
</script>

<style>

li {
    width: 80%;
    border: 1px;
    background-color: rgb(253, 243, 129);
    padding: 20px;
    margin: 10px;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    color: rgb(255, 153, 0);
    font-size: 18pt;
    box-shadow: 5px 10px 5px orange;
}

li:hover{
  color: #ff7a59;
  border: #ff7a59 solid 1px;
  background:rgb(249, 235, 79);
}

</style>