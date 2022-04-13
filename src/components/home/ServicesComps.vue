<script>
    import HeadingContent from "@/components/utils/HeadingContent.vue"
    export default {
        components: {
            HeadingContent,
        }
    }
</script>

<template>
    <!-- great services -->
    <div class="container services py-0 py-md-5">
        <div id="services-content" class="row align-items-end g-5 py-5">
        <div class="col-sm-6 services-text">
            <HeadingContent 
                subTitle="Melinda Hospital Suite Room Balcony 1"
                title="Our Great Services"
                paragraph="Health is the main key to a woman's beauty and happiness. Melinda Hospital is sincerely committed to realizing every woman's dream to look beautiful, healthy and happy."
                text_dark
                
            />
        </div>
        <div class="col-sm-6">
            <img src="@/assets/images/services.png" class="d-block mx-auto img-fluid" alt="Bootstrap Themes" style="width: 100%;" height="500" loading="lazy">
        </div>
        </div>
    </div>
</template>

<style scoped>
    .container { margin-top: -12%; }
</style>