<template>
  <div id="app">
    <Header />

      <div>
        <TestForm @submit-clicked="afterSubmit"></TestForm>
      </div>

    <main>
      <IntroScreen v-if="progress === -1" @started="surveyStarted" />

      <div v-if="progress >= 0">
        <template v-for="(question, index) in questions">
          <Question
            v-if="progress === index"
            :key="question"
            :question="question"
          />
        </template>
      </div>

      <div class="buttons-container">
        <div v-if="progress >= 0" @click="minusFromProgress">
          <button :disabled="progress < 1">Back</button>
        </div>
        <div v-if="progress >= 0" @click="addToProgress">
          <button :disabled="questions[progress].userChoice < 0">{{ submitListener }}</button>
        </div>
      </div>

      <div class="progress-bar" v-if="progress >= 0">
        <Progress :progress="progress" :questions="questions" />
      </div>

      <!-- <div>
      <Result />
      </div> -->
    </main>

    <Footer />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import IntroScreen from "./components/IntroScreen.vue";
import Progress from "./components/Progress.vue";
import Question from "./components/Question.vue";
// import Result from "./components/Result.vue";
import TestForm from "./components/TestForm.vue";

export default {
  name: "App",

  mounted() {
    // console.log(this.questions);
  },

  data() {
    return {
      progress: -1,
      // quetsions: require("./assets/questions.json"),
      questions: [
        {
          title: "Question 1",
          selections: ["choice 1", "choice 2", "choice 3", "choice 4"],
          userChoice: -1,
          images: [
            require("./assets/question_selection_1.jpg"),
            require("./assets/question_selection_2.jpg"),
            require("./assets/question_selection_3.jpg"),
            require("./assets/question_selection_4.jpg"),
          ],
        },
        {
          title: "Question 2",
          selections: ["choice 1", "choice 2", "choice 3", "choice 4"],
          userChoice: -1,
          images: [
            require("./assets/question_selection_1.jpg"),
            require("./assets/question_selection_2.jpg"),
            require("./assets/question_selection_3.jpg"),
            require("./assets/question_selection_4.jpg"),
          ],
        },
        {
          title: "Question 3",
          selections: ["choice 1", "choice 2", "choice 3", "choice 4"],
          userChoice: -1,
          images: [
            require("./assets/question_selection_1.jpg"),
            require("./assets/question_selection_2.jpg"),
            require("./assets/question_selection_3.jpg"),
            require("./assets/question_selection_4.jpg"),
          ],
        },
        {
          title: "Question 4",
          selections: ["choice 1", "choice 2", "choice 3", "choice 4"],
          userChoice: -1,
          images: [
            require("./assets/question_selection_1.jpg"),
            require("./assets/question_selection_2.jpg"),
            require("./assets/question_selection_3.jpg"),
            require("./assets/question_selection_4.jpg"),
          ],
        },
        {
          title: "Question 5",
          selections: ["choice 1", "choice 2", "choice 3", "choice 4"],
          userChoice: -1,
          images: [
            require("./assets/question_selection_1.jpg"),
            require("./assets/question_selection_2.jpg"),
            require("./assets/question_selection_3.jpg"),
            require("./assets/question_selection_4.jpg"),
          ],
        },
        {
          title: "Question 6",
          selections: ["choice 1", "choice 2", "choice 3", "choice 4"],
          userChoice: -1,
          images: [
            require("./assets/question_selection_1.jpg"),
            require("./assets/question_selection_2.jpg"),
            require("./assets/question_selection_3.jpg"),
            require("./assets/question_selection_4.jpg"),
          ],
        },
        {
          title: "Question 7",
          selections: ["choice 1", "choice 2", "choice 3", "choice 4"],
          userChoice: -1,
          images: [
            require("./assets/question_selection_1.jpg"),
            require("./assets/question_selection_2.jpg"),
            require("./assets/question_selection_3.jpg"),
            require("./assets/question_selection_4.jpg"),
          ],
        },
        {
          title: "Question 8",
          selections: ["choice 1", "choice 2", "choice 3", "choice 4"],
          userChoice: -1,
          images: [
            require("./assets/question_selection_1.jpg"),
            require("./assets/question_selection_2.jpg"),
            require("./assets/question_selection_3.jpg"),
            require("./assets/question_selection_4.jpg"),
          ],
        },
        {
          title: "Question 9",
          selections: ["choice 1", "choice 2", "choice 3", "choice 4"],
          userChoice: -1,
          images: [
            require("./assets/question_selection_1.jpg"),
            require("./assets/question_selection_2.jpg"),
            require("./assets/question_selection_3.jpg"),
            require("./assets/question_selection_4.jpg"),
          ],
        },
      ],
    };
  },

  components: {
    Header,
    Footer,
    IntroScreen,
    Progress,
    Question,
    TestForm,
    // Result,
  },

  methods: {
    surveyStarted() {
      this.progress = 0;
      console.log(this.chosen);
    },

    addToProgress() {
      if (this.progress < this.questions.length - 1) {
        this.progress++;
      }
    },
    minusFromProgress() {
      if (this.progress > 0) {
        this.progress--;
      }
    },
    afterSubmit(e){
      const fullName = e.firstName + " " + e.middleName + " " + e.lastName;
      const fullAddress = e.address1 + " " + e.address2 + " " + e.city + " , " + e.state;
      console.log(e.lastName);
      console.log(fullName);
      console.log(e.birthday);
      console.log(fullAddress);
    }
  },

  computed: {
    submitListener(){
      return this.progress === this.questions.length-1 ? "Submit" : "Next";
    }
  }
};
</script>

<style lang="scss">
@import "./scss/app.scss";
</style>
