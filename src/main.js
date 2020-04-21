// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import less from "less";
import "./assets/less/global.less";

import {
  Button,
  Container,
  Header,
  Main,
  Footer,
  Input,
  Menu,
  MenuItem,
  Image,
  Carousel,
  CarouselItem,
  Avatar,
  Col,
  Row,
  Aside,
  Card,
  Table,
  TableColumn,
  Pagination,
  Dialog
} from "element-ui";

import VueRouter from "vue-router";

Vue.use(less);
Vue.use(Button);
Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Input);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Image);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Avatar);
Vue.use(VueRouter);
Vue.use(Col);
Vue.use(Row);
Vue.use(Aside);
Vue.use(Card);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Pagination);
Vue.use(Dialog);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
