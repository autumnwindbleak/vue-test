<template>
  <Container direction='vertical'>
    <Header class='el-header'>
      this is header
    </Header>
    <Container>
      <Aside class='el-aside' width='200px'>
        Current Center is {{this.center}}
        <Button type='primary' @click="onClick">Get Current Center</Button>
      </Aside>
      <Main class='el-main'>
        <div id='openstreetmap' ref='myMap'></div>
      </Main>
    </Container>
  </Container>
</template>

<script>
import { Aside, Container, Header, Main, Button } from 'element-ui';
import L from 'leaflet'

export default {
  name: 'App',
  mounted() {
    this.initMap()
  },
  components: {
    Aside,
    Header,
    Main,
    Container,
    Button
  },
  data() {
    return {
      openStreetMap: null,
      center: null
    }
  },
  methods: {
    onClick() {
      this.center = this.openStreetMap.getCenter()
    },
    initMap() {
      this.openStreetMap = L.map('openstreetmap').setView([30.54610, 104.06854],15)
      // add the OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
      }).addTo(this.openStreetMap);
    }
  },
  destroyed () {
  }
}
</script>

<style scoped>
.el-header{
  background-color: #0000000f;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-aside {
  background-color: #ff00000f;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-main {
  background-color: #00ff000f;
  color: #333;
  text-align: center;
  line-height: 60px;
}
#openstreetmap {
  width: 100%;
  height: 600px ;
  z-index: 1;
}
</style>
