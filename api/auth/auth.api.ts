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
  const { error } = await supabase.auth.signUp(
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
  if (error) throw new Error((error as any).message);
};

export const signInWithEmail = async ({ email, password }: SignInConfig) => {
  const { error } = await supabase.auth.signIn({
    email,
    password,
  });
  if (error) throw new Error((error as any).message);
};

export const signOut = async () => {
  return await supabase.auth.signOut();
};
