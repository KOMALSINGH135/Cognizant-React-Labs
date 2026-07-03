import React from "react";

function Post(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
      <hr />
    </div>
  );
}

export default Post;