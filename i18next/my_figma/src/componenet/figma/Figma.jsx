import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
// import Header from '../header/Header'
import Rasm from '../img/corusel.jpg'
import Rasm1 from '../img/corusel2.jpg'
import Rasm2 from '../img/ayol.jpg'
import Logo from '../img/Logo.png'
import Rasm3 from '../img/icon1.png'
import Rasm4 from '../img/icon2.png'
import Rasm5 from '../img/icon3.png'
import Rasm6 from '../img/icon4.png'
import Rasm7 from '../img/opa.jpg'
import Rasm8 from '../img/logo1.png'
import Rasm9 from '../img/logo2.png'
import Rasm10 from '../img/logo3.png'
import Rasm11 from '../img/logo4.png'
import Rasm12 from '../img/logo5.png'
import './figmaCss.css'

export default function Figma() {

    const { t, i18n } = useTranslation()

    const [lang, setLang] = useState("En")

    const changeLanguage = (til) => {
        if (til === "En") {
            setLang("En")
            localStorage.setItem("language", "En")
        }
        if (til === "Ru") {
            setLang("Ru")
            localStorage.setItem("language", "Ru")

        }
        if (til === "Uz") {
            setLang("Uz")
            localStorage.setItem("language", "Uz")

        }
        if (til === "Cn") {
            setLang("Cn")
            localStorage.setItem("language", "Cn")

        }
        i18n.changeLanguage(til)
    }


    return (
        <div >
            <div className=" navbarr">
                <div className="container">
                    <nav class="navbar navbar-expand-lg navbar-light ">
                        <div class="container-fluid">
                            <img className='rasm' src={Logo} alt="" />
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav ull">
                                    <li class="nav-item">
                                        <a class="nav-link active text-light" aria-current="page" href="#">{t("N_relation")}</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link active text-light" href="#">{t("N_health")}</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link active text-light" href="#">{t("N_business")}</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link active text-light">{t("N_about")}</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link active text-light">{t("N_blog")}</a>
                                    </li>

                                    <li>

                                    </li>

                                </ul>
                            </div>
                            <div>

                                <button className='btn btn-success mx-3' onClick={() => changeLanguage("En")}>
                                    <i class="fa fa-language" aria-hidden="true"></i> En</button>
                                <button className='btn btn-danger' onClick={() => changeLanguage("Ru")}>
                                    <i class="fa fa-language" aria-hidden="true"></i>     Ru</button>
                                <button className='btn btn-secondary mx-3' onClick={() => changeLanguage("Uz")}>
                                    <i class="fa fa-language" aria-hidden="true"></i>     Uz</button>
                                <button className='btn btn-secondary ' onClick={() => changeLanguage("Cn")}>
                                    <i class="fa fa-language" aria-hidden="true"></i>  中文</button>

                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/* navbar end */}
            {/* header */}
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={Rasm} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h1>{t("H_text11")}</h1>
                            <h3>{t("H_text12")}</h3>
                            <button className='btn btn-outline-light'>LEARN MORE</button>

                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={Rasm1} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h1>{t("H_text11")}</h1>
                            <h3>{t("H_text12")}</h3>
                            <button className='btn btn-outline-light'>LEARN MORE</button>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={Rasm1} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h1>{t("H_text11")}</h1>
                            <h3>{t("H_text12")}</h3>
                            <button className='btn btn-outline-light'>LEARN MORE</button>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            {/* header end */}
            <div className="container">
                <div className="row my-5">
                    <div className="col-sm-12 col-md-6">
                        <h1 className='text-start fs-1 fw-bold my-2'>{t("H_text1")}</h1>

                        <h4 className='text-start text-primary my-3 '>   {t("H_text2")}</h4>
                        <h5 className='text-start'>{t("H_text")}</h5>
                    </div>
                    <div className="col-sm-12 col-md-6"><img className='my-5 ayol' style={{ width: "80%" }} src={Rasm2} alt="" /></div>
                </div>
                <hr className='text-primary' />
                <div className="row my-5">
                    <div className="col-sm-12 col-md-6">
                        <h4 className=' text-start text-primary my-3'>{t("H_text6")}</h4>
                        <h5 className='text-start'>{t("H_text3")}</h5></div>
                    <div className="col-sm-12 col-md-6">
                        <h4 className='text-start text-primary my-3'>{t("H_text6")}</h4>
                        <h5 className='text-start'>{t("H_text4")}</h5></div>
                </div>
                <div className="row rang my-5 py-5">
                    <div className="col-sm-12 col-md-3">
                        <img className='w-50 ' src={Rasm3} alt="" />
                        <hr />
                        <h5 className='text-start'>{t("H_text7")}</h5>
                    </div>
                    <div className="col-sm-12 col-md-3">
                        <img className='w-50' src={Rasm4} alt="" />
                        <hr />
                        <h5 className='text-start'>{t("H_text8")}</h5>
                    </div>
                    <div className="col-sm-12 col-md-3">
                        <img className='w-50' src={Rasm5} alt="" />
                        <hr />
                        <h5 className='text-start'>{t("H_text9")}</h5>
                    </div>
                    <div className="col-sm-12 col-md-3">
                        <img className='w-50' src={Rasm6} alt="" />
                        <hr />
                        <h5 className='text-start'>{t("H_text10")}</h5>
                    </div>
                </div>
            </div>
            <div className="opa ">
                <div class="col-sm-12 col-md-4 card ">
                    <img src={Rasm7} class="card-img-bottom" alt="..." />
                </div>
            </div>
            {/* opa1 */}
            <div className="opa1 py-5">
                <div className="container py-5">
                    <div className="row py-5">
                        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-4 text-start">
                                            <h4>{t("H_text13")}</h4>
                                            <button className='btn btn-outline-dark'> Read More</button>
                                        </div>
                                        <div className="col-cm-12 col-md-4 text-start">
                                            <h4>
                                                {t("H_text14")}
                                            </h4>
                                            <button className='btn btn-outline-dark'> Read More</button>
                                        </div>
                                        <div className="col-sm-12 col-md-4 text-start">
                                            <h4>
                                                {t("H_text15")}
                                            </h4>
                                            <button className='btn btn-outline-dark'> Read More</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item active">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-4 text-start">
                                            <h4>{t("H_text13")}</h4>
                                            <button className='btn btn-outline-dark'> Read More</button>
                                        </div>
                                        <div className="col-sm-12 col-md-4 text-start">
                                            <h4>{t("H_text14")}</h4>
                                            <button className='btn btn-outline-dark'> Read More</button>
                                        </div>
                                        <div className="col-sm-12 col-md-4 text-start">
                                            <h4>{t("H_text15")}</h4>
                                            <button className='btn btn-outline-dark'> Read More</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-4 text-start">
                                            <h4>
                                                {t("H_text13")}
                                            </h4>
                                            <button className='btn btn-outline-dark'> Read More</button>
                                        </div>
                                        <div className="col-sm-12 col-md-4 text-start">
                                            <h4>{t("H_text14")}</h4>
                                            <button className='btn btn-outline-dark'> Read More</button>
                                        </div>
                                        <div className="col-sm-12 col-md-4 text-start">
                                            <h4>
                                                {t("H_text15")}
                                            </h4>
                                            <button className='btn btn-outline-dark'> Read More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* yangi */}
            <div className="container py-5">
                <div className="row py-5">
                    <div className="col-sm-12 col-md-6">
                        <h1 className='text-start' >{t("H_text1")}</h1>
                        <h4 className='text-start my-3 text-primary font'>{t("H_text16")}</h4>
                        <h5 className='text-start my-2'>{t("H_text15")}</h5>
                        <button className='btn btn-outline-primary my-5'><i class="fa fa-phone" aria-hidden="true"></i>+998-97-188-87-78</button>
                        <button className='btn btn-outline-primary mx-5'><i class="fa fa-envelope" aria-hidden="true"> {t("H_text18")}</i></button>
                        <button className='btn btn-outline-primary'><i class="fa fa-book" aria-hidden="true"></i>{t("H_text17")}</button>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <iframe width="100%" height="300" src="https://www.youtube.com/embed/OcJqbdeOvMY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
            {/* yangi */}
            <div className="logoo">
                <div className="container py-5">
                    <div className="row py-5">
                        <div className="col-sm-12 col-md-2 mx-2">
                            <img className='w-75' src={Rasm8} alt="" />
                            <h5>{t("H_text19")}</h5>
                        </div>
                        <div className="col-sm-12 col-md-2 mx-2">
                            <img className='w-75' src={Rasm9} alt="" />
                            <h5>{t("H_text20")}</h5>
                        </div>
                        <div className="col-sm-12 col-md-2 mx-2">
                            <img className='w-75' src={Rasm10} alt="" />
                            <h5>{t("H_text21")}</h5>
                        </div>
                        <div className="col-sm-12 col-md-2 mx-2">
                            <img className='w-75' src={Rasm11} alt="" />
                            <h5>{t("H_text22")}</h5>
                        </div>
                        <div className="col-sm-12 col-md-2 mx-2">
                            <img className='w-75' src={Rasm12} alt="" />
                            <h5>{t("H_text23")}</h5>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
