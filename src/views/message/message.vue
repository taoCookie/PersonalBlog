<template>
    <div class="msg">
        <img src="https://www.mochoublog.com/d/file/p/2018/pagebgpic/time.jpg" alt="">
        <h3 class="friend-word">网友留言</h3>
        <msg></msg>
    </div>
</template>

<script>
import msg from '../../components/msg/msg'
export default {
    components: {
        msg,
    }
}
</script>
<style scoped>
img {
  width: 1519px;
  margin-left: -213px;
}
.friend-word{
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