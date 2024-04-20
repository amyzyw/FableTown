import { useEffect, useState } from "react";
import { CityInfo } from "@full-stack/types";
import { BACKEND_BASE_PATH } from "../constants/Navigation";

// get city info from our backend
const getCityInfo = (): Promise<CityInfo> =>
    fetch(`${BACKEND_BASE_PATH}/city-info`).then((res) => res.json());

// display city info page
const CityInfoPage = () => {
    // useState to preserve player's city information
    const [cityInfo, setCityInfo] = useState<CityInfo | null>(null);

    // useEffect to load the city info
    useEffect(() => {
        // Log the city info is being loaded
        console.log("Loading Your City's Information...");

        // get city info from our backend
        getCityInfo().then((data) => setCityInfo(data));
    }, []);

    // If city info has not shown & is still loading, display a loading message
    if (!cityInfo) {
        return <p>Still Loading Your City's Information...</p>;
    }

    // Once player's city info is loaded, display it
    return (
        <div>
            <h1>{cityInfo.name}</h1>
            <p>{cityInfo.description}</p>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    );
};

export default CityInfoPage;
