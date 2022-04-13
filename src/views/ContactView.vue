<script>
    import FooterContent from "@/components/utils/FooterContent.vue"
    import HeroContent from "@/components/utils/HeroContent.vue"
    import HeadingContent from "@/components/utils/HeadingContent.vue"
    export default {
        components: {
            FooterContent, HeroContent, HeadingContent
        }
    }
</script>
<template>
    <!-- hero -->    
    <!-- <HeroContent noBackground>
        <div class="col-md-4" id="konten-hero">
            <HeadingContent 
                subTitle="Melinda Hospital"
                title="Get In Touch With Us"
                paragraph="Health is the main key to a woman's beauty and happiness. Melinda Hospital is sincerely committed to realizing every woman's dream to look beautiful, healthy and happy."
            />        
        </div>
        <template #imagesSlot>
            <img src="@/assets/images/hero-contact-1.png" class="d-none d-md-block d-lg-none img-fluid" alt="heroimages" loading="lazy" id="hero-image"/>
        </template>
    </HeroContent> -->
    <HeroContent noBackground>
        <div class="col-md-4" id="konten-hero">
            <HeadingContent
                subTitle="Melinda Hospital"
                title="Get In Touch With Us"
                paragraph="Health is the main key to a woman's beauty and happiness. Melinda Hospital is sincerely committed to realizing every woman's dream to look beautiful, healthy and happy."
                text_dark
                blue_title                
            />     
        </div>
        <template #imagesSlot>
            <img src="@/assets/images/hero-contact-1.png" class="d-none d-lg-block img-fluid" alt="heroimages" loading="lazy" id="hero-images-homepage">    
        </template>        
        <div class="col-md-8" id="konten-img">
            <img src="@/assets/images/hero-contact-1.png" class="d-none d-md-block d-lg-none img-fluid" alt="heroimages" loading="lazy" id="hero-image"/>
        </div>        
    </HeroContent>
    <!-- konten img yang versi desktop -->
    <div class="wrapper-hero-img">        
        <img src="@/assets/images/hero-contact-1.png" class="d-none d-lg-block img-fluid" alt="heroimages" loading="lazy" id="hero-images-homepage">
    </div>
    <!-- content -->
    <section class="container-fluid konten background-cream row mt-5" style="padding-top: 120px; padding-bottom: 120px;">
        <div class="col-sm-6">
            <span class="content-sub-title mb-1">Melinda Hospital Mother Care</span>
            <h1 class="content-title fw-bold mb-2">Tell us what do you need?</h1>
            <div class="row mt-4">
                <div class="col-sm-6">
                    <span class="content-sub-title text-dark">Office</span>
                    <div class="my-2"></div>
                    <p>Jl.Pajajaran 46, Bandung Jawa Barat Indonesia</p>
                </div>
                <div class="col-sm-6">
                    <span class="content-sub-title text-dark">Contact</span>
                    <div class="my-2"></div>
                    <p>
                    Hunting  : (022) 4222788
                    Pendaftaran : (022) 4209088
                    Fax       : (022) 4215700
                    </p>
                </div>
                <div class="col-sm-6">
                    <span class="content-sub-title text-dark">Email</span>
                    <div class="my-2"></div>
                    <p>info@melindahospital.com</p>
                </div>
                <span id="contacts" class="col-sm-12 mt-4 d-flex align-items-center gap-3">
                    <a href="#"><i class="bi bi-facebook fs-4"></i></a>
                    <a href="#"><i class="bi bi-twitter fs-4"></i></a>
                    <a href="#"><i class="bi bi-linkedin fs-4"></i></a>
                    <a href="#"><i class="bi bi-instagram fs-4"></i></a>
                    <a class="btn btn-primary d-flex align-items-center gap-3" href="#">
                        Pendaftaran <i class="bi bi-arrow-right-short fs-4"></i>
                    </a>
               </span>
            </div>         
        </div>
        <div class="col-sm-6">
            <form>
                <div class="mb-3">
                  <label for="select-department">Department</label>
                  <select class="form-select" aria-label="select-department">
                    <option selected>Spesialis Kedokteran Gigi Anak</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div class="mb-3">
                  <label class="form-label">Full Name</label>
                  <input type="text" class="form-control" />
                </div>
                <div class="mb-3">
                    <label class="form-label">Email Adress</label>
                    <input type="email" class="form-control" />
                </div>
                <div class="mb-3">
                    <label class="form-label">Phone Number</label>
                    <input type="text" class="form-control" />
                </div>
                <div class="mb-3">
                    <label class="form-label">Messages</label>
                    <textarea class="form-control" id="messages" rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Send Us</button>
            </form>
        </div>        
    </section>
    <div class="mapouter">
        <div class="gmap_canvas">
            <iframe width="1080" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=Jl.%20Pajajaran%20No.46,%20Pasir%20Kaliki,%20Kec.%20Cicendo,%20Kota%20Bandung,%20Jawa%20Barat%2040171&t=&z=19&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            <a href="https://putlocker-is.org"></a><br>
            <a href="https://www.embedgooglemap.net">integrate google maps into website</a>            
        </div>
    </div>
    <FooterContent />
</template>

<style>
    iframe {width:100%;height:100%;} .mapouter{position:relative;text-align:right;height:400px;width:100%;}
    .gmap_canvas {overflow:hidden;background:none!important;height:400px;width:100%;}
    .konten {
        padding: 48px 10% 48px 10%;     
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

    .bg-img-2 {
        height: 460px;
        background-image: url("@/assets/images/services-img-4.png");
        background-size: cover;
        object-fit: cover;    
    }

    #rooms p {
        width: 60%;
        margin: 0 auto;
    }

    .card-room {
        position: relative;
    }

    .card-room-body {
        position: absolute;
        bottom: 8px;
        left: 16px;
    }

    .card-room p {
        color: white;
        width: 100% !important;
        font-size: 20px;
        font-weight: bold !important;    
    }

    #map {
        height: 400px;
        /* The height is 400 pixels */
        width: 100%;
        /* The width is the width of the web page */
    }

    @media (max-width: 575px) {
        .wrapper-hero-img {
            margin-top: 0;
            z-index: 0;
            display: none;
            justify-content: end;    
        }
        #rooms p {
            width: 90%;
            margin: 0 auto;
        }
    }

    @media (max-width: 1199.98px) {
        .wrapper-hero-img {
            margin-top: 0;
            z-index: 0;
            display: flex;
            justify-content: end;    
        }
        #rooms p {
            width: 80%;
            margin: 0 auto;
        }
    }
</style>