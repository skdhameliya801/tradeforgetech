import React from 'react'
import "./Footer.css"
import "fa-icons"

const Footer = () => {
    return (
        <div id='Footer'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="lightblue" fill-opacity="1" d="M0,256L48,250.7C96,245,192,235,288,224C384,213,480,203,576,202.7C672,203,768,213,864,229.3C960,245,1056,267,1152,250.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        
        {/* //  <div className="container">
        //     <div className="row">
        //         <div className="col">

        //         </div>
        //         <div className="col"></div>
        //         <div className="col"></div>
        //     </div> */}

            <div className="container-fluid pb-5" style={{"background-color": "lightblue","color": "black"}}>
            <h1 className="text-center Heading">Contact Us</h1>
                <div class="row text-center">
                    <div class="col-sm pt-5">
                            {/* <a href="https://en-gb.facebook.com/login/" class="fas fa-facebook">
                                <i class="fa-brands fa-facebook"></i>
                            </a>
                            <a href="https://www.youtube.com/" class="fas fa-youtube"></a>
                            <a href="https://www.instagram.com/accounts/login/" class="fas fa-instagram"></a> */}

                            <p>At Social Media :</p>
                            <img width="48" height="48" src="https://img.icons8.com/fluency/48/facebook.png" alt="facebook"/>
                            <img width="48" height="48" src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram-new"/>
                            <img width="48" height="48" src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin"/>


                    </div>
                    <div class="col-sm pt-5">
                        <p>+1 519 933 5497</p>
                        <a href="mailto:inquiry@tradeforgetech.com">inquiry@tradeforgetech.com</a>
                    </div>
                </div>
            </div>

        {/* // </div> */}
        </div>
    )
}

export default Footer