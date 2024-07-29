import { useEffect } from "react";
import AdminActions from "./AdminActions.json";
import { useNavigate } from "react-router-dom";
import useCheckSession from "./ChceckSession";

const AdminPanel = ({ onLogout }: { onLogout: () => void }) => {
  const { profile, logout } = useCheckSession();
  let navigate = useNavigate();

  const handleActionClick = (endpoint: string) => {
    navigate(endpoint, { replace: true });
  };

  useEffect(() => {
    if (!profile) {
      onLogout();
    }
  }, [profile, onLogout]);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">
          Welcome, {profile.username}!
        </h1>
        <p>This is the admin panel.</p>
        <p>Choose action!</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 justify-center">
          {AdminActions.map((action, index) => (
            <div
              key={index}
              className="w-full h-24 bg-blue-500 text-white flex items-center justify-center cursor-pointer rounded shadow-md hover:bg-blue-700 transition duration-300"
              onClick={() => handleActionClick(action.endpoint)}
            >
              {action.name}
            </div>
          ))}
        </div>
        <button className="btn btn-active btn-secondary mt-4" onClick={logout}>
          Log out
        </button>
      </div>
    </div>
  );
};

export default AdminPanel;
