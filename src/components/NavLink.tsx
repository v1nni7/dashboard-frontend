import { Link, useLocation } from "react-router-dom";

type NavLinkProps = {
  to: string;
  className?: string;
  children: React.ReactNode;
};

function NavLink({ to, children, className }: NavLinkProps) {
  const { pathname } = useLocation();

  return (
    <Link to={to} className={`${className} ${pathname === to ? "active" : ""}`}>
      {children}
    </Link>
  );
}

export default NavLink;
