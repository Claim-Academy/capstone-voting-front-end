import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import Home from "./routes/home";
import SignIn from "./routes/sign-in";
import { cuisineApi, userApi } from "./services";

const router = createBrowserRouter([
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
    async action({ request }) {
      const fd = await request.formData();
      await userApi.signIn(Object.fromEntries(fd));

      // * Redirect to home page
      return redirect("/");
    },
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
