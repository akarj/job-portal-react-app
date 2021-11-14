import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Routes/Homepage/Homepage";
import Rejected from "./Routes/Rejected/Rejected";
import Sortlisted from "./Routes/Sortlisted/Sortlisted";
import CandidateDetail from "./Routes/CandidateDetail/CandidateDetail";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  // const Data = "we";
  const [Data, setData] = useState(null);
  useEffect(() => {
    (async () => {
      const data = await axios.get(
        "https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json"
      );
      console.log(data.data);
      setData(data.data);
    })();
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/*" element={<CandidateDetail />} />
          <Route path="sortlisted" element={<Sortlisted />} />
          <Route path="rejected" element={<Rejected />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
