import { PropsWithChildren } from "react";

type LayoutProps = PropsWithChildren<{}>;

const Layout = ({ children }: LayoutProps) => {
  return <div className="p-4 bg-gray-900">{children}</div>;
};

export default Layout;
