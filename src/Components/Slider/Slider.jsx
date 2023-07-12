import React from 'react'
import "./Slider.css"

const Slider = () => {
    return (
        <div className='container'>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            {/* <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div> */}
            <div class="carousel-inner">
                <div className="carousel-item active">
                    <img src="img/slider/i1.jpg" className="d-block w-100" alt="1" />
                    <div class="carousel-caption">
                        <h5>Construction Machine Parts</h5>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="img/slider/i2.jpg" className="d-block w-100" alt="2" />
                    <div class="carousel-caption">
                        <h5>Transmission Parts</h5>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="img/slider/i3.jpg" className="d-block w-100" alt="..." />
                    <div class="carousel-caption">
                        <h5>Transmission Shafts</h5>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="img/slider/i4.jpg" className="d-block w-100" alt="..." />
                    <div class="carousel-caption">
                        <h5>Hydraulic Components</h5>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="img/slider/i5.jpg" className="d-block w-100" alt="..." />
                    <div class="carousel-caption">
                        <h5>Forged Parts</h5>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="img/slider/i6.jpg" className="d-block w-100" alt="..." />
                    <div class="carousel-caption">
                        <h5>Casting Parts</h5>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="img/slider/i7.jpg" className="d-block w-100" alt="..." />
                    <div class="carousel-caption">
                        <h5>Non - Ferrous Forged Parts</h5>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="img/slider/nextsteps.jpg" className="d-block w-100" alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
        </div>
    )
}

export default Slider