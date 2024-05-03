import { useEffect, useState } from 'react';
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
    
    return (
        <div>
        {user ? (
        <div style={{ height: '100vh', width: '100vw' }}>
            <p className='p-norm'>🗺️ Welcome to the sprawling map of FableTown, where your imagination knows no bounds! 🗺️</p> 
            {/* <p className='p-norm'>🏰 Here, you can view all the magnificent cities you've created, each a testament to your creativity and strategic acumen. </p> 
            <p className='p-norm'>⭐️ Explore your expanding empire, connect trade routes, and forge alliances with other players across this vast and dynamic world. </p> 
            <p className='p-norm'>🎨 The map is your canvas; let your cities paint the picture of your legendary reign! </p> */}
            <MapSvg cities = {cities} style={{ width: '100%', height: '100%' }} />
        </div>
        ) : (
        <div id='intro'>
            <h1>⛲️ Welcome to FableTown! ⛲️</h1>
            <p>FableTown is a captivating world brought to life by the creative minds of 
            Amy Zhang, Nuo Cen, and Tenny George. In this immersive game, you're not just a player; 
            you're a creator, architect, and ruler.
            </p>
            <p>
            Design your dream kingdom from the ground up, crafting cities that cater to various needs, 
            from military might to bustling commerce. 
            Every decision you make shapes the destiny of your realm, from intricate city planning to diplomatic relations with neighboring lands.
            </p>
            <p>
            Unleash your imagination as you forge alliances, lead armies into battle, 
            and delve into the intricate economics of your flourishing empire. 
            The possibilities are limitless in this sandbox of creativity and strategy. 
            Welcome to FableTown, where you have the power to shape history and build your own legend.
            </p>

        </div>
        )}
    </div>
);
};

export default HomePage;
