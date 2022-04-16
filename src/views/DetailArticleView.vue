<script>
    import FooterContent from "@/components/utils/FooterContent.vue"
    import HeadingContent from "@/components/utils/HeadingContent.vue";
    export default {
        components: {
            FooterContent, HeadingContent
        },
        data() {
            return {
                categories: [
                    {id: 1, name: 'Corporate'},
                    {id: 2, name: 'Healthy Tips'},
                    {id: 3, name: 'News'},
                    {id: 4, name: 'Technologi'},
                    {id: 5, name: 'Covid 19'},
                    {id: 6, name: 'Announcement'}
                ],
                tags: [
                    {id: 1, name: 'Corona Vac'},
                    {id: 2, name: 'WHO'},
                    {id: 3, name: 'Technology'},
                    {id: 4, name: 'Journal Medic'},
                    {id: 5, name: 'Pfizer'},
                    {id: 6, name: 'SWAB'},
                    {id: 7, name: 'BPJS'},
                    {id: 8, name: 'Asuransi'}
                ],
                article: { 
                    id: 1,
                    tags:"Tips & Healthy", 
                    title:"Tips Mengurangi Resiko Gejala Covid-19", 
                    date:"12 Januari 2021", 
                    imgSrc:"https://dummyimage.com/600x400/000/fff",
                    url:"https://google.com",
                    content: `In 2004 ago, dr. Susan Melinda, SpOG., a specialist in obstetrics and gynecology, established a hospital with the concept of a 5-star hotel and an art gallery that offers health facilities for women, especially mothers and children.

                    under the name Melinda Hospital. With an international standard, the hospital, which was established on July 23, 2004, is equipped with professional medical personnel. "Health is the main key to a woman's beauty and happiness. We are sincerely committed to realizing every woman's dream to look beautiful, healthy and happy." said dr. Susan Melinda about her concern for women's needs.

                    As a hospital devoted to women, Melinda Hospital was built so that all women can express their noble side, whether they are in a position as a woman or as a mother to their children. With a unique hospital concept, it will make patients and visitors feel comfortable. Melinda Hospital consists of five floors with a capacity of 33 beds, modern, energy efficient, minimalist architecture, spacious rooms and corridors. The Art & Craft Gallery which is installed along the corridor will also make the atmosphere warmer to welcome anyone who comes to Melinda Hospital.`,
                    postedBy: 'Admin'                      
                }
            }
        }
    }
</script>

<template>
    <section class="container-fluid background-cream">
        <section class="container py-5 row mx-auto">
            <div class="col-sm-8">
                <HeadingContent 
                    :subTitle="this.article.tags"
                    :title="this.article.title"
                    :paragraph="this.article.date"
                    blue_title
                    text_dark
                />
                <!-- article content -->
                <div class="container-fluid">
                    <img class="img-fluid" :src="this.article.imgSrc" :alt="this.article.title" />
                    <div class="lead my-4" v-html="this.article.content"></div>
                </div>
                <!-- /article content -->
            </div>
            <div class="col-sm-4">
                <div class="card-other-jobs p-4 mb-5">
                    <h5>Looking for other available position ?</h5>
                    <p>Melinda Hospital Jobs</p>
                    <a href="#" class="button-browse-job btn btn-priamry align-self-center btn-cream">Browse Other Job</a>
                </div>
                <h3>Categories</h3>
                <ul class="list-group mb-5">
                    <li class="list-group-item" v-for="c in this.categories" :key="c.id">
                        <a href="#">{{ c.name }}</a>
                    </li>
                </ul>
                <h3>Tags</h3>
                <span class="badge mx-2"  v-for="t in this.tags" :key="t.id">{{ t.name }}</span>                
            </div>        
        </section> 
    </section>   
    <FooterContent />
</template>

<style scoped>
    .badge {
        background-color: #FCE8CE;
        color: #474747;        
    }
    .badge:hover {
        background-color: #ffffff;
        color: #474747;
        cursor: pointer;
    }
    ul.list-group .list-group-item {
        padding-left: 0px;
        background-color: transparent;
        border-top: 1px solid transparent;
        border-right: 1px solid transparent;
        border-bottom: 1px solid #474747;
        border-left: 1px solid transparent;
    }
    ul.list-group .list-group-item a {
        font-weight: 600;
        text-decoration: none;
    }
    ul.list-group .list-group-item a:hover {
        text-decoration: none;
        opacity: 0.5;
    }
    h3 {
        color: #1B4674;
    }
    .card-other-jobs {
        background: #75C6EF;
    }
    .card-other-jobs h5 { color: #1B4674; font-weight: bold; font-size: 18px }
    .card-other-jobs p { color: #ffffff; font-size: 14px }
    .btn-cream {
        background-color: #FCE8CE !important;
        color: #575757 !important;
        font-size: 14px !important;
        padding: 8px 24px 8px 24px !important;
        border-radius: 40px;
    }
    .btn-cream:hover {
        background-color: #e7cca7 !important;
        color: #575757 !important;
        font-size: 14px !important;
        padding: 8px 24px 8px 24px !important;
    }
</style>