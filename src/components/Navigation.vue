<template>
  <Menu
      default-active='1'
      class='el-menu-vertical-demo'
      @open='handleOpen'
      @close='handleClose'
  >

  </Menu>
</template>

<script>

import { Menu } from 'element-ui'

export default {
  name: "Navigation",
  components: {
    Menu
  }
}
</script>

<style scoped>

</style>
