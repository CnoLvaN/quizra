<template>
<router-link :to="'/rooms/id/finish/'">Finish</router-link><br /><router-link :to="'/rooms/:id/quiz/'">Quiz</router-link>
<br />
<router-link :to="'/join/'">Join</router-link><br /><router-link :to="'/rooms/'">rooms</router-link>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <router-link :to="'/join/'"><button class="game_join">Join with code</button></router-link>
    <br>
    <router-link :to="'/rooms/'"><button class="game_join">Find the game</button></router-link>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style lang="scss" scoped>
.game_join {
  margin: 5vh auto 0 auto;
  width: 50vw;
  height: 10vh;
  background: rgb(19, 4, 39);
  color: rgba(119, 240, 119, 0.8);
  border:3px solid rgba(119, 240, 119, 0.8);
  border-radius: 3%;
  cursor: pointer;
  transition: 0.1s;
}

.game_join:hover {
  transform: scale(1.1);
}

.game_join:active {
  background: rgb(119, 240, 119);
}
</style>
