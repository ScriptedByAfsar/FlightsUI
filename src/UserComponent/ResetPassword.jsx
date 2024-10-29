import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import React from "react";

function ResetPassword() {
    return (
        <div>
            <MDBContainer fluid className="p-3 my-5 d-flex flex-column w-50">
                <MDBInput wrapperClass='mb-4' label='Username' id='formControlLg' type='text' size="lg" />
                <MDBInput wrapperClass='mb-4' label='Old Password' id='formControlLg' type='password' size="lg" />
                <MDBInput wrapperClass='mb-4' label='New Password' id='formControlLg' type='password' size="lg" />
                <MDBBtn>Submit</MDBBtn>
            </MDBContainer>
        </div>
    );

}

export default ResetPassword;