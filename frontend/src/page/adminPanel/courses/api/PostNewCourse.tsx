import axios from "axios";
import { RestUrl } from "../../../../api/RestUrl";
import { Course } from "../../../../components/Card";

const PostNewCourse = async (course: Course) => {
  try {
    const response = await axios.post(RestUrl.postCourse, course, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Failed to post a courses", error);
    alert("Error while posting course");
    return null;
  }
};

export default PostNewCourse;
