import HeaderLink from "../links/HeaderLink";
import { GiHamburgerMenu, IoLogOut } from "@/icons/index";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { NavLink, type NavLinkRenderProps } from "react-router-dom";
import type { LinkType } from "@/types/index";
import { linkUserIcons } from "@/data/user";
import { linkBossIcons } from "@/data/boss";
import { linkAdminIcons } from "@/data/admin";
import { useLogOut } from "@/hooks/auth/useLogOut";

type NavbarProps = {
  links: LinkType[];
  currentLocation: string;
};

export default function Navbar({ links, currentLocation }: NavbarProps) {
  const navStyle = ({ isActive }: NavLinkRenderProps) => {
    return ` uppercase font-bold hover:bg-blue-800 bg-blue-900 rounded-lg text-center p-3 text-sm transition-colors duration-500 ${
      isActive ? "bg-white text-blue-900 hover:text-white" : "text-white"
    }`;
  };

  const { mutate } = useLogOut();

  const linkIcons = /user/.test(currentLocation)
    ? linkUserIcons
    : /boss/.test(currentLocation)
    ? linkBossIcons
    : linkAdminIcons;

  const handleLogOut = () => {
    mutate();
  };

  return (
    <>
      <nav className="hidden md:flex justify-between gap-3">
        {links.map((link) => (
          <HeaderLink
            key={link.name}
            text={link.name}
            style={navStyle}
            link={link.link}
          />
        ))}
        <button
          onClick={handleLogOut}
          className="uppercase font-bold hover:bg-blue-800 bg-blue-900 rounded-lg text-center p-3 text-sm 
        transition-colors duration-500 text-white"
        >
          Cerrar Sesión
        </button>
      </nav>

      <div className="md:hidden flex ">
        <Menu>
          <MenuButton>
            <GiHamburgerMenu className="w-6 h-6 text-white hover:cursor-pointer" />
          </MenuButton>

          <MenuItems
            transition
            anchor="bottom end"
            className="mt-6 rounded-lg border-3 border-blue-900 bg-blue-900/70  
            space-y-1 p-2 text-sm text-white uppercase font-bold transition duration-100 ease-out 
            focus:outline-none data-closed:scale-80 data-closed:opacity-0 w-60"
          >
            {links.map((link, index) => {
              const Icon = linkIcons[index];

              return (
                <MenuItem key={link.name}>
                  <NavLink
                    className={({ isActive }) =>
                      `group flex justify-between w-full items-center rounded-lg px-3 py-1.5 data-focus:bg-blue-900/60 ${
                        isActive ? "bg-blue-900/60" : ""
                      }`
                    }
                    to={link.link}
                  >
                    <p className="text-md">{link.name}</p>
                    <Icon />
                  </NavLink>
                </MenuItem>
              );
            })}

            <MenuItem>
              <button
                onClick={handleLogOut}
                className="group flex justify-between w-full items-center rounded-lg px-3 py-1.5 data-focus:bg-blue-900/60"
              >
                <p className="uppercase">Cerrar Sesión</p>
                <IoLogOut />
              </button>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </>
  );
}
