import React from "react";
import { Link } from "react-router-dom";

const HomeRecipe = ({ food }) => {
  const { foodname, image, description, _id } = food;
  //   console.log(food);
  return (
    /*<div className="row row-cols-1 row-cols-md-4 g-4">*/
    <div className="col">
      <div className="card h-100 card-recipe" style={{ width: "18rem" }}>
        <img
          src={image}
          class="card-img-top"
          alt="..."
          style={{ height: "250px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{foodname}</h5>
          <p className="card-text">{description}</p>
        </div>
        <div className="card-footer">
          <Link to={"/details/" + _id}>
            <button className="btn btn-outline-success">View Recipe</button>
          </Link>
        </div>
      </div>
    </div>
    /*</div>*/
  );
};

export default HomeRecipe;
