<template>
<div id="app">
  <header>
    <span id='header_menu'><i @click='showSideBar' class="iconfont icon-sort"></i></span>
    <span id='header_home'><router-link to="/" class="iconfont icon-home"></router-link></span>
  </header>
  <div id="back-imgbox">
    <img id='back-img' src="/static/img/header-background.jpg" alt="back"></img>
  </div>
  <side-bar></side-bar>
  <router-view class="article"></router-view>
</div>
</template>

<script>
import sideBar from './components/sideBar'
export default {
  name: 'app',
  components: {
    sideBar
  },
  data () {
    return {}
  },
  methods: {
    toggleSideBar (data) {
    },
    showSideBar () {
      this.$store.commit('toggleSideBar')
    },
    handleScroll (e) {
      var img = document.getElementById('back-img')
      img.style['top'] = '-' + window.scrollY / 4 + 'px'
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style>
@import "~/static/iconfont.css";
* {
  margin: 0;
  padding: 0;
}
html {
  font-size: 62.5% !important;
  height: 100%;
}
body {
  border: .8rem #fff solid;
  border-top: none;
  height: 100%;
}
#app {
  overflow: hidden;
}
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 6rem;
  background-color: rgba(255,255,255,0.8);
  color: #3592f5;
  border-bottom: .1rem solid #eee;
}

#back-imgbox {
  border: .8rem #fff solid;
  left: 0;
  top: 0;
  overflow: hidden;
  margin: 0px;
  padding: 0px;
  height: 40rem;
  width: 100%;
  box-sizing: border-box;
  z-index: -1000;
  position: fixed;

}
#back-img {
  position: absolute;
  margin: 0;
  padding: 0px;
  border: none;
  width: 100%;
  height: 100%;
  max-height: none;
  max-width: none;
  z-index: -1000;
  top: 0;
  left: 0px;
}

#header_menu {
  display: inline-block;
  text-align: center;
  height: 100%;
  width: 6rem;
  line-height: 6rem;
}
#header_home {
  display: inline-block;
  height: 100%;
  width: 10rem;
  position: absolute;
  text-align: center;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  line-height: 6rem;
}
#header_home a:hover,#header_home a:link,#header_home a:visited {
  color: #3592f5 !important;
  background-color: rgba(255,255,255,0) !important;
}

.iconfont {
  font-size: 2.2rem;
}
a:link,
a:visited {
  color: #000;
  text-decoration: none;
}

a:hover {
  color: #000;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
