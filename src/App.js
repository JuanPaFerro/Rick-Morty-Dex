import "./App.css";
import Characters from "./components/Characters/Characters";
import Header from "./components/Header/Header";
import ThemeContext from "./context/ThemeContext";
import Search from "./components/Search/Search";
import { useState } from "react";
import useCharacters from "./Utilities/useCharacters";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const {
    filteredCharacters,
    search,
    load,
    setSearch,
   } = useCharacters();

  return (
    <div className="App">
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <Header />
        <Search search={search} setSearch={setSearch} />
        <Characters characters={filteredCharacters} load={load} />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
