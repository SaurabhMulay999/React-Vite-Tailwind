import { useState } from "react";

const Search=()=>{
    const [Location,setLocation]=useState('');

    const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
    const Breed= ['German','French','Indian','Latine'];

    const [breed,setBreed]=useState(Breed);
    const [animal, setAnimal]=useState(ANIMALS);
    return(
        <div className="p-4 flex box-border">
            <div className="border text-center p-4 m-5 ">
                <form className="grid border-spacing-x-9"> 
                    <label htmlFor="Location">
                        <input  onChange={(e)=>setLocation(e.target.value)} type="text" className="bg-blue-100 w-96 text-black" value={Location} id="Loccation" placeholder="Location"/>
                    </label>
                    <div className="m-2  space-x-5 p-1">
                    <label htmlFor="Animals">
                        
                        Animals :  
                        <select  id={animal} value={animal}>
            
                               {
                                animal.map((AN)=>{

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
                        <select id={breed} value={breed}>
                            {
                                breed.map((brd)=>{
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

        </div>
    )
}

export default Search;