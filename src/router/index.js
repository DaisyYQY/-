import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Index from '@/components/index'
import First from '@/components/first'
import Student from '@/components/student'
import Home from '@/components/home'
import Zhu from '@/components/zhuce'
import Rpw from '@/components/resetpassword'
import YY from '@/components/11'

Vue.use(Router)

export default new Router({
  mode:"history",
  base:__dirname,
  routes: [
    {
      path: '/',
      name:"Login",
      component: Login
    },
    {
      path: '/index',
      name:"Index",
      component: Index
    },
    {
      path: '/rpw',
      name:"Rpw",
      component: Rpw
    },
    {
      path: '/first',
      name:"First",
      component: First
    },
    {
      path: '/student',
      name:"Student",
      component: Student
    },
    {
      path: '/zhu',
      name:"Zhu",
      component: Zhu
    },
    {
      path: '/home',
      name:"Home",
      component:Home,
      meta:{
        requireAuth: true
      }
    },
    {
      path: '/11',
      name:"YY",
      component:YY
    }
  ]
})
