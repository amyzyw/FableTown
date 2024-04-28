// import * as d3 from 'd3';
import React, { useEffect, useState } from 'react';
import { City } from "../../../lib/types/index.ts";
import MapSvg from './Map';
import { BACKEND_BASE_PATH } from '../constants/Navigation.tsx';

const HomePage = () => {
    const [cities, setCities] = useState([]);

    // Get city data from the backend
    useEffect(() => {
        fetch(BACKEND_BASE_PATH).then((res) => {
            return res.json();
        }).then((data) => {
            // console.log("DEBUGGER:", data);
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
        <div style={{ height: '100vh', width: '100vw' }}>
            <MapSvg cities = {cities} style={{ width: '100%', height: '100%' }} />
        </div>
    );
};

export default HomePage;
