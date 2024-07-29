import { useState } from "react";
import WebInput, { typeOfInput } from "../../form/WebInput";
// import axios from "axios";

const LoginPage = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });

  const inputs: {
    name: string;
    placeholder: string;
    type: typeOfInput;
    required?: boolean;
  }[] = [
    {
      name: "username",
      placeholder: "Username",
      type: "text",
      required: true,
    },
    {
      name: "password",
      placeholder: "Password",
      type: "password",
      required: true,
    },
  ];

  const handleChange = (name: string, value: string) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formValues);

    /* try {
      const response = await axios.post(
        "http://your-backend-url.com/api",
        formValues
      );
      console.log(response.data);
    } catch (error) {
      console.error("There was an error submitting the form!", error);
    } */
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-7xl p-2">Admin Panel</div>
      <div className="bg-white p-6 rounded shadow-lg w-1/4">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center justify-center space-y-4">
            {inputs.map((input, index) => (
              <WebInput
                key={index}
                name={input.name}
                placeholder={input.placeholder}
                type={input.type}
                onChange={handleChange}
                required={input.required}
              />
            ))}
            <button className="btn btn-active btn-primary" type="submit">
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
