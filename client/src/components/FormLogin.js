import React, { useState } from "react";
import axios from "axios";
import { Button, Form, FormGroup, Input } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../resources/FormLogin.css";

export default function FormLogin( {history} ) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || "");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFillEmail, setFillEmail] = useState(false);
  const [isFillPassword, setFillPassword] = useState(false);

  const onChange1 = (e) => {
    if (e.target.value.length > 5) {
      setEmail(e.target.value);
      setFillEmail(true);
    }
  };
  const onChange2 = (e) => {
    if (e.target.value.length > 5) {
      setPassword(e.target.value);
      setFillPassword(true);
    }
  };
  const handleLogIn = async (e) => {
    const res = await axios.post("https://project-ig-clone.herokuapp.com/login", {
        email,
        password
      })
    setUser(res.data);
    localStorage.setItem("cool-jwt", res.data.accessToken);
    localStorage.setItem("user", JSON.stringify(res.data.user));
    history.push('/')
  };

  return (
    <Form>
      <div className="top">
        <h1>Instagram</h1>
        <FormGroup>
          <Input
            type="email"
            name="email"
            placeholder="Phone number, username, or email"
            onChange={onChange1}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="Password"
            onChange={onChange2}
          />
        </FormGroup>
        <FormGroup>
          <Button className="btn" color="primary" onClick={handleLogIn}>
            Log in
          </Button>
        </FormGroup>
        <div>
          <span>
            <a href="#">Forgot password?</a>
          </span>
        </div>
      </div>
      <div className="bottom">
        <span>
          Don't have an account? <a href="/account/signup">Sign up</a>
        </span>
      </div>
    </Form>
  );
}
