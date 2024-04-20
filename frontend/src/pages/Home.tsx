import * as d3 from 'd3';
import React, { useEffect, useRef } from 'react';
import MapSvg from './Map';


const HomePage = () => {
    

    return (
        <div style={{ height: '100vh', width: '100vw' }}>
            <MapSvg style={{ width: '100%', height: '100%' }} />
        </div>
    );
};

export default HomePage;
