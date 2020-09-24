import React from "react";
import { CompHome } from "../components";
import { Container } from "reactstrap";
import { TopMenu } from "../components";

const Home = () => {
  return (
    <div style={{ color: "FAFAFA" }}>
      <TopMenu />
      <Container mt-100>
        <CompHome />
      </Container>
    </div>
  );
};

export default Home;
