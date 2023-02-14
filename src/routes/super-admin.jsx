import { Table } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import UsersTable from "../components/users-table";

export default function SuperAdmin() {
  const users = useLoaderData();

  return (
    <>
      <header className="px-4 text-center">
        <h1>Welcome, Super Admin 👑</h1>
        <h2>Users</h2>
      </header>
      <Table className="px-4">
        <UsersTable users={users} />
      </Table>
    </>
  );
}
