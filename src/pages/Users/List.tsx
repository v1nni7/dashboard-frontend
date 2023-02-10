import { useCallback, useEffect, useState } from "react";
import { getUsersService } from "../../service/api";

type User = {
  id: number;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

function List() {
  const [users, setUsers] = useState([]);

  const getUsers = useCallback(async () => {
    try {
      const response = await getUsersService();

      if (response.status === 200) {
        setUsers(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Created At</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: User, index: number) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default List;
