<script>
export default {     
    props: {
        isCream: Boolean,
        isBlue: Boolean,
        textWhite: Boolean,
        noBackground: Boolean,
        imgSrc: String   
    }
}
</script>

<template>
    <section id="hero-homepage" class="container-fluid px-0">
        <div class="konten"
            :class="{ 'text-white' : textWhite, 'background-cream' : isCream, 'background-blue' : isBlue, 'no-background' : noBackground }"
        >
            <div class="row align-items-center pt-5 pb-2">
                <!-- Kasih slot -->
                <slot></slot>
                <!-- Kasih slot -->          
            </div>
        </div>
        <div class="wrapper-hero-img">
            <slot name="imagesSlot"></slot>            
        </div>
        <div class="konten d-none d-lg-block" style="background-color: rgba(255, 255, 255, 0); padding-top: 14px; padding-bottom: 14px;">
            <div class="d-flex gap-2">
                <img src="@/assets/images/mouse-icon.png" alt="mouse-icon" class="mouse img-fluid">
                <p class="my-auto">Scroll to bottom</p>
            </div>
        </div>        
    </section>
    <!-- konten img yang versi desktop -->    
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
        margin-top: -30% !important;
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