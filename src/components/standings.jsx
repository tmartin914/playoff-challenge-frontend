import './standings.css';
import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from "@mui/material";
import { useNavigateToSubmitLineup } from "../navigation/hooks/useNavigateToSubmitLineup";
import { useNavigateToViewTeam } from "../navigation/hooks/useNavigateToViewTeam";
import { usePlayerService } from "../services/player.service";

export const Standings = () => {
  const [standings, setStandings] = useState();
  const navigateToSubmitLineup = useNavigateToSubmitLineup();
  const navigateToViewTeam = useNavigateToViewTeam();
  const { getStandings } = usePlayerService();

  useEffect(() => {
    const tempStandings = [];
    getStandings()
      .then(teams => {
        if (teams && teams.length > 0) {
          teams.forEach(team => {
            team.totalPoints = 0;
            tempStandings.push(team);
          });
        }
        setStandings(tempStandings)
      })
      .catch(err => {
        console.log(`Unable to get standings. ${err}`);
      });
  }, []);

  return (
    <>
      <div className="standings-wrapper">
        <h3>Standings</h3>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Team</TableCell>
                <TableCell align="center">Total Points</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                standings && standings.length > 0 ?
                  (standings.map((standing) => (
                    <TableRow
                      key={standing.teamName}
                      onClick={() => navigateToViewTeam(standing.teamName)}
                    >
                      <TableCell align="center" sx={{ textDecoration: 'underline', cursor: 'pointer' }}>{standing.teamName}</TableCell>
                      <TableCell align="center">{standing.totalPoints}</TableCell>
                    </TableRow>
                  ))) : <></>
                }
            </TableBody>
          </Table>
        </TableContainer>
        <Button onClick={navigateToSubmitLineup}>Submit Lineup</Button>
      </div>
    </>
  );
}