import Link from "next/link";
import { useRouter } from "next/router";
import { Home, Search, Bookmark } from "react-feather";
import { routes } from "../../config/routes.config";
import cn from "classnames";

const mobileNavItems = [
  {
    renderIcon: () => <Home />,
    href: routes.root(),
  },
  {
    renderIcon: () => <Search />,
    href: routes.search(),
  },
  {
    renderIcon: () => <Bookmark />,
    href: routes.saved(),
  },
];

type MobileNavbarProps = {
  className: string;
};

const MobileNavbar = ({ className }: MobileNavbarProps) => {
  const { pathname } = useRouter();

  return (
    <nav
      className={cn(
        "fixed left-0 right-0 bottom-0 bg-zinc-700 text-gray-400 px-12 py-4",
        className
      )}
    >
      <ul className="flex items-center justify-between">
        {mobileNavItems.map(({ renderIcon, href }, index) => (
          <Link href={href} key={index} passHref>
            <a className={pathname === href ? "text-white" : ""}>
              <li className="cursor-pointer">{renderIcon()}</li>
            </a>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNavbar;
