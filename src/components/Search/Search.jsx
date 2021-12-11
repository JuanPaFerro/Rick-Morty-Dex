import "./Search.css";
import ThemeContext from "../../context/ThemeContext";
import { useCallback, useContext, useRef } from "react";

const Search = ({ search, setSearch }) => {
  const context = useContext(ThemeContext);
  const searchInput = useRef(null);

  const handleChange = useCallback(() => {
    setSearch(searchInput.current.value);
  }, []);

  return (
    <div
      className={`Search-container ${
        !!context.darkMode ? "dark-search-container" : "light-search-container"
      }`}
    >
      <input
        className="Search"
        type="text"
        onChange={handleChange}
        value={search}
        ref={searchInput}
        placeholder="Search for a Character"
      />
    </div>
  );
};

export default Search;
