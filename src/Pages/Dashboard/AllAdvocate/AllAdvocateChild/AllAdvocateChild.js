import React from "react";
import { Card, CardGroup, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const AllAdvocateChild = ({ advocate }) => {
  const { _id, displayName, image, category, role } = advocate;
  // console.log(advocate);
    let navigate = useNavigate();
  return (
    <div className="col-sm-12 col-md-4">
      <CardGroup className="">
        <Card>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{displayName}</Card.Title>
            <Card.Text>{category}</Card.Text>
            <Card.Text>{role}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Link to={`/dashboard/alladvocates/${_id}`}>
              <Button
                variant="outline-info" className=""
                // navigate(`/invoices/${newInvoice.id}`);
                >View Details</Button>
            </Link>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
};

export default AllAdvocateChild;
