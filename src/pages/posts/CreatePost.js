import { useState } from "react";
import Swal from "sweetalert2";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);

  const submitForm = (x) => {
    x.preventDefault();
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: body,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        Swal.fire({
          title: "Thanks!",
          text: "Post created successfully",
          icon: "success",
          confirmButtonText: "OK",
        });
      })
      .catch((err) => {
        setLoading(false);
        Swal.fire({
          title: "Error",
          text: err.message,
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };
  return (
    <>
      <div className="container mt-5">
        <div className="row g-3">
          <div className="col-md-6">
            <h2>Create Post</h2>
            <form onSubmit={submitForm}>
              <div className="mb-3">
                <label className="form-label">Title:</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(x) => setTitle(x.target.value)}
                />
                <div className="form-text text-danger">
                  {title ? "" : "Title is required"}
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Body:</label>
                <textarea
                  className="form-control"
                  rows="3"
                  onChange={(x) => setBody(x.target.value)}
                ></textarea>
                <div className="form-text text-danger">
                  {body ? "" : "Body is required"}
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-dark"
                disabled={title === "" || body === ""}
              >
                {loading && (
                  <div
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                )}
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default CreatePost;
