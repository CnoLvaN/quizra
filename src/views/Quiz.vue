<template>
    <div class="quiz">
      <header class="header">
        <h1 class="quiz__title">Title Quiz</h1>
      </header>

      <input class="question" type="checkbox" id="question" checked>
      <label class="question-text" for="question"><p> {{ question[0].text }} </p><p class="click">click to close</p></label>
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
      question: [
        {
          text: 'Здесь что-то есть?'
        }
      ],
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
  --gap: 2vh;

  display: grid;
  grid-template-rows: 25vh 1fr;
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  height: 100vh;
  overflow: hidden;
  padding-bottom: 5vh;

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

.click {
  font-size: 50vh;
  position: absolute;
  color: #41566b;
  top: 65vh;
  left: 50%;
  width:50vw;
  transform: translate(-50%, 0);
}

.question {
  display: none;
}

.question-text {
  background-position-y: 50%;
  background-position-x: 50%;
  background-size: 10vh;
  background-repeat: no-repeat;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiMxYWJjN2IiPjxwYXRoIGQ9Ik04NiwxMC4zMmMtMTEuMzU0NjksMCAtMjAuNjQsOS4yODUzMSAtMjAuNjQsMjAuNjRjMCwxMS4zNTQ2OSA5LjI4NTMxLDIwLjY0IDIwLjY0LDIwLjY0YzExLjM1NDY5LDAgMjAuNjQsLTkuMjg1MzEgMjAuNjQsLTIwLjY0YzAsLTExLjM1NDY5IC05LjI4NTMxLC0yMC42NCAtMjAuNjQsLTIwLjY0ek04Niw2NS4zNmMtMTEuMzU0NjksMCAtMjAuNjQsOS4yODUzMSAtMjAuNjQsMjAuNjRjMCwxMS4zNTQ2OSA5LjI4NTMxLDIwLjY0IDIwLjY0LDIwLjY0YzExLjM1NDY5LDAgMjAuNjQsLTkuMjg1MzEgMjAuNjQsLTIwLjY0YzAsLTExLjM1NDY5IC05LjI4NTMxLC0yMC42NCAtMjAuNjQsLTIwLjY0ek04NiwxMjAuNGMtMTEuMzU0NjksMCAtMjAuNjQsOS4yODUzMSAtMjAuNjQsMjAuNjRjMCwxMS4zNTQ2OSA5LjI4NTMxLDIwLjY0IDIwLjY0LDIwLjY0YzExLjM1NDY5LDAgMjAuNjQsLTkuMjg1MzEgMjAuNjQsLTIwLjY0YzAsLTExLjM1NDY5IC05LjI4NTMxLC0yMC42NCAtMjAuNjQsLTIwLjY0eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+);
  background-color: rgb(19, 4, 39);
  font-size: 0;
  color: rgba(119, 240, 119, 0.8);
  border: 3px solid rgba(119, 240, 119, 0.8);
  position: absolute;
  top: 45%;
  left: 0px;
  width: 15vw;
  max-width: 100px;
  height: 20vh;
  z-index: 100000;
  transition: 0.1s ease-out;
  border-radius: 20px;
}

.question:checked ~ .question-text .click {
  font-size: 4vh;
}

.question:checked ~ .question-text {
  font-size: 6vh;
  position: absolute, relative;
  top: 16vh;
  left: 50%;
  transform: translate(-50%, 0);
  width: 96vw;
  max-width: 1000px;
  height: 80vh;
  border-radius: 20px;
  background-image: none;
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
  font-size: 6vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 12vh;
  height: 12vh;
  background: rgb(19, 4, 39);
  border: 3px solid rgba(119, 240, 119, 0.8);
  border-radius: 50%;
  z-index: 1000;
  padding-top: 2vh;
}
</style>
