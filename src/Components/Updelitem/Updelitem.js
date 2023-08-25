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
import Cookies from 'js-cookie';
const Updelitem = () => {
    const [id, setId] = useState('');
    const [category, setCategory] = useState('');
    const [sQuantity, setSqty] = useState('');
    const [mQuantity, setMqty] = useState('');
    const [lQuantity, setLqty] = useState('');
    const [xlQuantity, setxLqty] = useState('');
    const [unitPrice, setunitPrice] = useState('');
    const [title, settitle] = useState('');
    const [img, setImg] = useState('');

    const searchItem = async () => {
        const response = await fetch(`http://localhost:8080/item/getItem/${id}`, {
            headers: {
                "Authorization": `Bearer ${Cookies.get('jwt')}`,
            },
        })
        const data = await response.json()
        setValues(data);

    };
    const setValues = (data) => {
        setCategory(data.category);
        setSqty(data.sQuantity);
        setMqty(data.mQuantity);
        setLqty(data.lQuantity);
        setxLqty(data.xLQuantity);
        setunitPrice(data.unitPrice);
        settitle(data.tittle);
        setImg(data.imgUrl);
        console.log(data.imgUrl)

    }
    const updateItem = () => {
        fetch(`http://localhost:8080/item/update/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                category: category,
                xLQuantity: xlQuantity,
                lQuantity: lQuantity,
                mQuantity: mQuantity,
                sQuantity: sQuantity,
                unitPrice: unitPrice,
                tittle: title
            }),
            headers: {
                "Authorization": `Bearer ${Cookies.get('jwt')}`, 'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    };
    const deleteItem = async () => {
        const response = await fetch(`http://localhost:8080/item/delete/${id}`, {
            method: 'DELETE',
            headers: {
                "Authorization": `Bearer ${Cookies.get('jwt')}`,
            },
        })
        const data = await response.json()
        if (data === true) {
            alert("Successfuly Deleted");
            setCategory('');
            setSqty('');
            setMqty('');
            setLqty('');
            setxLqty('');
            setunitPrice('');
            settitle('');
            setImg(null);
        } else if (data === false) {
            alert("Delete unsuccesfull")
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
                                            <h3 className="fw-normal mb-0" style={{ color: 'black' }}>Update or Delete Your Items</h3>
                                            <MDBRow>
                                                <MDBCol md='6'>
                                                    <MDBInput value={id} onChange={(e) => { setId(e.target.value) }} wrapperClass='mb-4 mt-5' label='Enter Item ID' size='lg' id='form15' type='text' />
                                                    <MDBBtn color='light' size='lg' className='mr-2 mt-0' onClick={() => searchItem()}>Search</MDBBtn>
                                                </MDBCol>

                                                <MDBCol md='6'>

                                                </MDBCol>
                                            </MDBRow>
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
                                            <MDBInput value={title} onChange={(e) => { settitle(e.target.value) }} wrapperClass='mb-0' label='Title' size='lg' id='form15' type='text' />
                                        </MDBCol>
                                        <MDBBtn color='light' size='lg' className='mr-2' onClick={() => updateItem()}>Update</MDBBtn>
                                        <MDBBtn color='light' size='lg' onClick={() => deleteItem()}>Delete</MDBBtn>
                                    </MDBCol>
                                    <MDBCol md='6' className='bg-none'>
                                        <img src={`http://localhost:8080/item/getimage/${img}`}></img>
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