import { useState, ReactNode } from "react";

export type typeOfInput = "text" | "password" | "email" | "number";

type WebInputProps = {
  name: string;
  placeholder: string;
  type: typeOfInput;
  onChange: (name: string, value: string) => void;
  required?: boolean;
};

const WebInput = (props: WebInputProps) => {
  const { name, placeholder, type, onChange, required = false } = props;
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    type === "text" ? "input input-bordered w-full max-w-xs" : "";

  return (
    <div>
      {renderLabel(
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
      )}
    </div>
  );
};

type LabelProps = {
  children: ReactNode;
};

const EmailLabel = ({ children }: LabelProps) => (
  <label className="input input-bordered flex items-center gap-2 w-full max-w-xs">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      className="h-4 w-4 opacity-70"
    >
      <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
      <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
    </svg>
    {children}
  </label>
);

const PasswordLabel = ({ children }: LabelProps) => (
  <label className="input input-bordered flex items-center gap-2  w-full max-w-xs">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      className="h-4 w-4 opacity-70"
    >
      <path
        fillRule="evenodd"
        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
        clipRule="evenodd"
      />
    </svg>
    {children}
  </label>
);

export default WebInput;
