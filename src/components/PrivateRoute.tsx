import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../hooks/AuthContext";
import Sidebar from "./Sidebar";

type Props = {
  children: React.ReactNode;
};

function PrivateRoute({ children }: Props) {
  const { user } = useContext(AuthContext);

  if (!user.token) return <Navigate to="/login" />;

  return (
    <div className="wrapper-page">
      <Sidebar />
      <div className="container">{children}</div>
    </div>
  );
}

export default PrivateRoute;
