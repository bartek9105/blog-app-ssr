import Button from "../Button";
import { ArrowDown, LogIn, User } from "react-feather";
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
    <nav className="flex justify-between items-center p-4 bg-zinc-800">
      <Logo onClick={() => router.push(routes.root())} />
      {user ? (
        <div className="flex items-center gap-4">
          <span
            className="relative flex items-center gap-1 text-yellow-400 font-bold text-sm"
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
            <a>
              <Button variant="primary">
                <Edit size={16} />
              </Button>
            </a>
          </Link>
        </div>
      ) : (
        <Link href={routes.login()} passHref>
          <a>
            <Button variant="primary">
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
