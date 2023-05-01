import { Context } from "./context/Context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Homepage } from "./views/homepage/Homepage";
import { Layout } from "./common/Layout";

function App() {
  return (
    <Context>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/" element={<Homepage />} />
            <Route path="/teams" element={<Homepage />} />
            <Route path="/about" element={<Homepage />} />
          </Route>
        </Routes>
      </Router>

    </Context>
  );
}

export default App;
