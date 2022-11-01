import Home from "../views/Home/Home";
import Login from '../views/Auth/Login'
import About from "../views/About/About";
import ForgotPass from "../views/Auth/ForgotPass";
const router = [
  {
    component: Home,
    layout:true,
    path: "/",
  },
  {
    component: About,
    layout:true,
    path: "/about",
  },
  // {
  //   component: Login,
  //   layout:false,
  //   path: "/auth",
  // },
  // {
  //   component: ForgotPass,
  //   layout:false,
  //   path: "/auth/forgot",
  // },
];
export default router;
