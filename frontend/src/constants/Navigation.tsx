import CityInfo from "../pages/InfoPage";
import HomePage from "../pages/Home";
import Insert from "../pages/Insert";
import LoginForm from "../pages/Login";
import { useAuth } from "../auth/AuthUserProvider";

/**
 * TODO: Modify this constant to point to the URL of your backend.
 * It should be of the format "https://<app-name>.fly.dev/api"
 *
 * Most of the time, the name of your app is the name of the folder you're in
 * right now, and the name of your Git repository.
 * For instance, if that name is "my-app", then you should set this to:
 * "https://my-app.fly.dev/api"
 *
 * If you've already deployed your app (using `fly launch` or `fly deploy`),
 * you can find the name by running `flyctl status`, under App > Name.
 */
export const BACKEND_BASE_PATH = 'http://localhost:8080/';

export const PATHS: {
    link: string;
    label: string;
    element?: JSX.Element;
}[] = [
    {
        link: "/",
        label: "Home",
        element: <HomePage />,
    },
    {
        link: "/login",
        label: "Login",
        element: <LoginForm />,
    }
];

const AuthenticatedPaths: {
    link: string;
    label: string;
    element?: JSX.Element;
}[] = [
    // ...PATHS, // Include all paths from NavigationPaths

    // Conditionally include the "Insert" path based on authentication status
    {
        link: "/insert",
        label: "Insert",
        element: <Insert />,
    },
    {
        link: "/",
        label: "Home",
        element: <HomePage />,
    },
    {
        link: "/info",
        label: "Info",
        element: <CityInfo //Add backend GET for city info？
        name="Ithaca" description="Corn Hell."/>,
        
    },
    {
        link: "/login",
        label: "Log Out",
        element: <LoginForm />,
    }
];

const NavigationPathsWrapper = () => {
    const { user } = useAuth(); // Access the user's authentication status

    // Select which set of paths to use based on authentication status
    const pathsToRender = user ? AuthenticatedPaths : PATHS;
    console.log("which path", pathsToRender)
    return pathsToRender;
};

// export const USED_PATH = NavigationPathsWrapper();

// export default NavigationPathsWrapper;

// .map(({ link, label, element }) => (
//     <li key={link}>
//         <a href={link}>{label}</a>
//         {element} {/* Render the element associated with the path */}
//     </li>
// ))