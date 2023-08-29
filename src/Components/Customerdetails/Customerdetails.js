
import { Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import './Custdetails.css'
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
}
    from 'mdb-react-ui-kit';

const Customerdetails = () => {
    const { state } = useLocation()
 
    return (
        <div>
            <div className='form'>
                <MDBContainer fluid className='h-custom'>
                    <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                        <MDBCol col='12' className='m-5'>
                            <MDBCard className='card-registration card-registration-2' style={{ borderRadius: '15px' }}>
                                <MDBCardBody className='p-0'>
                                    <MDBRow>
                                        <MDBCol md='6' className='p-5 bg-teal-500'>
                                            <h3 className="fw-normal mb-5" style={{ color: 'black' }}>General Infomation</h3>
                                            <MDBInput value={state.json.firstname} wrapperClass='mb-4' label='First Name' size='lg' id='form1' type='text' />
                                            <MDBInput value={state.json.lastname} wrapperClass='mb-4' label='Last Name' size='lg' id='form3' type='text' />
                                            <MDBRow>
                                                <MDBCol md='6'>
                                                    <MDBInput value={state.json.username} wrapperClass='mb-4' label='User Name' size='lg' id='form15' type='text' />
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow>
                                                <MDBInput value={state.json.email} wrapperClass='mb-4' labelClass='text-white' label='Email' size='lg' id='form' type='text' />
                                            </MDBRow>
                                        </MDBCol>
                                        <MDBCol md='6' className='bg-teal-700 p-5'>
                                            <MDBCol md='5'>
                                                <MDBInput value={state.json.homeNumber} wrapperClass='mb-4' labelClass='text-white' label='Home No' size='lg' type='text' />
                                            </MDBCol>
                                            <MDBInput value={state.json.lane} wrapperClass='mb-4' labelClass='text-white' label='Lane' size='lg' id='form5' type='text' />
                                            <MDBInput value={state.json.town} wrapperClass='mb-4' labelClass='text-white' label='Town' size='lg' id='form7' type='text' />
                                            <MDBRow>
                                                <MDBCol md='5'>
                                                    <MDBInput value={state.json.postalCode} wrapperClass='mb-4' labelClass='text-white' label='Postal Code' size='lg' id='form6' type='text' />
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow>
                                                <MDBCol md='5'>
                                                    <MDBInput value={state.json.phone1} wrapperClass='mb-4' labelClass='text-white' label='Phone Number 1' size='lg' id='form10' type='text' />
                                                </MDBCol>
                                                <MDBCol md='5'>
                                                    <MDBInput value={state.json.phone2} wrapperClass='mb-4' labelClass='text-white' label='Phone Number 2' size='lg' id='form11' type='text' />
                                                </MDBCol>
                                            </MDBRow>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
            <div className='bg-teal-700'>
                <section class="text-white body-font mt-0">
                    <div class="container px-5 py-10 mx-auto">
                        <div class="flex flex-col text-center w-full mb-0">
                            <h1 class="sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-100">Customer Orders</h1>
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
                                        state.json.orderList?.map((orders) => {
                                            return (
                                                <tr>
                                                    <td class="border-b-2 border-gray-200 px-4 py-3">{orders.id}</td>
                                                    <td class="border-b-2 border-gray-200 px-4 py-3">{orders.date}</td>
                                                    <td class="border-b-2 border-gray-200 px-4 py-3">{orders.orderStatus}</td>
                                                    <td class="w-10 text-center border-b-2 border-gray-200">
                                                        <Button className='but'>Details</Button>
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
        </div>
    )
}

export default Customerdetails