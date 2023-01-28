import Pokemon from "./Pokemon";

const Display = ({ data, deleteMon }) => {
  return (
    <div className="pokemon-display mt-3 mb-5">
      <div className="container">
        <div className="row">
          {data.map((d) => (
            <Pokemon data={d} deleteMon={deleteMon} key={d.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Display;
