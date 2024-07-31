import { useEffect, useState } from "react";
import GetUsersByEmail from "../api/GetUserByEmail";
import { parseDate } from "../UserMessagesPage";

const UserMessage = ({ user }: { user: any }) => {
  //TODO: Updating messages to be readed
  const [messages, setMessages] = useState([]);
  const fetchMessages = async () => {
    if (user.email) {
      const data = await GetUsersByEmail(user.email);
      if (data) {
        setMessages(data);
      }
    }
  };
  useEffect(() => {
    fetchMessages();
  }, [user.email]);

  return (
    <div className="w-full p-2 bg-slate-300">
      <p className="justify-center flex font-bold text-xl md:text-2xl mb-2">
        {user.email}
      </p>
      {messages.map((message: any, index) => (
        <div key={index} className="chat chat-start ml-2 md:ml-5 mb-2">
          <div>
            <div className="chat-bubble bg-blue-500 text-white text-base md:text-xl p-2 rounded-lg">
              <p>{message.content}</p>
            </div>
            <p className="text-black text-xs md:text-sm mt-1">
              {parseDate(message.createdAt)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default UserMessage;
