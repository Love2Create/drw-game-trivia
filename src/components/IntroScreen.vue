<template>
    <div class='introScreen'>
        <p> intro screen </p>
        <div>
        <button @click="buttonEvent">Let's Find Out</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Intro',

  methods:{
      buttonEvent(){
         this.$emit('started'); 
      }
  }

  
}
</script>

