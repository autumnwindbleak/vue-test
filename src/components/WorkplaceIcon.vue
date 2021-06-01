<template>
  <bm-overlay
      ref="workplaceIcon"
      :class="{sample: true, active}"
      pane="markerPane"
      @draw="draw">
    <img alt="logoimg" :src="imgUrl" width="100%" height="100%" @click="handleClick"/>
  </bm-overlay>
</template>

<script>
import BmOverlay from 'vue-baidu-map/components/overlays/Overlay'
export default {
  props: ['text','imgUrl', 'position', 'active'],
  watch: {
    position: {
      handler () {
        this.$refs.workplaceIcon.reload()
      },
      deep: true
    }
  },
  methods: {
    handleClick () {
      global.alert('Well done.')
    },
    draw ({el, BMap, map}) {
      const {lng, lat} = this.position
      const pixel = map.pointToOverlayPixel(new BMap.Point(lng, lat))
      el.style.left = pixel.x - 10 + 'px'
      el.style.top = pixel.y - 10 + 'px'
    }
  },
  components:{
    BmOverlay,
  }
}
</script>

<style>
.sample {
  width: 40px;
  height: 40px;
  /*line-height: 40px;*/
  /*background: rgba(0,0,0,0.5);*/
  overflow: hidden;
  /*box-shadow: 0 0 5px #000;*/
  /*color: #fff;*/
  text-align: center;
  /*padding: 10px;*/
  position: absolute;
}
.sample.active {
  /*background: rgba(0,0,0,0.75);*/
  /*color: #fff;*/
}
</style>
