import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import RequireAuth from "./components/require-auth";
import AuthContext from "./context/auth";
import Home from "./routes/home";
import ProtectedErrorBoundary from "./routes/protected-error-boundary";
import SignIn from "./routes/sign-in";
import SuperAdmin from "./routes/super-admin";
import User from "./routes/user";
import { cuisineApi, userApi } from "./services";
import { getUserFromToken } from "./utils";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    // Used by 'Home' and 'User' routes
    loader() {
      return cuisineApi.index();
    },
    id: "root",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },

      // Keep the '/super' route above the 'regular' user route
      {
        path: "/super",
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
        async action({ request }) {
          const fd = await request.formData();
          const id = fd.get("id");

          return userApi.destroy(id);
        },
      },
      {
        path: "/:id",
        element: (
          <RequireAuth>
            <User />
          </RequireAuth>
        ),
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
