import React from "react";
import { CompAccount } from "../components";
import { Container } from "reactstrap";
import { TopMenu } from "../components";
// import "../resources/Account.css";

const Account = ({history}) => {
  return (
    <div style={{ color: "FAFAFA" }}>
      <TopMenu />
      <Container mt-100>
        <CompAccount history={history}/>
      </Container>
    </div>
  );
};

export default Account;
