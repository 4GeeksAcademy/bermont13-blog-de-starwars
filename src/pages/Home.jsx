import { useEffect } from "react";
import PeopleCard from "../components/PeopleCard";
import PlanetCard from "../components/PlanetCard";
import VehiculoCard from "../components/VehiculoCard";
import { useGlobalReducer } from "../hooks/useGlobalReducer";



const Home = () => {
    const { store, actions } = useGlobalReducer();
    


    const getPeople = async () => {
        try {
            const response = await fetch("https://www.swapi.tech/api/people");
            if (!response.ok) {
                throw new Error("Error al consultar API");
            }
            const data = await response.json();
            dispatch({ type: "set_people", payload: data.results }); // Asegúrate que es data.results
        } catch (error) {
            console.error(error);
        }
    };

        useEffect(() => {
        actions.getPeople();
    }, []);
    

    return (
        <>
            <div className="row justify-content-center">
                <div className="d-flex flex-row overflow-auto mx-5 my-5" style={{ maxWidth: "1200px", overflowX: "scroll" }}>
                    {store.people && store.people.map((person) => (
                        <div className="mx-2" key={person.uid}>
                            <PeopleCard person={person} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="d-flex flex-row overflow-auto mx-5 my-5" style={{ maxWidth: "1200px", overflowX: "scroll" }}>
                    {store.people && store.people.map((person) => (
                        <div className="mx-2" key={person.uid}>
                            <PlanetCard person={person} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="d-flex flex-row overflow-auto mx-5 my-5" style={{ maxWidth: "1200px", overflowX: "scroll" }}>
                    {store.people && store.people.map((person) => (
                        <div className="mx-2" key={person.uid}>
                            <VehiculoCard person={person} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;
