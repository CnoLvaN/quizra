<template>
    <div class="quiz">
      <header class="header">
        <h1 class="quiz__title">Title QUIZ</h1>
      </header>

      <div class="answers">
        <Variant
          v-for="variant in variants"
          :key="variant.id"
          :content="variant"
        />
      </div>
    </div>
</template>

<script>
import Variant from '@/components/Variant'

export default {
  name: 'Quiz',

  components: {
    Variant
  },

  data () {
    return {
      variants: [
        {
          id: 1,
          label: 'variant #1',
          color: 'red'
        },
        {
          id: 2,
          label: 'variant #2',
          color: 'yellow'
        },
        {
          id: 3,
          label: 'variant #3',
          color: 'green'
        },
        {
          id: 4,
          label: 'variant #4',
          color: 'blue'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.quiz {
  --gap: 5vw;

  display: grid;
  grid-template-rows: 25vw 1fr;
  position: relative;
  height: 100vh;
  overflow: auto;

  &__title {
    color: rgba(119, 240, 119, 0.8);
  }
}
.question {
  color: rgba(4, 0, 255, 0.801);
}

.header {
  display: flex;
  align-items: center;
  justify-content: center;
}

.answers {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: var(--gap);
  padding: 0 var(--gap) var(--gap);
  position: relative;
}

.answers::before {
  content: "15";
  color: rgba(119, 240, 119, 0.8);
  font-size: 10vw;
  position: absolute;
  top: 42.5%;
  left: 40%;
  width: 20vw;
  height: 20vw;
  background: rgb(19, 4, 39);
  border: 1vw solid rgba(119, 240, 119, 0.8);
  border-radius: 50%;
  z-index: 1000;
  padding-top: 3%;
}
</style>
