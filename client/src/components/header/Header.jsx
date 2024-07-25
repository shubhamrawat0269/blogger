import { Outlet } from "react-router-dom";
import "./Header.css";
import NavbarWrapper from "./components/navbar/Navbar";

const Header = () => {
  return (
    <div className="workspaceWrapper">
      <NavbarWrapper />
      <Outlet />
    </div>
  );
};

export default Header;
