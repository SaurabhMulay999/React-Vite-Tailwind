import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Footer from "./Footer";
import NavBar from "./NavBar";
import BackGround from "./BackGround";


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