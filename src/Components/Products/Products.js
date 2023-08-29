import React from 'react'
import './Products.css'
import { Link } from 'react-router-dom';


function Products({ products = [] }) {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {
                            products.map((product) => {
                                console.log(product, 'product')
                                const { itemId, category ,xLQuantity,lQuantity,mQuantity,sQuantity,unitPrice,imgUrl,tittle } = product;
                                console.log(category)
                                return (
                                    <Link to={`/product/${itemId}`} style={{textDecoration: 'none'}} className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-sm cursor-pointer">
                                        <div className="block relative h-48 rounded overflow-hidden">
                                            <img alt={tittle} className="object-contain object-center w-full h-full block" src={`http://localhost:8080/item/getimage/${imgUrl}`} />
                                        </div>
                                        <div className="mt-4">
                                            <h3 className="hover:underline text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">{category}</h3>
                                            <h2 className="text-gray-900 title-font text-lg font-medium">{tittle}</h2>
                                            <p className="mt-1">Rs.{unitPrice}.00</p>
                                        </div>
                                    </Link>
                                )
                            })
                        }

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Products