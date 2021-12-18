import React, { useState } from "react";
import { Alert, Button, Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import useFirebase from "../../../Hooks/useFirebase";
import Register from "../Register/Register";
// import "../Register/Register.css";
import "./Login.css";

const Login = () => {
  // Bootstarp modal start
  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // Bootstarp modal end
  const [errorMessage, setErrorMessage] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const {
    setUser,

    setIsLoading,
    loginWithEmailAndPassword,
  } = useFirebase();
  // console.log(isLoading)
  const url = location.state?.from || "/dashboard";
  //hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    loginWithEmailAndPassword(data.email, data.password)
      .then((res) => {
        setIsLoading(true);
        setUser(res.user);

        navigate(url);
        setErrorMessage(false);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(
          "sign in error code ",
          errorCode,
          " signin error message ",
          errorMessage
        );
        setErrorMessage(true);
        setShowAlert(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
    // console.log(data);
    setUser(data);
    // console.log(data.email);
  };

  return (
    <>
    <div className="container ">
        {/* <h1>from auth folder</h1> */}

        <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ backgroundColor: "", padding: "" }}
        className=" border w-75 "
      >
        {errorMessage && showAlert && (
          <>
            <Alert
              variant="danger"
              onClose={() => setShowAlert(false)}
              dismissible
            >
              <Alert.Heading>Invalid Creditial</Alert.Heading>
              {/* <p>
               Please Check your Email and Password or Create Account 
              </p> */}
            </Alert>
            ,{" "}
          </>
        )}
        <Form.Label>Email address</Form.Label>
        <Form.Control
          className="my-3"
        
          label="Enter Your Email"
          type="email"
          placeholder="Enter your Email"
          {...register("email", { required: true })}
          variant="standard"
        />
        {errors.exampleRequired && <span>This field is required</span>}
        <Form.Label>Password</Form.Label>
        <Form.Control
          className="my-3"
          {...register("password", { required: true })}
        
          placeholder="Enter Password"
          type="password"
          variant="standard"
        />{" "}
        {/* {errorMessage && <p className="error"> Invalid Credintial </p>} */}{" "}
        {/* <input type="submit" value="Login " className="submit-btn" /> */}
        <Button type="submit" variant="outline-info">
          Login
        </Button>
        <p
          // variant="primary"
          onClick={handleShow}
          centered
          className="mt-1 border-0 shadow-none ms-0 register-account-link"
          style={{ color: "blue" }}
        >
          Need an account ? Register here
        </p>
        {/* <div className="mt-2 text-primary"></div> */}
      </form>
    </div>
    
      {/* Bootstrap modal start  */}

      <Modal show={show} centered onHide={handleClose}>
        <Modal.Body className="">
          <div className="py-5">
            <Register />
          </div>
        </Modal.Body>
      </Modal>
      {/* Bootstrap modal end  */}
    </>
  );
};

export default Login;
