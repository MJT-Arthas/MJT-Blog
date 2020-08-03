<template>
  <div class="demoWrapper">
    <el-input placeholder="请输入账号" v-model="us"></el-input>
    <el-input placeholder="请输入密码" v-model="ps" show-password></el-input>
    <div class="radio">
      <el-radio v-model="radio" label="1">早报</el-radio>
      <el-radio v-model="radio" label="2">晚报</el-radio>
    </div>
    {{ ps }}
    <el-button
      type="info"
      class="reportBtn"
      @click="report"
      v-loading.fullscreen.lock="fullscreenLoading"
      >提交</el-button
    >
  </div>
</template>

<script>
export default {
  name: "Demo",
  data() {
    return {
      us: "",
      ps: "",
      fullscreenLoading: false,
      radio: "1",
    };
  },
  methods: {
    report() {
      if (parseFloat(this.us).toString() == "NaN") {
        alert("请输入正确的学号");
        return;
      }
      this.fullscreenLoading = true;
      this.$axios({
        method: "post",
        url: "/api/miniReport",

        data: {
          us: this.us,
          ps: this.ps,
          time: 2,
        },
      }).then((res) => {
        let { err } = res.data;
        console.log(err);
        this.fullscreenLoading = false;
        if (err == 0) {
          alert("填报成功");
        } else {
          alert("填报失败");
        }
      });
    },
  },
};
</script>
<style lang="scss">
.demoWrapper {
  width: 300px;
  height: 63vh;
  margin: 0 auto;
  padding-top: 50px;
  .reportBtn {
    width: 300px;
  }
  .radio {
    margin: 20px 0;
  }
}
</style>
