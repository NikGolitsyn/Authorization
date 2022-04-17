import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

const InputField = ({ register, inputName, errorMessage, errors }) => (
  <div className="authorization-input">
    <p className="authorization-input__header">{`${inputName}:`}</p>
    <input
      className="authorization-input__field"
      {...register(`${inputName}`, { required: true })}
    />
    {errors[`${inputName}`] && (
      <p className="authorization-input__error">
        <FontAwesomeIcon icon={faCircleExclamation} />
        {` ${errorMessage}`}
      </p>
    )}
  </div>
);

export default InputField;
