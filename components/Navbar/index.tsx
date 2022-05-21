import Button from "../Button";
import { LogIn } from "react-feather";
import Logo from "../Logo";
import Link from "next/link";
import supabase from "../../config/supabase.config";

const Navbar = () => {
  const user = supabase.auth.user();

  return (
    <nav className="flex justify-between items-center p-4 bg-zinc-800">
      <Logo />
      {user ? (
        <>
          <Link href="/post/new">
            <a>
              <Button className="bg-yellow-400 px-2 py-1">Add New Post</Button>
            </a>
          </Link>
          <span className="text-yellow-400">{user.email}</span>
        </>
      ) : (
        <Link href="/login">
          <a>
            <Button className="bg-yellow-400 px-4 py-1 rounded flex gap-3 text-sm items-center">
              <LogIn />
              Login
            </Button>
          </a>
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
