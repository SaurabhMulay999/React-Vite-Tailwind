import Bounce from "./Bounce";
import { useState } from "react";
import {useSelector} from "react-redux";
import { Link } from "react-router-dom";


const NavBar=(props)=>{

    const bucketSize=useSelector((store)=>store.Bucket.AnimalCount);

    const[darkmode,setdarkmode]=useState('white');
    const childParent =(e)=>{
        setdarkmode(e);
        props.childParentComm(darkmode);

    }


    return (
        <div className="border justify-end bg-blue-100 bg-left" >
            
            <Bounce  childParent={childParent}/>
            <div className="m-2 grid pl-[1250px]">
            <h2 className="pl-8 text-2xl hover:animate-pulse">{bucketSize.length}</h2>
            <Link to='/bucket'>
            <button><img className="w-12 h-12 " src="https://cdn-icons-png.flaticon.com/512/3081/3081840.png"></img></button>
            </Link>
            </div>
        </div>

    )
}


export default NavBar;