import React from "react";

import "./card.scss";

const Card = ({ data, onRoute }) => {
  return (
    <div className="card-wrapper">
      <div className="my-card">
        <div className="header">
          <div className="row">
            <div className="col-2">
              <div className="avatar">RD</div>
            </div>
            <div className="col">
              <p className="title">{data?.title}</p>
              <p className="sub-title">{data?.subtitle}</p>
            </div>
          </div>
        </div>
        <div className="content">
          <p>{data?.content}</p>
        </div>
        <div className="footer">
          <button
            className="btn btn-sm btn-outline-primary"
            onClick={() => onRoute(data)}
          >
            GoTo
            <i className="fa fa-external-link ml-2"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
