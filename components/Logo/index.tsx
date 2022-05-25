import { Feather } from "react-feather";

type LogoProps = {
  onClick?: () => void;
};

const Logo = ({ onClick }: LogoProps) => {
  return (
    <div
      className="text-white tracking-widest flex items-center gap-3 cursor-pointer font-bold"
      onClick={onClick}
    >
      <Feather className="text-yellow-400" />
      Feather
    </div>
  );
};
export default Logo;
