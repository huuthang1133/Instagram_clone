import React from "react";
import { Row } from "reactstrap";

import PostListItem from "./PostListItem";

const PostList = ({ posts }) => {
  return (
    <Row>
      {posts.map((item) => {
        return (
          <PostListItem data={item} reactions={item.reactions} key={item._id} />
        );
      })}
    </Row>
  );
};

export default PostList;
