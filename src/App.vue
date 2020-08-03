<template>
  <div id="app">
    <CommonHeader />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
    <CommonFooter visit="null" class="footer" />
  </div>
</template>
<script>
import CommonHeader from "@/components/CommonHeader.vue";
import CommonFooter from "@/components/CommonFooter.vue";
export default {
  name: "App",
  components: {
    CommonHeader,
    CommonFooter,
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  a {
    text-decoration: none;
    /* color: #909399; */
  }
  a:link {
    text-decoration: none; /* 指正常的未被访问过的链接*/
  }
  a:visited {
    text-decoration: none; /*指已经访问过的链接*/
  }
  a:hover {
    text-decoration: none; /*指鼠标在链接*/
  }
  a:active {
    text-decoration: none; /* 指正在点的链接*/
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
