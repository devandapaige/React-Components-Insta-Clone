import React from "react";
import Comment from "./Comment";
import "./Comments.css";

const Comments = (props) => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  return (
    <div>
      {/* map through the comments prop and render a Comment for every piece of data */}
      {props.comments.map((i) => {
        return <Comment key={i.id} comment={i} />;
      })}
    </div>
  );
};

export default Comments;
