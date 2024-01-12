import React, { useState, useEffect } from "react";
import './submit-lineup.css';
import PlayerService from "../services/player.service";
import { Button, Dialog, DialogContent, DialogContentText, DialogTitle, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useNavigateToRules } from "../navigation/hooks/useNavigateToRules";
import { useNavigateToStandings } from "../navigation/hooks/useNavigateToStandings";

export const SubmitLineup = () => {
  const ROUNDS = ['Wildcard', 'Divisional', 'Conference', 'Super Bowl'];
  const [qb, setQB] = useState();
  const [rb1, setRB1] = useState();
  const [rb2, setRB2] = useState();
  const [wr1, setWR1] = useState();
  const [wr2, setWR2] = useState();
  const [te, setTE] = useState();
  const [k, setK] = useState();
  const [dst, setDST] = useState();
  const [qbs, setQBs] = useState();
  const [rbs, setRBs] = useState();
  const [wrs, setWRs] = useState();
  const [tes, setTEs] = useState();
  const [ks, setKs] = useState();
  const [dsts, setDSTs] = useState();
  const [teamId, setTeamId] = useState();
  const [loading, setLoading] = useState(false);
  const [round, setRound] = useState(ROUNDS[0]);
  const navigateToRules = useNavigateToRules();
  const navigateToStandings = useNavigateToStandings();
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showFailureAlert, setShowFailureAlert] = useState(false);
  const [failureAlertMsg, setFailureAlertMsg] = useState('');

  const getAllPlayers = () => {
    PlayerService.getAll()
      .then(response => {
        setQBs(response.data.filter(p => p.position === 'QB').sort((a, b) => a.team > b.team ? 1 : -1));
        setRBs(response.data.filter(p => p.position === 'RB' || p.position === 'FB').sort((a, b) => a.team > b.team ? 1 : -1));
        setWRs(response.data.filter(p => p.position === 'WR').sort((a, b) => a.team > b.team ? 1 : -1));
        setTEs(response.data.filter(p => p.position === 'TE').sort((a, b) => a.team > b.team ? 1 : -1));
        setKs(response.data.filter(p => p.position === 'K').sort((a, b) => a.team > b.team ? 1 : -1));
        setDSTs(response.data.filter(p => p.position === 'DST').sort((a, b) => a.team > b.team ? 1 : -1));
      });
  }

  const loadLineup = () => {
    if (teamId) {
      setLoading(true);
      PlayerService.getLineup(teamId, round)
        .then(response => {
          if (response && response.data){
            const test = qbs.find(q => q.id === response.data.qbId);
            setQB(qbs.find(q => q.id === response.data.qbId));
            setRB1(rbs.find(q => q.id === response.data.rb1Id));
            setRB2(rbs.find(q => q.id === response.data.rb2Id));
            setWR1(wrs.find(q => q.id === response.data.wr1Id));
            setWR2(wrs.find(q => q.id === response.data.wr2Id));
            setTE(tes.find(q => q.id === response.data.teId));
            setK(ks.find(q => q.id === response.data.kId));
            setDST(dsts.find(q => q.id === response.data.dstId));
          }
          setLoading(false);
        })
    }
  }

  const submitLineup = () => {
    if (teamId) {
      const lineup = { teamId: teamId, round: round, qb: qb.id, rb1: rb1.id, rb2: rb2.id, wr1: wr1.id, wr2: wr2.id, te: te.id, k: k.id, dst: dst.id }
      PlayerService.submitLineup(lineup).then(resp => {
        if (resp.data.isSuccessful) {
          setShowSuccessAlert(true);
        } else {
          setFailureAlertMsg(resp.data.message);
          setShowFailureAlert(true);
        }
      });
    }
  }

  // const quickSubmitLineup = () => {
  //   if (teamId) {
  //     const lineup = { teamId: teamId, round: round, qb: qbs[0].id, rb1: rbs[0].id, rb2: rbs[1].id, wr1: wrs[0].id, wr2: wrs[1].id, te: tes[0].id, k: ks[0].id, dst: dsts[0].id }
  //     PlayerService.submitLineup(lineup).then(resp => {
  //       if (resp.data.isSuccessful) {
  //         setShowSuccessAlert(true);
  //       } else {
  //         setFailureAlertMsg(resp.data.message);
  //         setShowFailureAlert(true);
  //       }
  //     });
  //   }
  // }

  useEffect(() => {
    getAllPlayers();
  }, []);

  const handleQBChange = (event) => {
    setQB(qbs.find(q => q.id === event.target.value.id));
  }

  const handleRB1Change = (event) => {
    setRB1(rbs.find(r => r.id === event.target.value.id));
  }

  const handleRB2Change = (event) => {
    setRB2(rbs.find(r => r.id === event.target.value.id));
  }

  const handleWR1Change = (event) => {
    setWR1(wrs.find(w => w.id === event.target.value.id));
  }

  const handleWR2Change = (event) => {
    setWR2(wrs.find(w => w.id === event.target.value.id));
  }

  const handleTEChange = (event) => {
    setTE(tes.find(t => t.id === event.target.value.id));
  }

  const handleKChange = (event) => {
    setK(ks.find(k => k.id === event.target.value.id));
  }

  const handleDSTChange = (event) => {
    setDST(dsts.find(dst => dst.id === event.target.value.id));
  }

  const isFormValid = () => {
    return qb && rb1 && rb2 && wr1 && wr2 && te && k && dst && teamId && (rb1.id !== rb2.id) && (wr1.id !== wr2.id);
  }

  const getPlayerForSelect = (player) => {
    return <MenuItem key={player.name} value={player} disabled={player.locked}>{player.name} ({player.team})</MenuItem>;
  };

  if (loading) {
    return <></>;
  }

  return (
    <>
      <div className="submit-lineup-wrapper">
        <h3>Submit Lineup</h3>
        <FormControl sx={{ width: '300px', margin: '5px 20px' }}>
          <InputLabel>Round</InputLabel>
          <Select
            value={round}
            label="Round"
            onChange={(e) => setRound(e.target.value)}
          >
            { ROUNDS.map(r => <MenuItem key={r} value={r} disabled={r !== 'Wildcard'}>{r}</MenuItem>) }
          </Select>
        </FormControl>
        { ks && ks.length > 0 ?
          <fieldset className='positions-wrapper'>
            <FormControl sx={{ width: '300px', margin: '5px 0px' }}>
              <InputLabel>QB</InputLabel>
              <Select
                value={qb}
                label="QB"
                onChange={handleQBChange}
                disabled={qb?.locked}
              >
                { qbs.map(qb => getPlayerForSelect(qb)) }
              </Select>
            </FormControl>
            <FormControl sx={{ width: '300px', margin: '5px 0px' }}>
              <InputLabel>RB1</InputLabel>
              <Select
                value={rb1}
                label="RB1"
                onChange={handleRB1Change}
                disabled={rb1?.locked}
              >
                { rbs.map(rb => getPlayerForSelect(rb)) }
              </Select>
            </FormControl>
            <FormControl sx={{ width: '300px', margin: '5px 0px' }}>
              <InputLabel>RB2</InputLabel>
              <Select
                value={rb2}
                label="RB2"
                onChange={handleRB2Change}
                disabled={rb2?.locked}
              >
                { rbs.map(rb => getPlayerForSelect(rb)) }
              </Select>
            </FormControl>
            <FormControl sx={{ width: '300px', margin: '5px 0px' }}>
              <InputLabel>WR1</InputLabel>
              <Select
                value={wr1}
                label="WR1"
                onChange={handleWR1Change}
                disabled={wr1?.locked}
              >
                { wrs.map(wr => getPlayerForSelect(wr)) }
              </Select>
            </FormControl>
            <FormControl sx={{ width: '300px', margin: '5px 0px' }}>
              <InputLabel>WR2</InputLabel>
              <Select
                value={wr2}
                label="WR2"
                onChange={handleWR2Change}
                disabled={wr2?.locked}
              >
                { wrs.map(wr => getPlayerForSelect(wr)) }
              </Select>
            </FormControl>
            <FormControl sx={{ width: '300px', margin: '5px 0px' }}>
              <InputLabel>TE</InputLabel>
              <Select
                value={te}
                label="TE"
                onChange={handleTEChange}
                disabled={te?.locked}
              >
                { tes.map(te => getPlayerForSelect(te)) }
              </Select>
            </FormControl>
            <FormControl sx={{ width: '300px', margin: '5px 0px' }}>
              <InputLabel>K</InputLabel>
              <Select
                value={k}
                label="K"
                onChange={handleKChange}
                disabled={k?.locked}
              >
                { ks.map(k => getPlayerForSelect(k)) }
              </Select>
            </FormControl>
            <FormControl sx={{ width: '300px', margin: '5px 0px' }}>
              <InputLabel>DST</InputLabel>
              <Select
                value={dst}
                label="DST"
                onChange={handleDSTChange}
                disabled={dst?.locked}
              >
                { dsts.map(dst => getPlayerForSelect(dst)) }
              </Select>
            </FormControl>
            <TextField
              variant="outlined"
              size="small"
              value={teamId}
              onChange={(e) => {setTeamId(e.target.value); }}
              label="Team Id"
              sx={{ width: '100%', marginTop: '5px'}}
            />
            <Button onClick={submitLineup} disabled={!isFormValid()} sx={{marginBottom: '10px'}}>Submit Lineup</Button>
            <Button onClick={loadLineup} disabled={!teamId} sx={{marginBottom: '10px'}}>Load Lineup</Button>
            {/* <Button onClick={quickSubmitLineup} disabled={!teamId}>Quick Submit Lineup</Button> */}
            <Button onClick={navigateToRules} sx={{marginBottom: '10px'}}>View Rules/Scoring</Button>
            <Button onClick={navigateToStandings}>View Standings</Button>
          </fieldset>
          : <></>
        }
      </div>
      <Dialog open={showSuccessAlert}>
        <DialogTitle>
          <DialogContentText>
            Successfully Created Lineup    
          </DialogContentText>
        </DialogTitle>
        <Button onClick={() => setShowSuccessAlert(false)}>OK</Button>
      </Dialog>
      <Dialog open={showFailureAlert}>
        <DialogTitle>Error Creating Lineup</DialogTitle>
        <DialogContent>{failureAlertMsg}</DialogContent>
        <Button onClick={() => setShowFailureAlert(false)}>OK</Button>
      </Dialog>
    </>
  );
}