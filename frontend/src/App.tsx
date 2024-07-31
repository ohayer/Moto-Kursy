import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./page/main/MainPage";
import LoginPage from "./page/adminPanel/main/LoginPage";
import DefaultPage from "./page/notFound/DefaultPage";
import EditCoursesPage from "./page/adminPanel/courses/EditCoursesPage";
import PrivateRoute from "./components/PrivateRoute";
import UserMessagesPage from "./page/adminPanel/messages/UserMessagesPage";

function App() {
  return (
    <div className="bg-wmain">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/admin" element={<LoginPage />} />
          <Route path="/admin/courses" element={<PrivateRoute />}>
            <Route path="/admin/courses" element={<EditCoursesPage />} />
          </Route>
          <Route path="/admin/messages" element={<PrivateRoute />}>
            <Route path="/admin/messages" element={<UserMessagesPage />} />
          </Route>
          <Route path="*" element={<DefaultPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
