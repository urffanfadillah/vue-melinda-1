<script>
    import ContentImages from "@/components/utils/ContentImages.vue"
    export default {
        components: {
            ContentImages
        },
        data() {
            return {
                awards: [
                    {
                        id: 1,
                        year: "2005",
                        content: `
                            <div>                        
                            1. Penghargaan dari Museum of Records Indonesia (MURI) sebagai satu-satunya Rumah Sakit di Indonesia yang memiliki galeri seni dan budaya. <br>
                            2. Penghargaan dari Museum of Records Indonesia (MURI) atas kreativitas dan inovasi menyelenggarakan lomba lukis berbahan dasar coklat dalam rangka Hari Anak Nasional. <br>
                            </div>
                        `
                    },
                    { 
                        id: 2,
                        year: "2007",
                        content: `                        
                            <div>                        
                            1. Penghargaan dari Museum of Records Indonesia (MURI) sebagai satu-satunya Rumah Sakit di Indonesia yang memiliki galeri seni dan budaya. <br>
                            2. Penghargaan dari Museum of Records Indonesia (MURI) atas kreativitas dan inovasi menyelenggarakan lomba lukis berbahan dasar coklat dalam rangka Hari Anak Nasional. <br>
                            </div>                        
                        `
                    },
                    { 
                        id: 3,
                        year: "2009",
                        content: `                        
                            1. Penghargaan dari Museum of Records Indonesia (MURI) sebagai satu-satunya Rumah Sakit di Indonesia yang memiliki galeri seni dan budaya.
                            2. Penghargaan dari Museum of Records Indonesia (MURI) atas kreativitas dan inovasi menyelenggarakan lomba lukis berbahan dasar coklat dalam rangka Hari Anak Nasional.                        
                        `
                    },
                    { 
                        id: 4,
                        year: "2012",
                        content: `                        
                            <div>                        
                            1. Penghargaan dari Museum of Records Indonesia (MURI) sebagai satu-satunya Rumah Sakit di Indonesia yang memiliki galeri seni dan budaya. <br>
                            2. Penghargaan dari Museum of Records Indonesia (MURI) atas kreativitas dan inovasi menyelenggarakan lomba lukis berbahan dasar coklat dalam rangka Hari Anak Nasional. <br>
                            </div>                        
                        `
                    },
                    { 
                        id: 5,
                        year: "2014",
                        content: `                        
                            <div>                        
                            1. Penghargaan dari Museum of Records Indonesia (MURI) sebagai satu-satunya Rumah Sakit di Indonesia yang memiliki galeri seni dan budaya. <br>
                            2. Penghargaan dari Museum of Records Indonesia (MURI) atas kreativitas dan inovasi menyelenggarakan lomba lukis berbahan dasar coklat dalam rangka Hari Anak Nasional. <br>
                            </div>                        
                        `
                    },
                    { 
                        id: 6,
                        year: "2015",
                        content: `                        
                            <div>                        
                            1. Penghargaan dari Museum of Records Indonesia (MURI) sebagai satu-satunya Rumah Sakit di Indonesia yang memiliki galeri seni dan budaya. <br>
                            2. Penghargaan dari Museum of Records Indonesia (MURI) atas kreativitas dan inovasi menyelenggarakan lomba lukis berbahan dasar coklat dalam rangka Hari Anak Nasional. <br>
                            </div>                        
                        `
                    }                   
                ]
            }
        }
    }
</script>
<template>
    <ContentImages
        subTitle="Melinda Hospital"
        title="Awared"
        textWhite
    >
        <img src="@/assets/images/about-2.png" alt="services" class="img-fluid" style="object-fit: cover;">
        <!-- awards -->
        <template #extra>
            <div>
                <div class="accordion" id="accordionExample">
                <div v-for="(award, i) in awards" :key="award.id" class="accordion-item">
                    <h2 class="accordion-header" :id="`heading${award.id}`">
                    <button
                        class="accordion-button"
                        :class="{ collapsed: i > 0 }"
                        type="button"
                        data-bs-toggle="collapse"
                        :data-bs-target="`#collapse${award.id}`"
                        :aria-expanded="i === 0"
                        :aria-controls="`collapse${award.id}`"
                    >
                        {{ award.year }}
                    </button>
                    </h2>
                    <div
                    :id="`collapse${award.id}`"
                    class="accordion-collapse collapse"
                    :class="{ show: i === 0 }"
                    :aria-labelledby="`heading${award.id}`"
                    data-bs-parent="#accordionExample"
                    >
                    <div class="accordion-body" v-html="award.content"></div>
                    </div>
                </div>

                <!-- <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                    <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                    >
                        Accordion Item #2
                    </button>
                    </h2>
                    <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                    >
                    <div class="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is
                        hidden by default, until the collapse plugin adds the appropriate
                        classes that we use to style each element. These classes control the
                        overall appearance, as well as the showing and hiding via CSS
                        transitions. You can modify any of this with custom CSS or
                        overriding our default variables. It's also worth noting that just
                        about any HTML can go within the <code>.accordion-body</code>,
                        though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                    <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                    >
                        Accordion Item #3
                    </button>
                    </h2>
                    <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                    >
                    <div class="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is
                        hidden by default, until the collapse plugin adds the appropriate
                        classes that we use to style each element. These classes control the
                        overall appearance, as well as the showing and hiding via CSS
                        transitions. You can modify any of this with custom CSS or
                        overriding our default variables. It's also worth noting that just
                        about any HTML can go within the <code>.accordion-body</code>,
                        though the transition does limit overflow.
                    </div>
                    </div>
                </div> -->
                </div>
            </div>
        </template>
    </ContentImages>
</template>

<style>

</style>