// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
window.html2canvas = require('../node_modules/html2canvas');
window.Canvas2Image = require('../node_modules/canvas2image/canvas2image.js');

console.log(Canvas2Image);

import ElementUI from '../node_modules/element-ui'

　　
import '../node_modules/element-ui/lib/theme-chalk/index.css'

　　
Vue.use(ElementUI)



Vue.config.productionTip = false
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})