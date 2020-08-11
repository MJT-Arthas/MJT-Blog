<template>
  <div class="photoWrapper">
    <el-carousel :interval="4000" type="card" height="400px">
      <el-carousel-item v-for="item in img" :key="item.name">
        <!-- <h3 class="medium">{{ item.name }}</h3> -->
        <img :src="item.url" alt="" height="100%" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: [
        { name: 1, url: "https://s1.ax1x.com/2020/06/11/tbDAtf.jpg" },
        { name: 2, url: "/" },
        { name: 3, url: "/" },
        { name: 4, url: "/" },
        { name: 5, url: "/" },
        { name: 6, url: "/" },
      ],
    };
  },
};
</script>
<style lang="scss" scope>
.photoWrapper {
  min-height: 70vh;
  padding-top: 40px;

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}
</style>
