<template>
  <div class="debris">
    <div class="debris-wrapper">
      <ul>
        <li v-for="(item, index) in knowledge" :key="index">
          
          
                <div class="mask">
              </div>
                <img :src="item.img">
            <p>{{item.title}}</p>
            <div class="read">阅读</div>

        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      knowledge: [
        {
          img:
            "https://www.mochoublog.com/d/file/study/other/2019/06-18/29faad20bcff1b73ade85c45c82c1a00.jpg",
          title: "CentOS7 常用命令集合整理",
          content: ""
        },
        {
          img:
            "https://www.mochoublog.com/d/file/study/other/2019/06-18/29faad20bcff1b73ade85c45c82c1a00.jpg",
          title: "CentOS7 常用命令集合整理",
          content: ""
        },
        {
          img:
            "https://www.mochoublog.com/d/file/study/other/2019/06-18/29faad20bcff1b73ade85c45c82c1a00.jpg",
          title: "CentOS7 常用命令集合整理",
          content: ""
        },
        {
          img:
            "https://www.mochoublog.com/d/file/study/other/2019/06-18/29faad20bcff1b73ade85c45c82c1a00.jpg",
          title: "CentOS7 常用命令集合整理",
          content: ""
        }
      ]
    };
  }
};
</script>
<style scoped>
.debris ul li {
  float: left;
  overflow: hidden;
  width: 40%;
  margin: 20px 37px;
  position: relative;
  cursor: pointer;
}
.debris ul li img {
  width: 100%;
}
.mask{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.5);
    z-index: 100;
}
.mask:hover{
    opacity: .4;
    transition: all 1s ease-in-out;
}
.debris p{
    position: absolute;
    width: 200px;
    left: calc(50% - 100px);
    top: 50px;
    color: #fff;
    z-index: 300;
    font-size: 16px;
}
.debris .read{
    position: absolute;
    width: 50px;
    height: 30px;
    left: calc(50% - 25px);
    color: #fff;
    z-index: 300;
    top: 85px;
    text-align: center;
    font-size: 15px;
    line-height: 30px;
    border: 1px solid #fff;
    border-radius: 5px;
    padding: 2px 5px;
}
.debris .read:hover{
    background-color: #fff;
    color: #000;
}
</style>