import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";  // Asegúrate de que este archivo existe
import Home from "./pages/Home";
import PersonDetail from "./pages/PersonDetail";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />, // El Layout debe envolver todas las rutas
        children: [
            { path: "/", element: <Home /> },
            { path: "/person/:id", element: <PersonDetail /> }
        ]
    }
]);
