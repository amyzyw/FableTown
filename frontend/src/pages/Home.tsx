import countriesData from '../data/countries.geo.json';
import * as d3 from 'd3';
import React, { useEffect, useRef } from 'react';


const HomePage = () => {
    const svgRef = useRef(null); // Use useRef to reference the SVG element

    useEffect(() => {
        const svg = d3.select(svgRef.current);
        const width = parseInt(svg.style("width"), 10);
        const height = parseInt(svg.style("height"), 10);
        const margin = { top: 20, right: 20, bottom: 20, left: 20 };
        const mapWidth = width - margin.left - margin.right;
        const mapHeight = height - margin.top - margin.bottom;
        
        const map = svg.append("g")
                       .attr("transform", `translate(${margin.left},${margin.top})`);

        try {
            const projection = d3.geoMercator()
                                .fitSize([mapWidth, mapHeight], countriesData as any);

            const path = d3.geoPath().projection(projection);

            const map = svg.append('g')
                            .attr("transform", `translate(${margin.left},${margin.top})`);

            map.selectAll('path')
                    .data(countriesData.features)
                    .enter().append('path')
                    .attr('d', path as any)
                    .attr('fill', 'white')
                    .attr('stroke', '#333');
        } catch (error) {
            console.error("Failed to fetch geojson:", error);
        }
    }, []);

    return (
        <center>
            <h1>Welcome!</h1>
            <svg ref={svgRef} style={{ width: "1200px", height: "900px" }}></svg>
        </center>
    );
};

export default HomePage;
