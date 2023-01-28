import Sidebar from "./Sidebar";

type Props = {
  children: React.ReactNode;
};

function PrivateRoute({ children }: Props) {
  return (
    <div className="wrapper-page">
      <Sidebar />
      <div className="container">{children}</div>
    </div>
  );
}

export default PrivateRoute;
