import axios from "axios";
import { RestUrl } from "../../../../api/RestUrl";
import { NavigateFunction } from "react-router-dom";

const GetUsers = async (navigate: NavigateFunction) => {
  try {
    const response = await axios.get(RestUrl.getGroupedUserMessages, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        navigate("/admin");
      }
    }
    console.error("Failed to fetch users:", error);
    return null;
  }
};

export default GetUsers;
