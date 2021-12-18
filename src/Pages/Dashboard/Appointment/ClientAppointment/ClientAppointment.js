import axios from "axios";
import { useEffect, useState } from "react";
import { Container,Table,Modal,Button } from "react-bootstrap";
import useAuth from "../../../../Hooks/useAuth";
// react icons 
import { AiFillDelete } from "react-icons/ai";
// react icons 
// react hot toast 
import toast, { Toaster } from 'react-hot-toast';
// react hot toast 

// state change korte hobe ekhane + shudhu email mathing gulo dekhate hobe 

const ClientAppointment = () => {
    const {user} = useAuth()
    const [orders, setOrders] = useState([]);
    const [flag, setFlag] = useState(false)
    // modal start 
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // modal end 

    useEffect(() => {
      const api = `https://fathomless-coast-82114.herokuapp.com/myappointment/${user?.email}`
      axios.get(api).then((res) => {
        setOrders(res.data);
        console.log(res.data)
      });
    }, [flag]);
  const handleCancelClientAppointment = id =>{
    const api = `http://localhost:3001/cancelclientappointment/${id}`
    axios.delete(api)
                .then(result => {
                    if (result.data.deletedCount) {
                     
                      if(!flag){
                        setFlag(true)

                      }
                      else{
                        setFlag(false)
                      }
                     
                      handleClose();
                      toast.success("appointment cancel successfully")
                        // const remain = allOrders.filter(order => order._id !== id);
                        // setAllOrders(remain)
                    }
                })
      
     
  }
  

  return (
    <Container>
      <h2 className="text-center my-4">All Appointsment {orders.length}</h2>
 
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Advocate Email </th>
                  <th>Advocate Name</th>
                  <th>My Email</th>
                  <th>My Name</th>
                  <th>My Contact Number</th>
                  <th>Status</th>
                  <th>Action</th>
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
                        <td style={{ fontSize: "14px" }}><button onClick={handleShow}  className="btn btn-outline-danger"><AiFillDelete/></button></td>
                        <Modal
                        centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure you want to delete?</Modal.Title>
        </Modal.Header>
        <Modal.Body>You can book your appointment again. </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="outline-danger" onClick={() => handleCancelClientAppointment(order._id)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
                      </tr>
                    );
                  })} 
              </tbody>
            </Table>
              {/* hot toast  */}
              <Toaster position="top-right" />
            {/* hot toast  */}
    </Container>
  );
};

export default ClientAppointment;
