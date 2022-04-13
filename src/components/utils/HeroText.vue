<template>    
  <section class="container d-flex justify-content-center flex-column links-hero gap-2 py-5">
      <span class="content-sub-title text-center">{{subTitle}}</span>
      <h1 class="content-title text-center">{{title}}</h1>
      <p class="text-center links-desc">
          {{content}}
      </p>
  </section>
</template>

<script>
    export default {
        props: {
            title: String,
            subTitle: String,
            content: String,
        }
    }
</script>

<style>

</style>