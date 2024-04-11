import React from 'react';
import { MDBInput } from 'mdb-react-ui-kit';
import Button from '../Button';
import "./styles.css"
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    
    <div className='login-form main'>
    <h1>Signup to your PopX account</h1>
    <p className='desc'>
            Lorem ipsum dolor sit amet,
            consectecur adipiscing elit,
        </p>
   <MDBInput label="Email Address" id="form1" type="text" />
   <MDBInput label="Password" id="form1" type="password" />
   <Link to="/ProfilePage"><Button text={"Login"} bgColor={"#6c25ff"} textColor={"#fff"}/></Link>
    </div>
    
  )
}

export default Login