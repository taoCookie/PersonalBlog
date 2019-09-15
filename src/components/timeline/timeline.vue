<template>
  <div class="timeline">
    <ul>
      <li v-for="(item, index) in diary" :key="index">
        <span class="time">{{item.time}}</span>
        <span class="wrap">
          <span class="circle"></span>
          <span class="label">{{item.label}}</span>
        </span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      diary: [
        {
          time: "2019-8-31",
          label: "网页设计小项目终于完成了。"
        },
        {
          time: "2019-8-31",
          label: "网页设计小项目终于完成了。"
        },
        {
          time: "2019-8-31",
          label: "网页设计小项目终于完成了。"
        },
        {
          time: "2019-8-31",
          label: "网页设计小项目终于完成了。"
        },
        {
          time: "2019-8-31",
          label: "网页设计小项目终于完成了。"
        }
      ]
    };
  }
};
</script>
<style scoped>
.timeline ul {
  padding-top: 20px;
}
.timeline ul li{
    position: relative;
}
.timeline ul li .time {
  position: relative;
  line-height: 32px;
  padding-right: 40px;
  padding-left: 50px;
  color: #999;
  line-height: 36px;
}
.timeline ul li .circle {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid #e0dfdf;
  margin-left: -20px;
  position: absolute;
  top: 11px;
}
.timeline ul li .label {
  padding-left: 14px;
  color: #555;
}
.timeline ul li:hover .label{
    color: #00A7EB;
    cursor: pointer;
}
.timeline ul li:hover .circle{
    background-color: #00A7EB;
}
</style>