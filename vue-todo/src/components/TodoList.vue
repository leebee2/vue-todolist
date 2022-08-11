<template>
  <div class="list">
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem, index) in this.storageTodoItems" v-bind:key="todoItem.item" class="shadow">
        <span class="checkBtn" v-bind:class="{ checkBtnCompleted: todoItem.completed }"
          v-on:click="toggleComplete({ todoItem, index })">
          <font-awesome-icon icon="fa-solid fa-check" />
        </span>
        <span v-bind:class="[{ textCompleted: todoItem.completed }, 'item-text']">
          {{ todoItem.item }}
        </span>
        <div class="list-right" v-on:click="removeTodo({ todoItem, index })">
          <div class="removeDiv">
            <font-awesome-icon icon="fa-solid fa-x" class="removeBtn" />
          </div>
          <div class=" list-right-font">
            {{ todoItem.date }}
          </div>
        </div>
      </li>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  methods: {
    ...mapMutations({
      removeTodo: 'removeOneItem',
      toggleComplete: 'toggleOnItem'
    })
  },
  computed: {
    ...mapGetters(['storageTodoItems']),
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}

li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}

.list {
  max-width: 720px;
  margin: 0 auto;
}

.removeDiv {
  margin-left: auto;
  color: #de4343;
  height: 10px;
  padding-right: 0;
}
.removeBtn {
  width: 0.5rem;
  margin-bottom: 6px;
}
.list-right {
  min-width: 5rem;
  text-align: right;
}

.list-right-font {
  font-size: 10px;
  color: #939393;
}


.checkBtn {
  color: #62acde;
  margin-right: 10px;
}

.checkBtnCompleted {
  color: #b3adad;
}

.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}

.item-text {
  flex-basis: 100%;
}

/* 리스트 아이템 트랜지션 효과 */
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>