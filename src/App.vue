<template>
  <baidu-map
      class='bm-view' ak='IK09ItUavVkbd6nMDUsfRLG3BsfHS2Rg'
      :center='center'
      :scroll-wheel-zoom="true"
      @ready='handler'
  >
    <bm-geolocation
        anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
        :showAddressBar="true"
        :autoLocation="true"
        @locationSuccess="logLocation"
    />
  </baidu-map>
</template>

<script>
import BaiduMap from 'vue-baidu-map/components/map/Map'
import BmGeolocation from 'vue-baidu-map/components/controls/Geolocation'
export default {
  name: 'App',
  components: {
    BaiduMap,
    BmGeolocation
  },
  data () {
    return {
      center: {lng: 0, lat: 0},
    }
  },
  methods: {
    handler ({BMap, map}) {
      console.log(BMap,map)
      this.center = '北京'
    },
    logLocation({point, AddressComponent, marker}) {
      console.log(point)
      console.log(AddressComponent)
      console.log(marker)
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
