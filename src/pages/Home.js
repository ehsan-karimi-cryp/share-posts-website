import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="container ">
      <div className="row m-5 justify-content-center">
        <div className="col-12 col-md-6 justify-content-center website-title">
          <h3>Share Posts</h3>
        </div>
      </div>
      <div className="row m-3 justify-content-center">
        <div className="col-12 col-md-6">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            distinctio possimus recusandae iure magni minus debitis nam nisi
            dolores beatae? Tempora voluptas reprehenderit facilis recusandae
            ducimus aspernatur, possimus eaque ipsum nam voluptate, nihil quo
            obcaecati accusantium dolorum asperiores similique corrupti
            laboriosam minima odio. Quidem consectetur, nam quis earum iusto
            tenetur.
          </p>
        </div>
      </div>
      <div className="row m-3 justify-content-center">
        <div className="col-12 col-md-6 buttons-section">
          <Link className="btn btn-info page-button" to="/users">Users</Link>
          <Link className="btn btn-info page-button" to="/posts">Posts</Link>
        </div>
      </div>
    </section>
  );
}
export default Home;
