<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to MJT Arthas's Vue.js Web" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.home {
  height: 70vh;
}
.clearfix {
  *zoom: 1;
}
.clearfix:after {
  content: "";
  display: block;
  clear: both;
}
</style>
