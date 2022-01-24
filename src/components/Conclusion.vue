<template>
  <div class="result-wrapper">
    <h2>THANK YOU FOR <span>TAKING THIS TRIVIA!</span></h2>
    <slot></slot>  
    <TriviaResults v-if="trivia" :questions="questions"/>

  </div>
</template>

<script>
import TriviaResults from "./TriviaResults.vue";

export default {
  components: {
    TriviaResults,
  },

  props: {
    questions: Array,
    trivia: Boolean,
    poll: Boolean,
    personalityTest: Boolean,
  },
};
</script>

<style>
</style>