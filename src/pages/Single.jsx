import React from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { useGlobalReducer } from "../hooks/useGlobalReducer";


const Single = () => {
  const { theId } = useParams();
  const [store] = useGlobalReducer();

  const singleTodo = store.todos.find(todo => todo.id === parseInt(theId));

  if (!singleTodo) {
    return (
      <div className="container text-center">
        <h1 className="display-4">Todo no encontrado</h1>
        <hr className="my-4" />
        <Link to="/">
          <span className="btn btn-primary btn-lg" role="button">
            Back home
          </span>
        </Link>
      </div>
    );
  }

  return (
    <div className="container text-center">
      <h1 className="display-4">Todo: {singleTodo.title}</h1>
      <hr className="my-4" />
      <Link to="/">
        <span className="btn btn-primary btn-lg" role="button">
          Back home
        </span>
      </Link>
    </div>
  );
};

Single.propTypes = {
  match: PropTypes.object,
};

export default Single;
