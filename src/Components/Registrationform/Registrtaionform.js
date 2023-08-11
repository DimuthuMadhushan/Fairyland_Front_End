import React from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBSelect,
    MDBInput,
    MDBCheckbox
}

    from 'mdb-react-ui-kit';
function Registrationform() {
    return (
        <MDBContainer fluid className='h-custom'>

            <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                <MDBCol col='12' className='m-5'>

                    <MDBCard className='card-registration card-registration-2' style={{ borderRadius: '15px' }}>

                        <MDBCardBody className='p-0'>

                            <MDBRow>

                                <MDBCol md='6' className='p-5 bg-teal-500'>

                                    <h3 className="fw-normal mb-5" style={{ color: 'black' }}>General Infomation</h3>



                                    <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='form1' type='text' />
                                    <MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='form3' type='text' />

                                    <MDBRow>

                                        <MDBCol md='6'>
                                            <MDBInput wrapperClass='mb-4' label='User Name' size='lg' id='form15' type='text' />
                                        </MDBCol>

                                    </MDBRow>
                                    <MDBRow>

                                        <MDBCol md='6'>
                                            <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form4' type='password' />
                                        </MDBCol>
                                        
                                        <MDBCol md='6'>
                                            <MDBInput wrapperClass='mb-4' label='Confirm Password' size='lg' id='form2' type='password' />
                                        </MDBCol>

                                    </MDBRow>

                                </MDBCol>


                                <MDBCol md='6' className='bg-teal-700 p-5'>

                                    <h3 className="fw-normal mb-5 text-white" style={{ color: '#4835d4' }}>Contact Details</h3>
                                    <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Email' size='lg' id='form' type='text' />
                                    <MDBCol md='5'>
                                            <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Home No' size='lg'  type='text' />
                                        </MDBCol>
                                    <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Lane' size='lg' id='form5' type='text' />
                                    <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Town' size='lg' id='form7' type='text' />
                                    <MDBRow>

                                        <MDBCol md='5'>
                                            <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Postal Code' size='lg' id='form6' type='text' />
                                        </MDBCol>

                                    

                                    </MDBRow>

                                   

                                    <MDBRow>

                                        <MDBCol md='5'>
                                            <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Phone Number 1' size='lg' id='form10' type='text' />
                                        </MDBCol>

                                        <MDBCol md='5'>
                                            <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Phone Number 2' size='lg' id='form11' type='text' />
                                        </MDBCol>
                                    </MDBRow>

                                    
                                    <MDBCheckbox name='flexCheck' id='flexCheckDefault' labelClass='text-white mb-4' label='I do accept the Terms and Conditions of your site.' />
                                    <MDBBtn color='light' size='lg'>Register</MDBBtn>

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