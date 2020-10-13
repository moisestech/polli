import { NavLink } from "react-router-dom";
import Logo from "../Logo";

export default function Nav() {
  return (
    <nav className="nav">
      <Logo />
      <NavLink to="/" exact activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/leaderboard" exact activeClassName="active">
        Leaderboard
      </NavLink>
      <NavLink to="/add" exact activeClassName="active">
        Add Poll
      </NavLink>
    </nav>
  );
}
