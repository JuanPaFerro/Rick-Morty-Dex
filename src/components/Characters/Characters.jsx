import { useEffect, useState, useContext } from "react";
import CharacterCard from "../CharacterCard/CharacterCard";
import ThemeContext from "../../context/ThemeContext";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [load, setLoad] = useState(true);

  const context = useContext(ThemeContext);

  useEffect(() => {
    fetch("https://rickandmortyapi.com//api/character/")
      .then((resp) => resp.json())
      .then((data) => {
        setCharacters(data.results);
        setLoad(false);
      });
  }, []);

  return (
    <div className={`Characters ${!!context.darkMode ? "dark" : "light"}`}>
      {!load &&
        characters.map((char) => (
          <CharacterCard characterData={char} key={char.id} />
        ))}
    </div>
  );
};

export default Characters;
