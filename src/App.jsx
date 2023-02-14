import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import RequireAuth from "./components/require-auth";
import AuthContext from "./context/auth";
import Home from "./routes/home";
import ProtectedErrorBoundary from "./routes/protected-error-boundary";
import SignIn from "./routes/sign-in";
import SuperAdmin from "./routes/super-admin";
import { cuisineApi, userApi } from "./services";
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
      {
        path: "/super-admin",
        element: (
          <RequireAuth>
            <SuperAdmin />
          </RequireAuth>
        ),
        errorElement: <ProtectedErrorBoundary />,

        // TODO: Avoid calling this if we aren't a super admin
        loader() {
          return userApi.index();
        },
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
