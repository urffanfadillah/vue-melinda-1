<script>
    import FooterContent from "@/components/utils/FooterContent.vue"
    export default {
        components: {
            FooterContent
        },
        data() {
            return {
                job: [
                    {
                        id: 1, 
                        name: 'Pembangunan Ruangan Pasien',
                        category: 'Pembangunan & Konstruksi',
                        joinDate: '22 Mar 2022',
                        lastUpdated: '24 Mar 2022',                        
                        description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam.',
                        requirements: [
                            { name: 'Expert in at least two languages such as TypeScript, Go, Java and Python' },
                            { name: 'Strong knowledge in Caching, Streaming, and Message Queuing such as BullJS, Redis, Amazon SQS, RabbitMQ, and Kafka. ' },
                            { name: 'Knowledge of container technologies and orchestrators such as Docker and Kubernetes' },
                            { name: 'Strong knowledge in software engineering best practice and architecture patterns such as SOLID' },
                        ],
                        functions: [
                            { name: 'Writing functional specifications for API endpoints.' },
                            { name: 'Designing APIs, Middleware, and Business logic implementation for large-scale transaction' },
                            { name: 'Writing architecture documentation, creating flow diagrams, and writing complex business logic workflow.' },
                            { name: 'Designing scalable database' },
                        ],                        
                        requiredSkills: [
                            'Backend Development',
                            'Javascript',
                            'REST API',
                            'Golang',
                            'Node JS',
                            'Javascript Framework'
                        ],
                        benefits: [
                            { name: 'BPJS Kesehatan & Ketenagakerjaan' },
                            { name: 'Competitive Salary' },
                            { name: 'Prudential Assurance' },
                            { name: 'Annual Bonus' },
                            { name: 'Performance Bonus' },
                        ],
                    }
                ],
            }
        }
    }
</script>

<template>
    <section class="d-flex flex-column flex-md-row justify-content-between content mt-2 pt-4">
        <!-- data user -->
        <div class="d-flex flex-column flex-md-row gap-4 align-items-center" v-for="j in job" :key="j.id" id="data-job">            
            <div class="d-flex flex-column">
                <h2 v-text="j.category"></h2>
                <h1 v-text="j.name"></h1>
                <p>
                    <span v-text="j.location"></span>
                </p>
                <p>
                    Join Date : <span v-text="j.joinDate"></span> - Last Updated : <span v-text="j.lastUpdated"></span>
                </p>
            </div>            
        </div>
    </section>
    <section class="d-flex flex-column flex-md-row justify-content-between content">
        <div class="d-flex flex-column">
            <h2 class="job-item mb-0">Harga Lelang :</h2>
            <p class="job-value">Rp. 4.345.000.000</p>
        </div>
        <a href="#" class="button-browse-job btn btn-priamry align-self-center" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Apply Job <i class="bi bi-arrow-right"></i>
        </a>
    </section>
    <section class="container-fluid background-cream py-5 mt-5" v-for="j in job" :key="j.id">
        <div class="container mx-auto row">
            <div class="col-sm-8 row">
                <div class="col-sm-12 p-2 p-md-4 bg-white">
                    <h1 class="job-value mb-0">Job / Target / Goals</h1>
                    <p v-text="j.description" class="mb-4"></p>
                    <h1 class="job-value mb-0">Illustration</h1>
                    <img src="https://dummyimage.com/1000x600/000/fff" alt="illustration" style="max-height: 420px; max-width: 100%;" />
                    <h1 class="job-value my-2">Spesification</h1>
                    <ul class="mb-4">
                        <li v-for="req in j.requirements" :key="req.name" >{{req.name}}</li>
                    </ul>
                    <div class="d-grid">
                        <button class="btn btn-primary rounded-pill py-2 download-files" type="button">Downloads Files</button>
                    </div>
                </div>                         
            </div>
            <div class="col-sm-4">
                <div class="card-other-jobs p-4">
                    <h5>Looking for other available position ?</h5>
                    <p>Melinda Hospital Jobs</p>
                    <a href="#" class="button-browse-job btn btn-priamry align-self-center btn-cream">Browse Other Job</a>
                </div>
            </div>
        </div>
    </section>
    <FooterContent />
    <!-- Modal Apply Job -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="d-flex flex-column">
                        <h5 class="modal-title" id="authLabel">Auction Job</h5>
                        <h2>Auction Job Apply Form</h2>
                    </div>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body border-0">
                    <form action="#">
                        <div class="mb-2">
                            <label for="exampleInputEmail1" class="form-label">Jenis Usaha</label>
                            <select class="form-select">                        
                                <option value="1">Jasa Konstruksi</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div class="mb-2">
                            <label for="exampleInputEmail1" class="form-label">Provinsi</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="row">
                            <div class="col-sm-6 mb-2">
                                <label for="exampleInputEmail1" class="form-label">NRBU</label>
                                <input type="text" class="form-control" />
                            </div>
                            <div class="col-sm-6 mb-2">
                                <label for="exampleInputEmail1" class="form-label">Tanggal terbit NRBU</label>
                                <input type="date" class="form-control" />
                            </div>
                        </div>
                        <div class="mb-2">
                            <label for="exampleInputEmail1" class="form-label">Nama Badan Usaha</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="mb-2">
                            <label for="exampleInputEmail1" class="form-label">Nama Pemimpin</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="mb-2">
                            <label for="exampleInputEmail1" class="form-label">Email Pemimpin</label>
                            <input type="email" class="form-control" />
                        </div>
                        <div class="mb-2">
                            <label for="exampleInputEmail1" class="form-label">Alamat Perusahaan</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="mb-2">
                            <label for="exampleInputEmail1" class="form-label">No Telepon</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="mb-2">
                            <label for="formFile" class="form-label">File Pendukung / No Akta Usaha</label>
                            <input class="form-control" type="file" id="formFile">
                            <div class="form-text">We accept any PDF or Microsoft Office document that is up to 5MB. Your resume will only be revealed to companies you applied to.</div>
                        </div>                  
                    </form>
                </div>
                <div class="modal-footer d-flex justify-content-between">
                    <button type="button" class="btn btn-secondary btn-batal" data-bs-dismiss="modal">Batal</button>
                    <button type="button" class="btn btn-primary btn-daftar">Apply Now <i class="bi bi-arrow-right"></i></button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .download-files {
        background: #FCE8CE;
        color: #575757;
        border: transparent;
    }
    .download-files:hover {
        opacity: 0.5;
        background: #FCE8CE;
        color: #575757;
        border: transparent;
    }
    .btn-daftar {
        background: #1B4674;
        border-radius: 40px;
    }
    .btn-daftar:hover {
        background: #1B4674;
        border-radius: 40px;
        opacity: 0.5;
    }
    .btn-batal {
        color: #474747;
        background-color: transparent;
        border: transparent;
    }
    .btn-batal:hover {
        color: #474747;
        background-color: transparent;
        border: transparent;
        opacity: 0.5;
    }
    .modal-header div h5 {
        font-size: 14px;
        color: #75C6EF
    }
    .modal-header div h2 {
        font-size: 24px;
        color: #1B4674;
        font-weight: bold;
    }
    .required-skills {
        background-color: #75C6EF;
    }
    .required-skills span.badge {        
        background-color: #50A6D1 !important;
    }
    ul {
        list-style: none; /* Remove default bullets */
    }

    ul li::before {
        content: "\2022";  /* Add content: \2022 is the CSS Code/unicode for a bullet */
        color: #75C6EF; /* Change the color */
        font-weight: bold; /* If you want it to be bold */
        display: inline-block; /* Needed to add space between the bullet and the text */
        width: 1em; /* Also needed for space (tweak if needed) */
        margin-left: -1em; /* Also needed for space (tweak if needed) */
    }
    li {
        color: #575757 !important;
    }
    p, li {
        line-height: 180%;
        color: #575757 !important;
    }
    h1.job-value {
        font-size: 18px;
    }
    .job-item {
        font-weight: 400;
        font-size: 14px;
        line-height: 25px;
        color: #575757;
    }
    .job-value {
        font-weight: 600;
        font-size: 16px;
        line-height: 25px;        
        color: #1B4674;
    }
    .list-group-item span { color: #575757; }
    .list-group-item h5 { color: #1B4674; }
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
    }
    .btn-cream:hover {
        background-color: #e7cca7 !important;
        color: #575757 !important;
        font-size: 14px !important;
        padding: 8px 24px 8px 24px !important;
    }
    .button-browse-job {
        border-radius: 40px;
        background-color: #1B4674;
        padding: 16px 24px 16px 24px;
        font-size: 18px;
        color: white;
        border: none;
    }
    
    .button-browse-job:hover {
        border-radius: 40px;
        background-color: #0e3055;
        padding: 16px 24px 16px 24px;
        font-size: 18px;
        color: white;
        border: none;
    }
    #data-job h1 { color: #1B4674; font-weight: bold; font-size: clamp(1rem, 2.5vw, 2.5rem); }
    #data-job h2 { color: #75C6EF; font-weight: bold; font-size: clamp(1rem, 2.5vw, 1rem);}
    #data-job p {
        font-weight: 400;
        font-size: 12px;
    }
    .content {
        padding: 0 140px 0 140px;
    }
    img.img-fluid {
        max-width: 24% !important;
    }
    @media (max-width: 575px) {
        .content {
            padding: 10px 20px 10px 20px;
        }
        .button-browse-job {
            border-radius: 40px;
            background-color: #1B4674;
            padding: 8px 24px 8px 24px;
            font-size: 12px;
            color: white;
            border: none;
        }
        
        .button-browse-job:hover {
            border-radius: 40px;
            background-color: #0e3055;
            padding: 8px 24px 8px 24px;
            font-size: 12px;
            color: white;
            border: none;
        }
    }
    @media (max-width: 1199.98px) {
        .content {
            padding: 0 40px 0 40px;
        }
    }
</style>