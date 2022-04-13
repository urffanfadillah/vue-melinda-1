<script>
    import HeroText from "@/components/utils/HeroText.vue"
    export default {
        components: {
            HeroText,
        },
        data() {
            return {
                filterSpecialist: 'Semua',
                search: '',          
                doctors: [                                        
                    {
                        specialist: "Dokter Spesialis Kandungan",
                        dataDoctor: [
                            { id: 1, name:"dr. Susan Melinda, Sp. OG", imgUrl: "https://dummyimage.com/600x400/000/fff" },
                            { id: 2, name:"Dr. dr. H. Rono.S.H, Sp.OG(K), MM", imgUrl: "https://dummyimage.com/600x400/000/fff" },
                            { id: 3, name:"dr. Julius T. Pangayoman, Sp.OG", imgUrl: "https://dummyimage.com/600x400/000/fff" },
                            { id: 4, name:"Prof. Dr. dr. Vita M T, Sp.OG, SH, M.Kes, AIFO", imgUrl: "https://dummyimage.com/600x400/000/fff" },
                            { id: 5, name:"John Doe", imgUrl: "https://dummyimage.com/600x400/000/fff" }
                        ]
                    },
                    {
                        specialist: "Dokter Spesialis Bedah",
                        dataDoctor: [
                            { id: 6, name:"dr. Dradjat R. Suardi, SpB(K)-Onk, FICS", imgUrl: "https://dummyimage.com/600x400/000/fff" },
                            { id: 7, name:"dr. Concepcion Garcia, Sp.B", imgUrl: "https://dummyimage.com/600x400/000/fff" },
                            { id: 8, name:"dr. Johanes Casay Chandrawinata, MND, SpGK", imgUrl: "https://dummyimage.com/600x400/000/fff" },
                            { id: 9, name:"John Doe", imgUrl: "https://dummyimage.com/600x400/000/fff" }
                        ]
                    },
                    {
                        specialist: "Dokter Spesialis Anak",
                        dataDoctor: [
                            { id: 10, name:"dr. Tetty Yuniati, Sp.A(K), M.Kes", imgUrl: "https://dummyimage.com/600x400/000/fff" },
                            { id: 11, name:"dr. Yulia Suryakusuma, Sp.A, M.Kes", imgUrl: "https://dummyimage.com/600x400/000/fff" }
                        ]
                    },
                ],             
            }
        },
        computed: {
            filteredDoctors() {
                if(this.search.length > 0){
                    return this.doctors.filter(resultSearch => {
                        // 1. Buat kembali semua object attr dataDoctor, tapi tanpa specialist dulu
                        let holdArray = [];
                        for (let i = 0; i < this.doctors.length; i++) {
                            holdArray.push(i);
                            // console.log(i);
                            // holdArray = resultSearch.dataDoctor[i];
                        }                        
                        // let getData = [];                        
                        console.log(holdArray)
                        return resultSearch.dataDoctor[0].name.toLowerCase().includes(this.search.toLowerCase())
                    });
                }else if (this.filterSpecialist != 'Semua') {                    
                    return this.doctors.filter(result => result.specialist === this.filterSpecialist)
                } else {
                    return this.doctors
                }
            }            
        }
    }
</script>

<template>
    <HeroText 
        subTitle="Melinda Hospital Doctors"
        title="Meet The Doctors and Experts"
        content="Health is the main key to a woman's beauty and happiness. Melinda Hospital is sincerely committed to realizing every woman's dream to look beautiful healthy and happy."
    />
    <div class="container mx-auto pb-5">
        <!-- input group -->
        <div class="input-group mb-3">
            <select class="form-select" aria-label="Default select example" name="filterSpecialist" v-model="filterSpecialist">
                <option value="Semua" selected>Semua</option>
                <option v-for="doctor in doctors" :key="doctor.specialist" v-bind:value="doctor.specialist">
                    {{doctor.specialist}}
                </option>                
            </select>
            <input v-model="search" type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder="Cari disini...">
            <button class="btn btn-outline-secondary py-3" type="button" id="button-addon2">Search Doctor dan Schedule</button>        
        </div>
        <!-- data dokter -->
        <div class="container-fluid px-0 gap-4">
            <div class="row py-4" v-for="doctor in filteredDoctors" :key="doctor.specialist"> 
                <div class="col-sm-12">
                    <h3 class="text-center">{{doctor.specialist}}</h3>
                </div>
                <div class="col-sm-12">
                    <div class="row mb-4 px-0">                        
                        <div class="card mb-4 px-1 border-0 col-sm-4" v-for="data in doctor.dataDoctor" :key="data.id">
                            <img :src="data.imgUrl" class="card-img-top" :alt="data.imgUrl">
                            <div class="card-body">
                                <h5 class="card-title text-dark">{{data.name}}</h5>
                                <a href="#" class="btn btn-primary">Lihat Jadwal</a>
                            </div>
                        </div>                        
                    </div>                    
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>    
    .card-body {
        background-color: #75C6EF
    }
    h5 {
        font-family: Roboto;
        font-size: 16px;
        font-weight: 700;
        line-height: 25px;
        letter-spacing: 0em;
        text-align: left;
        color: #ffffff !important;
        margin: 0;
    }
    a.btn {
        background-color: transparent !important;
        border: 0 solid transparent;
        color: #FCE8CE;
        font-size: 14px;
        padding: 0;
    }
    a.btn:hover {
        background-color: transparent !important;
        border: 0 solid transparent;
        color: #e9ceab;
        font-size: 14px;
        padding: 0;
    }
</style>