<template>
    <yd-layout>
        <yd-navbar slot="navbar" title="商品详情">
            <div @click="$router.go(-1)" slot="left">
                <yd-navbar-back-icon></yd-navbar-back-icon>
            </div>

            <!--<router-link v-on:click.native="goBack" to="/" slot="left">
                <yd-navbar-back-icon></yd-navbar-back-icon>
            </router-link>-->
        </yd-navbar>
        <yd-slider autoplay="3000">
            <yd-slider-item>
                <a href="http://www.ydcss.com">
                    <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
                </a>
            </yd-slider-item>
            <yd-slider-item>
                <a href="http://www.ydcss.com">
                    <img src="http://static.ydcss.com/uploads/ydui/2.jpg">
                </a>
            </yd-slider-item>
            <yd-slider-item>
                <a href="http://www.ydcss.com">
                    <img src="http://static.ydcss.com/uploads/ydui/3.jpg">
                </a>
            </yd-slider-item>
        </yd-slider>
        <div class="goods-price">
            <div class="price">
                <em>¥</em>
                <span>300</span>
            </div>
            <div class="market-sales">
                <del>¥749</del>
                <div><span>135</span> 件已售</div>
            </div>
        </div>
        <div class="goods-title-sales-region">
            <yd-flexbox>
                <yd-flexbox-item class="goods-title">2016夏天新款男士短袖t恤青少年韩版修身印花圆领半袖男装衣服潮</yd-flexbox-item>
                <div>
                    <yd-icon name="share1" size="0.45rem" color="#8C8C8C"></yd-icon>
                </div>
            </yd-flexbox>
            <yd-flexbox class="costs-sales-region">
                <yd-flexbox-item class="costs">快递包邮</yd-flexbox-item>
                <yd-flexbox-item class="sales">月销232笔</yd-flexbox-item>
                <yd-flexbox-item class="region">湖南</yd-flexbox-item>
            </yd-flexbox>
        </div>
        <div>
            <yd-tab>
                <yd-tab-panel label="商品详情">
                    土地是以它的肥沃和收获而被估价的；才能也是土地，不过它生产的不是粮食，而是真理。如果只能滋生瞑想和幻想的话，即使再大的才能也只是砂地或盐池，那上面连小草也长不出来的。
                </yd-tab-panel>
                <yd-tab-panel label="商品规格">
                    土地是以它的肥沃和收获而被估价的；才能也是土地，不过它生产的不是粮食，而是真理。如果只能滋生瞑想和幻想的话，即使再大的才能也只是砂地或盐池，那上面连小草也长不出来的。
                </yd-tab-panel>
                <yd-tab-panel label="用户评价">
                    我需要三件东西：爱情友谊和图书。然而这三者之间何其相通！炽热的爱情可以充实图书的内容，图书又是人们最忠实的朋友。
                </yd-tab-panel>
            </yd-tab>
        </div>
        <div slot="tabbar">
            <div class="footer-btns">
                <a href="#" class="add-cart">加入购物车</a>
                <a href="#" class="goods-buy">立即购买</a>
            </div>
        </div>
    </yd-layout>
</template>

<script>
  /** import $ from 'jquery' */

  export default {
    name: 'detail',
    methods: {
    },
    mounted () {
    }
  }
</script>
<style>
    .goods-price {
        height: 0.9rem;
        line-height: 0.9rem;
        background-color: #FF4500;
        padding-left: 10px;
        color: #fff;
        vertical-align: bottom;
    }

    .goods-price .price {
        float: left;
        height: 1rem;
        line-height: 1rem;
    }

    .goods-price .price em {
        font-size: 0.3rem;
    }

    .goods-price .price span {
        font-size: 0.5rem;
        line-height: 1.2rem;
    }

    .goods-price .market-sales {
        float: left;
        padding-left: 10px;
    }

    .goods-price del {
        color: #fff;
        font-size: 12px;
        display: block;
        height: 0.4rem;
        color: #D4D4D4;
        line-height: 0.5rem;
    }

    .goods-price .market-sales div {
        height: 0.4rem;
        line-height: 0.35rem;
        color: #ccc;
        background-color: #8B8989;
        background-color: rgba(0, 0, 0, 0.2);
        padding: 3px;
        border-radius: 2px;
    }

    .goods-price .market-sales div span {
        color: #fff;
        filter: alpha(opacity:100);
        opacity: 1;
        -moz-opacity: 1;
        -khtml-opacity: 1;
    }

    .goods-title-sales-region {
        background-color: #fff;
        padding: 10px 10px 0 10px;
    }

    .goods-title-sales-region .goods-title {
        padding-right: 10px;
        font-size: 0.3rem;
    }

    .goods-title-sales-region .costs-sales-region {
        height: 0.8rem;
        color: #8C8C8C;
    }

    .goods-title-sales-region .costs-sales-region .costs {

    }

    .goods-title-sales-region .costs-sales-region .sales {
        text-align: center;
    }

    .goods-title-sales-region .costs-sales-region .region {
        text-align: right;
    }

    .footer-btns {
        float: left;
        width: 100%;
    }

    .footer-btns .add-cart {
        float: left;
        text-align: center;
        background-color: #04be02;
        color: #fff;
        width: 50%;
        padding: 15px;
    }

    .footer-btns .goods-buy {
        float: left;
        text-align: center;
        background-color: #ef4f4f;
        color: #fff;
        width: 50%;
        padding: 15px;
    }

    .yd-scrollview:after {
        height: 0px;
    }
</style>
