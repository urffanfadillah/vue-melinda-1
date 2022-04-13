<script>
    import FooterContent from "@/components/utils/FooterContent.vue"
    import GalleryHero from "@/components/gallery/GalleryHero.vue"
    import GalleryContent from "@/components/gallery/GalleryContent.vue"
    import ContentImages from "@/components/utils/ContentImages.vue"
    export default {
        components: {
            FooterContent,
            GalleryHero,
            GalleryContent,
            ContentImages
        }
    }
</script>

<template>
    <GalleryHero subTitle="Melinda Hospital Gallery" title="We adapt Modern and Comfort Place"
        paragraph="Health is the main key to a woman's beauty and happiness. Melinda Hospital is sincerely committed to realizing every woman's dream to look beautiful, healthy and happy." 
    />
    <GalleryContent />
    <!-- <section class="py-5 background-cream">
        <div class="d-flex justify-content-center gap-2">
            <img src="@/assets/images/mouse-icon.png" alt="mouse-icon" class="mouse img-fluid">
            <p class="my-auto">Scroll to bottom</p>
        </div>
        <div class="container row py-5 mx-auto">
            <div class="col-sm-6 my-4 py-md-0">
                <img src="@/assets/images/gallery-hero-1.png" alt="gallery-img" class="img-fluid">
            </div>
            <div class="col-sm-6 pl-4 pl-md-0 align-self-center my-4 py-md-0">
                <span class="content-sub-title">Melinda Hospital Gallery</span>
                <h1 class="content-title">Story in Every Place</h1>
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 

                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
                </p>
                <a href="#" class="btn btn-light">View Gallery</a>
            </div>
        </div>
        <div class="container row py-5 mx-auto">
            <div class="col-sm-6 pl-4 pl-md-0 align-self-center my-4 py-md-0">
                <span class="content-sub-title">Melinda Hospital Gallery</span>
                <h1 class="content-title">Beautiful Smile of Babbies</h1>
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                </p>
                <a href="#" class="btn btn-light">View Gallery</a>
            </div>
            <div class="col-sm-6 my-4 py-md-0">
                <img src="@/assets/images/gallery-hero-2.png" alt="gallery-img" class="img-fluid">
            </div>
        </div>
    </section> -->
    <ContentImages
        isBlue
        subTitle="Melinda Hospital Gallery"
        title="Doctor and Nurses"
        paragraph="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        textWhite
    >        
        <img src="@/assets/images/galler-hero-3.png" alt="services" class="img-fluid" style="object-fit: cover;">        
    </ContentImages>
    <FooterContent />
</template>