<template>
  <div id="app">
    <header>
      <span id='header_menu' @click='showSideBar'>菜单</span>
    </header>
    <side-bar></side-bar>
    <router-view class="article"></router-view>
  </div>
</template>

<script>
import sideBar from './components/sideBar'
export default {
  name: 'app',
  components: { sideBar },
  data () {
    return {
    }
  },
  methods: {
    toggleSideBar (data) {

    },
    showSideBar () {
      this.$store.commit('toggleSideBar')
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body{
  font-size: 67.5%;
}
header {
  width: 100%;
  height: 2rem;
  background-color: #000;
  color: #fff;
}
#header_menu {
  display: inline-block;
  text-align: center;
  font-size: 1.2rem;
  line-height: 2rem;
  width: 4rem;
}
a:link,a:visited{color:#444;text-decoration:none;}
a:hover{color:#4876FF;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
