import React, { useEffect, useState } from "react";

import OnePlayer from "./OnePlayer.jsx";
import { FiSearch } from "react-icons/fi";

// function AllPlayers({ players, changeView }) {
//   return (
//     <div className="container__players">
//       {players.map((player, index) => (
//         <OnePlayer player={player} key={index} changeView={changeView} />
//       ))}
//     </div>
//   );
// }

function AllPlayers({ players, changeView }) {
  const [allplayers, setAllPlayers] = useState(players);
  const [searchPlayers, setSearchPlayer] = useState("");

  useEffect(() => {
    if (searchPlayers.length === 0) {
      setAllPlayers(allplayers);
    } else {
      const searchedPlayer = allplayers.filter((player) => {
        return player.firstname
          .toUpperCase()
          .includes(searchPlayers.toUpperCase());
      });
      setAllPlayers(searchedPlayer);
    }
  }, [searchPlayers]);
  const handleSearch = (e) => {
    setSearchPlayer(e.target.value);
  };

  return (
    <div className="search__container">
      <div className="search">
        <FiSearch size={25} color="#D0B8A8" />
        <input placeholder="Search player" onChange={handleSearch} />
      </div>

      <div className="container__players">
        {players.map((player, index) => (
          <OnePlayer player={player} key={index} changeView={changeView} />
        ))}
      </div>
    </div>
  );
}

export default AllPlayers;
