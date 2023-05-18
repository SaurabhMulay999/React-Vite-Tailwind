import { useState } from "react";
const Contact=()=>{
    const HelpUs="HelpUstoSavetheAnimals,YourContributionReallyMatters.";
    const contactUs="YouCanContactUsByfillingAboveFormandAndYouCanBuyUsaCoffee";
    let conatactus=[...contactUs];
    const help=[...HelpUs];
    const[name, setName]=useState('');
    const[Email, setEmail]=useState('');
    return(
        <div className="bg-blue-100 w-96 h-full">
        <h1 className="text-xl font-semibold">Contact Us</h1>
        <form>
            <div className=" inline-flex hover:bg-blue-50  p-1 m-1">            
            <div className="p-2 m-2 w-96 ">
            <div className="w-96 m-1 p-10 justify-between">
            <label htmlFor="input1">
                Name: <input className="m-2 " value={name} id="input1" onChange={(e)=>setName(e.target.value)} type="text"></input>
            </label>
            <label htmlFor="input2">
                Email:  <input className="m-2 " value={Email} id="input2" onChange={(e)=>setEmail(e.target.value)} type="text"></input>
            </label>
            </div>
            </div>
            <div className="flex w-96 h-f6 hover:bg-gray-50 flex-wrap">
                
                {
                    help.map((ele)=>{
                        return (
                        <h1 className="inline-flex m-1 p-1 text-2xl font-semi-bold text-center font-mono ">{ele}</h1>
                        )
                    })
                   
                }
            </div>
            <div className="flex w-96 hover:bg-gray-100 flex-wrap">
                
                {
                    conatactus.map((ele)=>{
                        return (
                        <h1 className="inline-flex p-1 m-1 text-2xl font-semi-bold text-center font-mono ">{ele}</h1>
                        )
                    })
                   
                }
            </div>
          
            <div>
            </div>
            
            </div>
            <div className="bg-blue-300 border-black">
            <button className=" rounded-md pt-2 p-2 m-1 bg-blue-500 text-white border">Submit</button>
            </div>

        </form>
        </div>
    )
}

export default Contact;