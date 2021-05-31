<template>
  <bm-overlay
      ref='workplaceIcon'
      :class='{sample: true, active}'
      pane='labelPan'
      @draw="draw"
  >
    <div v-text="text" @click="handleClick"></div>
  </bm-overlay>
</template>

<script>
import BmOverlay from 'vue-baidu-map/components/overlays/Overlay'
export default {
  name: "WorkplaceIcon",
  props:['text','position','active'],
  watch:{
    position: {
      handler() {
        this.$refs.workplaceIcon.reload()
      },
      deep: true
    }
  },
  components: {
    BmOverlay
  },
  methods: {
    handleClick () {
      global.alert('Well done.')
    },
    draw({el, BMap, map}) {
      console.log(this.position)
      const {lng, lat} = this.position
      const pixel = map.pointToOverlayPixel(new BMap.Point(lng, lat))
      console.log(pixel)
      console.log(el)
      el.style.left = pixel.x - 60 + 'px'
      el.style.top = pixel.y - 20 + 'px'
    }
  }
}
</script>

<style scoped>
  .sample {
    width: 120px;
    height: 40px;
    line-height: 40px;
    background: rgba(0,0,0,0.5);
    overflow: hidden;
    box-shadow: 0 0 5px #000;
    color: #fff;
    text-align: center;
    padding: 10px;
    position: absolute;
  }
  .sample.active {
    background: rgba(0,0,0,0.75);
    color: #fff;
  }
</style>
