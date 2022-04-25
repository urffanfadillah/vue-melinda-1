<script>
    import ContentImages from "@/components/utils/ContentImages.vue"
    import axios from "axios"
    export default {
        components: {
            ContentImages
        },
        data() {
            return {
                info: [],
            }
        },
        mounted() {
            axios.get('https://backend1.melindadev.com/api/about')
            .then(response => (this.info = response.data.vision_mission))
        },
    }
</script>

<template>
    <ContentImages
        subTitle="Melinda Hospital Gallery"
        :title="info.title"
        :paragraph="info.description"
        textWhite
    >
        <img src="@/assets/images/images-about-1.png" alt="services" class="img-fluid" style="object-fit: cover;">
    </ContentImages>
</template>

<style>

</style>