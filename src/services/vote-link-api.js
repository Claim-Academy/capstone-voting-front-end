import ky from "ky";

const { VITE_BASE_URL } = import.meta.env;

export default {
  create(candidate) {
    return ky.post(`${VITE_BASE_URL}/vote-links`, {
      json: candidate,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  },
};
