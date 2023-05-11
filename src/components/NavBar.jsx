import Bounce from "./Bounce";
import { useState } from "react";
const NavBar=(props)=>{
    const[darkmode,setdarkmode]=useState('white');
    const childParent =(e)=>{
        setdarkmode(e);
        props.childParentComm(darkmode);

    }


    return (
        <div className="border  bg-blue-100 bg-left" >
            <Bounce  childParent={childParent}/>
        </div>
    )
}


export default NavBar;