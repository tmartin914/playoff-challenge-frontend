import axios from "axios";

export default axios.create({
  //baseURL: "http://localhost:8080/api", // local
  baseURL: "https://playoff-challenge-backend-d170a30e6d94.herokuapp.com/api", // deploy
  headers: {
    "Content-type": "application/json"
  }
});