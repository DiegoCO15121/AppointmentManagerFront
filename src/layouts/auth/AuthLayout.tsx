import { useCurrentUser } from "@/hooks/useCurrentUser";
import { Navigate, Outlet } from "react-router-dom";

export default function AuthLayout() {
  const { data: user } = useCurrentUser();

  if (user?.userRole === "visitor")
    return <Navigate to={"/user-home"} replace />;

  if (user?.userRole === "system admin")
    return <Navigate to={"/admin-home"} replace />;

  if (user?.userRole === "university admin")
    return <Navigate to={"/boss-home"} replace />;

  if (!user)
    return (
      <div className="relative h-screen w-screen">
        <div className="fixed inset-0 bg-[url('/loginBackground.jpeg')] bg-cover bg-center bg-no-repeat blur-sm scale-110" />

        <div className="relative flex justify-center items-center mx-3.5 xl:mx-auto min-h-screen">
          <Outlet />
        </div>
      </div>
    );
}
