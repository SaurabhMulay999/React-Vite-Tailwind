import { useEffect,useState } from "react"

const AnimalList=(props)=>{
    const [pets, setPets]=useState([]);
    async function getFetchData(){
        const data=await fetch(`https://pets-v2.dev-apis.com/pets?animal=${props.animal}&location=${props.location}&breed=${props.breed}`);
        const JSON=await data.json();
        setPets(JSON.pets);

    }

    useEffect(()=>{
           getFetchData();
    },[props.animal,props.location,props.breed]);


    return(
        <>
        <h1>{(props.breed,props.animal)}</h1>
        <h1>Animas</h1>
        {pets.map((val)=><h1>val.animal</h1>)}
        </>
    )
}


export default AnimalList;