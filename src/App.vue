<template>
  <div id="app">
    <blog-nav></blog-nav>

    <div class="content">
      <div class="left item">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
      <div class="right item">
        <ranking></ranking>
      </div>
    </div>




  </div>
</template>
<script>
import blogNav from "./components/nav/Nav";
import ranking from './components/ranking/ranking'
export default {
  components: {
    blogNav,
    ranking
  }
};
</script>

<style>
@import url("./assets/css/reset.css");
body{
  background-color: #f6f6f6;
}
.content{
  width: 100%;
  background-color: #fff;
}
.left{
  width: 50%;
  margin-left: 14%;
  background-color: #fff;

}
.right{
  width: 20%;
  margin-left: 20px;
}
.item{
  float: left;
}


</style>
