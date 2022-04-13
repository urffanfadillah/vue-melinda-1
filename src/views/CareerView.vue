<script>
    import HeroText from "@/components/utils/HeroText.vue"
    import FooterContent from "@/components/utils/FooterContent.vue"
    export default {
        data() {
            return {
                context: {
                    subTitle: 'Melinda Hospital Carrers',
                    title: 'Join With Melinda Family Team',
                    paragraph: `Health is the main key to a woman's beauty and happiness. Melinda Hospital is sincerely committed to realizing every woman's dream to look beautiful, healthy and happy.`
                },
                careerTags: [
                    { id:1, name:"IT Department" },
                    { id:2, name:"Pembangunan & Konstruksi"},                    
                ],
                careerTagSelected: 'Semua',
                search: '',
                careers: [
                    {
                        id: 1,
                        date: "12 Januari 2022",
                        title: "IT Support & Helpdesk",
                        tags: "IT Department",
                        is_avaliable: true,
                    },
                    {
                        id: 2,
                        date: "12 Januari 2022",
                        title: "DevOps and SysAdmin",
                        tags: "IT Department",
                        is_avaliable: true,
                    },
                    {
                        id: 3,
                        date: "12 Januari 2022",
                        title: "Administrator Website",
                        tags: "IT Department",
                        is_avaliable: false,
                    },
                    {
                        id: 4,
                        date: "12 Januari 2022",
                        title: "Senior Arsitek",
                        tags: "Pembangunan & Konstruksi",
                        is_avaliable: true,
                    },
                    {
                        id: 5,
                        date: "12 Januari 2022",
                        title: "Junior Arsitek",
                        tags: "Pembangunan & Konstruksi",
                        is_avaliable: true,
                    },
                    {
                        id: 6,
                        date: "12 Januari 2022",
                        title: "IOS Mobile Developer",
                        tags: "IT Department",
                        is_avaliable: true,
                    },
                ]
            }
        },
        computed: {
            filteredCareers() {                
                if (this.search.length > 0) {                    
                    return this.careers.filter(r => {
                        return r.title.toLowerCase().includes(this.search.toLowerCase());
                    });
                }
                else if(this.careerTagSelected != "Semua"){
                    console.log(this.careerTagSelected)
                    return this.careers.filter(r => {
                        console.log(this.careerTagSelected);
                        return r.tags === this.careerTagSelected;
                    });
                }
                return this.careers
            }
        },
        components: {
            HeroText, FooterContent
        }
    }
</script>

<template>
    <HeroText :subTitle="context.subTitle" :title="context.title" :content="context.paragraph" />
    <div class="container-fluid py-5 bg-cream">
        <div class="container mx-auto">
            <!-- input group -->
            <div class="input-group mb-3">
                <select class="form-select" aria-label="Default select example" name="careerTagSelected" v-model="careerTagSelected">
                    <option value="Semua">Semua</option>
                    <option v-for="(careerTag) in careerTags" :key="careerTag" v-bind:value="careerTag.name">
                        {{careerTag.name}}
                    </option>                
                </select>
                <input v-model="search" type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder="Cari disini...">            
            </div>
            <!-- data careers -->
            <div class="container-fluid px-0 gap-4">
                <div class="row"> 
                    <div class="col-sm-12">
                        <div class="row mb-4 px-0"> 
                            <div class="col-sm-3" v-for="career in filteredCareers" :key="career.id">
                                <div class="card mb-4">                            
                                    <div class="card-body d-flex flex-column justify-content-center">
                                        <span class="date flex-grow-1 text-decoration-none">{{career.date}}</span>
                                        <a href="#" class="btn btn-primary stretched-link">Go somewhere</a>
                                        <h5 class="card-title text-dark">{{career.title}}</h5>
                                        <h5 class="tags">{{career.tags}}</h5>
                                        <span class="status" v-if="career.is_avaliable">
                                            Job Still Available
                                        </span>
                                        <span class="status" v-else>
                                            Job Not Available
                                        </span>                                
                                    </div>                            
                                </div>                            
                            </div>                        
                        </div>                    
                    </div>
                </div>
            </div>
        </div>
    </div>
    <FooterContent />
</template>


<style scoped>
    .bg-cream {
        background-color: #FDF4E9;
    }
    .card {
        height: 280px;
    }
    h5.card-title {
        font-size: 18px;
        color: #1B4674;
    }
    h5.tags {
        color: #75C6EF;
        font-size: 14px;
    }
    span.status {
        margin-top: 16px;
    }
    span, p {
        color: #575757;
    }
    a.stretched-link {
        opacity: 0;
    }
    .card:hover {
        background-color: #1B4674;
    }
    .card:hover .date {
        color: #ffffff;
    }
    .card:hover h5.card-title {
        color: #ffffff !important;
    }
    .card:hover .status {
        color: #ffffff;
    }
    /* .card:hover .date{
        height: 280px;
        background: #1B4674;
        color: white;
    } */
</style>