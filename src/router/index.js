import Vue from "vue";
import Router from "vue-router";
import GoodsList from "@/views/GoodsList";
import Title from "@/views/Title";
import Image from "@/views/Image";
import Cart from "@/views/Cart";
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router);
// 动态路由
export default new Router({
  mode: "history",
  routes: [{
    path: "/",
    name: "GoodsList",
    components: {
      default: GoodsList,
      title: Title,
      img: Image
    }
  }]
});
