import { Link } from "react-router-dom";

function NavLink({ props, children }: { props: any; children: any }) {
  return <Link {...props}>{children}</Link>;
}

export default NavLink;
