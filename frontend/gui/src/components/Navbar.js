import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

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
              <Link to="/">Home</Link>
              <Link to="/protected">Protected Page</Link>
              <button onClick={logoutUser}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              
              <Link to="/register">Register</Link>
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

// {user ? (
//   <>
//     <Link to="/">Home</Link>
//     <Link to="/protected">Protected Page</Link>
//     <button onClick={logoutUser}>Logout</button>
//   </>
// ) : (
//   <>
//     <Link to="/login">Login</Link>
//     <Link to="/register">Register</Link>
//   </>
// )}

{/* <nav>
      <div>
        <h1>App Name</h1>
        <div>
          {user ? (
            <>
              <Link to="/">Home</Link>
              <Link to="/protected">Protected Page</Link>
              <button onClick={logoutUser}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav> */}