import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import "./Header.css";

const Header = () => {
  const context = useContext(ThemeContext);
  const handleMode = () => context.setDarkMode((prevState) => !prevState);

  return (
    <div className={`Header ${!!context.darkMode ? "dark" : "light"}`}>
      <h1>{`R&M'dex`}</h1>
      <button onClick={handleMode} type="button">
        {!context.darkMode ? "DarkMode" : "LightMode"}
      </button>
    </div>
  );
};
export default Header;
