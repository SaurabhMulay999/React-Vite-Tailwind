import { useState } from "react";
import { setConstantValue } from "typescript";
import { OurCommunity } from "../shared/constants/constant"; 

const JOB="Hiring React Developer!!!!!"
const PaperSections=(props)=>{

    function clickhandler(){
        props.setIsTrue(false);
        props.label('');
    }
    function clickhandler1(){
        props.setIsTrue(true);
        props.label(props.title);
    }

    return(
        <div className="flex m-24  flex-wrap border-gray-400">
            <div>
                <h3 className="text-2xl text-black font-mono">{props.title}</h3>
                <h4>{props.para}</h4>
                {
                    props.isTrue?<button onClick={()=>clickhandler()} className="border-gray-100  cursor-pointer p-1 m-1 bg-green-300">Hide</button>:
                            <button onClick={()=>clickhandler1()} className="border-gray-100 cursor-pointer p-1 m-1 bg-green-300">Show</button>
                }
                {props.isTrue && <h4>{props.description}</h4>} 
            </div>
        </div>
    )
}
const Paper=()=>{

    const [isTrue, setIsTrue]=useState(false);
    const [label,setLable]=useState('Career');
    return(
        
        <div className="bg-blue-100">
           <h1 className="font-mono p-2 m-2 bg-blue-200 text-2xl hover:text-purple-900 font-bold"> Know More About us</h1>
           <div className="flex flex-wrap justify-center p-2 m-2 W-96 text-center border">
            <PaperSections title={"About Our Developers"} para={""} description={"abc"} isTrue={label==='About Our Developers'} label={(e)=>setLable(e)} setIsTrue={(val)=>setIsTrue(val)} />
            <PaperSections title={"Career"} para={""} description={JOB} isTrue={label==='Career'} setIsTrue={(val)=>setIsTrue(val)} label={(e)=>{setLable(e)}} />
            <PaperSections title={"Our Community"} para={""} description={OurCommunity} isTrue={label==='Our Community'} setIsTrue={(val)=>setIsTrue(val)} label={(e)=>setLable(e)} />
           </div>
        </div>
    )
}

export default Paper;