import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { signInWithEmail } from "../../api/auth/auth.api";
import AuthLayout from "../../components/AuthLayout";
import LoginForm, { LoginFormValues } from "../../components/LoginForm";
import { routes } from "../../config/routes.config";

const title = "Login";
const hint = "Welcome back. Login to your account.";

const LoginPage = () => {
  const router = useRouter();

  const { mutateAsync: signIn, isLoading } = useMutation(
    "signInMutationKey",
    (data: LoginFormValues) => signInWithEmail(data),
    {
      onSuccess: () => {
        router.push(routes.root());
        toast.success("Successfuly logged in");
      },
      onError: (error: any) => toast.error(`${error}`) as any,
    }
  );

  return (
    <>
      <Head>
        <title>Login</title>
        <meta
          name="description"
          content="Login to Feather blog to create new posts, save your favourite posts and start a new discussion"
        />
      </Head>
      <AuthLayout
        isLoading={isLoading}
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
              <a aria-label="Login">Sign Up</a>
            </Link>
          </span>
        </span>
      </AuthLayout>
    </>
  );
};

export default LoginPage;
