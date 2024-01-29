import React, { useState, useEffect } from 'react';
import './view-team.css';
import { usePlayerService } from "../services/player.service";
import { Box, Button, TextField } from "@mui/material";
import { useNavigateToStandings } from "../navigation/hooks/useNavigateToStandings";
import { useLocation } from "react-router";

export const ViewTeam = () => {
  const [lineup, setLineup] = useState();
  const [lineupSet, setLineupSet] = useState(false)
  const navigateToStandings = useNavigateToStandings();
  const location = useLocation();
  const data = location.state;
  const { getTeam } = usePlayerService();

  const loadTeam = () => {
    getTeam(data.team, 'Wildcard').then(team => {
      if (team) {
        setLineup(team);
        setLineupSet(true);
      }
    })
    .catch(err => {
      console.log(`Unable to get team. ${err}`);
    })
  }

  useEffect(() => {
    loadTeam();
  }, []);

  const getPlayerInfo = (player, position) => {
    return <Box sx={{ display: 'flex' }}>
            <TextField
              variant="outlined"
              defaultValue={`${position}: ${player ? player.name : ''}`}
              disabled={true}
              sx={{width: '300px', margin: '5px'}}
            />
            <TextField
              variant="outlined"
              defaultValue={`${player ? player.totalPoints : '0'}`}
              disabled={true}
              sx={{width: '70px', margin: '5px'}}
            />
           </Box>;
  }

  return (
    <>
      <div className="team-wrapper">
        <h3>Team {data.team}</h3>
        { lineupSet ?
          (
            <fieldset className="positions-wrapper">
              { getPlayerInfo(lineup?.qb, 'QB') }
              { getPlayerInfo(lineup?.rb1, 'RB1') }
              { getPlayerInfo(lineup?.rb2, 'RB2') }
              { getPlayerInfo(lineup?.wr1, 'WR1') }
              { getPlayerInfo(lineup?.wr2, 'WR2') }
              { getPlayerInfo(lineup?.te, 'TE') }
              { getPlayerInfo(lineup?.k, 'K') }
              { getPlayerInfo(lineup?.dst, 'DST') }
            </fieldset>
          ) : <></>
        }
        <Button onClick={navigateToStandings}>Back</Button>
      </div>
    </>
  );
}