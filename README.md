# Mall
Vue+express
git
坑一：
vue-lazyload插件用法
需要在main.js引用
Vue.use(VueLazyLoad, {
  loading: "/static/loading-svg/loading-bars.svg"
})
用v-lazy绑定图片路径的时候二次加载需要在图片上绑定 :key 属性
例如
<img v-lazy="'/static/'+item.productImage" alt="" :key="'/static/'+item.productImage">
