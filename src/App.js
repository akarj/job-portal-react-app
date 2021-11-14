import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Routes/Homepage/Homepage";
import Rejected from "./Routes/Rejected/Rejected";
import Sortlisted from "./Routes/Sortlisted/Sortlisted";
import CandidateDetail from "./Routes/CandidateDetail/CandidateDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/*" element={<CandidateDetail />} />
          {/* </Route> */}
          <Route path="sortlisted" element={<Sortlisted />} />
          <Route path="rejected" element={<Rejected />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
