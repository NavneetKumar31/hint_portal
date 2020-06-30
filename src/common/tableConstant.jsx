import React from "react";

// This is the table constant/settings which needed to render table elements
export const tableConstants = (columns, handleEdit, handleDelete) => {
  const table = columns.map((col, index) => {
    return {
      title: col.title,
      render: (rowData) => {
        return <span>{rowData[col.value]}</span>;
      },
    };
  });

  table.push({
    title: "actions",
    render: (rowData) => {
      return (
        <div className="btn-group-sm">
          <button
            className="btn btn-sm btn-outline-primary"
            onClick={() => handleEdit(rowData)}
          >
            <i className="fa fa-pencil"></i>
          </button>
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={() => handleDelete(rowData)}
          >
            <i className="fa fa-trash-o"></i>
          </button>
        </div>
      );
    },
  });

  return table;
};
