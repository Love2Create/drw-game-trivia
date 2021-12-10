<template>
  <div id="app">
    <Header />

    <main>
      <IntroScreen v-if="progress === -1" @started="surveyStarted" />

      <div v-if="progress >= 0">
        <Question :question="questions[progress]" />
      </div>

      <div v-if="progress >= 0" @click="addToProgress">
        <button>Next</button>
      </div>

      <div class="progress-bar" v-if="progress >= 0">
        <Progress :progress="progress" :questions="questions" />
      </div>
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

export default {
  name: "App",

  data() {
    return {
      progress: -1,
      questions: [           
            {
            title: 'Question 1',
            selections: ['choice 1', 'choice 2', 'choice 3', 'choice 4'],
            },
            {
            title: 'Question 2',
            selections: ['choice 1', 'choice 2', 'choice 3', 'choice 4'],
            },
            {
            title: 'Question 3',
            selections: ['choice 1', 'choice 2', 'choice 3', 'choice 4'],
            },
            {
            title: 'Question 4',
            selections: ['choice 1', 'choice 2', 'choice 3', 'choice 4'],
            },
            {
            title: 'Question 5',
            selections: ['choice 1', 'choice 2', 'choice 3', 'choice 4'],
            },
            {
            title: 'Question 6',
            selections: ['choice 1', 'choice 2', 'choice 3', 'choice 4'],
            },
            {
            title: 'Question 7',
            selections: ['choice 1', 'choice 2', 'choice 3', 'choice 4'],
            },
            {
            title: 'Question 8',
            selections: ['choice 1', 'choice 2', 'choice 3', 'choice 4'],
            },
            {
            title: 'Question 9',
            selections: ['choice 1', 'choice 2', 'choice 3', 'choice 4'],
            },
            ],
      chosen: [...Array(9).keys()],
    };
  },

  components: {
    Header,
    Footer,
    IntroScreen,
    Progress,
    Question,
  },

  methods: {
    surveyStarted() {
      this.progress = 0;
      console.log(this.chosen);
    },

    addToProgress() {
      if (this.progress < this.questions.length) {
        this.progress++;
      }
    },
  },
};
</script>

<style lang="scss">
@import "./scss/app.scss";
</style>
