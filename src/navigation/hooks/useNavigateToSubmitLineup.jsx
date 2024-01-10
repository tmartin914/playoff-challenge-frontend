import { useNavigate } from "react-router";

export const useNavigateToSubmitLineup = () => {
  const navigate = useNavigate();
  const navigateToSubmitLineup = () => navigate('/');

  return navigateToSubmitLineup;
}