import React, { useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
}

    from 'mdb-react-ui-kit';
function Registrationform() {
    const[firstname,setFirstName]=useState('');
    const[lastname,setLastName]=useState('');
    const[userName,setUserName]=useState('');
    const[password,setPassword]=useState('');
    const[confirmPassWord,setConfirmPassword]=useState('');
    const[email,setEmail]=useState('');
    const[homeNo,setHomeNo]=useState('')
    const[lane,setLane]=useState('')
    const[town,setTown]=useState('');
    const[postalCode,setPostalCode]=useState('');
    const[phoneNum1,setPhoneNum1]=useState('');
    const[phoneNum2,setPhoneNum2]=useState('');
    const[isCheked,setIsCheked]=useState(false);

    const addUserDetails=()=>{
        if((firstname!==''&&lastname!==''&& userName!==''&&password!==''&&confirmPassWord!==''&&email!==''
            &&homeNo!==''&&lane!==''&&town!==''&&postalCode!==''&&phoneNum1!==''&&phoneNum2!==''&&isCheked)){
            
      if(password===confirmPassWord){
        fetch('http://localhost:8080/customer/add-customer', {
            method: 'POST',
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
                username:userName,
                password:password
            }),
            headers: {
              'Content-type': 'application/json',
            },
          })
            .then((response) => response.json())
            .then((json) =>{
                if(json){
                    alert("Succesfuly added")
                }else{
                    alert("Username Alrady Exist !");
                    setUserName('');
                }
            });
      }
      else {
        alert("Password don,t match");
        setConfirmPassword('');
        setPassword('');
      }
    }else{
        alert("Please fill all fields")
    }
    
    }

    return (
        <MDBContainer fluid className='h-custom'>

            <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                <MDBCol col='12' className='m-5'>

                    <MDBCard className='card-registration card-registration-2' style={{ borderRadius: '15px' }}>

                        <MDBCardBody className='p-0'>

                            <MDBRow>

                                <MDBCol md='6' className='p-5 bg-teal-500'>

                                    <h3 className="fw-normal mb-5" style={{ color: 'black' }}>General Infomation</h3>



                                    <MDBInput value={firstname} onChange={(e)=>{setFirstName(e.target.value)}} wrapperClass='mb-4' label='First Name' size='lg' id='form1' type='text' />
                                    <MDBInput value={lastname} onChange={(e)=>{setLastName(e.target.value)}} wrapperClass='mb-4' label='Last Name' size='lg' id='form3' type='text' />

                                    <MDBRow>

                                        <MDBCol md='6'>
                                            <MDBInput value={userName} onChange={(e)=>{setUserName(e.target.value)}} wrapperClass='mb-4' label='User Name' size='lg' id='form15' type='text' />
                                        </MDBCol>

                                    </MDBRow>
                                    <MDBRow>

                                        <MDBCol md='6'>
                                            <MDBInput value={password} onChange={(e)=>{setPassword(e.target.value)}} wrapperClass='mb-4' label='Password' size='lg' id='form4' type='password' />
                                        </MDBCol>
                                        
                                        <MDBCol md='6'>
                                            <MDBInput value={confirmPassWord} onChange={(e)=>setConfirmPassword(e.target.value)} wrapperClass='mb-4' label='Confirm Password' size='lg' id='form2' type='password' />
                                        </MDBCol>

                                    </MDBRow>

                                </MDBCol>


                                <MDBCol md='6' className='bg-teal-700 p-5'>

                                    <h3 className="fw-normal mb-5 text-white" style={{ color: '#4835d4' }}>Contact Details</h3>
                                    <MDBInput value={email} onChange={(e)=>{setEmail(e.target.value)}} wrapperClass='mb-4' labelClass='text-white' label='Email' size='lg' id='form' type='text' />
                                    <MDBCol md='5'>
                                            <MDBInput value={homeNo} onChange={(e=>{setHomeNo(e.target.value)})} wrapperClass='mb-4' labelClass='text-white' label='Home No' size='lg'  type='text' />
                                        </MDBCol>
                                    <MDBInput value={lane} onChange={(e)=>{setLane(e.target.value)}} wrapperClass='mb-4' labelClass='text-white' label='Lane' size='lg' id='form5' type='text' />
                                    <MDBInput value={town} onChange={(e)=>{setTown(e.target.value)}} wrapperClass='mb-4' labelClass='text-white' label='Town' size='lg' id='form7' type='text' />
                                    <MDBRow>

                                        <MDBCol md='5'>
                                            <MDBInput value={postalCode} onChange={(e)=>{setPostalCode(e.target.value)}} wrapperClass='mb-4' labelClass='text-white' label='Postal Code' size='lg' id='form6' type='text' />
                                        </MDBCol>

                                    

                                    </MDBRow>

                                   

                                    <MDBRow>

                                        <MDBCol md='5'>
                                            <MDBInput value={phoneNum1} onChange={(e)=>{setPhoneNum1(e.target.value)}} wrapperClass='mb-4' labelClass='text-white' label='Phone Number 1' size='lg' id='form10' type='text' />
                                        </MDBCol>

                                        <MDBCol md='5'>
                                            <MDBInput value={phoneNum2} onChange={(e)=>{setPhoneNum2(e.target.value)}} wrapperClass='mb-4' labelClass='text-white' label='Phone Number 2' size='lg' id='form11' type='text' />
                                        </MDBCol>
                                    </MDBRow>

                                    
                                    <MDBCheckbox value={isCheked} onChange={(e)=>{setIsCheked(e.target.value)}} name='flexCheck' id='flexCheckDefault' labelClass='text-white mb-4' label='I do accept the Terms and Conditions of your site.' />
                                    <MDBBtn onClick={()=>addUserDetails()} color='light' size='lg'>Register</MDBBtn>

                                </MDBCol>
                            </MDBRow>

                        </MDBCardBody>

                    </MDBCard>

                </MDBCol>
            </MDBRow>

        </MDBContainer>
    );
}

export default Registrationform;