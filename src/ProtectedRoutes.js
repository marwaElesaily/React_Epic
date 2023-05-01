import { Navigate, Outlet } from "react-router-dom";
import SignIn from "./Pages/SignIn/SignIn";

const ProtectedRoutes = (props) => {
  const loggedIn = props.loggedIn;
  return loggedIn ? <Outlet /> : <SignIn />;
};

export default ProtectedRoutes;
