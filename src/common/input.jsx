import React from "react";
import TextField from "@material-ui/core/TextField";

const Input = ({ label, name, type = "text", value, onChange, error }) => {
  return (
    <div className="form-group">
      <TextField
        style={{ width: "100%" }}
        variant="outlined"
        required
        id={name}
        name={name}
        label={label}
        type={type}
        value={value}
        onChange={onChange}
        helperText={error}
        error={error}
      />
    </div>
  );
};

export default Input;
