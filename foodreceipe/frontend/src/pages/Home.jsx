import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

import { ArrowForwardIcon, ArrowRightIcon } from "@chakra-ui/icons";
//import RecipeCard from "../components/ReceipeCard";
import HomeRecipe from "../components/HomeRecipe";
import { useState, useEffect } from "react";
import foodApiService from "../Api/FoodApi";

const Home = () => {
  const [foods, setFoods] = useState(null);

  async function getData() {
    let res = await foodApiService.getAllFoods(4);
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
    <>
      {/* Background image */}
      <div className="background-image mt-3">
        <div className="content">
          <h1 style={{ fontSize: "50px", marginTop: "70px", color: "#14a44d" }}>
            SIMPLE AND
            <br /> TASTY RECIPES
          </h1>
          <p style={{ fontSize: "25px", marginTop: "20px" }}>
            Enjoy a healthy life by eating healthy foods
            <br />
            that have extraordinary flavors that make
            <br />
            your life healthier for today and in the future.
          </p>
          <Link to="/login">
            <button
              style={{
                backgroundColor: "#14a44d",
                fontSize: "large",
                borderRadius: "5px",
                padding: "10px",
                marginTop: "30px",
              }}
            >
              Get Started{" "}
              <span>
                <ArrowForwardIcon boxSize={5} />
              </span>
            </button>
          </Link>
        </div>
      </div>
      <div className="container-fluid bg-success-subtle rounded">
        <h2 className="pb-3 fw-large pt-3">OUR RECIPE</h2>
        <div className="row row-cols-1 row-cols-md-4 g-4 ps-4 pe-4">
          {foods.map((food) => (
            <HomeRecipe key={food._id} food={food} />
          ))}
        </div>
        <Link to="/showmore">
          <button
            className="btn btn-primary bottom-0 end-0 m-4 showmore"
            style={{
              backgroundColor: "white",
              color: "#14a44d",
              border: "none",
              fontSize: "18px",
            }}
          >
            Show More{" "}
            <span>
              <ArrowRightIcon boxSize={3} />
            </span>
          </button>
        </Link>
      </div>
      {/* about  */}
      <section className="mt-5">
        <div className="container-fluid pt-5 pb-3">
          <div className="row">
            <div className="col-md-8 pe-5 d-flex align-items-center">
              <div className="column-content">
                <h2 className="pb-5 fw-large" style={{ color: "#14a44d" }}>
                  ABOUT US
                </h2>
                <div className="paragraphs">
                  <p className="fs-5">
                    Welcome to our food recipe website! We are passionate about
                    cooking and sharing delicious recipes with food enthusiasts
                    like you. Our mission is to inspire creativity in the
                    kitchen and help you discover new flavors and techniques.
                  </p>
                  <p className="fs-5">
                    Whether you're a beginner or an experienced chef, you'll
                    find a wide range of recipes to suit your taste and skill
                    level. From quick and easy meals for busy weeknights to
                    gourmet dishes for special occasions, we've got you covered.
                  </p>
                  <p className="fs-5">
                    Join our community and explore our collection of
                    mouthwatering recipes, cooking tips, and culinary
                    inspiration. Let's embark on a culinary adventure together!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 pe-0">
              <div className="column-content text-center">
                <img
                  src="https://i.pinimg.com/564x/a0/61/a7/a061a776cba978a3206f19a37a7fcf50.jpg"
                  className="rounded-circle img-fluid"
                  alt="Image"
                  style={{ width: "400px", height: "400px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* our services */}

      <div className=" container-fluid mt-5 mb-5">
        <div className="services pt-3 pb-3">
          <h2 style={{ color: "#14a44d" }}>OUR SERVICES</h2>
        </div>
        <div class="row row-cols-1 row-cols-md-2 g-4">
          <div class="col d-flex justify-content-center">
            <div class="card mb-3" style={{ maxWidth: "540px" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    className="card-img-left"
                    src="https://www.clipartkey.com/mpngs/m/37-376054_plate-spoon-transparent-fork-knife-plate-clipart.png"
                    alt="..."
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Quality Food</h5>
                    <p class="card-text">
                    Indulge in culinary excellence with our meticulously curated selection of gourmet recipes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col d-flex justify-content-center">
            <div class="card mb-3" style={{ maxWidth: "540px" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    className="card-img-left"
                    src="https://www.clipartbest.com/cliparts/4Tb/66E/4Tb66EqEc.jpg"
                    alt="..."
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                  <h5 className="card-title">Cook like a chef</h5>
                <p className="card-text">Master the art of cooking with insider tips and techniques from seasoned culinary experts.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col d-flex justify-content-center">
            <div class="card mb-3" style={{ maxWidth: "540px" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    className="card-img-left"
                    src="https://clipart-library.com/new_gallery/23-239823_salt-pepper-svg-png-icon-free-download-salt.png"
                    alt="..."
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                  <h5 className="card-title">Ingredients</h5>
                <p className="card-text">Elevate your dishes with the finest, farm-fresh ingredients sourced for perfection.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col d-flex justify-content-center">
            <div class="card mb-3" style={{ maxWidth: "540px" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    className="card-img-left"
                    src="https://getdrawings.com/free-icon-bw/spoon-and-fork-icon-19.png"
                    alt="..."
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                  <h5 className="card-title">Easy Recipes</h5>
                <p className="card-text">Simplify your kitchen adventures with step-by-step instructions for effortless, delicious meals.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
