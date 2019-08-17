import React from "react";
import astro from "../images/astronauts.svg";
import pcl from "../images/platziconf-logo.svg";
import "./styles/BadgeNew.css";
import "./styles/Badges.css";
import "./styles/Home.css";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="Home">
          <div className="container">
            <div className="row">
              <div className="Home__col col-12 col-md-4">
                <img className="img-fluid mb-2" src={pcl} alt="pcl" />
                <h1>Print Your Badge</h1>
                <Link to="/badges" className="btn btn-primary">
                  View
                </Link>
              </div>
              <div className="Home__col d-none d-md-block col-md-8">
                <img className="img-fluid p-4" src={astro} alt="astro" />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
