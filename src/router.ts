import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/ml/home.vue'
import Index from './views/ml/index.vue'
import ConvNeXtDD from './views/ml/convnext-dd.vue'

Vue.use(VueRouter)




export default new VueRouter ({
    mode: 'history',
    routes: [
        { path: '/', component: ConvNeXtDD },
        { path: '/home', component: Home },
        { path: '/index', component: Index}
    ]
})