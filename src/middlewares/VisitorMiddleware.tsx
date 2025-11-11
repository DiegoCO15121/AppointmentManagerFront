import { Navigate, Outlet, useOutletContext } from "react-router-dom";
import type { UserType } from "../types";

export default function VisitorMiddleware() {
  const { user } = useOutletContext<{ user: UserType }>();

  if (user.userRole !== "visitor") return <Navigate to={"/404"} replace />;

  return <Outlet />;
}
