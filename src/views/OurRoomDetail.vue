<template>
    <section class="py-5 row container mx-auto">
        <div class="col-sm-6">
            <div class="row" v-for="(image, index) in images" :key="image.id">
                <div class="card mb-3" v-if="index == 0">
                    <img v-bind:src="image.imgUrl" class="card-img-top thumbnail" :alt="image.title" @click="toggler = !toggler" />
                </div>
            </div>
            <div class="row">
                <div class="col-sm-3 px-0" v-for="(image, index) in images" :key="image.id">
                    <div class="card" @click="toggler = !toggler">
                        <img v-bind:src="image.imgUrl" class="card-img-top" :alt="image.title" v-if="index < 4" />                        
                    </div>
                </div>
            </div>
            <!-- Lightbox -->
            <div>
                <FsLightbox
                    :toggler="toggler"
                    :sources="img"
                />
            </div>
        </div>
        <div class="col-sm-6 align-self-center">
            <section class="container d-flex justify-content-start flex-column my-2" style="padding-left: 0;">
                <span class="content-sub-title text-left">Melinda Hospital Room</span>
                <h1 class="content-title text-left fs-1 fw-bold">Three Bed Room</h1>
            </section>
            <div class="row my-2">
                <div class="col-sm-6 d-flex my-2" v-for="c in checklist" :key="c">
                    <span><i class="bi bi-check-lg"></i><span class="mx-2"></span>{{ c }}</span>
                </div>
            </div>
            <a href="#" class="btn btn-primary my-2">Discover for Next Room</a>
        </div>
    </section>
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

<script>
    import FsLightbox from "fslightbox-vue/v3";
    import FooterContent from "@/components/utils/FooterContent.vue"
    import ContentImages from "@/components/utils/ContentImages.vue"
    export default {
        components: {
            FooterContent, FsLightbox, ContentImages
        },
        data() {
            return {
                toggler: false,
                subtitle: 'Melinda Hospital Room',
                title: 'Three Bed Room',
                checklist : [
                    'Bed & Remote',
                    'Boven Laken',
                    'Bed Lamps',
                    'Laken',
                    'Telephone',
                    'AC & Remote',
                    'Tiang Infus',
                    'TV & remote',
                    'Suction Portable + Tabung',
                    'Wifi',
                    'Stik Laken'
                ],
                 images : [
                    { id: 1, title: 'Example Gallery', imgUrl: 'https://dummyimage.com/400x400/000/fff&text=1' },
                    { id: 2, title: 'Example Gallery', imgUrl: 'https://dummyimage.com/400x400/000/fff&text=2' },
                    { id: 3, title: 'Example Gallery', imgUrl: 'https://dummyimage.com/400x400/000/fff&text=3' },
                    { id: 4, title: 'Example Gallery', imgUrl: 'https://dummyimage.com/400x400/000/fff&text=4' },
                    { id: 5, title: 'Example Gallery', imgUrl: 'https://dummyimage.com/400x400/000/fff&text=5' },
                    { id: 6, title: 'Example Gallery', imgUrl: 'https://dummyimage.com/400x400/000/fff&text=6' },
                    { id: 7, title: 'Example Gallery', imgUrl: 'https://dummyimage.com/400x400/000/fff&text=7' },
                ],
                img: [
                    'https://dummyimage.com/400x400/000/fff&text=1',
                    'https://dummyimage.com/400x400/000/fff&text=2',
                    'https://dummyimage.com/400x400/000/fff&text=3',
                    'https://dummyimage.com/400x400/000/fff&text=4',
                    'https://dummyimage.com/400x400/000/fff&text=5',
                    'https://dummyimage.com/400x400/000/fff&text=6',
                    'https://dummyimage.com/400x400/000/fff&text=7',
                ]
            }
        }
    }
</script>

<style scoped>
    a.btn {
        background-color: #FCE8CE;
        border-radius: 40px;
        border: transparent;
        font-weight: 700;
        font-size: 24px;
        color: #1B4674;
    }
    a.btn:hover {
        background-color: #FCE8CE;
        border-radius: 40px;
        border: transparent;
        font-weight: 700;
        font-size: 24px;
        color: #1B4674;
        opacity: 0.5;
    }
    .card {
        padding: 0;
    }
    .thumbnail {
        max-height: 320px;
        object-fit: cover;
    }
    span {
        color: #474747;
    }
    .bi.bi-check-lg {
        color: #75C6EF;
    }
</style>