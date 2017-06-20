import Vue from 'vue'
import Router from 'vue-router'
import article from '@/components/article'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/article/:id',
      name: 'article',
      component: article
    }
  ]
})
