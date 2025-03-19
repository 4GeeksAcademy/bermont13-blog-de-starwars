import { useGlobalReducer } from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";

const PeopleCard = ({ person }) => {
    const { actions, store } = useGlobalReducer();

    // 🔥 URL dinámica de la imagen (usando la fuente anterior)
    const imageUrl = `https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/${person.uid}.jpg`;

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img 
                src={imageUrl} 
                className="card-img-top" 
                alt={person.name} 
                onError={(e) => e.target.src = "https://via.placeholder.com/400x600"} // Imagen de respaldo
            />
            <div className="card-body">
                <h5 className="card-title">{person.name}</h5>
                <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <div className="d-flex justify-content-between">
                    {/* 🔗 Botón que lleva a más información del personaje */}
                    <Link to={`/person/${person.uid}`} className="btn btn-primary">Learn more!</Link>
                    
                    {/* 💛 Botón de favoritos */}
                    <button 
                        className="btn btn-warning"
                        onClick={() => actions.addFavorite(person.name)}
                    >
                        {store.favorites.includes(person.name) ? "💛" : "🤍"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PeopleCard;
