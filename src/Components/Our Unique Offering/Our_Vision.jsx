import React from 'react'
import "./OurVision.css"

const Our_Vision = () => {
    return (
        <div id='ourVision'>
            <div className="container mt-5 pt-5 pb-5">
                <h1 className='Heading text-center'>Our Unique Offering</h1>
                <div className="row mt-5">
                    {/* <div className="col">
                        Exclusive partnership with Metallic Techno Forge, a reputable seller in India
                    </div> */}
                    <div className="col-sm p-4">
                        Wide range of high-quality prototype parts, raw materials, and finished products
                    </div>
                    <div className="col-sm p-4">
                        Tailored solutions to meet the specific needs of clients in Canada.
                    </div>
                    <div className="col-sm p-4">
                        Samples will be provided. As per requirement and quality check.                   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Our_Vision