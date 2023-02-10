import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6NSwiaWF0IjoxNjc1MTI1MDk4LCJleHAiOjE2NzUyMTE0OTh9.Btr4ckVzLHCKXmW5LjVw-SdLw_SbM6wIisPRqZId7vk",
  },
});

function getUsersService() {
  return api.get("/users/list");
}

export { getUsersService };
