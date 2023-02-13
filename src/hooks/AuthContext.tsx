import { createContext, Dispatch, SetStateAction, useState } from "react";

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
});

function AuthContextProvider({ children }: ContextProviderProps) {
  const isUserLogged = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") as string)
    : { id: 0, role: 0, token: "" };

  const [user, setUser] = useState<TUserStateData>(isUserLogged);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextProvider };
