import { useRouter } from "next/router";
import LoginForm from "../../components/LoginForm";
import supabase from "../../config/supabase.config";

const LoginPage = () => {
  const router = useRouter();

  const signInWithEmail = async ({ email, password }: any) => {
    const { user, error } = await supabase.auth.signIn({
      email,
      password,
    });
    router.push("/");
  };
  return (
    <div className="text-white px-4 py-6">
      <h3 className="tracking-widest text-xl mb-4 font-bold">Login</h3>
      <span className="block text-sm text-gray-300 mb-12">
        Welcome back. Login to your account.
      </span>
      <LoginForm onSubmit={(values: any) => signInWithEmail(values)} />
    </div>
  );
};

export default LoginPage;
