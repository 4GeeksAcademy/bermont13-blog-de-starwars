import { createContext, useReducer, useContext } from "react";
import { storeReducer, initialStore } from "../store";

// 1️⃣ **Creamos el contexto global**
export const StoreContext = createContext();

// 2️⃣ **Creamos el `StoreProvider` que va a envolver toda la app**
export const StoreProvider = ({ children }) => {
    const [store, dispatch] = useReducer(storeReducer, initialStore);

    return (
        <StoreContext.Provider value={{ store, dispatch }}>
            {children}
        </StoreContext.Provider>
    );
};

// 3️⃣ **Creamos el hook `useGlobalReducer()` para acceder al estado global**
export const useGlobalReducer = () => {
    const context = useContext(StoreContext);
    if (!context) {
        throw new Error("useGlobalReducer debe usarse dentro de StoreProvider");
    }

    const { store, dispatch } = context;

    // Acciones para manejar los datos
    const actions = {
        getPeople: async () => {
            try {
                const response = await fetch("https://www.swapi.tech/api/people");
                if (!response.ok) {
                    throw new Error("Error al cargar los personajes");
                }
                const data = await response.json();
                dispatch({ type: "set_people", payload: data.results });
            } catch (error) {
                console.error(error);
            }
        },

        getPlanets: async () => {
            try {
                const response = await fetch("https://www.swapi.tech/api/planets");
                if (!response.ok) {
                    throw new Error("Error al cargar los planetas");
                }
                const data = await response.json();
                dispatch({ type: "set_planets", payload: data.results });
            } catch (error) {
                console.error(error);
            }
        },

        getVehicles: async () => {
            try {
                const response = await fetch("https://www.swapi.tech/api/vehicles");
                if (!response.ok) {
                    throw new Error("Error al cargar los vehículos");
                }
                const data = await response.json();
                dispatch({ type: "set_vehicles", payload: data.results });
            } catch (error) {
                console.error(error);
            }
        },

        addFavorite: (name) => {
            if (!store.favorites.includes(name)) {
                dispatch({ type: "add_favorite", payload: name });
            }
        },
        removeFavorite: (name) => {
            dispatch({ type: "remove_favorite", payload: name });
        }
    };
    return { store, actions };
};
