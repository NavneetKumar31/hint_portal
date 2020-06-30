import React from "react";

import "./listGroup.scss";

const ListGroup = ({ currentTab, data, onChange }) => {
  return (
    <ul className="list-group">
      {data.map((d) => (
        <li
          key={d._id}
          className={
            currentTab === d.title
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => onChange(d)}
        >
          {d.title}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
