import React, { useState } from "react";
// import "./styles.css";

export default function SelectOptions() {
  const options = ["1", "2"];
  const filmsByTati = [
    {
      user_type: "1",
      skills: "skillls",
    },
    {
      user_type: "2",
      skills: "html",
    },
    {
      user_type: "3",
      skills: "css",
    },
  ];
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [selectedTatiFilm, setSelectedTatiFilm] = useState(filmsByTati[0]);
  return (
    <div className="App">
      <h1>Select Example</h1>
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <p>Selected option {selectedOption}</p>

      <select
        value={selectedTatiFilm}
        onChange={(e) =>
          setSelectedTatiFilm(
            filmsByTati.find((film) => film.user_type == e.target.value)
          )
        }
      >
        {filmsByTati.map((film) => (
          <option key={film.user_type} value={film.user_type}>
            {film.skills}
          </option>
        ))}
      </select>
      <p>Selected option: {selectedTatiFilm.skills}</p>
    </div>
  );
}
