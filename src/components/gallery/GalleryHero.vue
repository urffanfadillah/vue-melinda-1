<template>
    <section class="container d-flex justify-content-center flex-column gallery-hero py-5">
        <span class="content-sub-title text-center">{{subTitle}}</span>
        <h1 class="content-title text-center">{{title}}</h1>
        <p class="text-center gallery-desc">
            {{paragraph}}
        </p>
    </section>
</template>

<script>
export default {
    props: {
        subTitle: String,
        title: String,
        paragraph: String,
    }
}
</script>

<style>

</style>