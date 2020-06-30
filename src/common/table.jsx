import React from "react";
import PropTypes from "prop-types";

import "./table.scss";

const Table = ({ cols, data, isBordered, isHovered, isStriped, isDark }) => {
  return (
    <div className="table-responsive table-wrapper">
      <table
        className={`table ${isBordered ? "table-bordered" : "table-borderless"} 
        ${isHovered && "table-hover"} 
        ${isStriped && "table-striped"} 
        ${isDark && "table-dark"}`}
      >
        <thead>
          <tr>
            {cols.map((headerItem, index) => (
              <th key={index}>{headerItem.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {cols.map((col, key) => (
                <td key={key}>{col.render(item)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  cols: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  bordered: PropTypes.bool,
  isHovered: PropTypes.bool,
  isStriped: PropTypes.bool,
  isDark: PropTypes.bool,
};

Table.defaultProps = {
  isBordered: false,
  isHovered: false,
  isStriped: false,
  isDark: false,
};

export default Table;
