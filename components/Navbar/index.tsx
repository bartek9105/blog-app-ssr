import Button from "../Button";
import { LogIn } from "react-feather";
import Logo from "../Logo";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-zinc-800">
      <Logo />
      <Button className="bg-yellow-400 px-4 py-1 rounded flex gap-3 text-sm items-center">
        <LogIn />
        Login
      </Button>
    </nav>
  );
};

export default Navbar;
