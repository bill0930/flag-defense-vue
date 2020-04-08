import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
// import LoadScript from 'vue-plugin-load-script';
Vue.config.productionTip = false


Vue.config.ignoredElements = [
  'a-scene',
  'a-entity',
  'a-camera',
  'a-box',
  'a-marker'
]


new Vue({
  render: h => h(App),
}).$mount('#app')
