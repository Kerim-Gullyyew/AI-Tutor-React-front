import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import LearningLayout from "./layouts/LearningLayout";
import LearningPage from "./pages/LearningPage";
import CoursePage from "./pages/CoursePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LearningLayout />}>
          <Route index element={<LearningPage />} />

          <Route path="course" element={<CoursePage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
