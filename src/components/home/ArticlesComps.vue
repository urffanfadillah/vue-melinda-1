<template>
    <div class="container hospital-nearby my-4">
        <HeadingContent 
            subTitle="Melinda Hospital Articles"
            title="Latest News"
            no_text
        />        
        <div class="row">
            <div class="col-sm-4" v-for="article in articles" v-bind:key="article.id">
                <div class="card card-article">
                    <img v-bind:src="article.imgSrc" class="room-img card-img-top" alt="hotel-image">
                    <div class="card-body card-article-body" style="margin-top: -78px;">
                        <span class="badge bg-primary">{{article.tags}}</span>
                        <h5 class="card-title">
                            <!-- <a href="article-detail/">{{article.title}}</a> -->
                            <router-link :to="{ name: 'artikel', params: { id: article.id } }" >{{article.title}}</router-link>
                        </h5>
                        <span class="text-light">{{article.date}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>   
</template>

<script>
    import HeadingContent from "@/components/utils/HeadingContent.vue"    
    export default {
        components: { HeadingContent },
        data() {
            return {
                articles: [
                    { 
                        id: 1,
                        tags:"Tips & Healthy", 
                        title:"Tips Mengurangi Resiko Gejala Covid-19", 
                        date:"12 Januari 2021", 
                        imgSrc:"https://dummyimage.com/600x700/000/fff",
                        url:"https://google.com",
                        content: `In 2004 ago, dr. Susan Melinda, SpOG., a specialist in obstetrics and gynecology, established a hospital with the concept of a 5-star hotel and an art gallery that offers health facilities for women, especially mothers and children.

                        under the name Melinda Hospital. With an international standard, the hospital, which was established on July 23, 2004, is equipped with professional medical personnel. "Health is the main key to a woman's beauty and happiness. We are sincerely committed to realizing every woman's dream to look beautiful, healthy and happy." said dr. Susan Melinda about her concern for women's needs.

                        As a hospital devoted to women, Melinda Hospital was built so that all women can express their noble side, whether they are in a position as a woman or as a mother to their children. With a unique hospital concept, it will make patients and visitors feel comfortable. Melinda Hospital consists of five floors with a capacity of 33 beds, modern, energy efficient, minimalist architecture, spacious rooms and corridors. The Art & Craft Gallery which is installed along the corridor will also make the atmosphere warmer to welcome anyone who comes to Melinda Hospital.`                         
                    },
                    {
                        id: 2,
                        tags:"Corporate", 
                        title:"Fasilitas Terbaru di Melinda", 
                        date:"12 Januari 2021", 
                        imgSrc:"https://dummyimage.com/600x700/000/fff", 
                        url:"https://google.com",
                        content: `In 2004 ago, dr. Susan Melinda, SpOG., a specialist in obstetrics and gynecology, established a hospital with the concept of a 5-star hotel and an art gallery that offers health facilities for women, especially mothers and children.

                        under the name Melinda Hospital. With an international standard, the hospital, which was established on July 23, 2004, is equipped with professional medical personnel. "Health is the main key to a woman's beauty and happiness. We are sincerely committed to realizing every woman's dream to look beautiful, healthy and happy." said dr. Susan Melinda about her concern for women's needs.

                        As a hospital devoted to women, Melinda Hospital was built so that all women can express their noble side, whether they are in a position as a woman or as a mother to their children. With a unique hospital concept, it will make patients and visitors feel comfortable. Melinda Hospital consists of five floors with a capacity of 33 beds, modern, energy efficient, minimalist architecture, spacious rooms and corridors. The Art & Craft Gallery which is installed along the corridor will also make the atmosphere warmer to welcome anyone who comes to Melinda Hospital.`
                    },
                    {
                        id: 3,
                        tags:"Medical Care", 
                        title:"Teknologi Canggih Melinda Hospital", 
                        date:"12 Januari 2021", 
                        imgSrc:"https://dummyimage.com/600x700/000/fff",
                        url:"https://google.com",
                        content: `In 2004 ago, dr. Susan Melinda, SpOG., a specialist in obstetrics and gynecology, established a hospital with the concept of a 5-star hotel and an art gallery that offers health facilities for women, especially mothers and children.

                        under the name Melinda Hospital. With an international standard, the hospital, which was established on July 23, 2004, is equipped with professional medical personnel. "Health is the main key to a woman's beauty and happiness. We are sincerely committed to realizing every woman's dream to look beautiful, healthy and happy." said dr. Susan Melinda about her concern for women's needs.

                        As a hospital devoted to women, Melinda Hospital was built so that all women can express their noble side, whether they are in a position as a woman or as a mother to their children. With a unique hospital concept, it will make patients and visitors feel comfortable. Melinda Hospital consists of five floors with a capacity of 33 beds, modern, energy efficient, minimalist architecture, spacious rooms and corridors. The Art & Craft Gallery which is installed along the corridor will also make the atmosphere warmer to welcome anyone who comes to Melinda Hospital.` 
                    }
                ]
            }
        }
    }
</script>

<style>
    .card-article {
        position: relative;
    }

    .card-article-body {
        position: absolute;
        bottom: 8px;
        left: 16px;
    }

    .card-article-body h5 a {
        color: white;
        width: 100% !important;
        font-size: 20px;
        font-weight: bold !important;
        text-decoration: none;    
    }
    .card-article-body h5 a:hover {
        color: white;
        width: 100% !important;
        font-size: 20px;
        font-weight: bold !important;
        text-decoration: none;
        opacity: 0.5;    
    }
    @media (max-width: 1199.98px) {
        footer #contact {        
            padding: 48px 8% 48px 8%;
            justify-content: space-between;
            background-color: #FEF8F0;        
        }
        footer hr { width: 84%; }
    }
</style>