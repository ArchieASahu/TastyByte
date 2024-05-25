import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import foodApiService from "../Api/FoodApi";
import HomeRecipe from "../components/HomeRecipe";

const Search = () => {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("q");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await foodApiService.searchFoods(searchQuery);
        console.log(response);
        setSearchResults(response.data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    if (searchQuery) {
      fetchSearchResults();
    }
  }, [searchQuery]);

  return (
    <div className="container mt-3 mb-4">
      <h2 className="pb-5 fw-large" style={{ color: "#14a44d" }}>
        SEARCH RESULT
      </h2>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {searchResults &&
          searchResults.map((food) => (
            <HomeRecipe key={food._id} food={food} />
          ))}
      </div>
    </div>
  );
};

export default Search;
