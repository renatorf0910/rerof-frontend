import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home"

const routes = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/',
    element: <Home />,
  },
];

export default routes;
