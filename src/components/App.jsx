import React, { useState,lazy,Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Footer,{Footer1} from "./Footer";
import NavBar from "./NavBar";
import BackGround from "./BackGround";
//import Contact from "./Contact";
import ShowAnimal from "./ShowAnimal";
//import About from "./About";
import Error from "./Error";
import {createBrowserRouter,Outlet,RouterProvider} from "react-router-dom";

//configaration of router



const About =lazy(()=>import('./About'));

const Contact =lazy(()=>import('./Contact'));

const Heading=()=>{
    const [darkMode, SetDarkMode]=useState('white');
    function childParentComm(e){
        SetDarkMode(e);
        //e is not an event
    }

    return(
        <>  
        <div className="">
            <div className=" grid m-1">
                <button className="bg-gray hover:text-xl" onClick={()=>SetDarkMode('white')} >Reset Dark Mode</button>
                <div className="bg-grey-200 p-1 border border-dotted" style={{background:darkMode,backgroundColor:darkMode}}>   
                    <NavBar childParentComm={childParentComm}/>
                </div>
            <div className=" border  bg-blue-200" style={{background:darkMode}}>
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
                element:
                <Suspense>
                <About/>  
                </Suspense> 
            },
            {
                path:"/contact",
                element: <Suspense>
                <Contact/>  
                </Suspense> 
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