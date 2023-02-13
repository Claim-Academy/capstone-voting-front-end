import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import AuthContext from "./context/auth";
import Home from "./routes/home";
import SignIn from "./routes/sign-in";
import { cuisineApi } from "./services";
import { getUserFromToken } from "./utils";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader() {
          return cuisineApi.index();
        },
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
    ],
  },
]);

function App() {
  const [user, setUser] = useState(getUserFromToken());

  return (
    <AuthContext.Provider value={[user, setUser]}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  );
}

export default App;
