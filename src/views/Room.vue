<template>
<div class="all-players">
  <header class="header">
    <h1 class="all-players__log">Wait other players</h1>
    <h3>room code:</h3>
    <h3 style="margin-top: -2vh">room online: {{ players.length }}</h3>
  </header>
  <div class="room-players">
    <ul class="players-list">
      <Player
        v-for="player in players"
        :key="player.id"
        :content="player"
      />
    </ul>
    <button class="button">Ready</button>
  </div>
</div>
</template>

<script>
import Player from '@/components/Player'

export default {
  name: 'Room',

  components: {
    Player
  },

  data () {
    return {
      players: [
        {
          id: 'yed',
          avatar: 'https://www.kindpng.com/picc/m/24-248325_profile-picture-circle-png-transparent-png.png',
          name: 'Alice',
          color: 'red'
        },
        {
          id: 'rocs2',
          avatar: 'https://www.kindpng.com/picc/m/24-248325_profile-picture-circle-png-transparent-png.png',
          name: 'Alex',
          color: 'yellow'
        },
        {
          id: 'lode3',
          avatar: 'https://www.kindpng.com/picc/m/24-248325_profile-picture-circle-png-transparent-png.png',
          name: 'Cool_Jack',
          color: 'green'
        },
        {
          id: 'lode3',
          avatar: 'https://www.kindpng.com/picc/m/24-248325_profile-picture-circle-png-transparent-png.png',
          name: 'CnoLvaN',
          color: 'aqua'
        },
        {
          id: 'lode3',
          avatar: 'https://www.kindpng.com/picc/m/24-248325_profile-picture-circle-png-transparent-png.png',
          name: 'Low_cat',
          color: 'yellowgreen'
        },
        {
          id: 'lode3',
          avatar: 'https://www.kindpng.com/picc/m/24-248325_profile-picture-circle-png-transparent-png.png',
          name: 'Mark',
          color: 'grey'
        },
        {
          id: 'lode3',
          avatar: 'https://www.kindpng.com/picc/m/24-248325_profile-picture-circle-png-transparent-png.png',
          name: 'Low_cat',
          color: 'yellowgreen'
        },
        {
          id: 'lode3',
          avatar: 'https://www.kindpng.com/picc/m/24-248325_profile-picture-circle-png-transparent-png.png',
          name: 'Mark',
          color: 'grey'
        },
        {
          id: 'lode3',
          avatar: 'https://www.kindpng.com/picc/m/24-248325_profile-picture-circle-png-transparent-png.png',
          name: 'Low_cat',
          color: 'yellowgreen'
        },
        {
          id: 'lode3',
          avatar: 'https://www.kindpng.com/picc/m/24-248325_profile-picture-circle-png-transparent-png.png',
          name: 'Mark',
          color: 'grey'
        },
        {
          id: 'hol4',
          avatar: 'https://www.kindpng.com/picc/m/24-248325_profile-picture-circle-png-transparent-png.png',
          name: 'Loki',
          color: 'blue'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.all-players {
  display: grid;
  grid-template-rows: 20vh 1fr;
  position: relative;
  height: 100vh;
  overflow: auto;

  &__log {
    color: rgba(119, 240, 119, 0.8);
    position: relative;
  }
}

.rooms-players {
  margin: 0 auto;
  padding: 0;
  border: 4px solid rgba(119, 240, 119, 0.8);
  overflow: hidden;
  border-radius: 6vh;
  list-style: none;
  height: 60vh
}

.players-list {
  box-sizing: content-box;
  display: grid;
  grid-gap: 1.5vw;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr) );
  flex-wrap: wrap;
  height: 60vh;
  width: 75vw;
  max-width: 1000px;
  min-width: 205px;
  overflow-y: scroll;
  overflow-x: hidden;
  list-style: none;
  margin: 0 auto;
  padding: 3vh 3vw;
  border: 3px solid rgba(119, 240, 119, 0.8);
  border-radius: 30px;
  position: relative;
}

.players-list::-webkit-scrollbar {
  width: 0;
}

.button {
  margin-top: 1vh;
  margin-bottom: 1vh;
  width: 40vw;
  height: 10vh;
  background: rgb(119, 240, 119);
  outline: none;
  border: none;
  border-radius: 10px;
  font-size: 5vh;
}

</style>
