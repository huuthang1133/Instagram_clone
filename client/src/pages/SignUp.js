import React from "react";
import { CompSignUp } from "../components";
import { Container } from "reactstrap";

const SignUp = ( {history} ) => {
  return (
    <div style={{ color: "FAFAFA" }}>
      <Container mt-100>
        <CompSignUp history={history}/>
      </Container>
    </div>
  );
};

export default SignUp;
