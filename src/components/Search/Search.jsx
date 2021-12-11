import "./Search.css";
import ThemeContext from "../../context/ThemeContext";
import { useContext } from "react";

const Search = ({ search, setSearch }) => {
  const context = useContext(ThemeContext)

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className={`Search-container ${!!context.darkMode ? "dark-search-container" : "light-search-container"}`}>
      <input
        className="Search"
        type="text"
        onChange={handleChange}
        value={search}
        placeholder="Search for a Character"
      />
    </div>
  );
};

export default Search;
