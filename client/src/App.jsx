import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Footer.jsx";
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import AllClubs from "./components/AllClubs.jsx";
import ClubDetail from "./components/ClubDetail.jsx";
import AllPlayers from "./components/AllPlayers.jsx";
import PlayersDetails from "./components/PlayersDetails.jsx";
import OneClub from "./components/OneClub.jsx";
import OnePlayer from "./components/OnePlayer.jsx";
import Login from "./components/Login.jsx";

function App() {
  const [data, setData] = useState([]);
  const [players, setPlayers] = useState([]);
  const [view, setView] = useState("Hero");
  const [club, setClub] = useState({});
  const [serachClub, setSearchClub] = useState("");
  const [onePlayer, setOnePlayer] = useState({});

  const changeView = (newView, selectedClub, clickedPlayer) => {
    setView(newView);
    setClub(selectedClub);
    setOnePlayer(clickedPlayer);
  };
  useEffect(() => {
    axios
      .get("http://localhost:8080/players/getAll")
      .then((res) => {
        setPlayers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8080/clubs/getAll")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  ////////////////////////////////////////////
  const render = () => {
    if (view === "AllClubs") {
      return <AllClubs clubs={data} changeView={changeView} />;
    }
    if (view === "ClubDetail") {
      return <ClubDetail club={club} />;
    }
    if (view === "OneClub") {
      return <OneClub changeView={changeView} />;
    }
    if (view === "AllPlayers") {
      return <AllPlayers players={players} changeView={changeView} />;
    }
    if (view === "PlayersDetails") {
      return <PlayersDetails onePlayer={onePlayer} />;
    }
    if (view === "OnePlayer") {
      return <OnePlayer changeView={changeView}  />;
    }
    if (view === "Login") {
      return <Login changeView={changeView} />;
    }
  };
  return (
    <div>
      <Header />
      <NavBar changeView={changeView} />
      <Hero />
      {render()}
    </div>
  );
}

export default App;
