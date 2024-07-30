const backendUrl = "http://localhost:3000";

export const RestUrl = {
  postLogin: `${backendUrl}/auth/login`,
  getProfile: `${backendUrl}/auth/profile`,
  getValidCourses: `${backendUrl}/courses/valid`,
  getAllCourses: `${backendUrl}/courses`,
  postCourse: `${backendUrl}/courses`,
  putCourse: `${backendUrl}/courses/`,
  deleteCourse: `${backendUrl}/courses/`,
  postUserMessage: `${backendUrl}/user-messages`,
  getUserMessages: `${backendUrl}/user-messages`,
  getGroupedUserMessages: `${backendUrl}/user-messages/grouped`,
  patchUserMessageRead: `${backendUrl}/user-messages/`,
};
