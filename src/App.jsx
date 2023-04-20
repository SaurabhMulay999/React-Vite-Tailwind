import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Search from './Search';

const bounce=['A','N','I','M','A','L','  ','A','D','O','P','T','I','O','N'];
const Link="https://i.pinimg.com/originals/6c/3c/8a/6c3c8ab5b80f0a3ffde80176e03d00b2.jpg";

const BackGround=()=>{
    return(
        <div className="w-full h-screen bg-repeat-round" style={{backgroundImage:"url(https://i.pinimg.com/originals/6c/3c/8a/6c3c8ab5b80f0a3ffde80176e03d00b2.jpg)"}}>
            <Search/>
        </div>
    )
}

const Title=(props)=>{
    return(
        <>
        <h1 className=" inline-flex justify-center m-2 bg-white-700   hover:animate-bounce  text-7xl">{props.h11}</h1>    
        </>
    )
}
const Bounce=()=>{
    return(
    <>
    <div className="bg-white text-xs text-right">
        <button className="bg-gray-100 hover:text-2xl" onClick={()=>{
            setdark('black');
        }}>Enable Dark Mode</button>
    </div>
    <div className="text-center">
    {bounce.map((ch)=><Title h11={ch}/>)}
    </div>
    
    <div className=" grid grid-cols-3  border justify-right ">
        <button className="bg-blue-300 hover:animate-pulse "  label="About Us">About Us</button>
        <button className="bg-blue-200 hover:animate-pulse "  label="Contact Us">Contact Us</button>
        <button className="bg-blue-100 hover:animate-pulse "  label="Help">Help</button>    
    </div>
    </>
    );

}
const NavBar=()=>{
    return (
        <div className="border  bg-blue-100 bg-left" >
            <Bounce/>
        </div>
    )
}

const Footer=()=>{
    return(
    <>
    <h1 className="bg-blue-300 border text-2xl"></h1>
    <div>
        <div className="bg-blue-100 text-center p-2 m-2  ">
            <h4>Thanks for Your Contribution</h4>
            <br/>
            <h5 className="bg-blue-100">“Many animal rescue organizations hit with a hard-core, heartbreaking message. Their videos and stories can become difficult for average people to watch. By taking a more positive, heartwarming approach to animal rescue, I’ve been able to engage people and keep them engaged for years. Instead of selling the agony and misery – and sadly, there is no shortage of that – I start with the happy endings. I work backwards so the first message they get is joy and success due to their involvement. Opening the mind with humor and joy gets the rescue message in that much deeper.” — Elayne Boosler</h5>
        </div>
        <div>
            
        </div>
    </div>
    
    </>
    )
}
const Heading=()=>{
    return(
        <>  
        <div>
         <NavBar/>
         <BackGround/>   
         <Footer/>
        </div>
        </>
    )
};
const r=document.getElementById('root');
const root=ReactDOM.createRoot(r);
root.render(<Heading/>);