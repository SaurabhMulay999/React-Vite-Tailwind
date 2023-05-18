import { useState } from "react";

const Internet=()=>{
    const [element, setElement]=useState('');
    let str="Opps!!!Internet Fucked UP";
    let arr=[...str];
    return(
        <div>
            {/* {(
                arr.map((ele)=>{
                  setInterval(() => {
                         setElement(ele);
                    
                        return <h1 className="inline-flex text-3xl text-blue-950 text-center p-12 m-1">{element}</h1>
                    },10);
                })
            )
            } */}
            <h1 className=" hover:animate-pulse pt-5 text-5xl text-black font-mono">Opps!!!Internet Fucked UP</h1>
        </div>
    )
}

export default Internet;