import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './loginPage.css';

const LoginPage = () => {
  // uses loginUser of AuthContext for authentication. If handleSubmit works, they should go to the base route
  const { loginUser, user } = useContext(AuthContext);
  const handleSubmit = e => {
    e.preventDefault();
    if (!user) {
    const username = e.target.username.value; // gets the username
    const password = e.target.password.value; // gets the password
    username.length > 0 && loginUser(username, password); // usernaem and password are arguments for loginUser
    }
    if (user) { // stops the user from trying to login
      alert("You are already signed in. Sign out to log in again.")
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="form">
      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control type="username" placeholder="Enter username" id="username" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" id="password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default LoginPage;