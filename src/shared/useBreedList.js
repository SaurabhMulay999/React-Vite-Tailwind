import {useState, useEffect} from "react";
//this is a custom hook
let cacheList={};
export default function useBreedList(animal){
    const [breed, setBreed]=useState([]);
    const [status , setStatus]=useState('LOADING');
    useEffect(()=>{
        //callback inside use effect cannot be async
        if(!animal){
            setStatus('CANT FIND');
            setBreed([]);
        }
        else if(cacheList[animal]){
            //breed=cacheList[animal];
            setBreed(cacheList[animal]);
        }
        else{
            getBreeds(animal);

        }
        async function getBreeds(animals){
            setBreed([]);
            const data=await fetch(`https://pets-v2.dev-apis.com/breeds?animal=${animal}`);
            const JSON=await data.json();
            cacheList[animal]=JSON.breeds || [];
            setBreed(cacheList[animal]);
            console.log(JSON);
        }
     },[animal])
     return [breed, status];
}
