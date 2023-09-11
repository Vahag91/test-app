import { Component } from "react";
import "./header.css"
import {FaApple} from 'react-icons/fa6'


class Header extends Component{

    render(){
        return (
   <div className="header">
   <div>
    <div className="appleicon"> <FaApple/></div>
   <span> Lets get You set Up
    </span></div> 
    
    </div>
        )
    }
}





export default Header