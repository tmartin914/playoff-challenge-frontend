import { useHandleFetch } from "../common/hooks/useHandleFetch";

export const usePlayerService = () => {
  const BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL;
  const handleFetch = useHandleFetch();

  const getPlayers = () => {
    return handleFetch(`${BASE_URL}/players`);
  }

  const load = () => {
    return handleFetch(`${BASE_URL}/players/load`);
  }

  const getLineup = (teamId, round) => {
    return handleFetch(`${BASE_URL}/players/lineup/${teamId}/${round}`);
  }

  const submitLineup = (lineup) => {
    const options = {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(lineup)
    };
    return handleFetch(`${BASE_URL}/players/submitLineup`, options);
  }

  const getStandings = () => {
    return handleFetch(`${BASE_URL}/players/getStandings`);
  }

  const getTeam = (teamName, round) => {
    return handleFetch(`${BASE_URL}/players/getTeam/${teamName}/${round}`);
  }

  const createTeam = (teamId, teamName) => {
    return handleFetch(`${BASE_URL}/players/createTeam/${teamId}/${teamName}`);
  }

  return { getPlayers, load, getLineup, submitLineup, getStandings, getTeam, createTeam };
}