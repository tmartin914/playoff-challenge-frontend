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
}

export default new PlayerService();