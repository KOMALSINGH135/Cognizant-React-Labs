import React from "react";

import { ListofPlayers, ScoreBelow70 } from "./ListofPlayers";

import {
  OddPlayers,
  EvenPlayers,
  IndianPlayers,
  ListofIndianPlayers,
  IndianTeam,
} from "./IndianPlayers";

function App() {

  const flag = true;

  if (flag) {
    return (
      <div>
        <h1>List of Players</h1>

        <ListofPlayers />

        <hr />

        <ScoreBelow70 />
      </div>
    );
  } else {
    return (
      <div>
        <h1>Odd Players</h1>

        {OddPlayers(IndianTeam)}

        <hr />

        <h1>Even Players</h1>

        {EvenPlayers(IndianTeam)}

        <hr />

        <h1>List of Indian Players Merged</h1>

        <ListofIndianPlayers IndianPlayers={IndianPlayers} />
      </div>
    );
  }
}

export default App;