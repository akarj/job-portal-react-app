import "./Button.css";

const Button = ({ bgColor, text }) => {
  return (
    <button style={{ backgroundColor: bgColor }} className="buttonContainer">
      <span>{text}</span>
    </button>
  );
};

export default Button;
