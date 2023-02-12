import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import AuthContext from "./context/auth";
import Home from "./routes/home";
import SignIn from "./routes/sign-in";
import { cuisineApi, userApi } from "./services";
import { getUserFromToken } from "./utils";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home msg="hi" />,
    loader() {
      return cuisineApi.index();
    },
  },
  {
    path: "/sign-in",
    element: <SignIn />,
    async action({ request }) {
      const fd = await request.formData();
      await userApi.signIn(Object.fromEntries(fd));

      // * Redirect to home page
      return redirect("/");
    },
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <AuthContext.Provider value={getUserFromToken()} />
    </RouterProvider>
  );
}

export default App;
