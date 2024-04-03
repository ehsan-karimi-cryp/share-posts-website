import { useEffect, useState } from "react";
import ErrorPage from "../ErrorPage";
import ListPosts from "./ListPosts";
import { Link } from "react-router-dom";

function IndexPosts() {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((x) => {
        setPosts(x);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        setPosts(null);
      });
  }, []);

  return (
    <>
      <div className="container mt-5">
        <div className="row g-3">
          <h3>Posts</h3>
          <Link to="createpost" className="btn btn-dark">Create Post</Link>
          {loading && (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
          {error && <ErrorPage errorPage={error} />}
          <ListPosts posts={posts} />
        </div>
      </div>
    </>
  );
}
export default IndexPosts;
