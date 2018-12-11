// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import SvgSprite from 'vue-svg-sprite'
import VueSocket from 'vue-socket.io'

Vue.use(VueSocket, 'http://127.0.0.1:5000/incomingmail')

Vue.use(SvgSprite, {
  url: '/static/icons.svg'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
