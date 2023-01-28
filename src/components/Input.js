const Input = ({ setName, handleClick, name }) => {
  return (
    <div className="user-input">
      <div className="inputs">
        <input
          className="form-control m-2"
          placeholder="Enter Pokemon name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button className="btn btn-primary m-2" onClick={handleClick}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Input;
