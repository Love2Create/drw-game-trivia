<template>
    <div class='intro-wrapper'>
        <div class="intro-title">
            <p class="intro-subhead"> How well do you know </p>
            <h1 class="intro-header">DYLAN LARKIN</h1>
            <img src="../../public/Images/arrow_01.png" class="intro-arrow" />
            <img src="../../public/Images/intro_avatar.gif" class="intro-avatar"/>    
        </div>
        <div class="button-container">
            <button @click="buttonEvent" class="intro-button">Let's Find Out</button>
            <div class="triangles-container">
                <Triangle class="little-triangle" />
                <Triangle class="little-triangle" />
                <Triangle class="little-triangle" />
            </div>
        </div>
    </div>
</template>

<script>
import Triangle from "../components/images/Triangle.vue";

export default {
  name: 'Intro',

//   data(){
//       return{
//           avatarImage: require('../../public/Images/arrow_01.png'),
        
//       }
//   },

  components:{
      Triangle,
  },

  methods:{
      buttonEvent(){
         this.$emit('started'); 
      }
  }

  
}
</script>

