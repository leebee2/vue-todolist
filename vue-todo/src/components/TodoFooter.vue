<template>
  <div class="clearAllContainer">
    <span class="claerAllBtn" v-on:click="clearTodo">전체삭제</span>
  </div>
</template>

<script>
export default {
  methods : {
    clearTodo() {
      // this.$emit('clearAll');
      this.$store.commit('clearAllItems');
    }
  }
}
</script>


<style scoped>
/* scoped : 해당 스크립트에서만 스타일이 적용될 수 있게 하는 속성 */
.clearAllContainer{
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin : 0 auto;
}
.claerAllBtn{
  color : #e20303;
  display: block;
}
</style>