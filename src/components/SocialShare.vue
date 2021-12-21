<template>
  <div>
    <button>TWITTER</button>
    <button>FACEBOOK</button>
  </div>
</template>

<script>
export default {
    props:{
        description: String,
        title: String,
        image: String,
    },
    methods:{
        shareOnTwitter(){
            this.updateMetaContent();
            //todo open share model

        },
        shareOnFacebook(){
            this.updateMetaContent();
            //todo open share model

        },
        updateMetaContent(){

        }
    }
};
</script>

<style>
</style>