import { AdminPage } from "../components/admin-page";
import { Rules } from "../components/rules";
import { SubmitLineup } from "../components/submit-lineup";
import { Routes, Route } from 'react-router-dom';

export default function PlayoffChallengeRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SubmitLineup/>}/>
      <Route path="/admin" element={<AdminPage/>}/>
      <Route path="/rules" element={<Rules/>}/>
    </Routes>
  );
}