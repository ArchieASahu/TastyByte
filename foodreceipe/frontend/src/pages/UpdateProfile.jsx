import { useToast } from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import userApiService from "../Api/UserApi";

const UpdateUser = () => {
  const toast = useToast();
  const { id } = useParams();

  const nameRef = useRef();
  const emailRef = useRef();
  const mobileRef = useRef();

  const [user, setUser] = useState(null);

  const getUserDetails = async (id) => {
    const res = await userApiService.userDetails(id);
    console.log(res.data);
    setUser(res.data);
  };

  useEffect(() => {
    getUserDetails(id);
  }, [id]);

  if (!user) return;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedUser = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      mobile: mobileRef.current.value,
    };

    console.log(updatedUser);
    const userRes = await userApiService.updateUser(id, updatedUser);

    if (userRes.status) {
      toast({
        title: "User Updated",
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
            <h3>Update User</h3>
          </div>
          <div className="card-body">
            <form action="" method="post" onSubmit={handleSubmit}>
              <div className="mb-1">
                <input
                  ref={nameRef}
                  type="text"
                  placeholder="User name"
                  className="form-control"
                  defaultValue={user.name}
                  required
                />
              </div>

              <div className="mb-1">
                <input
                  ref={emailRef}
                  type="text"
                  placeholder="User Email"
                  className="form-control"
                  defaultValue={user.email}
                  required
                />
              </div>

              <div className="mb-1">
                <input
                  ref={mobileRef}
                  type="tel"
                  placeholder="User mobile"
                  className="form-control"
                  pattern="[0-9]{10}"
                  defaultValue={user.mobile}
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

export default UpdateUser;
