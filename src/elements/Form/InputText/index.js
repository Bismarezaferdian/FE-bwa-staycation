import React, { useState } from "react";
import propTypes from "prop-types";

import "./index.scss";

const Text = (props) => {
  const {
    value,
    type,
    placeholder,
    name,
    prepend,
    append,
    outerClassName,
    inputClassName,
    errorResponse,
  } = props;

  const [HasError, setHasError] = useState(null);
  let pattern = "";
  if (type === "email")
    pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (type === "tel") pattern = "[0-9]*";

  const onChange = (event) => {
    const target = {
      target: {
        name: name,
        value: event.target.value,
      },
    };

    if (type === "email ") {
      if (!pattern.test(event.target.value)) setHasError(errorResponse);
      else setHasError( null);
    }

    if (type === "tel") {
      if (event.target.validity.valid) props.onChange(target);
    } else {
      props.onChange(target);
    }
  };

  return (
    <div className={["input-text mb-3", outerClassName].join(" ")}>
      <div className="input-group">
        {prepend && (
          <div className="input-group-prepend bg-gray-100">
            <span className="input-group-text">{append}</span>
          </div>
        )}
        <input
          name={name}
          type={type}
          value={value}
          pattern={pattern}
          className={["form-control", inputClassName].join(" ")}
          placeholder={placeholder}
          onChange={onChange}
        />

        {append && (
          <div className="input-group-prepend bg-gray-100">
            <span className="input-group-text">{prepend}</span>
          </div>
        )}
      </div>
      {HasError && <span className="error-helper">{HasError}</span>}
    </div>
  );
};

export default Text;

Text.defaultProps = {
  type: "text",
  pattern: "",
  placeholder: "pliase type here ...",
  errorResponse: "please match the requsted format !",
};

Text.propTypes = {
  name: propTypes.string.isRequired,
  value: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
  onChange: propTypes.func.isRequired,
  prepend: propTypes.oneOfType([propTypes.number, propTypes.string]),
  append: propTypes.oneOfType([propTypes.number, propTypes.string]),
  type: propTypes.string,
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
  inputClassName: propTypes.string,
};
