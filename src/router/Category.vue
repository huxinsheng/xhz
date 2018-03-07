<template>
  <div style="height: 100%;">
    <yd-layout>
      <yd-navbar slot="navbar" class="balanced" title="商品分类"></yd-navbar>
      <yd-scrolltab>
        <yd-scrolltab-panel label="空调" icon="demo-icons-category1">
          <div style="height: 350px;">
            <yd-grids-group :rows="2">
              <yd-grids-item>
                <img slot="icon" src="http://static.ydcss.com/ydui/img/logo.png">
                <span slot="text">image</span>
              </yd-grids-item>
              <yd-grids-item>
                <yd-icon slot="icon" name="home" color="#FF685D"></yd-icon>
                <span slot="text">iconfont</span>
              </yd-grids-item>
            </yd-grids-group>
          </div>
        </yd-scrolltab-panel>

        <yd-scrolltab-panel label="冰箱" icon="demo-icons-category2" active>
          <div style="height: 350px;">
            <yd-grids-group :rows="2">
              <yd-grids-item>
                <img slot="icon" src="http://static.ydcss.com/ydui/img/logo.png">
                <span slot="text">image</span>
              </yd-grids-item>
              <yd-grids-item>
                <yd-icon slot="icon" name="home" color="#FF685D"></yd-icon>
                <span slot="text">iconfont</span>
              </yd-grids-item>
            </yd-grids-group>
          </div>
        </yd-scrolltab-panel>

        <yd-scrolltab-panel label="洗衣机" icon="demo-icons-category3">
          <div style="height: 350px;">
            <yd-grids-group :rows="2">
              <yd-grids-item>
                <img slot="icon" src="http://static.ydcss.com/ydui/img/logo.png">
                <span slot="text">image</span>
              </yd-grids-item>
              <yd-grids-item>
                <yd-icon slot="icon" name="home" color="#FF685D"></yd-icon>
                <span slot="text">iconfont</span>
              </yd-grids-item>
            </yd-grids-group>
          </div>
        </yd-scrolltab-panel>
        <!-- ... -->
      </yd-scrolltab>
      <yd-tabbar slot="tabbar" active-color="#09BB07" fontsize="0.24rem">
        <yd-tabbar-item title="首页" type="link" link="/">
          <yd-icon name="home" slot="icon" size="0.5rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="分类" type="link" link="/category" active>
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
/** import $ from 'jquery' */

export default {
  name: 'Home',
  mounted () {

  },
  data () {
    return {
      page: 1,
      pageSize: 10,
      list: []
    }
  },
  methods: {}
}
</script>
