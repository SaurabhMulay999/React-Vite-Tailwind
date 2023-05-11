import {Link} from "react-router-dom";
import { useState } from "react";
import Title from "./Title";
const bounce=['A','N','I','M','A','L','  ','A','D','O','P','T','I','O','N'];
const Bounce=(props)=>{

    return(
    <>
    <div className="bg-white text-xs text-right">
        <button className="bg-gray-100 hover:text-2xl" onClick={()=>{props.childParent('black')}}>Enable Dark Mode</button>
        
    </div>
    <div className="text-center">
    {bounce.map((ch)=><Title key={ch+Math.random(0.1)} h11={ch}/>)}
    </div>
    
    <div className=" grid grid-cols-3  border justify-right ">
        
        <Link to="/" className="bg-slate-100 hover:animate-pulse" >
        <button key="bt3"  label="Help">Home</button>    
        </Link>
        
        <Link to="/about" className="bg-red-100 hover:animate-pulse " >
        <button key="bt1"  label="About Us">About Us</button>
        </Link>
        
        <Link to="/contact"  className="bg-blue-100 hover:animate-pulse ">
        <button  key="bt2"  label="Contact Us">Contact Us</button>
        </Link>
        
        
    
    </div>
    </>
    );

}

export default Bounce;