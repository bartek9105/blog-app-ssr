import { PropsWithChildren } from "react";
import MobileNavbar from "../MobileNavbar";
import Navbar from "../Navbar";
import PostNavigation from "../PostNavigation";

type LayoutProps = PropsWithChildren<{
  displayPostNavigation?: boolean;
}>;

const Layout = ({ children, displayPostNavigation = true }: LayoutProps) => {
  return (
    <div className="bg-zinc-900 min-h-screen">
      <Navbar />
      {displayPostNavigation ? <PostNavigation /> : null}
      <div className="px-4 pt-6 pb-16 text-white">{children}</div>
      <MobileNavbar />
    </div>
  );
};

export default Layout;
