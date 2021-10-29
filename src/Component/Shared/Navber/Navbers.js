import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../Images/logo/logo-1.png";
import useAuth from "../../Hooks/UseAuth";

const Navbers = () => {
  const { signWithGoogle, user, setUser, logOut } = useAuth();
  console.log(user);
  const handleLoginOutBtn = () => {
    return logOut;
  };
  return (
    <div>
      <Navbar sticky="top" expand="lg" bg="light" variant="">
        <Container>
          <Navbar.Brand href="#home">
            <img
              style={{ width: "70px" }}
              className=" rounded"
              src={logo}
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="text-dark"
          />
          <Navbar.Collapse id="responsive-navbar-nav" className="text-dark">
            <Nav className="me-auto">
              <h5>{user.displayName}</h5>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/service">
                Service
              </Nav.Link>
              <Nav.Link as={Link} to="/booking">
                My Booking
              </Nav.Link>
              {user.email ? (
                <Button
                  onClick={logOut}
                  variant="outline-success "
                  className="m-2"
                  size="sm"
                >
                  Log-out
                </Button>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
              <img
                style={{ width: "50px" }}
                className="rounded-circle "
                src={user.photoURL}
                alt=""
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbers;
