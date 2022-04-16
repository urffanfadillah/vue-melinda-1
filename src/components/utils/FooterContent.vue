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
                <p class="mt-4 mt-md-0">
                    Please feel free to contact our friendly reception staff with any medical enquiry, or call (022) 4233777
                </p>
            </div>
            <span id="contacts" class="col-sm-4 mt-4 mt-xl-0 d-flex align-items-center gap-3 justify-content-center">
                <a href="#"><i class="bi bi-facebook fs-4"></i></a>
                <a href="#"><i class="bi bi-twitter fs-4"></i></a>
                <a href="#"><i class="bi bi-linkedin fs-4"></i></a>
                <a href="#"><i class="bi bi-instagram fs-4"></i></a>            
                <a href="#" data-bs-toggle="modal" data-bs-target="#auth" class="link-to-website btn btn-primary">Pendaftaran <i class="bi bi-arrow-right"></i></a>
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
            <a href="#" class="copyright-link"  data-bs-toggle="modal" data-bs-target="#login-register">Login</a>
          </div>
        </div>
    </footer>
    <!-- MODAL DAFTAR -->
    <!-- Modal -->
    <div class="modal fade" id="auth" tabindex="-1" aria-labelledby="authLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <div class="d-flex flex-column">
                    <h5 class="modal-title" id="authLabel">Form Pendaftaran Rawat Jalan</h5>
                    <h2>Form Pendaftaran</h2>
                </div>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body border-0">
                <form action="#">
                    <div class="mb-2">
                        <label for="exampleInputEmail1" class="form-label">Pilih Poli</label>
                        <select class="form-select">                        
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="mb-2">
                        <label for="exampleInputEmail1" class="form-label">Pilih Dokter</label>
                        <select class="form-select">                        
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="mb-2">
                        <label for="exampleInputEmail1" class="form-label">Pilih Jam Praktek</label>
                        <select class="form-select">                        
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="mb-2">
                        <label for="exampleInputEmail1" class="form-label">Nama Pasien</label>
                        <input type="text" class="form-control" />
                    </div>
                    <div class="mb-2">
                        <label for="exampleInputEmail1" class="form-label">Phone Number</label>
                        <input type="text" class="form-control" />
                    </div>
                    <div class="mb-2">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                            <label class="form-check-label" for="flexRadioDefault1">
                                Member Melinda Hospital
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                            <label class="form-check-label" for="flexRadioDefault2">
                                Non Member Melinda Hospital
                            </label>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer d-flex justify-content-between">
                <button type="button" class="btn btn-secondary btn-batal" data-bs-dismiss="modal">Batal</button>
                <button type="button" class="btn btn-primary btn-daftar" data-bs-toggle="modal" data-bs-target="#berhasilDaftar">
                    Daftar Sekarang <i class="bi bi-arrow-right"></i>
                </button>
            </div>
            </div>
        </div>
    </div>
    <!-- MODAL KONFIRMASI BERHASIL DAFTAR -->
    <!-- Modal -->
    <div class="modal fade" id="berhasilDaftar" tabindex="-1" aria-labelledby="berhasilDaftarLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <div class="d-flex flex-column">
                    <h5 class="modal-title" id="authLabel">Form Pendaftaran Rawat Jalan</h5>
                    <h2>Form Pendaftaran</h2>
                    <p>
                        Terima kasih telah melakukan pendaftaran melalui website kami, data anda akan kami proses dan akan kami akan mengirimkan konfirmasi melalaui SMS/Telpon.
                    </p>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary btn-daftar"  data-bs-dismiss="modal" data-bs-target="#berhasilDaftar">
                    Tutup <i class="bi bi-arrow-right"></i>
                </button>
            </div>
            </div>
        </div>
    </div>
    <!-- Modal Login & regiser -->
    <div class="modal fade" id="login-register" tabindex="-1" aria-labelledby="login-register" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content container">
                <div class="modal-header row p-0 border-0">
                    <div class="col-6 px-0 py-4 d-flex justify-content-center tab-auth" :class="{active : isSignupActive}" @click="changeToLoginActive">
                        Sign Up
                    </div>
                    <div class="col-6 px-0 py-4 d-flex justify-content-center tab-auth" :class="{active : isLoginActive}" @click="changeToSignupActive">
                        Login
                    </div>
                </div>
                <div class="modal-body">
                    <div class="container-fluid tab-auth-body" v-if="isSignupActive">
                        <h1 class="fs-3">Sign Up</h1>
                        <div class="d-grid gap-3">
                            <button class="btn btn-primary py-2" type="button"><i class="bi bi-facebook"></i> Login With Facebook</button>
                            <button class="btn btn-outline-primary py-2" type="button"><i class="bi bi-google"></i> Login With Google</button>
                            <p class="form-text text-center">Or sign up using email</p>
                        </div>
                        <form>
                            <div class="mb-2">
                                <label class="form-label">First Name</label>
                                <input type="text" class="form-control" />
                            </div>
                            <div class="mb-2">
                                <label class="form-label">Last Name</label>
                                <input type="text" class="form-control" />
                            </div>
                            <div class="mb-2">
                                <label class="form-label">Email Address</label>
                                <input type="email" class="form-control" />
                            </div>
                            <div class="mb-2">
                                <label class="form-label">Password</label>
                                <input type="passowrd" class="form-control" />
                            </div>
                            <div class="d-grid">
                                <button class="btn btn-primary rounded-pill py-2" type="button">Sign Up</button>
                            </div>
                            <p class="form-text text-center pb-4">By signing up, I agree to RS Melinda Terms of Service and Privacy Policy.</p>
                        </form>
                    </div>
                    <div class="container-fluid tab-auth-body" v-if="isLoginActive">
                        <h1 class="fs-3">login</h1>
                        <div class="d-grid gap-3">
                            <button class="btn btn-primary py-2" type="button"><i class="bi bi-facebook"></i> Login With Facebook</button>
                            <button class="btn btn-outline-primary py-2" type="button"><i class="bi bi-google"></i> Login With Google</button>
                            <p class="form-text text-center">Or sign up using email</p>
                        </div>
                        <div class="mb-2">
                            <label class="form-label">Email Address</label>
                            <input type="email" class="form-control" />
                        </div>
                        <div class="mb-2">
                            <label class="form-label">Password</label>
                            <input type="passowrd" class="form-control" />
                        </div>
                        <div class="d-grid">
                            <button class="btn btn-primary rounded-pill py-2" type="button">Login</button>
                        </div>
                        <a class="form-text mc-auto pb-4" href="#" data-bs-toggle="modal" data-bs-target="#forgot-password">Forgot Password?</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal Forgot Password -->
    <div class="modal fade" id="forgot-password" tabindex="-1" aria-labelledby="login-register" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content container">
                <div class="modal-body">
                    <div class="container-fluid tab-auth-body">
                        <h1 class="fs-3">We’ll send you an email to reset your password.</h1>
                        <form>
                            <div class="mb-2">
                                <label class="form-label">Email Address</label>
                                <input type="email" class="form-control" />
                            </div>
                            <div class="d-grid">
                                <button class="btn btn-primary rounded-pill py-2" type="button">Reset Password</button>
                            </div>
                            <p class="form-text text-center pb-4">
                                Don't Have a Account? 
                                <a class="form-text text-center pb-4" href="#" data-bs-toggle="modal" data-bs-target="#login-register">
                                    Sign Up
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>    
    export default {
        data(){
            return {
                // set tabs aktif
                isSignupActive : true,
                isLoginActive : false,
            }
        },
        methods: {
            changeToLoginActive() {
                this.isSignupActive = true
                this.isLoginActive = false
            },
            changeToSignupActive() {
                this.isSignupActive = false
                this.isLoginActive = true
            }
        }
    }
</script>

<style scoped>
    .tab-auth-body .d-grid .btn.btn-primary {
        background-color:#3B5998;
        border: #3B5998;
    }
    .tab-auth-body .d-grid .btn.btn-primary:hover {
        background-color:#2a4683;
        border: #3B5998;        
    }
    .tab-auth-body .d-grid .btn.btn-outline-primary {
        background-color:#ffffff;
        border: 1px solid #3B5998;
        color: #3B5998;
    }
    .tab-auth-body .d-grid .btn.btn-outline-primary:hover {
        background-color:#3B5998;
        border: 1px solid transparent;
        color: #ffffff;
    }
    .tab-auth-body h1 {
        font-weight: 700;
        color: #1B4674;
    }
    .tab-auth {
        font-weight: 700;
        color: #575757;
        background-color: #F8F8F8;
        cursor: pointer;
    }
    .tab-auth:hover {
        font-weight: 700;
        color: #575757;
        background-color: #F8F8F8;
        cursor: pointer;
        opacity: 0.8;
    }
    .tab-auth.active {
        font-weight: 700;
        color: #1B4674;
        background-color: #ffffff;
        cursor: pointer;
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
        color: #75C6EF !important;
    }
    .modal-header div h2 {
        font-size: 24px;
        color: #1B4674;
        font-weight: bold;
    }
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