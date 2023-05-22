import { useEffect,useState } from "react";
import { useParams} from "react-router-dom";
const cacheList={};
//import { useDispatch } from "react";
import { useDispatch } from "react-redux";
import {addAnimalToBucket} from '../utils/BucketSlice';
const  ShowAnimal=()=>{
    
    const[animal,setAnimal]=useState({});
    const param=useParams();
    console.log(param);

    useEffect(()=>{
        getAnimal();
    },[])
    

    async function getAnimal(){

        if(cacheList[param.name]){
            setAnimal(cacheList[param.name]);

        }
        else{
        const data=await fetch(`https://pets-v2.dev-apis.com/pets?name=${param.name}`);
        // console.log(`https://pets-v2.dev-apis.com/pets?name=${param.name}`)
        const json=await data.json();
        console.log('Animal',json);
        setAnimal(json.pets[0]);
        console.log(animal);
        cacheList[json.pets[0].name]=json.pets[0];
        console.log('');
        }
    }
   /// console.log("param",param);
   if(!animal){
    return null;
   }

   const dispatchAction=useDispatch();
   function addToPetBucket(animal){
    dispatchAction(addAnimalToBucket(animal));

   }

    return (
        <>
        <div className="w-full h-full">        
        <h1 className="text-xl font-light font-serif">Animal Information</h1>
        <div className="border flex">
            <div className="w-96 h-48">
                <h1 className="text-2xl hover:animate-pulse w-96 font-light">Hiii, I am {animal?.name} a {animal?.breed}</h1>    
                <img className="w-48 h-36 rounded-lg overflow-hidden m-2 p-1 relative"  src={animal?.images}/>
            </div>
            <div className="m-4 p-10">
                <h3 className="text-gray-600">{animal?.description}</h3>
            </div>  
        </div>
        <div className="flex m-2 p-2">
            <h1 className="text-gray-800">I am at , {animal?.city}, {animal?.state}</h1>

        </div>
        <button className="bg-green-100 p-2 m-2" onClick={()=>addToPetBucket(animal)}>Add to the Pet Bucket</button>
        </div>
        </>

    )
}
export default ShowAnimal;