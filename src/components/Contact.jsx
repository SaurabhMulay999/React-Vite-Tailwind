import { useState } from "react";

const Contact=()=>{
    const[name, setName]=useState('');
    const[Email, setEmail]=useState('');
    return(
        
        <div className="bg-blue-300 w-96 h-full">
        <h1 className="text-2xl font-serif">Contact Us</h1>
        <form>
            <div className="grid border border-gray-400 p-14 w-96 ">
            <label htmlFor="input1">
                Name: <input className="m-2" value={name} id="input1" onChange={(e)=>setName(e.target.value)} type="text"></input>
            </label>
            <label htmlFor="input2">
                Email:  <input className="m-2" value={Email} id="input2" onChange={(e)=>setEmail(e.target.value)} type="text"></input>
            </label>
            </div>
            <button className="m-2 border  p-2">Submit</button>

        </form>
        </div>
    )
}

export default Contact;