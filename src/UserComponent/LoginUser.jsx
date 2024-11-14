import React, { useEffect, useState } from 'react';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox, MDBValidation, MDBValidationItem } from 'mdb-react-ui-kit';
import "../UserComponent/LoginUser.css"
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const Navigate = useNavigate();
  const LoginModel = {
    Email: "",
    Password: ""
  }

  const [formValues, SetFormValues] = useState(LoginModel);
  const [isSubmit, SetIsSubmit] = useState(false);
  const [formErrors, SetFormErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    SetIsSubmit(true);
    try {
      // const response = await axios.get('https://localhost:8085/User/login', {
      //   params: { formValues }
      // });
      // if (response.data.isSuccess) {
      if (true) {
        alert('Login successful');
      } else {
        setErrorMessage('Invalid credentials');
      }
    } catch (error) {
      setErrorMessage('Error while logging in');
    }
  }

  useEffect(() => {
    console.log(formValues);
    console.log(formErrors);
  }, [formValues])
  return (

    <MDBContainer fluid className="p-3 my-5 h-custom">
      <MDBRow>
        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
        </MDBCol>

        <MDBCol col='4' md='6'>
          <div className="d-flex flex-row align-items-center justify-content-center">
            <p className="lead fw-normal mb-0 me-3">LOGIN</p>
            <br /><br /><br /><br />
          </div>
          <MDBValidation>
            <MDBValidationItem feedback='Please provide your username.' invalid>
              <MDBInput wrapperClass='mb-4'
                label='Email address / Username'
                size="lg"
                name='Email'
                value={formValues.Email}
                onChange={handleChange}
                required
              />
            </MDBValidationItem>
            <MDBValidationItem feedback='Please provide your password.' invalid>
              <MDBInput wrapperClass='mb-4'
                label='Password'
                size="lg"
                type='password'
                name='Password'
                value={formValues.Password}
                onChange={handleChange}
                required
              />
            </MDBValidationItem>
            <div className="d-flex justify-content-between mb-4">
              <div className="custom-checkbox">
                <input
                  type="checkbox"
                  id="rememberMeCheckbox"
                  className="custom-checkbox-input"
                  name="rememberMe"
                />
                <label htmlFor="rememberMeCheckbox" className="custom-checkbox-label">
                  Remember me
                </label>
              </div>
              <a className='ResetPassword' href='' onClick={() => Navigate('/Val')}>Reset Password</a>
              <a href='' onClick={() => Navigate('/ForgotPassword')}>Forgot password?</a>
            </div>

            <div className='text-center text-md-start mt-4 pt-2'>
              <MDBBtn className="mb-0 px-5" size='lg' type='submit' onSubmit={handleSubmit}>Login</MDBBtn>
              <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href='' onClick={() => Navigate('/Signup')} className="link-danger">Register</a></p>
            </div>
          </MDBValidation>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default Login;