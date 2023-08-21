import { PhotoIcon} from '@heroicons/react/24/solid'
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

const Updelitem = () => {
    const [sQuantity, setSqty] = useState('');
    const [mQuantity, setMqty] = useState('');
    const [lQuantity, setLqty] = useState('');
    const [xlQuantity, setxLqty] = useState('');
    const [homeNo, setHomeNo] = useState('')
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
                                                <MDBInput value={sQuantity} onChange={(e) => { setSqty(e.target.value) }} wrapperClass='mb-4 mt-5' label='Small Quantity' size='lg' id='form15' type='text' />
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
                                                <MDBInput value={homeNo} onChange={(e => { setHomeNo(e.target.value) })} wrapperClass='mb-4' label='Unit Price(Rs.)' size='lg' type='text' />
                                            </MDBCol>
                                            <MDBCol>
                                                <div className="flex ml-12 mb-10 items-center">
                                                    <span className="mr-3">Category</span>
                                                    <div className="relative">
                                                        <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
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
                                            <MDBInput value={xlQuantity} onChange={(e) => { setxLqty(e.target.value) }} wrapperClass='mb-0' label='Title' size='lg' id='form15' type='text' />
                                        </MDBCol>
                                    </MDBCol>
                                    <MDBCol md='6' className='bg-teal-700 p-5'>
                                        <h3 className="fw-normal mb-3 text-white" style={{ color: '#4835d4' }}></h3>
                                        <div className="p-2 w-full">
                                            <div className="relative">
                                                <textarea id="message" name="message" className="w-full bg-white bg-opacity-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                                <label for="message" className="leading-7 text-l text-white">Description</label>
                                            </div>
                                        </div>
                                        <div className="mt-2 mb-4 flex justify-center rounded-lg bg-white border border-dashed border-gray-900/25 px-6 py-10">
                                            <div className="text-center">
                                                <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                                    <label
                                                        htmlFor="file-upload"
                                                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500" >
                                                        <span>Upload a file</span>
                                                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                                    </label>
                                                    <p className="pl-1">or drag and drop</p>
                                                </div>
                                                <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                            </div>
                                        </div>
                                        <MDBBtn color='light' size='lg'>Delete</MDBBtn>
                                        <MDBBtn color='light'className='ml-5' size='lg'>Update</MDBBtn>
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

export default Updelitem