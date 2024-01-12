import React from "react";
import './admin-page.css';
import PlayerService from "../services/player.service";
import { Button } from "@mui/material";
import { useNavigateToSubmitLineup } from "../navigation/hooks/useNavigateToSubmitLineup";

export const AdminPage = () => {
  const navigateToSubmitLineup = useNavigateToSubmitLineup();

  const loadPlayers = () => {
    PlayerService.load().then();
  }

  return (
    <>
      <Button onClick={loadPlayers}>Load Players</Button>
      <Button onClick={navigateToSubmitLineup}>Back</Button>
    </>
  );
}