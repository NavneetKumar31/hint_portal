import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import AppHeader from "./components/appHeader";
import Home from "./components/home";
import ListGroup from "./common/listGroup";
import ExtractionContainer from "./components/rules-extraction/extractionContainer";
import PageNotFound from "./components/page-not-found";
import Login from "./components/login";

import "./App.scss";
import { Button } from "@material-ui/core";

class App extends Component {
  state = {
    isLoggedIn: false,
    header: {
      brandName: "HINT",
    },
    toggleSidenav: false,
    currentSelection: "home",
    tabs: [
      {
        _id: 1,
        title: "home",
      },
      {
        _id: 2,
        title: "libor",
      },
      {
        _id: 3,
        title: "email wizard",
      },
      {
        _id: 4,
        title: "rules extraction",
      },
      {
        _id: 5,
        title: "document digitization",
      },
    ],
  };

  handleNavigation = (currentTab) => {
    const currentSelection = currentTab.title;
    this.setState({ currentSelection });
  };

  toggleSidenav = () => {
    const toggle = this.state.toggleSidenav;
    this.setState({ toggleSidenav: !toggle });
  };

  renderSidenav() {
    if (this.state.toggleSidenav) {
      return (
        <div className="sidenav-wrapper row">
          <div className="sidenav col-2">
            <ListGroup
              currentTab={this.state.currentSelection}
              data={this.state.tabs}
              onChange={this.handleNavigation}
            />
          </div>
          <Button
            variant="contained"
            size="large"
            color="primary"
            onClick={() => this.toggleSidenav()}
          >
            <i className="fa fa-close"></i>
          </Button>
        </div>
      );
    }
  }

  renderHeader() {
    if (this.state.isLoggedIn) {
      return null;
    }

    return (
      <header className="App-header">
        <AppHeader header={this.state.header} onToggle={this.toggleSidenav} />
      </header>
    );
  }

  render() {
    return (
      <div className="App">
        {this.renderSidenav()}
        {this.renderHeader()}
        <section className="main-router-container">
          <Switch>
            <Route path="/rules-extraction" component={ExtractionContainer} />
            <Route path="/home" exact component={Home} />
            <Route path="/page-not-found" exact component={PageNotFound} />
            <Route path="/login" component={Login} />
            <Redirect from="/" exact to="/home" />
            <Redirect to="/page-not-found" />
          </Switch>
        </section>
      </div>
    );
  }
}

export default App;
