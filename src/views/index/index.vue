<template>
  <div>
    <img src="https://www.mochoublog.com/d/file/p/2018/pagebgpic/life.jpg" alt />
    <div class="main">
      <div class="new-article">
        <app-article></app-article>
      </div>
    </div>
  </div>
</template>

<script>
import appArticle from "../../components/article/article";
export default {
  data() {
    return {};
  },
  components: {
    appArticle
  }
};
</script>
<style scoped>
img {
  width: 1519px;
  margin-left: -213px;
}
</style>