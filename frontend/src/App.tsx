import { MantineProvider } from "@mantine/core";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/Error";
import RootLayout from "./layouts/RootLayout";
import { AuthenticatedPaths} from "./constants/Navigation";
import AuthUserProvider from "./auth/AuthUserProvider";
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            ...AuthenticatedPaths.map((item) => ({
                path: item.link,
                element: item.element,
            })),
        ],
    },
]);

export default function App() {
    return (
        <AuthUserProvider>
            <MantineProvider withGlobalStyles withNormalizeCSS>
                <RouterProvider router={router} />
            </MantineProvider>
        </AuthUserProvider>
    );
}
