<template>
  <!-- footer -->
    <footer>
        <!-- contact -->
        <div id="contact" class="row mx-0">
            <div id="desc" class="col-sm-8 d-flex flex-column flex-xl-row">
                <div class="photo-contact">
                    <img src="@/assets/images/contact.png" alt="contact" id="contact-img">
                    <img src="@/assets/images/person.png" alt="person" id="person-img">
                </div>
                <p>
                    Please feel free to contact our friendly reception staff with any medical enquiry, or call (022) 4233777
                </p>
            </div>
            <span id="contacts" class="col-sm-4 mt-4 mt-xl-0 d-flex align-items-center gap-3 justify-content-center">
                <a href="#"><i class="bi bi-facebook fs-4"></i></a>
                <a href="#"><i class="bi bi-twitter fs-4"></i></a>
                <a href="#"><i class="bi bi-linkedin fs-4"></i></a>
                <a href="#"><i class="bi bi-instagram fs-4"></i></a>
                <a class="btn btn-primary d-flex align-items-center gap-3" href="#">
                    Pendaftaran <i class="bi bi-arrow-right-short fs-4"></i>
                </a>
           </span>
        </div>
        <!-- footer content -->
        <div class="footer-konten container-fluid konten py-5 row gap-5 gap-md-0 mx-0 my-4">
          <div class="col-sm-6">
            <img src="@/assets/images/logo.png" class="logo-footer img-fluid" alt="logo-footer">
          </div>
          <div class="col-sm-3 footer-konten-text">
            <span class="footer-title">Office</span>
            <div class="my-2"></div>
            <p>Jl.Pajajaran 46, Bandung Jawa Barat Indonesia</p>
          </div>
          <div class="col-sm-3 footer-konten-text">
            <span class="footer-title">Contact</span>
            <div class="my-2"></div>
            <p>
              Hunting  : (022) 4222788
              Pendaftaran : (022) 4209088
              Fax       : (022) 4215700
            </p>
          </div>
        </div>        
        <div class="d-flex flex-column flex-lg-row justify-content-between align-items-center konten copyright">
          <p>© 2022 RS Melinda 2, All Rights Reserved. </p>
          <div class="d-flex gap-4">
            <img src="@/assets/images/logos-footer.png" class="copyright-logos img-fluid">
            <a href="#" class="copyright-link">Privacy & Policy</a>
            <a href="#" class="copyright-link">Cookies</a>
          </div>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style>
    .logo-footer {
        max-width: 280px;
    }
    footer #contact {
        width: 100%;
        padding: 48px 10% 48px 10%;    
        justify-content: space-between;
        background-color: #FEF8F0;
    }

    footer .footer-konten {
        background-color: #ffffff !important;
    }

    .logo-footer {
        max-width: 280px;
    }

    .footer-konten-text .footer-title {
        font-size: 18px;
        color: #1C4576;
        font-weight: bolder;
    }

    #contact #desc { display: flex; justify-content: center; align-items: center; }
    #contact #desc p { color: #1B4674; font-weight: 600; font-size: 14px; margin-bottom: 0 !important;}

    #contact #desc .photo-contact { display: flex; }
    #contact #desc .photo-contact img { width: 40px; }
    #contact #desc .photo-contact #contact-img {z-index: 1000;}
    #contact #desc .photo-contact #person-img {margin-left: -10px; margin-right: 20px;}

    span#contacts .bi-facebook { color: #4267B2; }
    span#contacts .bi-twitter { color: #1DA1F2; }
    span#contacts .bi-linkedin { color: #0072b1; }
    span#contacts .bi-instagram { color: #bc2a8d; }

    .footer-konten-text p, .menu-map {
        color: #1C4576;
        font-weight: 100 !important;
        font-size: 16px;
        text-decoration: none;
    }
    footer hr { width: 80%; }
    footer .footer-konten {
        background-color: #ffffff !important;
    }
    .footer-konten-text .footer-title {
        font-size: 18px;
        color: #1C4576;
        font-weight: bolder;
    }

    .footer-konten-text p, .menu-map {
        color: #1C4576;
        font-weight: 100 !important;
        font-size: 16px;
        text-decoration: none;
    }

    .konten {
        padding: 48px 10% 48px 10%; 
        background-color: #1B4674;
    }
    .copyright.konten {
        background-color: #ffffff00;
        background-image: url("@/assets/images/batik.png");
        background-size: cover;
    }

    .copyright p {
        color: #1C4677;
        font-size: 14px;
    }

    a.copyright-link {
        color: #1C4677 !important;
        font-size: 14px !important;
        text-decoration: none;
    }

    .copyright-logos {
        max-width: 80px;
    }
    @media (max-width: 575px) {
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
</style>