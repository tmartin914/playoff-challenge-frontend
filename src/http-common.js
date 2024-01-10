import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080/api",
  //baseURL: "https://playoff-challenge-backend-d170a30e6d94.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  }
});