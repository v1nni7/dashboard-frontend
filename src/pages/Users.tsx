import { useParams } from "react-router-dom";

import List from "./Users/List";
import Create from "./Users/Create";

function Users() {
  const { operation } = useParams();

  const userComponents = {
    list: <List />,
    create: <Create />,
  };

  return operation ? (
    (userComponents as Record<string, JSX.Element>)[operation] ? (
      (userComponents as Record<string, JSX.Element>)[operation]
    ) : (
      <>Página inexistente</>
    )
  ) : (
    <>
      <h1>Página inexistente</h1>
    </>
  );
}

export default Users;
