import { Routes, Route } from "react-router";

import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import ChallengeDay from "./pages/ChallengeDay";
import RoadmapPage from "./pages/RoadmapPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/day/:dayId" element={<ChallengeDay />} />
      <Route path="/roadmap" element={<RoadmapPage />} />
      <Route path="/roadmap/:roadmapId" element={<RoadmapPage />} />
    </Routes>
  );
};

export default App;