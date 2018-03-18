<template>
  <div style="height: 100%;">
    <yd-layout>
      <yd-navbar slot="navbar" class="balanced" title="商城首页"></yd-navbar>
      <div style="position: absolute;top:0;z-index: 999;width:100%; ">
        <yd-search :result="result" fullpage v-model="value2" :item-click="itemClickHandler" :on-submit="submitHandler"></yd-search>
      </div>
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

      <yd-pullrefresh :callback="initList" ref="pullrefreshDemo">
        <yd-infinitescroll :callback="loadList" ref="infinitescrollDemo">
          <yd-list theme="4" slot="list">
            <yd-list-item v-for="(item, key) in list" :key="key" type="link" href="/detail?id=${item.url}">
              <img slot="img" :src="item.img">
              <span slot="title">{{item.title}}</span>
              <yd-list-other slot="other">
                <div>
                  <span class="list-price"><em>¥</em>{{item.marketprice}}</span>
                  <span class="list-del-price">¥{{item.productprice}}</span>
                </div>
                <div></div>
              </yd-list-other>
            </yd-list-item>
          </yd-list>
          <!-- 数据全部加载完毕显示 -->
          <span slot="doneTip">别再拉啦，我是有底线的...</span>
          <!-- 加载中提示，不指定，将显示默认加载中图标 -->
          <yd-list-loading></yd-list-loading>
        </yd-infinitescroll>
      </yd-pullrefresh>
      <yd-backtop></yd-backtop>
      <yd-tabbar slot="tabbar" active-color="#09BB07" fontsize="0.24rem">
        <yd-tabbar-item title="首页" type="link" link="/" active>
          <yd-icon name="home" slot="icon" size="0.5rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="分类" type="link" link="/category">
          <yd-icon name="type" slot="icon" size="0.5rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="购物车" type="link" link="/cart">
          <yd-icon name="shopcart-outline" slot="icon" size="0.5rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="个人中心" type="link" link="/my">
          <yd-icon name="ucenter-outline" slot="icon" size="0.5rem"></yd-icon>
        </yd-tabbar-item>
      </yd-tabbar>
    </yd-layout>
  </div>
</template>

<script>
import $ from 'jquery'

var loadData = function (page, pageSize, callback) {
  $.ajax({
    url: 'http://list.ydui.org/getdata.php?type=backposition',
    type: 'GET',
    data: {
      page: page,
      pagesize: pageSize
    },
    /** 指定服务器返回的数据类型 */
    dataType: 'jsonp',
    success: function (data) {
      callback(data)
    }

  })
}
export default {
  name: 'home',
  mounted () {
    let that = this
    loadData(this.page, this.pageSize, function (data) {
      let _list = data
      that.list = that.list.concat(_list)
      if (_list.length < that.pageSize || that.page === 3) {
        /** 所有数据加载完毕 */
        that.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.loadedDone')
        return
      }

      /** 单次请求数据完毕 */
      that.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.finishLoad')

      that.page++
    })
  },
  data () {
    return {
      page: 1,
      pageSize: 10,
      list: [],
      value2: '',
      result: []
    }
  },
  methods: {
    initList () {
      let that = this
      that.list = []
      that.page = 1
      loadData(that.page, that.pageSize, function (data) {
        let _list = data
        that.list = that.list.concat(_list)
        that.$dialog.toast({
          mes: _list.length > 0 ? '为您更新了' + _list.length + '条内容' : '已是最新内容'
        })
        that.$refs.pullrefreshDemo.$emit('ydui.pullrefresh.finishLoad')
        that.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.reInit')
      })
    },
    loadList () {
      let that = this
      loadData(that.page, that.pageSize, function (data) {
        let _list = data
        that.list = that.list.concat(_list)
        if (_list.length < that.pageSize || that.page === 3) {
          /** 所有数据加载完毕 */
          that.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.loadedDone')
          return
        }

        /** 单次请求数据完毕 */
        that.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.finishLoad')
        that.page++
      })
    },
    getResult(val) {
      if (!val) return [];
      return [
        'Apple', 'Banana', 'Orange', 'Durian', 'Lemon', 'Peach', 'Cherry', 'Berry',
        'Core', 'Fig', 'Haw', 'Melon', 'Plum', 'Pear', 'Peanut', 'Other'
      ].filter(value => new RegExp(val, 'i').test(value));
    },
    itemClickHandler(item) {
      this.$dialog.toast({mes: `搜索：${item}`});
    },
    submitHandler(value) {
      this.$dialog.toast({mes: `搜索：${value}`});
    }
  },
  watch: {
    value2(val) {
      this.result = this.getResult(val);
    }
  }
}
</script>
<style>
  .yd-scrollview:after {
    height: 0px;
  }
  .yd-search-input>.search-input .search-icon:after {
    color: #fff;
  }
  .yd-search {
    background-color:rgba(255,255,255,0.3);
    border: 0;
  }
  .yd-search-input {
    background-color:rgba(255,255,255,0);
    border: 0;
  }
  input::-webkit-input-placeholder { color:#0f0f0f; }
  .yd-search-input>.search-input{
    background-color:rgba(255,255,255,0.3);
  }
  input[disabled], input[readonly]:not(.cloned-text-input), select[disabled], select[readonly], textarea[disabled], textarea[readonly]:not(.cloned-text-input) {
    background-color:rgba(255,255,255,0.2);
  }
  .yd-search-show .yd-search-input {
    background-color: #efeff4;
    border: 0;
  }

  .yd-search-input:before{
    border:none;
  }
  .yd-search-input:after{
    border:none;
  }
</style>
