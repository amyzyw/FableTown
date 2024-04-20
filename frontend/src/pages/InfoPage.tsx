import { useEffect, useState } from "react";
//import { DuchyInfo } from "@full-stack/types";
import { BACKEND_BASE_PATH } from "../constants/Navigation";

interface DuchyInfo {
    name: string;
    description: string;
  }

// get duchy info from our backend
const getDuchyInfo = (): Promise<DuchyInfo> =>
    fetch(`${BACKEND_BASE_PATH}/city-info`).then((res) => res.json());

// display duchy info page
const DuchyInfoPage = () => {
    // useState to preserve player's city information
    const [duchyInfo, setDuchyInfo] = useState<DuchyInfo | null>(null);

    // useEffect to load the duchy info
    useEffect(() => {
        // Log the city info is being loaded
        console.log("Loading Your City's Information...");

        // get duchy info from our backend
        getDuchyInfo().then((data) => setDuchyInfo(data));
    }, []);

    // If duchy info has not shown & is still loading, display a loading message
    if (!duchyInfo) {
        return <p>Still Loading Your City's Information...</p>;
    }

    // Once a player's duchy info is loaded, display it
    return (
        <div>
            <h1>{duchyInfo.name}</h1>
            <p>{duchyInfo.description}</p>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    );
};

export default DuchyInfoPage;