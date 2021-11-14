import "./InputBox.css";

const InputBox = () => {
  return (
    <div className="searchBoxContainer">
      <input type="text" name="search" title="Search Box" />
      <button>Search</button>
    </div>
  );
};

export default InputBox;
