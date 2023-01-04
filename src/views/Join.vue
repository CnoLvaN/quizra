<template>
    <div class="login-menu">
      <header class="header">
        <h1 class="login-menu__log">Join game</h1>
      </header>
      <form class="login-form" :action="`/rooms/` + code">
        <label for="file" class="chose-avatar flex-element"></label>
        <input type="file" accept=".png,.jpeg,.svg.," id="file" value="" style="display: none">
        <input type="text" id="name" class="flex-element" maxlength="12" minlength="4" placeholder="name">
        <input type="text" id="code" class="flex-element" maxlength="6" minlength="6" placeholder="code" v-model="code">
        <button type="submit" class="flex-element" method="POST">Join</button>
      </form>
    </div>
</template>

<script>
export default {
  name: 'Join',

  components: {

  },

  methods: {

  }
}
</script>

<style lang="scss" scoped>
.login-menu {
  display: grid;
  grid-template-rows: 15vh 1fr;
  position: relative;
  height: 100vh;
  overflow: auto;

  &__log {
    color: rgba(119, 240, 119, 0.8);
  }
}

.login-form {
  display: flex;
  flex-direction: column;
  height: 72vh;
  width: 80vw;
  margin: 0 auto;
  padding: 4vh 0;
  gap: 1vh;
  border: 1vh solid rgba(119, 240, 119, 0.8);
  border-radius: 10%;
  max-width: 70vh;
  position: relative;
  max-height: 100vh;
}

.flex-element {
  margin: 0 auto;
}

.chose-avatar {
  width: 200px;
  height: 200px;
  background: rgba(255, 255, 255, 0.438);
  border: 1vh solid rgba(119, 240, 119, 0.8);
  margin: 0 auto;
  border-radius: 50%;
  transition: 0.1s;
}

#name {
  width: 60vw;
  height: 10vh;
  outline: none;
  border: 1vh solid rgba(119, 240, 119, 0.8);
  border-radius: 20vw;
  font-size: 5vh;
  text-align: center;
  background: rgba(119, 240, 119, 0.8);
  color: rgb(19, 4, 39);
  max-width: 50vh;
  margin-top: 2vh;
  margin-bottom: 2vh;
  transition: 0.1s;
}

#code {
  width: 50vw;
  height: 6vh;
  outline: none;
  border: 0.5vh solid rgba(119, 240, 119, 0.8);
  border-radius: 20vw;
  font-size: 4vh;
  text-align: center;
  background: rgba(119, 240, 119, 0.8);
  color: rgb(19, 4, 39);
  max-width: 45vh;
  transition: 0.1s;
}

button[type="submit"] {
  width: 40vw;
  height: 10vh;
  border: 1vh solid rgba(119, 240, 119, 0.8);
  border-radius: 20vw;
  font-size: 3vh;
  text-align: center;
  background: rgb(19, 4, 39);
  color: rgba(119, 240, 119, 0.8);
  margin-top: 2vh;
  transition: 0.1s;
  max-width: 400px;
}

button[type="submit"]:hover,
.chose-avatar:hover {
  transform: scale(1.1);
}
</style>
