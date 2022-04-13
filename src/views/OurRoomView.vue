<script>
    import FooterContent from "@/components/utils/FooterContent.vue"
    import HeroContent from "@/components/utils/HeroContent.vue"
    import HeadingContent from "@/components/utils/HeadingContent.vue"
    import CardRooms from "@/components/our-room/CardRooms.vue"
    import ContentImages from "@/components/utils/ContentImages.vue"
    export default {
        components: {
            FooterContent, HeroContent, HeadingContent, CardRooms, ContentImages
        }
    }
</script>

<template>
    <HeroContent noBackground>
        <div class="col-md-4" id="konten-hero">
            <HeadingContent
                subTitle="Melinda Hospital Room"
                title="The Best Suite and VIP"
                paragraph="Health is the main key to a woman's beauty and happiness. Melinda Hospital is sincerely committed to realizing every woman's dream to look beautiful, healthy and happy."
                text_dark
                blue_title                
            />     
        </div>
        <template #imagesSlot>
            <img src="@/assets/images/room-hero.png" class="d-none d-lg-block img-fluid" alt="heroimages" loading="lazy" id="hero-images-homepage">    
        </template>         
        <div class="col-md-8" id="konten-img">
            <img src="@/assets/images/room-hero.png" class="d-none d-md-block d-lg-none img-fluid" alt="heroimages" loading="lazy" id="hero-image"/>
        </div>        
    </HeroContent>
    <CardRooms />
    <ContentImages 
            isBlue
            subTitle="Melinda Hospital Mother Care"
            title="“The Best Place and Friendly Nurse”"
            paragraph="I never expected to have a comfortable birthing experience, good and friendly doctors and nurses made me and my family close."
            textWhite
            quote="Hannah S Johnson"
        >
        <img src="@/assets/images/room-hero-1.png" alt="services" class="img-fluid" style="object-fit: cover;">    
    </ContentImages>
    <FooterContent />
</template>