<script>
    import HeadingContent from "@/components/utils/HeadingContent.vue"
    import axios from "axios"
    export default {
        components: {
            HeadingContent
        },
        data() {
            return {
                info: [],
            }
        },
        mounted() {
            axios.get('https://backend1.melindadev.com/api/about')
            .then(response => (this.info = response.data.filosofy))
        },
    }
</script>

<template>
    <div class="container mx-auto py-5">
        <HeadingContent 
            subTitle="Melinda Hospital"
            :title="info.title"
        />
        <div class="row">
            <div class="col-sm-12">
                <p>
                    {{ info.description }}
                </p>
            </div>
        </div>
    </div>
</template>

<style>

</style>