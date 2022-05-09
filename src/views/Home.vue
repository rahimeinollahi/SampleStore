<template>
  <div class="home">
      <home-body />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeBody from '../components/home_components/HomeBody.vue'

export default {
  name: 'Home',
  components: {
    
    HomeBody
  }
}
</script>
