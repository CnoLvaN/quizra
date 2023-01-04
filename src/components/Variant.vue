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
  border: 3px solid rgba(119, 240, 119, 0.8);
  border-radius: var(--gap);
  color: #000000;
  font-size: var(--gap);
  cursor: pointer;
  transition: 100ms;
}

.answer:hover {
  transform: scale(1.05) rotate(0.5deg);
}
</style>
