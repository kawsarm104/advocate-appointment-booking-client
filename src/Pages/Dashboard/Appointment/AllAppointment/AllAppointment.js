import axios from "axios";
import { useEffect, useState } from "react";
import { Container,Table } from "react-bootstrap";



const AllAppointment = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const api = "https://fathomless-coast-82114.herokuapp.com/appointment"
    axios.get(api).then((res) => {
      setOrders(res.data);
      console.log(res.data)
    });
  }, []);
  
  

  return (
    <Container>
      <h2 className="text-center my-4">All Appointsment {orders.length}</h2>
 
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Advocate Email </th>
                  <th>Advocate Name</th>
                  <th>Client Email</th>
                  <th>Client Name</th>
                  <th>Client Contact Number</th>
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
                        <td style={{ fontSize: "14px" }}>{order.phone}</td>
                  
                        <td>
                        
                        <td style={{ fontSize: "14px" }}>{order.status.toUpperCase()}</td>
                        </td>
                       
                      </tr>
                    );
                  })} 
              </tbody>
            </Table>
    </Container>
  );
};

export default AllAppointment;
