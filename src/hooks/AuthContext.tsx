import { createContext, Dispatch, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";

type TCreateContext = {
  user: {
    id: number;
    role: number;
    token: string;
  };
  setUser: Dispatch<
    SetStateAction<{
      id: number;
      role: number;
      token: string;
    }>
  >;
  logout: () => void;
};

type TUserStateData = {
  id: number;
  role: number;
  token: string;
};

type ContextProviderProps = {
  children: React.ReactNode;
};

const AuthContext = createContext<TCreateContext>({
  user: {
    id: 0,
    role: 0,
    token: "",
  },
  setUser: () => {},
  logout: () => {},
});

function AuthContextProvider({ children }: ContextProviderProps) {
  const navigate = useNavigate();
  const isUserLogged = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") as string)
    : { id: 0, role: 0, token: "" };

  const [user, setUser] = useState<TUserStateData>(isUserLogged);

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextProvider };
