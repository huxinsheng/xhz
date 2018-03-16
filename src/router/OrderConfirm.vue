<template>
    <yd-layout>
        <yd-navbar slot="navbar" title="订单确认">
            <div @click="$router.go(-1)" slot="left">
                <yd-navbar-back-icon></yd-navbar-back-icon>
            </div>
        </yd-navbar>

        <div style="padding-top: 15px;color:#888;">
            <yd-cell-group title="收货人信息">
                <yd-cell-item >
                    <span slot="left">
                        <yd-flexbox>
                            <yd-flexbox-item>胡新胜</yd-flexbox-item>
                            <yd-flexbox-item>13632505280</yd-flexbox-item>
                            <yd-flexbox-item>411231</yd-flexbox-item>
                        </yd-flexbox>
                    </span>
                </yd-cell-item>
            </yd-cell-group>
            <div style="padding-bottom: 5px;color:#888;font-size:14px;">收货人信息</div>
            <yd-flexbox style="padding-bottom: 10px;">
                <yd-flexbox-item>姓名：胡新胜</yd-flexbox-item>
                <yd-flexbox-item>手机：13632505280</yd-flexbox-item>
                <yd-flexbox-item>邮编：411231</yd-flexbox-item>
            </yd-flexbox>
            <div style="padding-bottom: 5px;color:#888;font-size:14px;">收货地址</div>
            <yd-flexbox>
                <yd-flexbox-item class="edit-flexbox-item">湖南省湘潭市雨湖区九华经济开发区学府路1号新都汇4栋5单元7004室</yd-flexbox-item>
            </yd-flexbox>
        </div>

        <div slot="tabbar">
            <div class="footer-btns">
                <a href="#" class="edit-cart">修改购物车</a>
                <a href="#" class="order-pay">去支付</a>
            </div>
        </div>
    </yd-layout>
</template>

<script>
  /** import $ from 'jquery' */

  export default {
    name: 'OrderConfirm',
    data () {
      return {
        ydswitch:false,
        btns: []
      }
    },
    methods: {},
    mounted () {
    }
  }
</script>
<style>
    textarea::-webkit-input-placeholder{
        text-align: right;
    }
    .footer-btns {
        float: left;
        width: 100%;
    }

    .footer-btns .edit-cart {
        float: left;
        text-align: center;
        background-color: #04be02;
        color: #fff;
        width: 50%;
        padding: 15px;
    }

    .footer-btns .order-pay {
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
