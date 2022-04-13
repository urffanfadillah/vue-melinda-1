<script>
  import HeroText from "@/components/utils/HeroText.vue"
  import AboutContent from "@/components/about/AboutContent.vue"
  import json from './json/About.json'
  export default {
    data(){
      return {
        aboutData: json
      }
    },
    components: {
      HeroText, AboutContent
    }
  } 
</script>

<template>
    <HeroText 
      subTitle="Melinda Hospital"
      title="Melinda Hospital Founded in 2004"
      content="Health is the main key to a woman's beauty and happiness. Melinda Hospital is sincerely committed to realizing every woman's dream to look beautiful, healthy and happy."
    />
    <AboutContent />
</template>
