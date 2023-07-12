import React from 'react'

const Nav_Bar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light sticky-top mt-5 p-3" style={{"background":"lightblue"}}>
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        {/* <img src="./logo_tradeforgetech.png" alt="" width="35" height="35" class="d-inline-block align-text-top" /> */}
                        TradeForgeTech Inc.
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#aboutUs">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#ourProducts">Our Products</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#ourVision">Our Unique Offering</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#whyUs">Why Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#ContactUs">Contact Us</a>
                        </li>
                        {/* <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown link
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li> */}
                    </ul>
                    </div>
                </div>
                </nav>
        </>
    )
}

export default Nav_Bar