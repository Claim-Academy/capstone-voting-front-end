import { TableBody, TableCell, TableRow } from "@mui/material";
import PropTypes from "prop-types";

export default function UsersTable({ users }) {
  return (
    <TableBody>
      {users.map((user) => (
        <TableRow key={user.id}>
          <TableCell>{user.id}</TableCell>
          <TableCell>{user.username}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}

UsersTable.propTypes = {
  users: PropTypes.arrayOf(
    // We control the properties of the user object
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
    })
  ).isRequired,
};
