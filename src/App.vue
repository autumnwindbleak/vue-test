<template>
  <Container direction="vertical">
    <Header>
      this is header
    </Header>
    <Container>
      <Aside width="200px">
        this is aside
      </Aside>
      <Main>
        <h1>{{this.message}}</h1>
        <h2>Socket status: {{this.socketStatus}}</h2>
        <Button type="primary" @click="link">Link</Button>
        <Button type="secondary" @click="close">Disconnect</Button>
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
      path: 'ws://47.108.214.127:18092/test/one',
      socket: '',
      message: 'This is message',
      socketStatus: 'closed'
    }
  },
  methods: {
    link: function () {
      if(typeof(WebSocket) === "undefined"){
        alert("您的浏览器不支持socket")
      }else{
        // 实例化socket
        this.socket = new WebSocket(this.path)
        // 监听socket连接
        this.socket.onopen = this.open
        // 监听socket错误信息
        this.socket.onerror = this.error
        // 监听socket消息
        this.socket.onmessage = this.getMessage

        this.socketStatus = 'linked'
      }
    },
    open: function () {
      console.log("socket连接成功")
    },
    error: function () {
      console.log("连接错误")
    },
    getMessage: function (msg) {
      this.message = msg.data
      console.log(msg.data)
    },
    send: function () {
      // this.socket.send(params)
    },
    close: function () {
      this.socket.close()
      this.socketStatus = 'closed'
      console.log("socket已经关闭")
    }
  },
  destroyed () {
    // 销毁监听
    this.socket.onclose = this.close
  }
}
</script>

<style>
.el-header, .el-footer {
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


.reddiv {
  background-color: red;
}
.bluediv {
  background-color: blue;
}
.greendiv {
  background-color: green;
}
</style>
