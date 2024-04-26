import { useState } from "react";
interface Props{
    items:string[];
    heading:string;
    onClick : (item:string) => void;
}

const ListGroup = ({items,heading,onClick}:Props) => {  
  const [selectedIndex,setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && "Items Not Found"}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onClick(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
