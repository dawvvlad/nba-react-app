import { Context } from "./context/Context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Homepage } from "./views/homepage/Homepage";
import { Layout } from "./common/Layout";
import { Teams } from "./views/teams/Teams";
import { TeamContext } from "./context/teamcontext/TeamContext";
import { TeamCard } from "./views/teamcard/TeamCard";
import { PageNotFound } from "./views/pagenotfound/PageNotFound";
import { About } from "./views/about/About";
import { Scores } from "./views/scores/Scores";

function App() {
  return (
    <Context>
      <TeamContext>
      <Router>
        <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="nba-react-app/about" element={<About />} />
          <Route path="/nba-react-app" element={<Layout />}>
            <Route index path="/nba-react-app" element={<Homepage />} />
            <Route path="teams" element={<Teams />} />
            <Route path="teams/:id" element={<TeamCard />} />
            <Route path="teams/:id/scores" element={<Scores />} />
          </Route>
        </Routes>
      </Router>
      </TeamContext>

    </Context>
  );
}

export default App;
