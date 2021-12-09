import "./App.css";
import Characters from "./components/Characters/Characters";
import Header from "./components/Header/Header";
import ThemeContext from "./context/ThemeContext";
import Search from "./components/Search/Search";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <ThemeContext.Provider
        value={{ darkMode, setDarkMode }}
      >
        <Header />
        <Search search={search} setSearch={setSearch} />
        <Characters />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
