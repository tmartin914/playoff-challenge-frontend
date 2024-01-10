import React from "react";
import './admin-page.css';
import PlayerService from "../services/player.service";
import { Button } from "@mui/material";

export const AdminPage = () => {

  const loadPlayers = () => {
    PlayerService.load().then(getAllPlayers());
  }

  return (
    <>
      <Button onClick={loadPlayers}>Load Players</Button>
    </>
  );
}