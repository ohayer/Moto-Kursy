import axios from "axios";
import { RestUrl } from "../../../../api/RestUrl";
import { Course } from "../../../../components/Card";

const PutCourse = async (id: number, course: Course) => {
  try {
    const response = await axios.put(
      RestUrl.putCourse + id,
      { ...course, id: id },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Failed to post a courses", error);
    alert("Error while updating course");
    return null;
  }
};

export default PutCourse;
