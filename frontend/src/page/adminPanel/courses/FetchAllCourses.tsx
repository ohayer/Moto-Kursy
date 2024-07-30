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
    if (response.status === 401) {
      navigate("/admin");
    }
    return response.data;
  } catch (error) {
    console.error("Failed to fetch courses:", error);
    return null;
  }
};

export default FetchAllCourses;
