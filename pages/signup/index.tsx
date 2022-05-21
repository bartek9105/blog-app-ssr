import SignUpForm from "../../components/SignUpForm";
import supabase from "../../config/supabase.config";

const SignUpPage = () => {
  const signInWithEmail = async ({ email, password }: any) => {
    const { user, error } = await supabase.auth.signUp({
      email,
      password,
    });
    console.log(user, error);
  };

  return (
    <div className="text-white px-4 py-6">
      <h3 className="tracking-widest text-xl mb-4 font-bold">Signup</h3>
      <span className="block text-sm text-gray-300 mb-12">
        Welcome back. Login to your account.
      </span>
      <SignUpForm onSubmit={(values: any) => signInWithEmail(values)} />
    </div>
  );
};

export default SignUpPage;
