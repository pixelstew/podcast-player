import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import { Route } from "react-router-dom";
import Discover from "./Discover";
import FetchCasts from "./FetchCasts";
import CastDescPanel from "./CastDescPanel";
import MyCasts from "./MyCasts";
import CastShows from "./CastShows";
import routes from "../routes";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class App extends Component {
  constructor(props) {
    super(props);

    this.setTopCasts = this.setTopCasts.bind(this);
    this.addToMyCasts = this.addToMyCasts.bind(this);
    this.removeFromMyCasts = this.removeFromMyCasts.bind(this);

    this.state = {
      topCasts: {},
      myCasts: {}
    };
  }

  setTopCasts(genre, casts) {
    const topCasts = { ...this.state.topCasts };
    topCasts[genre] = casts;
    this.setState({ topCasts });
  }

  addToMyCasts(cast) {
    const myCasts = { ...this.state.myCasts };
    myCasts[cast.title] = cast;
    this.setState({ myCasts });
  }

  removeFromMyCasts(cast) {
    const myCasts = { ...this.state.myCasts };
    delete myCasts[cast.title];
    this.setState({ myCasts });
  }

  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Route
            exact
            path="/"
            component={MyCasts}
            myCasts={this.state.myCasts}
          />
          <Route
            exact
            path="/podcasts"
            component={MyCasts}
            myCasts={this.state.myCasts}
          />
          <Route
            exact
            path={`/podcasts/:castid`}
            render={defaultProps => (
              <CastShows myCasts={this.state.myCasts} {...defaultProps} />
            )}
          />
          <Route exact path="/discover" component={Discover} />
          <Route
            path="/discover/:genre"
            render={defaultProps => (
              <FetchCasts
                routes={routes}
                addToMyCasts={this.addToMyCasts}
                removeFromMyCasts={this.removeFromMyCasts}
                myCasts={this.state.myCasts}
                topCasts={this.state.topCasts}
                setTopCasts={this.setTopCasts}
                {...defaultProps}
              />
            )}
          />
          <Route
            exact
            path={`/discover/:genre/:castid`}
            render={defaultProps => (
              <CastDescPanel
                topCasts={this.state.topCasts}
                addToMyCasts={this.addToMyCasts}
                removeFromMyCasts={this.removeFromMyCasts}
                myCasts={this.state.myCasts}
                {...defaultProps}
              />
            )}
          />
          {/* <ReactCSSTransitionGroup name="cast-description" transitionName="description" transitionEnterTimeout={5000} transitionLeaveTimeout={5000}>
          </ReactCSSTransitionGroup> */
          }
        </div>
      </div>
    );
  }
}

export default App;
