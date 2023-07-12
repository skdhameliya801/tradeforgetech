import React, { useState } from 'react'
import "./Contact_Us.css"


/* https://docs.google.com/forms/d/e/1FAIpQLSc-tDDlT_aTpEGcm_maiYRqtycUN26678Vl8S26jLMgD1acug/formResponse?usp=pp_url

&entry.640279309=Hari
&entry.1240026703=Hari@gmail.com
&entry.786923948=Jay+Swaminarayan


*/

const Contact_Us = () => {
    // let submitted = false;

    let [submitted, setSubmitted] = useState(false)

    let submitted_form = () => {



        // alert("sub")
    }
    
    let onload_iframe = () => {
        if(submitted){
            // window.location.href = "http://localhost:3000/"
            // window.location.replace("http://localhost:3000/")
            document.getElementById("success_msg").style.display = "block"
            document.getElementById("contact_us_form").style.display = "none"
        }
    }
    return (
    <>



        <iframe 
            title='hiddenConfirm' 
            name='hiddenConfirm' 
            id='hiddenConfirm' 
            style={{"display":"none"}} 
            src="" frameborder="0"
            onLoad={() => onload_iframe()}>
        </iframe>

            

            <h1 className="text-center mt-5 Heading">For Inquiry</h1>
            {/* <div class="centered-div"> */}
                { submitted && <h3 id="success_msg" className='text-center mt-5'>We received your inquiry, Thanks.</h3> }
                {/* <div className="container mt-5 mb-5" style={{"width":"70%"}}>
                    <form 
                        id='contact_us_form'
                        action="https://docs.google.com/forms/d/e/1FAIpQLSc-tDDlT_aTpEGcm_maiYRqtycUN26678Vl8S26jLMgD1acug/formResponse" method="post" 
                        onSubmit={() => setSubmitted(true)}
                        target='hiddenConfirm'
                        onLoad={() => onload_iframe()}>

                    
                        <div class="row mb-3">
                            <div className="col-sm">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1">Full Name</span>
                                    <input type="text" name="entry.640279309" class="form-control" placeholder="Enter your full name" aria-label="fullName" aria-describedby="basic-addon1" />
                                </div>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div className="col-sm">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1">Email</span>
                                    <input type="Email" name="entry.1240026703" class="form-control" placeholder="Enter your email address" aria-label="Email" aria-describedby="basic-addon1" />
                                </div>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div className="col-sm">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1">Message To Us</span>
                                    <textarea rows="3" name="entry.786923948" placeholder="Any message for us" type="t" class="form-control"  aria-label="Message" aria-describedby="basic-addon1" />
                                </div>
                            </div>
                        </div>

                        <input type="submit" className='btn btn-success' value="Send Inquiry" />
                    </form>
                        
                </div> */}
            {/* </div> */}

            <div className="container"  style={{"width":"70%"}} id='ContactUs'>
                    <form 
                    className=''
                        id='contact_us_form'
                        action="https://docs.google.com/forms/d/e/1FAIpQLSeI7KZscZ5bF5yy8ZgDifryWzUO8b9fC6TnUpKtNSB-Y--sQQ/formResponse" method="post" 
                        onSubmit={() => setSubmitted(true)}
                        target='hiddenConfirm'
                        onLoad={() => onload_iframe()}>
                            <div class="form-group row mt-4">
                            <label for="colFormLabel" class="col-sm-3 col-form-label">Your Name* :</label>
                                <div class="col-sm-7">
                                    <input type="text" name="entry.1253935810" class="form-control" placeholder="Enter your full name" aria-label="fullName" aria-describedby="basic-addon1" required/>
                                </div>
                            </div>
                            <div class="form-group row mt-4">
                            <label for="colFormLabel" class="col-sm-3 col-form-label">Email* :</label>
                                <div class="col-sm-7">
                                    <input type="Email" name="entry.1692662404" class="form-control" placeholder="Enter your email address" aria-label="Email" aria-describedby="basic-addon1" required/>
                                </div>
                            </div>
                            <div class="form-group row mt-4">
                            <label for="colFormLabel" class="col-sm-3 col-form-label">Message To Us :</label>
                                <div class="col-sm-7">
                                    <textarea rows="3" name="entry.963058703" placeholder="Any message for us" type="t" class="form-control"  aria-label="Message" aria-describedby="basic-addon1" />
                                </div>
                            </div>
                        <input type="submit" className='btn btn-success mt-3' value="Send Inquiry" />
                </form>
            </div>


    </>
    )
}

export default Contact_Us