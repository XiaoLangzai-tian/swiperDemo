import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Button } from 'mint-ui'
import { Lazyload } from 'mint-ui';

Vue.use(Lazyload)
Vue.config.productionTip = false
Vue.component('mybtn',Button)
// Vue.component('lazyload',Lazyload)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
