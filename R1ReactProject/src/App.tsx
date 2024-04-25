import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";
import {BsFillCalendarFill} from 'react-icons/bs'
import Like from "./components/Like";

function App() {
  const [alertVisible,setAlertVisibility] = useState(false);
  return (
    
    <div>
      <Like></Like>
        <BsFillCalendarFill color="red" size='50'/>
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>Error Occured</Alert>}
      <Button  onClick={() => setAlertVisibility(true)}>
        Submit
      </Button>
    </div>
  );
}

export default App;
