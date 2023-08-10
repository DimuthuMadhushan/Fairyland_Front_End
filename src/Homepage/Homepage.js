import React, { useEffect, useState } from 'react'
import './Homepage.css'
import GroupImage from '../Components/images/groupimg.png'
import Products from '../Components/Products/Products'



function Homepage() {
  const [items, setItems] = useState([])
  useEffect(() => {
    const fecthItems = async () => {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      console.log(data)
      setItems(data)
    }
    fecthItems()
  }, [])
  return (
    <div>
      <div className='boximg'>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
                <br className="hidden lg:inline-block" />reserve your one
              </h1>
              <p className="mb-5 leading-relaxed text-left">Fairyland  is your one-stop shop for designer pieces at an affordable price. With an ever-changing selection of clothes for men, women, and children, you’ll find something for any occasion.</p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img className="object-cover object-center rounded" alt="hero" src={GroupImage} />
            </div>
          </div>
        </section>
      </div>
      <div>
        <div className='newarrival'>
          <div className='innerardiv'>New Arrivals</div>
        </div>
        {
          items.length > 0 ?
            <Products products={items} />
            :
            <span>Loading</span>
        }
      </div>
    </div>
  )
}

export default Homepage