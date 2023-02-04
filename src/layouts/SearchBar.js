import searchIComn from "../assets/images/icon_magnifying_glass.svg";

function SearchBar() {
  return (
    <div>
      <input type="text" />
      <div>
        <img src={searchIComn} alt="magnifying glass" />
      </div>
    </div>
  );
}

export default SearchBar;
