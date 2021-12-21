<template>
  <iframe
    :width="width"
    :height="height"
    :src="url"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</template>

<script>
export default {
  props: {
    url: String,
    width: { type: Number, default: 560 },
    height: { type: Number, default: 315 },
  },
};
</script>

<style>
</style>