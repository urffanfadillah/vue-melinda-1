<template>
  <div class="card card-article">
        <img v-bind:src="imgSrc" class="room-img card-img-top" alt="hotel-image">
        <div class="card-body card-article-body" style="margin-top: -78px;">
            <span class="badge bg-primary">{{tags}}</span>
            <h5 class="card-title">{{title}}</h5>
            <span class="text-light">{{date}}</span>
        </div>
  </div>
</template>

<script>
export default {
    props: {
        tags: String,
        title: String,
        date: String,
        imgSrc: String
    }
}
</script>

<style>
    .card-article {
        position: relative;
    }

    .card-article-body {
        position: absolute;
        bottom: 8px;
        left: 16px;
    }

    .card-article-body h5 {
        color: white;
        width: 100% !important;
        font-size: 20px;
        font-weight: bold !important;    
    }
</style>