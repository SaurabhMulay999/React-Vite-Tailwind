import Title from "./Title";
const bounce=['A','N','I','M','A','L','  ','A','D','O','P','T','I','O','N'];
const Bounce=()=>{
    return(
    <>
    <div className="bg-white text-xs text-right">
        <button className="bg-gray-100 hover:text-2xl">Enable Dark Mode</button>
    </div>
    <div className="text-center">
    {bounce.map((ch)=><Title key={ch+Math.random(0.1)} h11={ch}/>)}
    </div>
    
    <div className=" grid grid-cols-3  border justify-right ">
        <button key="bt1" className="bg-blue-300 hover:animate-pulse "  label="About Us">About Us</button>
        <button  key="bt2" className="bg-blue-200 hover:animate-pulse "  label="Contact Us">Contact Us</button>
        <button key="bt3" className="bg-blue-100 hover:animate-pulse "  label="Help">Help</button>    
    </div>
    </>
    );

}

export default Bounce;