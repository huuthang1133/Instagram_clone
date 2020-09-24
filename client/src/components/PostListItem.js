import React, { useState, useEffect } from "react";

import "../resources/Home.css";

import heart from "../assests/heart.png";

import axios from "axios";

import { Col, Input } from "reactstrap";

const PostListItem = ({ data, reactions }) => {
  const [post, setPost] = useState(data);
  let sumLike = reactions.filter((item) => item.like === true);
  const [count, setCount] = useState(sumLike.length);
  const [like, setLike] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(post.comments);
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    if (data.reactions.length > 0) {
      const reactions = data.reactions;
      const found = reactions.find((item) => item.user.email === user);
      if (found) {
        setLike(found.like);
      }
    } else {
      setLike(false);
    }
  }, []);

  const onChange1 = async (e) => {
    if (e.target.value.length > 0) {
      setComment(e.target.value);
    }
  };

  const onKeyup = async (e, post) => {
    let text = e.target.value;
    if (!text) {
      return;
    }
    text = text.trim();
    if (e.keyCode === 13) {
      const res = await axios.patch(
        `https://project-ig-clone.herokuapp.com/posts/${post._id}`,
        {
          content: comment,
          email: user
        }
      );
      setComment("");
      setComments(comments.concat(res.data));
    }
  };

  const likePost2 = async (e) => {
    setLike(!like);
    if (!like) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
    const res = await axios.post(
      `https://project-ig-clone.herokuapp.com/posts/${data._id}`,
      {
        email: user,
        like: !like
      }
    );
    setPost(res.data);
    // let sumLike = res.data.reactions.filter((item) => item.like === true);
    // setCount(sumLike.length);
  };
  return (
    <Col sm="8" className="post">
      <div className="post-header">
        <Col sm="1">
          <img src={post.user.profilePictureUrl} className="post-image" />
        </Col>
        <h6>{post.user.name}</h6>
      </div>
      <img src={post.imageUrl} alt="thumb" />
      {like ? (
        <img
          src={heart}
          style={{ width: 32, marginLeft: 10 }}
          onClick={(e) => likePost2(e, post)}
        />
      ) : (
        <i class="far fa-2x fa-heart" onClick={(e) => likePost2(e, post)} />
      )}
      {count > 0 ? <h5 style={{ marginLeft: 10 }}>{count} lượt thích</h5> : ""}
      <div className="post-content">
        <h6>
          {post.user.name}: {post.caption}
        </h6>
        <>
          {comments?.map((comment) => (
            <h6>
              {comment.user.name}: {comment.content}
            </h6>
          ))}
        </>
      </div>
      <Input
        value={comment}
        className="post-comment"
        placeholder="Thêm bình luận"
        onChange={(e) => onChange1(e)}
        onKeyUp={(e) => onKeyup(e, post)}
      >
        <div>Đăng</div>
      </Input>
    </Col>
  );
};

export default PostListItem;
