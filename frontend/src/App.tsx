import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./page/main/MainPage";
import LoginPage from "./page/adminPanel/LoginPage";
import DefaultPage from "./page/notFound/DefaultPage";
import AdminPanel from "./page/adminPanel/AdminPanel";

function App() {
  return (
    <div className="bg-wmain">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/admin" element={<LoginPage />} />
          <Route path="/admin/panel" element={<AdminPanel />} />
          <Route path="*" element={<DefaultPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
