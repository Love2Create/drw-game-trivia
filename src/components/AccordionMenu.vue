<template>
  <div class="accordion-container">
      <div 
        v-for="(header, index) in headers" 
        :key="`header-${index}`">
        <div class="accordion-header-container">
          <p class="accordion-header">{{header}}</p>
          <p class="accordion-header">+</p>
        </div>
        <slot :name="index" class="slots"></slot>
      </div>
      <slot></slot>  
  </div>
</template>

<script>
export default {
    props:{
        headers: Array,
    }
}
</script>

<style>

</style>