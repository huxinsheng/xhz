<template>
    <yd-layout>
        <yd-navbar slot="navbar" title="我的购物车">
          <div @click="$router.go(-1)" slot="left">
            <yd-navbar-back-icon></yd-navbar-back-icon>
          </div>
        </yd-navbar>
        <div>
            <yd-checklist class="cart-list" v-model="cartItems" ref="checkGoodsList" :callback="change" :label="false">
                <template v-for="(item , key) in cartList">
                    <yd-checklist-item :key="key" v-bind:val="item.id">
                        <yd-flexbox style="padding: 15px 0;">
                            <a type="link" href="'#/detail?id='+item.id">
                                <img :src="item.logo">
                            </a>
                            <yd-flexbox-item align="top">
                                <a type="link" :href="'#/detail?id='+item.id">
                                    {{item.title}}<br/>
                                </a>
                                <span style="color: #ef4f4f;"><em>¥</em> {{item.amount}}</span><br/>
                                <div class="qty-count">
                                    <yd-spinner :longpress="false" v-model="item.qty" max="50" width="1.4rem"
                                                v-on:change="changeQty" v-on:input="changeQty"></yd-spinner>
                                </div>
                                <div class="cart-item-delete" v-on:click="changeCartItems(item)">
                                    <yd-icon name="delete" size="0.4rem" color="#f00"></yd-icon>
                                </div>
                            </yd-flexbox-item>
                        </yd-flexbox>
                    </yd-checklist-item>
                </template>
            </yd-checklist>
        </div>
        <div slot="tabbar">
            <yd-flexbox class="footer-btns">
                <yd-flexbox-item class="check-all">
                    <yd-checkbox v-model="isCheckAll" shape="circle" :change="checkAll">全选</yd-checkbox>
                    订单金额：<em>¥</em> {{totalAmount}}
                </yd-flexbox-item>
                <div class="settlement-btn">
                    <a type="link" href="#/confirmOrder">去结算</a>
                </div>
            </yd-flexbox>
        </div>
    </yd-layout>
</template>
<script>
  import $ from 'jquery'

  export default {
    name: 'cart',
    data () {
      return {
        cartItems: [],
        spinner6: 0,
        totalAmount: '0.00',
        isCheckAll: false,
        cartList: [
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
    mounted () {
      $('.yd-spinner-input').attr('readonly','readonly')
    },
    methods: {
      change (value, isCheckAll) {
        this.isCheckAll = isCheckAll
        this.countAmount ()
      },
      changeQty () {
        this.countAmount ()
      },
      changeCartItems (cartItem) {
        let that = this
        $.each (this.cartList, function (i, item) {
          if (cartItem.id === item.id) {
            that.cartList.splice (i, 1)
            that.countAmount ()
            return false
          }
        })
      },
      checkAll () {
        this.isCheckAll = !this.isCheckAll
        this.$refs.checkGoodsList.$emit ('ydui.checklist.checkall', this.isCheckAll)
        this.countAmount ()
      },
      countAmount () {
        let _cartItems = this.cartItems
        let len = _cartItems.length
        let _cartList = this.cartList
        let amount = 0
        if (len > 0) {
          $.each (_cartList, function (i, item) {
            $.each (_cartItems, function (j, jt) {
              if (jt === item.id) {
                let _amount = parseInt (item.amount)
                let _qty = item.qty
                amount += (_amount * _qty)
              }
            })
          })
        }
        this.totalAmount = amount.toFixed (2)
      }
    }
  }
</script>
<style>
    .yd-scrollview:after {
        height: 0px;
    }

    .cart-list img {
        width: 100px;
        height: 100px;
        border: 1px solid #ececec;
        margin-right: 15px;
    }

    .cart-list .yd-spinner > a {
        float: left;
        width: 30%;
        height: inherit;
        text-align: center;
        font-weight: 700;
        color: #666;
        letter-spacing: 0;
        position: relative;
        background-color: #f8f8f8;
        overflow: hidden;
    }

    .cart-list .yd-spinner > a {
        float: left;
        width: 30%;
        height: inherit;
        text-align: center;
        font-weight: 700;
        color: #666;
        letter-spacing: 0;
        position: relative;
        background-color: #f8f8f8;
        overflow: hidden;
    }

    .cart-list .yd-spinner > input {
        letter-spacing: 0;
        float: left;
        width: 40%;
        height: inherit;
        text-align: center;
        color: #666;
        border: none;
        font-size: 13px;
        background-color: #fff;
    }

    .cart-list p {
        color: #f00;
    }

    .cart-list .qty-count {
        width: 160px;
        float: left;
    }

    .cart-list .cart-item-delete {
        float: right;
        padding-top: 10px
    }

    .footer-btns {
        float: left;
        background-color: #ef4f4f;
        color: #fff;
        width: 100%;
    }

    .footer-btns .check-all {
        float: left;
        font-size: 0.3rem;
        width: 20%;
        padding: 15px 0 15px 15px;
    }

    .footer-btns .check-all .yd-checkbox-icon {
        border: 1px solid #fff;
    }

    .footer-btns .check-all .yd-checkbox-text {
        color: #fff;
    }

    .footer-btns .settlement-btn {
        float: right;
        text-align: right;
        font-size: 0.3rem;
        padding: 15px;
    }
</style>
