import React from "react";
import { useState, useEffect } from "react";

import { Link } from "@chakra-ui/react";
import HomeRecipe from "../components/HomeRecipe";
import foodApiService from "../Api/FoodApi";

const ShowMore = () => {
  const [foods, setFoods] = useState(null);

  async function getData() {
    let res = await foodApiService.getAllFoods();
    console.log(res);
    if (res.status) {
      setFoods(res.data);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  if (!foods) return;
  return (
    <div className="container mt-3 mb-4">
      <h2 className="pb-5 fw-large" style={{ color: "#14a44d" }}>
        ALL RECIPES
      </h2>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {foods.map((food) => (
          <HomeRecipe key={food._id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default ShowMore;
