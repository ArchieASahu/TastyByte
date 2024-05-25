import { useToast } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import foodApiService from "../Api/FoodApi";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ food }) => {
  const toast = useToast();
  const { foodname, image, description, _id } = food;
  const navigate = useNavigate();

  const deleteFood = async (e) => {
    e.preventDefault();
    let foodRes = await foodApiService.deleteFood(food._id);
    if (foodRes.status) {
      toast({
        title: "Food Deleted successfully",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      navigate("/");
    }
  };

  return (
    <div className="col">
      <div className="card h-100 card-recipe" style={{ width: "18rem" }}>
        <img
          src={image}
          className="card-img-top"
          alt="..."
          style={{ height: "250px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{foodname}</h5>
          <p className="card-text">{description}</p>
        </div>
        <div className="card-footer d-flex justify-content-between">
          <Link to={"/details/" + _id}>
            <button type="button" className="btn btn-outline-success">
              View
            </button>
          </Link>
          <Link to={"/update/" + _id}>
            <button type="button" className="btn btn-outline-dark">
              Update
            </button>
          </Link>
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={deleteFood}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
