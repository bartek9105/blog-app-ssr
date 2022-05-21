import LoginForm from "../../components/LoginForm";

const LoginPage = () => {
  return (
    <div className="text-white px-4 py-6">
      <h3 className="tracking-widest text-xl mb-4 font-bold">Login</h3>
      <span className="block text-sm text-gray-300 mb-12">
        Welcome back. Login to your account.
      </span>
      <LoginForm onSubmit={() => console.log("hello")} />
    </div>
  );
};

export default LoginPage;
