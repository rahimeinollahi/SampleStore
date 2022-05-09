<template>
  <div id="nav">
    <home-navbar />
    <home-navbar-2 />
  </div>
  <router-view/>
</template>

<script>
import HomeNavbar from '../src/components/home_components/HomeNavbar.vue'
import HomeNavbar2 from './components/home_components/HomeNavbar2.vue'
export default {
  components:{
    HomeNavbar,
    HomeNavbar2
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
