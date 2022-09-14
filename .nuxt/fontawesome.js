import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import {
  FontAwesomeLayers,
  FontAwesomeLayersText,
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

import {
  faSearch as proFasFaSearch,
  faQuestionCircle as proFasFaQuestionCircle,
  faChartLine as proFasFaChartLine,
  faUndo as proFasFaUndo,
  faPlus as proFasFaPlus
} from '@fortawesome/pro-solid-svg-icons'

import {
  faHome as proFarFaHome,
  faClinicMedical as proFarFaClinicMedical,
  faSearch as proFarFaSearch,
  faQuestionCircle as proFarFaQuestionCircle,
  faEnvelope as proFarFaEnvelope,
  faChartLine as proFarFaChartLine,
  faUndo as proFarFaUndo,
  faAngleUp as proFarFaAngleUp,
  faAngleDown as proFarFaAngleDown,
  faAngleLeft as proFarFaAngleLeft,
  faAngleRight as proFarFaAngleRight,
  faPlus as proFarFaPlus,
  faFilter as proFarFaFilter,
  faInfoCircle as proFarFaInfoCircle,
  faExclamationCircle as proFarFaExclamationCircle,
  faTimesCircle as proFarFaTimesCircle,
  faTimes as proFarFaTimes,
  faGlobeAmericas as proFarFaGlobeAmericas,
  faSave as proFarFaSave
} from '@fortawesome/pro-regular-svg-icons'

import {
  faAngleDown as proFadFaAngleDown
} from '@fortawesome/pro-duotone-svg-icons'

library.add(
  proFasFaSearch,
  proFasFaQuestionCircle,
  proFasFaChartLine,
  proFasFaUndo,
  proFasFaPlus,
  proFarFaHome,
  proFarFaClinicMedical,
  proFarFaSearch,
  proFarFaQuestionCircle,
  proFarFaEnvelope,
  proFarFaChartLine,
  proFarFaUndo,
  proFarFaAngleUp,
  proFarFaAngleDown,
  proFarFaAngleLeft,
  proFarFaAngleRight,
  proFarFaPlus,
  proFarFaFilter,
  proFarFaInfoCircle,
  proFarFaExclamationCircle,
  proFarFaTimesCircle,
  proFarFaTimes,
  proFarFaGlobeAmericas,
  proFarFaSave,
  proFadFaAngleDown
)

config.autoAddCss = false

Vue.component('FontAwesomeIcon', FontAwesomeIcon)
Vue.component('FontAwesomeLayers', FontAwesomeLayers)
Vue.component('FontAwesomeLayersText', FontAwesomeLayersText)
