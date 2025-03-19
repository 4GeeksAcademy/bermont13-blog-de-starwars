import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const PersonDetail = () => {
    const { id } = useParams();
    const [person, setPerson] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/people/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setPerson(data.result.properties);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <p className="text-center">Loading...</p>;
    if (!person) return <p className="text-center">Character not found</p>;

    // ✅ Usamos la misma imagen que en la tarjeta de los personajes
    const imageUrl = `https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/${id}.jpg`;

    return (
        <div className="container mt-5">
            <div className="card shadow-lg p-4 bg-dark text-white">
                <div className="row">
                    {/* Imagen del personaje */}
                    <div className="col-md-4 text-center">
                        <img 
                            src={imageUrl} 
                            className="img-fluid rounded" 
                            alt={person.name} 
                            onError={(e) => e.target.src = "https://via.placeholder.com/600x800"} 
                            style={{ maxWidth: "100%", height: "auto", borderRadius: "10px" }}
                        />
                    </div>

                    {/* Información del personaje */}
                    <div className="col-md-8">
                        <h2 className="text-uppercase">{person.name}</h2>
                        <p className="fst-italic">
                            {person.name} was a legendary character in the Star Wars saga. 
                            With incredible abilities and a strong presence, {person.name} 
                            played a key role in galactic history.
                        </p>

                        <div className="row">
                            <div className="col-md-6">
                                <p><strong>Birth Year:</strong> {person.birth_year}</p>
                                <p><strong>Gender:</strong> {person.gender}</p>
                                <p><strong>Height:</strong> {person.height} cm</p>
                                <p><strong>Mass:</strong> {person.mass} kg</p>
                            </div>
                            <div className="col-md-6">
                                <p><strong>Eye Color:</strong> {person.eye_color}</p>
                                <p><strong>Hair Color:</strong> {person.hair_color}</p>
                                <p><strong>Skin Color:</strong> {person.skin_color}</p>
                                <p><strong>Species:</strong> Human</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sección de información adicional */}
                <div className="mt-4 p-3 border-top">
                    <h4>Affiliations & Appearances</h4>
                    <p><strong>Affiliation:</strong> Jedi Order, Rebel Alliance</p>
                    <p><strong>Movies:</strong> Episode IV, V, VI, VII, VIII, IX</p>
                </div>

                {/* Botón para regresar a Home */}
                <div className="text-center mt-3">
                    <Link to="/" className="btn btn-danger">Return Home</Link>
                </div>
            </div>
        </div>
    );
};

export default PersonDetail;
