<template>
  <div id="nav">
    <home-navbar />
    <home-navbar-2 />

  </div>
  
  <!-- <router-view v-slot="{Component, route}">
    <transition :name="route.meta.transition">
      <component :is="Component">
    </transition>
  </router-view> -->

  <router-view v-slot="{ Component, route }">
   <transition :name="route.meta.transition || 'ts-fade'">
    <component :is="Component" />
  </transition>
</router-view>
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

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(50px);
  opacity: 0;
  background-color: red;
}
.ts-home-enter-active {
  transition: all 0.3s ease-out;
}

.ts-home-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.ts-home-enter-from,
.ts-home-leave-to {
  transform: translateX(50px);
  opacity: 0;
  background-color: red;
}
.ts-about-enter-active {
  transition: all 0.3s ease-out;
}

.ts-about-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.ts-about-enter-from,
.ts-about-leave-to {
  transform: translateX(50px);
  opacity: 0;
  background-color: red;
}

.ts-fade-enter-active {
  transition: all 0.3s ease-out;
}

.ts-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.ts-fade-enter-from,
.ts-fade-leave-to {
  transform:scale(2);
  opacity: 0;
  background-color: red;
}
</style>
