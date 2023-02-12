import { createContext } from "react";
import { getUserFromToken } from "../utils";

export default createContext(getUserFromToken());
