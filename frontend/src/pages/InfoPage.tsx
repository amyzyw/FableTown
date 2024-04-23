import { useEffect, useState } from "react";
//import { DuchyInfo } from "@full-stack/types";
import { BACKEND_BASE_PATH } from "../constants/Navigation";


type Props<T> = {
    name?: string;
    description?: string
    x?: number
    y?: number
};

// get duchy info from our backend -> this should also go to navigation.tsx
// const getDuchyInfo = () =>
//     fetch(`${BACKEND_BASE_PATH}/duchy-info`).then((res) => res.json());

// display duchy info page
const DuchyInfo= <T extends { name: string, description: string, x: number
    y: number}>({
        name, 
        description, 
        x, 
        y}: Props<T>) => {

    const [editName, setEditName] = useState(name || '');
    const [editDescription, setEditDescription] = useState(description || '');

    // useEffect to load the duchy info 
    useEffect(() => {
       //get
        // async await try catch error handling
        // should I code the backend
       // try catch error??
       // await fetch duchy from backend
       // await response.json 
       //fetch(`${BACKEND_BASE_PATH}/duchy-info`).then((res) => res.json());
    }, []);

    // Where the edit and delete codes should go
    // const editInfo () => {
    //     console.log("Editing Your Duchy's Info:", editName, editDescription);
    //     // code an API to the backend
    //     //put
    // };

    // const deleteInfo() => {
    //     console.log("Deleting Your Duchy:", name);
    //     //delete
    // };

    // const controlInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     //update the state with setSearch (function provided by React's useState)
    //     setEditName(event.target.value);
    //     setEditDescription(event.target.value);  
    // };

    return (
        <div>
            <h1>{name}</h1>
            <p>{description}</p>
            {/* {<input type='text' value={editName} 
                onChange={controlInputChange}
                placeholder='New Name'
            />
            <input value={editDescription} 
                onChange={controlInputChange}
                placeholder='New Description'
            />
            <button>Edit</button>
            <button onClick={editInfo}>Edit</button>

            <button>Delete</button>
            <button onClick={deleteInfo}>Delete</button>} */}

        </div>
    );
};

export default DuchyInfo;
