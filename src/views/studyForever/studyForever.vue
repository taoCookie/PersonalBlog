<template>
    <div class="study">
        <img src="https://www.mochoublog.com/d/file/p/2018/pagebgpic/blog.jpg" alt="">
        <h3 class="friend-word">学无止境</h3>
        <debris></debris>
    </div>
</template>

<script>
import debris from '../../components/debris/debris';
export default {
    components: {
        debris,
    }
    
}
</script>
<style scoped>
img {
  width: 1519px;
  margin-left: -213px;
}    
.study h3{
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