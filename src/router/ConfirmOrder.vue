<template>
  <yd-layout>
    <yd-navbar slot="navbar" title="确认订单">
      <div @click="$router.go(-1)" slot="left">
        <yd-navbar-back-icon></yd-navbar-back-icon>
      </div>
    </yd-navbar>

    <div class="receipt-info-box">
      <yd-cell-group>
        <yd-cell-item arrow type="link" href="/myAddress">
          <yd-icon slot="icon" name="location" size=".42rem"></yd-icon>
          <span slot="left" style="width:90%">
            <div>
              <yd-flexbox>
                  <yd-flexbox-item>收货人：胡新胜</yd-flexbox-item>
                  <yd-flexbox-item class="yd-flexbox-item-right">13632505280</yd-flexbox-item>
              </yd-flexbox>
            </div>
            <div>
              <yd-flexbox>
                  <yd-flexbox-item class="receipt-address">收货地址：湖南省湘潭市雨湖区九华经济开发区学府路1号新都汇4栋5单元7004室</yd-flexbox-item>
              </yd-flexbox>
            </div>
          </span>
        </yd-cell-item>
      </yd-cell-group>
    </div>
    <div>
      <yd-list theme="4" slot="list">
        <yd-list-item v-for="(item, key) in list" :key="key" type="link" href="/detail?id=${item.id}">
          <img slot="img" :src="item.logo">
          <span slot="title">{{item.title}}</span>
          <yd-list-other slot="other">
            <div>
              <span>颜色分类：驼色</span>
            </div>

          </yd-list-other>
          <yd-list-other slot="other">
            <div>
              <span class="order-list-price"><em>¥</em>{{item.amount}}</span>
            </div>
            <div>
              <span>x1</span>
            </div>
          </yd-list-other>
        </yd-list-item>
      </yd-list>
      <div>
        <yd-cell-group>
          <yd-cell-item arrow>
            <span slot="left">配送方式</span>
            <span slot="right">快递 免邮</span>
          </yd-cell-item>
          <yd-cell-item type="label">
            <span slot="left">发票</span>
            <yd-switch slot="right" v-model="ydswitch"></yd-switch>
          </yd-cell-item>
        </yd-cell-group>

        <yd-cell-group title="买家留言">
          <yd-cell-item>
            <yd-textarea slot="right" placeholder="选填：请填写重要的留言" maxlength="100"></yd-textarea>
          </yd-cell-item>
        </yd-cell-group>
      </div>
    </div>
    <div slot="tabbar">
      <div class="footer-btns">
        <a href="#" class="order-amount">
          合计：<span class="order-list-price"><em>¥</em>12.00</span>
        </a>
        <a href="#" class="order-pay">去支付</a>
      </div>
    </div>
  </yd-layout>
</template>

<script>
  /** import $ from 'jquery' */

  export default {
    name: 'confirmOrder',
    data () {
      return {
        ydswitch: false,
        list: [
          {
            id: 'G00001',
            title: '2016夏天新款男士短袖t恤青少年韩版修身印花圆领半袖男装衣服潮',
            amount: '250',
            qty: 1,
            logo: '//img12.360buyimg.com/n1/jfs/t2122/170/1006550413/171711/de099a6f/56399d01N67907749.jpg'
          },
          {
            id: 'G00002',
            title: '2016夏天新款男士短袖t恤青少年韩版修身印花圆领半袖男装衣服潮',
            amount: '300',
            qty: 1,
            logo: '//img10.360buyimg.com/n1/jfs/t6925/75/2382158459/437865/f3931d24/598be5b1N24d949fe.jpg'
          },
          {
            id: 'G00003',
            title: '2016夏天新款男士短袖t恤青少年韩版修身印花圆领半袖男装衣服潮',
            amount: '100',
            qty: 1,
            logo: '//img14.360buyimg.com/n1/jfs/t3232/69/539717695/176729/cf1ff3d8/57baa5d1N901ffea5.jpg'
          }
        ]
      }
    },
    methods: {},
    mounted () {
    }
  }
</script>
<style>
  .receipt-info-box {
    color: #888;
  }
  .receipt-info-box .yd-cell-box {
    margin-bottom: .2rem;
  }
  .receipt-info-box .yd-cell-icon {
    display: block;
    margin-right: 10px;
  }

  .receipt-info-box .yd-cell {
    padding-top: 8px;
    padding-bottom: 10px;
  }

  .receipt-info-box .yd-cell-left {
    width: 93%;
  }

  .receipt-info-box .yd-flexbox-item-right {
    text-align: right;
  }

  .receipt-info-box .receipt-address {
    padding-top: 5px;
    font-size: 13px;
    width: 93%;
    word-wrap: break-word;
    word-break: normal;
    white-space: pre-wrap;
  }

  .order-list-price {
    font-size: .3rem;
    color: #eb5211;
  }

  .footer-btns {
    float: left;
    width: 100%;
  }

  .footer-btns .order-amount {
    float: left;
    text-align: right;
    background-color: #fff;
    color: #000;
    width: 70%;
    padding: 15px;
  }

  .footer-btns .order-pay {
    float: left;
    text-align: center;
    background-color: #eb5211;
    color: #fff;
    width: 30%;
    padding: 15px;
  }

  .yd-scrollview:after {
    height: 0px;
  }
</style>
