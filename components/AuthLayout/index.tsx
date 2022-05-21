import { PropsWithChildren } from "react";

type AuthLayoutProps = PropsWithChildren<{
  title: string;
  hint: string;
  renderForm: () => JSX.Element;
}>;

const AuthLayout = ({ title, hint, renderForm, children }: AuthLayoutProps) => {
  return (
    <div className="text-white px-4 py-6">
      <h3 className="tracking-wider text-3xl mb-4 font-bold">{title}</h3>
      <span className="block text-sm text-gray-400 mb-12">{hint}</span>
      <>
        {renderForm()}
        {children}
      </>
    </div>
  );
};

export default AuthLayout;
