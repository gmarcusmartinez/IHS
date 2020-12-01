import React, { ChangeEvent } from "react";

interface IProps {
  label: string;
  name: string;
  value: string;
  type?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<IProps> = ({
  label,
  name,
  value,
  type,
  onChange,
}) => {
  return (
    <div className="text-input">
      <label className="text-input__label">{label}</label>
      <input
        type={type ? type : "text"}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default CustomInput;
