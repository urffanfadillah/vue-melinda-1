<script>
    import HeroText from "@/components/utils/HeroText.vue"
    import FooterContent from "@/components/utils/FooterContent.vue"
    export default {
        data() {
            return {
                context: {
                    subTitle: 'Melinda Hospital Auction',
                    title: 'Join Auction Job Melinda Hospital',
                    paragraph: `Health is the main key to a woman's beauty and happiness. Melinda Hospital is sincerely committed to realizing every woman's dream to look beautiful, healthy and happy.`
                },
                careerTags: [
                    { id:1, name:"Pembangunan & Konstruksi" },
                    { id:2, name:"Pengadaan Barang"},
                    { id:3, name:"Informasi & Teknologi"},               
                ],
                careerTagSelected: 'Semua',
                search: '',
                careers: [
                    {
                        id: 1,
                        date: "12 Januari 2022",
                        title: "Proyek Ruangan Tipe A",
                        tags: "IT Department",
                        price: "Rp. 340.000.000"
                    },
                    {
                        id: 2,
                        date: "12 Januari 2022",
                        title: "Pembangunan Cancer Center ",
                        tags: "Pembangunan & Konstruksi",
                        price: "Rp. 340.000.000"
                    },
                    {
                        id: 3,
                        date: "12 Januari 2022",
                        title: "Proyek Ruangan Nursing",
                        tags: "Pembangunan & Konstruksi",
                        price: "Rp. 340.000.000"
                    },
                    {
                        id: 4,
                        date: "12 Januari 2022",
                        title: "Pengadaan Obat & Vitamin",
                        tags: "Pengadaan Barang",
                        price: "Rp. 340.000.000"
                    },
                    {
                        id: 5,
                        date: "12 Januari 2022",
                        title: "Integrasi Sistem BPJS",
                        tags: "Informasi & Teknologi",
                        price: "Rp. 340.000.000"
                    },
                    {
                        id: 6,
                        date: "12 Januari 2022",
                        title: "Pembangunan Cancer Center",
                        tags: "Pembangunan & Konstruksi",
                        price: "Rp. 340.000.000"
                    },
                    {
                        id: 7,
                        date: "12 Januari 2022",
                        title: "Proyek Ruangan Tipe A",
                        tags: "IT Department",
                        price: "Rp. 340.000.000"
                    },
                    {
                        id: 8,
                        date: "12 Januari 2022",
                        title: "Pembangunan Cancer Center ",
                        tags: "Pembangunan & Konstruksi",
                        price: "Rp. 340.000.000"
                    },
                    {
                        id: 9,
                        date: "12 Januari 2022",
                        title: "Proyek Ruangan Tipe A",
                        tags: "IT Department",
                        price: "Rp. 340.000.000"
                    },
                    {
                        id: 10,
                        date: "12 Januari 2022",
                        title: "Pembangunan Cancer Center ",
                        tags: "Pembangunan & Konstruksi",
                        price: "Rp. 340.000.000"
                    },
                    {
                        id: 11,
                        date: "12 Januari 2022",
                        title: "Proyek Ruangan Nursing",
                        tags: "Pembangunan & Konstruksi",
                        price: "Rp. 340.000.000"
                    },
                    {
                        id: 12,
                        date: "12 Januari 2022",
                        title: "Pengadaan Obat & Vitamin",
                        tags: "Pengadaan Barang",
                        price: "Rp. 340.000.000"
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
        methods: {
            goToDetail() {
                this.$router.push('/autcion-jobs-detail');
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
            <div class="input-group mb-5 shadow">
                <select class="form-select" aria-label="Default select example" name="careerTagSelected" v-model="careerTagSelected">
                    <option value="Semua">Semua</option>
                    <option v-for="(careerTag) in careerTags" :key="careerTag" v-bind:value="careerTag.name">
                        {{careerTag.name}}
                    </option>                
                </select>
                <input v-model="search" type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder="Cari disini...">
                <button type="button" class="btn btn-primary py-3 btn-search">Search Jobs</button>            
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
                                        <a href="/auction-jobs-detail" class="btn btn-primary stretched-link">Go somewhere</a>
                                        <h5 class="card-title text-dark">{{career.title}}</h5>
                                        <h5 class="tags">{{career.tags}}</h5>
                                        <span class="status" v-text="career.price">
                                        </span>                        
                                    </div>                            
                                </div>                            
                            </div> 
                        </div>                    
                    </div>
                </div>
            </div>
            <nav class="mx-auto d-flex">
                <ul class="pagination mx-auto">
                    <li class="page-item disabled">
                        <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                    </li>
                    <li class="page-item active"><a class="page-link" href="#">1</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#">2</a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
    <FooterContent />
</template>


<style scoped>
    .btn.btn-search {
        background: #75C6EF;
        border: transparent;
    }
    .btn.btn-search:hover {
        background: #75C6EF;
        border: transparent;
        opacity: 0.5;
    }
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