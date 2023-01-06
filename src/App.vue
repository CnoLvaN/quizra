<template>
  <router-view/>
</template>
<style lang="scss">
*, *::before, *::after {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  background: rgb(19, 4, 39);
  color: green;
  width: 100vw;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
