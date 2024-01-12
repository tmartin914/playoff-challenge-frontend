import { useNavigate } from "react-router";

export const useNavigateToViewTeam = () => {
  const navigate = useNavigate();
  const navigateToViewTeam = (team) => navigate('/team', { state: { team: team }});

  return navigateToViewTeam;
}