import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";



const Like = () => {
    const [status,setStatus] = useState(false); 
    if (status) return (
      <AiFillHeart color="ff6b81" onClick={() => setStatus(false)} size={40} />
    );
    return <AiOutlineHeart onClick={() => setStatus(true)} size={40} />;
};

export default Like;
