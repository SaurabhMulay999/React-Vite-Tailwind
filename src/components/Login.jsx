import { useState } from "react"
import { Provider } from "react-redux";
import { Link } from "react-router-dom";

const user={};
const Login=()=>{
    const str="ANIMAL ADOPTION";
    const arr=[...str];
    const [userName,setUserName]=useState('');
    const[password, setPassword]=useState('');
    
    function saveUserInfo(userName,password){
        
        let obj={
            Name:userName,
            Pass:password,
        }
        user[userName]=obj;
        console.log(user);


    }
    return(
        <>
        <div className="bg-gray-300 font-extralight  border-gray-800">
           {
            arr.map((ele)=>(
                <div id={Math.random(0.2)} className="m-[18px] hover:animate-bounce p-4 inline-flex">
                <h1 className="text-4xl">{ele}</h1>
                </div>
            ))
           } 
        </div>
        <div className="bg-gray-100">
            <Link to="/blogpost"> 
                <div className="flex p-4">
                <h1 className="text-xl flex p-12 text-gray-700 hover:border font-thin"> You can Write your Blogpost here...Check it out </h1>
                <button className="bg-gray-200 h-[50px] p-2 m-[32px]">Blogpost</button>
                </div>
            
            </Link>
        </div>
        <div className="bg-gray-100  ">
        <div className=" bg-gray-500 m-4  ">

            <form onSubmit={(e)=>(e.preventDefault(), saveUserInfo(userName, password))}>
                <div className="p-4 grid grid-cols-1 m-4 grid-wrap ">
                <h2 className="text-slate-100 font-semibold">UserName:</h2>  <input  className="m-2 p-2 w-96 bg-gray-50" onChange={(e)=>setUserName(e.target.value)} value={userName}/>
                <h2 className="text-slate-100 font-semibold">Password:</h2> <input className="m-2 p-2 w-96 bg-gray-50" onChange={(e)=>setPassword(e.target.value)} value={password}/>
                

                
                </div>
                <Link to="/Heading">
                <button className="p-2 m-2 bg-green-100 ">Submit</button>
                </Link>

            </form>
         
        </div>
        </div>

        <div className="bg-gray-100 p-12">
                <h1 className="p-12 text-2xl text-justify font-light bg-gray-200">Thanks !!!! Your Contribution Matters! </h1>
                <h1 className="m-4 text-xs text-slate-500">- Page Designed by Saurabh Mulay</h1>
            </div>
           
        </>
    )
}

export default Login;