<script>
    import FooterContent from "@/components/utils/FooterContent.vue"
    export default {
        components: {
            FooterContent
        },
        data() {
            return {
                user: [
                    {
                        id: 1, 
                        imgUrl: 'https://dummyimage.com/400x400/000/fff',
                        name: 'John Doe',
                        location: 'Bandung, Indonesia',
                        joinDate: '22 Mar 2022',
                        lastUpdated: '22 Mar 2022'
                    }
                ],
                otherJobs: [
                    { id: 1, name: 'It Administration & Support', date: '12 January 2022' },
                    { id: 2, name: 'Finance & Admin', date: '12 January 2022' },
                    { id: 3, name: 'It Administration & Support', date: '12 January 2022' },
                    { id: 4, name: 'Finance & Admin', date: '12 January 2022' },
                ]
            }
        }
    }
</script>

<template>
    <section class="d-flex flex-column flex-md-row justify-content-between content my-5">
        <!-- data user -->
        <div class="img-user d-flex flex-column flex-md-row gap-4 align-items-center" v-for="u in user" :key="u.id" id="data-user">
            <img :src="u.imgUrl" :alt="u.name" class="img-fluid rounded-circle" />
            <div class="d-flex flex-column">
                <h1 v-text="u.name"></h1>
                <h2 v-text="u.location"></h2>
                <p>
                    Join Date : <span v-text="u.joinDate"></span> - Last Updated : <span v-text="u.lastUpdated"></span>
                </p>
            </div>
        </div>
        <a href="#" class="button-browse-job btn btn-priamry align-self-center">Browse Job <i class="bi bi-arrow-right"></i></a>
    </section>
    <section class="container-fluid content">
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Edit Profile</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Account Setting</a>
            </li>
        </ul>
    </section>
    <section class="container-fluid background-cream">
        <div class="container-fluid content row py-5">
            <div class="col-sm-8 px-2 py-4 px-md-4 bg-white">
                <h4>My Profile</h4>
                <form>
                    <div class="mb-3">
                        <label for="firstName" class="form-label">First Name</label>
                        <input type="text" class="form-control" id="firstName" />                        
                    </div>
                    <div class="mb-3">
                        <label for="lastName" class="form-label">Last Name</label>
                        <input type="text" class="form-control" id="lastName" />                        
                    </div>
                    <div class="mb-3">
                        <label for="emailAdress" class="form-label">Email Adress</label>
                        <input type="email" class="form-control" id="emailAdress" />                        
                    </div>
                    <div class="mb-3">
                        <label for="phoneNumber" class="form-label">Phone Number</label>
                        <input type="number" class="form-control" id="phoneNumber" />                        
                    </div>
                    <div class="mb-3">
                        <label for="address" class="form-label">Address</label>
                        <input type="text" class="form-control" id="address" />                        
                    </div>
                    <div class="mb-3">
                        <label for="bio" class="form-label">Bio</label>
                        <input type="text" class="form-control" id="bio" />                        
                    </div>
                    <div class="mb-3">
                        <label for="formFile" class="form-label">My Resume</label>
                        <input class="form-control" type="file" id="formFile">
                        <div class="form-text">We accept any PDF or Microsoft Office document that is up to 5MB. Your resume will only be revealed to companies you applied to.</div>
                    </div>
                </form>
            </div>
            <div class="col-sm-4 px-0 px-md-3">
                <div class="card-other-jobs p-4">
                    <h5>Looking for other available position ?</h5>
                    <p>Melinda Hospital Jobs</p>
                    <a href="#" class="button-browse-job btn btn-priamry align-self-center btn-cream">Browse Other Job</a>
                </div>
                <ul class="list-group my-4">
                    <li class="list-group-item group-title bg-transparent border-0"><h5 class="fw-bold">Others Jobs</h5></li>
                    <li class="list-group-item bg-transparent border-0" v-for="otherJob in otherJobs" :key="otherJob.id">
                        <span class="fw-bold" v-text="otherJob.name"></span><br>
                        <span v-text="otherJob.date"></span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    <FooterContent />
</template>


<style scoped>
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
    #data-user h1 { color: #1B4674; font-weight: bold; font-size: clamp(1rem, 2.5vw, 2.5rem); }
    #data-user h2 { color: #75C6EF; font-weight: bold; font-size: clamp(1rem, 2.5vw, 1rem);}
    #data-user p {
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