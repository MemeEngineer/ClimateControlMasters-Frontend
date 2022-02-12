import React from "react";
import ccmlogo from "./ccmlogo.jpeg";
import {AiOutlineMail} from "react-icons/ai";
import { IconContext } from "react-icons";
import {BsFillTelephoneFill} from "react-icons/bs";
import {BiTime} from "react-icons/bi";

function Header() {

  return (
      <IconContext.Provider value={{ color: "black" , size: "5em"}}>
    <div>
      <img src={ccmlogo} alt= "ccmlogo" style={{height: "20%", width: "20%"}}/>
    <AiOutlineMail/> yorkhvacpro@gmail.com
    <BsFillTelephoneFill/> (803) 317-5809
    
    <BiTime/> M - Sun: 8 am - 7 pm  Emergency Service Available 
  
    </div>
    </IconContext.Provider>
  );
}

export default Header;
