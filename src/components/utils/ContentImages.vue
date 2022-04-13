<script>
export default {
    props: {
        imgSrc: String,
        subTitle: String,
        title: String,
        paragraph: String,
        isCream: Boolean,
        isBlue: Boolean,
        textWhite: Boolean,
        noBackground: Boolean,
        isSwaped: Boolean,
        quote: String,        
    }
}
</script>

<template>
    <section class="container-fluid konten row mx-0"
        :class="{'background-cream' : isCream, 'background-blue' : isBlue, 'no-background' : noBackground }"
    >
        <div class="col-sm-6 mb-5 mb-md-0" :class="{'order-2' : isSwaped}">
            <slot>
                
            </slot>
        </div>        
        <div class="col-sm-6 my-auto">
            <span class="content-sub-title mb-1">{{subTitle}}</span>
            <h1 class="content-title fw-bold mb-2" :class="{'text-white' : textWhite}">{{title}}</h1>
            <p class="fw-light" :class="{'text-white' : textWhite}">
                {{paragraph}}
            </p>
            <p v-if="quote" class="fw-bold" :class="{'text-white' : textWhite}">
                {{quote}}
            </p>
            <slot name="extra">

            </slot>
        </div>
    </section>
</template>

<style>
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