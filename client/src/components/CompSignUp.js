import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Col,
  Container,
  Row
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../resources/SignUp.css";
import Axios from "axios";

export default function ({history}) {
  const [email, setEmail] = useState();
  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();
  const [fullName, setFullname] = useState();

  const onChange1 = (e) => {
    if (e.target.value.length > 5) {
      setEmail(e.target.value);
    }
  };

  const onChange2 = (e) => {
    if (e.target.value.length > 5) {
      setFullname(e.target.value);
    }
  };

  const onChange3 = (e) => {
    if (e.target.value.length > 5) {
      setUsername(e.target.value);
    }
  };

  const onChange4 = (e) => {
    if (e.target.value.length > 5) {
      setPassword(e.target.value);
    }
  };

  const signUp = (e) => {
    e.preventDefault();
    Axios.post("https://project-ig-clone.herokuapp.com/users", {
      email,
      password,
      username
    }).then((res) => {
      localStorage.setItem("user", JSON.stringify(res.data.email));
      setUser(res.data.email)
    });
    history.push('/account')
  };

  return (
    <Container>
      <Row>
        <Col sm="6">
          <Form>
            <div className="top">
              <h1>Instagram</h1>
              <p>Sign up to see photos and videos from your friends.</p>
              <FormGroup>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="Mobile Number or Email"
                  onChange={onChange1}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="text"
                  name="fullname"
                  id="fullname"
                  placeholder="Full Name"
                  onChange={onChange2}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="textl"
                  name="username"
                  id="username"
                  placeholder="Username"
                  onChange={onChange3}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="password"
                  name="password"
                  id="examplepassword"
                  placeholder="Password"
                  onChange={onChange4}
                />
              </FormGroup>
              <FormGroup>
                <Button className="btn" color="primary" onClick={signUp}>
                  Sign up
                </Button>
              </FormGroup>
              <div>
                <span>
                  By signing up, you agree to our Terms , Data Policy and
                  Cookies Policy
                </span>
              </div>
            </div>
            <div className="bottom">
              <span>
                Have an account? <a href="/account/login">Log in</a>
              </span>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
