import { Navigate, Outlet, useOutletContext } from "react-router-dom";
import type { UserType } from "../types";

export default function BossMiddleware() {
  const { user } = useOutletContext<{ user: UserType }>();

  if (user.userRole !== "university admin")
    return <Navigate to={"/404"} replace />;

  return <Outlet />;
}
