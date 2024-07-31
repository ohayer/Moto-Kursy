import { useEffect, useState } from "react";
import AdminEditTemplate from "../main/AdminEditTemplate";
import GetUsers from "./api/GetUsers";
import { useNavigate } from "react-router-dom";
import UserMessage from "./component/UserMessage";

const UserMessagesPage = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  let navigate = useNavigate();

  const fetchUsers = async () => {
    const data = await GetUsers(navigate);
    if (data) {
      setUsers(data);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  const onMessageSelected = (user: any) => {
    setSelectedUser(user);
  };

  return (
    <AdminEditTemplate>
      <div className="bg-white rounded-lg text-black min-h-screen">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col space-y-1 md:w-1/4 border-r-0 md:border-r-2 border-black bg-slate-300">
            {users.map((user: any, index) => (
              <div
                key={index}
                className="flex cursor-pointer items-center border-gray-300 border rounded-lg shadow-lg mb-4 relative w-full bg-white"
                onClick={() => onMessageSelected(user)}
              >
                <div className="avatar placeholder mr-4 max-h-12">
                  <div className="bg-neutral text-neutral-content w-12 rounded-full flex items-center justify-center">
                    <span>{user.email.slice(0, 2)}</span>
                  </div>
                </div>
                <div className="flex flex-col space-y-1 flex-grow">
                  <p className="font-semibold">{user.email}</p>
                  <label className="flex space-x-1 text-gray-600">
                    <span>All Messages:</span> <p>{user.countAll}</p>
                  </label>
                  <p className="text-gray-500">{parseDate(user.lastDate)}</p>
                </div>
                {user.unreadCount > 0 && (
                  <div className="absolute top-0 right-0 m-2">
                    <div className="bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                      {user.unreadCount}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex-grow md:w-3/4 flex justify-center items-center">
            {selectedUser ? (
              <UserMessage user={selectedUser} />
            ) : (
              <p className="text-5xl">Pick a message to read.</p>
            )}
          </div>
        </div>
      </div>
    </AdminEditTemplate>
  );
};

export const parseDate = (isoDateString: string) => {
  const date = new Date(isoDateString);

  const formattedDate = date.toLocaleString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
  });
  return formattedDate;
};

export default UserMessagesPage;
