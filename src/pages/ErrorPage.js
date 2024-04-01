import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/ErrorPage.css";

function ErrorPage({ errorPage }) {
  useEffect(() => {
    const headerSection = document.querySelector(".header-section");
    headerSection.classList.add("hidden-header");

    return () => {
      headerSection.classList.remove("hidden-header");
    };
  });
  return (
    <>
      <section className="error-section">
        <h3 className="alert alert-danger error-heading">
          {errorPage.message}
        </h3>
        <Link to="/" className="btn btn-primary">Home</Link>
      </section>
    </>
  );
}
export default ErrorPage;
