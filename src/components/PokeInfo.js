const PokeInfo = ({ title, data, color, pad }) => {
  return (
    <div className={`poke-info ${pad ? "px-3" : ""}`}>
      <p>{title}</p>
      <p style={{ color: color }}>{data}</p>
    </div>
  );
};

export default PokeInfo;
