<template>
  <div>
    <div class="msg-wrapper">
      <ul>
        <li v-for="(item, index) in msg" :key="index">
          <div class="note">
            <img :src="item.avator" class="avator" />
            <div class="wrap">
              <div class="name">{{item.name}}</div>
              <div class="word">{{item.word}}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: [
        {
          avator:
            "http://img5.imgtn.bdimg.com/it/u=4034234605,455270330&fm=26&gp=0.jpg",
          name: "星星",
          word: "一闪一闪亮晶晶，满天都是小星星"
        },
        {
          avator:
            "http://img3.imgtn.bdimg.com/it/u=3603761103,54769728&fm=26&gp=0.jpg",
          name: "星星",
          word: "一闪一闪亮晶晶，满天都是小星星"
        },
        {
          avator:
            "http://img4.imgtn.bdimg.com/it/u=555518719,1511937273&fm=26&gp=0.jpg",
          name: "星星",
          word: "一闪一闪亮晶晶，满天都是小星星"
        }
      ]
    };
  }
};
</script>
<style scoped>
.msg-wrapper ul{
  padding-top: 20px;
}
.msg-wrapper ul li {
  height: 90px;
  border-bottom: 1px solid #f26328;
}
.msg-wrapper ul li:nth-of-type(1){
    border-top: 1px solid #f26328;
}
.note{
    padding-top: 20px;
}
.avator {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.wrap {
  float: right;
  margin-right: 458px;
}
.name{
    padding-bottom: 15px;
}
</style>