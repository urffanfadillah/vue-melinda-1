<template>
    <HeroText 
        subTitle="Melinda Hospital Gallery" 
        title="Every Place in Melinda Hospital"
        content="Health is the main key to a woman's beauty and happiness. Melinda Hospital is sincerely committed to realizing every woman's dream to look beautiful, healthy and happy."
    />
    <CardGallery />
    <FooterContent />
</template>

<script>
    import FooterContent from '@/components/utils/FooterContent.vue'
    import HeroText from "@/components/utils/HeroText.vue"
    import CardGallery from "@/components/gallery-detail/CardGallery.vue"   
    export default {
        data() {
            return {
            }
        },
        components: {
            FooterContent,
            CardGallery,
            HeroText
        }
    }
</script>


<style scoped>

</style>