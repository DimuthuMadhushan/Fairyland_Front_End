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
    const [category, setCategory] = useState('');
    const [file, setFileList] = useState(null);
    const [img,setImage]=useState(null);
    const additem = () => {
        let formData=new FormData();
        formData.append("category",category);
        formData.append("xLQuantity",parseInt(xlQuantity));
        formData.append("lQuantity",parseInt(lQuantity));
        formData.append("mQuantity",parseInt(mQuantity));
        formData.append("sQuantity",parseInt(sQuantity));
        formData.append("unitPrice",parseFloat(unitPrice));
        formData.append("tittle",title);
        formData.append("image",file);
        console.log(category)
        if (checkValueIsNumberOrNot(sQuantity) && checkValueIsNumberOrNot(mQuantity) && checkValueIsNumberOrNot(lQuantity) && checkValueIsNumberOrNot(xlQuantity) && checkValueIsNumberOrNot(unitPrice) && title !== null) {
            fetch('http://localhost:8080/item/addimage', {
                method: 'POST',
                headers: {
                    "Authorization": `Bearer ${Cookies.get('jwt')}`
                },
                body:formData
                
            })
                .then((response) => response.json())
                .then((json) => validate(json))
                .catch((error)=>alert(error));
        } else {
            alert("Please Fill All Lines in Correct Format");
        }
    }

    const validate=(json)=>{
        if(json===true){
            alert("Successfully Added");
    setSqty('');
    setMqty('');
    setLqty('');
    setxLqty('');
    setunitPrice('');
    setTitle('');
    setCategory('');
    setFileList(null);
    setImage(null);

        }
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
                                                            <option>MEN</option>
                                                            <option>WOMEN</option>
                                                            <option>KIDS</option>
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
                                         <Input type="file" onChange={(event) => { setImage(URL.createObjectURL(event.target.files[0])); setFileList(event.target.files[0]); }} />
                                        <MDBBtn color='light' size='lg' onClick={() => additem()}>Add</MDBBtn>
                                    </MDBCol>
                                    <MDBCol md='6' className='bg-none'>
                                      <img src={img}></img>
                                       
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