import Navbar from "@/components/general/navbar/Navbar";
import UserAsideBar from "@/components/user/UserAsideBar";
import { bossLinks } from "@/data/boss";
import { userLinks } from "@/data/user";
import { Outlet, useLocation } from "react-router-dom";

export default function AppLayout() {
  const sideBarUrls = ["/user-home"];
  const location = useLocation();
  const currentLocation = location.pathname;
  const regex = [/user/, /boss/];

  const isSidebarLayout = sideBarUrls.includes(currentLocation);
  const currentLinks = regex[0].test(currentLocation)
    ? userLinks
    : regex[1].test(currentLocation)
    ? bossLinks
    : [];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full bg-blue-900 py-3 px-6 md:px-20 flex justify-between z-20 items-center sticky top-0 backdrop-blur-lg">
        <img
          src="/logo.png"
          alt="LogoLaSalle"
          className="max-w-10 max-h-8 hover:cursor-pointer"
        />
        <Navbar links={currentLinks} currentLocation={currentLocation} />
      </header>

      <main className={`${isSidebarLayout && "md:mr-64"} grow`}>
        <div className="mx-auto max-w-7xl my-10 w-11/12">
          <Outlet />
        </div>
      </main>

      {isSidebarLayout && (
        <aside className="bg-blue-950 w-64 fixed right-0 top-0 h-full z-10 hidden md:block">
          {regex[0].test(currentLocation) && <UserAsideBar />}
        </aside>
      )}

      <footer className="w-full bg-blue-900 py-9 px-6 md:px-20 flex justify-between z-20 relative">
        <div className="flex flex-col gap-1 text-white text-sm">
          <p>Universidad La Salle Oaxaca</p>
          <p>Carretera a San Agustín #407, Santa Cruz Xoxocotlán</p>
          <p>Oaxaca C.P. 71230</p>
          <p>(951) 502 99 33 / 01 800 502 93 33</p>
        </div>

        <img
          src="/IMAGOTIPO_LASALLE_OAXACA.png"
          alt="laSalleOax"
          className="max-w-60 max-h-30 min-h-15 h-full"
        />
      </footer>
    </div>
  );
}
