import { Header } from "./components";
import { Home, About, Dashboard, Projects, Signin, Signup } from "./pages";

const routes = [
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/sign-in",
        element: <Signin />,
      },
      {
        path: "/sign-up",
        element: <Signup />,
      },
    ],
  },
];

export default routes;
