import AnimalList from "./AnimalsList";
import { useState,useEffect } from "react";
import useBreedList from "./useBreedList";
import './ul.css';



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
 },[animal,breed]);
 
 function FilterData(animal,breed){ 

    const data=pets.filter((pets)=>pets.breed==breed);
    console.log(data);
    
 }




    return(
        <div classNameName="p-4 flex box-border">
            <div classNameName="border text-center p-4 m-5 ">
                <form  className="p-2 m-1" onSubmit={FilterData(animal,breed)} classNameName="grid border-spacing-x-9"> 
                    <label htmlFor="Location">
                        <input  onChange={(e)=>setLocation(e.target.value)} type="text" classNameName="bg-blue-100 w-96 text-black" value={Location} id="Loccation" placeholder="Location"/>
                    </label>
                    <div classNameName="m-2  space-x-5 p-1">
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
                    <button onClick={()=>console.log('clicked')} classNameName="bg-blue-300 text-xs m-3 p-2 hover:text-rose-900 text-black">Submit</button>
                </form>
            </div>

            {
                pets.map((pet)=>{
                    return(
                        <li className="p-8">
                        
                        <div className="p-1 m-1 ">
                            <a href="#" className="flex flex-wrap flex-col-2 bg-white border border-blue-200 rounded-lg shadow  w-52 hover:bg-blue-100 dark:border-gray-700 dark:bg-blue-300 h-16 dark:hover:bg-blue-200">
                                <img className="object-cover w-18 rounded-t-lg h-16 p-2 md:rounded-none md:rounded-l-lg" src={pet.images[0]} alt="IMAGE"/>
                                <div className="flex flex-col justify-between p-1 leading-normal">
                                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">{pet.name}</h5>
                                    <p className="mb-3 font-normal text-black ">{pet.breed}</p>
                                </div>
                            </a>
                        </div>
                        
                        </li>

                        


                    )
                })
            }

        </div>
    )
}

export default Search;