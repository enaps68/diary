<template>
<div class="card" style="width: 18rem;">
      <img :src="info.url" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ info.naslov }}</h5>
        <p class="card-text">{{ info.opis }} </p>
        <a href="#" class="btn btn-primary" style="background-color: #b97836; border: none;">Pogledaj</a>
  </div>
</div>
<br>
</template>

<script>
export default {
  props: ["info"],
  name: 'card',
  
}
</script>


