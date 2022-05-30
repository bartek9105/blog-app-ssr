import Link from "next/link";
import { useRouter } from "next/router";
import { Home, Search, Bookmark } from "react-feather";
import { routes } from "../../config/routes.config";
import cn from "classnames";

const mobileNavItems = [
  {
    renderIcon: () => <Home />,
    href: routes.root(),
    ariaLabel: "Home",
  },
  {
    renderIcon: () => <Search />,
    href: routes.search(),
    ariaLabel: "Search posts",
  },
  {
    renderIcon: () => <Bookmark />,
    href: routes.saved(),
    ariaLabel: "Save post",
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
        {mobileNavItems.map(({ ariaLabel, renderIcon, href }, index) => (
          <Link href={href} key={index} passHref>
            <li className="cursor-pointer">
              <a
                className={pathname === href ? "text-white" : ""}
                aria-label={ariaLabel}
              >
                {renderIcon()}
              </a>
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNavbar;
