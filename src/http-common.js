import axios from "axios";
// Set backEnd API url
export default axios.create({
  baseURL: "http://localhost:8083",
  headers: {
    "Content-type": "application/json"
  }
});