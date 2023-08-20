
import React, { useEffect, useState } from 'react';
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


const Update = () => {



    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [homeNo, setHomeNo] = useState('')
    const [lane, setLane] = useState('')
    const [town, setTown] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [phoneNum1, setPhoneNum1] = useState('');
    const [phoneNum2, setPhoneNum2] = useState('');

    useEffect(() => {
        fetchCustomer()
    }, []);
    const fetchCustomer = () => {
        const headers = { 'Authorization': `Bearer ${Cookies.get('jwt')}`, 'Content-type': 'application/json'};
        fetch(`http://localhost:8080/customer/detail/${Cookies.get('user')}`, { headers })
            .then((response) => response.json())
            .then((json) => setVariables(json));

    }
    const setVariables = (json) => {
        setFirstName(json.firstname);
        setLastName(json.lastname)
        setEmail(json.email)
        setHomeNo(json.homeNumber)
        setLane(json.lane)
        setTown(json.town)
        setPostalCode(json.postalCode)
        setPhoneNum1(json.phone1)
        setPhoneNum2(json.phone2)
    }

    const updateCustomer = async () => {
        if((firstname!==''&&lastname!==''&&email!==''
        &&homeNo!==''&&lane!==''&&town!==''&&postalCode!==''&&phoneNum1!==''&&phoneNum2!=='')){
            fetch(`http://localhost:8080/customer/update/${Cookies.get('user')}`, {
            method: 'PUT',
            body: JSON.stringify({
                firstname:firstname,
                lastname:lastname,
                email:email,
                homeNumber:homeNo,
                lane:lane,
                town:town,
                postalCode:postalCode,
                phone1:phoneNum1,
                phone2:phoneNum2,
                
            }),
            headers: {
                'Authorization': `Bearer ${Cookies.get('jwt')}`,'Content-type': 'application/json',
            },
          })
            .then((response) => response.json())
            .then((json) =>console.log(json));
        }else{
            alert("Please Fill All Text Fields")
        }
    }
    return (
        <div>
            <MDBContainer fluid className='h-custom'>
                <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                    <MDBCol col='12' className='m-5'>
                        <MDBCard className='card-registration card-registration-2' style={{ borderRadius: '15px' }}>
                            <MDBCardBody className='p-0'>
                                <MDBRow>
                                    <MDBCol md='6' className='p-5 bg-teal-500'>
                                        <h3 className="fw-normal mb-5" style={{ color: 'black' }}></h3>
                                        <MDBInput value={firstname} onChange={(e) => { setFirstName(e.target.value) }} wrapperClass='mb-4' label='First Name' size='lg' id='form1' type='text' />
                                        <MDBInput value={lastname} onChange={(e) => { setLastName(e.target.value) }} wrapperClass='mb-4' label='Last Name' size='lg' id='form3' type='text' />
                                        <MDBRow>
                                          
                                            <MDBInput value={email} onChange={(e) => { setEmail(e.target.value) }} wrapperClass='mb-4'  label='Email' size='lg' id='form' type='text' />
                                        </MDBRow>
                                        <MDBRow>
                                            <MDBCol md='5'>
                                                <MDBInput value={phoneNum1} onChange={(e) => { setPhoneNum1(e.target.value) }} wrapperClass='mb-4'  label='Phone Number 1' size='lg' id='form10' type='text' />
                                            </MDBCol>
                                            <MDBCol md='5'>
                                                <MDBInput value={phoneNum2} onChange={(e) => { setPhoneNum2(e.target.value) }} wrapperClass='mb-4' label='Phone Number 2' size='lg' id='form11' type='text' />
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBRow>
                                        </MDBRow>
                                    </MDBCol>
                                    <MDBCol md='6' className='bg-teal-700 p-5'>
                                        <h3 className="fw-normal mb-5 text-white" style={{ color: '#4835d4' }}></h3>
                                        <MDBCol md='5'>
                                            <MDBInput value={homeNo} onChange={(e => { setHomeNo(e.target.value) })} wrapperClass='mb-4' labelClass='text-white' label='Home No' size='lg' type='text' />
                                        </MDBCol>
                                        <MDBInput value={lane} onChange={(e) => { setLane(e.target.value) }} wrapperClass='mb-4' labelClass='text-white' label='Lane' size='lg' id='form5' type='text' />
                                        <MDBInput value={town} onChange={(e) => { setTown(e.target.value) }} wrapperClass='mb-4' labelClass='text-white' label='Town' size='lg' id='form7' type='text' />
                                        <MDBRow>
                                            <MDBCol md='5'>
                                                <MDBInput value={postalCode} onChange={(e) => { setPostalCode(e.target.value) }} wrapperClass='mb-4' labelClass='text-white' label='Postal Code' size='lg' id='form6' type='text' />
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBBtn onClick={() => updateCustomer()} color='light' size='lg'>Update</MDBBtn>
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

export default Update