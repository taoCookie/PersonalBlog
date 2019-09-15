<template>
  <div class="about">
    <img src="https://www.mochoublog.com/d/file/p/2018/pagebgpic/about.jpg" alt />
    <div class="content">
      <h3 class="about-me">关于我</h3>
      <div class="my-info">
        <h4>我的信息 | Information：</h4>
        <div class="info list">
          人物：sine
          <br />性别：男
          <br />年龄：97后
          <br />身高：&lt;2m
          <br />体重：&gt;55kg
          <br />现居：中国·湖北·武汉
          <br />职业：web前端工程师
        </div>
        <h4>技术方向 | Technology：</h4>
        <div class="technology list">
          1、掌握C基础语法、数据结构以。
          <br />2、熟悉HTML、CSS、Javascript、AJAX、JSON等Web页面技术(搬砖型)。
          <br />3、了解node.js。
          <br />4、熟悉MySQL数据库，能熟练地运用SQL语句。
          <br />5、熟悉Redis等NOSQL数据库。
          <br />6、熟悉VUE.js，做过几个VUE-cli搭建的项目。
          <br />7、熟悉微信小程序、mpvue。
          <br />8、会使用git、webpack等工具。
          <br />9、有良好的代码编写习惯(驼峰式编写以及注释和排版)，熟悉开发/使用文档的编写。
          <br />9、其他技术正在学习中！唯一能持久的竞争优势是胜过竞争对手的学习能力。
        </div>
        <h4>兴趣爱好 | Hobby：</h4>
        <div class="hobby list">
          1、喜欢编程，从会输出hello word!开始便喜欢上了。
          <br />2、喜欢电子竞技，工作之余放松身心。
          <br />3、喜欢旅游，立志看遍千山万水。
          <br />4、喜欢看电影，热爱科幻电影。
        </div>
        <h4>联系我 | Concat：</h4>
        <div class="concat list">
           1、微信：t1187783024
          <br />2、QQ：1187783024
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
img {
  width: 1519px;
  margin-left: -213px;
  height: 239px;
}
.about-me{
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
.my-info h4{
display: block;
    font-size: 0.83em;
    margin-block-start: 1.67em;
    margin-block-end: 1.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    margin-left: 48px;
}
.my-info .list{
    line-height: 26px;
    font-size: 14px;
    margin: 10px 0;
    width: 85%;
    padding: 10px 30px 10px 30px;
    color: #555;
    border-left: 4px solid #0cc;
}
.concat img{
    width: 150px;
}
/* .my-info .hobby{
    margin-bottom: 100px;
} */
</style>