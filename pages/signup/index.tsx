import Link from "next/link";
import { useRouter } from "next/router";
import { signUpWithEmail } from "../../api/auth/auth.api";
import AuthLayout from "../../components/AuthLayout";
import SignUpForm, { SignUpFormValues } from "../../components/SignUpForm";
import { routes } from "../../config/routes.config";

const title = "Sign Up";
const hint = "REgister your account";

const SignUpPage = () => {
  const router = useRouter();

  const signUp = async (values: SignUpFormValues) => {
    signUpWithEmail(values);
    router.push(routes.login());
  };

  return (
    <AuthLayout
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
            <a>Login</a>
          </Link>
        </span>
      </span>
    </AuthLayout>
  );
};

export default SignUpPage;
