<template>
  <div
    v-if="content"
    class="winner"
    :style='`height: ${content.score / 7}vh`'
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
@keyframes crown {
  0% {
    transform: translate(0, -300px)
  }

  70% {
    transform: translate(0, 0) rotate(25deg)
  }

  100% {
    transform: translate(0, 2vw) rotate(40deg)
  }
}

.winner {
  width: 20vw;
  margin: 0 3vw;
  background-color: rgba(119, 240, 119, 0.8);
  border-radius: 6vw 6vw 0 0;
  padding-top: 4vw;
  position: relative;
  font-size: 5vw;
  max-height: 56vh;
  min-height: 10vh;
  padding-top: 5vw;
  animation-name: winnerAn;
  animation-duration: 0.8s;
  animation-iteration-count: 1;
  animation-delay: 100ms;
  animation-fill-mode: both;
  animation-timing-function: ease-in-out;
}

.crown {
  animation-name: crown;
  animation-duration: 0.8s;
  animation-iteration-count: 1;
  animation-delay: 100ms;
  animation-fill-mode: both;
  animation-timing-function: ease-in-out;
  position: absolute;
  width: 20vw;
  height: 20vw;
  top: -13%;
  left:49%;
  transform: rotate(40deg);
}
</style>
