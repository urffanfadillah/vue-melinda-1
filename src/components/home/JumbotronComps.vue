<script>
  import HeadingContent from "../utils/HeadingContent.vue"
  import ModalsContent from "../utils/ModalsContent.vue"
  export default {
    components: {
      HeadingContent,
      ModalsContent,
    }
  }
</script>

<template>
  <!-- hero -->
  <section id="hero-homepage" class="konten container-fluid text-white">
      <div class="row align-items-center py-5">          
        <div class="col-md-6" id="konten-hero">
            <HeadingContent 
              subTitle="Melinda Hospital Suite Room Balcony 1"
              title="Large, quite and views"
              paragraph="Feel the relax and sensations of staying in Melinda Hospital room suite, this room large space priorities technology and high security"
            />              
            <button type="button" class="btn btn-primary btn-lg px-4 me-md-2 gap-3" data-bs-toggle="modal" data-bs-target="#room-tour">
              <i class="bi bi-play-circle-fill fs-1"></i> Room Tour
            </button>              
        </div>
        <div class="col-md-6" id="konten-img">
          <img src="@/assets/images/hero-images.png" class="d-lg-none img-fluid" alt="heroimages" loading="lazy" id="hero-image"/>
        </div>          
      </div>
  </section>
  <!-- konten img yang versi desktop -->
  <div class="wrapper-hero-img">
      <img src="@/assets/images/hero-images.png" class="img-fluid" alt="heroimages" loading="lazy" id="hero-images-homepage">
  </div>
  <!-- Modal video roomtour -->
  <ModalsContent 
    title="Room Tour"
  >
    <iframe src="https://www.youtube.com/embed/6sAkPJYuXUU" frameborder="0" allowfullscreen></iframe>
  </ModalsContent>
</template>

<style>
  .wrapper-hero-img {
      margin-top: -40% !important;
  }
  .konten {
    padding: 48px 10% 48px 10%; 
    background-color: #1B4674;
  }
  #hero-images-homepage {
    width: 50%;    
    display: block;    
  }  

  .content-sub-title {
      color: #75C6EF;
      font-weight: 600;
      font-size: 16px;
  }

  #konten-hero p {
      color: #75C6EF;
      font-size: 16px;
  }

  #konten-hero button {
      display: flex;
      align-items: center;
      padding-left: 0 !important;
      background-color: #ffffff00 !important;
      border: none;
  }

  #konten-hero button:hover {
      display: flex;
      align-items: center;
      padding-left: 0 !important;
      background-color: #ffffff00 !important;
      color: #75C6EF;
      border: none;
  }

  #button-group {    
      margin-top: -180px;
      padding-left: 10%;
      padding-bottom: 10%;    
  }

  #booking {
      padding: 18px 24px 18px 24px;
      border-radius: 5px;
      background-color: white;
      width: fit-content;
      z-index: 999;
  }
  .form-label-booking {
      margin: 0 !important;
      font-size: 16px;
      font-weight: bolder !important;
      color: #575757;
  }
  .form-label-booking i { color: #75C6EF; }
  .label-select-room { width: 200px !important; }
  .input-label-booking {
      padding-left: 0 !important;
      border: transparent;
  }
  .input-label-booking option{
      font-weight: 400;
      color: #575757;
  }
  input[type="date"]::-webkit-inner-spin-button,
  input[type="date"]::-webkit-calendar-picker-indicator {
      opacity: 0;
  }
  #booking a {
      background-color: #75C6EF !important;
      border: none;
  }
  #booking a:hover {
      background-color: #3786ad !important;
      border: none;
  }
  .konten.recomendation-room, .konten.hospital-nearby{
      background-color: #ffffff;
  }
  .konten.services {
      background-color: #ffffff00;
      margin-top: -160px;
  }
  .recomendation-room h1 { 
      color: #1B4674;
      font-size: 32px; 
      font-weight: bolder !important;
      width: 100%;    
  }
  .border-bottom {
      margin-left: 5%;
      margin-top: 16px;
      width: 20%;
      border-bottom: 3px solid #75C6EF !important;
  }
  .card-room {
      width: 100%;
      height: 100%;
  }
  .card-title {
      font-size: 24px;
      color: white;
      font-weight: 600;
  }
  .browse-other-room {
      color: #575757 !important;
  }
  .cream-background {
      z-index: -999;    
      background-color: #FCE8CE;
      margin-top: -390px;
      height: 540px;
      width: 100%;    
  }
  .content-title {
      font-weight: bolder !important;
      color: #1B4674;
      margin-bottom: 14px;
  }
  .content-text {
      color: #575757;
      line-height: 150%;
      margin-bottom: 28px;
  }
  .btn-services.btn.btn-primary {
      background-color: #ffffff;
      border-color: #75C6EF;
      color: #75C6EF;
  }
  .btn-services.btn.btn-primary:hover {
      background-color: #75C6EF;
      border-color: #ffffff;
      color: #ffffff;
  }
  .hotel:hover {    
      background-color:
      linear-gradient(
          rgba(0, 0, 0, 0.7), 
          rgba(0, 0, 0, 0.7)
      );
  }

  @media (max-width: 575px) {
      #konten-img {
          display: none;
      }
      #button-group {    
          margin-top: 0;
          padding-left: 0;
          padding-bottom: 5%;    
      }
      .wrapper-hero-img {
          margin-top: -30%;
          z-index: 999;
          display: flex;
          justify-content: end;
          display: none;
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
      .room-img {
          max-height: 240px;
      }
  }

  @media (max-width: 1199.98px) {
      .room-img {        
          background-size: cover !important;
      }
      .recomendation-room h1 { 
          color: #1B4674;
          font-size: 24px; 
          font-weight: bolder !important;
          width: 100%;    
      }
      #button-group {    
          margin-top: 0;
          padding-left: 0;
          padding-right: 0;
          padding-bottom: 8%;    
      }
      .wrapper-hero-img {
          margin-top: -30%;
          z-index: 999;
          display: flex;
          justify-content: end;
          display: none;
      }
      #booking {
          margin: auto;
          width: 100%;
      }
  }

  @media (min-width: 1200) {
      #konten-img {
          display: none;
      }
  }
</style>