<template>
    <div class="soeof" @click="getOpen()"></div>
    <div class="menu closed" :style="{
        display: 1 < 0 ? none : block
    }">
        <ul>
            <li class="avatar"></li>
            <li class="login"><a href="#"><h3 class="user-name">Log in</h3></a></li>
            <li class="profile"><a href="#">Profile</a></li>
            <li class="statistic"><a href="#">Statistics</a></li>
            <li class="about_us"><a href="#">About us</a></li>
            <li class="settings"><a href="#">Settings</a></li>
            <button class="close" @click="getClose()">close</button>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Menu',

  components: {

  },
  methods: {
    getOpen () {
      document.querySelector('.menu').classList.toggle('closed')
    },
    getClose () {
      document.querySelector('.menu').classList.add('closed')
    }
  }
}
</script>

<style lang="scss" scoped>
a {
    color: #42b983;
    text-decoration: none;
}

li {
    list-style: none;
}

.menu {
    width: 100vw;
    height: 100vh;
    margin: 0;
    font-size: 6vh;
    position: fixed;
    top: 0;
    left: 0;
    padding: 5vh 0;
}

.menu ul {
    height: 100%;
    margin: 0;
    padding: 2.5vh 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1vh;
    border: none;
}

.menu ul li {
    transition: 100ms;
}

.menu ul li:not(.avatar):hover {
    transform: scale(1.5);
}

.avatar {
    width: 30vh;
    height: 30vh;
    padding: 0;
    min-width: 200px;
    min-height: 200px;
    border: none;
    background: #42b983;
    border-radius: 50%;
}

.user-name {
    margin: 0;
    font-size: 8vh;
    text-decoration: underline;
    text-align: center;
    padding-bottom: 2vh;
    color: #57d49c;
}

.close {
    border:none;
    background: none;
    margin-top: 5vh;
    font-size: 4vh;
    color:#42b98379;
    padding: 0;
    cursor: pointer;
}

.closed {
    display: none;
    transition: 100ms;
}

.close:hover {
    transform: scale(1.2);
}

.close:active {
    transform: scale(1);
    color: #42b983;
}

.soeof {
    position: fixed;
    width: 10vh;
    height: 10vh;
    background-color: #fff;
}
</style>
