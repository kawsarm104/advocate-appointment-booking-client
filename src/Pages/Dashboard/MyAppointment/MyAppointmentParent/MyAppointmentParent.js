import axios from "axios";
import { useEffect, useState } from "react";
import { Container,Table } from "react-bootstrap";


import "./MyAppointment.css";

const MyAppointmentParent = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const api = "https://fathomless-coast-82114.herokuapp.com/appointment"
    axios.get(api).then((res) => {
      setOrders(res.data);
      console.log(res.data)
    });
  }, []);
  // console.log(orders.length)

  const handleStatus = (status, id) => {
    console.log(status,id,"dkllsdlklslksldkklkl")
    let modifiredOrders = [];
    orders.forEach((order) => {
      if (order._id === id) {
        order.status = status;
      }
      modifiredOrders.push(order);
    });
    setOrders(modifiredOrders);

    const modifiredStatus = { id, status };

    const url = "https://fathomless-coast-82114.herokuapp.com/updateappointmentstauts";
    axios.patch(url, modifiredStatus).then((res) => {
      const data = res.data;
      if (data.acknowledged) {
        console.log("Status Update Successfully!");
      } else {
      console.log("Something Went Wrong!");
      }
    });
  };

  

  return (
    <Container>
      <h2 className="text-center my-4">My Appointsment {orders.length}</h2>
 
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Advocate Email </th>
                  <th>Advocate Name</th>
                  <th>Client Email</th>
                  <th>Client Name</th>
                  <th>status</th>
                </tr>
              </thead>
              <tbody>
                 {
                  orders.map((order) => {
                    console.log(order);
                    return (
                      <tr
                        className="manage_all_order"
                        key={order._id + "sodsfs"}
                      >
                        <td style={{ fontSize: "14px" }}>{order.advocateEmail}</td>
                        <td style={{ fontSize: "14px" }}>{order.advocateName}</td>
                        <td style={{ fontSize: "14px" }}>{order.clientEmail}</td>
                        <td style={{ fontSize: "14px" }}>{order.clientName}</td>
                  
                        <td>
                          <select
                            className={
                              order.status === "pending"
                                ? "btn_round pending"
                                : order.status === "done"
                                ? "btn_round done"
                                : "btn_round on-going"
                            }
                            style={{
                              minHeight: "28px",
                              width: "100px",
                              borderRadius: "5px",
                              padding: "0 5px",
                              outline: "none",
                            }}
                            name="cars"
                            id="cars"
                            onChange={(e) =>
                              handleStatus(e.target.value, order._id)
                            }
                            defaultValue={order.status}
                          >
                            <option value="pending">Pending</option>
                            <option value="visiting">Visiting</option>
                            <option value="done">Done</option>
                          </select>
                        </td>
                       
                      </tr>
                    );
                  })} 
              </tbody>
            </Table>
    </Container>
  );
};

export default MyAppointmentParent;
