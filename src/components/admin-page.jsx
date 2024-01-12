import React, { useState } from "react";
import './admin-page.css';
import PlayerService from "../services/player.service";
import { Button, TextField } from "@mui/material";
import { useNavigateToSubmitLineup } from "../navigation/hooks/useNavigateToSubmitLineup";

export const AdminPage = () => {
  const [teamId, setTeamId] = useState();
  const [teamName, setTeamName] = useState();
  const navigateToSubmitLineup = useNavigateToSubmitLineup();

  const loadPlayers = () => {
    PlayerService.load().then();
  }

  const createTeam = () => {
    PlayerService.createTeam(teamId, teamName);
  }

  return (
    <>
      <div className="admin-wrapper">
        <Button sx={{margin: '10px'}} onClick={loadPlayers}>Load Players</Button>
        <TextField
          variant="outlined"
          size="small"
          value={teamId}
          onChange={(e) => {setTeamId(e.target.value); }}
          label="Team Id"
          sx={{ width: '100%', margin: '10px'}}
        />
        <TextField
          variant="outlined"
          size="small"
          value={teamName}
          onChange={(e) => {setTeamName(e.target.value); }}
          label="Team Name"
          sx={{ width: '100%', margin: '10px'}}
        />
        <Button sx={{margin: '10px'}}  onClick={createTeam}>Create Team</Button>
        <Button sx={{margin: '10px'}}  onClick={navigateToSubmitLineup}>Back</Button>
      </div>
    </>
  );
}