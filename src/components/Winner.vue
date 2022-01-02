<template>
  <div
    v-if="content"
    class="winner"
    :style='`height: ${content.height}vw`'
  >
    {{ content.name }}
    <br />
    {{ content.score }}
    <img v-if="isFirst" alt="crown" src="../assets/crown.svg" class="crown"/>
  </div>
</template>

<script>
export default {
  name: 'Winner',

  props: {
    content: { type: Object, default: null },
    isFirst: { type: Boolean, default: false }
  }
}
</script>

<style scoped lang="scss">
.winner {
  width: 20vw;
  margin: 0 3vw;
  background-color: rgba(119, 240, 119, 0.8);
  border-radius: 6vw 6vw 0 0;
  padding-top: 4vw;
  position: relative;
  font-size: 5vw;
}

.crown {
  position: absolute;
  width: 20vw;
  height: 20vw;
  top: -12%;
  left: 52%;
  transform: rotate(40deg);
}
</style>
