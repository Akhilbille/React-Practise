import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

const LikeButton = () => {
  const [likeStatus, setLikeStatus] = useState(false);

  if (likeStatus)
    return (
      <AiFillHeart size={40} color="red" onClick={() => setLikeStatus(false)} />
    );
  return (
    <div>
      <AiOutlineHeart size={40} onClick={() => setLikeStatus(true)} />
    </div>
  );
};

export default LikeButton;
