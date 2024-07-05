import clsx from "clsx";
import css from "./Button.module.scss";

const Button = ({ type = "button", className, title, onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(css.button, className && className)}
    >
      {title}
    </button>
  );
};

export default Button;
