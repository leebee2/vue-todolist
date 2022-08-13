<template>
  <div class="title">
    <h1>
      오늘 <br />
      <span class="totalNum">{{ itemCount.successCount }}</span> /
      <span> {{ itemCount.totalCount }} </span><br />
      완료하였습니다.
    </h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['itemCount'])
  },
}
</script>

<style>
.title {
  max-width: 720px;
  margin: 0 auto;
  text-align: left;
  color: #73556a;
}
h1 {
  margin: 5px;
  font-weight: 900;
}
.totalNum {
  font-size: 60px;
}
</style>