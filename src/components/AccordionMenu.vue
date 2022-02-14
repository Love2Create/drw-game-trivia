<template>
  <div class="accordion-container">
      <div 
        v-for="(header, index) in headers" 
        :key="`header-${index}`">
        <div class="accordion-header-container">
          <p class="accordion-header">{{header}}</p>
          <p class="accordion-header" @click="changeShowState(index)">+</p>
        </div>
        <slot v-if="showStates[index]" :name="index" class="slots"></slot>
      </div>
      <slot></slot>  
  </div>
</template>

<script>
export default {
    data(){
      return{
        showStates: this.headers.map(() => false),
      }
    },
    props:{
        headers: Array,
    },
    methods:{
      changeShowState(index){
        this.showStates[index] = this.showStates[index] ? false : true;
        this.$forceUpdate();
      }
    }
}
</script>

<style>

</style>