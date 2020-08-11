import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios'
import ElementUI from 'element-ui';
import '../src/static/js/tween.js'
import 'element-ui/lib/theme-chalk/index.css';
import '../src/static/css/font/iconfont.css'
import '../src/static/css/public.css'
import '../src/static/js/animation.js'
import animate from 'animate.css'
Vue.prototype.$axios = axios
Vue.config.productionTip = false;
Vue.use(animate)
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
