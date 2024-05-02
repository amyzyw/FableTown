import { HeaderSimple } from "../components/Header";
import { PATHS, AuthenticatedPaths, NavPaths} from "../constants/Navigation";
import { Outlet } from "react-router-dom";
import { useAuth } from "../auth/AuthUserProvider";


const RootLayout = () => {
    const { user } = useAuth();

    return (
        <div>
            <HeaderSimple links={user ? NavPaths : PATHS} />
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default RootLayout;
