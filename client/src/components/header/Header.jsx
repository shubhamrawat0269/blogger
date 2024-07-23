import { Outlet } from "react-router-dom";
import NavbarWrapper from "./components/navbar/Navbar";

const Header = () => {
  return (
    <div>
      <NavbarWrapper />
      <Outlet />
    </div>
  );
};

export default Header;
