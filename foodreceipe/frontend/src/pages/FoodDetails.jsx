import React, { useEffect, useState } from "react";
import foodApiService from "../Api/FoodApi";
import { useParams, useNavigate } from "react-router-dom";
//import "./FoodDetails.css";

const FoodDetails = () => {
  const { id } = useParams();
  const [food, setFood] = useState(null);
  const navigate = useNavigate();

  const getfoodDetails = async (id) => {
    const res = await foodApiService.foodDetails(id);
    console.log(res);
    if (res.status) {
      setFood(res.data);
    }
  };
  useEffect(() => {
    getfoodDetails(id);
  }, [id]);

  if (!food) return <h3>Food not found</h3>;

  // const { image, name, instruction, time, servings } = food;
  return (
    <div className="card mb-3 mt-5">
      <div className="row g-0">
        <div className="col-md-4 pt-4">
          <img
            src={food.image}
            className="img-fluid"
            alt="..."
            height={"900px"}
            width={"600px"}
          />
        </div>
        <div className="col-md-8 ps-3">
          <div className="card-body">
            <h5 className="card-title fs-1">{food.foodname}</h5>
            <p className="card-text fs-5 ">
              <strong>Description: </strong>
              {food.description}
            </p>
            <p className="card-text fs-5">
              <strong>Instructions: </strong>
              {food.instruction}
            </p>
            <p className="card-text fs-5">
              <strong>Time: </strong>
              {food.time}
            </p>
            <p className="card-text fs-5">
              <strong>serving: </strong>
              {food.servings}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
