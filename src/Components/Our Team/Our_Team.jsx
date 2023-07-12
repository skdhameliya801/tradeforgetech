import React from 'react'

const Our_Team = () => {
    return (
        <>
            <h1 className="text-center Heading mt-5">Our Current Distributors</h1>
            <div className="container mt-5">
                {/* <div className="row ">
                    <div class="col-6">
                        <div class="card">
                        <img src="img/slider/6.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title text-center">Ankit Patel</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="card">
                        <img src="img/slider/6.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title text-center">Vivek Ratanpara</h5>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="row">
                    {/* <p className="text-center">
                        Our current distributor is Metalic TechnoForge Pvt. Ltd., and if you are interested in becoming a part of <b>TechnoForgeTech</b>, please contact us.
                    </p> */}
                    <p className="text-center">
                        {/* Metalic TechnoForge PVT. LTD. */}
                        We have distributors in India. If you are interested in becoming a part of <b>TradeForgeTech Inc</b>, please contact us.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Our_Team