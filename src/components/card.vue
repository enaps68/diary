<template>
<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img :src="info.url" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{ info.naslov }}</h5>
        <p class="card-text">{{ info.opis }}</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
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

<style>
#btn {
  background-color: #ffc05f; 
  border: none;
}
</style>
