<template>
  <header>
    <h3>나의 일정관리</h3>
    <p>{{ this.todayTamp }}</p>
  </header>
</template>

<script>
import getDate from './common/getDate';

export default {
  data() {
    return {
      todayTamp : "",
    }
  },
  created() {
    this.todayTamp = `${getDate().year}/${getDate().month}/${getDate().date} ${getDate().day}`
  }
}
</script>

<style scoped>
header{
  max-width: 720px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
h3 {
    text-align: left;
    color : #73556a;
    font-weight : 900;
}
p {
  text-align: right;
  color: #73556a;
}
</style>