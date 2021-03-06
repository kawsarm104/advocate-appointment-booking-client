import React, { useState } from "react";
import { Button, Form,Alert } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import useFirebase from "../../../../Hooks/useFirebase";

const AdvocateRegister = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [nid, setNid] = useState("");
  const [mobile, setMobile] = useState("");
  const [barnumber, setBarnumber] = useState("");
  const [category, setCategory] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [textArea, setTextArea] = useState("");
  const [image, setImage] = useState(null);
  const [flag, setFlag] = useState(true);

  const [show, setShow] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");


  const navigate = useNavigate();
  const location = useLocation();
  const { setUser, handleUserRegister, updateName, setIsLoading } =
    useFirebase();
  const url = location.state?.from || "/";
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!image) {
      return;
    }
    if (password === confirmpassword) {
      handleUserRegister(email, password)
        .then((result) => {
          setIsLoading(true);

          // save user to the database
          const formData = new FormData();
          formData.append("displayName", displayName);
          formData.append("email", email);
          formData.append("image", image);
          formData.append("nid", nid);
          formData.append("mobile", mobile);
          formData.append("barnumber", barnumber);
          formData.append("gender", gender);
          formData.append("category", category);
          formData.append("password", password);
          formData.append("confirmpassword", confirmpassword);
          formData.append("textArea", textArea);
          // const api="http://localhost:3001/advocateregister";
          const api="https://fathomless-coast-82114.herokuapp.com/advocateregister";

          fetch(api, {
            method: "POST",
            body: formData,
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                console.log(data);
                console.log("Registration Successfull");
                setFlag(!flag);
              }
            })
            .catch((error) => {
              console.error("Error:", error);
            });
          // save user to the database
          setUser(result.user);
          navigate(url);
          updateName(displayName);
          setErrorMessage("");
          // window.location.reload(); //for stopping reload
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
          setErrorMessage(errorMessage);
          setShow(true);
        });
    } else {
      setPasswordErrorMessage("Password and Confirm Password did not matched ");
      setShow(true);
      // alert("password and confirm password did not matched")
    }
  };

  return (
    <div>
      <h1 className="my-3" v>
        Register as an Advocate
      </h1>
      <form onSubmit={handleSubmit}>
        <Form.Label>Name</Form.Label>
        <input
          label="Name"
          required
          onChange={(e) => setDisplayName(e.target.value)}
          variant="standard"
        />

        <Form.Label>Email</Form.Label>
        <input
          label="Email"
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
          variant="standard"
        />

        <Form.Label>NID Number</Form.Label>
        <input
          type="number"
          required
          onChange={(e) => setNid(e.target.value)}
          variant="standard"
        />
        <Form.Label>Mobile Number</Form.Label>
        <input
          required
          type="number"
          onChange={(e) => setMobile(e.target.value)}
        />
        <Form.Label>Bar Council Membership Number</Form.Label>
        <input
          required
          type="number"
          onChange={(e) => setBarnumber(e.target.value)}
        />

        <div className="my-2">
          <Form.Label>Category: </Form.Label>
          <select
            onChange={(e) => setCategory(e.target.value)}
            required
            style={{}}
          >
            <option value="select">Select</option>
            <option value="civil">Civil</option>
            <option value="criminal">Criminal</option>
          </select>
          <Form.Label>Gender: </Form.Label>
          <select
            onChange={(e) => setGender(e.target.value)}
            required
            style={{}}
          >
            <option value="Select">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <Form.Label>Password</Form.Label>
        <input
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <Form.Label>Confirm Password</Form.Label>
        <input
          type="password"
          required
          onChange={(e) => setConfirmpassword(e.target.value)}
        />
        <span className="text-danger">{passwordErrorMessage}</span> <br/>
        <Form.Label>Enter your Details/Personal Information</Form.Label>
        <textarea 
        type='text'
        name="details" rows="4" cols=""
        className="w-100"
        required
          onChange={(e) => setTextArea(e.target.value)}
        />
       <Form.Label>Profile Picture</Form.Label>
        <input
          accept="image/*"
          type="file"
          required
          onChange={(e) => setImage(e.target.files[0])}
        />
        <br />
        {errorMessage && show && <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>{errorMessage}</Alert.Heading>
        
      </Alert>}

        <Button variant="outline-primary" type="submit">
          Register
        </Button>
      
      </form>
    </div>
  );
};

export default AdvocateRegister;
