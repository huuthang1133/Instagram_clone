import React, { useState } from "react";

import { Col, Input, Form, FormGroup, Label, Button } from "reactstrap";

import axios from "axios";

export default function ({history}) {
  const user = JSON.parse(localStorage.getItem("user"));
  const [post, setPost] = useState([]);
  const [file, setFile] = useState([]);

  const onChange1 = (e) => {
    if (e.target.value.length > 1) {
      setPost(e.target.value);
    }
  };

  const onChange2 = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const submitPost = (e) => {
    const data = new FormData();
    data.append("email", user);
    data.append("caption", post);
    data.append("imageUrl", file);
    axios
      .post("https://project-ig-clone.herokuapp.com/posts", data)
      .then((res) => console.log(res.data));
  };

  return (
    <div>
      <Form onSubmit={submitPost}>
        <FormGroup row>
          <Label sm="2" for="exampleName">
            Caption
          </Label>
          <Col sm="10">
            <Input
              sm="10"
              type="username"
              name="post"
              id="exampleName"
              placeholder="Caption"
              onChange={onChange1}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleFile" sm={2}>
            File
          </Label>
          <Col sm={10}>
            <Input
              type="file"
              name="imageUrl"
              id="exampleFile"
              onChange={onChange2}
            />
          </Col>
        </FormGroup>
        <Col sm="2">
          <Button>Submit</Button>
        </Col>
      </Form>
    </div>
  );
}
