<template>
  <div class="inputBox shadow">
    <!-- v-model : input에 입력된 텍스트값을 맵핑하는 역할 -->
    <input type="text" @keypress.enter.prevent="addTodo" placeholder="할일을 입력해주세요." v-model="newtodoItems" />
    <span class="addContainer" v-on:click="addTodo">
      <font-awesome-icon icon="fa-solid fa-plus" class="addBtn" />
    </span>

    <alertModal v-if="showModal" @close="showModal = false">
      <!-- 
          slot : 모달에 있는 값을 재정의하는
        -->
      <h3 slot="header">
        경고!
        <font-awesome-icon icon="fa-solid fa-times" class="closeModalBtn" @click="showModal = false" />
      </h3>
      <div slot="body">할일을 입력해주세요.</div>
    </alertModal>
  </div>
</template>

<script>
import alertModal from './common/alertModal.vue';

export default {
  data() {
    return {
      newtodoItems : "",
      showModal : false
    }
  },
  methods : {
    addTodo() {
      if(this.newtodoItems !== ''){
        this.$store.commit('addOneItem', this.newtodoItems);
        this.clearInput();
      }else if(!this.showModal){
        this.showModal = true;
      }
    },
    clearInput() {
      //저장후 화면 값 초기화
      this.newtodoItems = '';
    },
  },
  components : {
    alertModal
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height : 50px;
  line-height: 50px;
  border-radius: 5px;
  max-width: 720px;
  margin: 0 auto;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
   height: 40px;
   width: 80%;
}
.addContainer {
  float : right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  height: 50px;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color : white;
  vertical-align: middle;
}
.closeModalBtn {
  color : #42b983;
  float : right;
  height: 25px;
}
</style>