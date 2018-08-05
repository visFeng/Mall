<template>
<div>
<Header></Header>
<Navbread>
  <span>Good</span>
</Navbread>
<div class="accessory-result-page accessory-page">
  <div class="container">
    <div class="filter-nav">
      <span class="sortby">Sort by:</span>
      <a href="javascript:void(0)" class="default cur">Default</a>
      <a href="javascript:void(0)" class="price">Price <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
      <a href="javascript:void(0)" class="filterby"  @click="showFilterPop">Filter by</a>
    </div>
    <div class="accessory-result">
      <!-- filter -->
      <div class="filter stopPop" id="filter" v-bind:class="{'filterby-show':filterBy}">
        <dl class="filter-price">
          <dt>Price:</dt>
          <dd><a href="javascript:void(0)" v-bind:class="{'cur':priceChecked=='all'}" @click="priceChecked=all">All</a></dd>
          <!-- <dd>
            <a href="javascript:void(0)">0 - 100</a>
          </dd> -->
          <dd v-for="(price,index) in priceFilter" >
            <a href="javascript:void(0)" @click="setPriceFilter(index)" v-bind:class="{'cur':priceChecked==index}">{{price.starPrice}} - {{price.endPrice}}</a>
          </dd>
        </dl>
      </div>
      <!-- search result accessories list -->
      <div class="accessory-list-wrap">
        <div class="accessory-list col-4">
          <ul>
            <li v-for="item in goodsList">
              <div class="pic">
                <a href="#"><img v-lazy="'/static/'+item.productImage" alt=""></a>
              </div>
              <div class="main">
                <div class="name">{{item.productName}}</div>
                <div class="price">{{item.prodcutPrice}}</div>
                <div class="btn-area">
                  <a href="javascript:;" class="btn btn--m">加入购物车</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="md-overlay" v-show="overLayFlag" @click="closePop"></div>
    </div>
  </div>
</div>
<NavFooder></NavFooder>                                                                                                                                                                                                                                                                                                                      
</div>
</template>
<script>
import "./../assets/css/base.css";
import "./../assets/css/checkout.css";
import "./../assets/css/login.css";
import "./../assets/css/product.css";
import Header from "@/components/Header";
import NavFooder from "@/components/NavFooter";
import Navbread from "@/components/Navbread";
import axios from "axios";
export default {
    data() {
        return {
            goodsList: [],
            priceFilter: [
                {
                    starPrice: '0.00',
                    endPrice: '500.00'
                },
                {
                    starPrice: '500.00',
                    endPrice: '1000.00'
                },
                {
                    starPrice: '1000.00',
                    endPrice: '2000.00'
                }
            ],
            priceChecked: "all",
            filterBy: false,
            overLayFlag: false,
            sortFlag:1
        }
    },
    components: {
        Header,
        NavFooder,
        Navbread
    },
    mounted: function () {
        this.getGoodsList();
    },
    methods: {
        getGoodsList() {
            axios.get("/goods").then((jackgoods) => {
                var res = jackgoods.data;
                this.goodsList = res.result.list;
            }).catch(function (err) {
                console.log("error init." + err)
            })
        },
        showFilterPop() {
            this.filterBy = true;
            this.overLayFlag = true;
        },
        closePop() {
            this.filterBy = false;
            this.overLayFlag = false;
        },
        setPriceFilter(index) {
            this.priceChecked = index;
            this.closePop();
        }

    }
};
</script>


