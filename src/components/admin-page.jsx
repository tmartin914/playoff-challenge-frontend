import React, { useState } from "react";
import './admin-page.css';
import { usePlayerService } from "../services/player.service";
import { Button, TextField } from "@mui/material";
import { useNavigateToSubmitLineup } from "../navigation/hooks/useNavigateToSubmitLineup";

export const AdminPage = () => {
  const [teamId, setTeamId] = useState();
  const [teamName, setTeamName] = useState();
  const navigateToSubmitLineup = useNavigateToSubmitLineup();
  const { load, createTeam } = usePlayerService();

  const loadPlayers = () => {
    load()
      .catch(err => {
        console.log(`Unable to load players. ${err}`)
      });
  }

  const handleCreateTeam = () => {
    createTeam(teamId, teamName)
      .catch(err => {
        console.log(`Unable to create team. ${err}`)
      });
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
        <Button sx={{margin: '10px'}}  onClick={handleCreateTeam}>Create Team</Button>
        <Button sx={{margin: '10px'}}  onClick={navigateToSubmitLineup}>Back</Button>
      </div>
    </>
  );
}