import React from "react";
import RecipeCard from "../components/ReceipeCard";
//import './UserProfile.css'
import { useAuth } from "../context/AuthContext";
import { Avatar } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import foodApiService from "../Api/FoodApi";

import { useState, useEffect } from "react";

/* import { useParams } from "react-router-dom"; */

const UserProfilePage = () => {
  /* const { author } = useParams(); */

  const authContext = useAuth();
  console.log(authContext);
  const { user } = authContext;
  console.log(user);

  const [foods, setFoods] = useState(null);
  const getData = async (userId) => {
    let res = await foodApiService.getFoodById(userId);
    console.log(res);
    if (res.status) {
      setFoods(res.data);
    }
  };
  console.log(foods);
  useEffect(() => {
    getData(user.id);
  }, [user.id]);

  if (!foods)
    return (
      <div className="user-profile-page">
        {/* <div
          className="card"
          style={{ backgroundColor: "#14a44d", marginBottom: "20px" }}
        >
          <div className="card-content">
            <Avatar bg="black" size="lg" src="https://bit.ly/broken-link" />
            <div className="card-body ps-4 ms-3">
              <h3 className="card-title">Welcome !! </h3>
              <h5>{user.name}</h5>
              <button className="btn btn-light">
                Edit Profile{" "}
                <span>
                  <EditIcon boxSize={4} />
                </span>
              </button>
            </div>
          </div>
        </div> */}
        <div class="card mb-3 mt-3" style={{ backgroundColor: "#14a44d" }}>
          <div class="row g-0">
            <div class="col-md-2 pt-4">
              <Avatar bg="black" size="lg" src="https://bit.ly/broken-link" />
            </div>
            <div class="col-md-10">
              <div class="card-body">
                <h3 class="card-title">Welcome !! </h3>
                <h5 class="card-text">{user.name}</h5>
                <Link to={"/updateuser/" + user.id}>
                  <button className="btn btn-light">
                    Edit Profile{" "}
                    <span>
                      <EditIcon boxSize={4} />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <h2 className="pb-5 fw-large" style={{ color: "#14a44d" }}>
          MY RECIPES
        </h2>
        {/* <div className="row row-cols-1 row-cols-md-4 g-4 mt-5">
        {foods &&
          foods.map((food) => <RecipeCard key={food._id} food={food} />)}
      </div> */}
        <Link to="/add">
          <button
            type="button"
            className="btn btn-outline-success add-recipe-button mt-5 mb-5"
          >
            Add Receipe
          </button>
        </Link>

        {/* <button className="add-recipe-button">Add Recipe</button> */}
      </div>
    );
  return (
    <div className="user-profile-page">
      <div class="card mb-3 mt-3" style={{ backgroundColor: "#14a44d" }}>
        <div class="row g-0">
          <div class="col-md-2 pt-4">
            <Avatar bg="black" size="lg" src="https://bit.ly/broken-link" />
          </div>
          <div class="col-md-10">
            <div class="card-body">
              <h3 class="card-title">Welcome !! </h3>
              <h5 class="card-text">{user.name}</h5>
              <Link to={"/updateuser/" + user.id}>
                <button className="btn btn-light">
                  Edit Profile{" "}
                  <span>
                    <EditIcon boxSize={4} />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <h2 className=" fw-large" style={{ color: "#14a44d" }}>
        MY RECIPES
      </h2>
      <div className="row row-cols-1 row-cols-md-4 g-4 mt-2">
        {foods &&
          foods.map((food) => <RecipeCard key={food._id} food={food} />)}
      </div>
      <Link to="/add">
        <button
          type="button"
          className="btn btn-outline-success add-recipe-button mt-5 mb-5"
        >
          Add Receipe
        </button>
      </Link>

      {/* <button className="add-recipe-button">Add Recipe</button> */}
    </div>
  );
};

export default UserProfilePage;
