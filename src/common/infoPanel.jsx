import React from "react";
import { Paper, Button } from "@material-ui/core";

import "./infoPanel.scss";

const InfoPanel = ({ title, subtitle, btnLabel, onRoute }) => {
  return (
    <Paper className="page-info-panel mb-2">
      <div className="row">
        <div className="col-10">
          <p className="title">{title}</p>
          <p className="sub-title">{subtitle}</p>
        </div>
        <div className="col">
          <div className="btn-group text-right">
            <Button
              variant="outlined"
              color="primary"
              onClick={() => onRoute("new")}
            >
              <i className="fa fa-plus-square mr-2"></i>
              {btnLabel}
            </Button>
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default InfoPanel;
