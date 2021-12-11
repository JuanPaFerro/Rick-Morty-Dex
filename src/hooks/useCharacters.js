import { useState, useEffect, useMemo } from "react";
const useCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [load, setLoad] = useState(true);

  useEffect(() => {
    if (search === "") {
      fetch("https://rickandmortyapi.com//api/character/")
        .then((resp) => resp.json())
        .then((data) => {
          setCharacters(data.results);
          setFilteredCharacters(data.results);
          setLoad(false);
        });
    } else {
      setFilteredCharacters(newChars);
    }
  }, [search]);
  const newChars = useMemo(
    () =>
      characters.filter((f) =>
        f.name.toLowerCase().includes(search.toLowerCase())
      ),
    [search, filteredCharacters]
  );

  const states = {
    filteredCharacters,
    search,
    load,
  };
  const stateModifiers = {
    setSearch,
  };
  return { ...states, ...stateModifiers };
};

export default useCharacters;
