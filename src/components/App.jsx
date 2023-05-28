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
import Paper from "./Paper";
import Login from './Login';
import store from '../utils/store';
import Bucket from "./Bucket";
import { Provider } from "react-redux";
import Blogpost from "./Blogpost";

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
        <Provider store={store}>
        <div className="">
            <div className=" grid shadow m-1">
                <button className="bg-gray w-36 text-right flex justify-right hover:text-xs" onClick={()=>SetDarkMode('white')} >Reset Dark Mode</button>
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
        
        </Provider>
       
        </>
    )
};
const AppRouter=createBrowserRouter(
[
    {
        path:"/",
        element:<Login/>
    },

    {
        path:"/Blogpost",
        element:<Provider store={store}><Blogpost/></Provider>
        
    },


    {
        path:"/Heading",
        element:<Heading/>,
        errorElement:<Error/>,
        children:
        [
            // {
            //     path:"/Heading",
            //     element:<Suspense><Heading/></Suspense>,
            // },
            {
                path:"/Heading/about",
                element:
                <Suspense>
                <About/>  
                </Suspense> 
            },
            {
                path:"/Heading/contact",
                element: <Suspense>
                <Contact/>  
                </Suspense> 
            },
            {
                path:"/Heading",
                element:<BackGround/>
            },
            {
                path:"/Heading/animal/:name",
                element:<ShowAnimal/>,
            },
            {
                path:"/Heading/login",
                element:<Login/>
            },{
                path:'/Heading/bucket',
                element:<Bucket/>
            },
            {
                path:'/Heading/paper',
                element:<Paper/>
            }
        ]
    },
  
])


const r=document.getElementById('root');

const root=ReactDOM.createRoot(r);

root.render(<RouterProvider router={AppRouter}/>);