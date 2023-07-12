import React from 'react'

const Our_Products = () => {

    const products_1 = [
        {
            "id" : "1",
            "title" : "Raw Material",
            "img_path" : "img/slider/rawmaterial.jpeg"
        },
        {
            "id" : "2",
            "title" : "Forging Material",
            "img_path" : "img/slider/forging.jpg"
        },
        {
            "id" : "3",
            "title" : "Casting Materials",
            "img_path" : "img/slider/casting2.jpeg"
        },
        {
            "id" : "4",
            "title" : "Finish Product",
            "img_path" : "img/slider/finish.jpeg"
        },
        

        
        
        // {
        //     "id" : "5",
        //     "title" : "p5",
        //     "img_path" : "img/slider/5.jpg"
        // },
        // {
        //     "id" : "6",
        //     "title" : "p6",
        //     "img_path" : "img/slider/6.jpg"
        // }
    ];


    return (
        <div id='ourProducts'>
        <h1 className="text-center Heading mt-5">Our Products</h1>
            <div className='container mt-5 text-center'>
                <div class="row row-cols-1 row-cols-md-3 g-4 text-center justify-content-center align-items-center">

                {
                    products_1.map(product => (
                        <div class="col-6 col-md-4 text-center" key={product.id}>
                            <div class="card">
                            <img src={product.img_path} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title text-center">{product.title}</h5>
                                </div>
                            </div>
                        </div>
                    ))
                }

                </div>
            </div>
        </div>
    )
}

export default Our_Products