<template>
  <yd-layout>
    <yd-navbar slot="navbar" title="管理收货地址">
      <div @click="$router.go(-1)" slot="left">
        <yd-navbar-back-icon></yd-navbar-back-icon>
      </div>
    </yd-navbar>
    <div class="yd-cell-box-address">
      <div class="receiver-box">
        <div class="yd-cell-item-left">胡新胜</div>
        <div class="yd-cell-item-right">13632505280</div>
      </div>
      <div class="receiver-address">
        <div class="yd-cell-item-center">湖南省湘潭市雨湖区九华经济开发区学府路1号新都汇4栋5单元7004室</div>
      </div>
      <div class="receiver-address-btns">
        <div class="yd-cell-item-left">
            <yd-checkbox size="16"><span style="font-size: 14px;">默认地址</span></yd-checkbox>
        </div>
        <div class="yd-cell-item-right">
          <span>
            <yd-icon slot="icon" name="feedback" size=".32rem" color="#666"></yd-icon>编辑
          </span>
          <span>
            <yd-icon slot="icon" name="delete" size=".32rem" color="#666"></yd-icon>删除
          </span>
        </div>
      </div>
    </div>
    <div class="yd-cell-box-address">
      <div class="receiver-box">
        <div class="yd-cell-item-left">胡新胜</div>
        <div class="yd-cell-item-right">13632505280</div>
      </div>
      <div class="receiver-address">
        <div class="yd-cell-item-center">湖南省湘潭市雨湖区九华经济开发区学府路1号新都汇4栋5单元7004室</div>
      </div>
      <div class="receiver-address-btns">
        <div class="yd-cell-item-left">
          <yd-checkbox size="16"><span style="font-size: 14px;">默认地址</span></yd-checkbox>
        </div>
        <div class="yd-cell-item-right">
          <span>
            <yd-icon slot="icon" name="feedback" size=".32rem" color="#666"></yd-icon>编辑
          </span>
          <span>
            <yd-icon slot="icon" name="delete" size=".32rem" color="#666"></yd-icon>删除
          </span>
        </div>
      </div>
    </div>
    <div slot="tabbar">
      <div class="footer-btns">
          <yd-button size="large" type="warning" @click.native="handleClick">添加新地址</yd-button>
      </div>
    </div>
  </yd-layout>
</template>

<script>
  /** import $ from 'jquery' */

  export default {
    name: 'myAddress',
    data () {
      return {}
    },
    methods: {
      handleClick () {
        let that = this;
        that.$router.push('/addNewAddress')
      }
    },
    mounted () {
    }
  }
</script>
<style>
  .yd-cell-box-address {
    float: left;
    width: 100%;
    background-color: #fff;
    border-bottom: 5px solid #f8f8f8;
  }

  .yd-cell-box-address .yd-cell-item-left {
    float: left;
    width: 50%;
    padding: 10px 15px;
  }

  .yd-cell-box-address .yd-cell-item-right {
    float: left;
    text-align: right;
    width: 50%;
    padding: 10px 15px;
  }
  .yd-cell-box-address .yd-cell-item-right span{
    padding-left:10px;
    font-size:14px;
  }
  .yd-cell-box-address .yd-cell-item-center {
    width: 100%;
    float: left;
    padding: 0 15px;
    border-bottom: 1px solid #f8f8f8;
  }

  .yd-cell-item-center .default-address {
    color: #eb5211;
  }

  .yd-cell-box-address .receiver-box {
    font-size: 14px;
  }

  .yd-cell-box-address .receiver-address {
    font-size: 13px;
  }

  .footer-btns {
    float: left;
    width: 100%;
  }

  .yd-scrollview:after {
    height: 0px;
  }
</style>
