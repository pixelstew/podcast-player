import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="master-header">
      <div className="App-header">
        <h1>FeedCast</h1>
      </div>
      <nav className="global-nav">
        <NavLink to="/podcasts" activeClassName="active">Podcasts</NavLink>
        <NavLink to="/discover" activeClassName="active">Discover</NavLink>
      </nav>
    </header>
  );
};

export default Header;
