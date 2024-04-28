import { useEffect, useState } from "react";
import { BACKEND_BASE_PATH } from "../constants/Navigation";
import express, { Express } from "express";
//import cors from "cors";
//import { CityInfo } from "@full-stack/types";

type Props<T> = {
    name?: string;
    description?: string
    x?: number
    y?: number
};

// get city info from our backend -> this should also go to navigation.tsx
// const getCityInfo = () =>
//     fetch(`${BACKEND_BASE_PATH}/duchy-info`).then((res) => res.json());

// display city info page
const CityInfo= <T extends { name: string, description: string, x: number
    y: number}>({name, description, x, y}: Props<T>) => {

    const [editName, setEditName] = useState(name || '');
    const [editDescription, setEditDescription] = useState(description || '');

    // useEffect to load the duchy info 
    useEffect(() => {
        //const getDuchyInfo = async (req, res) => {
        const getCityInfo = async () => {
            try {
                const res = await app.get('${BACKEND_BASE_PATH}/duchy-info');
                const data = res.data;
                setEditName(data.name);
                setEditDescription(data.description);
            } catch (error) {
                console.error("ERROR: Cannot Get Your Duchy Information:", error);
            }
        };
        getCityInfo();
    }, []);

    // Where the edit and delete codes should go
    // const editInfo () => {
    //     console.log("Editing Your City's Info:", editName, editDescription);
    //     // code an API to the backend
    //     //app.put("/duchy-info", (req: Request, res: Response) => {
              
    // };

    // const deleteInfo() => {
    //     console.log("Deleting Your City:", name);
    //     //app.delete
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

export default CityInfo;
