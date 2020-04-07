import Vue from 'vue'
import App from './App.vue'
// import LoadScript from 'vue-plugin-load-script';

Vue.config.productionTip = false



// Vue.loadScript('../public/js/aframe.min.js')
// Vue.loadScript('../public/js/aframe-min.js')

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
