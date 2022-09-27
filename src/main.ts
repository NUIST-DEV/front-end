import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import router from "./router"


Vue.config.productionTip = false
//change the base url to /
Vue.use(Antd)
axios.defaults.baseURL = '/'
Vue.use(VueAxios, axios);
//swal
Vue.use(VueSweetalert2);


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
