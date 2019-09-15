<template>
    <div class="life">
        <img src="https://www.mochoublog.com/d/file/p/2018/pagebgpic/study.jpg" alt="">
        <h3 class="friend-word">时间轴</h3>
        <timeline></timeline>
    </div>
</template>

<script>
import timeline from '../../components/timeline/timeline';
export default {
    components: {
        timeline,
    }
}
</script>
<style scoped>
img {
  width: 1519px;
  margin-left: -213px;
}  
.life h3 {
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
</style>