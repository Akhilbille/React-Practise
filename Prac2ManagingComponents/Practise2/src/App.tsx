import { useState } from "react";
import Navbar from "./components/Navbar";
import Carts from "./components/Carts";

function App() {
  const [cartItem,setCartItem] = useState(['Product1','Product2']);
  const handleOnClick = ()=>{
    setCartItem([]);
  }

  return (
    <div>
      <Navbar itemsCount={cartItem.length} />
      <Carts items={cartItem} onClick={handleOnClick} />

      
    </div>
  )
}

export default App;
