import "./CharacterCard.css";

const CharacterCard = ({ characterData, onAction, isFavorite }) => {
  return (
    <div className="card">
      <div className="box">
        <div className="content">
          <img src={characterData.image} alt={characterData.name} />
          <h3>{characterData.name}</h3>
          <p>Origin: {characterData.origin.name}</p>
          <p>Species: {characterData.species}</p>
          <p>Status: {characterData.status}</p>
          <button onClick={() => onAction(characterData)}>
            {`${isFavorite ? "Remove from" : "Add to"}`} ❤
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
