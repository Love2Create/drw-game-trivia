<template>
  <div class="question-container" :class="`question-${question.id}`">
    <div v-if="feedback">
      <slot v-if="question.correctAnswer === question.userChoice" name="correct"></slot>
      <slot v-else name="incorrect"></slot>
    </div>

    <h2 class="question-header question-header-text" v-html="question.title"></h2>
    <!-- <img v-if="question.hero" :src="question.hero" class="hero-image"> -->
    <div class="selection-container">
      <label
        v-for="(selection, index) in question.selections"
        :key="selection"
      >
        <!-- <span>{{ question.choice }}</span> -->
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