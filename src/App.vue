<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link :to="{ name: 'profile', params: { username: 'mark2021' } }">Profile</router-link>
  </nav> -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="">
          <img src="@/assets/images/logo.png">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ms-auto">                    
            <router-link class="nav-link" to="/">Home</router-link>
            <router-link class="nav-link" to="/our-services">Our Services</router-link>
            <router-link class="nav-link" to="/about">About</router-link>
            <router-link class="nav-link" to="/our-room">Our Room</router-link>
            <router-link class="nav-link" to="/gallery">Gallery</router-link>
            <router-link class="nav-link" to="/links">Links</router-link>                    
            <router-link to="/contact" class="btn btn-primary" href="/contact" role="button">Contact Us</router-link>                 
        </div>
      </div>
    </div>
  </nav>
  <router-view/>
</template>

<style>
  /* ALL */
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
  h1,h2,h3,h4,h5,h6 {
      font-family: 'Poppins', sans-serif;
  }
  a, p {
      font-family: 'Roboto', sans-serif;
      color: #575757;
  }
  .content-sub-title {
      color: #75C6EF;
      font-weight: 600;
      font-size: 16px;
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
  .navbar {
    background-color: #ffffff !important;
  }
  nav {
      padding: 40px 140px 40px 140px;
      z-index: 1000 !important;      
  }

  .nav-link {
      font-size: 14px !important;
      font-weight: 600;
      margin: 0 20px 0 20px;
      color: #575757 !important;        
  }

  .nav-link.active {
      color:#75C6EF !important;
  }

  a.navbar-brand img {
      width: 160px;
  }

  .navbar-nav a.btn.btn-primary {
      margin: 0 20px 0 20px;    
      display: flex;
      align-items: center;
      color: #575757 !important;
      font-weight: 600; 
      background-color: #FCE8CE !important;
      border: none;
      border-radius: 40px;
      font-size: 14px !important;    
  }
  nav a.router-link-exact-active {
    color:#75C6EF !important;
  }
  .wrapper-hero-img {
      margin-top: -38%;
      z-index: -1000 !important;
      display: flex;
      justify-content: end;    
  }
    .cream-background {
        z-index: -999;    
        background-color: #FCE8CE;
        margin-top: -390px;
        height: 540px;
        width: 100%;    
    }
  @media (max-width: 575px) {
    .konten {
        padding: 48px 5% 48px 5%; 
        background-color: #1B4674;
    }
    .navbar-nav a.btn.btn-primary {         
        margin: 0 !important;
        display: flex;
        align-items: center;
        color: #575757 !important;
        font-weight: 600; 
        background-color: #FCE8CE !important;
        border: none;
        border-radius: 40px;
        font-size: 14px !important;    
    } 
    nav {
        padding: 40px 10px 40px 10px;    
    }
    #contact #desc p { width: 100%; color: #1B4674; font-weight: 600; font-size: 12px; margin-bottom: 0 !important;}    
    footer #contact {
        width: 100%;        
        padding: 48px 5% 48px 5%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: #FEF8F0;
    }
    footer hr { width: 90%; }
}

@media (max-width: 1199.98px) {
    .konten {
        padding: 48px 8% 48px 8%; 
        background-color: #1B4674;
    }
    .navbar-nav a.btn.btn-primary { 
        margin: 0 !important;
        display: flex;
        align-items: center;
        color: #575757 !important;
        font-weight: 600; 
        background-color: #FCE8CE !important;
        border: none;
        border-radius: 40px;
        font-size: 14px !important;    
    }  
    .nav-link {
        font-size: 14px !important;
        font-weight: 600;
        margin: 0 5px 0 5px;
        color: #575757 !important;        
    }
    footer #contact {        
        padding: 48px 8% 48px 8%;
        justify-content: space-between;
        background-color: #FEF8F0;        
    }
    footer hr { width: 84%; }
}
</style>
