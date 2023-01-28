const StatBar = ({ name, value }) => {
  const getAttr = (value) => {
    const percent =
      value <= 10
        ? "5%"
        : 100 < value && value <= 115
        ? "95%"
        : (value - 10).toString() + "%";

    switch (true) {
      case value <= 30:
        return { color: "red", width: percent };
      case value <= 55:
        return { color: "orange", width: percent };
      case value <= 75:
        return { color: "yellow", width: percent };
      case value <= 95:
        return { color: "green", width: percent };
      case value <= 115:
        return { color: "darkgreen", width: percent };
      default:
        return { color: "royalblue", width: "100%" };
    }
  };

  const { color, width } = getAttr(value);
  return (
    <div
      className="stat-bar"
      style={{ backgroundColor: color, width: width }}
    ></div>
  );
};

export default StatBar;
