<template>
  <div class="container text-center">
  <div class="row">
    <div class="col">
      <div class="card" style="width: 18rem;">
      <img src="@/assets/4_cssfgallery.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Izlet u Hum</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Pogledaj</a>
  </div>
  <card/>
</div>
    </div>
    <div class="col">
      <card/>
    </div>
    <div class="col">
      <card/>
    </div>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import card from '@/components/card.vue'

export default {
  name: 'HomeView',
  components: {
    card,
  }
}
</script>
