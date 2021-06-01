<template>
  <Container direction='vertical'>
    <baidu-map
        class='bm-view' ak='IK09ItUavVkbd6nMDUsfRLG3BsfHS2Rg'
        :center='center'
        :zoom='zoom'
        :scroll-wheel-zoom="true"
        @ready='handler'
    >
      <workplace-icon
          :position="{lng: 104.077967 , lat: 30.549232}"
          :imgUrl="require('./assets/logo.png')"
          :active="active"
          text="hello"
          @mouseover.native="active = true"
          @mouseleave.native="active = false">
      </workplace-icon>
      <bm-geolocation
          anchor='BMAP_ANCHOR_BOTTOM_RIGHT'
          :showAddressBar='true'
          :autoLocation='true'
          @locationSuccess='logLocation'
      />
    </baidu-map>
    <Button type='primary' @click="drawIcon">画图</Button>
  </Container>
</template>

<script>
import BaiduMap from 'vue-baidu-map/components/map/Map'
import BmGeolocation from 'vue-baidu-map/components/controls/Geolocation'
import { Container, Button } from 'element-ui'
import WorkplaceIcon from "@/components/WorkplaceIcon";
// 104.077967 30.549232
export default {
  name: 'App',
  components: {
    BaiduMap,
    BmGeolocation,
    Button,
    Container,
    WorkplaceIcon
  },
  data () {
    return {
      //center是坐标的时候，zoom一定要设置，否则就不渲染，center是城市名字的时候zoom会被自动设置
      center: {lng: 116.404, lat: 39.915},
      zoom: 15,
      active: false,
    }
  },
  methods: {
    handler ({BMap, map}) {
      console.log(BMap,map)
      //天府三街坐标
      this.center = {lng: 104.075111, lat: 30.552450}

      this.zoom = 15
    },
    logLocation({point, AddressComponent, marker}) {
      console.log(point)
      console.log(AddressComponent)
      console.log(marker)
    },
    drawIcon() {

    }
  },
}
</script>

<style scoped>
  .bm-view {
    width: 100%;
    height: 500px;
  }
</style>
