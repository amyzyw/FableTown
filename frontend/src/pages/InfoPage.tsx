import { useEffect, useState } from "react";
// import express, { Express, Request, Response } from "express";
// import cors from "cors";
//import App from "../App";
import { BACKEND_BASE_PATH } from "../constants/Navigation";
import { City, CityWithId } from "../../../lib/types/index.ts";
import { useParams } from "react-router-dom";


// display city info page
const CityInfo= () => {

    const params = useParams();
    const cityId = params.cityId;

    const [info, setInfo] = useState({ name: '', description: '', x: 0, y: 0 });

    const [showForm, setShowForm] = useState(false);

    const [editName, setEditName] = useState(info.name || '');
    const [editDescription, setEditDescription] = useState(info.description || '');
    const [editX, setX] = useState(info.x || 0);
    const [editY, setY] = useState(info.y || 0);

    useEffect(() => {
        fetch(`${BACKEND_BASE_PATH}${cityId}`).then((res) => {
            return res.json();
        }).then((data) => {
            setInfo(data);
        }).catch(() => {
            alert("Something went wrong fetching city info!");
        });
    }, []);

    // Populate edit variables with data
    useEffect(() => {
        setEditName(info.name);
        setEditDescription(info.description);
        setX(info.x);
        setY(info.y);
    }, [info]);

    const editInfo = () => {
        fetch(`${BACKEND_BASE_PATH}${cityId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: editName, description: editDescription, x: editX, y: editY}),
        }).then(res => {
            res.json();
        }).catch(error => {
            console.error("Uh Oh! Error Found While Updating City:", error);
        });
    };

    const deleteInfo = () => {
        fetch(`${BACKEND_BASE_PATH}${cityId}`, {
            method: "DELETE",
        }).then((res) => {
            window.location.href = `/`;
        }).catch(() => {
            alert("Something went wrong fetching city info!");
        });
    };

    const controlNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEditName(event.target.value);
    };

    const controlDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEditDescription(event.target.value);
    };

    const controlXChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setX(Number(event.target.value));
    };

    const controlYChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setY(Number(event.target.value));
    };

    const popForm = () => {
        setShowForm(!showForm);
    };

    return (
        <div>
            <div>
                <h1>{info.name}</h1>
                <p>{info.description}</p>
                <button onClick={popForm}>Edit</button>
                <button onClick={deleteInfo}>Delete</button>
            </div>

            {showForm && (
                <form onSubmit={editInfo}>
                    <input type='text' value={editName} 
                        onChange={controlNameChange}
                        placeholder= {info.name}
                    />
                    <input value={editDescription} 
                        onChange={controlDescriptionChange}
                        placeholder= {info.description}
                    />
                    <input value={editX} 
                        onChange={controlXChange}
                        placeholder= {info.x.toString()}
                    />
                    <input value={editY} 
                        onChange={controlYChange}
                        placeholder= {info.y.toString()}
                    />
                    <button onClick={editInfo}>Save</button>
                </form>
            )}
            
        </div>
    );
};

export default CityInfo;
