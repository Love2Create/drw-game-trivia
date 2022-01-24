<template>
  <div id="app">
    <Header />
    <!-- 
      <div>
        <TestForm @submit-clicked="afterSubmit"></TestForm>
      </div> -->

    <main>
      <IntroScreen v-if="progress === -1" @started="surveyStarted" />

      <div v-if="progress >= 0 && !concluded">
        <template v-for="(question, index) in questions">
          <Question
            v-if="progress === index"
            :feedback="feedback"
            :key="`question-${index}`"
            :question="question"
          >
            <div slot="correct">
              <p>You got it!</p>
            </div>

            <div slot="incorrect">
              <p>Want to try again?</p>
            </div>
          </Question>
        </template>
      </div>

      <div v-if="!concluded" class="buttons-container" :class="`question-shift-${progress}`">
        <div v-if="progress >= 0" v-show="!trivia" @click="minusFromProgress">
          <button :disabled="progress < 1">Back</button>
        </div>
        <div v-if="progress >= 0" @click="addToProgress">
          <button :disabled="questions[progress].userChoice < 0">
            {{ submitListener }}
          </button>
        </div>
      </div>

      <div v-if="progress >= 0 && !concluded" class="progress-bar">
        <Progress :progress="progress" :questions="questions" />
      </div>

      <div v-if="concluded" >
        <Conclusion :questions="questions" :trivia="trivia" :poll="poll" :personality-test="personalityTest">
          <ExternalContent url="https://www.youtube.com/embed/Kpb_op5WtLU" width="800" height="400" />
        </Conclusion>
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
import content from "./resources/content.js";
import Conclusion from "./components/Conclusion.vue";
import ExternalContent from "./components/ExternalContent.vue";
import {updateMetaContent} from "./utils/utilities.js";
// import axios from "axios";
// import Result from "./components/Result.vue";

// const appData = require ("../public/questions.json");
// appData.questions.forEach(item =>{
//   item.images = item.images.map(_item =>{
//     return require(_item);
//   })
// })

export default {
  name: "App",

  mounted() {
    updateMetaContent();
    // console.log(this.$data);
    // console.log(appData);
    // axios.get("../public/questions.json").then((response)=>{
    //   console.log(response.data);
    // });
  },

  data() {
    return {
      ...content,
      concluded: false,
    };
  },

  components: {
    Header,
    Footer,
    IntroScreen,
    Progress,
    Question,
    Conclusion,
    ExternalContent,
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
      }else{
        this.concluded = true;
      }
    },
    minusFromProgress() {
      if (this.progress > 0) {
        this.progress--;
      }
    },
    afterSubmit(e) {
      const fullName = e.firstName + " " + e.middleName + " " + e.lastName;
      const fullAddress =
        e.address1 + " " + e.address2 + " " + e.city + " , " + e.state;
      console.log(e.lastName);
      console.log(fullName);
      console.log(e.birthday);
      console.log(fullAddress);
    },
  },

  computed: {
    submitListener() {
      return this.progress === this.questions.length - 1 ? "Submit" : "Next";
    },
  },
};
</script>

<style lang="scss">
@import "./scss/app.scss";
</style>
