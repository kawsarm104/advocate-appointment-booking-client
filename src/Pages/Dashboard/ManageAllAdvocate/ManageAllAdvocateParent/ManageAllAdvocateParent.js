import React,{useState} from "react";
import { Container, Table } from "react-bootstrap";
import useAllAdvocate from "../../../../Hooks/useAllAdvocate";
import ManageAllAdvocateChild from "../ManageAllAdvocateChild/ManageAllAdvocateChild";

const ManageAllAdvocateParent = () => {
  const [flag,setFlag] = useState(false)

  const [allAdvocate] = useAllAdvocate(flag);
  return (
    <Container>
      <h2 className="text-center my-2">Manage All Advocate........</h2>
      <Table  striped bordered rounded hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile Number</th>
            <th>Bar Number</th>
            <th>NID Number</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allAdvocate.map((advocate, index) => (
            <ManageAllAdvocateChild
              flag={flag}
              setFlag={setFlag}
              key={advocate._id}
              index={index}
              advocate={advocate}
            ></ManageAllAdvocateChild>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ManageAllAdvocateParent;
