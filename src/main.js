import Vue from 'vue';
import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCrosshairs } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

library.add(faCrosshairs);
// library.add(faFacebook);

Vue.component('font-awesome-icon', FontAwesomeIcon);