import { NavLink } from "react-router-dom";
import Logo from "../Logo";

export default function Nav() {
  return (
    <nav className="nav">
      <Logo />
      <NavLink to="/" exact actvieClassName="active">
        Home
      </NavLink>
      <NavLink to="/leaderboard" exact actvieClassName="active">
        Leaderboard
      </NavLink>
      <NavLink to="/add" exact actvieClassName="active">
        Add Poll
      </NavLink>
    </nav>
  );
}
