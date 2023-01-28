// React imports
import { useState } from "react";
// Component imports
import Input from "../components/Input";
import Display from "../components/Display";
import Error from "../components/Error";
// Styles import
import "../styles.css";

// TODO
// Try to put all functions into a single file for export.
// Try to remove use of pokeNames

const MAX_PARTY_SIZE = 6;

function Home() {
  const [name, setName] = useState("");
  const [pokeNames, setPokeNames] = useState([]);
  const [data, setData] = useState([]);
  const [nameExistsError, setNameExistsError] = useState(false);
  const [limitError, setLimitError] = useState(false);
  const [nameError, setNameError] = useState(false);

  const setErrors = (exists, limit, name) => {
    setNameExistsError(exists);
    setLimitError(limit);
    setNameError(name);
  };

  const deleteMon = (monName) => {
    setPokeNames(pokeNames.filter((pName) => pName !== monName));
    setData(data.filter((obj) => obj.name !== monName));
  };

  const handleClick = () => {
    let pName = name.toLowerCase();

    if (pokeNames.includes(pName)) {
      setErrors(true, false, false);
    } else if (pokeNames.length >= MAX_PARTY_SIZE) {
      setErrors(false, true, false);
    } else {
      const fetchData = () =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${pName}`)
          .then((res) => {
            if (!res.ok) {
              throw new Error("Incorrect name");
            }
            return res.json();
          })
          .then((obj) => {
            setData([...data, obj]);
            setPokeNames([...pokeNames, pName]);
            setErrors(false, false, false);
            console.log(pokeNames);
          })
          .catch((err) => {
            setErrors(false, false, true);
          });
      fetchData();
    }
    setName("");
  };

  return (
    <div className="main-div">
      <h1 className="mt-3">PokeTeam Display</h1>
      <p>Pick your favorite Pokemon</p>

      <Input setName={setName} handleClick={handleClick} name={name} />

      {nameExistsError && <Error description={"Name already in party!"} />}
      {limitError && <Error description={"Party number reached."} />}
      {nameError && <Error description={"Can't find that Pokemon."} />}

      <Display data={data} deleteMon={deleteMon} />
    </div>
  );
}

export default Home;
