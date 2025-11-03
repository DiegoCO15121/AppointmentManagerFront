import { NavLink, type NavLinkRenderProps } from "react-router-dom";

type HeaderLinkProps = {
  text: string;
  style: (props: NavLinkRenderProps) => string;
  link: string;
};

export default function HeaderLink({ text, style, link }: HeaderLinkProps) {
  return (
    <NavLink to={link} className={(isActive) => style(isActive)}>
      {text}
    </NavLink>
  );
}
