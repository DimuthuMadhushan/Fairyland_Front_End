import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2';

function ItemDetail() {

  const Swal = require('sweetalert2');
  const navigate = useNavigate();
  Cookies.set('items', 0, { expires: 1 })
  const { id } = useParams();
  const [item, setItem] = useState([])
  const [sizeval, setSize] = useState(0);
  const [select, setSelect] = useState('');
  const [qty, setQty] = useState('');
  const [stock, setStock] = useState('');

  useEffect(() => {
    const fecthItems = async () => {
      const response = await fetch(`http://localhost:8080/item/getItem/${id}`)
      const data = await response.json()
      setItem(data)
      setStock(data?.sQuantity)
    }
    fecthItems()
  }, [])
  const setVal = (value) => {
    if (value === "S") {
      setSize("SMALL")
      setStock(item?.sQuantity)
      setSelect(value)
    } else if (value === "M") {
      setSize("MEDIUM")
      setStock(item?.mQuantity)
      setSelect(value)
    } else if (value === "L") {
      setSize("LARGE")
      setStock(item?.lQuantity)
      setSelect(value)
    } else {
      setSize("XL")
      setStock(item?.xLQuantity)
      setSelect(value)
    }
  }
  const handleCart = (item, b) => {
    if (stock === 0) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Out of Stock!',
      })
    } else if (qty === '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please Enter the Quantity!',
      })
    } else {
      console.log(item)
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const isProductExist = cart.find(product => product.id === item.itemId)

      if (isProductExist) {
        const updatedCart = cart.map(product => {

          if (product.id === item.id) {

            return {
              ...product,
              quantity: parseInt(qty),
              size: sizeval
            }
          }
          return product
        })
        localStorage.setItem('cart', JSON.stringify(updatedCart))
      } else {
        localStorage.setItem('cart', JSON.stringify([...cart, { ...item, quantity: parseInt(qty), size: sizeval }]))
      }
      Cookies.set('cart', cart.length + 1)
      Swal.fire("Aded succesfuly")

      if (b) {
        navigate('/cart');
      } else if (!b) {
        navigate('/')
      }

    }

  }

  if (!Object.keys(item).length > 0) return (<div>Product not found</div>)
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img alt={item?.title} className="lg:w-1/2 w-full lg:h-auto max-h[400px] h-64 object-contain object-center rounded" src={`http://localhost:8080/item/getimage/${item?.imgUrl}`} />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-5 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">{item?.category}</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{item?.tittle}</h1>
              <div className="flex mb-4">
              </div>
              <p className="leading-relaxed">{ }</p>
              <span className="text-gray-900 text-m title-font font-medium">Quantity :
                <input value={qty} onChange={(e) => { setQty(e.target.value) }} type="text" id="full-name" name="full-name" className="bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-0 transition-colors duration-200 ease-in-out " />
              </span>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">In Stock :</span>
                  <span>{stock}</span>
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select value={select} onChange={(e) => { setVal(e.target.value) }} className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                      <option>S</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>

                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">Rs.{item?.unitPrice}</span>

                <Button className='but checkout' onClick={() => handleCart(item, true)}>Check out</Button>


                <Button className='but addtocart' onClick={() => handleCart(item, false)}>Add to cart</Button>

                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ItemDetail