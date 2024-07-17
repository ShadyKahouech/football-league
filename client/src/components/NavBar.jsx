import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";

function NavBar({ changeView }) {
  const [search, setSearch] = useState("");
  // useEffect(()=> {
  //   axios.get('')
  // })

  const handleClick = () => {
    changeView("AllClubs");
  };
  const handClickLogIn = () => {
    changeView("Login");
  };

  const handleClickPlayer = () => {
    changeView("AllPlayers");
  };
  const handelInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="navbar">
      <div className=""></div>
      <img
        className="navbar__img"
        src="https://content.mosaiquefm.net/uploads/competitions/1698219992.png"
        alt="image"
      />
      <span className="league">Ligue1</span>
      <button onClick={handClickLogIn} className="login__btn">
        login
      </button>
      <button className="login__transfert">Transfert</button>
      <button onClick={handleClick} className="allclub__btn">
        CLubs
      </button>
      <button onClick={handleClickPlayer} className="allPlayers__btn">
        Players
      </button>
      <div className="Search__bar">
        <FiSearch size={25} color="white" />
        <input placeholder="Search..." onChange={handelInput} />
      </div>
    </div>
  );
}

export default NavBar;
