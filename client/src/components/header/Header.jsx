import { Outlet } from "react-router-dom";
import { Button } from "flowbite-react";
const Header = () => {
  return (
    <div>
      <h2>Header</h2>
      <Button>Click me</Button>
      <Outlet />
    </div>
  );
};

export default Header;
