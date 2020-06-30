import React, { Component } from "react";
import { Paper } from "@material-ui/core";

import "./extractorDashboard.scss";

class ExtractorDashboard extends Component {
  state = {};
  render() {
    return (
      <div className="dashboard-container">
        <div className="dashboard-wrapper">
          <div className="row">
            <div className="col-3">
              <div className="col-wrapper">
                <Paper>
                  <div className="paper-wrapper">
                    <div className="row">
                      <div className="col-10">
                        <p className="title">Budget</p>
                        <p className="value">$2400</p>
                        <p className="flow">
                          <i className="fa fa-arrow-circle-up mr-2"></i>
                          25% up since last month
                        </p>
                      </div>
                      <div className="col-2">
                        <div className="icon-wrapper">
                          <i className="fa fa-money"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </Paper>
              </div>
            </div>
            <div className="col-3">
              <div className="col-wrapper">
                <Paper>
                  <div className="paper-wrapper">
                    <div className="row">
                      <div className="col-10">
                        <p className="title">Total Users</p>
                        <p className="value">1,600</p>
                        <p className="flow">
                          <i className="fa fa-arrow-circle-down mr-2"></i>
                          5% down in this month
                        </p>
                      </div>
                      <div className="col-2">
                        <div className="icon-wrapper">
                          <i className="fa fa-users"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </Paper>
              </div>
            </div>
            <div className="col-3">
              <div className="col-wrapper">
                <Paper>
                  <div className="paper-wrapper">
                    <div className="row">
                      <div className="col-10">
                        <p className="title">Tasks Progress</p>
                        <p className="value">75.5%</p>
                      </div>
                      <div className="col-2">
                        <div className="icon-wrapper">
                          <i className="fa fa-tasks"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </Paper>
              </div>
            </div>
            <div className="col-3">
              <div className="col-wrapper">
                <Paper>
                  <div className="paper-wrapper">
                    <div className="row">
                      <div className="col-10">
                        <p className="title">Total Profit</p>
                        <p className="value">$24000</p>
                        <p className="flow">
                          <i className="fa fa-arrow-circle-up mr-2"></i>
                          30% up since last month
                        </p>
                      </div>
                      <div className="col-2">
                        <div className="icon-wrapper">
                          <i className="fa fa-inr"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </Paper>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ExtractorDashboard;
