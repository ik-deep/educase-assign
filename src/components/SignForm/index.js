import React from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import Button from '../Button';
import "./styles.css"
import { Link } from 'react-router-dom';
const Signup = () => {
  return (
    <div className='form main'>
          <h1>Create your <br></br>PopX account</h1>
          <MDBInput label="Full Name" id="form1" type="text" />
          <MDBInput label="Phone number" id="form1" type="number" />
          <MDBInput label="Email address" id="form1" type="email" />
          <MDBInput label="Password" id="form1" type="password" />
   <MDBInput label="Company name" id="form1" type="text" />
   <Link to="/LoginForm"><Button text={"Create Account"} bgColor={"#6c25ff"} textColor={"#fff"}/></Link>

    </div>
  )
}

export default Signup