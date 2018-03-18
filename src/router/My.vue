<template>
  <div style="height: 100%;">
    <yd-layout>
      <div class="my-info-header">
        <yd-navbar slot="navbar" bgcolor="" color="fff">
          <router-link to="#" slot="left">
            <div>设置</div>
          </router-link>
        </yd-navbar>
        <div class="my-info-flexbox">
          <yd-flexbox>
            <yd-flexbox-item>
              <div class="user-photo">
                <img src="//gw.alicdn.com/sns_logo/i4/T15D4oXixBXXartXjX.gif">
              </div>
              <div class="user-nick">
                胡新胜
                <yd-icon slot="icon" class="icon iconfont icon-dengji" custom color="#808069" size="0.4rem"></yd-icon>
              </div>
              <div class="user-mobile">
                13632505280
              </div>
            </yd-flexbox-item>
          </yd-flexbox>
          <div class="demo">
            <div>
              <div class="demo-rollnotice">
                <yd-icon slot="icon" class="icon iconfont icon-tuiguang " custom color="#FFFF00"
                         size="0.3rem"></yd-icon>
                <yd-rollnotice autoplay="2000">
                  <yd-rollnotice-item><span style="color:#4169E1;padding:0 5px;"> 荐 </span> 荣耀V9 3月超级钜惠！</yd-rollnotice-item>
                  <yd-rollnotice-item><span style="color:#4169E1;padding:0 5px;"> 荐 </span> 3.23京东超级品牌日格力盛典</yd-rollnotice-item>
                  <yd-rollnotice-item><span style="color:#4169E1;padding:0 5px;"> 荐 </span> 京东服饰 早春新品低至7折</yd-rollnotice-item>
                </yd-rollnotice>
              </div>
            </div>
          </div>
        </div>
      </div>
      <yd-tabbar>
        <yd-tabbar-item title="待付款" link="#">
          <yd-icon slot="icon" class="icon iconfont icon-daizhifudingdan " custom color="#999"
                   size="0.5rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="待发货" link="#">
          <yd-icon slot="icon" class="icon iconfont icon-daifahuo " custom color="#999"
                   size="0.5rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="待收货" link="#">
          <yd-icon slot="icon" class="icon iconfont icon-daishouhuo " custom color="#999"
                   size="0.5rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="待评价" link="#">
          <yd-icon slot="icon" class="icon iconfont icon-pingjia " custom color="#999"
                   size="0.5rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="退款/售后" link="#">
          <yd-icon slot="icon" class="icon iconfont icon-tuikuantuihuo " custom color="#999"
                   size="0.5rem"></yd-icon>
          <yd-badge slot="badge" type="danger">2</yd-badge>
        </yd-tabbar-item>
      </yd-tabbar>
      <div class="my-menu-list">
        <yd-cell-group>
          <yd-cell-item arrow>
            <yd-icon slot="icon" name="order" color="#999" size=".42rem"></yd-icon>
            <span slot="left">全部订单</span>
            <span slot="right">查看全部订单</span>
          </yd-cell-item>
        </yd-cell-group>
        <yd-cell-group>
          <yd-cell-item arrow>
            <yd-icon slot="icon" name="location" color="#999" size=".42rem"></yd-icon>
            <span slot="left">收货地址</span>
            <span slot="right"></span>
          </yd-cell-item>
        </yd-cell-group>
      </div>
      <yd-tabbar slot="tabbar" active-color="#09BB07" fontsize="0.24rem">
        <yd-tabbar-item title="首页" type="link" link="/">
          <yd-icon name="home" slot="icon" size="0.5rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="分类" type="link" link="/category">
          <yd-icon name="type" slot="icon" size="0.5rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="购物车" type="link" link="/cart">
          <yd-icon name="shopcart-outline" slot="icon" size="0.5rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="个人中心" type="link" link="/my" active>
          <yd-icon name="ucenter-outline" slot="icon" size="0.5rem"></yd-icon>
        </yd-tabbar-item>
      </yd-tabbar>
    </yd-layout>
  </div>
</template>

<script>
  import $ from 'jquery'

  export default {
    name: 'my',
    mounted () {

    },
    data () {
      return {}
    },
    methods: {}
  }
</script>
<style>
  .my-info-header .yd-navbar:after {
    border-bottom: 0;
  }

  .my-info-header {
    position: relative;
    height: 3.8rem;
    background: #d34201 url(//gw.alicdn.com/tfscom/TB10.51HFXXXXXqXpXXYx6l2pXX-750-235.jpg_q90) no-repeat top center;
    background-size: cover;
    color: #fff;
    border-bottom: 0;
  }

  .my-info-header .my-info-flexbox {
    padding: 0 15px;
    text-align: center;
  }

  .my-info-header .my-info-flexbox .user-photo {
    float: left;
    width: 1.867rem;
    height: 1.867rem;
    text-align: center;
    border-radius: 100%;
    padding: .067rem;
    background: rgba(255, 255, 255, .7);
    -webkit-transform: translateZ(1px);
    transform: translateZ(1px);
    overflow: hidden;
  }

  .my-info-header .my-info-flexbox .user-photo img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }

  .my-info-header .my-info-flexbox .user-nick {
    float: left;
    width: 100%;
    font-weight: bold;
    padding-left: 2.2rem;
    box-sizing: border-box;
    margin-top: -1.2rem;
    font-size: .4rem;
    display: -webkit-box;
    display: -moz-box;
  }

  .my-info-header .my-info-flexbox .user-mobile {
    float: left;
    width: 100%;
    padding-left: 2.2rem;
    box-sizing: border-box;
    font-weight: bold;
    margin-top: -.6rem;
    font-size: .3rem;
    display: -webkit-box;
    display: -moz-box;
  }

  .my-info-flexbox .yd-rollnotice {
    filter: Alpha(opacity=0);
    position: static; /* IE6、7、8只能设置position:static(默认属性) ，否则会导致子元素继承Alpha值 */
    *zoom: 1;
    background-color: rgba(0, 0, 0, 0);
  }

  .my-info-flexbox .demo-rollnotice img {
    width: 73px;
    height: 16px;
    margin-right: 4px;
  }

  .my-info-flexbox .demo-rollnotice {
    margin-top: 10px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 12px;
  }

  .my-menu-list {
    margin-top: 10px;
  }

  .my-menu-list .yd-cell-box {
    margin-bottom: 10px;
  }

  .yd-scrollview:after {
    height: 0px;
  }
</style>
