<script>
    import ContentImages from "@/components/utils/ContentImages.vue"
    import axios from "axios"
    export default {
        components: {
            ContentImages
        },
        data() {
            return {
                infoHistory: [],
            }
        },
        mounted() {
            axios.get('https://backend1.melindadev.com/api/about')
            .then(response => (this.infoHistory = response.data.history))
        },
    }
</script>

<template>
    <ContentImages isCream        
        subTitle="Melinda Hospital"
        :title="infoHistory.title"
        :paragraph="infoHistory.description"
    >
        <img src="@/assets/images/group-about.png" alt="services" class="img-fluid" style="object-fit: cover;">
    </ContentImages>
</template>

<style>

</style>