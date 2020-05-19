import React, { Component, lazy, Suspense } from "react"; 
import { Link } from "react-router-dom";
import HomeImage from "../assets/image/homepage.jpg";
import LazyBackground from "../components/lazy-loader-background.component";

class Homepage extends Component {
  render() {
    return (
      <React.Fragment>
        <LazyBackground className="header" src={HomeImage}>
          <header className="header__logo-box"></header>
          <div className="header__text-box">
            <h1 className="primary-header">
              <span className="primary-header__micro">Welcome to</span>
              <span className="primary-header__main">Cooklopedia</span>
              <span className="primary-header__sub">where we cater to your hunger needs</span>

              <Link to="/search" className="btn btn--white btn-animated">Search</Link>
            </h1>
          </div>
        </LazyBackground>
      </React.Fragment>
    );
  }
}

export default Homepage;