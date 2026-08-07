import { Routes, Route } from "react-router";

import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import ChallengeDay from "./pages/ChallengeDay";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/day/:dayId" element={<ChallengeDay />} />
    </Routes>
  );
};

export default App;