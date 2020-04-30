import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import  {faHandPaper,faHandScissors,faHandRock,faExpandArrowsAlt }  from '@fortawesome/free-solid-svg-icons'
import  {faFlag, faMeteor,faRulerHorizontal}  from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add({faHandPaper,faHandScissors,faHandRock,faExpandArrowsAlt})
library.add({faFlag, faMeteor, faRulerHorizontal})

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

