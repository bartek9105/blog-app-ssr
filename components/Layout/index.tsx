import { PropsWithChildren } from "react";
import Navbar from "../Navbar";

type LayoutProps = PropsWithChildren<{}>;

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-zinc-900 min-h-screen">
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
