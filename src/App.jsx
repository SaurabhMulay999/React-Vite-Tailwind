import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Footer,{Footer1} from "./Footer";
import NavBar from "./NavBar";
import BackGround from "./BackGround";


const Heading=()=>{
    const [darkMode, SetDarkMode]=useState('gray');
    return(
        <>  
        <div className="">
        <div className="p-1 m-1">
         <div className="m-1 p-1 bg-grey-200 border border-dotted">   
         <NavBar/>
         </div>
         <div className="m-1 p-1 border bg-blue-400">
         <BackGround/>  
         </div>
        </div>
        <div className="m-5 border bg-blue-100">
            <Footer1/>
        </div>
        </div>
        </>
    )
};

const r=document.getElementById('root');
const root=ReactDOM.createRoot(r);
root.render(<Heading/>);