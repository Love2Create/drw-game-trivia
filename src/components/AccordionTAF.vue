<template>
    <div class="accordion-item-content">
        <label for="taf-1" v-if="showContent">Your Friend's Email</label>
          <input type="email" id="taf-1">
          <div class="accordion-item-button-container">
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