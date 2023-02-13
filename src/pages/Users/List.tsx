import { useCallback, useEffect, useState } from "react";
import { BiEdit, BiTrash, BiShowAlt } from "react-icons/bi";
import dayjs from "dayjs";

import { deleteUserService, getUsersService } from "../../service/api";
import { toast } from "react-toastify";

type User = {
  id: number;
  name: string;
  email: string;
  lastLogin: string;
  createdAt: string;
  updatedAt: string;
};

function List() {
  const [users, setUsers] = useState([]);

  const storageUser = JSON.parse(localStorage.getItem("user") as string);

  const userRole = storageUser.role;

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

  const deleteUser = useCallback(
    async (id: number) => {
      try {
        const response = await deleteUserService(id);

        if (response.status === 200) {
          getUsers();
          toast.success("User deleted successfully!");
        }
      } catch (error: any) {
        toast.error(error.response.data);
      }
    },
    [users]
  );

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <>
      <table className="table-horizontal">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Last Login</th>
            <th scope="col">Created At</th>
            <th scope="col">Updated At</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: User, index: number) => (
            <tr key={index}>
              <th scope="row">{user.id}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{dayjs(user.lastLogin).format("DD/MM/YYYY HH:mm:ss")}</td>
              <td>{dayjs(user.createdAt).format("DD/MM/YY HH:mm:ss")}</td>
              <td>{dayjs(user.updatedAt).format("DD/MM/YY HH:mm:ss")}</td>
              <td>
                <BiShowAlt className="table-button-show" />
                {userRole > 2 && (
                  <>
                    <BiEdit className="table-button-edit" />
                    <BiTrash
                      className="table-button-delete"
                      onClick={() => deleteUser(user.id)}
                    />
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default List;
