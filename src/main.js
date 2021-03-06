// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import YDUI from 'vue-ydui'
/* Page router start */
import Home from './router/Home.vue'
import Category from './router/Category.vue'
import Cart from './router/Cart.vue'
import My from './router/My.vue'
import Detail from './router/Detail.vue'
import ConfirmOrder from './router/ConfirmOrder.vue'
import MyAddress from './router/MyAddress.vue'
import EditAddress from './router/EditAddress.vue'
import AddNewAddress from './router/AddNewAddress.vue'
import MyOrder from './router/MyOrder.vue'
import PayOrder from './router/PayOrder.vue'
import OrderInfo from './router/OrderInfo.vue'
/* Page router end */

import '../static/css/vonic.min.css'
import '../static/cust_font/iconfont.css'
import 'vue-ydui/dist/ydui.base.css'
import 'vue-ydui/dist/ydui.px.css'
/* 使用px：import 'vue-ydui/dist/ydui.px.css'; */

Vue.use(VueRouter)
Vue.use(YDUI)

Vue.config.productionTip = false

document.addEventListener('DOMContentLoaded', function () {
  typeof FastClick === 'function' && FastClick.attach(document.body)
}, false)

const router = new VueRouter({
  routes: [
    {path: '/', component: Home},
    {path: '/category', name: 'category', component: Category},
    {path: '/cart', name: 'cart', component: Cart},
    {path: '/my', name: 'my', component: My},
    {path: '/detail', name: 'detail', component: Detail},
    {path: '/confirmOrder', name: 'confirmOrder', component: ConfirmOrder},
    {path: '/myAddress', name: 'myAddress', component: MyAddress},
    {path: '/editAddress', name: 'editAddress', component: EditAddress},
    {path: '/addNewAddress', name: 'addNewAddress', component: AddNewAddress},
    {path: '/myOrder', name: 'myOrder', component: MyOrder},
    {path: '/payOrder', name: 'payOrder', component: PayOrder},
    {path: '/orderInfo', name: 'orderInfo', component: OrderInfo}
  ]
})
/* eslint-disable no-new */
new Vue({
  router: router,
  render: v => v(App)
}).$mount('#app')
