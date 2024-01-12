import http from "../http-common";

class PlayerService {
  getAll() {
    return http.get("/players");
  }

  load() {
    return http.get("/players/load");
  }

  getLineup(teamId, round) {
    return http.get(`/players/lineup/${teamId}/${round}`)
  }

  submitLineup(lineup) {
    return http.post("/players/submitLineup", lineup)
  }

  getStandings() {
    return http.get(`/players/getStandings`)
  }

  getTeam(teamName) {
    return http.get(`/players/getTeam/${teamName}`)
  }

  createTeam(teamId, teamName) {
    return http.get(`/players/createTeam/${teamId}/${teamName}`)
  }
}

export default new PlayerService();