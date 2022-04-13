<script>
    export default {
        data(){
            return {
                rooms : [
                    { title: 'Three Bedroom', imgUrl: 'https://dummyimage.com/400x400/000/fff' },
                    { title: 'Two Bedroom', imgUrl: 'https://dummyimage.com/400x400/000/fff' },
                    { title: 'Utama Room', imgUrl: 'https://dummyimage.com/400x400/000/fff' },
                    { title: 'VIP Room', imgUrl: 'https://dummyimage.com/400x400/000/fff' },
                    { title: 'Suite Room', imgUrl: 'https://dummyimage.com/400x400/000/fff' },
                    { title: 'Suite Room Balcony 1', imgUrl: 'https://dummyimage.com/400x400/000/fff' },
                    { title: 'Suite Room Balcony 2', imgUrl: 'https://dummyimage.com/400x400/000/fff' },
                ],
            }
        }
    }
</script>

<template>
    <section id="rooms" class="background-cream container-fluid py-5 px-xl-5">
        <p class="text-center content-sub-title my-4">Melinda Hospital Mother Care</p>        
        <h1 class="text-center content-title my-4">Melinda Inspire Room and Balcony</h1>
        <p class="text-center fw-light my-4">
            Melinda Fertility Center is part of the Melinda Hospital which deals with fertility, both male and female. Melinda Fertility Center is supported by very supportive facilities, friendly service and
        </p>
        <div class="mx-auto container row">
            <div class="col-sm-4" v-for="room in rooms" :key="room.title"> 
                <div class="card-room card my-4" style="width: 18rem;">
                    <img v-bind:src="room.imgUrl" class="card-img-top" v-bind:alt="room.title">
                    <div class="card-body card-room-body">
                        <p class="card-text text-white" v-text="room.title"></p>
                    </div>
                </div>
            </div>                        
        </div>
    </section>
</template>

<style scoped>
    .card {
        background-color: #ffffff00;
        border: none;
    }
    .konten {
        padding: 48px 10% 48px 10%;     
    }

    .background-cream {
        background-color: #FDF4E9;
    }
    p.fw-light {
        line-height: 150%;
        color: #575757;
    }
    #hero-images-homepage {
        width: 50%;    
        display: block;    
    }

    .wrapper-hero-img {
        margin-top: -30%;
        z-index: 998;
        display: flex;
        justify-content: end;    
    }

    .mouse {
        width: 34px;
    }

    .bg-img-1 {
        height: 460px;
        background-image: url("@/assets/images/services-img-3.png");
        background-size: cover;
        object-fit: cover;    
    }

    .bg-img-2 {
        height: 460px;
        background-image: url("@/assets/images/services-img-4.png");
        background-size: cover;
        object-fit: cover;    
    }

    .bg-img-1 p, .bg-img-2 p {
        color: white !important;
        z-index: 1000;
        filter: brightness(100%) !important;
    }

    #rooms p {
        width: 60%;
        margin: 0 auto;
    }

    .card-room {
        position: relative;
    }

    .card-room-body {
        position: absolute;
        /* bottom: 8px;
        left: 16px; */
    }

    .card-room p {
        color: white;
        width: 100% !important;
        font-size: 20px;
        font-weight: bold !important;    
    }

    @media (max-width: 575px) {
        .wrapper-hero-img {
            margin-top: 0;
            z-index: 0;
            display: none;
            justify-content: end;    
        }
        #rooms p {
            width: 90%;
            margin: 0 auto;
        }
    }

    @media (max-width: 1199.98px) {
        .wrapper-hero-img {
            margin-top: 0;
            z-index: 0;
            display: flex;
            justify-content: end;    
        }
        #rooms p {
            width: 80%;
            margin: 0 auto;
        }
    }
</style>