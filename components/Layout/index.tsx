import { PropsWithChildren } from "react";
import MobileNavbar from "../MobileNavbar";
import Navbar from "../Navbar";
import PostNavigation from "../PostNavigation";
import cn from "classnames";

type LayoutProps = PropsWithChildren<{
  displayPostNavigation?: boolean;
  className?: string;
}>;

const Layout = ({
  children,
  displayPostNavigation = true,
  className,
}: LayoutProps) => {
  return (
    <div className="bg-zinc-900 min-h-screen">
      <Navbar />
      {displayPostNavigation ? <PostNavigation /> : null}
      <div className={cn("px-4 pt-6 pb-16 text-white", className)}>
        {children}
      </div>
      <MobileNavbar className="lg:hidden" />
    </div>
  );
};

export default Layout;
