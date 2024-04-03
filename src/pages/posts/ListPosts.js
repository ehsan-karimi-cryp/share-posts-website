import { Link } from "react-router-dom";

function ListPosts({ posts }) {
  return (
    <>
      {posts &&
        posts.map((item) => {
          return (
            <div className="col-md-4 users-fetch" key={item.id}>
              <div className="card">
                {/* <Link to={`/posts/${item.id}`} className="card-header">
                  {item.title}
                </Link> */}
                {/* <Link to={`posts/${item.id}`} className="card-header">{item.title}</Link> */}
                <Link to={`${item.id}`} className="card-header">{item.title}</Link>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">{item.body}</li>
                </ul>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default ListPosts;
