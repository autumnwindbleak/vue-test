<template>
  <baidu-map
      class='bm-view' ak='IK09ItUavVkbd6nMDUsfRLG3BsfHS2Rg'
      :center='center'
      :scroll-wheel-zoom="true"
      @ready='handler'

  />
</template>

<script>
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'

export default {
  name: 'App',
  components: {
    BaiduMap
  },
  data () {
    return {
      center: {lng: 0, lat: 0},
      // zoom: 3
    }
  },
  methods: {
    handler ({BMap, map}) {
      console.log(BMap,map)
      this.center = '成都'

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
