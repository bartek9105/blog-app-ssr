import { PropsWithChildren } from "react";
import Layout from "../Layout";
import Spinner from "../Spinner";

type AuthLayoutProps = PropsWithChildren<{
  title: string;
  hint: string;
  renderForm: () => JSX.Element;
  isLoading: boolean;
}>;

const AuthLayout = ({
  title,
  hint,
  renderForm,
  children,
  isLoading,
}: AuthLayoutProps) => {
  return (
    <Layout displayPostNavigation={false} className="lg:max-w-xl mx-auto">
      <h3 className="tracking-wider text-3xl mb-4 font-bold">{title}</h3>
      <span className="block text-sm text-gray-400 mb-12">{hint}</span>
      {isLoading ? (
        <Spinner className="mt-12" />
      ) : (
        <>
          {renderForm()}
          {children}
        </>
      )}
    </Layout>
  );
};

export default AuthLayout;
