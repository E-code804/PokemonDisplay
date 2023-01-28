import StatBar from "./StatBar";

//Component imports
const Stats = ({ stats }) => {
  const capitalize = (name) => name.charAt(0).toUpperCase() + name.slice(1);
  const shortenName = (name) => {
    switch (name) {
      case "special-attack":
        return "Sp. Atk";
      case "special-defense":
        return "Sp. Def";
      default:
        return capitalize(name);
    }
  };
  return (
    <div className="stats-div">
      {stats.map((stat) => {
        let name = stat.stat.name;
        let value = stat.base_stat;
        return (
          <div key={name} className="container">
            <div className="row stat-words">
              <div className="col-lg-3 col-4 no-pad">{shortenName(name)}:</div>
              <div className="col-lg-6 col-4 mt-2">
                <StatBar name={name} value={value} />
              </div>
              <div className="col-lg-3 col-4">{value}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Stats;
