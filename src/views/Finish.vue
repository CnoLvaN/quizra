<template>
    <div class="finish-desk">
      <header class="header">
        <h1 class="finish-desk__title">"somebody" is winner</h1>
      </header>

      <div class="finish-him">
        <div class="places">
          <Winner
            v-for="winner in winners"
            :key="winner.id"
            :content="winner"
            :is-first="winner.id === winnerId"
          />
        </div>
        <div class="other-results">
          <table class="table">
            <tr>
              <td>Player#394</td>
              <td>213</td>
            </tr>
            <tr>
              <td>Bomj</td>
              <td>177</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
</template>

<script>
import Winner from '@/components/Winner'

export default {
  name: 'Finish',

  components: {
    Winner
  },

  data () {
    return {
      winners: [
        {
          id: 1,
          name: 'Alex',
          score: 267
        },
        {
          id: 2,
          name: 'Alise',
          score: 403
        },
        {
          id: 3,
          name: 'Nika',
          score: 234
        }
      ]
    }
  },

  computed: {
    winnerId () {
      const scores = this.winners.map(winner => winner.score)
      const max = Math.max.apply(null, scores)
      const first = this.winners.find(winner => winner.score === max)
      console.log(scores, max, first)
      return first.id
    }
  }
}
</script>

<style lang="scss" scoped>
.finish-desk {
  --gap: 5vw;

  display: grid;
  grid-template-rows: 20vh 1fr;
  position: relative;
  height: 100vh;
  overflow: auto;

  &__title {
    font-size: x-large;
    color: rgba(119, 240, 119, 0.8);
    z-index: 1001;
  }
}
.places {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  border-bottom: 2vw solid rgba(119, 240, 119, 0.8);
  width: fit-content;
  height: 40vh;
  margin: 0 auto;
  padding-top: 55vh;
  position: relative;
}

.header {
  display: flex;
  align-items: center;
  justify-content: center;
}

.table {
  border: 1vw solid rgba(119, 240, 119, 0.8);
  border-radius: 0 0 25% 25%;
  width: 78vw;
  height: 20vh;
  margin: 0 auto;
  color: rgba(119, 240, 119, 0.8);
  font-size: 3vh;
}

td {
  width: 50%;
}
</style>
