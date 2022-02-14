<template>
  <div class="result-slot-container">
    <div class="result-list-container">
      <p> You got these questions right:</p>
      <ul class="list-container">
        <li v-for="item in correct" :key="item">{{item.questionTitle}}</li>
      </ul>
      <p> You got these questions right:</p>
      <ul class="list-container">
        <li v-for="item in incorrect" :key="item">{{item.questionTitle}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numCorrect: 0,
      correct: [],
      incorrect: [],
    };
  },
  props: {
    questions: Array,
  },
  created() {
      this.correct = this.questions.filter(item=>item.userChoice===item.correctAnswer);
      this.incorrect = this.questions.filter(item=>item.userChoice!=item.correctAnswer);

    // this.questions.forEach((item) => {
    //   if (item.userChoice === item.correctAnswer) {
    //     this.numCorrect++;
    //   }
    //   console.log(item.userChoice);
    //   console.log(item.correctAnswer);
    // });
    // console.log("numCorrect" + this.numCorrect);
  },
};
</script>

<style>
</style>