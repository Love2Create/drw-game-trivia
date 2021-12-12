<template>
  <div class="question-container">
    <h2 v-html="question.title"></h2>
    <div class="selection-container">
      <label
        v-for="(selection, index) in question.selections"
        :key="selection[index]"
      >
        <!-- <img src="../assets/question_selection_1.jpg" /> -->
        <input
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
  },
};
</script>

˜