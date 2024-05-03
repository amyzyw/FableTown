import CityInfo from "../pages/InfoPage";
import HomePage from "../pages/Home";
import Insert from "../pages/Insert";
import LoginForm from "../pages/Login";

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
        label: "My FableTown",
        element: <HomePage />,
    },
    {
        link: "/login",
        label: "Log In",
        element: <LoginForm />,
    }
];

export const AuthenticatedPaths: {
    link: string;
    label: string;
    element?: JSX.Element;
}[] = [
    {
        link: "/",
        label: "My FableTown",
        element: <HomePage />,
    },
    {
        link: "/insert",
        label: "Create New City",
        element: <Insert />,
    },
    {
        link: "/info/:cityId",
        label: "Info",
        element: <CityInfo />,
        
    },
    {
        link: "/login",
        label: "Log Out",
        element: <LoginForm />,
    }, 
];

export const NavPaths: {
    link: string;
    label: string;
    element?: JSX.Element;
}[] = [
    {
        link: "/",
        label: "My FableTown",
        element: <HomePage />,
    },
    {
        link: "/insert",
        label: "Create New City",
        element: <Insert />,
    },
    {
        link: "/login",
        label: "Log Out",
        element: <LoginForm />,
    }, 
];