<template>
  <div class="editnote">
    <div class="wrapper">
      <img src="https://www.mochoublog.com/d/file/p/2018/pagebgpic/study.jpg" alt />

      <h3>编辑随笔</h3>
      <input class="inp" type="text" placeholder="请输入内容" v-model="value" />
      <button class="submit" @click="submit_note">提交</button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    submit_note(e) {
      if (this.value) {
        this.$store.dispatch("setNote", this.value);
      }
      this.value = '';
    }
  },
  data() {
    return {
      value: ""
    };
  }
};
</script>
<style scoped>
img {
  width: 1519px;
  margin-left: -213px;
}
.editnote h3 {
  font-size: 24px;
  padding: 20px;
}
.editnote .inp {
  width: 240px;
  height: 33px;
  padding-left: 10px;
  margin-left: 20px;
}
.editnote .submit {
  height: 37px;
  width: 80px;
  margin-left: 20px;
}
</style>