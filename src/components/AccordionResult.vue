<template>
  <div class="result-slot-container">

    <!-- <h3>{{ `You got  ${correct.length} out of ${questions.length} questions right` }}</h3> -->
    <ul>
        <p> You got these questions right:</p>
        <div class="list-container">
          <li v-for="item in correct" :key="item">{{item.questionTitle}}</li>
        </div>
    </ul>
    <ul>
        <p>You got these questions wrong:</p>
        <div class="list-container">
          <li v-for="item in incorrect" :key="item">{{item.questionTitle}}</li>
        </div>
    </ul>

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