import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import { StoreProvider } from './hooks/useGlobalReducer'; // ⬅️ Aquí lo importamos
import { router } from './routes';

const Main = () => {
    return (
        <React.StrictMode>
            <StoreProvider>  {/* ⬅️ Envolvemos la app con StoreProvider */}
                <RouterProvider router={router} />
            </StoreProvider>
        </React.StrictMode>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
