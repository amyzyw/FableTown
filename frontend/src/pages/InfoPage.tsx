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
const DuchyInfo= <T extends { name: string, description: string}>({name, description, x, y}: Props<T>) => {
    // useEffect to load the duchy info 
    useEffect(() => {

    // Where the edit and delete codes should go
        // const editInfo () => {}
        // UPDATE

        // const deleteInfo() => {}
        // DELETE
    
    }, []);

    return (
        <div>
            <h1>{name}</h1>
            <p>{description}</p>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    );
};

export default DuchyInfo;
