interface Props{
    onClick:()=> void;
}
const Button = ({onClick}:Props) => {
  return (
    <div>
      <button type="button" className="btn btn-primary"
      onClick={onClick}>
        Primary
      </button>
    </div>
  );
}

export default Button