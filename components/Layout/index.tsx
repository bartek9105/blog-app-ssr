import { PropsWithChildren } from "react";
import Navbar from "../Navbar";

type LayoutProps = PropsWithChildren<{}>;

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <div className="bg-zinc-900">{children}</div>
    </>
  );
};

export default Layout;
