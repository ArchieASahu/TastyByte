import { useToast } from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import foodApiService from "../Api/FoodApi";

const UpdateFood = () => {
  const toast = useToast();
  const { id } = useParams();

  const foodnameRef = useRef();
  const imageRef = useRef();
  const descriptionRef = useRef();
  const instructionRef = useRef();
  const timeRef = useRef();
  const servingsRef = useRef();

  const [food, setFood] = useState(null);

  const getFoodDetails = async (id) => {
    const res = await foodApiService.foodDetails(id);
    console.log(res.data);
    setFood(res.data);
  };

  useEffect(() => {
    getFoodDetails(id);
  }, [id]);

  if (!food) return;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedFood = {
      foodname: foodnameRef.current.value,
      image: imageRef.current.value,
      description: descriptionRef.current.value,
      instruction: instructionRef.current.value,
      time: timeRef.current.value,
      servings: servingsRef.current.value,
    };

    console.log(updatedFood);
    const foodRes = await foodApiService.updateFood(id, updatedFood);

    if (foodRes.status) {
      toast({
        title: "Food Updated",
        description: "Your recipe is updated successfully ",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Error",
        description: "Error while updating. Try again",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };
  return (
    <div className="row">
      <div className="col-md-8 mx-auto">
        <div className="card mt-5 mb-5 bg-success-subtle">
          <div className="card-header">
            <h3>Update Food</h3>
          </div>
          <div className="card-body">
            <form action="" method="post" onSubmit={handleSubmit}>
              <div className="mb-1">
                <input
                  ref={foodnameRef}
                  type="text"
                  placeholder="Food name"
                  className="form-control"
                  defaultValue={food.foodname}
                  required
                />
              </div>

              <div className="mb-1">
                <input
                  ref={imageRef}
                  type="text"
                  placeholder="Food Image"
                  className="form-control"
                  defaultValue={food.image}
                  required
                />
              </div>
              <div className="mb-1">
                <textarea
                  ref={descriptionRef}
                  type="text"
                  placeholder="Description"
                  className="form-control"
                  defaultValue={food.description}
                  style={{ height: "80px" }}
                  required
                />
              </div>
              <div className="mb-1">
                <textarea
                  ref={instructionRef}
                  type="text"
                  placeholder="Instruction"
                  className="form-control "
                  defaultValue={food.instruction}
                  style={{ height: "180px" }}
                  required
                />
              </div>
              <div className="mb-1">
                <input
                  ref={timeRef}
                  type="text"
                  placeholder="Time"
                  className="form-control"
                  defaultValue={food.time}
                  required
                />
              </div>
              <div className="mb-1">
                <input
                  ref={servingsRef}
                  type="text"
                  placeholder="Food Servings"
                  className="form-control"
                  defaultValue={food.servings}
                  required
                />
              </div>
              <div className="my-2">
                <input
                  type="submit"
                  value="Update"
                  className="btn btn-success w-100"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateFood;
