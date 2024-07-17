import React, { useEffect, useState } from "react";
import OneClub from "./OneClub.jsx";
import { FiSearch } from "react-icons/fi";

function AllClubs({ clubs, changeView }) {
  const [allClubs, setAllClubs] = useState(clubs);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search.length === 0) {
      setAllClubs(clubs);
    } else {
      const searchedClub = allClubs.filter((club) => {
        return club.name.toLocaleLowerCase().includes(search);
      });
      setAllClubs(searchedClub);
    }
  }, [search]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="search__container">
      <div className="search">
        <FiSearch size={25} color="#D0B8A8" />
        <input
          className="input"
          placeholder="Search for a club"
          onChange={handleSearch}
        />
      </div>
      <div className="container__clubs">
        {allClubs.map((club, index) => (
          <OneClub club={club} key={index} changeView={changeView} />
        ))}
      </div>
    </div>
  );
}

export default AllClubs;
