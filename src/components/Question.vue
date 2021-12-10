<template>
  <div class="question-container">
    <h2 v-html="question.title"></h2>
    <div class="selection-container">
      <div
        class="selection"
        v-for="(selection, index) in question.selections"
        :key="selection[index]"
      >
        {{ selection }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // progress: Number,
    // questions: Array,
    question: Object,
  },
};
</script>

