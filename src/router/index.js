import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import food from '@/components/food'
import food1 from '@/components/food1'
import order from '@/components/order'
import member from '@/components/member'
import newfood from '@/components/newfood'
import pay from '@/components/pay'
import recharge from '@/components/recharge'
import userinfo from '@/components/userinfo'
import yue from '@/components/yue'
import register from '@/components/register'
import login from "@/components/login"
import reset from '@/components/reset'
import setInfo from '@/components/setInfo'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: index
  }, {
    path: '/food',
    name: 'food',
    component: food1
  }, {
    path: '/order',
    name: 'order',
    component: order
  }, {
    path: '/member',
    name: 'member',
    component: member
  }, {
    path: '/newfood',
    name: 'newfood',
    component: newfood
  }, {
    path: '/order/pay',
    name: 'pay',
    component: pay
  }, {
    path: '/member/recharge',
    name: 'recharge',
    component: recharge
  }, {
    path: '/member/userinfo',
    name: 'userinfo',
    component: userinfo
  }, {
    path: '/member/yue',
    name: 'yue',
    component: yue
  }, {
    path: '/member/setInfo',
    name: 'setInfo',
    component: setInfo
  }, {
    path: '/register',
    name: 'register',
    component: register
  }, {
    path: '/login',
    name: 'login',
    component: login
  }, {
    path: '/reset',
    name: 'reset',
    component: reset
  }]
})