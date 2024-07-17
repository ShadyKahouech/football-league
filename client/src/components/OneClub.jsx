import React from "react";

function OneClub({ club, changeView }) {
  const handleClick = () => {
    changeView("ClubDetail", club);
  };
  return (
    <div className="clubs" onClick={handleClick}>
      <img src={club.logo} />
      <div>{club.name}</div>
      {/* <div>Code: {club.code}</div>
      <div>Country: {club.country}</div>
      <div>FOunded in : {club.founded}</div> */}
    </div>
  );
}

export default OneClub;
