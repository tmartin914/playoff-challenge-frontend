import { useNavigate } from "react-router";

export const useNavigateToRules = () => {
  const navigate = useNavigate();
  const navigateToRules = () => navigate('/rules');

  return navigateToRules;
}