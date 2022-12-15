import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import './Navbar.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  const { user, logoutUser } = useContext(AuthContext);

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Only Speak</Navbar.Brand>
        <Nav className="me-auto">
          {user ? (
            <>
              <Link to="/" className="links">Home</Link>
              {/* <Link to="/protected" className="links">Protected Page</Link> */}
              <button onClick={logoutUser} className="button" >Logout</button>
              <Navbar.Text className="who">
                Signed in as: {user.username}
              </Navbar.Text>
            </>
          ) : (
            <>
              <Link to="/login" className="links">Login</Link>

              <Link to="/register" className="links">Register</Link>


            </>
          )}
          {/* <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link> */}
        </Nav>
      </Container>
    </Navbar>

  );
};

export default Header;
