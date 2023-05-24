import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {removeAnimalFromBucket} from '../utils/BucketSlice';
const Bucket=()=>{
    const BucketValues=useSelector((store)=>store.Bucket.AnimalCount);
    const dispatch=useDispatch();

    function removeFromBucket(value){
        console.log(BucketValues[value]);
        dispatch(removeAnimalFromBucket(BucketValues[value]));
    }
    const[Index,setIndex]=useState(-1);
    
    return(
        <div className="bg-green-100 h-96 w-full ">
            <h1 className="text-3xl font-mono font-semibold"> Bucket </h1>
            <div className="flex">
                {BucketValues.length==0? <h1 className="text-3xl p-12 m-12 hover:animate-pulse font-mono justify-between">Bucket is Empty!!</h1>: 
                
                    BucketValues.map((item,index)=>{
                        return(
                            <>
                            <div className="border bg-gray-100" key={Math.random(0.2+'abs')}>
                            <div className="w-24 h-36 m-2">
                                <h1 className="text-xl font-mono">{item.name.slice(0,7)}</h1>
                                <img className="w-24 h-24" src={item.images[0]}></img>
                                <input className="w-4" value={index}></input>
                            </div>
                            <button className="m-2 p-1 bg-green-200" onClick={(e)=>(console.log(e.target.value),removeFromBucket(index))}>Remove</button>
                            </div>
                            </>

                        )
                    })
                }
            </div>

        </div>
    )
}
export default Bucket;