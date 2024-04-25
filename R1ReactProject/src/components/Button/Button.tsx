import styles from "./Button.module.css";

interface Props {
  children: String;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <div>
      <button
        type="button"
        className={[styles.btn,styles['btn-'+color]].join(' ')} //{'btn btn-'+ color}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
