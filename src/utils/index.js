export const getUserFromToken = () => {
  const token = localStorage.getItem("token");

  if (token) {
    // * Decode the token. Just the 'good stuff' - user.
    return atob(token.split(".")[1]);
  }

  return null;
};
