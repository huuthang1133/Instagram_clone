import React, { useState, useEffect } from "react";
import PostList from "./PostList";

import axios from "axios";

export default function () {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://project-ig-clone.herokuapp.com/posts").then((res) => {
      setPosts(res.data);
    });
  }, []);

  return <PostList posts={posts} />;
}
