// import * as d3 from 'd3';
import React, { useState } from 'react';
import { City } from "../../../lib/types/index.ts";
import MapSvg from './Map';

const HomePage = () => {
    const [cities, setCities] = useState([]);

    // Get city data from the backend


    return (
        <div style={{ height: '100vh', width: '100vw' }}>
            <MapSvg cities = {cities} style={{ width: '100%', height: '100%' }} />
        </div>
    );
};

export default HomePage;
