<template>
  <div id="sideBar" :class="{'pull-left': !this.$store.state.showSideBar}">
    <ul id='menu' >
      <li v-for='item in sideBarItems' class="item_box">
        <div class="menu_title">
          {{item.title}}
        </div>
        <ul id='subMenu'>
          <li v-for='subItem in item.subItems'  @click='closeSideBar(subItem)' >
            <router-link :class='{active: selectedItemName === subItem}' class='subMenu_title' :to="{ name: 'article', params: {id: subItem} }">
              {{subItem}}
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
    <div class="mask" @click.prevent='closeSideBar' v-show='this.$store.state.showSideBar'>
    </div>
  </div>
</template>

<script>
import api from '@/api/api.js'
export default {
  name: 'sideBar',
  data () {
    return {
      selectedItemName: '',
      sideBarItems: api.getSideBarItems()
    }
  },
  methods: {
    closeSideBar (item) {
      this.selectedItemName = item
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

@media screen and (max-width:768px){
  .mask {
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    z-index: 100;
    -webkit-tap-highlight-color:transparent;
  }
  #sideBar {
    transition: transform .5s;
    font-weight: bold;
    position: fixed;
    top: 0;
    left: 0;
    width: 16rem;
    height: 100%;
  }
  #menu {
    background-color: rgba(255,255,255,0.8);
    box-shadow: 0.2rem 0.2rem 0.8rem #777;
    position: relative;
    z-index: 1000;
    width: 100%;
    height: 100%;
    padding-top: 4rem;
  }
  .item_box {
    padding-left: 1rem;
    font-weight: 400;
  }
  .menu_title {
    font-size: 2.4rem;
    padding-bottom: .3rem;
    margin-right: 1.5rem;
    border-bottom: .1rem solid #000;
  }
  .menu_title::before {
    content: '';
    display: block;
    position: relative;
    top: -0.3rem;
    left: .2rem;
    border-top: .1rem solid #000;
    width: .5rem;
    height: 0;
  }
  #subMenu {
    padding-top: 1rem;
    padding-bottom: 1rem;
    text-decoration: none;
    text-align: left;
    color: #000;
    width: 100%;
    overflow: hidden;
    padding-right: 1rem;
    box-sizing: border-box;
  }
  .subMenu_title {
    font-family: 'consola';
    font-size: 1.6rem;
    height: 2.4rem;
    line-height: 2.4rem;
    display: inline-block;
    text-align: left;
    font-weight: normal;
    width: 100%;
    padding-left: 2.6rem;
    box-sizing: border-box;
  }
  .subMenu_title:hover,.subMenu_title:focus,.router-link-active {
    background-color: #f3f3f3;
    color: #b38b4d !important;
  }
}
</style>
