const backendUrl = "http://localhost:3000";

export const RestUrl = {
  postLogin: `${backendUrl}/auth/login`,
  getProfile: `${backendUrl}/auth/profile`,
  getValidCourses: `${backendUrl}/courses/valid`,
  getAllCourses: `${backendUrl}/courses`,
  postCourse: `${backendUrl}/courses`,
  putCourse: `${backendUrl}/courses/`,
  deleteCourse: `${backendUrl}/courses/`,
};
