import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="relative h-screen w-screen">
      <div className="fixed inset-0 bg-[url('/loginBackground.jpeg')] bg-cover bg-center bg-no-repeat blur-sm scale-110" />
      
      <div className="relative flex justify-center items-center mx-3.5 xl:mx-auto min-h-screen">
        <Outlet />
      </div>
    </div>
  );
}
