import axios from "axios";
import { RestUrl } from "../../../../api/RestUrl";

const GetUsersByEmail = async (email: string) => {
  try {
    console.log("email", email);
    const response = await axios.get(RestUrl.getUserMessagesByEmail + email, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch user messages by email:", error);
    return null;
  }
};

export default GetUsersByEmail;
