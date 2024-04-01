import { useEffect, useState } from "react";
import ListUsers from "./ListUsers";
import ErrorPage from "../ErrorPage";

function IndexUser() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error , setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((x) => {
        setUsers(x);
        setLoading(false);
        setError(null)
      })
      .catch(err => {
        setError(err);
        setLoading(false);
        setUsers(null)
      });
  }, []);

  return (
    <>
      <div className="container mt-5">
        <div className="row g-3">
          <h3>Users</h3>
          {loading && (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
          {error && <ErrorPage errorPage={error} />}
          <ListUsers users={users} />
        </div>
      </div>
    </>
  );
}
export default IndexUser;
