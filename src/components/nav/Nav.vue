<template>
  <div class="nav">
    <nav class="nav-wrapper">
      <div class="title">sine个人博客</div>
      <div class="list">
        <ul>
          <li><router-link tag="div" to="/">首页</router-link></li>
          <li><router-link tag="div" to="/study">学无止境</router-link></li>
          <li><router-link tag="div" to="/life">时间轴</router-link></li>
          <li><router-link tag="div" to="/note">随笔</router-link></li>
          <li><router-link tag="div" to="/message">留言</router-link></li>
          <li><router-link tag="div" to="/about">关于</router-link></li>
        </ul>
      </div>
      <div class="search">
        <el-input class="inp" v-model="input" placeholder="请输入内容"></el-input>
        <button class="btn el-icon-search" >搜索</button>
      </div>
    </nav>
  </div>
  
</template>

<script>       
export default {
  data() {
    return {
      input: ""
    };
  }
};
</script>

<style>
.nav-wrapper {
  width: 100%;
  height: 46px;
  overflow: hidden;
  background-color: rgba(0, 139, 139, 0.9);
  position: relative;
}
.title {
  float: left;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  line-height: 46px;
  margin-left: 13%;
}
.list {
  float: right;
  margin-right: 36%;
}
.list ul li {
  float: left;
  line-height: 46px;
  font-size: 16px;
  color: #fff;
  margin-right: 40px;
  cursor: pointer;
}
.nav .nav-wrapper ul li:hover {
  color: #f65a8a;
}
.search{
    position: absolute;
    right: 26%;
    top: 50%;
    margin-top: -15px;
}
.search .el-input__inner{
    height: 30px;
    width: 140px;
}
.search .btn{
    position: absolute;
    right: -60px;
    width: 55px;
    height: 30px;
    background-color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: rgba(0, 139, 139, 0.9);
    padding: 0;
}

</style>