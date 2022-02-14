<template>
  <div class="result-content-wrapper">
    <h2 class="result-header">THANK YOU FOR <span>TAKING THIS TRIVIA!</span></h2>
    <div class="share-on-social">
      <p class="share-header">share this on social media:</p>
      <div class="icons-container">
        <div class="result-icon-wrapper">
          <FBicon class="result-icons"/>
        </div>
        <div class="result-icon-wrapper">
          <IGicon class="result-icons"/>
        </div>
        <div class="result-icon-wrapper">
          <TWicon class="result-icons"/>
        </div>
      </div>
    </div>
    <AccordionMenu :headers="accordionHeaders">
      <div 
        v-for="(section, index) in accordionSections"
        :key="`section-${index}`"
        :slot="index">
        <AccordionResult v-if="index===0" :questions="questions"/>
        <AccordionTAF v-if="index===1"/>
        <AccordionLearnMore v-if="index===2" />
        <AccordionDeals v-if="index===3"/>
      </div>
    </AccordionMenu>
    <slot></slot>
  </div>
</template>

<script>
import AccordionTAF from './AccordionTAF.vue';
import AccordionResult from './AccordionResult.vue';
import AccordionDeals from './AccordionDeals.vue';
import AccordionMenu from './AccordionMenu.vue';
import AccordionLearnMore from './AccordionLearnMore.vue';
import FBicon from '../components/images/FBicon.vue';
import IGicon from '../components/images/IGicon.vue';
import TWicon from '../components/images/TWicon.vue';

export default {
  components: {
    AccordionTAF,AccordionDeals,AccordionResult,AccordionLearnMore, AccordionMenu, FBicon,IGicon,TWicon,
  },

  data(){
    return{
      showContent: false,
      accordionHeaders: ['YOUR TRIVIA RESULT', 'TELL A FRIEND', 'LEARN MORE ABOUT LARKIN', "FOR LARKIN'S FANS ONLY"],
    }
  },

  props: {
    questions: Array,
    trivia: Boolean,
    poll: Boolean,
    personalityTest: Boolean,
  },

  computed:{
    accordionSections(){
      return [AccordionResult,AccordionTAF,AccordionLearnMore,AccordionDeals];
    }
  }
};
</script>

<style>
</style>