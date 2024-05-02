import { HeaderSimple } from "../components/Header";
import { PATHS, AuthenticatedPaths} from "../constants/Navigation";
import { Outlet } from "react-router-dom";
import AuthUserProvider, { useAuth } from "../auth/AuthUserProvider";


const RootLayout = () => {
    const { user } = useAuth();

    return (
        <div>
            <HeaderSimple links={user ? AuthenticatedPaths : PATHS} />
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default RootLayout;
