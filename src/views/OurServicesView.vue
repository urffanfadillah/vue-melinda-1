<script>
    import FooterContent from "@/components/utils/FooterContent.vue"
    import HeadingContent from "@/components/utils/HeadingContent.vue"
    import HeroContent from "@/components/utils/HeroContent.vue"
    import ContentImages from "@/components/utils/ContentImages.vue"
    import BgServices from "@/components/our-services/BgServices.vue"
    export default {
        components: {
            FooterContent, HeadingContent, HeroContent, ContentImages, BgServices
        }
    }
</script>

<template>
    <HeroContent isCream>
        <div class="col-md-4" id="konten-hero">
            <HeadingContent
                subTitle="Melinda Hospital Services"
                title="Our Great Services"
                paragraph="Health is the main key to a woman's beauty and happiness. Melinda Hospital is sincerely committed to realizing every woman's dream to look beautiful, healthy and happy."
                text_dark
                blue_title                
            />     
        </div>
        <template #imagesSlot>
            <img src="@/assets/images/services.png" class="d-none d-lg-block img-fluid" alt="heroimages" loading="lazy" id="hero-images-homepage">    
        </template>        
        <div class="col-md-8" id="konten-img">
            <img src="@/assets/images/services.png" class="d-none d-md-block d-lg-none img-fluid" alt="heroimages" loading="lazy" id="hero-image"/>
        </div>        
    </HeroContent>    
    <!-- Melinda Fertility Center -->
    <ContentImages noBackground
        subTitle="Melinda Hospital Mother Care"
        title="Melinda Fertility Center"
        paragraph="Melinda Fertility Center is part of the Melinda Hospital which deals with fertility, both male and female. Melinda Fertility Center is supported by very supportive facilities, friendly service and"
    >
        <img src="@/assets/images/services-img.png" alt="services" class="img-fluid" style="object-fit: cover;">    
    </ContentImages>
    <!-- Kids Medical Specialist -->
    <ContentImages 
        isBlues 
        textWhite
        isSwaped
        subTitle="Melinda Hospital Kids Care"
        title="Kids Medical Specialist"
        paragraph="Melinda Fertility Center is part of the Melinda Hospital which deals with fertility, both male and female. Melinda Fertility Center is supported by very supportive facilities, friendly service and"        
    >
        <img src="@/assets/images/services-img-2.png" alt="services" class="img-fluid" style="object-fit: cover;">    
    </ContentImages>
    <BgServices />
    <FooterContent/>    
</template>

<style scoped>
    .konten {
        padding: 48px 10% 48px 10%;     
    }

    .no-background {
        background-color: #ffffff00;
    }
    .background-blue {
        background-color: #1B4674;
    }

    .background-cream {
        background-color: #FDF4E9;
    }
    p.fw-light {
        line-height: 150%;
        color: #575757;
    }
    #hero-images-homepage {
        width: 50%;    
        display: block;    
    }

    .wrapper-hero-img {
        margin-top: -30%;
        z-index: 998;
        display: flex;
        justify-content: end;    
    }

    .mouse {
        width: 34px;
    }

    .bg-img-1 {
        height: 460px;
        background-image: url("@/assets/images/services-img-3.png");
        background-size: cover;
        object-fit: cover;    
    }

    .bg-img-2 {
        height: 460px;
        background-image: url("@/assets/images/services-img-4.png");
        background-size: cover;
        object-fit: cover;    
    }

    .bg-img-1 p, .bg-img-2 p {
        color: white !important;
        z-index: 1000;
        filter: brightness(100%) !important;
    }

    @media (max-width: 575px) {
        .wrapper-hero-img {
            margin-top: 0;
            z-index: 0;
            display: none;
            justify-content: end;    
        }
    }

    @media (max-width: 1199.98px) {
        .wrapper-hero-img {
            margin-top: 0;
            z-index: 0;
            display: flex;
            justify-content: end;    
        }
    }
</style>