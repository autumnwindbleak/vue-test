<template>
  <Container direction="vertical">
    <Header class="el-header">
      this is header
    </Header>
    <Container>
      <Aside class="el-aside" width="200px">
        this is aside
      </Aside>
      <Main class="el-main">
        this is main
        <Button type="primary">Primary Button</Button>
      </Main>
    </Container>
  </Container>
</template>

<script>
import { Aside, Container, Header, Main, Button} from "element-ui";
export default {
  name: 'App',
  components: {
    Button,
    Aside,
    Header,
    Main,
    Container
  },
  data() {
    return {
    }
  },
  methods: {
  },
  destroyed () {
  }
}
</script>

<style>
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

</style>
