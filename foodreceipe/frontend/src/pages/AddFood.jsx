import { useToast } from "@chakra-ui/react";
import { useRef, useState } from "react";
import foodApiService from "../Api/FoodApi";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const AddFood = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const authContext = useAuth();
  console.log(authContext);
  const { user } = authContext;
  console.log(user);

  const foodnameRef = useRef();
  const imageRef = useRef();
  const descriptionRef = useRef();
  const instructionRef = useRef();
  const timeRef = useRef();
  const servingsRef = useRef();
  const authorRef = useRef();

  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newFood = {
      foodname: foodnameRef.current.value,
      image: imageRef.current.value,
      description: descriptionRef.current.value,
      instruction: instructionRef.current.value,
      time: timeRef.current.value,
      servings: servingsRef.current.value,
      author: authorRef.current.value,
    };
    console.log(newFood);
    const res = await foodApiService.addFood(newFood);
    if (res.status) {
      toast({
        title: "Food Added",
        description: "Your recipe is added successfully",
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
      foodnameRef.current.value = "";
      imageRef.current.value = "";
      descriptionRef.current.value = "";
      instructionRef.current.value = "";
      timeRef.current.value = "";
      servingsRef.current.value = "";
      authorRef.current.value = "";

      navigate("/profile");
    } else {
      toast({
        title: "Error",
        description: "Error while adding. Try Again.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <div className="row">
      <div className="col-md-6 mx-auto">
        <div className="card mt-5 mb-5 bg-success-subtle">
          <div className="card-header ">
            <h3>Add Food</h3>
          </div>
          <div className="card-body">
            <form action="" method="post" onSubmit={handleSubmit}>
              <div className="mb-1">
                <input
                  ref={foodnameRef}
                  type="text"
                  placeholder="Food Name"
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-1">
                <input
                  ref={imageRef}
                  type="text"
                  placeholder="Image URL"
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-1">
                <textarea
                  ref={descriptionRef}
                  type="text"
                  placeholder="Description"
                  className="form-control"
                  style={{ height: "80px" }}
                  required
                />
              </div>
              <div className="mb-1">
                <textarea
                  ref={instructionRef}
                  type="text"
                  placeholder="Instruction"
                  className="form-control"
                  style={{ height: "180px" }}
                  required
                />
              </div>
              <div className="mb-1">
                <input
                  ref={timeRef}
                  type="text"
                  placeholder="Time Required"
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-1">
                <input
                  ref={servingsRef}
                  type="text"
                  placeholder="Number of Servings"
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-1">
                <input
                  ref={authorRef}
                  type="text"
                  placeholder=""
                  className="form-control"
                  defaultValue={user.id}
                  required
                  readOnly
                />
              </div>
              <div className="my-2">
                <input
                  type="submit"
                  value="ADD"
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

export default AddFood;
