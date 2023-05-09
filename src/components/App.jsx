import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Footer,{Footer1} from "./Footer";
import NavBar from "./NavBar";
import BackGround from "./BackGround";
import Contact from "./Contact";
import ShowAnimal from "./ShowAnimal";
import About from "./About";
import Error from "./Error";
import {createBrowserRouter,Outlet,RouterProvider} from "react-router-dom";

//configaration of router


const Heading=()=>{
    const [darkMode, SetDarkMode]=useState('gray');
    return(
        <>  
        <div className="">
            <div className=" grid m-1">
                <div className="bg-grey-200 p-1 border border-dotted">   
                    <NavBar/>
                </div>
            <div className=" border  bg-blue-100">
                <Outlet/>  
            </div>
            
        </div>
        <div className="border p-1 bg-blue-100">
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
        errorElement:<Error/>,
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
            },
            {
                path:"/animal/:name",
                element:<ShowAnimal/>,
            }
        ]
    },
  
])


const r=document.getElementById('root');

const root=ReactDOM.createRoot(r);

root.render(<RouterProvider router={AppRouter}/>);