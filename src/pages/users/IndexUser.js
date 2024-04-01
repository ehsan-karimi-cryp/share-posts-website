import { useEffect, useState } from "react";
import ListUsers from "./ListUsers";

function IndexUser() {
  const [users, setUsers] = useState(null);
  //   const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((x) => {
        setUsers(x);
        // setLoading(false);
      });
  } , []);

  return (
    <>
      <div className="container mt-5">
        <div className="row g-3">
            <h3>Users</h3>
          <ListUsers users={users} />
        </div>
      </div>
    </>
  );
}
export default IndexUser;
