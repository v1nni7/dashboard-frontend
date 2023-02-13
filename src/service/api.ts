import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

// TODO: Created a folder for types

type SignInProps = {
  email: string;
  password: string;
};

function getUsersService() {
  return api.get("/users/list", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
}

function signInService(data: SignInProps) {
  return api.post("/users/sign-in", data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
}

function deleteUserService(id: number) {
  return api.delete(`/users/delete/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
}

export { signInService, getUsersService, deleteUserService };
