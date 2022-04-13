<script>
    import FooterContent from "@/components/utils/FooterContent.vue"
    import HeadingContent from "@/components/utils/HeadingContent.vue";
    export default {
        components: {
            FooterContent, HeadingContent
        },
        data() {
            return {
                tags: [
                    {id: 1, name: 'Corporate'},
                    {id: 2, name: 'Healthy Tips'},
                    {id: 3, name: 'News'},
                    {id: 4, name: 'Technologi'},
                    {id: 5, name: 'Covid 19'},
                    {id: 6, name: 'Announcement'}
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
    <section class="container my-5 row mx-auto">
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
            <h3>Categories</h3>
            <ul class="list-group">
                <li class="list-group-item" v-for="t in this.tags" :key="t.id">
                    {{ t.name }}
                </li>
            </ul>
        </div>        
    </section>    
    <FooterContent />
</template>

<style>

</style>