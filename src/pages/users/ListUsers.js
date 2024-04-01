function ListUsers({ users }) {
  return (
    <>
      {users &&
        users.map((item) => {
          return (
            <div className="col-md-4 users-fetch" key={item.id}>
              <div className="card">
                <div className="card-header">{item.name}</div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">username: {item.username}</li>
                  <li className="list-group-item">email: {item.email}</li>
                  <li className="list-group-item">phone: {item.phone}</li>
                </ul>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default ListUsers;
