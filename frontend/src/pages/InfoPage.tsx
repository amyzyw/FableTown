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

    const [info, setInfo] = useState({ name: '', description: '', x: 0, y: 0, type: '', size: 0, color: ''});

    const [showForm, setShowForm] = useState(false);

    const [editName, setEditName] = useState(info.name || '');
    const [editDescription, setEditDescription] = useState(info.description || '');
    const [editX, setX] = useState(info.x || 0);
    const [editY, setY] = useState(info.y || 0);
    const [editType, setType] = useState(info.type || '');
    const [editSize, setSize] = useState(info.size || 0);
    const [editColor, setColor] = useState(info.color || '');

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
        setType(info.type);
        setSize(info.size)
        setColor(info.color);
    }, [info]);

    const editInfo = () => {
        fetch(`${BACKEND_BASE_PATH}${cityId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: editName, 
                                    description: editDescription, 
                                    x: editX, 
                                    y: editY,
                                    type: editType,
                                    size: editSize,
                                    color: editColor}),
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

    const controlTypeChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
        setType(event.target.value)
    };

    const controlSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSize(Number(event.target.value));
    };

    const controlColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setColor(event.target.value);
    };

    const popForm = () => {
        setShowForm(!showForm);
    };

    const backToMap =  () => {
        window.location.href = `/`
    };

    return (
        <div>
            <div id="button-group">
                <h1>{info.name}</h1>
                <p>{info.description}</p>
                <p>Town Type: {info.type}</p>
                <p>Town Size: {info.size}</p>
                <button onClick={popForm}>Edit</button>
                <button onClick={deleteInfo}>Delete</button>
                <button onClick={backToMap}>Back to Map</button>
            </div>
            <div className='insert-form'>
            {showForm && (
                <form onSubmit={editInfo} className='center-container'>
                    <label>
                    Name of the city:
                    <input type='text' value={editName} 
                        onChange={controlNameChange}
                        placeholder= {info.name}
                    />
                    </label>
                    <label>
                    Description
                    <input type="textarea"
                        value={editDescription} 
                        onChange={controlDescriptionChange}
                        placeholder= {info.description}
                    />
                    </label>
                    <label>
                    X Coordinate:
                    <input type="number"
                        value={editX} 
                        onChange={controlXChange}
                        placeholder= {info.x.toString()}
                    />
                    Y Coordinate:
                    <input type="number"
                        value={editY} 
                        onChange={controlYChange}
                        placeholder= {info.y.toString()}
                    />
                    </label>
                    <label>Town Type:
                        <select name="select" id="select" onChange={controlTypeChange} required>
                            <option value="" disabled>{info.type}</option>
                            <option value="City">City</option>
                            <option value="Military">Military</option>
                            <option value="Industrial">Industrial</option>
                        </select>
                    </label>
                    <label>Town Size:
                    <input value={editSize} 
                        onChange={controlSizeChange}
                        placeholder= {info.size.toString()}
                    />
                    </label>
                    <label>Color:
                        <input type="color" value={editColor} onChange={controlColorChange}/>
                    </label>
                    <button onClick={editInfo}>Save</button>
                </form>
                
            )}
            </div>
        </div>
    );
};

export default CityInfo;
