<template>
    <div class="result-slot-container">
        <label for="taf-1" v-if="showContent">Your Friend's Email</label>
          <input type="email" id="taf-1" placeholder="john.doe@email.com">
          <div class="accordion-taf-button-container">
            <button>Add Another Email</button>
            <button>Send Email</button>
          </div>
    </div>
</template>

<script>
export default {
  props:{
    showContent: Boolean,
  }
};
</script>

<style>
</style>