<template>
  <div class="question-container">
    <div v-if="feedback">
      <slot v-if="question.correctAnswer === question.userChoice" name="correct"></slot>
      <slot v-else name="incorrect"></slot>
    </div>

    <h2 class="question-header" v-html="question.title"></h2>
    <div class="selection-container">
      <label
        v-for="(selection, index) in question.selections"
        :key="selection"
      >
        <!-- <img src="../assets/question_selection_1.jpg" /> -->
        <input
          v-if="(question.userChoice === -1 || question.userChoice === index && feedback) || !feedback"
          v-model="question.userChoice"
          type="radio"
          :id="selection"
          :name="question.title"
          :value="index"
          class="selection"
        />
        <img :src="question.images[index]" />
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // progress: Number,
    // questions: Array,
    question: Object,
    feedback: Boolean,
  },
};
</script>

˜