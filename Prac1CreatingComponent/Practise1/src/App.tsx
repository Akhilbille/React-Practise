
import ListGroup from "./components/ListGroup";


const App = () => {
  const items = ["NewYork", "Chennai", "Coimbatore", "NewDelhi"];
  const handleOnClick= (item:string) => {console.log(item)}

  return (
    <div>
      <ListGroup items={items} heading="Cities" onClick={handleOnClick} />
    </div>
  );
  
}

export default App