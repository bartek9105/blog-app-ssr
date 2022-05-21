import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { signInWithEmail } from "../../api/auth/auth.api";
import AuthLayout from "../../components/AuthLayout";
import LoginForm, { LoginFormValues } from "../../components/LoginForm";
import { routes } from "../../config/routes.config";

const title = "Login";
const hint = "Welcome back. Login to your account.";

const LoginPage = () => {
  const router = useRouter();

  const signIn = async (values: LoginFormValues) => {
    signInWithEmail(values);
    toast.success("Successfuly logged in");
    router.push(routes.root());
  };

  return (
    <AuthLayout
      title={title}
      hint={hint}
      renderForm={() => (
        <LoginForm onSubmit={(values: LoginFormValues) => signIn(values)} />
      )}
    >
      <span className="block text-sm text-gray-400 mb-12 flex justify-between mt-12">
        Dont have an account?
        <span className="text-yellow-400">
          <Link href={routes.signup()}>
            <a>Sign Up</a>
          </Link>
        </span>
      </span>
    </AuthLayout>
  );
};

export default LoginPage;
