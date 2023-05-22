import { useDispatch, useSelector } from "react-redux";
import {removeAnimalFromBucket} from '../utils/BucketSlice';
const Bucket=()=>{
    const BucketValues=useSelector((store)=>store.Bucket.AnimalCount);
    const dispatch=useDispatch();

    function removeFromBucket(value){
        dispatch(removeAnimalFromBucket(value));
    }
    
    return(
        <div className="bg-green-100 w-full h-full">
            <h1 className="text-3xl font-mono font-semibold"> Bucket </h1>
            <div className="flex">
                {
                    BucketValues.map((item)=>{
                        return(
                            <>
                            <div className="border bg-gray-100" key={Math.random(0.2+'abs')}>
                            <div className="w-24 h-36 m-2">
                                <h1 className="text-xl font-mono">{item.name.slice(0,7)}</h1>
                                <img className="w-24 h-24" src={item.images[0]}></img>
                            </div>
                            <button className="m-2 p-1 bg-green-200" onClick={(e)=>removeFromBucket(e.target.value)}>Remove</button>
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