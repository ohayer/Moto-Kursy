import { useState } from "react";
import WebInput, { typeOfInput } from "../../../form/WebInput";
import axios from "axios";
import { RestUrl } from "../../../api/RestUrl";
import AdminPanel from "./AdminPanel";
import { useAuth } from "../../../context/AuthProvider";

const LoginPage = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const { isLoggedIn, login } = useAuth();
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

  const handleChange = (name: string, value: string | boolean) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(RestUrl.postLogin, formValues);
      login(response.data.access_token);
    } catch (error) {
      setMessage("Invalid username or password");
      //clearing the message after 5 seconds
      setInterval(() => {
        setMessage("");
      }, 5000);
    }
  };

  if (isLoggedIn) {
    return <AdminPanel />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-4xl sm:text-7xl p-2">Admin Panel</div>
      <div className="bg-white p-6 rounded shadow-lg sm:w-1/4">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center justify-center space-y-4">
            {inputs.map((input, index) => (
              <div className="w-4/5" key={index}>
                <WebInput onChange={handleChange} {...input} />
              </div>
            ))}
            <button className="btn btn-active btn-primary" type="submit">
              Log in
            </button>
            {message && <div className="text-red-500">{message}</div>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
