import React, { useEffect, useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "../UserComponent/SignupUser.css"
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBValidation, MDBValidationItem
}
  from 'mdb-react-ui-kit';
import axios from 'axios';

function Signup() {
  const Signup = {
    FirstName: "",
    LastName: "",
    Email: "",
    Password: ""
  }
  const [formValues, SetFormValues] = useState(Signup);
  const [isSubmit, SetIsSubmit] = useState(false);
  const [formErrors, SetFormErrors] = useState({});
  const [confirmPassword, setConfirmPassword] = useState("");
  const [exceptionMessage, setExceptionMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetFormValues({ ...formValues, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    SetIsSubmit(true);
    try {
      // const response = await axios.post('URL', formValues);
      // if(response.data.isSuccess){
      if (true) {
        alert('Login Successful');
      }
      else {
        alert('Invalid Credentials');
      }
    }
    catch (ex) {
      alert('Exception while logging in.');
      setExceptionMessage(ex);
    }
  }
  const handleErrors = (e) => {
    SetFormErrors(validate(formValues, confirmPassword));
  }
  const validate = (values, confpass) => {
    const errors = {};
    let confpassFlag = true;
    if (values.FirstName !== "" && values.LastName !== "" && values.Email !== "" && values.Password !== "" && values.Password.length <= 4) {
      errors.Password = "Password length must be more than 4.";
      confpassFlag = false;
    }
    if (confpass !== "" && confpass !== values.Password && confpassFlag) {
      errors.ConfirmPassword = "Passwords doesnot match";
    }
    return errors;
  }

  useEffect(() => {
    console.log(formValues);
    console.log(formErrors);
    console.log(confirmPassword);
    console.log(isSubmit);
  }, [formValues, formErrors, validate, confirmPassword, isSubmit])

  return (
    <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{ color: 'hsl(218, 81%, 95%)' }}>
            Lowest fares<br />
            <span style={{ color: 'hsl(218, 81%, 75%)' }}>Gaurenteed</span>
          </h1>

          <p className='px-3' style={{ color: 'hsl(218, 81%, 85%)' }}>
            Welcome to our intelligent airlines search engine. We ensure the lowest fares for your flight journeys. Experience a mind-blowing User Interaction.
          </p>

        </MDBCol>

        <MDBCol md='6' className='position-relative'>

          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

          <MDBCard className='my-5 bg-glass'>
            <MDBCardBody className='p-5'>
              <MDBValidation>
                <MDBRow>
                  <MDBCol col='6'>
                    <MDBValidationItem feedback='Please provide your first name.' invalid>
                      <MDBInput wrapperClass='mb-4'
                        label='First name'
                        id='form1'
                        name='FirstName'
                        value={formValues.FirstName}
                        type='text'
                        onChange={handleChange}
                        required />
                    </MDBValidationItem>
                  </MDBCol>

                  <MDBCol col='6'>
                    <MDBValidationItem feedback='Please provide your last name.' invalid>
                      <MDBInput wrapperClass='mb-4'
                        label='Last name'
                        id='form2'
                        type='text'
                        name='LastName'
                        value={formValues.LastName}
                        onChange={handleChange}
                        required />
                    </MDBValidationItem>
                  </MDBCol>
                </MDBRow>
                <MDBValidationItem feedback='Please provide a valid email address' invalid>
                  <MDBInput wrapperClass='mb-4'
                    label='Email'
                    id='form3'
                    type='email'
                    name='Email'
                    value={formValues.Email}
                    onChange={handleChange}
                    required />
                </MDBValidationItem>
                <MDBValidationItem feedback='Please provide a password.' invalid>
                  <MDBInput wrapperClass='mb-4'
                    label='Password'
                    id='form4'
                    type='password'
                    name='Password'
                    value={formValues.Password}
                    onChange={handleChange}
                    required />
                </MDBValidationItem>
                <p className="passwordPara">{formErrors.Password}</p>
                <MDBValidationItem feedback='Please retype the password.' invalid>
                  <MDBInput wrapperClass='mb-4'
                    label='Confirm Password'
                    id='form5'
                    type='password'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required />
                </MDBValidationItem>
                <p className="passwordPara">{formErrors.ConfirmPassword}</p>
                <MDBBtn className='w-100 mb-4' size='md' onClick={(e) => {handleErrors(); handleSubmit(e);}}>sign up</MDBBtn>

              </MDBValidation>
            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Signup;