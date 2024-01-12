import { AdminPage } from "../components/admin-page";
import { Rules } from "../components/rules";
import { SubmitLineup } from "../components/submit-lineup";
import { Routes, Route } from 'react-router-dom';
import { Standings } from "../components/standings";
import { ViewTeam } from "../components/view-team";

export default function PlayoffChallengeRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SubmitLineup/>}/>
      <Route path="/admin" element={<AdminPage/>}/>
      <Route path="/rules" element={<Rules/>}/>
      <Route path="/standings" element={<Standings/>}/>
      <Route path="/team" element={<ViewTeam/>}/>
    </Routes>
  );
}