import React, { useRef } from "react";
import propTypes from "prop-types";
import "./index.scss";

const File = (props) => {
  const {
    value,
    placeholder,
    name,
    prepend,
    append,
    accept,
    outerClassName,
    inputClassName,
  } = props;

  const refInputFile = useRef(null);

  return (
    <div className={["input-text mb-3", outerClassName].join(" ")}>
      <div className="input-group">
        {prepend && (
          <div className="input-group-prepend bg-gray-900">
            <span className="input-group-text">{append}</span>
          </div>
        )}
        <input
          accept={accept}
          ref={refInputFile}
          name={name}
          type="file"
          value={value}
          className="d-none"
          onChange={props.onChange}
        />

        <input
          onClick={() => refInputFile.current.click()}
          defaultValue={value}
          placeholder={placeholder}
          className={["form-control", inputClassName].join(" ")}
        />

        {append && (
          <div className="input-group-prepend bg-gray-900">
            <span className="input-group-text">{prepend}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default File;

Text.defaultProps = {
  type: "text",
  pattern: "",
  placeholder: "Browse a file  ...",
};

File.propTypes = {
  name: propTypes.string.isRequired,
  accept: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  prepend: propTypes.oneOfType([propTypes.number, propTypes.string]),
  append: propTypes.oneOfType([propTypes.number, propTypes.string]),
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
  inputClassName: propTypes.string,
};
