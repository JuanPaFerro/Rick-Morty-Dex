import "./App.css";
import Characters from "./components/Characters/Characters";
import Header from "./components/Header/Header";
import ThemeContext from "./context/ThemeContext";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="App">
      <ThemeContext.Provider value={{ darkMode }}>
        <Header setDarkMode={setDarkMode} />
        <Characters />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
