import Cookies from 'js-cookie';
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

function Cart() {
    const Swal=require('sweetalert2')
    const navigate = useNavigate()
    const cart = JSON.parse(localStorage.getItem('cart')) || []
     console.log(cart)
    
    const removeProduct = (id) => {
        const updatedCart = cart.filter(item => item.itemId !== id)
        localStorage.setItem('cart', JSON.stringify(updatedCart))
        Cookies.set('cart',cart.length-1)
        navigate('/cart')
    }

    if (cart.length === 0) {
        return(
            <div className='emp'>Oops....! Cart Is Empty</div>
            
        )
    }
    const grandTotal=cart.reduce((total, cartitem)=>total+(cartitem.unitPrice*cartitem.quantity),0);
    const checkout =async() => {

        for(let i=0;i<cart.length;i++){
       
            const response=await fetch(`http://localhost:8080/orders/add/${Cookies.get('user')}`, {
                method: 'POST',
              
                body: JSON.stringify({
                    date:new Date(),
                    orderDetailsList:[
                        {
                            quantity:cart[i].quantity,
                            size:cart[i].size,
                            itemId:cart[i].itemId
                       
                        }
                    ]
                    
                    
                }),
                headers: {
                    "Authorization": `Bearer ${Cookies.get('jwt')}`,'Content-type': 'application/json',
                },
            })



        }
        Swal.fire('Order Successful')
        localStorage.clear('cart')
        Cookies.set('cart',0)
        navigate('/cart')
        
    }

    return (


        <div className='container mx-auto mt-10'>
            <div className='flex shadow-md my-10'>
                <div className='w-3/4 bg-white px-10 py-10'>
                    <div className='flex justify-between border-b pb-8'>
                        <h1 className='font-semibold text-2xl'>Shopping Cart</h1>
                        <h2 className='font-semibold text-2xl'>{cart?.length} Items</h2>
                    </div>
                    <div className='flex mt-10 mb-5'>
                        <h3 className='font-semibold text-gray-600 text-xs uppercase w-2/5'>Product Details</h3>
                        <h3 className='font-semibold text-center text-gray-600 text-xs uppercase w-1/5'>Quantity</h3>
                        <h3 className='font-semibold text-center text-gray-600 text-xs uppercase w-1/5'>Price</h3>
                        <h3 className='font-semibold text-center text-gray-600 text-xs uppercase w-1/5'>Total</h3>
                    </div>
                    {
                        cart?.map((cartitem) => {
                           
                            return (
                                <div className='flex items-center hover:bg-gray-100 -mx-8 px-6 py-5'>
                                    <div className='flex w-2/5'>
                                        <div className='w-20'>
                                            <img className='h-24' src={`http://localhost:8080/item/getItem/${cartitem?.itemId}`} alt={cartitem?.tittle}></img>
                                        </div>
                                        <div className='flex flex-col justify-between ml-4 flex-grow'>
                                            <span className='font-bold text-sm'>{cartitem?.tittle}</span>
                                            <span className='text-red-500 text-xs'>{cartitem?.category}</span>
                                            <div className='font-semibold hover:text-red-500 text-gray-500 text-xs cursor-pointer' onClick={() => removeProduct(cartitem?.itemId)}>Remove</div>
                                        </div>
                                    </div>
                                    <div className='flex justfy-center w-1/5'>



                                        <input className='mx-5 border text-center w-8' type='text' value={cartitem?.quantity}></input>



                                    </div>
                                    <span className='text-center w-1/5 font-semibold text-sm'>Rs{cartitem?.unitPrice}</span>
                                    <span className='text-center w-1/5 font-semibold text-sm'>Rs{cartitem?.unitPrice * cartitem?.quantity}</span>
                                </div>)
                        })
                    }
                    <Link to={'/women'}>
                        <div className='flex font-semibold text-indigo-600 text-sm mt-10'>
                            <svg className='fill-current mr-2 text-indigo-600 w-4' viewBox='0 0 448 512'>
                                <path d='M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z' />
                            </svg>
                            Continue Shopping
                        </div>
                    </Link>

                </div>
                <div id='summary' className='W-1/4 px-8 py-10'>
                    <h1 className='font-semibold text-2xl border-b pb-8'>Order Summery</h1>
                    <div className='flex justify-between mt-10 mb-5'>
                        <span className='font-semibold text-sm uppercase'>Items {cart?.length}</span>
                        <span className='font-semibold text-sm'>Rs.{grandTotal}</span>
                    </div>
                    <div>
                        <label className='font-medium inline-block mb-3 text-sm uppercase'>Shipping</label>
                        <select className='block p-2 text-gray-600 w-full text-sm'>
                            <option>Standard Shipping - Rs200</option>
                        </select>
                    </div>
                    <div className='py-10'>
                        <label for='promo' className='font-semibold inline-block mb-3 text-sm uppercase'>Promo Code</label>
                        <input type='text' id='promo' placeholder='Enter your code' className='p-2 text-sm w-full border-b' />
                    </div>
                    <button className='bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase'>Apply</button>
                    <div className='border-t mt-8'>
                        <div className='flex font-semibold justify-between py-6 text-sm uppercase'>
                            <span>Total cost</span>
                            <spa>Rs.{grandTotal+200}</spa>
                        </div>
                        <button className='bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full' onClick={() => checkout()}>Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart