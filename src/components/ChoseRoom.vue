<template>
<li v-if="content" class="room">
  <router-link :to="'/rooms/' + content.id" class="linkA">
    <span class="quiz-name">{{ content.q_name }}</span>
    <span class="count-players">{{ content.player_count }}</span>
  </router-link>
</li>
</template>

<script>
export default {
  name: 'ChoseRoom',

  props: {
    content: { type: Object, required: true }
  }
}
</script>

<style scoped lang="scss">
.room {
  height: 20%;
  width: 100%;
  border-bottom: 4px solid rgba(119, 240, 119, 0.8);
  padding: 1vh 1vw;
}

span {
  display: inline-block;
  border: none;
  border-collapse: collapse;
  vertical-align: middle;
  font-size: 4vh;
  padding: 1vh 3vw;
  text-decoration: none;
  color: rgba(119, 240, 119, 0.8);
}

span:first-child {
  width: 60%;
}

.room:last-child {
  border: none;
}

.room:hover {
  background: rgb(41, 27, 59);
}

.linkA {
  width: 100%;
  height: 10vh;
  text-decoration: none;
  color: rgba(119, 240, 119, 0.8);
}

.room:hover {
  transform: scale(1.05);
}
</style>
