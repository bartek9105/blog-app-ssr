import supabase from "../../config/supabase.config";

type SignUpConfig = {
  email: string;
  password: string;
  name: string;
};

type SignInConfig = Omit<SignUpConfig, "name">;

export const signUpWithEmail = async ({
  email,
  password,
  name,
}: SignUpConfig) => {
  return await supabase.auth.signUp(
    {
      email,
      password,
    },
    {
      data: {
        name,
      },
    }
  );
};

export const signInWithEmail = async ({ email, password }: SignInConfig) => {
  return await supabase.auth.signIn({
    email,
    password,
  });
};
