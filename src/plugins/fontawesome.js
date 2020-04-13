import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import  {faHandPaper,faHandScissors,faHandRock}  from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add({faHandPaper,faHandScissors,faHandRock})

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

