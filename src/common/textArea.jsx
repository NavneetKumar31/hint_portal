import React from "react";
import { TextField } from "@material-ui/core";

const TextArea = ({ label, name, type = "text", value, onChange, error }) => {
  return (
    <div className="form-group">
      <TextField
        style={{ width: "100%" }}
        multiline
        variant="outlined"
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        label={label}
        rows={5}
        error={error}
        helperText={error}
      />
    </div>
  );
};

export default TextArea;
