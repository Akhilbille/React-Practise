import { useState } from "react";
interface Props{
    items: string[];
    heading: string;
    onSelectItem: (item:string) => void; 
}

function ListGroup({items,heading, onSelectItem}:Props) {
  
  //   items = [];
  
  const [selectedIndex,setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      {/* Conditional Rendering */}
      {items.length === 0 && <p>No items found.</p>}

      <ul className="list-group">
        {/* Rendering list items */}
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            // Handle Event
            onClick={() => {
                setSelectedIndex(index);
                onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </> 
  );
}

export default ListGroup;
