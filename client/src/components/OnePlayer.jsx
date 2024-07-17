import React from "react";

function OnePlayer({ player, changeView }) {
  const handleClick = () => {
    console.log(player);
    changeView("PlayersDetails", null, player);
  };
  return (
    <div className="player__container" onClick={handleClick}>
      <img src={player.photo} alt="image" />
      <div className="player">{player.firstname}</div>
    </div>
  );
}

export default OnePlayer;
