import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="text-center " style={{ textAlign: "center" }}>
      <Link to="/advocateregister">
        <Button type="primary">Register as an Advocate</Button>{" "}
      </Link>
      {/* <Button type="primary">Primary Button</Button> */}

      <Link to="/clientregister">
        <Button type="primary my-2">Register as a Client</Button>{" "}
      </Link>
    </div>
  );
};

export default Register;
