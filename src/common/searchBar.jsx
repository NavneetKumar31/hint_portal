import React from "react";

const SearchBar = ({ name, type, placeholder, value, onChange }) => {
  return (
    <div className="form-group mb-2 mt-1">
      <input
        className="form-control"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;
