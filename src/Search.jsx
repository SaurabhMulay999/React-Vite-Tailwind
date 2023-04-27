import AnimalList from "./AnimalsList";
import { useState,useEffect } from "react";
import useBreedList from "./useBreedList";

const Search=()=>{

    const [Location,setLocation]=useState('');

    const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
    //const Breed= ['German','French','Indian','Latine','Chartreux','American Longhair','Domestic Shorthair'];


    const [breed,setBreed]=useState('');
    const [animal, setAnimal]=useState('');

    const[breedLists, status]=useBreedList(animal); 
    console.log('breeds',breedLists);

    const [pets, setPets]=useState([]);
    async function getFetchData(){
        const data=await fetch(`https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${Location}&breed=${breed}`);
        const JSON=await data.json();
        setPets(JSON.pets);
        console.log(JSON);

    }

    useEffect(()=>{
        getFetchData();
 },[]);
 
 function FilterData(animal,breed){ 

    const data=pets.filter((pets)=>pets.breed==breed);
    console.log(data);
    
 }




    return(
        <div className="p-4 flex box-border">
            <div className="border text-center p-4 m-5 ">
                <form onSubmit={FilterData(animal,breed)} className="grid border-spacing-x-9"> 
                    <label htmlFor="Location">
                        <input  onChange={(e)=>setLocation(e.target.value)} type="text" className="bg-blue-100 w-96 text-black" value={Location} id="Loccation" placeholder="Location"/>
                    </label>
                    <div className="m-2  space-x-5 p-1">
                    <label htmlFor="Animals">
                        
                        Animals :  
                        <select id={animal} onChange={(e)=>{
                            e.preventDefault();
                            setAnimal(e.target.value);
                            setBreed(brd);
                            
                        }
                        } value={animal}>
            
                               {
                                ANIMALS.map((AN)=>{

                                    return(
                                    
                                    <option key={AN} value={AN}>
                                        {AN}
                                    </option>
                                    )
                            })
                            }
                        </select>  
                        
                    </label>

                    <label htmlFor="Breed">
                        Breed : 
                        <select onChange={(e)=>{
                            e.preventDefault();
                            setBreed(e.target.value)}} id={breed} value={breed}>
                            {
                                
                                breedLists.map((brd)=>{
                                    return(
                                        <option key={brd} value={brd}>
                                            {brd}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </label>
                    </div>
                    <button onClick={()=>console.log('clicked')} className="bg-blue-300 text-xs m-3 p-2 hover:text-rose-900 text-black">Submit</button>
                </form>
            </div>

            {
                pets.map((pet)=>{
                    return(
                        <div className="border flex-auto border-spacing-1 hover:skew-y-6 bg-blue-100 text-align justify-center flex-row flex">
                         <div className="w-54 grid">   
                        <h3>Name: {pet.name}</h3>
                        <h5>Breed :{pet.breed}</h5>
                        <h5>City : {pet.city}</h5>
                        <img className="w-24 h-24" src={pet.images[0]}></img>
                        <p>State: {pet.state}</p>
                        </div>
                        </div>

                    )
                })
            }

        </div>
    )
}

export default Search;