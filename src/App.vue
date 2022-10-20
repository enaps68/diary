<template>
  <div>
    <nav class="navbar bg-light" >
  <div class="container-fluid" style="background-color: #a58e74;">
    <a class="navbar-brand" href="#">
      <img src="src/assets/5258541_diary_education_notebook_planner_scrapbook_icon.png" alt="" width="30" height="24" class="d-inline-block align-text-top">
      Diary
    </a>
    


</div>
</nav>
<nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/login">Log in</router-link> |
    <router-link to="/signup">Sign up</router-link>
  </nav> 
  
  <router-view/>
</div>

</template>

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
      color: #a58e74;
    }
  }
}
</style>
