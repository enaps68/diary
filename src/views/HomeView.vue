<template>
  <br>
  <div class="container text-center">
    <div class="row">
      <div class="col"></div>
      <div class="col-6" >
          <card v-for="card in filterdcards" :key="card.url" :info="card" style="margin: auto;"/>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script>

let cards = []

cards = [
  { url: "https://picsum.photos/id/1013/200",
    naslov: "Vjenčanje", 
    opis: ""},
  { url: "https://picsum.photos/id/1015/200",
    naslov: "Predivan pogled", 
    opis: ""},
  { url: "https://picsum.photos/id/1025/200",
    naslov: "Zimska šetnjica", 
    opis: ""},
  { url: "https://picsum.photos/id/1047/200",
    naslov: "Izgubljeni u gradu", 
    opis: ""},
  
];

import card from '@/components/card.vue';
import store from '@/store.js';

export default {

  name: 'HomeView',
  data: function () {
    return {
      cards: cards,
      store: store,

    };
    
  },
  computed: {
     filterdcards () {
      let termin = this.store.searchterm;
      return this.cards.filter(card => card.naslov.includes(termin));
     }
  },

  components: {
    card,
  },
}
</script>
