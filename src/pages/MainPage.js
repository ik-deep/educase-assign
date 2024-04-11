import React from 'react'
import Button from '../components/Button';
import { Link } from 'react-router-dom'



const MainPage = () => {
  return (
    <div className='main'>
      <div className='main-div'>
      <h1>Welcome to PopX</h1>
        <p className='desc'>
            Lorem ipsum dolor sit amet,<br></br>
            consectecur adipiscing elit,
        </p>
        <Link to="/SignupForm"> <Button text={"Create Account"} bgColor={"#6c25ff"} textColor={"#fff"}/></Link>
        <Link to="/LoginForm"><Button text={"Already Registered? Login"}  bgColor={"#cebafb"} textColor={"#000"}/></Link>
  
      </div>
         </div>
  )
}

export default MainPage;