import { useState } from "react";
import "./styles.css";

export default function App() {
  const DD1 = ["FC Barcelona", "Manchester City", "Borrusia Dortumund", "PSG"];
  const DD2 = {
    "FC Barcelona": ["Lionel Messi", "Andres Iniesta", "Xavi Hernandez"],
    "Manchester City": ["Kevin Debruyne", "David Silva", "Phil Foden"],
    "Borrusia Dortumund": ["Erling Haland", "Marco Reus", "Jadon Sancho"],
    PSG: ["Neymar Jr", "Mbappe"]
  };
  const [DD1selectedOption, setDD1selectedOption] = useState("");
  const [DD2selectedOption, setDD2selectedOption] = useState("");

  const selectTeam = (e) => {
    const selectedItem = e.target.value;
    if (DD1.includes(selectedItem)) setDD1selectedOption(selectedItem);
    else setDD1selectedOption("");
  };

  const selectPlayer = (e) => {
    setDD2selectedOption(e.target.value);
  };
  return (
    <div className="App">
      <select value={DD1selectedOption} onChange={selectTeam}>
        <option>select team</option>
        {DD1.map((team) => (
          <option>{team}</option>
        ))}
      </select>
      {DD1selectedOption && (
        <select value={DD2selectedOption} onChange={selectPlayer}>
          {DD2[DD1selectedOption].map((player) => (
            <option>{player}</option>
          ))}
        </select>
      )}
    </div>
  );
}
