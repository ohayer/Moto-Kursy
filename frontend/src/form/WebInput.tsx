import { useState, useEffect, ReactNode } from "react";
import WebSelect from "./WebSelect";
import WebCheckbox from "./WebCheckbox";
import { EmailLabel, PasswordLabel } from "./InputLabels";

export type typeOfInput =
  | "text"
  | "password"
  | "email"
  | "number"
  | "select"
  | "checkbox"
  | "textarea";

type WebInputProps = {
  name: string;
  placeholder: string;
  type: typeOfInput;
  propValue?: any;
  onChange: (name: string, value: string | boolean) => void;
  required?: boolean;
  options?: string[] | number[];
};

const WebInput = ({
  name,
  placeholder,
  type,
  onChange,
  required = false,
  propValue,
  options: opt = [],
}: WebInputProps) => {
  const [value, setValue] = useState(propValue);

  useEffect(() => {
    setValue(propValue);
  }, [propValue]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const newValue =
      type === "checkbox"
        ? (e.target as HTMLInputElement).checked
        : e.target.value;
    setValue(newValue);
    onChange(name, newValue);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
    onChange(name, e.target.value);
  };

  const renderLabel = (input: ReactNode) => {
    switch (type) {
      case "email":
        return <EmailLabel>{input}</EmailLabel>;
      case "password":
        return <PasswordLabel>{input}</PasswordLabel>;
      default:
        return <label>{input}</label>;
    }
  };

  const classNameForInput =
    type === "text" || type === "number"
      ? "input input-bordered w-full max-w-xs"
      : "";

  return (
    <div>
      {type === "select" ? (
        <WebSelect
          title={placeholder}
          options={opt}
          value={value}
          onChange={handleSelectChange}
        />
      ) : type === "checkbox" ? (
        <WebCheckbox
          checked={value === true}
          onChange={(e) => {
            setValue(e.target.checked);
            onChange(name, e.target.checked);
          }}
          label={placeholder}
        />
      ) : type === "textarea" ? (
        <textarea
          className="textarea textarea-bordered w-full max-w-xs min-h-24"
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            onChange(name, e.target.value);
          }}
          id={name}
          required={required}
        />
      ) : (
        renderLabel(
          <input
            type={type}
            required={required}
            id={name}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={handleChange}
            className={classNameForInput}
          />
        )
      )}
    </div>
  );
};

export default WebInput;
