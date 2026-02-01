import { Navigate, Outlet, useLocation } from "react-router-dom";
import { isLoggedIn } from "./auth";

function ProtectedRoute() {
  const location = useLocation();

  if (!isLoggedIn()) {
    // send user to login, but remember where they were trying to go
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
