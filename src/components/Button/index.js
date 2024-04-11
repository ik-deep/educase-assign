import React from "react";
import './styles.css';

const Button = ({text,bgColor, textColor}) => {
    return(
        <div>
        <button className="custom-btn" style={{color:`${textColor}`,    backgroundColor: `${bgColor}`}}>{text}</button>
    </div>
    )
   
}


export default Button;