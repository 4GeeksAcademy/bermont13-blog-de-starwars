import { Link } from "react-router-dom";
import { useGlobalReducer } from "../hooks/useGlobalReducer";
import starWarsLogo from "../assets/Star-Wars-Logo.jpg";



const Navbar = () => {
    const { store, actions } = useGlobalReducer();

    return (
        <nav className="navbar navbar-light bg-light px-3">
            <div className="container d-flex justify-content-between align-items-center">
                {/* LOGO DE STAR WARS */}
                <Link to="/">
                    <img src={starWarsLogo} alt="Star Wars Logo" style={{ height: "50px" }} />
                </Link>

                {/* BOTÓN DE FAVORITOS */}
                <div className="dropdown">
                    <button 
                        className="btn btn-warning dropdown-toggle" 
                        type="button" 
                        data-bs-toggle="dropdown">
                        Favorites {store.favorites.length}
                    </button>
                    <ul className="dropdown-menu">
                        {store.favorites.length > 0 ? (
                            store.favorites.map((fav, index) => (
                                <li key={index} className="d-flex justify-content-between">
                                    <span className="dropdown-item">{fav}</span>
                                    <button 
                                        className="btn btn-danger btn-sm"
                                        onClick={() => actions.removeFavorite(fav)}>
                                        🗑️
                                    </button>
                                </li>
                            ))
                        ) : (
                            <li className="dropdown-item">(empty)</li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
