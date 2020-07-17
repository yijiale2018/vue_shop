import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login.vue'
import test from '../components/test.vue'
import Home from '../components/home.vue'

Vue.use(VueRouter)
const router=new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/test',
      component: test
    },
    {
      path:'/home',
      component:Home
    }
  ]
})

//挂载路由导航守卫
router.beforeEach((to,from,next)=>{
  //to将要访问的路径
  //from从哪个路径过来
  //next是一个函数表示放行
    if(to.path === '/login') return next()
    //获取token
    const tokenStr= window.sessionStorage.getItem('token')
    if(!tokenStr) return next('/login')
    next();
    // 1
})

export default router