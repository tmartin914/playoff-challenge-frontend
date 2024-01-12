import { useNavigate } from "react-router";

export const useNavigateToStandings = () => {
  const navigate = useNavigate();
  const navigateToStandings = () => navigate('/standings');

  return navigateToStandings;
}