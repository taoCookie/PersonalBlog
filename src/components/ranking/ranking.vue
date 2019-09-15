<template>
  <div class="ranking">
    <div class="box">点击排行</div>
    <ul>
      <li v-for="(item, index) in rank" :key="index">
        <h3 class="title">{{item.title}}</h3>
        <div class="view">
            <img :src="item.img" alt />
            <p>{{item.content}}</p>
        </div>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  data() {
    return {
      rank: [
        {
          title: "有创意的鼠标悬停效果集锦",
          img:
            "https://www.yangqq.com/d/file/jstt/css3/2014-06-28/8438184fe2ec592f7f9e14dc8a410fe8.jpg",
          content:
            "就拿我自己来说吧，有时候会很矛盾，设计好的作品，不把它分享出来，会觉得待在自己电脑里面实在是没有意义。干脆就发布出去吧。我也害怕收到大家不好的评论，有些评论，可能说者无意"
        },{
          title: "有创意的鼠标悬停效果集锦",
          img:
            "https://www.yangqq.com/d/file/jstt/css3/2014-06-28/8438184fe2ec592f7f9e14dc8a410fe8.jpg",
          content:
            "就拿我自己来说吧，有时候会很矛盾，设计好的作品，不把它分享出来，会觉得待在自己电脑里面实在是没有意义。干脆就发布出去吧。我也害怕收到大家不好的评论，有些评论，可能说者无意"
        },
        {
          title: "有创意的鼠标悬停效果集锦",
          img:
            "https://www.yangqq.com/d/file/jstt/css3/2014-06-28/8438184fe2ec592f7f9e14dc8a410fe8.jpg",
          content:
            "就拿我自己来说吧，有时候会很矛盾，设计好的作品，不把它分享出来，会觉得待在自己电脑里面实在是没有意义。干脆就发布出去吧。我也害怕收到大家不好的评论，有些评论，可能说者无意"
        },{
          title: "有创意的鼠标悬停效果集锦",
          img:
            "https://www.yangqq.com/d/file/jstt/css3/2014-06-28/8438184fe2ec592f7f9e14dc8a410fe8.jpg",
          content:
            "就拿我自己来说吧，有时候会很矛盾，设计好的作品，不把它分享出来，会觉得待在自己电脑里面实在是没有意义。干脆就发布出去吧。我也害怕收到大家不好的评论，有些评论，可能说者无意"
        }
      ]
    };
  }
};
</script>

<style scoped>
.box {
  padding: 0 10px;
  line-height: 40px;
  height: 40px;
  font-size: 18px;
  background-color: #349075;
  color: #fff;
}
.title{
    color: #555;
    font-size: 14px;
    font-weight: 600;
    margin-left: 10px;
    display: block;
}
.ranking{
    padding-top: 241px;
}
.ranking ul{
    background-color: #fff;
}
.ranking ul img{
    width: 126px;
    margin-left: 10px;
}
.ranking ul li img:hover{
    cursor: pointer;
    transform: scale(1.05,1.05);
    box-shadow: 1px -1px 10px rgba(0,0,0,.7)
}
.ranking ul li{
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
}
.ranking ul p{
    color: #888;
    line-height: 24px;
    font-size: 14px;
     overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-line-clamp:3;
    -webkit-box-orient:vertical;
    text-overflow: ellipsis;
    cursor: pointer;
}
.view{
    display: inline-block;
    position: relative;
}
.view p{
    position: absolute;
    width: 150px;
    top: -2px;
    left: 148px;
}

</style>