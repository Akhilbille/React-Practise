interface Props{
    items:string[];
    onClick: () => void;
}



const Carts = ({items,onClick}:Props) => {
  return (
    <>
      <div>
        {items.map((item) => (
          <p>{item}</p>
        ))}
      </div>
      <button onClick={onClick} >Click me</button>
    </>
  );
}

export default Carts