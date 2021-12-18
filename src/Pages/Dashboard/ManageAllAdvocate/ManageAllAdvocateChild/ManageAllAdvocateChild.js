import React from "react";
import {Button} from "react-bootstrap"
const ManageAllAdvocateChild = (props) => {
  const {_id, displayName, email, mobile, barnumber, nid,role } = props.advocate;
  // console.log(props.advocate.barnumber)
  const {flag} = props
  const {setFlag} = props


  // const [flag, setFlag] = useState(false)
  const roleUpdate = id => {
    const role = 'advocate';
    const api = `https://fathomless-coast-82114.herokuapp.com/roleupdate/${id}`
    fetch(api, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ role }),
    })
        .then((res) => res.json())
        .then((result) => {
          setFlag(!flag)
          console.log(result)
        });
};


  return (
    <tr>
      <td>{props.index}</td>
      <td>{displayName}</td>
      <td>{email}</td>
      <td>{mobile}</td>
      <td>{barnumber}</td>
      <td>{nid}</td>
      <td>
        {/* <Button variant="primary">Add Advocate</Button> */}
        {
          role === 'advocate' ?
           <p className="text-success" >MADE {role.toUpperCase()}</p>
            :
            <button className="btn btn-warning" onClick={() => roleUpdate(_id)}>{role?.toUpperCase()}</button>
          }
      </td>
      <td>
        <Button variant="danger">Delete</Button>
      </td>
    </tr>
  );
};

export default ManageAllAdvocateChild;
