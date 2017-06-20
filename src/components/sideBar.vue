<template>
  <div id="sideBar" :class="{'pull-left': !this.$store.state.showSideBar}">
    <ul id='menu' >
      <li v-for='item in sideBarItems'>{{item.title}}
        <ul id='subMenu'>
          <li v-for='subItem in item.subItems'  @click='closeSideBar'>
            <router-link class='subMenu_title' :to="{ name: 'article', params: {id: subItem} }">
              {{subItem}}
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
    <div class="mask" @click='closeSideBar' v-show='this.$store.state.showSideBar'>
    </div>
  </div>
</template>

<script>
import api from '@/api/api.js'
export default {
  name: 'sideBar',
  data () {
    return {
      sideBarItems: api.getSideBarItems()
    }
  },
  methods: {
    closeSideBar () {
      this.$store.commit('toggleSideBar')
    }
  }
}
</script>

<style>
ul {
  list-style: none;
}
.pull-left {
  transform: translateX(-105%);
}
.mask {
  background-color: #000;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0.1;
  z-index: 100;
}
@media screen and (max-width:768px){
  #sideBar {
    transition: transform .2s;
    font-weight: bold;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #e8f9f9;
    width: 10rem;
    height: 100%;
    border-right: 0.1rem solid #aaa;
    box-shadow: 0.1rem 0.1rem 0.5rem #000;
  }
  #menu {
    font-size: 1.6rem;
    z-index: 1000;
    position: relative;
    height: 100%;
    padding-top: 2rem;
  }
  #subMenu {
    font-size: 1.2rem;
    text-decoration: none;
    text-align: center;
    color: #000;
    width: 100%;
    background-color: #fff;
    box-shadow: 0.1rem 0.1rem 0.5rem #000;
  }
  .subMenu_title {
    display: inline-block;
    width: 100%;
    background-color: #eee;
    box-shadow: 0rem 0rem 0.2rem #000;
  }
}
@media screen and (min-width:768px){
  #sideBar {
    position: fixed;
    top: 0;
    left: 0;
    background-color: #eee;
    width: 200px;
    height: 100%;
    padding-top: 40px;
  }
}
</style>
