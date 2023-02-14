import ky from "ky";

const { VITE_BASE_URL } = import.meta.env;

export default {
  index() {
    return ky
      .post(`${VITE_BASE_URL}/users/super`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .json();
  },
  signIn({ username, password, isRegistering }) {
    return ky
      .post(`${VITE_BASE_URL}/users/${isRegistering ? "register" : "login"}`, {
        json: { username, password },
      })
      .json();
  },
};
