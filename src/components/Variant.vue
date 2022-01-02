<template>
<button class="answer an-1" :style='`background: ${content.color}`'>
  <div class="answer-text">{{ content.label }}</div>
</button>
</template>

<script>
export default {
  name: 'Variant',

  props: {
    content: { type: Object, default: null }
  }
}
</script>

<style scoped lang="scss">
.answer {
  border: 1vw solid rgba(119, 240, 119, 0.8);
  border-radius: var(--gap);
  color: rgba(255, 255, 255, 0.781);
  font-size: var(--gap);
}
</style>
