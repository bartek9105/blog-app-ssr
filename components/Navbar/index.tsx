import Button from "../Button";
import { LogIn } from "react-feather";
import Logo from "../Logo";
import Link from "next/link";
import supabase from "../../config/supabase.config";
import { Plus } from "react-feather";
import { useRouter } from "next/router";

const Navbar = () => {
  const user = supabase.auth.user();
  const router = useRouter();

  return (
    <nav className="flex justify-between items-center p-4 bg-zinc-800">
      <Logo onClick={() => router.push("/")} />
      {user ? (
        <div className="flex items-center gap-4">
          <span className="text-yellow-400 font-bold">
            {user.user_metadata.name}
          </span>
          <Link href="/post/new">
            <a>
              <Button variant="primary">
                <Plus />
              </Button>
            </a>
          </Link>
        </div>
      ) : (
        <Link href="/login">
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
