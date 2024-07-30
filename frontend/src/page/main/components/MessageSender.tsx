import { useState } from "react";
import WebInput, { Input } from "../../../form/WebInput";

const inputs: Input[] = [
  {
    name: "email",
    placeholder: "Email address",
    type: "email",
    required: true,
  },
  {
    name: "message",
    placeholder: "What can we help with?",
    type: "textarea",
    required: true,
  },
];

const initialFormValues = {
  email: "",
  message: "",
};

const MessageSender = () => {
  const [formValues, setFormValues] = useState(initialFormValues);

  const onInputsChange = (name: string, value: string | number | boolean) => {
    setFormValues((prevValues: any) => ({
      ...prevValues,
      [name]: value !== undefined ? value : "",
    }));
  };

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  console.log(formValues);
  return (
    <div className="text-black p-20 sm:p-30 items-center">
      <h3 className="sm:text-3xl text-lg mb-5 w-full flex justify-center">
        Contact us
      </h3>
      <div className="w-full flex justify-center">
        <form
          className="flex flex-col space-y-4 items-center justify-center pt-5 text-white w-full max-w-lg"
          onSubmit={onFormSubmit}
        >
          {inputs.map((input, index) => (
            <div key={index} className="w-full px-4">
              <WebInput {...input} onChange={onInputsChange} />
            </div>
          ))}
          <button type="submit" className="btn btn-primary w-full mt-4 mx-4">
            Send
          </button>
        </form>
      </div>
      <div className="flex flex-col items-center space-y-5 pt-20">
        <div className="flex items-center">
          <TalkingPhoneIcon />
          <p className="mt-3 font-bold text-xl">&nbsp;Mon-Fri 08:00-18:00</p>
        </div>
        <p className="text-xl">
          In case of anything, we are available at this phone number
        </p>
        <p className="text-3xl">+XX-XXX-XXX-XXX</p>
      </div>
    </div>
  );
};

const TalkingPhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    width={46}
    height={46}
  >
    <defs>
      <style>{`.cls-1{fill:#8bc4ff}.cls-3{fill:#2e58ff}`}</style>
    </defs>
    <g id="Talking_phone" data-name="Talking phone">
      <path
        className="cls-1"
        d="m34.05 42.5 5.49-2.91a6 6 0 0 1 7.05 1.06L51.94 46a6 6 0 0 1 0 8.49l-2.83 2.82a16 16 0 0 1-22.62 0l-19.8-19.8a16 16 0 0 1 0-22.62l2.82-2.83a6 6 0 0 1 8.49 0l5.35 5.35a6 6 0 0 1 1.06 7.05L21.5 30a4 4 0 0 0 .71 4.7l7.14 7.14a4 4 0 0 0 4.7.66z"
      />
      <path
        d="M62 6v14a4 4 0 0 1-4 4c-12.15 0-11.8-.15-12.53.4L38 30v-4a2 2 0 0 0-2-2 4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h22a4 4 0 0 1 4 4z"
        style={{ fill: "#e8f3ff" }}
      />
      <circle className="cls-1" cx="39" cy="13" r="0.01" />
      <circle className="cls-1" cx="47" cy="13" r="0.01" />
      <circle className="cls-1" cx="55" cy="13" r="0.01" />
      <path
        className="cls-3"
        d="M48 39.23a8 8 0 0 0-9.4-1.41l-5.49 2.91a2 2 0 0 1-2.35-.35l-7.14-7.14a2 2 0 0 1-.35-2.35l2.91-5.49a8 8 0 0 0-1.41-9.4l-5.36-5.35a8 8 0 0 0-11.31 0l-2.83 2.82a18 18 0 0 0 0 25.46l19.8 19.8A17.88 17.88 0 0 0 37.8 64c8.06 0 11.94-4.49 15.55-8.1a8 8 0 0 0 0-11.31zm2.53 13.84a38.27 38.27 0 0 1-4.37 4.14l-7.76-7.64a2 2 0 1 0-2.8 2.86l6.87 6.76A14 14 0 0 1 27.9 55.9L8.1 36.1a14 14 0 0 1-3.29-14.57l6.76 6.87a2 2 0 0 0 2.86-2.8l-7.64-7.76a37.39 37.39 0 0 1 4.14-4.37 4 4 0 0 1 5.66 0l5.35 5.36a4 4 0 0 1 .7 4.69L19.74 29a6 6 0 0 0 1.06 7.05l7.13 7.13a6 6 0 0 0 7 1.06l5.5-2.9a4 4 0 0 1 4.7.7l5.35 5.35a4 4 0 0 1 .05 5.68z"
      />
      <path
        className="cls-3"
        d="M58 0H36a6 6 0 0 0-6 6v14a6 6 0 0 0 6 6v4a2 2 0 0 0 3.2 1.6l7.43-5.6c.84-.09 3.88 0 11.37 0a6 6 0 0 0 6-6V6a6 6 0 0 0-6-6zm2 20a2 2 0 0 1-2 2c-12.7 0-12.35-.24-13.73.8L40 26a4 4 0 0 0-4-4 2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h22a2 2 0 0 1 2 2z"
      />
      <circle className="cls-3" cx="39" cy="13" r="2" />
      <circle className="cls-3" cx="47" cy="13" r="2" />
      <circle className="cls-3" cx="55" cy="13" r="2" />
    </g>
  </svg>
);

export default MessageSender;
