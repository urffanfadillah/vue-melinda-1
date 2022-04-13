<template>
    <section class="container my-5 recomendation-room">
        <h1>
            Recommendation Room <br>for Mothercare
            <div class="border-bottom"></div>
        </h1>
        <div class="row mt-5 gap-4 gap-lg-0">
        <div class="col-lg-4">
            <div class="card card-room">
            <img src="@/assets/images/baby-bed.png" class="room-img card-img-top" alt="side-image">
            <div class="card-body" style="margin-top: -78px;">
                <h5 class="card-title">Babbies Bed</h5>
            </div>
            </div>
        </div>
        <div class="col-lg-8 my-auto">
            <a href="#" class="browse-other-room d-flex justify-content-end mb-2 link-secondary">Browse Others Room</a>
            <img src="@/assets/images/mom-room.png" class="room-img card-img-top" alt="room-img">
            <div class="card-body" style="margin-top: -78px;">
            <h5 class="card-title">Room Inspire for 
                Mother & Babies</h5>
            </div>
        </div>
        </div>
    </section>
    <div class="cream-background d-none d-md-block"></div>
</template>

<script>
    export default {

    }
</script>

<style scoped>    
    .border-bottom {
        margin-top: 6px;
        margin-left: 2%;
        width: 20%;
        border: 4px solid #1B4674;
        border-radius: 4px;
    }
    #recomendation-room {
        padding: 48px 20px 48px 20px;     
    }
    .recomendation-room h1 { 
        color: #1B4674;
        font-size: 18px; 
        font-weight: bolder !important;
        width: 100%;    
    }
    .konten.recomendation-room, .konten.hospital-nearby{
        background-color: #ffffff;
    }
    .recomendation-room h1 { 
        color: #1B4674;
        font-size: 32px; 
        font-weight: bolder !important;
        width: 100%;    
    }
    h5.card-title {
        color: #ffffff !important;
        font-weight: 600;
    }
</style>