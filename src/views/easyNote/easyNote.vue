<template>
  <div class="note">
    <img src="https://www.mochoublog.com/d/file/p/2018/pagebgpic/study.jpg" alt />
    <h3>人生语录：</h3>
    <ul>
      <li v-for="(note, index) in notes" :key="index">
        <el-card shadow="hover">{{note}}</el-card>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notes: [
        "什么叫人生若只如初见？",
        "什么叫人生若只如初见？",
        "什么叫人生若只如初见？",
        "什么叫人生若只如初见？",
        "什么叫人生若只如初见？",
        "什么叫人生若只如初见？",
        "什么叫人生若只如初见？",
        "什么叫人生若只如初见？",
        "什么叫人生若只如初见？"
      ]
    };
  }
};
</script>
<style scoped>
.note h3 {
  margin: 11px 0px 7px 50px;
  font-size: 22px;
  font-weight: 700;
  width: 120px;
  background-size: 40px;
  border-bottom: #000 1px dashed;
  padding-left: 10px;
  padding-bottom: 5px;
  display: inline-block;
}
img {
  width: 1519px;
  margin-left: -213px;
}
.note ul {
  background-color: #00A7EB;
}
.note ul li {
  margin: 20px 0;
}
.el-card {
  width: 90%;
  margin: 20px 0;
  border-top: 1px solid #c3edf8;
  border-bottom: 1px solid #c3edf8;
  margin-left: 36px;
}
.el-card:hover {
  transform: scale(1.05, 1.05);
  transition: all 1s ease;
}
.note ul li .el-card .el-card__body {
    padding: 20px;
    color: #f26328;
    text-shadow: 1px 1px 3px;
}
</style>