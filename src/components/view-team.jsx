import React, { useState, useEffect } from 'react';
import './view-team.css';
import PlayerService from "../services/player.service";
import { Button, TextField } from "@mui/material";
import { useNavigateToStandings } from "../navigation/hooks/useNavigateToStandings";
import { useLocation } from "react-router";

export const ViewTeam = () => {
  const [lineup, setLineup] = useState();
  const [lineupSet, setLineupSet] = useState(false)
  const navigateToStandings = useNavigateToStandings();
  const location = useLocation();
  const data = location.state;

  const loadTeam = () => {
    PlayerService.getTeam(data.team).then(resp => {
      if (resp.data) {
        setLineup(resp.data);
        setLineupSet(true);
      }
    });
  }

  useEffect(() => {
    loadTeam();
  }, []);

  const getTextField = (player, position) => {
    return <TextField
              variant="outlined"
              defaultValue={`${position}: ${player ? player.name : ''}`}
              disabled={true}
              sx={{width: '300px', margin: '5px'}}
            />;
  }

  return (
    <>
      <div className="team-wrapper">
        <h3>Team {data.team}</h3>
        { lineupSet ?
          (
            <fieldset className="positions-wrapper">
              { getTextField(lineup?.qb, 'QB') }
              { getTextField(lineup?.rb1, 'RB1') }
              { getTextField(lineup?.rb2, 'RB2') }
              { getTextField(lineup?.wr1, 'WR1') }
              { getTextField(lineup?.wr2, 'WR2') }
              { getTextField(lineup?.te, 'TE') }
              { getTextField(lineup?.k, 'K') }
              { getTextField(lineup?.dst, 'DST') }
              <Button onClick={navigateToStandings}>Back</Button>
            </fieldset>
          ) : <></>
        }
      </div>
    </>
  );
}