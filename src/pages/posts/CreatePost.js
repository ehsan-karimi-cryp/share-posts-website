import { useState } from "react";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const submitForm = (x) => {
    x.preventDefault();
    console.log(title, body);
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
              </div>
              <div className="mb-3">
                <label className="form-label">Body:</label>
                <textarea
                  className="form-control"
                  rows="3"
                  onChange={(x) => setBody(x.target.value)}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-dark">
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
