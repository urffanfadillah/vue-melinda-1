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
                        name: 'Senior Backend Engineer',
                        category: 'IT Department',
                        joinDate: '22 Mar 2022',
                        lastUpdated: '22 Mar 2022',
                        location: 'Bandung, Indonesia (Remote)',
                        function: 'Enterprise Software & Systems',
                        type: 'Full Time',
                        experience: '1 to 4 Years',
                        vacancies: '2 Vacancies',
                        description: 'As a senior backend engineer, you will be involved in architecting and developing advanced applications. You will collaborate and work together with other engineers and designers to solve various business problems. You must have a good understanding of database design and schema and database ORM and query language. You will be working in a full 100% remote environment.',
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
            <h2 class="job-item mb-0">Function :</h2>
            <p class="job-value">Enterprise Software & Systems</p>
        </div>
        <div class="d-flex flex-column">
            <h2 class="job-item mb-0">Type :</h2>
            <p class="job-value">Full Times</p>
        </div>
        <div class="d-flex flex-column">
            <h2 class="job-item mb-0">Experience :</h2>
            <p class="job-value">1 to 4 Years</p>
        </div>
        <div class="d-flex flex-column">
            <h2 class="job-item mb-0">Vacancies :</h2>
            <p class="job-value">2 Vacancies</p>
        </div>
        <a href="#" class="button-browse-job btn btn-priamry align-self-center" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Apply Job <i class="bi bi-arrow-right"></i>
        </a>
    </section>
    <section class="container-fluid background-cream py-5 mt-5" v-for="j in job" :key="j.id">
        <div class="container mx-auto row">
            <div class="col-sm-8 row">
                <div class="col-sm-12 p-2 p-md-4 bg-white">
                    <h1 class="job-value mb-0">Description</h1>
                    <p v-text="j.description" class="mb-4"></p>
                    <h1 class="job-value mb-2">Requirements</h1>
                    <ul class="mb-4">
                        <li v-for="req in j.requirements" :key="req.name" >{{req.name}}</li>
                    </ul>
                    <h1 class="job-value mb-2">Functions</h1>
                    <ul class="mb-4">
                        <li v-for="fun in j.functions" :key="fun.name" >{{fun.name}}</li>
                    </ul>
                </div>
                <div class="col-sm-12 p-2 p-md-4 required-skills">
                    <h1 class="fs-4 fw-bold text-white mb-3">Required Skills</h1>
                    <span v-for="reqSkill in j.requiredSkills" :key="reqSkill" class="mx-1 py-2 px-4 badge rounded-pill bg-primary mb-2">
                        {{ reqSkill }}
                    </span>
                </div>
                <div class="col-sm-12 p-2 p-md-4 bg-white">
                    <h1 class="job-value mb-2">Bennefits</h1>
                    <ul class="mb-4">
                        <li v-for="b in j.benefits" :key="b.name" >{{b.name}}</li>
                    </ul>
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
                        <h5 class="modal-title" id="authLabel">Form Job Apply</h5>
                        <h2>Jobs Apply Melinda Hospital</h2>
                    </div>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body border-0">
                    <form action="#">
                        <div class="mb-2">
                            <label for="formFile" class="form-label">My Resume</label>
                            <input class="form-control" type="file" id="formFile">
                            <div class="form-text">We accept any PDF or Microsoft Office document that is up to 5MB. Your resume will only be revealed to companies you applied to.</div>
                        </div>
                        <div class="mb-2">
                            <label for="formFile" class="form-label">Make resume visible?</label>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked>
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                                <label class="form-check-label" for="flexRadioDefault2">
                                    No
                                </label>
                            </div>
                            <div class="form-text">Employers can view your resume when searching related keywords, and contact you for potential job offers. You can change this and choose which companies to block later on.</div>
                        </div>                        
                        <div class="mb-2">
                            <label for="exampleInputEmail1" class="form-label">Short Bio</label>
                            <input type="text" class="form-control" />
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