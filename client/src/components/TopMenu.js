import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Container
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../resources/Home.css";
import Axios from "axios";

export default function TopMenu() {
  const email = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState("");
  useEffect(() => {
    Axios.post("https://project-ig-clone.herokuapp.com/users/get", {
      email
    }, []).then((res) => setUser(res.data));
  }, []);
  console.log(user);
  return (
    <Container style={{ marginTop: 0 }}>
      <Navbar light expand="md" className="content ">
        <NavbarBrand href="/">
          <h2>Instagram</h2>
        </NavbarBrand>
        <Nav className="ml-auto mr-auto" navbar>
          <NavItem>
            <input />
          </NavItem>
        </Nav>
        <NavbarText>
          <i class="fas fa-lg fa-home" />
        </NavbarText>
        <NavbarText>
          <i class="fas fa-lg fa-location-arrow" />
        </NavbarText>
        <NavbarText>
          <i class="far fa-lg fa-compass" />
        </NavbarText>
        <NavbarText>
          <i class="far fa-lg fa-heart" />
        </NavbarText>
        <NavbarText>
          <NavLink href="/account/">
            <img
              src={user.profilePictureUrl}
              style={{ width: 41, height: 41, borderRadius: 50 }}
            />
          </NavLink>
        </NavbarText>
      </Navbar>
    </Container>
  );
}
