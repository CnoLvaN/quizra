<template>
    <div class="login-menu">
      <header class="header">
        <h1 class="login-menu__log">Login User</h1>
      </header>
      <form class="login-form">
        <div class="chose-avatar"></div>
        <input type="text" id="name" maxlength="10" minlength="4" placeholder="name">
        <button type="submit">Done</button>
      </form>
    </div>
</template>

<script>
export default {
  name: 'Quiz',

  components: {

  }
}
</script>

<style lang="scss" scoped>
.login-menu {
  --gap: 5vw;

  display: grid;
  grid-template-rows: 10% 1fr;
  position: relative;
  height: 100vh;
  overflow: auto;

  &__log {
    color: rgba(119, 240, 119, 0.8);
  }
}

.login-form {
  height: 70vh;
  width: 80vw;
  margin: 0 auto;
  padding: 5% 10%;
  border: 1vh solid rgba(119, 240, 119, 0.8);
  border-radius: 10%;
  max-width: 100vh;
  position: relative;
}

.chose-avatar {
  width: 25vh;
  height: 25vh;
  background: #fff;
  margin: 0 auto 20%;
  border-radius: 50%;
}

#name {
  width: 60vw;
  height: 10vh;
  outline: none;
  border: 1vh solid rgba(119, 240, 119, 0.8);
  border-radius: 20vw;
  font-size: 7vw;
  text-align: center;
  background: rgba(119, 240, 119, 0.8);
  color: rgb(19, 4, 39);
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
  margin-top: 10vh;
  max-width: 200px;
}
</style>
