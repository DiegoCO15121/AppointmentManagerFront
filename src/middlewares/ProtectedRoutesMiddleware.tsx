
import { useCurrentUser } from "@/hooks/useCurrentUser";
import SpinnerView from "@/views/loading/SpinnerView";
import { Navigate, Outlet, } from "react-router-dom";

export default function ProtectedRoutesMiddleware() {
  const { data: user, isLoading, isError } = useCurrentUser();

  if(isLoading) return <SpinnerView />

  if(isError || !user ) return <Navigate to={"/login"} replace/>

  if(user) return <Outlet context={{user}} />;
}
