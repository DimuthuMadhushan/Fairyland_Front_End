import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const Orders = () => {
  const navigate = useNavigate();
  const [Orders, setOrders] = useState([]);
  const [id , setId]=useState('');
  const [deli,setDeli]=useState('');

  useEffect(() => {
    const fecthCustomers = async () => {
      const response = await fetch('http://localhost:8080/orders/all-orders', {
        headers: {
          "Authorization": `Bearer ${Cookies.get('jwt')}`,
        },
      })
      const data = await response.json()
      console.log(data)
      setOrders(data)
    }
    fecthCustomers()
  }, []);

  const findOrderDetail = (id) => {
    if (id === null) {
      Swal.fire('Please Enter an id')
    } else {
      fetch(`http://localhost:8080/orders/order-detail/${id}`, {
        headers: {
          "Authorization": `Bearer ${Cookies.get('jwt')}`,
        },
      })
        .then((response) => response.json())
        .then((json) => navigate('/orderdetail', { state: { json } }))

    }
  };
const setDelivered=()=>{
  fetch(`http://localhost:8080/orders/${id}`,{
    method:'PUT',
    headers: {
      "Authorization": `Bearer ${Cookies.get('jwt')}`,
    },
  })
  
};
  return (
    <div className='bg-teal-700'>

      <section className="text-gray-600 body-font mb-0">
        <div className="container px-5 py-0 mx-auto">

          <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">

            <div className="relative flex-grow w-full">
              <label for="email" className="leading-7 text-sm text-white">Search order by id</label>
              <input value={id} onChange={(e)=>setId(e.target.value)} className="w-full bg-gray-100 bg-opacity-100 rounded border border-gray-300 focus:border-indigo-500  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <button onClick={() => findOrderDetail(id)} className="text-white bg-teal-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-400 rounded text-lg">Search</button>
          </div>
        </div>
      </section>
      <section class="text-white body-font mt-0">
        <div class="container px-5 py-10 mx-auto">
          <div class="flex flex-col text-center w-full mb-0">
            <h1 class="sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-100">Orders</h1>
          </div>
          <div class="lg:w-2/3 w-full mx-auto overflow-auto">
            <table class="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Id</th>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Date</th>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Status</th>
                  <th class="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
                </tr>
              </thead>
              <tbody>

                {
                  Orders?.map((order) => {

                    return (

                      <tr>
                        <td class="border-b-2 border-gray-200 px-4 py-3">{order.id}</td>
                        <td class="border-b-2 border-gray-200 px-4 py-3">{order.date}</td>
                        <td class="border-b-2 border-gray-200 px-4 py-3 ">{order.orderStatus}</td>
                        <td class="w-10 text-center border-b-2 border-gray-200">
                          <Button value={order.id} onClick={(e)=>findOrderDetail(e.target.value)} className='but'>Find</Button>
                        </td>
                        <td class="w-10 text-center border-b-2 border-gray-200">
                          <Button onClick={()=>setDelivered()} className='but'>Delivered</Button>
                        </td>
                      </tr>

                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>

  )
}

export default Orders