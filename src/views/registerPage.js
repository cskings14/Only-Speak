import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './registerPage.css';

function Register() {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const { registerUser } = useContext(AuthContext);

  const handleSubmit = e => {
    e.preventDefault();
    // const email = e.target.email.value;
    // const username = e.target.username.value;
    // const password = e.target.password.value;
    // const password2 = e.target.password2.value;
    username.length > 0 && registerUser(fname, lname, username, email, password, password2);
  };

  return (
    <Form onSubmit={handleSubmit} className="form">

      <Form.Group className="mb-3">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="name" placeholder="First Name" id="fname" onChange={e => setFName(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="name" placeholder="Last Name" id="lname" onChange={e => setLName(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" id="email" onChange={e => setEmail(e.target.value)} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control type="username" placeholder="Enter username" id="username" onChange={e => setUsername(e.target.value)} />
        <Form.Text className="text-muted">
          We'll never share your username with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" id="password" onChange={e => setPassword(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Resubmit Password</Form.Label>
        <Form.Control type="password" placeholder="Password" id="password2" onChange={e => setPassword2(e.target.value)} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Register;