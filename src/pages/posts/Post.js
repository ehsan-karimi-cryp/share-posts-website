import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ErrorPage from "../ErrorPage";

function User() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { postID } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`)
      .then((res) => res.json())
      .then((x) => {
        setPost(x);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        setPost(null);
      });
  }, [postID]);

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

          {post && (
            <div className="col-md-8">
              <div className="card">
                <div className="card-header">{post.title}</div>
                <ul className="card-body">{post.body}</ul>
              </div>
            </div>
          )}
        </div>
        <Link to="/posts" className="btn btn-info mt-5">
          Posts
        </Link>
      </section>
    </>
  );
}
export default User;
