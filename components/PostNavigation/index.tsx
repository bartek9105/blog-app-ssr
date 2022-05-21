import Link from "next/link";
import { ArrowLeft } from "react-feather";

type PostNavigationProps = {
  onGoBack?: () => void;
};

const PostNavigation = ({ onGoBack }: PostNavigationProps) => {
  return (
    <div className="bg-zinc-700 p-3">
      <Link href="/">
        <a className="text-gray-400 text-sm flex items-center">
          <ArrowLeft className="mr-3" />
          <span>Back</span>
        </a>
      </Link>
    </div>
  );
};

export default PostNavigation;
