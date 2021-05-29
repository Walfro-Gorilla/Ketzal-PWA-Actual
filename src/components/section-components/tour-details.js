import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class TourDetails extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return	<div className="tour-details-area mg-top--70">
              <div className="tour-details-gallery">
                <div className="container-bg bg-dark-blue">
                  <div className="container">
                    <div className="gallery-filter-area row">
                      <div className="gallery-sizer col-1" />
                      {/* gallery-item */}
                      <div className="tp-gallery-item col-md-5 col-sm-6 mb-10">
                        <div className="tp-gallery-item-img">
                          <div className="thumbnails">
                            <img src={publicUrl+"assets/img/tour-details/1.png"} alt="image" />
                            <div className="video-popup-btn">
                              <a href="https://www.youtube.com/watch?v=zCO5Uu2FMuw" className="video-play-btn mfp-iframe" tabIndex={0}><i className="fa fa-play" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* gallery-item */}
                      <div className="tp-gallery-item col-md-3 col-sm-6">
                        <div className="tp-gallery-item-img">
                          <a href="#" data-effect="mfp-zoom-in">
                            <img src={publicUrl+"assets/img/tour-details/2.png"} alt="image" />
                          </a>
                        </div>
                      </div>
                      {/* gallery-item */}
                      <div className="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                        <div className="tp-gallery-item-img">
                          <a href="#" data-effect="mfp-zoom-in">
                            <img src={publicUrl+"assets/img/tour-details/3.png"} alt="image" />
                          </a>
                        </div>
                      </div>
                      {/* gallery-item */}
                      <div className="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                        <div className="tp-gallery-item-img">
                          <a href="#" data-effect="mfp-zoom-in">
                            <img src={publicUrl+"assets/img/tour-details/4.png"} alt="image" />
                          </a>
                        </div>
                      </div>
                      {/* gallery-item */}
                      <div className="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                        <div className="tp-gallery-item-img">
                          <a href="#" data-effect="mfp-zoom-in">
                            <img src={publicUrl+"assets/img/tour-details/5.png"} alt="image" />
                          </a>
                        </div>
                      </div>
                      {/* gallery-item */}
                      <div className="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                        <div className="tp-gallery-item-img">
                          <a href="#" data-effect="mfp-zoom-in">
                            <img src={publicUrl+"assets/img/tour-details/6.png"} alt="image" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-3 col-lg-4">
                        <div className="details">
                          <p className="location mb-0"><i className="fa fa-map-marker" />Mazatlán, Sinaloa</p>
                          <h4 className="title">Reactivacion Verano 2021</h4>
                          <p className="content">4 dias - 3 noches</p>
                          <div className="tp-review-meta">
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="fa fa-star" />
                            <span>4.8</span>
                          </div>
                          <div className="all-tags">
                            <a href="#">Fiesta</a>
                            <a href="#">Playa</a>
                            <a href="#">Cheve</a>
                            <a href="#">Mazatlán</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-9 col-lg-8">
                        <div className="book-list-warp">
                          <p className="book-list-content">Aparta ahora y termina de liquidar en pagos.</p>
                          <div className="tp-price-meta">
                            <p>desde</p>
                            <h2>4,850<small>$</small></h2>
                          </div>
                        </div>
                        <ul className="tp-list-meta border-tp-solid">
                          <li className="ml-0"><i className="fa fa-calendar-o" /> 28 julio</li>
                          <li><i className="fa fa-clock-o" /> 4 dias</li>
                          <li><i className="fa fa-users" />3 noches</li>
                          <li><i className="fa fa-snowflake-o" /> Party</li>
                          <li><i className="fa fa-star" /> 4.8</li>
                        </ul>
                      </div>   
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="tour-details-wrap">
                      <h4 className="single-page-small-title">¡Reactivemos el Verano 2021!</h4>
                      <p> Disfruta y reactiva nuevamente con tu espiritu viajero, es momento de seguir cuidandonos y viajar.</p>
                      <p>Asombrate y enamorate de los bellos lugares que solo la la perla del Pacifico nos puede brindar.</p>                      

                      {/* INICIO Modulo: Inlucye */}
                      <div className="package-included-area">
                        <h4 className="single-page-small-title">Tu viaje incluye</h4>
                        <div className="row">
                          <div className="col-xl-4 col-sm-6">
                            <div className="single-package-included">
                              <img src={publicUrl+"assets/img/icons/15.png"} alt="icons" />
                              <h6>Desayunos</h6>
                              <p>incluidos en el hotel</p>
                            </div>
                          </div>
                          <div className="col-xl-4 col-sm-6">
                            <div className="single-package-included">
                              <img src={publicUrl+"assets/img/icons/16.png"} alt="icons" />
                              <h6>Alojamiento</h6>
                              <p>3 noches de hotel</p>
                            </div>
                          </div>
                          <div className="col-xl-4 col-sm-6">
                            <div className="single-package-included">
                              <img src={publicUrl+"assets/img/icons/17.png"} alt="icons" />
                              <h6>Transporte</h6>
                              <p>ida y vuelta</p>
                            </div>
                          </div>
                          <div className="col-xl-4 col-sm-6">
                            <div className="single-package-included">
                              <img src={publicUrl+"assets/img/icons/18.png"} alt="icons" />
                              <h6>Bebidas</h6>
                              <p>Cerveza de cotesia</p>
                            </div>
                          </div>
                          <div className="col-xl-4 col-sm-6">
                            <div className="single-package-included">
                              <img src={publicUrl+"assets/img/icons/19.png"} alt="icons" />
                              <h6>Accesos</h6>
                              <p>Incluidos</p>
                            </div>
                          </div>
                          <div className="col-xl-4 col-sm-6">
                            <div className="single-package-included">
                              <img src={publicUrl+"assets/img/icons/20.png"} alt="icons" />
                              <h6>Equipo</h6>
                              <p>STAFF capacitado</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* FIN Modulo: Inlucye */}

                      {/* INICIO Modulo: Itinerario */}                      
                      <div className="package-included-location">
                        <h4 className="single-page-small-title">Tu itinerario</h4>

                        {/* Linea 1 */}
                        <div className="row">
                          
                          <div className="col-lg-4 col-md-4">
                            <div className="single-blog">
                              <div className="p-list">
                                <div className="list">1</div>
                                <p>Dia 1</p>
                              </div>
                              <div className="thumb">
                                <img src={publicUrl+"assets/img/blog/1.png"} alt="blog" />
                              </div>
                              <div className="single-blog-details">
                                <h4 className="title">Partida a Mazatlan</h4>
                                <p className="content">Salimos en punto de las 06 pm. Tendremos paradas aleatorias para comer, baños y comprar en tiendas.</p>
                                <a className="btn-read-more" href="#"><span>Ver Mas<i className="la la-arrow-right" /></span></a>
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-4 col-md-4">
                            <div className="single-blog">
                              <div className="p-list">
                                <div className="list">2</div>
                                <p>Dia 2</p>
                              </div>
                              <div className="thumb">
                                <img src={publicUrl+"assets/img/blog/2.png"} alt="blog" />
                              </div>
                              <div className="single-blog-details">
                                <h4 className="title">Llegada al destino</h4>
                                <p className="content">¡Llegamos a Mazatlan!, directo a degustar un rico desayuno en el malecon al temrinar hacemos Chekin en nuestro hotel.</p>
                                <a className="btn-read-more" href="#"><span>Ver Mas<i className="la la-arrow-right" /></span></a>
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-4 col-md-4">
                            <div className="single-blog single-blog-after-none">
                              <div className="p-list">
                                <div className="list">3</div>
                                <p>Dia 3</p>
                              </div>
                              <div className="thumb">
                                <img src={publicUrl+"assets/img/blog/3.png"} alt="blog" />
                              </div>
                              <div className="single-blog-details">
                                <h4 className="title">Isal &amp; Faro</h4>
                                <p className="content">Conoceremos el faro natural ma sgrande de Mexico, acuario, alberca natural e isal de la piedra.</p>
                                <a className="btn-read-more" href="#"><span>Ver Mas<i className="la la-arrow-right" /></span></a>
                              </div>
                            </div>
                          </div>

                        </div>

                        {/* Linea 2 */}
                        <div className="row">
                          
                          <div className="col-lg-4 col-md-4">
                            <div className="single-blog">
                              <div className="p-list">
                                <div className="list">4</div>
                                <p>Dia 4</p>
                              </div>
                              <div className="thumb">
                                <img src={publicUrl+"assets/img/blog/4.png"} alt="blog" />
                              </div>
                              <div className="single-blog-details">
                                <h4 className="title">¡Fiestaaa!</h4>
                                <p className="content">Tendremos nuestro "Boat Party" con musica, cheve y mucho mar, ademas de nuestra ruta antrera y de bares.</p>
                                <a className="btn-read-more" href="#"><span>Ver Mas<i className="la la-arrow-right" /></span></a>
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-4 col-md-4">
                            <div className="single-blog">
                              <div className="p-list">
                                <div className="list">5</div>
                                <p>Dia 5</p>
                              </div>
                              <div className="thumb">
                                <img src={publicUrl+"assets/img/blog/5.png"} alt="blog" />
                              </div>
                              <div className="single-blog-details">
                                <h4 className="title">Ultima vuelta</h4>
                                <p className="content">Visitaremos el Restaurante Panama, y su zona dorada para despdirnos de este hermoso puerto.</p>
                                <a className="btn-read-more" href="#"><span>Ver Mas<i className="la la-arrow-right" /></span></a>
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-4 col-md-4">
                            <div className="single-blog single-blog-after-none">
                              <div className="p-list">
                                <div className="list">6</div>
                                <p>Dia 6</p>
                              </div>
                              <div className="thumb">
                                <img src={publicUrl+"assets/img/blog/6.png"} alt="blog" />
                              </div>
                              <div className="single-blog-details">
                                <h4 className="title">Llegada a Jrz</h4>
                                <p className="content">Estamos de vuelta en nuestra hermosa ciudad, y en espera de la siguiente aventura...</p>
                                <a className="btn-read-more" href="#"><span>Show More<i className="la la-arrow-right" /></span></a>
                              </div>
                            </div>
                          </div>

                        </div>

                      </div>
                      {/* FIN Modulo: Itinerario */}                      

                      <div className="host-area">
                        <div className="single-host-wrap text-center">
                          <div className="thumb">
                            <img src={publicUrl+"assets/img/client/02.png"} alt="img" />
                          </div>
                          <h4>Wanderlust Jrz te lleva</h4>
                          <p>Somos una agencia de viajes juarense, que ama los viajes, la comida y las buenas experiencias.</p>
                          <p>Hacems que tu viajes se convierta en toda una experiencia inolvidable, que seguramente contaras a tus nietos.</p>
                          <a className="btn btn-yellow" href="https://www.facebook.com/Wanderlust.Viaja">Contactanos</a>
                        </div>
                      </div>

                      <div className="service-location-map">
                        <h4 className="single-page-small-title">Visitanos</h4>
                        <div className="service-location-map">
                          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d504.73036709180457!2d-106.42376986696728!3d31.67742197681884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e75dc58b3a0945%3A0x1df7a4027fd7acb8!2sPlaza%20Bonita!5e0!3m2!1ses-419!2smx!4v1622311512399!5m2!1ses-419!2smx" />
                        </div>
                      </div>
                      <div className="comments-area tour-details-review-area">
                        <h4 className="comments-title">¿Que Dicen Nuestros Viajeros?</h4>
                        <ul className="comment-list mb-0">
                          <li>
                            <div className="single-comment-wrap">
                              <div className="thumb">
                                <img src={publicUrl+"assets/img/client/2.png"} alt="img" />
                              </div>
                              <div className="content">
                                <h4 className="title">Claudia Bañuelos</h4>
                                <span className="date">22 FEB 2019</span>
                                <div className="tp-review-meta">
                                  <i className="ic-yellow fa fa-star" />
                                  <i className="ic-yellow fa fa-star" />
                                  <i className="ic-yellow fa fa-star" />
                                  <i className="ic-yellow fa fa-star" />
                                  <i className="ic-yellow fa fa-star" />
                                </div>
                                <p>Súper recomendado 😍⭐️⭐️⭐️⭐️⭐️
                                  Me encantó el trato y las facilidades de pago son lo mejor GRACIAS!! #Cancún 🌊 🏝💚💚💚</p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="single-comment-wrap">
                              <div className="thumb">
                                <img src={publicUrl+"assets/img/client/3.png"} alt="img" />
                              </div>
                              <div className="content">
                                <h4 className="title">Beronica Alejandra</h4>
                                <span className="date">29 OCT 2019</span>
                                <div className="tp-review-meta">
                                  <i className="ic-yellow fa fa-star" />
                                  <i className="ic-yellow fa fa-star" />
                                  <i className="ic-yellow fa fa-star" />
                                  <i className="ic-yellow fa fa-star" />
                                  <i className="ic-yellow fa fa-star" />
                                </div>
                                <p>Agencia 100% confiable, gran ambiente y te la pasas súper padre, desde el pa’l norte 2018, 2019 y próximamente 2020🤘🏼🖤</p>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <div className="btn-wrapper text-right mt-3">
                          <a className="btn-read-more" href="#"><span>Mas Reseñas<i className="la la-arrow-right" /></span></a>
                        </div>
                      </div>
                      <div className="location-review-area">
                        <form className="tp-form-wrap bg-gray tp-form-wrap-one">
                          <div className="row">
                            <div className="col-lg-6"><h4 className="single-page-small-title">Escribe una Reseña</h4></div>
                            <div className="col-lg-6">
                              <div className="tp-review-meta text-lg-right">
                                <span className="mr-3 ml-0">Calificacon Asignada</span>
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <label className="single-input-wrap">
                                <span className="single-input-title">Nombre</span>
                                <input type="text" />
                              </label>
                            </div>
                            <div className="col-lg-6">
                              <label className="single-input-wrap">
                                <span className="single-input-title">Email</span>
                                <input type="text" />
                              </label>
                            </div>
                            <div className="col-lg-12">
                              <label className="single-input-wrap">
                                <span className="single-input-title">Commentario</span>
                                <textarea defaultValue={""} />
                              </label>
                            </div>
                            <div className="col-12">
                              <a className="btn btn-yellow" href="#">Enviar</a>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="sidebar-area sidebar-area-4">
                      <div className="widget tour-list-widget">
                        <div className="widget-tour-list-meta">
                          <div className="single-widget-search-input-title"><i className="fa fa-user" /> Nombre</div>
                          <div className="single-widget-search-input">
                            <input type="text" placeholder="Nombre" />
                          </div>
                          <div className="single-widget-search-input-title"><i className="fa fa-envelope" /> Email</div>
                          <div className="single-widget-search-input">
                            <input type="text" placeholder="Email" />
                          </div>
                          <div className="single-widget-search-input-title"><i className="fa fa-phone" /> Celular</div>
                          <div className="single-widget-search-input">
                            <input type="text" placeholder="Whats App" />
                          </div>
                          <div className="single-widget-search-input-title"><i className="fa fa-calendar-minus-o" /> Ida</div>
                          <div className="single-widget-search-input">
                            <input type="text" className="departing-date custom-select" placeholder="Sales" />
                          </div>
                          <div className="single-widget-search-input-title"><i className="fa fa-calendar-minus-o" /> Vuelta</div>
                          <div className="single-widget-search-input">
                            <input type="text" className="returning-date custom-select" placeholder="Vuelves" />
                          </div>
                          <div className="single-widget-search-input-title"><i className="fa fa-keyboard-o" /> Mensaje</div>
                          <div className="single-widget-search-input">
                            <textarea placeholder="Escribe..." defaultValue={""} />
                          </div>
                          <div className="text-lg-center text-left">
                            <a className="btn btn-yellow" href="#">¡Vamonoos!<i className="fa fa-paper-plane" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="widget_ads">
                        <a href="#"><img className="w-100" src={publicUrl+"assets/img/others/01.png" }alt="img" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

        }
}

export default TourDetails