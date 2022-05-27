import Link from "next/link";
import { Home, Search, Bookmark } from "react-feather";
import { routes } from "../../config/routes.config";

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

const MobileNavbar = () => {
  return (
    <nav className="fixed left-0 right-0 bottom-0 bg-zinc-700 text-white px-12 py-4">
      <ul className="flex items-center justify-between">
        {mobileNavItems.map(({ renderIcon, href }, index) => (
          <Link href={href} key={index}>
            <a>
              <li className="cursor-pointer">{renderIcon()}</li>
            </a>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNavbar;
