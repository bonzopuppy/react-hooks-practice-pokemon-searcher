import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {

  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked((isClicked) => !isClicked);
  }

  function displayImage() {
    if (isClicked) {
      return pokemon.sprites.back;
    } else {
      return pokemon.sprites.front;
    }
  }

  return (
    <Card onClick={handleClick}>
      <div>
        <div className="image">
          <img src={displayImage()} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
