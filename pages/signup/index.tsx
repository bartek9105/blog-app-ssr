import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { signUpWithEmail } from "../../api/auth/auth.api";
import AuthLayout from "../../components/AuthLayout";
import SignUpForm, { SignUpFormValues } from "../../components/SignUpForm";
import { routes } from "../../config/routes.config";

const title = "Sign Up";
const hint = "Register your account";

const SignUpPage = () => {
  const router = useRouter();

  const { mutateAsync: signUp, isLoading } = useMutation(
    "signInMutationKey",
    (data: SignUpFormValues) => signUpWithEmail(data),
    {
      onSuccess: () => {
        toast.success("Successfuly signed up");
        router.push(routes.login());
      },
      onError: (error: any) => toast.error(`${error}`) as any,
    }
  );

  return (
    <>
      <Head>
        <title>Signup</title>
        <meta
          name="description"
          content="Signup to create your account in Feather blog to be able to create new posts as well as save your favourite ones and add comments to spark a discussion"
        />
      </Head>
      <AuthLayout
        isLoading={isLoading}
        title={title}
        hint={hint}
        renderForm={() => (
          <SignUpForm onSubmit={(values: SignUpFormValues) => signUp(values)} />
        )}
      >
        <span className="block text-sm text-gray-400 mb-12 flex justify-between mt-12">
          Already have an account?
          <span className="text-yellow-400">
            <Link href={routes.login()}>
              <a aria-label="Login">Login</a>
            </Link>
          </span>
        </span>
      </AuthLayout>
    </>
  );
};

export default SignUpPage;
