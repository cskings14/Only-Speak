import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './loginPage.css';

const LoginPage = () => {
  const { loginUser } = useContext(AuthContext);
  const handleSubmit = e => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    username.length > 0 && loginUser(username, password);
  };

  return (
    // <section>
    //   <form onSubmit={handleSubmit}>
    //     <h1>Login </h1>
    //     <hr />
    //     <label htmlFor="username">Username</label>
    //     <input type="text" id="username" placeholder="Enter Username" />
    //     <label htmlFor="password">Password</label>
    //     <input type="password" id="password" placeholder="Enter Password" />
    //     <button type="submit">Login</button>
    //   </form>
    // </section>
    <Form onSubmit={handleSubmit} className="form">
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="username" placeholder="Enter username" id="username" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
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