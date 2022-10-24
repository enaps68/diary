<template>
  <br>
  <div class="container text-center">
  <div class="row">

    <div class="col-2">

    </div>
    
    <div class="col-10">
      <card v-for="card in cards" :key="card" :info="card"/>

     </div>
    
    <div class="col-2">
      
    </div>

  </div>
</div>
</template>

<script>

let cards = []

cards = [
  "https://picsum.photos/id/1013/200",
  "https://picsum.photos/id/1015/200",
  "https://picsum.photos/id/1025/200",
  "https://picsum.photos/id/1047/200",
]

import card from '@/components/card.vue'

export default {

  name: 'HomeView',
  data: function () {
    return {
      cards: cards

    };
    
  },

  components: {
    card,
  }
}
</script>
