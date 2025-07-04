
const NoticiaSkeleton = () => {
  return (
    <div className="card h-100 placeholder-glow">
      <div
        className="card-img-top bg-secondary placeholder"
        style={{ height: "180px" }}
      ></div>
      <div className="card-body">
        <h5 className="card-title placeholder col-8"></h5>
        <p className="card-text placeholder col-10"></p>
        <a className="btn btn-primary disabled placeholder col-6"></a>
      </div>
    </div>
  );
};

export default NoticiaSkeleton;
