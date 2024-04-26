
import { useState } from "react";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import LikeButton from "./components/LikeButton";



const App = () => {
  const items = ["NewYork", "Chennai", "Coimbatore", "NewDelhi"];
  const handleOnClick= (item:string) => {console.log(item)}
  const [onClickAlert,setOnClickAlert] = useState(false); 
  

  return (
    <div>
      <ListGroup items={items} heading="Cities" onClick={handleOnClick} />
      {onClickAlert && <Alert onClose={()=>setOnClickAlert(false)}>Its an Alert!</Alert> }
      <Button onClick={()=>setOnClickAlert(true)}></Button>
      <LikeButton></LikeButton>
      
    </div>
  );
  
}

export default App