import { Navigate } from "react-router-dom";
import { ReactChildrenProps } from "@types";
import { useAppSelector } from "@store/hooks";

export const RequireAuth = ({ children }: ReactChildrenProps) => {
  const user = useAppSelector((state) => state.auth.user);
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};
