import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h1 className="not-found-title" style={{ fontSize: "56pt" }}>
          404
        </h1>
        <div>
          <Link to="/" className="btn btn-secondary btn-xl">
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
}

export default NotFound;
