import { Navigate } from "react-router-dom";

export const RequireAuth = ({ children }) => {
  const auth = sessionStorage.getItem("user");
  if (!auth) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};
