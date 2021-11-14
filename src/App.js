import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Job Portal App</h1>
      </header>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            {/* <Route path="expenses" element={<Expenses />} />
            <Route path="invoices" element={<Invoices />}>
              
              <Route path=":invoiceId" element={<Invoice />} />
            </Route> */}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
