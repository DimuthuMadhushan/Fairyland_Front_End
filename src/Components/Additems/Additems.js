
import { PhotoIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
}

    from 'mdb-react-ui-kit';
import { Input } from '@mui/material';
import Cookies from 'js-cookie';
const Additems = () => {
    const [sQuantity, setSqty] = useState('');
    const [mQuantity, setMqty] = useState('');
    const [lQuantity, setLqty] = useState('');
    const [xlQuantity, setxLqty] = useState('');
    const [unitPrice, setunitPrice] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('MEN');
    const [image, setSelectedImage] = useState(null);
    const additem = () => {
        console.log(category)
        if (checkValueIsNumberOrNot(sQuantity) && checkValueIsNumberOrNot(mQuantity) && checkValueIsNumberOrNot(lQuantity) && checkValueIsNumberOrNot(xlQuantity) && checkValueIsNumberOrNot(unitPrice) && title !== null && description !== null && image !== null) {
            fetch('http://localhost:8080/item/post', {
                method: 'POST',
                body: JSON.stringify({
                    category: category,
                    xLQuantity: xlQuantity,
                    lQuantity: lQuantity,
                    mQuantity: mQuantity,
                    sQuantity:sQuantity,
                    description:description,
                    unitPrice:parseFloat(unitPrice),
                    tittle:title,
                }),
                headers: {
                    "Authorization": `Bearer ${Cookies.get('jwt')}`,'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => sendImage(json));
        } else {
            alert("Please Fill All Lines in Correct Format");
        }
    }
    const sendImage=(json)=>{
        fetch(`http://localhost:8080/item/addimage?id=${json.id}&image=${image}`, {
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${Cookies.get('jwt')}`,'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => sendImage(json));
    }
    const checkValueIsNumberOrNot = (number) => {
        if (isNaN(number)) {
            return false;
        } else {
            return true;
        }
    };
    return (
        <div>
            <MDBContainer fluid className='h-custom'>
                <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                    <MDBCol col='12' className='m-5'>
                        <MDBCard className='card-registration card-registration-2' style={{ borderRadius: '15px' }}>
                            <MDBCardBody className='p-0'>
                                <MDBRow>
                                    <MDBCol md='6' className='p-5 bg-teal-500'>
                                        <MDBRow>
                                            <h3 className="fw-normal mb-0" style={{ color: 'black' }}>Add Your Items</h3>
                                            <MDBCol md='6'>
                                                <MDBInput value={sQuantity} onChange={(e) => { setSqty(e.target.value) }} wrapperClass='mb-4 mt-5' label='Small Quantity' size='lg' type='text' />
                                            </MDBCol>
                                            <MDBCol md='6'>
                                                <MDBInput value={mQuantity} onChange={(e) => { setMqty(e.target.value) }} wrapperClass='mb-4 mt-5' label='Medium Quantity' size='lg' id='form15' type='text' />
                                            </MDBCol>
                                            <MDBCol md='6'>
                                                <MDBInput value={lQuantity} onChange={(e) => { setLqty(e.target.value) }} wrapperClass='mb-4' label='Large Quantity' size='lg' id='form15' type='text' />
                                            </MDBCol>
                                            <MDBCol md='6'>
                                                <MDBInput value={xlQuantity} onChange={(e) => { setxLqty(e.target.value) }} wrapperClass='mb-4' label='XLarge Quantity' size='lg' id='form15' type='text' />
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBRow>
                                            <MDBCol md='5'>
                                                <MDBInput value={unitPrice} onChange={(e => { setunitPrice(e.target.value) })} wrapperClass='mb-4' label='Unit Price(Rs.)' size='lg' type='text' />
                                            </MDBCol>
                                            <MDBCol>
                                                <div className="flex ml-12 mb-10 items-center">
                                                    <span className="mr-3">Category</span>
                                                    <div className="relative">
                                                        <select value={category} onChange={(e) => { setCategory(e.target.value) }} className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                                                            <option>Men</option>
                                                            <option>Women</option>
                                                            <option>Kids</option>
                                                        </select>
                                                        <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                                                                <path d="M6 9l6 6 6-6"></path>
                                                            </svg>
                                                        </span>
                                                    </div>
                                                </div>
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBCol md='6'>
                                            <MDBInput value={title} onChange={(e) => { setTitle(e.target.value) }} wrapperClass='mb-0' label='Title' size='lg' id='form15' type='text' />
                                        </MDBCol>
                                    </MDBCol>
                                    <MDBCol md='6' className='bg-teal-700 p-5'>
                                        <h3 className="fw-normal mb-3 text-white" style={{ color: '#4835d4' }}></h3>
                                        <div className="p-2 w-full">
                                            <div className="relative">
                                                <textarea value={description} onChange={(e) => { setDescription(e.target.value) }} id="message" name="message" className="w-full bg-white bg-opacity-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                                <label for="message" className="leading-7 text-l text-white">Description</label>
                                            </div>
                                        </div>
                                        <Input type="file" onChange={(event) => { console.log(event.target.files[0]); setSelectedImage(event.target.files[0]); }} />
                                        <MDBBtn color='light' size='lg' onClick={() => additem()}>Add</MDBBtn>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    )
}

export default Additems