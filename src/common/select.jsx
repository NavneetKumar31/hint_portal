import React from "react";
import { MenuItem, TextField } from "@material-ui/core";

const Select = ({ name, label, options, error, value, onChange }) => {
  return (
    <div className="form-group">
      {/* <TextField
        select
        variant="outlined"
        style={{ width: "100%" }}
        name={name}
        id={name}
        label={label}
        defaultValue={value}
        value={value}
        onChange={onChange}
        error={error}
        helperText={error}
      >
        <MenuItem value="">None</MenuItem>
        {options.map((option) => (
          <MenuItem key={option._id} value={option._id}>
            {option.name}
          </MenuItem>
        ))}
      </TextField> */}

      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className="form-control"
      >
        <option value="" />
        {options.map((option) => (
          <option key={option._id} value={option._id}>
            {option.name}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Select;
