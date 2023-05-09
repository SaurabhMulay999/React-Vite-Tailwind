import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Footer,{Footer1} from "./Footer";
import NavBar from "./NavBar";
import BackGround from "./BackGround";
import Contact from "./Contact";
import About from "./About";
import {createBrowserRouter,Outlet,RouterProvider} from "react-router-dom";

//configaration of router


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
                <Outlet/>  
            </div>
        </div>
        <div className="m-5 border bg-blue-100">
            <Footer1/>
            </div>
        </div>
        </>
    )
};
const AppRouter=createBrowserRouter([
    {
        path:"/",
        element:<Heading/>,
        children:
        [
            {
                path:"/about",
                element:<About/>   
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/",
                element:<BackGround/>
            }
        ]
        
    }
])


const r=document.getElementById('root');

const root=ReactDOM.createRoot(r);

root.render(<RouterProvider router={AppRouter}/>);