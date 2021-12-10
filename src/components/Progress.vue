<template>
  <div class="progress-bar" v-if="progress >= 0">
    <div
      v-for="(question, index) in questions"
      :key="question[index]"
      class="progress-dots"
      :class="{current:progress === index, filled: progress>index}"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    questions: Array,
    progress: Number,
  },

  data() {
    return {};
  },
};
</script>

