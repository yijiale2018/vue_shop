import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../src/plugins/element'
import 'element-ui/lib/theme-chalk/index.css'
// 导入全局样式表
import '../src/assets/css/global.css'
// 导入字体图片
import '../src/assets/fonts/iconfont.css'
// 导入axios
import axios from 'axios'
// 配置请求的根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1'
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
