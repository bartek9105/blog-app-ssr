import { PropsWithChildren } from "react";

type LayoutProps = PropsWithChildren<{}>;

const Layout = ({ children }: LayoutProps) => {
  return <div className="bg-gray-900">{children}</div>;
};

export default Layout;
