import { useEffect, useState } from "react";
// import express, { Express, Request, Response } from "express";
// import cors from "cors";
//import App from "../App";
import { BACKEND_BASE_PATH } from "../constants/Navigation";
import { City, CityWithId } from "../../../lib/types/index.ts";
import { useParams } from "react-router-dom";

// display city info page
const CityInfo= () => {

    // const cityId = "1";
    const params = useParams();
    const cityId = params.cityId;

    // const [editName, setEditName] = useState(name || '');
    // const [editDescription, setEditDescription] = useState(description || '');
    // const [editX, setX] = useState('');
    // const [editY, setY] = useState('');
    const [info, setInfo] = useState({ name: '', description: '', x: '', y: '' });

    useEffect(() => {
        fetch(`${BACKEND_BASE_PATH}${cityId}`).then((res) => {
            return res.json();
        }).then((data) => {
            setInfo(data);
        }).catch(() => {
            alert("Something went wrong fetching city info!");
        });
    }, []);
    
    // // Where the edit and delete codes should go
    // const editInfo = () => {
    //     // console.log("Editing Your City's Info:", editName, editDescription);
    //     fetch(`${BACKEND_BASE_PATH}/${cityId}`, {
    //         method: "PUT",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify({ name: editName, description: editDescription, x: editX, y: editY}),
    //     }).then(res => {
    //         if (res.ok) {
    //             console.log("City Information has been Updated!");
    //         } else {
    //             console.log("Failure to Update City's Information");
    //         }
    //     }).catch(error => {
    //         console.error("Uh Oh! Error Found While Updating City:", error);
    //     });
              
    // };

    const deleteInfo = () => {
        fetch(`${BACKEND_BASE_PATH}${cityId}`, {
            method: "DELETE",
        }).then((res) => {
            window.location.href = `/`;
        }).catch(() => {
            alert("Something went wrong fetching city info!");
        });
    };

    // const controlInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     //update the state with setSearch (function provided by React's useState)
    //     setEditName(event.target.value);
    //     setEditDescription(event.target.value);
    //     setX(event.target.value);
    //     setY(event.target.value);
    // };

    return (
        <div>
            <h1>{info.name}</h1>
            <p>{info.description}</p>
            <button onClick={deleteInfo}>Delete</button>
        </div>
        // <form onSubmit={editInfo}>
        //     <h1>{name}</h1>
        //     <p>{description}</p>
        //     <input type='text' value={editName} 
        //         onChange={controlInputChange}
        //         placeholder='New Name'
        //     />
        //     <input value={editDescription} 
        //         onChange={controlInputChange}
        //         placeholder='New Description'
        //     />
        //     <input value={editX} 
        //         onChange={controlInputChange}
        //         placeholder='New X'
        //     />
        //     <input value={editY} 
        //         onChange={controlInputChange}
        //         placeholder='New Y'
        //     />
        //     <button onClick={editInfo}>Save</button>
        //     <button onClick={deleteInfo}>Delete</button>
        // </form>
    );
};

export default CityInfo;
