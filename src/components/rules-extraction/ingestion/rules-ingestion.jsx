import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import ListGroup from "../../../common/listGroup";
import ManualUploadRepo from "./manual-upload-repo";
import "./rules-ingestion.scss";
import "../../../common/breadcrumb.scss";
import SharePoint from "./sharepoint-repo";
import ManualUploadForm from "./manual-upload-form";
import PostForm from "./post-form";

class RulesIngestion extends Component {
  state = {
    tabs: [
      {
        _id: 1,
        title: "manual-upload",
        path: "/rules-extraction/ingestion/manual-upload",
      },
      {
        _id: 2,
        title: "sharepoint",
        path: "/rules-extraction/ingestion/sharepoint",
      },
      {
        _id: 3,
        title: "emails",
        path: "/rules-extraction/ingestion/emails",
      },
      {
        _id: 4,
        title: "websites",
        path: "/rules-extraction/ingestion/websites",
      },
    ],
    currentTab: this.props.location.pathname.split("/")[
      this.props.location.pathname.split("/").length - 1
    ],
  };

  handleRouteTo = (component) => {
    this.setState({ currentTab: component.title });
    this.props.history.push(component.path);
  };

  render() {
    return (
      <div className="ingestion-container">
        <div className="row">
          <div className="col-2">
            <div className="vertical-tabs-wrapper">
              <ListGroup
                currentTab={this.state.currentTab}
                data={this.state.tabs}
                onChange={this.handleRouteTo}
              />
            </div>
          </div>
          <div className="col">
            <div className="ingestion-table-wrapper">
              <Switch>
                <Route
                  path="/rules-extraction/ingestion/manual-upload"
                  exact
                  component={ManualUploadRepo}
                />
                <Route
                  path="/rules-extraction/ingestion/manual-upload-form/:id"
                  exact
                  component={ManualUploadForm}
                />
                <Route
                  path="/rules-extraction/ingestion/sharepoint"
                  exact
                  component={SharePoint}
                />
                <Route
                  path="/rules-extraction/ingestion/sharepoint-form/:id"
                  exact
                  component={PostForm}
                />
                {/* <Route path='not-found' exact component={} /> */}
                <Redirect
                  from="/rules-extraction/ingestion/"
                  exact
                  to="/rules-extraction/ingestion/manual-upload"
                />
                <Redirect to="/page-not-found" />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RulesIngestion;
