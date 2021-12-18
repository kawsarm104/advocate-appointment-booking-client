import React, { useEffect,useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import axios from 'axios'
import {Container, Row, Col,Card,Button,Modal,Form} from "react-bootstrap"
import './SingleAppointment.css'
import useAuth from '../../../../Hooks/useAuth';
// react hot toast 
import toast, { Toaster } from 'react-hot-toast';
// react hot toast 

const SingleAdvocateData = () => {
  
    const { id } = useParams();
    const [advocate, setAdvocate] = useState({})
     useEffect(() => {
       const url = `https://fathomless-coast-82114.herokuapp.com/advocates/${id}`;
       axios.get(url).then((res) => {
           setAdvocate(res.data);
          //  console.log(res.data,'found')
       });
     }, []);
    const { image, displayName, mobile,role,email } = advocate;
    // bootstrap modal start 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // bootstrap modal end 
  // React Hook Form start
  const { user } = useAuth();
  // console.log(user,"user data")
  
  // console.log(user.email)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
    const onSubmit = (data) => {
      console.log(data)
      const api = "https://fathomless-coast-82114.herokuapp.com/appointment"
    
    axios
      .post(api, data)
      .then((res) => {
        // console.log(res);
        if (res.data.insertedId) {
          reset();
          handleClose()
          toast.success("Appointment Booked Successfullly")
          
        }
      });
  };
  // React Hook Form end
    return (
      <Container>
        <Row>
          <Col sm={12} md={7}>
          <Card.Img variant="top" src={image}  className="img-fluid" alt="advocate-image" />
       
          </Col>
          <Col sm={12} md={5}>
            <h3>{displayName}</h3>
            <h3>{mobile}</h3>
            <h3>{role}</h3>
            <Button variant="info" onClick={handleShow}>Book Appointment</Button>
          </Col>
        </Row>

        {/* modal start  */}
        <>
 

      <Modal show={show} centered onHide={handleClose}>

        <Modal.Body>  
            <h2 className="text-info text-center">Add Appointment</h2>    
            <form
              className="appointment-form  rounded "
              onSubmit={handleSubmit(onSubmit)}
            >
                 <Form.Label>Advocate Name</Form.Label>
              <input defaultValue={displayName} {...register("advocateName")} />
              {/* <Form.Label>Advocate Email</Form.Label> */}
              <input
              type="hidden"
                defaultValue={email}
                {...register("advocateEmail", { required: true })}
              />
              {errors.email && (
                <span className="error">This field is required</span>
              )}
                <Form.Label>Your Name</Form.Label>
              <input defaultValue={user.displayName} {...register("clientName")} />
              <Form.Label>Your Email</Form.Label>
              <input
              
                defaultValue={user.email}
                {...register("clientEmail", { required: true })}
              />
              {errors.email && (
                <span className="error">This field is required</span>
              )}
         
   
        
     
         
         <Form.Label>Your Phone Number</Form.Label>
              <input
                placeholder="Phone number"
                defaultValue=""
                {...register("phone", { required: true })}
              />
              {errors.phone && (
                <span className="error">Phone number is required</span>
              )}
              <input
                type="submit"
                // onClick={notify}
                className="btn btn-info"
                value="Book Appointment"
              />
            </form>
            </Modal.Body>
     
      </Modal>
    </>
        {/* modal end  */}
         {/* hot toast  */}
         <Toaster position="top-right" />
            {/* hot toast  */}
      </Container>
    );
};

export default SingleAdvocateData;