import HeaderLink from "../links/HeaderLink";
import { GiHamburgerMenu } from "@/icons/index";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { NavLink, type NavLinkRenderProps } from "react-router-dom";
import type { LinkType } from "@/types/index";
import { linkUserIcons } from "@/data/user";
import { linkBossIcons } from "@/data/boss";

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

  const linkIcons = /user/.test(currentLocation)
    ? linkUserIcons
    : /boss/.test(currentLocation) ? linkBossIcons : []

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
      </nav>

      <div className="md:hidden">
        <Menu>
          <MenuButton>
            <GiHamburgerMenu className="w-6 h-6 text-white hover:cursor-pointer" />
          </MenuButton>

          <MenuItems
            transition
            anchor="bottom end"
            className="mt-5 origin-top-right rounded-lg border-3 border-blue-900 bg-blue-900/60 backdrop-blur-3xl 
            space-y-1 p-2 text-sm text-white uppercase font-bold transition duration-100 ease-out [--anchor-gap:--spacing(1)] 
            focus:outline-none data-closed:scale-95 data-closed:opacity-0 w-60"
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
                    <p>{link.name}</p>
                    <Icon />
                  </NavLink>
                </MenuItem>
              );
            })}
          </MenuItems>
        </Menu>
      </div>
    </>
  );
}
