const Error = ({ description }) => {
  return (
    <div className="error">
      <p className="text-danger">{description}</p>
    </div>
  );
};

export default Error;
