import { Navigate, Outlet, useOutletContext } from "react-router-dom";
import type { UserType } from "../types";

export default function AdminMiddleware() {
  const { user } = useOutletContext<{ user: UserType }>();

  if (user.userRole !== "system admin") return <Navigate to={"/404"} replace />;

  return <Outlet />;
}
