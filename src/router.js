import Vue from 'vue'
import Router from 'vue-router'
//引入路由页面组件
import index from './views/index/index'
import studyForever from './views/studyForever/studyForever'
import about from './views/about/about'
import easyNote from './views/easyNote/easyNote'
import life from './views/life/life'
import message from './views/message/message'
import editnote from './views/editnote/editnote'



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: index,
    },
    {
      path: '/study',
      name: 'study',
      component: studyForever
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/note',
      name: 'note',
      component: easyNote
    },
    {
      path: '/life',
      name: 'life',
      component: life
    },
    {
      path: '/message',
      name: 'message',
      component: message
    },
    {
      path: '/edit',
      component: editnote
    }
  ]
})
