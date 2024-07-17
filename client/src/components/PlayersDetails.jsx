import React from "react";

function PlayersDetails({ onePlayer }) {
  return (
    <div className="player__container">
      <div className="player__img">
        <img src={onePlayer.photo} alt="img" />
      </div>
      <div className="player__details">
        <div className="name">
          <span>First Name:</span>
          <div>{onePlayer.firstname}</div>
        </div>

        <div className="lastname">
          <span>Last Name:</span>
          <div>{onePlayer.lastname}</div>
        </div>

        <div className="age">
          <span>Age:</span>
          <div>{onePlayer.age}</div>
        </div>

        <div className="birth">
          <span>birth:</span>
          <div>{onePlayer.birth}</div>
        </div>

        <div className="nationality">
          <span>nationality:</span>
          <div>{onePlayer.nationality}</div>
        </div>
      </div>
    </div>
  );
}

export default PlayersDetails;
