import { useState } from "react"
const user={};
const Login=()=>{
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
        <div>
            <form onSubmit={(e)=>(e.preventDefault(), saveUserInfo(userName, password))}>
                UserName:  <input  onChange={(e)=>setUserName(e.target.value)} value={userName}/>
                Password:  <input onChange={(e)=>setPassword(e.target.value)} value={password}/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Login;