<template>
    <div class="all-rooms">
      <header class="header">
        <h1 class="all-rooms__log">Chose room or create</h1>
        <input type="search" name="search" id="search" placeholder="name or code">
      </header>
      <div class="rooms-select">
        <ul class="rooms-list">
          <ChoseRoom
            v-for="room in rooms"
            :key="room.id"
            :content="room"
          />
        </ul>
      </div>
    </div>
</template>

<script>
import ChoseRoom from '@/components/ChoseRoom.vue'

export default {
  name: 'Rooms',

  components: {
    ChoseRoom
  },

  data () {
    return {
      rooms: [
        {
          id: 'fSFuISEfhi',
          q_name: 'Safari',
          player_count: '1/10'
        },
        {
          id: 'ffzokvpo232',
          q_name: 'Countryes',
          player_count: '1/10'
        },
        {
          id: ',vzjdjvoizjodfv',
          q_name: 'Games and game',
          player_count: '4/8'
        },
        {
          id: 'lkfoIJWIU7Y',
          q_name: 'Rutin',
          player_count: '2/4'
        },
        {
          id: 'fSFuISEfhi',
          q_name: 'Loading is so bad',
          player_count: '3/10'
        },
        {
          id: 'ffzokvpo232',
          q_name: 'thats true',
          player_count: '8/9'
        },
        {
          id: ',vzjdjvoizjodfv',
          q_name: 'How many...?',
          player_count: '3/4'
        },
        {
          id: 'lkfoIJWIU7Y',
          q_name: 'New year',
          player_count: '8/12'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.all-rooms {
  display: grid;
  grid-template-rows: 1fr 4fr;
  position: relative;
  height: 100vh;
  overflow: auto;

  &__log {
    color: rgba(119, 240, 119, 0.8);
    position: relative;
  }
}

.rooms-select {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0;
  border: 4px solid rgba(119, 240, 119, 0.8);
  overflow: hidden;
  border-radius: 6vh;
  list-style: none;
  height: 60vh;
}

.rooms-list {
  height: 60vh;
  width: 84vw;
  max-width: 70vh;
  overflow-y: scroll;
  overflow-x: hidden;
  list-style: none;
  margin: 0 -30px 0 0;
  padding: 0;
}

input[type="search"] {
  width: 40vw;
  height: 5vh;
  border: 4px solid rgba(119, 240, 119, 0.8);
  border-radius: 20vh;
  font-size: 3vh;
  padding-left: 2vw;
  background: rgb(19, 4, 39);
  color: rgba(119, 240, 119, 0.8);
  outline: none;
  box-shadow:
    0 0 0 22px rgba(119, 240, 119, 0.1),
    0 0 0 16px rgba(119, 240, 119, 0.1),
    0 0 0 12px rgba(119, 240, 119, 0.1),
    0 0 0 8px rgba(119, 240, 119, 0.1);
}
</style>
