// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import less from 'less';
import './assets/less/global.less'
import {Button,Calendar,Container,Header,Main,Footer} from 'element-ui';

Vue.use(less);
Vue.use(Button);
Vue.use(Calendar);
Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
Vue.use(Footer);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
