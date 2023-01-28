const typeObj = {
  water: "royalblue",
  fire: "red",
  grass: "green",
  ground: "#80471c",
  bug: "#b0dea3",
  electric: "yellow",
  dragon: "#6F35FC",
  fairy: "pink",
  fighting: "#cb5f48",
  flying: "lightblue",
  ghost: "purple",
  dark: "darkgray",
  ice: "#A5F2F3",
  normal: "aliceblue",
  poison: "#b468b7",
  psychic: "hotpink",
  rock: "#9a7b4f",
  steel: "gray",
};

const TypesDisplay = ({ title, types, pad }) => {
  return (
    <div className={`poke-info ${pad ? "px-3" : ""}`}>
      <p>{title}</p>
      <span>
        {types.map((type, index) => {
          let currType = type.type.name;
          if (index === types.length - 1) {
            return (
              <span key={currType} style={{ color: typeObj[currType] }}>
                {currType.toUpperCase()}
              </span>
            );
          }
          return (
            <span key={currType} style={{ color: typeObj[currType] }}>
              {currType.toUpperCase()}/
            </span>
          );
        })}
      </span>
    </div>
  );
};

export default TypesDisplay;
