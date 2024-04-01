import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ErrorPage from "../ErrorPage";

function User() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { userID } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
      .then((res) => res.json())
      .then((x) => {
        setUser(x);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        setUser(null);
      });
  }, [userID]);

  return (
    <>
      <section className="container mt-5">
        <div className="row g-3">
          {loading && (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
          {error && <ErrorPage errorPage={error} />}

          {user && (
            <div className="card">
              <div className="card-header">{user.name}</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">username: {user.username}</li>
                <li className="list-group-item">email: {user.email}</li>
                <li className="list-group-item">phone: {user.phone}</li>
                <li className="list-group-item">website {user.website}</li>
              </ul>
            </div>
          )}
        </div>
        <Link to="/users" className="btn btn-info mt-5">
          Users
        </Link>
      </section>
    </>
  );
}
export default User;
