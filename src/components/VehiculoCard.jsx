import React from "react";
import { Link } from "react-router-dom";

const VehiculoCard = ({ person }) => {


    return (
        <div>
            <div className="card" style={{ width: "18rem" }}>
                <img src={"https://picsum.photos/200/300"} className="card-img-top" alt={person.name} onError={(e)=>{e.target.src="https://picsum.photos/200/300"}}/>
                <div className="card-body">
                    <h5 className="card-title">{person.name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to={`/person/${person.uid}`} className="btn btn-primary">Learn more!</Link>
                    <button className="btn btn-outline-warning ms-2" onClick={() => actions.addFavorite(person.name)}>
                        <i className="fa fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VehiculoCard;