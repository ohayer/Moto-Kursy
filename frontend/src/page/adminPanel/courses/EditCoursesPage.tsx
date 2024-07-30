import { useEffect, useState } from "react";
import AdminEditTemplate from "../AdminEditTemplate";
import FetchAllCourses from "./FetchAllCourses";
import Card from "../../../components/Card";
import CourseModal from "./CourseModal";
import { useNavigate } from "react-router-dom";
import { showModal } from "../../../components/Modal";

// Page for editing or adding courses
const EditCoursesPage = () => {
  let navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      const data = await FetchAllCourses(navigate);
      if (data) {
        setCourses(data);
      }
    };

    fetchCourses();
  }, []);

  const onSelectedCourse = (course: any) => {
    setSelectedCourse(course);
    showModal();
  };

  const lengthOfValidCourses = courses.filter(
    (course: any) => course.valid
  ).length;

  return (
    <AdminEditTemplate>
      <div className="bg-white rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-3xl font-bold">Edit Courses</h4>
          <CourseModal
            validLength={lengthOfValidCourses}
            selectedCourse={selectedCourse}
            onClose={() => setSelectedCourse(null)}
          />
        </div>
        <div className="flex flex-wrap -mx-4">
          {courses.map((course: any) => (
            <div
              key={course.id}
              className="min-w-1/4 flex-shrink-0 ml-4 py-2"
              style={{ flex: `0 0 calc(${100 / 4}% - 16px)` }}
            >
              <button onClick={() => onSelectedCourse(course)}>
                <Card {...course} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </AdminEditTemplate>
  );
};
export default EditCoursesPage;
