// React imports
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Component imports
import TypesDisplay from "../components/TypesDisplay";
import PokeInfo from "../components/PokeInfo";
import Stats from "../components/Stats";

const PokePage = () => {
  const { pName } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  const capitalize = (name) => name.charAt(0).toUpperCase() + name.slice(1);

  const getImgURL = (id) => {
    return data.sprites.versions["generation-v"]["black-white"].animated
      .front_default !== null
      ? data.sprites.versions["generation-v"]["black-white"].animated
          .front_default
      : data.sprites.front_default;
  };

  const getAbilities = (abilities) => {
    let abilitiesStr = "";

    abilities.forEach((ability, index) => {
      let currAbility = capitalize(ability.ability.name);
      if (index === abilities.length - 1) {
        abilitiesStr = abilitiesStr.concat("", currAbility);
      } else {
        abilitiesStr = abilitiesStr.concat("", `${currAbility}/`);
      }
    });
    return abilitiesStr;
  };

  // stats
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pName}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Incorrect name");
        }
        return res.json();
      })
      .then((obj) => {
        setData(obj);
        setError(false);
      })
      .catch((err) => {
        setError(true);
      });
  }, [pName]);

  return (
    <div className="main-div mt-5">
      {data && !error && (
        <div className="container pokemon-display">
          <div className="row center">
            <div className="col-lg-4 col-md-6">
              <img
                id="profile-img"
                src={getImgURL(data.id)}
                alt="Front Sprite"
              />
            </div>
            <div className="col-lg-6 col-sm-6 profile-info p-4">
              <span>{capitalize(data.forms[0].name)}</span>
              <span>
                {
                  <TypesDisplay
                    title={"Type"}
                    types={data.types}
                    padding={false}
                  />
                }
              </span>
              <PokeInfo
                title={"Abilities"}
                data={getAbilities(data.abilities)}
              />
              <span className="mb-2">Stats</span>
              <Stats stats={data.stats} />
            </div>
          </div>
        </div>
      )}
      {error && <h1 className="text-danger">Pokemon Not Found</h1>}
    </div>
  );
};

export default PokePage;
