import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/ml/home.vue'
import Index from './views/ml/index.vue'
import ConvNeXtDD from './views/ml/convnext-dd.vue'
import Yolov5 from './views/ml/yolov5.vue'
import TestAnchor from './components/anchor-display/test/test-anchor.vue'

Vue.use(VueRouter)




export default new VueRouter ({
    mode: 'history',
    routes: [
        { path: '/', component: TestAnchor },
        { path: '/home', component: Home },
        { path: '/index', component: Index},
        { path: '/convnextdd', component: ConvNeXtDD},
        { path: '/yolov5', component: Yolov5}
    ]
})