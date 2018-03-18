<template>
  <yd-layout>
    <yd-navbar slot="navbar" title="添加新地址">
      <div @click="$router.go(-1)" slot="left">
        <yd-navbar-back-icon></yd-navbar-back-icon>
      </div>
      <div @click="saveAddress" slot="right">
        保存
      </div>
    </yd-navbar>
    <div class="new-address-info">
      <yd-cell-group>
        <yd-cell-item>
          <span slot="left">收件人：</span>
          <yd-input slot="right" v-model="input3" :debug="true" required placeholder="请输入收件人"></yd-input>
        </yd-cell-item>

        <yd-cell-item>
          <span slot="left">联系电话：</span>
          <yd-input slot="right" v-model="input4" :debug="true" regex="mobile" required placeholder="请输入手机号码"></yd-input>
        </yd-cell-item>

        <yd-cell-item arrow>
          <span slot="left">所在地区：</span>
          <input slot="right" type="text" @click.stop="show1 = true" required v-model="model1" readonly placeholder="请选择收货地址">
        </yd-cell-item>
        <yd-cell-group>
          <yd-cell-item>
            <yd-textarea slot="right" placeholder="详细地址" required maxlength="100"></yd-textarea>
          </yd-cell-item>
        </yd-cell-group>

      </yd-cell-group>
    </div>
    <div class="default-address-set">
      <yd-cell-group>
        <yd-cell-item>
          <span slot="left">设为默认地址</span>
          <span slot="right"><yd-switch slot="right" v-model="defaultAddress"></yd-switch></span>
        </yd-cell-item>
      </yd-cell-group>
    </div>
    <yd-cityselect v-model="show1" :callback="result1" :items="district"></yd-cityselect>
  </yd-layout>
</template>

<script>
  /** import $ from 'jquery' */
  import District from 'ydui-district/dist/jd_province_city_area_id';

  export default {
    name: 'addNewAddress',
    data () {
      return {
        input3: '',
        input4: '',
        input5: '',
        show1: false,
        model1: '',
        district: District,
        defaultAddress: false
      }
    },
    methods: {
      result1 (ret) {
        this.model1 = ret.itemName1 + ' ' + ret.itemName2 + ' ' + ret.itemName3;
      },
      saveAddress () {
      }
    },
    mounted () {
    }
  }
</script>
<style>
  .new-address-info .yd-cell-box {
    margin-bottom: 10px;
  }

  .default-address-set .yd-checkbox {
    padding-right: 0;
  }
</style>
