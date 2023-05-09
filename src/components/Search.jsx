import AnimalList from "./AnimalsList";
import { useState,useEffect } from "react";
import useBreedList from "./useBreedList";
import './ul.css';
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
let CacheAnimals={};

const Search=()=>{
    const [Location,setLocation]=useState('');
    const ANIMALS = ["", "bird", "cat", "dog", "rabbit", "reptile"];
    //const Breed= ['German','French','Indian','Latine','Chartreux','American Longhair','Domestic Shorthair'];
    const [breed,setBreed]=useState('');
    const [animal, setAnimal]=useState('');
    const[filterPets, setFilterPets]=useState([]);
    const[breedLists, status]=useBreedList(animal); 
    console.log('breeds',breedLists);
    const [pets, setPets]=useState([]);
    function filterPetsData(filterPets,breed){
        let breed1=breed || "";
        const data=filterPets.filter((pets)=>{
            if(pets[0].breed.includes(breed1)){
                return pets[0];
            }
        });
        console.log("filterdata",data);
        setFilterPets(data);
    }
    async function getFetchData(){
        //console.log("cache",CacheAnimals[animal])
        if(CacheAnimals[animal]){
            setPets(CacheAnimals[animal]);
            setFilterPets(CacheAnimals[animal]);
        }
        else{
        const data=await fetch(`https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${Location}&breed=${breed}`);
        const JSON=await data.json();
        setPets(JSON.pets);
        setFilterPets(JSON.pets);
        CacheAnimals[animal]=JSON.pets;
        }
    }
    useEffect(()=>{
        getFetchData();
 },[animal,breed]);
 
 function FilterData(filterPets,breed){ 
   // const data=filterPets
    console.log(data);
}
    return(
        <div className="">
            <div className="border text-center">
                <form className="p-2 m-1"> 
                    <label htmlFor="Location">
                        <input  onChange={(e)=>setLocation(e.target.value)} type="text" className="bg-blue-100 w-96 text-black" value={Location} id="Loccation" placeholder="Location"/>
                    </label>
                    <div className="m-2  space-x-5 p-1">
                    <label htmlFor="Animals">
                        
                        Animals :  
                        <select id={animal} defaultValue="None" onChange={(e)=>{
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
                            console.log("breed changes filter it")
                            setBreed(e.target.value)
                            filterPetsData(filterPets,e.target.value);
                            }} id={breed} value={breed}>
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
                    <button className="bg-blue-300 text-xs m-3 p-2 hover:text-rose-900 text-black">Submit</button>
                </form>
            </div>

            {
                pets.length==0?(
                   <ShimmerUI animal={animal}/>
                )
                :
                filterPets.map((pet)=>{
                    return(
                        <Link to={'animal/'+ pet.name} key={Math.random(0.2)}>
                        <li key={Math.random(0.1)} >
                        <div className="p-1 m-1 ">
                            <a href="#" className="flex flex-wrap flex-col-2 bg-white border border-blue-200 rounded-lg shadow  w-52 hover:bg-blue-100 dark:border-gray-700 dark:bg-blue-300 h-16 dark:hover:bg-blue-200">
                                <img className="object-cover w-18 rounded-t-lg h-16 p-2 md:rounded-none md:rounded-l-lg" src={pet.images[0]} alt="IMAGE"/>
                                <div className="flex flex-col justify-between p-1 leading-normal">
                                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">{pet.name}</h5>
                                    <p className="mb-3 font-normal text-black ">{pet.breed.length>10?pet.breed.slice(0,10):pet.breed}</p>
                                </div>
                            </a>
                        </div>
                        </li>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default Search;