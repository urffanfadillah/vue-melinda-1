<script>
    import FsLightbox from "fslightbox-vue/v3";
    export default {
        components: { FsLightbox },
        data() {
            return {
                toggler: false,
                images : [
                        { id: 1, title: 'Example Gallery', imgUrl: 'https://dummyimage.com/400x400/000/fff&text=1' },
                        { id: 2, title: 'Example Gallery', imgUrl: 'https://dummyimage.com/400x400/000/fff&text=2' },
                        { id: 3, title: 'Example Gallery', imgUrl: 'https://dummyimage.com/400x400/000/fff&text=3' },
                        { id: 4, title: 'Example Gallery', imgUrl: 'https://dummyimage.com/400x400/000/fff&text=4' },
                        { id: 5, title: 'Example Gallery', imgUrl: 'https://dummyimage.com/400x400/000/fff&text=5' },
                        { id: 6, title: 'Example Gallery', imgUrl: 'https://dummyimage.com/400x400/000/fff&text=6' },
                        { id: 7, title: 'Example Gallery', imgUrl: 'https://dummyimage.com/400x400/000/fff&text=7' },
                ],
                imagesNoText : [
                    'https://dummyimage.com/600x400/000/fff&text=1',
                    'https://dummyimage.com/600x400/000/fff&text=2',
                    'https://dummyimage.com/600x400/000/fff&text=3',
                    'https://dummyimage.com/600x400/000/fff&text=4',
                    'https://dummyimage.com/600x400/000/fff&text=5',
                    'https://dummyimage.com/600x400/000/fff&text=6',
                    'https://dummyimage.com/600x400/000/fff&text=7',
                ]            
            }
        }
    }
</script>

<template>
    <section id="rooms" class="container-fluid py-5 px-xl-5">        
        <div class="mx-auto container row">
            <!-- Card Overlay -->
            <div class="col-sm-4 card bg-transparent text-white mb-4" v-for="image in images" :key="image.id" @click="toggler = !toggler">
                <img v-bind:src="image.imgUrl" class="card-img" :alt="image.title">
                <div class="card-img-overlay position-relative">
                    <h5 class="card-title position-absolute bottom-100 start-10" v-text="image.title"></h5>
                </div>
            </div>            
            <!-- Lightbox -->
            <div>
                <FsLightbox
                    :toggler="toggler"
                    :sources="imagesNoText"
                />
            </div>
        </div>
    </section>
</template>

<style scoped>
    .card {
        background-color: #ffffff00;
        border: none;
    }
    .card:hover {
        background-color: #ffffff00;
        opacity: 0.5;
        cursor: pointer;
    }
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

    #rooms p {
        width: 60%;
        margin: 0 auto;
    }

    .card-room {
        position: relative;
    }

    .card-room-body {
        position: absolute;
        /* bottom: 8px;
        left: 16px; */
    }

    .card-room p {
        color: white;
        width: 100% !important;
        font-size: 20px;
        font-weight: bold !important;    
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