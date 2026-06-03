import "./FilterButton.css";

function FilterButton({ handleClick, value, title, icon, active }) {
  return (
    <button
      onClick={handleClick}
      value={value}
      className={`filter-button ${active}`}
    >
      {icon}
      <span>{title}</span>
    </button>
  );
}

export default FilterButton;
