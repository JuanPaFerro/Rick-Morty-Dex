import { useEffect, useState, useContext, useReducer, useMemo } from "react";
import CharacterCard from "../CharacterCard/CharacterCard";
import ThemeContext from "../../context/ThemeContext";

const initialState = {
  favorites: [],
};
const reducerObject = (state, payload) => ({
  ADD_TO_FAVORITES: { ...state, favorites: [...state.favorites, payload] },
  DELETE_FROM_FAVORITES: { ...state, favorites: payload },
});
const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
};

const Characters = ({load, characters}) => {
  const [favs, dispatch] = useReducer(reducer, initialState);

  const onAction = (character) => {
    if (favs.favorites.includes(character)) {
      const newFavorites = favs.favorites.filter((f) => f.id !== character.id);
      dispatch({ type: "DELETE_FROM_FAVORITES", payload: newFavorites });
    } else {
      dispatch({ type: "ADD_TO_FAVORITES", payload: character });
    }
  };

  const context = useContext(ThemeContext);


  return (
    <div className="All-lists-container">
      {!load && (
        <>
          {favs.favorites.length !== 0 && (
            <div
              className={`list-container ${
                !!context.darkMode ? "dark" : "light"
              }`}
            >
              <h1>Favorites ❤</h1>
              <div
                className={`Characters ${
                  !!context.darkMode ? "dark" : "light"
                }`}
              >
                {favs.favorites.map((fav) => (
                  <CharacterCard
                    isFavorite={true}
                    characterData={fav}
                    key={fav.id}
                    onAction={onAction}
                  />
                ))}
              </div>
            </div>
          )}

          <div
            className={`list-container ${
              !!context.darkMode ? "dark" : "light"
            }`}
          >
            <h1>Characters</h1>
            <div
              className={`Characters ${!!context.darkMode ? "dark" : "light"}`}
            >
              {characters.map((char) => (
                <CharacterCard
                  isFavorite={favs.favorites.includes(char) ? true : false}
                  characterData={char}
                  key={char.id}
                  onAction={onAction}
                />
              ))}
            </div>
          </div>

          
        </>
      )}
    </div>
  );
};

export default Characters;
