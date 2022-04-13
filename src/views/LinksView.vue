<script>
    import FooterContent from "@/components/utils/FooterContent.vue"
    import HeroText from "@/components/utils/HeroText.vue"
    import HeadingContent from "@/components/utils/HeadingContent.vue"
    export default {
        components: {
            FooterContent, HeroText, HeadingContent
        }
    }
</script>

<template>
    <HeroText 
        subTitle="Melinda Hospital"
        title="Melinda Hospital Group Site"
        content="Health is the main key to a woman's beauty and happiness. Melinda Hospital is sincerely committed to realizing every woman's dream to look beautiful, healthy and happy."
    />
    <!-- <section class="container d-flex justify-content-center flex-column links-hero gap-2">
        <img src="@/assets/images/logo.png" class="img-fluid mx-auto" alt="logo" style="width: 16rem;">
        <span class="content-sub-title text-center">Melinda Hospital Gallery</span>
        <h1 class="content-title text-center">Welcome Melinda Hospital Group</h1>
        <p class="text-center links-desc">
            Melinda Hospital presents a different hospital atmosphere with a touch of art, and is equipped with international standard facilities and services. Located in Bandung, West Java, Indonesia.
        </p>
    </section> -->
    <!-- <section class="mx-0 px-0 container-fluid row">
        <div class="bg-img-1 col-sm-4 px-5 pb-5 d-flex">       
          <div class="align-self-end">
            <h1 class="text-white fw-bold mb-2">RSIA Melinda</h1>
          </div>
        </div>
        <div class="bg-img-2 col-sm-4 px-5 pb-5 d-flex">
          <div class="align-self-end">
            <h1 class="text-white fw-bold mb-2">RS Melinda 2</h1>
          </div>
        </div>
        <div class="bg-img-3 col-sm-4 px-5 pb-5 d-flex">
            <div class="align-self-end">
              <h1 class="text-white fw-bold mb-2">RS Melinda 3</h1>
            </div>
        </div>
    </section> -->
    <section class="mx-0 px-0 container-fluid row">
        <div class="col-sm-12 bg-link-img-2 row mx-0">
            <div class="col-sm-6">
                <HeadingContent 
                    title="Melinda Hospital 2"
                    subTitle="Group of Melinda Hospital"
                    paragraph="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. "
                    text_dark
                >
                    <a href="#" class="link-to-website btn btn-light text-white">Link To Website <i class="bi bi-arrow-right"></i></a>
                </HeadingContent>
            </div>
        </div>
        <div class="col-sm-12 row mx-0 px-0">
            <div class="col-sm-6 bg-link-img-3"></div>
            <div class="col-sm-6 content-melinda-3">
                <HeadingContent 
                    title="Melinda Hospital 3"
                    subTitle="Group of Melinda Hospital"
                    paragraph="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. "
                    white_title
                >
                    <a href="#" class="link-to-website btn btn-light text-white">Link To Website <i class="bi bi-arrow-right"></i></a>
                </HeadingContent>
            </div>
        </div>
    </section>
    <section class="mx-0 container-fluid row background-cream" id="link-other">
        <div class="col-sm-4 link-icon">
            <div class="d-flex align-items-center gap-3">
                <img src="@/assets/images/first-aid-kit.png" alt="first-aid" />
                <h3 class="align-self-center">Zona P3K</h3>
            </div>
            <p>Dapatkan berbagai informasi dan pengetahuan seputar pertolongan pertama pada kecelakaan</p>
            <a href="#" class="link-to-website btn btn-primary">Link to Website <i class="bi bi-arrow-right"></i></a>
        </div>
        <div class="col-sm-4 link-icon">
            <div class="d-flex align-items-center gap-3">
                <img src="@/assets/images/baby.png" alt="first-aid" />
                <h3 class="align-self-center">Ide Nama Bayi</h3>
            </div>
            <p>Dapatkan berbagai informasi dan pengetahuan seputar pertolongan pertama pada kecelakaan</p>
            <a href="#" class="link-to-website btn btn-primary">Link to Website <i class="bi bi-arrow-right"></i></a>
        </div>
        <div class="col-sm-4 link-icon">
            <div class="d-flex align-items-center gap-3">
                <img src="@/assets/images/hospital.png" alt="hospital" />
                <h3 class="align-self-center">Foodtraveler</h3>
            </div>
            <p>Dapatkan berbagai informasi dan pengetahuan seputar pertolongan pertama pada kecelakaan</p>
            <a href="#" class="link-to-website btn btn-primary">Link to Website  <i class="bi bi-arrow-right"></i></a>
        </div>
    </section>
    <FooterContent />
</template>

<style scoped>
    #link-other {
        padding: 160px 80px;
    }

    .link-to-website {
        border-radius: 40px;
        background-color: #75C6EF;
        padding: 8 16px 8 16px;
        font-size: 14px;
        border: none;
    }
    
    .link-to-website:hover {
        border-radius: 40px;
        background-color: #57add8;
        padding: 8 16px 8 16px;
        font-size: 14px;
        border: none;
    }

    .konten {
        padding: 48px 10% 48px 10%;     
    }

    .background-cream {
        background-color: #FDF4E9;
    }
    p.fw-light {
        line-height: 150%;
        color: #575757 !important;
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

    .bg-link-img-2 {        
        background-image: url("@/assets/images/bg-link-1.png");
        background-size: cover;
        object-fit: cover;    
        padding: 120px 0 120px 60px;
    }
    
    .bg-link-img-3 {        
        background-image: url("@/assets/images/bg-link-2.png");
        background-size: cover;
        object-fit: cover;            
    }

    .content-melinda-3 {
        padding: 120px 60px 120px 60px;
        background-color: #1B4674;        
    }

    .links-desc {
        width: 60%;
        margin: 0 auto;
    }

    .card-link {
        position: relative;
    }

    .card-link-body {
        position: absolute;
        bottom: 8px;
        left: 16px;
    }

    .card-link-body p {
        color: #575757;
        width: 100% !important;
        font-size: 20px;
        font-weight: bold !important;    
    }

    .links-hero { padding: 80px 0 80px 0; }

    @media (max-width: 575px) {
        .wrapper-hero-img {
            margin-top: 0;
            z-index: 0;
            display: none;
            justify-content: end;    
        }
        .links-desc {
            width: 90%;
            margin: 0 auto;
        }
        .bg-link-img-2 {        
            background-image: url("@/assets/images/bg-link-1.png");
            background-size: cover;
            object-fit: cover;    
            padding: 120px 0 120px 0px;
        }
        #link-other {
            padding: 80px 20px;
        }
    }

    @media (max-width: 1199.98px) {
        #link-other {
            padding: 80px 40px;
        }
        .wrapper-hero-img {
            margin-top: 0;
            z-index: 0;
            display: flex;
            justify-content: end;    
        }
        .links-desc {
            width: 80%;
            margin: 0 auto;
        }
        .bg-link-img-2 {        
            background-image: url("@/assets/images/bg-link-1.png");
            background-size: cover;
            object-fit: cover;    
            padding: 120px 0 120px 0px;
        }
    }
</style>