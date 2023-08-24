<template>
  <nav class="navbar navbar-expand-lg" style="background-color: #53d3dc1f;">
    <div class="container-fluid">
      <router-link to="/" class="nav-link">
        <img src="@/assets/5258541_diary_education_notebook_planner_scrapbook_icon.png" height="30" class="d-inline-block align-top" alt="" loading="lazy" />
      </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">

        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/signup" class="nav-link">Sign up</router-link>
          </li>
        </ul>
      
        <form class="d-flex" role="search">
          <input v-model="store.searchterm" class="form-control me-2" type="search" placeholder="Search" aria-label="Search" style="border: none;">
          <button class="btn" type="submit" style="background-color: #53d3dc71;border: none;">Search</button>
        </form>
      </div>
     </div> 
  </nav>
<router-view></router-view>
</template>


<script>
  import store from "@/store";

  export default {
    name: "app",
    data() {
      return {
        store: store,
    };
  },
  };

</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #ffc05f;
    }
  }
}
</style>
