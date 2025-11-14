import { type NavigateFunction } from "react-router-dom";

export const redirectUser = (role: string, navigate: NavigateFunction) => {
  if (role === "system admin") navigate("/admin-home", { replace: true });
  if (role === "university admin") navigate("/boss-home", { replace: true });
  if (role === "visitor") navigate("/user-home", { replace: true });
};
