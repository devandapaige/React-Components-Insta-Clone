// Look at the number of likes on line 26. Right now it's hard coded to '100'.
// Use a piece of data coming in through props to display the correct number of likes.
// You will also add an onClick handler that utilizes `likePost` to increase the count of likes.
// (As a stretch goal, you might want to prevent your user from "liking" the same post more than once.)
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";

const LikeSection = (props) => {
  const [likes, setLikes] = useState(props.numberofLikes);
  // 🔥 Make sure the parent of LikeSection is passing the right props!
  return (
    <div>
      <div className="like-section" key="likes-icons-container">
        <div
          onClick={() => {
            setLikes(likes + 1);
          }}
        >
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className="like-section-wrapper">
          <FontAwesomeIcon icon={faComment} />
        </div>
      </div>
      <p className="like-number">{likes} likes</p>
    </div>
  );
};
export default LikeSection;
