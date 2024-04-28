import { useEffect, useState } from "react";
import express, { Express, Request, Response } from "express";
import cors from "cors";
//import App from "../App";
import { BACKEND_BASE_PATH } from "../constants/Navigation";

type Props<T> = {
    name?: string;
    description?: strinUg
    x?: number
    y?: number
};

const app: Express = express();
const port = 8080;

app.use(cors());
app.use(express.json());

app.put('${BACKEND_BASE_PATH}/city-info/:id', (req: Request, res: Response) => {
    const { name, description } = req.body;
    console.log("Editing Your City's Information:", name, description);
    res.status(200).send({ message: "City Information is Updated!" });
    //res.status(404).json({ error: "Oh No! Failure to Update City's Info" });
});

app.delete('${BACKEND_BASE_PATH}/city-info/:id', (req: Request, res: Response) => {
    const cityDelete = req.params.name;
    console.log("Deleting Your City:", cityDelete);
    res.status(200).send({ message: "City Deleted Successfully" });
    //res.status(404).json({ error: "Oh No! Failure to Delete City" });
});

// display city info page
const CityInfo= <T extends { name: string, description: string, x: number
    y: number}>({name, description, x, y}: Props<T>) => {

    const [editName, setEditName] = useState(name || '');
    const [editDescription, setEditDescription] = useState(description || '');

    // Where the edit and delete codes should go
    const editInfo = () => {
        console.log("Editing Your City's Info:", editName, editDescription);
        fetch('${BACKEND_BASE_PATH}/city-info/${cityId}', {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: editName, description: editDescription }),
        }).then(res => {
            if (res.ok) {
                console.log("City Information has been Updated!");
            } else {
                console.log("Failure to Update City's Information");
            }
        }).catch(error => {
            console.error("Uh Oh! Error Found While Updating City:", error);
        });
              
    };

    const deleteInfo = () => {
        console.log("Deleting Your City:", name);
        fetch('${BACKEND_BASE_PATH}/city-info/${cityId}', {
            method: "DELETE",
        }).then(res => {
            if (res.ok) {
                console.log("Your City is Deleted");
            } else {
                console.log("Problem! Failed to Delete Your City");
            }
        }).catch(error => {
            console.error("Uh Oh! Error Found While Deleting City:", error);
        });
              
    };

    const controlInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        //update the state with setSearch (function provided by React's useState)
        setEditName(event.target.value);
        setEditDescription(event.target.value);
    };

    return (
        <div>
            <h1>{name}</h1>
            <p>{description}</p>
            <input type='text' value={editName} 
                onChange={controlInputChange}
                placeholder='New Name'
            />
            <input value={editDescription} 
                onChange={controlInputChange}
                placeholder='New Description'
            />
            <button onClick={editInfo}>Edit</button>
            <button onClick={deleteInfo}>Delete</button>
        </div>
    );
};

export default CityInfo;
