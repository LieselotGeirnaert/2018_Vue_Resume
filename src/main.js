import Vue from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faIdCard, faBirthdayCake, faAt, faMobileAlt, faHome, faCircle, faLocationArrow, faGlobe, faDownload, faCopyright } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCheckCircle } from '@fortawesome/fontawesome-free-regular'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faIdCard, faBirthdayCake, faAt, faMobileAlt, faHome, faCircle, faLocationArrow, faGlobe, faDownload, faGithub, faLinkedin, faCheckCircle, faCopyright)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
