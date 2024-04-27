interface Props{
    itemsCount: number;
}

const Navbar = ({itemsCount}:Props) => {
  return (
    <div>Count : {itemsCount}</div>
  )
}

export default Navbar