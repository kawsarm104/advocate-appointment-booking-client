import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
// import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
const Dashboard = () => {
  // Offcanvus

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // Offcanvus
  const { user, logOut,admin } = useAuth();
  // console.log(user.e)
  
  // console.log(user)
  return (
    <div className="">
      {/* offcanvus  */}
      {/* <Button variant="primary" onClick={handleShow}>
        Dashboard
      </Button> */}

      <Navbar variant="dark" bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand as ={NavLink} to="/dashboard">Advocate Appointment</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {/* <Nav.Link as={NavLink} to="/dashboard">
                Home
              </Nav.Link> */}
              {/* <Nav.Link as={NavLink} to="/about">
                About
              </Nav.Link> */}
              {/* <Nav.Link as={NavLink} to="/dashboard">
                dashboard
              </Nav.Link> */}
             
              {/* <Nav.Link as={NavLink} to="/dashboard/managealladvocate">
                Manage Advocate
              </Nav.Link> */}
              {/* <Nav.Link as={NavLink} to="/dashboard/myappointment">
                My Appointment
              </Nav.Link> */}
              {/* <Nav.Link as={NavLink} to="/dashboard/allappointment">
                All Appointment
              </Nav.Link> */}
            
              {admin? <> <Nav.Link as={NavLink} to="/dashboard/alladvocate">
                All Advocate
              </Nav.Link>
                <Nav.Link as={NavLink} to="/dashboard/allappointment">
                All Appointment
              </Nav.Link>
              <Nav.Link as={NavLink} to="/dashboard/managealladvocate">
                Manage Advocate
              </Nav.Link>
              <Nav.Link as={NavLink} to="/dashboard/makeadmin">
                Make Admin
              </Nav.Link></>: <>
                <Nav.Link as={NavLink} to="/dashboard/alladvocate">
                All Advocate
              </Nav.Link>
                <Nav.Link as={NavLink} to="/dashboard/clientappointment">
                Client Appointment
              </Nav.Link>
              <Nav.Link as={NavLink} to="/dashboard/advocateappointment">
                Advocate Appointment
              </Nav.Link>
              </>}
              {user.email ? (
                <>
                  {/* <p>Name: {user?.displayName}</p>... */}
                  <Nav.Link
                    as={NavLink}
                    to="/login"
                    onClick={logOut}
                    className="border-0"
                  >
                    {" "}
                    Sign Out
                  </Nav.Link>
                </>
              ) : (
                <Nav.Link as={NavLink} to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <Offcanvas show={show} onHide={handleClose} className="w-25">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h4 className=""> Welcome {user.displayName}</h4>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Link to="/dashboard" onClick={handleClose}>
            Dashboard
          </Link>{" "}
          <br />
          <Link to="/dashboard/alladvocate" onClick={handleClose}>
            Advocate List
          </Link>
          <br />
          <Link to="/dashboard/myappointment" onClick={handleClose}>
            My Appointment
          </Link>
        </Offcanvas.Body>
      </Offcanvas> */}
      {/* offcanvus  */}
      <h4 className="text-end"> Welcome {user.displayName}</h4>
      <Container fluid>
        <>
          <>
            <Outlet></Outlet>
          </>
        </>
      </Container>
      {/* <span>{role} Welcome to dasghboard </span> */}
    </div>
  );
};

export default Dashboard;
