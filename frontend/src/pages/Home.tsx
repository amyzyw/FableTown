// import * as d3 from 'd3';
import React, { useEffect, useState } from 'react';
import { City, CityWithId } from "../../../lib/types/index.ts";
import MapSvg from './Map';
import { BACKEND_BASE_PATH } from '../constants/Navigation.tsx';
import { useAuth } from "../auth/AuthUserProvider";


const HomePage = () => {
    const [cities, setCities] = useState([]);
    const { user } = useAuth();



    // Get city data from the backend
    useEffect(() => {
        fetch(BACKEND_BASE_PATH).then((res) => {
            return res.json();
        }).then((data) => {
            setCities(data);
        }).catch(() => {
            alert("Something went wrong!");
        });
    }, []);


    // useEffect(() => {
    //     fetch(`${BACKEND_BASE_PATH}cities/`).then((res) => res.json()).then((data) => {
    //         console.log("RECEIVED CITIES: ", data);
    //     }).catch(() => {
    //         alert("Uh oh!")
    //     })
    // }, []);

    return (
        <div>
        {user ? (
        <div style={{ height: '100vh', width: '100vw' }}>
            <MapSvg cities = {cities} style={{ width: '100%', height: '100%' }} />
        </div>
        ) : (
        <div id='intro'>
            <h1>Welcome to FableTown! ⛲️</h1>
            <h2> Log In to Start Exploring!</h2>
        </div>
        )}
    </div>
);
};

export default HomePage;
