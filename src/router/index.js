import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 去掉原始路由表数组和删掉原始路由组件路径，view下的原始组件home和about，components下的helloworld和assets的静态资源图片
const routes = [

]

const router = new VueRouter({
  routes
})

export default router
