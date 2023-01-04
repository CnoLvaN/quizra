<template>
  <li
    v-if="content"
    class="player"
    :style="`border-color: ${content.color}`"
  >
    <img :src="content.avatar" class="avatar"
      :style="`border-color: ${content.color}`"
    >
    <h3 class="name" :style="`color: ${content.color}`">{{ content.name }}</h3>
  </li>
</template>

<script>
export default {
  name: 'Player',

  props: {
    content: { type: Object, default: null }
  }
}
</script>

<style scoped lang="scss">
.player {
    box-sizing: border-box;
    height: 15vh;
    text-align: center;
    color: rgba(119, 240, 119, 0.8);
    background-color: rgb(44, 23, 70);
    padding-top: 1.4vh;
    border-radius: 20px;
    border: 2px solid white;
}

.avatar {
  box-sizing: border-box;
    width: 8vh;
    height: 8vh;
    border-radius: 50%;
    border: 2px solid rgba(119, 240, 119, 0.8);
}

.name {
    margin: 0;
    font-size: small;
    width: auto;
}
</style>
