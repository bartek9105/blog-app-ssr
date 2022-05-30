import Button from "../Button";
import { Bookmark, LogIn, Search } from "react-feather";
import Logo from "../Logo";
import Link from "next/link";
import supabase from "../../config/supabase.config";
import { Edit } from "react-feather";
import { useRouter } from "next/router";
import UserDropdown from "../UserDropdown";
import { useState } from "react";
import { signOut } from "../../api/auth/auth.api";
import { toast } from "react-toastify";
import { routes } from "../../config/routes.config";

const Navbar = () => {
  const user = supabase.auth.user();
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSignOut = () => {
    signOut();
    toast.success("Successfuly logged out");
  };

  return (
    <nav className="text-gray-300 flex justify-between items-center p-4 bg-zinc-800">
      <Logo onClick={() => router.push(routes.root())} />
      <div className="flex items-center gap-4">
        <Link href={routes.search()} passHref>
          <a aria-label="Search posts">
            <Search />
          </a>
        </Link>
        {user ? (
          <div className="flex items-center gap-4">
            <Link href={routes.saved()} passHref>
              <a aria-label="Save post">
                <Bookmark />
              </a>
            </Link>
            <span
              className="cursor-pointer relative flex items-center gap-1 text-yellow-400 font-bold text-sm"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              {user.user_metadata.name}
              {isDropdownOpen ? (
                <div className="absolute top-8 -left-4">
                  <UserDropdown onLogout={() => handleSignOut()} />
                </div>
              ) : null}
            </span>
            <Link href={routes.post.new()} passHref>
              <a aria-label="Create new post">
                <Button variant="primary">
                  <Edit size={16} />
                </Button>
              </a>
            </Link>
          </div>
        ) : (
          <Link href={routes.login()} passHref>
            <a aria-label="Login">
              <Button variant="primary">
                <LogIn />
                Login
              </Button>
            </a>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
