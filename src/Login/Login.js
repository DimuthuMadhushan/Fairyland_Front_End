import React, { useState } from 'react';
import './Login.css'
import Logo from '../Components/images/fairylandlogo.png'
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
  from 'mdb-react-ui-kit';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Login() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = () => {
    try {
      fetch('http://localhost:8080/authenticate', {
        method: 'POST',
        body: JSON.stringify({
          username: username,
          password: password
        }),
        headers: {
          'Content-type': 'application/json',
        },

      })
        .then((response) => response.json())
        .then((json) => setCookies(json));

    } catch (error) {
      Swal.fire("Invalid username or passworD");
      setUserName('');
      setPassword('');
    }
  }
  const setCookies = (json) => {
    console.log(json.role);
    Cookies.set('user', username, { expires: 7 });
    Cookies.set('id', json.id, { expires: 7 });
    Cookies.set('jwt', json.jwt, { expires: 7 });
    Cookies.set('role', json.role, { expires: 7 });
    if (json.role === "ROLE_USER") {
      Cookies.set('seti', "Settings", { expires: 7 })
    } else {
      Cookies.set('seti', "", { expires: 7 })
    }

    if (json.role === "ROLE_ADMIN") {
      Cookies.set('dash', "DashBoard", { expires: 7 })
      navigate('/')
    } else {
      Cookies.set('dash', "")
    }
    navigate('/')
  }
  return (
    <div className='log'>
      <MDBContainer className="my-5">

        <MDBCard>
          <MDBRow className='g-0'>

            <MDBCol md='6'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp' alt="login form" className='rounded-start w-100' />
            </MDBCol>

            <MDBCol md='6'>
              <MDBCardBody className='d-flex flex-column'>

                <div className='d-flex flex-row mt-2'>
                  <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }} />
                  <img src={Logo} alt='logo' />
                </div>

                <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h5>

                <MDBInput value={username} onChange={(e) => { setUserName(e.target.value) }} wrapperClass='mb-4' label='Username' id='formControlLg' type='email' size="lg" />
                <MDBInput value={password} onChange={(e) => { setPassword(e.target.value) }} wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" />

                <MDBBtn className="mb-4 px-5 but" color='dark' size='lg' onClick={() => handleLogin()}>Login</MDBBtn>
                <a className="small  forgot" href="#!">Forgot password?</a>
                <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Don't have an account? <a href='/registraion' style={{ fontSize: '1.5rem' }}>Register here</a></p>

                <div className='d-flex flex-row justify-content-start'>
                  <a href="#!" className="small text-muted me-1">Terms of use.</a>
                  <a href="#!" className="small text-muted">Privacy policy</a>
                </div>

              </MDBCardBody>
            </MDBCol>

          </MDBRow>
        </MDBCard>

      </MDBContainer>
    </div>

  );
}

export default Login;