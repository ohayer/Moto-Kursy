import axios from "axios";
import { RestUrl } from "./RestUrl";

const PostUserMessage = async (data: { email: string; content: string }) => {
  try {
    const response = await axios.post(RestUrl.postUserMessage, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Failed to post a user message", error);
    return null;
  }
};

export default PostUserMessage;
