import axios from "axios";
import { RestUrl } from "../../../api/RestUrl";
import { NavigateFunction } from "react-router-dom";

const FetchAllCourses = async (navigate: NavigateFunction) => {
  try {
    const response = await axios.get(RestUrl.getAllCourses, {
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
    console.error("Failed to fetch courses:", error);
    return null;
  }
};

export default FetchAllCourses;
