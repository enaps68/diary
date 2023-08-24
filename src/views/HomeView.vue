<template>
  <br>
  <div class="container text-center">
    <div class="row">
      <div class="col"></div>
      <div class="col-6">
          <card v-for="card in filterdcards" :key="card.url" :info="card"/>
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
    opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    datum: "06.08.2023"
  },
  { url: "https://picsum.photos/id/1015/200",
    naslov: "Predivan pogled", 
    opis: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    datum: "11.06.2023"
  },
  { url: "https://picsum.photos/id/1025/200",
    naslov: "Zimska šetnjica", 
    opis: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    datum: "13.01.2023"
  },
  { url: "https://picsum.photos/id/1047/200",
    naslov: "Izgubljeni u gradu", 
    opis: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    datum: "21.12.2022"
   },
  
];

import card from '@/components/card.vue';
import store from "@/store.js";

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
      return this.cards.filter(card => card.naslov.toLowerCase().includes(termin.toLowerCase()));
     },
  },

  components: {
    card,
  },
}
</script>
