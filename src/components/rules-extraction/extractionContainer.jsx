import React, { Component } from "react";

import Navbar from "../../common/navbar";
import "./extractionContainer.scss";
import { Route, Switch, Redirect } from "react-router-dom";
import RulesIngestion from "./ingestion/rules-ingestion";
import ExtractorDashboard from "./extractorDashboard";
import Breadcrumb from "../../common/breadcrumb";

class ExtractionContainer extends Component {
  state = {
    tabs: [
      {
        _id: 1,
        title: "dashboard",
        path: "/rules-extraction/dashboard",
      },
      {
        _id: 2,
        title: "ingestion",
        path: "/rules-extraction/ingestion",
      },
      {
        _id: 3,
        title: "configuration",
        path: "/configuration",
      },
      {
        _id: 4,
        title: "execution",
        path: "/execution",
      },
      {
        _id: 5,
        title: "views",
        path: "/views",
      },
    ],
  };

  render() {
    return (
      <div className="extraction-container">
        <div className="header">
          <Navbar tabs={this.state.tabs} />
          <Breadcrumb />
        </div>
        <div className="rules-container">
          <Switch>
            <Route
              path="/rules-extraction/ingestion"
              component={RulesIngestion}
            />
            <Route
              path="/rules-extraction/dashboard"
              component={ExtractorDashboard}
            />
            <Redirect
              from="/rules-extraction/"
              exact
              to="/rules-extraction/dashboard"
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default ExtractionContainer;
