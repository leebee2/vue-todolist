<template>
  <div id="app">
      <TodoHeader />
      <TodoTitle />
      <TodoInput />
      <TodoMiddle />
      <TodoList />
      <TodoFooter />
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoTitle from './components/TodoTitle.vue'
import TodoInput from './components/TodoInput.vue'
import TodoMiddle from './components/TodoMiddle.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  components: {
    TodoHeader,
    TodoTitle,
    TodoInput,
    TodoMiddle,
    TodoList,
    TodoFooter,
  }
}
</script>

<style>
body {
  text-align: center;
  position: relative;
  background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
  background-repeat: no-repeat;
  height: 100vh;
  min-height: 100%;
  font-weight: 400;
  line-height: 1.5;
}
input {
  border-style: groove;
  width: 200px;
}

button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
