import Home from "../views/Home/Home";
import Login from '../views/Auth/Login'
import About from "../views/About/About";
const router = [
  {
    component: Home,
    path: "/",
  },
  {
    component: About,
    path: "/about",
  },
  {
    component: Login,
    path: "/login",
  },
];
export default router;
